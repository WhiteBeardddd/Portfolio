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
      {/* Header */}
      <header className="mb-10 sm:mb-12">
        <p className="mb-3 flex items-center gap-3 font-mono text-xs uppercase tracking-[0.2em] text-accent">
          <span className="h-px w-8 bg-accent/40" />
          My work
        </p>
        <h1 className="text-4xl font-bold tracking-tighter text-white sm:text-6xl lg:text-7xl">
          Projects<span className="text-accent">.</span>
        </h1>
        <p className="mt-4 max-w-xl text-sm text-gray-400 sm:text-base">
          Academic projects, capstone work, prototypes &amp; shenanigans built along the way.{" "}
          <span className="text-gray-200">{ongoingCount} currently in progress.</span>
        </p>
      </header>

      {/* Filters */}
      <div className="sticky top-20 z-30 -mx-4 mb-6 border-y border-white/5 bg-ink/80 px-4 py-3 backdrop-blur-xl sm:mx-0 sm:rounded-2xl sm:border sm:px-3">
        <div className="flex flex-col gap-3 lg:flex-row lg:items-center lg:justify-between">
          <div className="-mx-1 flex gap-1.5 overflow-x-auto px-1 pb-0.5 [scrollbar-width:none]">
            {(["All", ...projectCategories] as CategoryFilter[]).map((cat) => {
              const active = category === cat
              const tone = cat === "All" ? null : categoryTone[cat]
              return (
                <button
                  key={cat}
                  onClick={() => setCategory(cat)}
                  aria-pressed={active}
                  className={`flex shrink-0 items-center gap-2 rounded-full border px-3.5 py-1.5 text-xs font-semibold transition-all sm:text-sm ${
                    active
                      ? "border-white/20 bg-white text-black"
                      : "border-white/10 bg-white/[0.03] text-gray-400 hover:border-white/20 hover:text-white"
                  }`}
                >
                  {tone && <span className={`h-1.5 w-1.5 rounded-full ${tone.dot}`} />}
                  {cat}
                  <span className={`font-mono text-[10px] ${active ? "text-black/50" : "text-gray-600"}`}>{countFor(cat)}</span>
                </button>
              )
            })}
          </div>

          <div className="flex shrink-0 gap-1 rounded-full border border-white/10 bg-white/[0.03] p-1">
            {statusFilters.map((s) => {
              const active = status === s.value
              return (
                <button
                  key={s.value}
                  onClick={() => setStatus(s.value)}
                  aria-pressed={active}
                  className={`flex-1 rounded-full px-3 py-1 text-xs font-semibold transition-colors ${
                    active ? "bg-accent text-black" : "text-gray-400 hover:text-white"
                  }`}
                >
                  {s.label}
                </button>
              )
            })}
          </div>
        </div>
      </div>

      <p className="mb-5 font-mono text-xs text-gray-500">
        Showing <span className="text-white">{filtered.length}</span> of {projects.length} projects
      </p>

      {/* Cards */}
      <motion.div layout className="flex flex-col gap-5 sm:gap-6">
        <AnimatePresence mode="popLayout">
          {filtered.map((project) => (
            <motion.div
              key={project.title}
              layout
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.98 }}
              transition={{ duration: 0.25 }}
            >
              <ProjectCard {...project} />
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>

      {filtered.length === 0 && (
        <div className="mt-16 rounded-2xl border border-dashed border-white/10 py-16 text-center">
          <p className="font-mono text-sm text-gray-500">$ ls ./projects --filter</p>
          <p className="mt-2 text-gray-400">No projects match these filters yet.</p>
        </div>
      )}
    </main>
  )
}
