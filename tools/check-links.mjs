#!/usr/bin/env node
// Crawls the built portfolio and reports broken links.
//
// Responsibility: prove that every internal page, asset (/images, /files,
// /_next) and in-page #anchor reachable from "/" resolves, and optionally that
// every external URL still answers. Dependency free (Node 22 fetch).
//
// Exit code: 1 when any internal link is broken or (with --external) any
// external link returns a hard failure such as 404/410/DNS error.

import { spawn } from "node:child_process"
import { existsSync } from "node:fs"
import path from "node:path"
import process from "node:process"

const args = process.argv.slice(2)
const flag = (name) => args.includes(`--${name}`)
const option = (name, fallback) => {
  const i = args.indexOf(`--${name}`)
  return i >= 0 && args[i + 1] ? args[i + 1] : fallback
}

const port = Number(option("port", "3100"))
const base = new URL(option("base", `http://localhost:${port}`))
const checkExternal = flag("external")
const serve = !flag("no-serve")
const timeoutMs = Number(option("timeout", "10000"))

// Third party sites that block bots answer with these; report, do not fail.
const UNVERIFIABLE = new Set([401, 403, 405, 429, 999])

// Hosts verified by hand to render valid pages while answering HTTP 404
// (client-rendered apps). Reported as unverified instead of broken.
// share.zertify.zuitt.co: checked in a real browser on 2026-11-24, certificate renders.
const SOFT_404_HOSTS = new Set(["share.zertify.zuitt.co"])

const pages = new Map() // url -> { status, ids:Set<string> }
const links = new Map() // url -> Set<sourcePage>
const results = new Map() // url -> { ok, status, note }

function record(url, from) {
  if (!links.has(url)) links.set(url, new Set())
  links.get(url).add(from)
}

function decodeEntities(value) {
  return value.replace(/&amp;/g, "&").replace(/&#x27;|&#39;/g, "'").replace(/&quot;/g, '"')
}

function extract(html, pageUrl) {
  const found = []
  const attr = /\s(?:href|src)=("([^"]*)"|'([^']*)')/g
  for (const m of html.matchAll(attr)) found.push(m[2] ?? m[3])
  const srcset = /\ssrcset=("([^"]*)"|'([^']*)')/g
  for (const m of html.matchAll(srcset)) {
    for (const part of (m[2] ?? m[3]).split(",")) {
      const candidate = part.trim().split(/\s+/)[0]
      if (candidate) found.push(candidate)
    }
  }
  const out = []
  for (const raw of found) {
    const value = decodeEntities(raw.trim())
    if (!value || value.startsWith("data:") || value.startsWith("javascript:")) continue
    if (/^(mailto|tel|sms):/i.test(value)) continue
    try {
      out.push(new URL(value, pageUrl))
    } catch {
      out.push({ invalid: value })
    }
  }
  return out
}

