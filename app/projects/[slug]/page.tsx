import type { Metadata } from "next"
import Image from "next/image"
import { notFound } from "next/navigation"
import StatusBadge from "@/components/statusBadge"
import Gallery from "@/components/caseStudy/gallery"
import {
  ActionLinks,
  Breadcrumbs,
  CalloutList,
  Chips,
  FactList,
  MetricStrip,
  PrevNext,
  SectionTitle,
  SourceList,
  StarStory,
  Toolbox,
} from "@/components/caseStudy/parts"
import { categoryTone, getProject, neighbours, projectHref, projects, teamRoleCopy } from "@/lib/data"

/* Every case study is prerendered; unknown slugs 404 instead of rendering on demand. */
export const dynamicParams = false

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }))
}

export async function generateMetadata(props: PageProps<"/projects/[slug]">): Promise<Metadata> {
  const { slug } = await props.params
  const project = getProject(slug)
  if (!project) return {}
  return {
    title: project.title,
    description: project.summary,
    openGraph: { title: project.title, description: project.summary, images: [project.image] },
  }
}

export default async function ProjectPage(props: PageProps<"/projects/[slug]">) {
  const { slug } = await props.params
  const index = projects.findIndex((p) => p.slug === slug)
  if (index === -1) notFound()

  const project = projects[index]
  const { prev, next } = neighbours(projects, index)
  const tone = categoryTone[project.category]
  const teamCopy = teamRoleCopy[project.teamRole]
  const teamItems = project.teamRole === "Leader" ? project.leadership : project.teamRole === "Member" ? project.contribution : undefined

  // The cover is shown on top; the gallery shows the rest so nothing appears twice.
  const coverShot = project.gallery?.find((s) => s.src === project.image)
  const evidence = project.gallery?.filter((s) => s.src !== project.image) ?? []
  const sources = [...(project.documents ?? []), ...(project.links ?? []).filter((l) => !project.documents?.some((d) => d.href === l.href))]

  const toc = [
    { id: "story", label: "The story (STAR)" },
    { id: "toolbox", label: "Toolbox" },
    ...(teamItems?.length ? [{ id: "team", label: teamCopy.heading }] : []),
    ...(evidence.length ? [{ id: "evidence", label: "Evidence" }] : []),
  ]

  return (
    <main className="mx-auto max-w-6xl px-4 pb-24 pt-10 sm:px-6 sm:pt-14">
      <Breadcrumbs items={[{ label: "Projects", href: "/projects" }, { label: project.title }]} />

      <header className="max-w-4xl">
        <div className="flex flex-wrap items-center gap-2">
          <span className={`rounded-full border px-2.5 py-1 font-mono text-[10px] font-semibold uppercase tracking-wider ${tone.chip}`}>
            {project.category}
          </span>
          <StatusBadge status={project.status} />
          <span className="rounded-full border border-line px-2.5 py-1 font-mono text-[10px] font-semibold uppercase tracking-wider text-muted">
            {teamCopy.badge}
          </span>
        </div>
        <h1 className="mt-5 text-3xl font-bold leading-tight tracking-tight text-fg [overflow-wrap:anywhere] sm:text-5xl">
          {project.title}
        </h1>
        {project.subtitle && <p className="mt-3 text-sm italic text-subtle sm:text-base">“{project.subtitle}”</p>}
        <p className="mt-4 font-mono text-xs uppercase tracking-wider text-subtle">
          {project.projectType} · {project.date}
        </p>
        <p className="measure mt-5 text-lg leading-relaxed text-muted">{project.summary}</p>
        {project.links && project.links.length > 0 && (
          <div className="mt-7">
            <ActionLinks links={project.links} />
          </div>
        )}
      </header>

      <figure className="mt-10">
        <div className="relative aspect-video overflow-hidden rounded-2xl border border-line bg-panel-2">
          {coverShot ? (
            <Image src={project.image} alt={coverShot.alt} fill preload sizes="(min-width: 1152px) 1104px, 100vw" className="object-cover" />
          ) : (
            <>
              {/* Covers of any shape (phone screenshots, banners) sit whole on a blurred copy of themselves. */}
              <Image src={project.image} alt="" aria-hidden fill sizes="50vw" className="scale-110 object-cover opacity-30 blur-2xl" />
              <Image
                src={project.image}
                alt={`${project.title} cover image`}
                fill
                preload
                sizes="(min-width: 1152px) 1104px, 100vw"
                className="object-contain p-4 sm:p-8"
              />
            </>
          )}
        </div>
        {coverShot && <figcaption className="mt-2 text-sm text-muted">{coverShot.caption}</figcaption>}
      </figure>

      {project.metrics && project.metrics.length > 0 && (
        <div className="mt-8">
          <MetricStrip metrics={project.metrics} />
        </div>
      )}

      <div className="mt-14 grid gap-12 lg:grid-cols-[minmax(0,1fr)_300px] lg:gap-14">
        <div className="min-w-0 space-y-16">
          <section aria-labelledby="story">
            <SectionTitle id="story" eyebrow="Situation · Task · Action · Result">
              The story
            </SectionTitle>
            <StarStory star={project.star} />
          </section>

          <section aria-labelledby="toolbox">
            <SectionTitle id="toolbox" eyebrow="Toolbox">
              The tools I used, and the problem each one solved
            </SectionTitle>
            <Toolbox tools={project.toolbox} />
          </section>

          {teamItems && teamItems.length > 0 && (
            <section aria-labelledby="team">
              <SectionTitle id="team" eyebrow={project.team}>
                {teamCopy.heading}
              </SectionTitle>
              <CalloutList intro={teamCopy.intro} items={teamItems} />
            </section>
          )}

          {evidence.length > 0 && (
            <section aria-labelledby="evidence">
              <SectionTitle id="evidence" eyebrow="Show your work">
                Evidence
              </SectionTitle>
              <Gallery shots={evidence} />
            </section>
          )}
        </div>

        <aside className="space-y-5 lg:sticky lg:top-24 lg:max-h-[calc(100vh-7rem)] lg:self-start lg:overflow-y-auto lg:[scrollbar-width:thin]">
          <nav aria-label="On this page" className="hidden rounded-2xl border border-line p-5 lg:block">
            <h2 className="mb-3 text-sm font-semibold text-fg">On this page</h2>
            <ul className="space-y-2 text-sm">
              {toc.map((item) => (
                <li key={item.id}>
                  <a href={`#${item.id}`} className="text-muted transition-colors hover:text-accent">
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div className="rounded-2xl border border-line bg-panel/70 p-5">
            <h2 className="mb-4 text-sm font-semibold text-fg">At a glance</h2>
            <FactList
              facts={[
                { label: "My role", value: project.role },
                { label: "Team", value: project.team },
                { label: "Timeline", value: project.date },
                { label: "Status", value: project.status === "Ongoing" ? "In progress" : "Completed" },
              ]}
            />
            <div className="mt-5 border-t border-line pt-4">
              <p className="mb-2 font-mono text-[10px] uppercase tracking-widest text-subtle">Stack</p>
              <Chips items={project.stack} />
            </div>
          </div>

          {sources.length > 0 && (
            <div className="rounded-2xl border border-line bg-panel/70 p-5">
              <h2 className="mb-3 text-sm font-semibold text-fg">Sources</h2>
              <SourceList links={sources} />
            </div>
          )}
        </aside>
      </div>

      <PrevNext
        prev={{ title: prev.title, href: projectHref(prev) }}
        next={{ title: next.title, href: projectHref(next) }}
        allHref="/projects"
        allLabel="← Back to all projects"
      />
    </main>
  )
}
