import Link from "next/link"
import { isExternal, type Link as LinkItem, type Metric, type Star, type ToolUse } from "@/lib/data"

/* Server-rendered building blocks shared by the project and certificate detail pages. */

export function Breadcrumbs({ items }: { items: { label: string; href?: string }[] }) {
  return (
    <nav aria-label="Breadcrumb" className="mb-8">
      <ol className="flex flex-wrap items-center gap-x-2 gap-y-1 font-mono text-xs text-subtle">
        {items.map((item, i) => (
          <li key={item.label} className="flex items-center gap-2">
            {i > 0 && <span aria-hidden>/</span>}
            {item.href ? (
              <Link href={item.href} className="transition-colors hover:text-accent">
                {item.label}
              </Link>
            ) : (
              <span aria-current="page" className="line-clamp-1 text-muted">
                {item.label}
              </span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  )
}

/** Primary and secondary links (repo, demo, report). The first one is the filled blue action. */
export function ActionLinks({ links, primaryLabel }: { links: LinkItem[]; primaryLabel?: string }) {
  if (links.length === 0) return null
  return (
    <div className="flex flex-wrap gap-3">
      {links.map((link, i) => {
        const external = isExternal(link.href)
        const isFile = link.href.startsWith("/files/")
        return (
          <a
            key={link.href + link.label}
            href={link.href}
            target={external || isFile ? "_blank" : undefined}
            rel={external || isFile ? "noopener noreferrer" : undefined}
            className={
              i === 0
                ? "inline-flex items-center gap-2 rounded-full bg-accent-strong px-5 py-2.5 text-sm font-semibold text-white shadow-lg shadow-accent-strong/25 transition-colors hover:bg-accent-strong-hover"
                : "inline-flex items-center gap-2 rounded-full border border-line px-5 py-2.5 text-sm font-semibold text-fg transition-colors hover:border-accent hover:text-accent"
            }
          >
            {i === 0 && primaryLabel ? primaryLabel : link.label}
            <span aria-hidden>{external ? "↗" : isFile ? "↓" : "→"}</span>
          </a>
        )
      })}
    </div>
  )
}

export function MetricStrip({ metrics }: { metrics: Metric[] }) {
  if (metrics.length === 0) return null
  return (
    <dl className="grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-line bg-line lg:grid-cols-4">
      {metrics.map((m) => (
        <div key={m.label} className="bg-panel px-5 py-5">
          <dt className="sr-only">{m.label}</dt>
          <dd>
            <span className="block font-mono text-2xl font-bold tracking-tight text-accent sm:text-3xl">{m.value}</span>
            <span className="mt-1 block text-xs leading-snug text-muted sm:text-sm">{m.label}</span>
          </dd>
        </div>
      ))}
    </dl>
  )
}

export function SectionTitle({ id, eyebrow, children }: { id: string; eyebrow?: string; children: React.ReactNode }) {
  return (
    <div className="mb-5">
      {eyebrow && <p className="mb-2 font-mono text-[11px] uppercase tracking-[0.2em] text-accent">{eyebrow}</p>}
      <h2 id={id} className="scroll-mt-28 text-2xl font-bold tracking-tight text-fg sm:text-3xl">
        {children}
      </h2>
    </div>
  )
}

const starSteps = [
  { key: "situation", letter: "S", label: "Situation" },
  { key: "task", letter: "T", label: "Task" },
  { key: "action", letter: "A", label: "Action" },
  { key: "result", letter: "R", label: "Result" },
] as const

/** The STAR story as a vertical timeline: Situation and Task as prose, Action and Result as lists. */
export function StarStory({ star }: { star: Star }) {
  return (
    <ol className="relative space-y-8 border-l border-line pl-8 sm:pl-10">
      {starSteps.map((step) => {
        const value = star[step.key]
        return (
          <li key={step.key} className="relative">
            <span
              aria-hidden
              className={`absolute -left-[49px] top-0 grid h-8 w-8 place-items-center rounded-full border font-mono text-sm font-bold sm:-left-[57px] ${
                step.key === "result"
                  ? "border-accent-strong bg-accent-strong text-white"
                  : "border-accent/40 bg-ink text-accent"
              }`}
            >
              {step.letter}
            </span>
            <h3 id={step.key} className="scroll-mt-28 text-sm font-semibold uppercase tracking-wider text-fg">
              {step.label}
            </h3>
            {typeof value === "string" ? (
              <p className="measure mt-2 leading-relaxed text-muted">{value}</p>
            ) : (
              <ul className="measure mt-3 space-y-2.5">
                {value.map((item) => (
                  <li key={item} className="flex gap-3 leading-relaxed text-muted">
                    {step.key === "result" ? (
                      <svg aria-hidden className="mt-1 h-4 w-4 shrink-0 text-accent" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth={2}>
                        <path d="M3 8.5 6.5 12 13 4.5" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    ) : (
                      <span aria-hidden className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent/70" />
                    )}
                    <span className={step.key === "result" ? "text-fg/90" : undefined}>{item}</span>
                  </li>
                ))}
              </ul>
            )}
          </li>
        )
      })}
    </ol>
  )
}

/** "I used <tool> to solve <problem>." */
export function Toolbox({ tools }: { tools: ToolUse[] }) {
  return (
    <ul className="grid gap-3 sm:grid-cols-2">
      {tools.map((t) => (
        <li key={t.tool} className="rounded-xl border border-line bg-panel/70 p-4">
          <p className="font-mono text-sm font-semibold text-accent-soft">{t.tool}</p>
          <p className="mt-1.5 flex gap-2 text-sm leading-relaxed text-muted">
            <span aria-hidden className="text-accent">→</span>
            <span>
              <span className="sr-only">Problem it solved: </span>
              {t.problem}
            </span>
          </p>
        </li>
      ))}
    </ul>
  )
}

/** Bulleted list in a highlighted panel, used for the team section. */
export function CalloutList({ intro, items }: { intro: string; items: string[] }) {
  return (
    <div className="rounded-2xl border border-accent/25 bg-accent/[0.05] p-5 sm:p-6">
      <p className="text-sm text-muted">{intro}</p>
      <ul className="mt-4 space-y-3">
        {items.map((item) => (
          <li key={item} className="flex gap-3 leading-relaxed text-fg/90">
            <span aria-hidden className="mt-1 grid h-5 w-5 shrink-0 place-items-center rounded-full bg-accent-strong/80 text-white">
              <svg className="h-3 w-3" viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth={2}>
                <path d="M2 6.5 4.5 9 10 3" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </span>
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </div>
  )
}

/** Key facts for the sticky "At a glance" aside. */
export function FactList({ facts }: { facts: { label: string; value: React.ReactNode }[] }) {
  return (
    <dl className="divide-y divide-line">
      {facts.map((f) => (
        <div key={f.label} className="flex flex-col gap-1 py-3 first:pt-0 last:pb-0">
          <dt className="font-mono text-[10px] uppercase tracking-widest text-subtle">{f.label}</dt>
          <dd className="text-sm text-fg">{f.value}</dd>
        </div>
      ))}
    </dl>
  )
}

export function Chips({ items }: { items: string[] }) {
  return (
    <ul className="flex flex-wrap gap-1.5">
      {items.map((item) => (
        <li key={item} className="rounded-md border border-line bg-white/[0.03] px-2 py-0.5 font-mono text-[11px] text-muted">
          {item}
        </li>
      ))}
    </ul>
  )
}

/** Source documents the write-up is based on (Show Your Work). */
export function SourceList({ links }: { links: LinkItem[] }) {
  return (
    <ul className="space-y-2">
      {links.map((link) => {
        const external = isExternal(link.href)
        return (
          <li key={link.href + link.label}>
            <a
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center justify-between gap-3 rounded-lg border border-line px-3 py-2 text-sm text-muted transition-colors hover:border-accent/50 hover:text-accent-soft"
            >
              <span className="line-clamp-1">{link.label}</span>
              <span aria-hidden className="shrink-0 text-accent">
                {external ? "↗" : "↓"}
              </span>
            </a>
          </li>
        )
      })}
    </ul>
  )
}

export function PrevNext({
  prev,
  next,
  allHref,
  allLabel,
}: {
  prev: { title: string; href: string }
  next: { title: string; href: string }
  allHref: string
  allLabel: string
}) {
  return (
    <nav aria-label="More" className="mt-20 border-t border-line pt-8">
      <div className="grid gap-3 sm:grid-cols-2">
        <Link href={prev.href} className="group rounded-2xl border border-line p-5 transition-colors hover:border-accent/40">
          <span className="font-mono text-[11px] uppercase tracking-widest text-subtle">← Previous</span>
          <span className="mt-1.5 line-clamp-2 block font-semibold text-fg group-hover:text-accent-soft">{prev.title}</span>
        </Link>
        <Link href={next.href} className="group rounded-2xl border border-line p-5 text-right transition-colors hover:border-accent/40">
          <span className="font-mono text-[11px] uppercase tracking-widest text-subtle">Next →</span>
          <span className="mt-1.5 line-clamp-2 block font-semibold text-fg group-hover:text-accent-soft">{next.title}</span>
        </Link>
      </div>
      <div className="mt-6 text-center">
        <Link href={allHref} className="text-sm font-semibold text-accent hover:text-accent-soft">
          {allLabel}
        </Link>
      </div>
    </nav>
  )
}
