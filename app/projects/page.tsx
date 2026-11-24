"use client"

import { useState } from "react"
import { AnimatePresence, motion } from "framer-motion"
import ProjectCard from "@/components/projectCard"
import { categoryTone, projectCategories, projects, type ProjectCategory, type ProjectStatus } from "@/lib/data"

type CategoryFilter = "All" | ProjectCategory
type StatusFilter = "All" | ProjectStatus

const statusFilters: { value: StatusFilter; label: string }[] = [
  { value: "All", label: "Any status" },
  { value: "Ongoing", label: "In Progress" },
  { value: "Completed", label: "Completed" },
]

export default function ProjectsPage() {
  const [category, setCategory] = useState<CategoryFilter>("All")
  const [status, setStatus] = useState<StatusFilter>("All")

  const filtered = projects.filter(
    (p) => (category === "All" || p.category === category) && (status === "All" || p.status === status)
  )

  const countFor = (cat: CategoryFilter) =>
    projects.filter((p) => (cat === "All" || p.category === cat) && (status === "All" || p.status === status)).length

  const ongoingCount = projects.filter((p) => p.status === "Ongoing").length

  return (
    <main className="mx-auto min-h-screen max-w-6xl px-4 pb-24 pt-14 sm:px-6 sm:pt-20">
      <header className="mb-10 sm:mb-12">
        <p className="mb-3 flex items-center gap-3 font-mono text-xs uppercase tracking-[0.2em] text-accent">
          <span aria-hidden className="h-px w-8 bg-accent/50" />
          My work
        </p>
        <h1 className="text-4xl font-bold tracking-tighter text-fg sm:text-6xl lg:text-7xl">
          Projects<span className="text-accent">.</span>
        </h1>
        <p className="mt-4 max-w-2xl text-sm text-muted sm:text-base">
          Each project opens as a case study: the situation, my task, what I did, the result, the tools I used and
          why, and the screenshots or reports that prove it.{" "}
          <span className="text-fg">{ongoingCount} currently in progress.</span>
        </p>
      </header>

      <div className="sticky top-20 z-30 -mx-4 mb-6 border-y border-line bg-ink/85 px-4 py-3 backdrop-blur-xl sm:mx-0 sm:rounded-2xl sm:border sm:px-3">
        <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center sm:justify-between">
          <div role="group" aria-label="Filter by category" className="-mx-1 flex gap-1.5 overflow-x-auto px-1 pb-0.5 [scrollbar-width:none] sm:flex-wrap sm:overflow-visible">
            {(["All", ...projectCategories] as CategoryFilter[]).map((cat) => {
              const active = category === cat
              const tone = cat === "All" ? null : categoryTone[cat]
              return (
                <button
                  key={cat}
                  type="button"
                  onClick={() => setCategory(cat)}
                  aria-pressed={active}
                  className={`flex shrink-0 items-center gap-2 rounded-full border px-3.5 py-1.5 text-xs font-semibold transition-all sm:text-sm ${
                    active
                      ? "border-accent/50 bg-accent/15 text-fg"
                      : "border-line bg-white/[0.03] text-muted hover:border-accent/30 hover:text-fg"
                  }`}
                >
                  {tone && <span aria-hidden className={`h-1.5 w-1.5 rounded-full ${tone.dot}`} />}
                  {cat}
                  <span className={`font-mono text-[10px] ${active ? "text-accent-soft" : "text-subtle"}`}>{countFor(cat)}</span>
                </button>
              )
            })}
          </div>

          <div role="group" aria-label="Filter by status" className="flex shrink-0 gap-1 self-start rounded-full border border-line bg-white/[0.03] p-1">
            {statusFilters.map((s) => {
              const active = status === s.value
              return (
                <button
                  key={s.value}
                  type="button"
                  onClick={() => setStatus(s.value)}
                  aria-pressed={active}
                  className={`flex-1 whitespace-nowrap rounded-full px-3 py-1 text-xs font-semibold transition-colors ${
                    active ? "bg-accent-strong text-white" : "text-muted hover:text-fg"
                  }`}
                >
                  {s.label}
                </button>
              )
            })}
          </div>
        </div>
      </div>

      <p aria-live="polite" className="mb-5 font-mono text-xs text-subtle">
        Showing <span className="text-fg">{filtered.length}</span> of {projects.length} projects
      </p>

      <motion.div layout className="flex flex-col gap-5 sm:gap-6">
        <AnimatePresence mode="popLayout">
          {filtered.map((project) => (
            <motion.div
              key={project.slug}
              layout
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.98 }}
              transition={{ duration: 0.25 }}
            >
              <ProjectCard project={project} />
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>

      {filtered.length === 0 && (
        <div className="mt-16 rounded-2xl border border-dashed border-line py-16 text-center">
          <p className="font-mono text-sm text-subtle">$ ls ./projects --filter</p>
          <p className="mt-2 text-muted">No projects match these filters yet.</p>
        </div>
      )}
    </main>
  )
}
