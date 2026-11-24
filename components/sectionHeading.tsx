import Link from "next/link"

type Props = {
  eyebrow: string
  title: React.ReactNode
  description?: string
  action?: { label: string; href: string }
  id?: string
}

export default function SectionHeading({ eyebrow, title, description, action, id }: Props) {
  return (
    <div className="mb-8 flex flex-col gap-4 sm:mb-10 sm:flex-row sm:items-end sm:justify-between">
      <div>
        <p className="mb-3 flex items-center gap-3 font-mono text-xs uppercase tracking-[0.2em] text-accent">
          <span aria-hidden className="h-px w-8 bg-accent/50" />
          {eyebrow}
        </p>
        <h2 id={id} className="scroll-mt-28 text-3xl font-bold tracking-tight text-fg sm:text-4xl lg:text-5xl">
          {title}
        </h2>
        {description && <p className="mt-3 max-w-xl text-sm text-muted sm:text-base">{description}</p>}
      </div>
      {action && (
        <Link
          href={action.href}
          className="group inline-flex shrink-0 items-center gap-2 self-start rounded-full border border-line px-5 py-2.5 text-sm font-semibold text-fg transition-colors hover:border-accent hover:text-accent sm:self-auto"
        >
          {action.label}
          <span aria-hidden className="transition-transform group-hover:translate-x-0.5">
            →
          </span>
        </Link>
      )}
    </div>
  )
}
