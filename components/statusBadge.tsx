import type { ProjectStatus } from "@/lib/data"

export default function StatusBadge({ status, className = "" }: { status: ProjectStatus; className?: string }) {
  if (status === "Ongoing") {
    return (
      <span
        className={`inline-flex items-center gap-1.5 rounded-full border border-accent/40 bg-black/70 px-2.5 py-1 font-mono text-[10px] font-semibold uppercase tracking-wider text-accent backdrop-blur ${className}`}
      >
        <span className="relative flex h-1.5 w-1.5">
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-75" />
          <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-accent" />
        </span>
        In Progress
      </span>
    )
  }

  return (
    <span
      className={`inline-flex items-center gap-1.5 rounded-full border border-white/15 bg-black/70 px-2.5 py-1 font-mono text-[10px] font-semibold uppercase tracking-wider text-gray-300 backdrop-blur ${className}`}
    >
      <svg className="h-2.5 w-2.5" viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth={2}>
        <path d="M2 6.5 4.5 9 10 3" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
      Completed
    </span>
  )
}
