import Image from "next/image"
import Link from "next/link"
import { categoryTone, certificateHref, type Certificate } from "@/lib/data"

/* Certificate card. The whole card opens the certificate's detail page. */
export default function CertCard({ cert, priority = false }: { cert: Certificate; priority?: boolean }) {
  const tone = categoryTone[cert.category]

  return (
    <Link
      href={certificateHref(cert)}
      className="group relative flex h-full flex-col rounded-2xl border border-line bg-panel/80 p-3 transition-all duration-300 hover:-translate-y-1 hover:border-accent/40 hover:shadow-2xl hover:shadow-accent-strong/10"
    >
      {/* Certificate shown like a framed print */}
      <div className="relative aspect-[4/3] overflow-hidden rounded-xl bg-white ring-1 ring-line">
        <Image
          src={cert.image}
          alt={`${cert.title} certificate`}
          fill
          preload={priority}
          sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
          className="object-cover object-top transition-transform duration-700 group-hover:scale-105"
        />
        <span className={`absolute right-2.5 top-2.5 rounded-full border bg-ink/80 px-2.5 py-1 font-mono text-[10px] font-semibold uppercase tracking-wider backdrop-blur ${tone.chip}`}>
          {cert.category}
        </span>
      </div>

      <div className="flex flex-1 flex-col px-2 pb-2 pt-4">
        <p className="flex items-center gap-2 text-xs font-medium text-muted">
          <span aria-hidden className="grid h-5 w-5 shrink-0 place-items-center rounded-full bg-accent/15 text-accent">
            <svg className="h-3 w-3" viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth={2}>
              <path d="M2 6.5 4.5 9 10 3" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </span>
          <span className="line-clamp-1">{cert.issuer}</span>
        </p>
        <h3 className="mt-2.5 font-bold leading-snug text-fg transition-colors group-hover:text-accent-soft">{cert.title}</h3>
        <p className="mt-2 line-clamp-2 text-sm text-muted">{cert.summary}</p>
        <div className="mt-auto flex items-center justify-between pt-4">
          <span className="font-mono text-[11px] uppercase tracking-wider text-subtle">{cert.date}</span>
          <span className="inline-flex items-center gap-1 text-xs font-semibold text-accent">
            Details
            <span aria-hidden className="transition-transform group-hover:translate-x-0.5">→</span>
          </span>
        </div>
      </div>
    </Link>
  )
}
