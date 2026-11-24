import Image from "next/image"
import Link from "next/link"
import StatusBadge from "@/components/statusBadge"
import { categoryTone, projectHref, teamRoleCopy, type Project } from "@/lib/data"

/*
 * Project cards. The title link is "stretched" over the whole card (after:inset-0),
 * so the card is one big target, while repo/demo links sit above it with z-10.
 * This avoids nesting <a> inside <a>.
 */

function ArrowIcon({ className = "h-4 w-4" }: { className?: string }) {
  return (
    <svg aria-hidden className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M7 17 17 7M8 7h9v9" />
    </svg>
  )
}

/** Wide row used on the projects page. */
export default function ProjectCard({ project }: { project: Project }) {
  const { title, projectType, role, date, category, status, image, summary, stack, metrics, teamRole } = project
  const tone = categoryTone[category]
  const lead = metrics?.[0]

  return (
    <article className="group relative overflow-hidden rounded-2xl border border-line bg-panel/80 transition-all duration-300 hover:-translate-y-0.5 hover:border-accent/40 hover:shadow-2xl hover:shadow-accent-strong/10">
      <div className="flex flex-col md:flex-row">
        <div className="relative h-52 shrink-0 overflow-hidden bg-panel-2 md:h-auto md:min-h-60 md:w-72 lg:w-80">
          <Image
            src={image}
            alt=""
            fill
            sizes="(min-width: 1024px) 320px, (min-width: 768px) 288px, 100vw"
            className="object-cover transition-transform duration-700 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-linear-to-t from-panel via-panel/10 to-transparent md:bg-linear-to-r md:from-transparent md:via-transparent md:to-panel/60" />
          <StatusBadge status={status} className="absolute left-3 top-3" />
        </div>

        <div className="flex flex-1 flex-col p-5 sm:p-6">
          <div className="mb-2 flex flex-wrap items-center gap-x-2 gap-y-1 font-mono text-[11px] uppercase tracking-wider">
            <span className={`h-1.5 w-1.5 rounded-full ${tone.dot}`} />
            <span className={tone.text}>{category}</span>
            <span className="text-subtle">/</span>
            <span className="text-subtle">{date}</span>
          </div>

          <h3 className="text-lg font-bold leading-snug text-fg sm:text-xl">
            <Link
              href={projectHref(project)}
              className="transition-colors after:absolute after:inset-0 after:content-[''] group-hover:text-accent-soft focus-visible:outline-none"
            >
              {title}
            </Link>
          </h3>
          <p className="mt-1 text-sm text-muted">
            {projectType} <span className="text-subtle">·</span> {role}
            {teamRole !== "Solo" && <span className="text-subtle"> · {teamRoleCopy[teamRole].badge}</span>}
          </p>

          <p className="mt-4 border-t border-line pt-4 text-sm leading-relaxed text-muted">{summary}</p>

          {lead && (
            <p className="mt-4 flex items-baseline gap-2 text-sm">
              <span className="font-mono text-lg font-bold text-accent">{lead.value}</span>
              <span className="text-muted">{lead.label}</span>
            </p>
          )}

          <div className="mt-4 flex flex-wrap gap-1.5">
            {stack.slice(0, 5).map((tech) => (
              <span key={tech} className="rounded-md border border-line bg-white/[0.03] px-2 py-0.5 font-mono text-[11px] text-muted">
                {tech}
              </span>
            ))}
            {stack.length > 5 && <span className="px-1.5 py-0.5 font-mono text-[11px] text-subtle">+{stack.length - 5}</span>}
          </div>

          <div className="mt-auto flex flex-wrap items-center gap-2 pt-5">
            <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-accent">
              Read case study
              <span aria-hidden className="transition-transform group-hover:translate-x-1">→</span>
            </span>
            {project.links && project.links.length > 0 && (
              <div className="flex flex-wrap gap-2 sm:ml-auto">
                {project.links.slice(0, 2).map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="relative z-10 inline-flex items-center gap-1 rounded-full border border-line px-3 py-1 text-xs font-medium text-muted transition-colors hover:border-accent hover:text-accent"
                  >
                    {link.label}
                    <ArrowIcon className="h-3 w-3" />
                  </a>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </article>
  )
}

/** Vertical tile used on the homepage. Leads with the most concrete result. */
export function ProjectTile({ project, priority = false }: { project: Project; priority?: boolean }) {
  const { title, projectType, date, category, image, summary, metrics, teamRole } = project
  const tone = categoryTone[category]
  const lead = metrics?.[0]

  return (
    <article className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-line bg-panel/80 transition-all duration-300 hover:-translate-y-1 hover:border-accent/40 hover:shadow-2xl hover:shadow-accent-strong/15">
      <span aria-hidden className="absolute inset-x-0 top-0 z-10 h-0.5 origin-left scale-x-0 bg-accent transition-transform duration-500 group-hover:scale-x-100" />

      <div className="relative aspect-[16/10] overflow-hidden bg-panel-2">
        <Image
          src={image}
          alt=""
          fill
          preload={priority}
          sizes="(min-width: 768px) 33vw, 100vw"
          className="object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-linear-to-t from-panel via-panel/20 to-transparent" />
        <span className={`absolute left-3 top-3 rounded-full border px-2.5 py-1 font-mono text-[10px] font-semibold uppercase tracking-wider backdrop-blur ${tone.chip}`}>
          {category}
        </span>
      </div>

      <div className="flex flex-1 flex-col px-5 pb-5 pt-4">
        <p className="font-mono text-[11px] uppercase tracking-wider text-subtle">
          {date} · {teamRoleCopy[teamRole].badge}
        </p>
        <h3 className="mt-1.5 text-lg font-bold leading-snug text-fg">
          <Link
            href={projectHref(project)}
            className="line-clamp-3 transition-colors after:absolute after:inset-0 after:content-[''] group-hover:text-accent-soft focus-visible:outline-none"
          >
            {title}
          </Link>
        </h3>
        <p className="mt-1 text-sm text-subtle">{projectType}</p>
        <p className="mt-3 line-clamp-3 text-sm leading-relaxed text-muted">{summary}</p>

        {/* Pinned to the bottom so results line up across a row of tiles. */}
        <div className="mt-auto pt-4">
          {lead && (
            <div className="rounded-xl border border-accent/20 bg-accent/[0.06] px-4 py-3">
              <p className="font-mono text-2xl font-bold text-accent">{lead.value}</p>
              <p className="mt-0.5 text-xs text-muted">{lead.label}</p>
            </div>
          )}

          <div className="flex items-center justify-between pt-5">
            <span className="text-sm font-semibold text-accent">Read case study</span>
            <span className="grid h-9 w-9 place-items-center rounded-full border border-accent/30 text-accent transition-all duration-300 group-hover:rotate-45 group-hover:border-accent-strong group-hover:bg-accent-strong group-hover:text-white">
              <ArrowIcon />
            </span>
          </div>
        </div>
      </div>
    </article>
  )
}
