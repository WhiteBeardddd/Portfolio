import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { notFound } from "next/navigation"
import { ActionLinks, Breadcrumbs, Chips, FactList, PrevNext, SectionTitle, StarStory } from "@/components/caseStudy/parts"
import { categoryTone, certificateHref, certificates, getCertificate, getProject, neighbours, projectHref, type Project } from "@/lib/data"

export const dynamicParams = false

export function generateStaticParams() {
  return certificates.map((c) => ({ slug: c.slug }))
}

export async function generateMetadata(props: PageProps<"/certifications/[slug]">): Promise<Metadata> {
  const { slug } = await props.params
  const cert = getCertificate(slug)
  if (!cert) return {}
  return {
    title: cert.title,
    description: cert.summary,
    openGraph: { title: cert.title, description: cert.summary, images: [cert.image] },
  }
}

export default async function CertificatePage(props: PageProps<"/certifications/[slug]">) {
  const { slug } = await props.params
  const index = certificates.findIndex((c) => c.slug === slug)
  if (index === -1) notFound()

  const cert = certificates[index]
  const { prev, next } = neighbours(certificates, index)
  const tone = categoryTone[cert.category]
  const related = (cert.relatedProjects ?? []).map(getProject).filter((p): p is Project => Boolean(p))

  return (
    <main className="mx-auto max-w-6xl px-4 pb-24 pt-10 sm:px-6 sm:pt-14">
      <Breadcrumbs items={[{ label: "Certifications", href: "/certifications" }, { label: cert.title }]} />

      <div className="grid gap-12 lg:grid-cols-[minmax(0,1fr)_380px] lg:gap-14">
        <div className="min-w-0">
          <header>
            <span className={`rounded-full border px-2.5 py-1 font-mono text-[10px] font-semibold uppercase tracking-wider ${tone.chip}`}>
              {cert.category}
            </span>
            <h1 className="mt-5 text-3xl font-bold leading-tight tracking-tight text-fg sm:text-5xl">{cert.title}</h1>
            <p className="mt-4 font-mono text-xs uppercase tracking-wider text-subtle">
              {cert.issuer} · {cert.date}
            </p>
            <p className="measure mt-5 text-lg leading-relaxed text-muted">{cert.summary}</p>
          </header>

          <section aria-labelledby="story" className="mt-14">
            <SectionTitle id="story" eyebrow="Situation · Task · Action · Result">
              The story
            </SectionTitle>
            <StarStory star={cert.star} />
          </section>

          <section aria-labelledby="skills" className="mt-16">
            <SectionTitle id="skills" eyebrow="Skills">
              What I can do because of it
            </SectionTitle>
            <Chips items={cert.skills} />
          </section>

          {related.length > 0 && (
            <section aria-labelledby="applied" className="mt-16">
              <SectionTitle id="applied" eyebrow="Applied in">
                Where I used it
              </SectionTitle>
              <ul className="grid gap-3 sm:grid-cols-2">
                {related.map((p) => (
                  <li key={p.slug}>
                    <Link
                      href={projectHref(p)}
                      className="group flex h-full gap-4 rounded-2xl border border-line bg-panel/70 p-3 transition-colors hover:border-accent/40"
                    >
                      <span className="relative h-20 w-24 shrink-0 overflow-hidden rounded-lg bg-panel-2">
                        <Image src={p.image} alt="" fill sizes="96px" className="object-cover" />
                      </span>
                      <span className="min-w-0 py-1">
                        <span className="line-clamp-2 font-semibold leading-snug text-fg group-hover:text-accent-soft">{p.title}</span>
                        <span className="mt-1 block text-xs text-muted">{p.projectType}</span>
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            </section>
          )}
        </div>

        <aside className="space-y-6 lg:sticky lg:top-24 lg:self-start">
          <a
            href={cert.url}
            target="_blank"
            rel="noopener noreferrer"
            className="group block overflow-hidden rounded-2xl border border-line bg-white p-2 transition-colors hover:border-accent"
          >
            <Image
              src={cert.image}
              alt={`${cert.title} certificate issued to Charles Benedict Boquecosa`}
              width={760}
              height={570}
              preload
              sizes="(min-width: 1024px) 380px, 100vw"
              className="h-auto w-full rounded-xl object-contain"
            />
            <span className="sr-only">Open the original certificate</span>
          </a>

          <div className="rounded-2xl border border-line bg-panel/70 p-5">
            <FactList
              facts={[
                { label: "Issued by", value: cert.issuer },
                { label: "Date", value: cert.date },
                ...(cert.printedAs ? [{ label: "Printed as", value: cert.printedAs }] : []),
              ]}
            />
            <div className="mt-5">
              <ActionLinks links={[{ label: "View original certificate", href: cert.url }]} />
            </div>
            {cert.accessNote && <p className="mt-3 text-xs text-subtle">{cert.accessNote}</p>}
          </div>
        </aside>
      </div>

      <PrevNext
        prev={{ title: prev.title, href: certificateHref(prev) }}
        next={{ title: next.title, href: certificateHref(next) }}
        allHref="/certifications"
        allLabel="← Back to all certifications"
      />
    </main>
  )
}
