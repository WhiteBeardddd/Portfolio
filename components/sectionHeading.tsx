import Link from "next/link"

type Props = {
  eyebrow: string
  title: React.ReactNode
  description?: string
  action?: { label: string; href: string }
}

export default function SectionHeading({ eyebrow, title, description, action }: Props) {
  return (
    <div className="mb-8 flex flex-col gap-4 sm:mb-10 sm:flex-row sm:items-end sm:justify-between">
      <div>
        <p className="mb-3 font-mono text-xs uppercase tracking-[0.2em] text-accent">{eyebrow}</p>
        <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">{title}</h2>
        {description && <p className="mt-3 max-w-xl text-sm text-gray-400 sm:text-base">{description}</p>}
      </div>
      {action && (
        <Link
          href={action.href}
          className="group inline-flex shrink-0 items-center gap-2 self-start rounded-full border border-white/15 px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:border-accent hover:text-accent sm:self-auto"
        >
          {action.label}
          <span className="transition-transform group-hover:translate-x-0.5">→</span>
        </Link>
      )}
    </div>
  )
}