function idsIn(html) {
  const ids = new Set()
  for (const m of html.matchAll(/\sid=("([^"]*)"|'([^']*)')/g)) ids.add(m[2] ?? m[3])
  return ids
}

async function request(url, method = "GET") {
  const controller = new AbortController()
  const timer = setTimeout(() => controller.abort(), timeoutMs)
  try {
    const res = await fetch(url, {
      method,
      redirect: "follow",
      signal: controller.signal,
      headers: { "user-agent": "portfolio-link-check/1.0", accept: "text/html,*/*" },
    })
    return res
  } finally {
    clearTimeout(timer)
  }
}

const isInternal = (u) => u.origin === base.origin
const isPage = (u) => isInternal(u) && !u.pathname.startsWith("/_next/") && !path.extname(u.pathname)

async function crawl() {
  const queue = [new URL("/", base).href]
  const seen = new Set(queue)
  while (queue.length) {
    const href = queue.shift()
    const res = await request(href).catch((error) => ({ error }))
    if (res.error) {
      pages.set(href, { status: 0, ids: new Set() })
      results.set(href, { ok: false, status: 0, note: res.error.message })
      continue
    }
    const html = (res.headers.get("content-type") ?? "").includes("text/html") ? await res.text() : ""
    pages.set(href, { status: res.status, ids: idsIn(html) })
    results.set(href, { ok: res.ok, status: res.status })
    for (const target of extract(html, href)) {
      if (target.invalid) {
        record(`invalid:${target.invalid}`, href)
        continue
      }
      const key = target.href
      record(key, href)
      const noHash = new URL(key)
      noHash.hash = ""
      if (isPage(noHash) && !seen.has(noHash.href)) {
        seen.add(noHash.href)
        queue.push(noHash.href)
      }
    }
  }
}

async function checkAsset(url) {
  if (results.has(url)) return
  let res = await request(url, "HEAD").catch((error) => ({ error }))
  if (res.error || res.status === 405 || res.status === 404) {
    // Some hosts reject HEAD or answer it differently; confirm with GET.
    res = await request(url, "GET").catch((error) => ({ error }))
  }
  if (res.error) {
    results.set(url, { ok: false, status: 0, note: res.error.name === "AbortError" ? "timeout" : res.error.message })
  } else {
    results.set(url, { ok: res.ok, status: res.status })
    res.body?.cancel?.()
  }
}

async function pool(items, size, fn) {
  const queue = [...items]
  await Promise.all(
    Array.from({ length: size }, async () => {
      while (queue.length) await fn(queue.shift())
    })
  )
}

async function waitForServer(child) {
  const deadline = Date.now() + 60_000
  while (Date.now() < deadline) {
    if (child.exitCode !== null) throw new Error(`next start exited with code ${child.exitCode}`)
    try {
      const res = await request(base.href)
      if (res.status < 500) return
    } catch {
      /* not up yet */
    }
    await new Promise((r) => setTimeout(r, 500))
  }
  throw new Error(`server did not answer at ${base.href} within 60s`)
}

async function main() {
  let child = null
  if (serve) {
    if (!existsSync(".next/BUILD_ID")) {
      console.error("No production build found. Run `npm run build` first.")
      process.exit(2)
    }
    const nextBin = path.join("node_modules", "next", "dist", "bin", "next")
    child = spawn(process.execPath, [nextBin, "start", "-p", String(port)], { stdio: "ignore" })
    await waitForServer(child)
  }

  try {
    await crawl()

    const internal = []
    const external = []
    const anchors = []
    for (const url of links.keys()) {
      if (url.startsWith("invalid:")) continue
      const u = new URL(url)
      if (isInternal(u)) {
        if (u.hash && isPage(u)) anchors.push(u)
        const noHash = new URL(url)
        noHash.hash = ""
        internal.push(noHash.href)
      } else if (/^https?:$/.test(u.protocol)) {
        external.push(url)
      }
    }

    await pool([...new Set(internal)], 8, checkAsset)
    if (checkExternal) await pool([...new Set(external)], 6, checkAsset)

    const broken = []
    const unverified = []
    for (const [url, from] of links) {
      if (url.startsWith("invalid:")) {
        broken.push({ url: url.slice(8), status: "invalid URL", from })
        continue
      }
      const u = new URL(url)
      const noHash = new URL(url)
      noHash.hash = ""
      const internalLink = isInternal(u)
      if (!internalLink && !checkExternal) continue
      const result = results.get(internalLink ? noHash.href : url)
      if (!result) continue
      if (!result.ok) {
        const soft =
          !internalLink && (UNVERIFIABLE.has(result.status) || (result.status === 404 && SOFT_404_HOSTS.has(u.hostname)))
        ;(soft ? unverified : broken).push({ url, status: result.status || result.note, from })
      }
    }
    for (const u of anchors) {
      const noHash = new URL(u.href)
      noHash.hash = ""
      const page = pages.get(noHash.href)
      const id = decodeURIComponent(u.hash.slice(1))
      if (page && page.status < 400 && id && !page.ids.has(id)) {
        broken.push({ url: u.href, status: `missing #${id}`, from: links.get(u.href) })
      }
    }

    const rel = (href) => href.replace(base.origin, "")
    console.log(`Crawled ${pages.size} pages, checked ${results.size} URLs` + (checkExternal ? " (external included)" : " (internal only)"))
    for (const item of unverified) {
      console.log(`  unverified  ${item.status}  ${item.url}\n              on ${[...item.from].map(rel).join(", ")}`)
    }
    for (const item of broken) {
      console.log(`  BROKEN      ${item.status}  ${rel(item.url)}\n              on ${[...item.from].map(rel).join(", ")}`)
    }
    if (broken.length) {
      console.log(`\n${broken.length} broken link(s).`)
      process.exitCode = 1
    } else {
      console.log(`\nNo broken links.${unverified.length ? ` ${unverified.length} external link(s) could not be verified automatically.` : ""}`)
    }
  } finally {
    child?.kill()
  }
}

main().catch((error) => {
  console.error(error)
  process.exit(2)
})
