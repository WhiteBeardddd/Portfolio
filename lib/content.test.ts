import { existsSync, readFileSync } from "node:fs"
import path from "node:path"
import { describe, expect, it } from "vitest"
import { certificates, getProject, isExternal, projects, securityProjects } from "./data"

/*
 * Validation tests for the content model. They run before any build and fail fast when
 * a case study is missing a STAR section, a team section, or points at a file that is not
 * in /public. tools/check-links.mjs covers the rendered site and external URLs.
 */

const publicDir = path.join(process.cwd(), "public")
const publicPath = (href: string) => path.join(publicDir, decodeURI(href.split("#")[0]))

/** Reads the pixel size from a WebP header (VP8, VP8L, VP8X), so gallery sizes cannot drift. */
function webpSize(file: string): [number, number] {
  const b = readFileSync(file)
  const chunk = b.toString("ascii", 12, 16)
  if (chunk === "VP8X") return [1 + b.readUIntLE(24, 3), 1 + b.readUIntLE(27, 3)]
  if (chunk === "VP8L") {
    const bits = b.readUInt32LE(21)
    return [1 + (bits & 0x3fff), 1 + ((bits >> 14) & 0x3fff)]
  }
  return [b.readUInt16LE(26) & 0x3fff, b.readUInt16LE(28) & 0x3fff]
}

const allLinks = [
  ...projects.flatMap((p) => [p.image, ...(p.links ?? []).map((l) => l.href), ...(p.documents ?? []).map((d) => d.href)]),
  ...projects.flatMap((p) => (p.gallery ?? []).map((g) => g.src)),
  ...certificates.flatMap((c) => [c.image, c.url]),
]

describe("content model", () => {
  it("uses unique, URL-safe slugs", () => {
    for (const list of [projects, certificates]) {
      const slugs = list.map((item) => item.slug)
      expect(new Set(slugs).size).toBe(slugs.length)
      for (const slug of slugs) expect(slug).toMatch(/^[a-z0-9]+(-[a-z0-9]+)*$/)
    }
  })

  it.each(projects.map((p) => [p.slug, p] as const))("project %s has a complete STAR story and toolbox", (_, p) => {
    expect(p.summary.length).toBeGreaterThan(40)
    expect(p.star.situation.trim()).not.toBe("")
    expect(p.star.task.trim()).not.toBe("")
    expect(p.star.action.length).toBeGreaterThan(0)
    expect(p.star.result.length).toBeGreaterThan(0)
    expect(p.toolbox.length).toBeGreaterThan(0)
    for (const t of p.toolbox) {
      expect(t.tool.trim()).not.toBe("")
      expect(t.problem.trim()).not.toBe("")
    }
  })

  it.each(projects.map((p) => [p.slug, p] as const))("project %s has the team section its role needs", (_, p) => {
    if (p.teamRole === "Leader") {
      expect(p.leadership?.length ?? 0).toBeGreaterThan(0)
      expect(p.contribution).toBeUndefined()
    } else if (p.teamRole === "Member") {
      expect(p.contribution?.length ?? 0).toBeGreaterThan(0)
      expect(p.leadership).toBeUndefined()
    } else {
      expect(p.leadership).toBeUndefined()
      expect(p.contribution).toBeUndefined()
    }
  })

  it.each(certificates.map((c) => [c.slug, c] as const))("certificate %s has a STAR story and skills", (_, c) => {
    expect(c.star.action.length).toBeGreaterThan(0)
    expect(c.star.result.length).toBeGreaterThan(0)
    expect(c.skills.length).toBeGreaterThan(0)
  })

  it("only relates certificates to projects that exist", () => {
    for (const c of certificates) {
      for (const slug of c.relatedProjects ?? []) expect(getProject(slug), `${c.slug} -> ${slug}`).toBeDefined()
    }
  })
})

describe("homepage featured work", () => {
  it("features every Security-tagged project and nothing else", () => {
    const expected = projects.filter((p) => p.category === "Security").map((p) => p.slug)
    expect(securityProjects.map((p) => p.slug)).toEqual(expected)
    expect(expected.length).toBeGreaterThan(0)
  })
})

describe("link targets", () => {
  it.each([...new Set(allLinks.filter((href) => href.startsWith("/")))])("%s exists in /public", (href) => {
    expect(existsSync(publicPath(href))).toBe(true)
  })

  it("uses absolute https URLs for every external link", () => {
    for (const href of allLinks.filter((h) => !h.startsWith("/"))) {
      expect(isExternal(href), href).toBe(true)
      expect(href.startsWith("https://"), href).toBe(true)
    }
  })
})

describe("evidence gallery", () => {
  const shots = projects.flatMap((p) => (p.gallery ?? []).map((g) => [p.slug, g] as const))

  it.each(shots.map(([slug, g]) => [`${slug} ${path.basename(g.src)}`, g] as const))(
    "%s has alt text, a caption and its real pixel size",
    (_, g) => {
      expect(g.alt.trim().length).toBeGreaterThan(10)
      expect(g.caption.trim()).not.toBe("")
      expect(g.src.endsWith(".webp")).toBe(true)
      expect(webpSize(publicPath(g.src))).toEqual([g.width, g.height])
    }
  )
})
