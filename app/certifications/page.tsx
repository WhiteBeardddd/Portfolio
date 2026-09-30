"use client"

import { useState } from "react"
import { AnimatePresence, motion } from "framer-motion"
import CertCard from "@/components/certificationCard"
import { categoryTone, certCategories, certificates, type CertCategory } from "@/lib/data"

type CategoryFilter = "All" | CertCategory

export default function CertificationsPage() {
  const [category, setCategory] = useState<CategoryFilter>("All")

  const filtered = category === "All" ? certificates : certificates.filter((c) => c.category === category)
  const countFor = (cat: CategoryFilter) =>
    cat === "All" ? certificates.length : certificates.filter((c) => c.category === cat).length

  return (
    <main className="mx-auto min-h-screen max-w-6xl px-4 pb-24 pt-14 sm:px-6 sm:pt-20">
      {/* Header */}
      <header className="mb-10 sm:mb-12">
        <p className="mb-3 flex items-center gap-3 font-mono text-xs uppercase tracking-[0.2em] text-accent">
          <span className="h-px w-8 bg-accent/40" />
          Credentials
        </p>
        <h1 className="text-4xl font-bold tracking-tighter text-white sm:text-6xl lg:text-7xl">
          Certifications<span className="text-accent">.</span>
        </h1>
        <p className="mt-4 max-w-xl text-sm text-gray-400 sm:text-base">
          Earned with consistent hardwork, late nights, and a lot of coffee ☕
        </p>
      </header>

      {/* Filters */}
      <div className="sticky top-20 z-30 -mx-4 mb-6 border-y border-white/5 bg-ink/80 px-4 py-3 backdrop-blur-xl sm:mx-0 sm:rounded-2xl sm:border sm:px-3">
        <div className="-mx-1 flex gap-1.5 overflow-x-auto px-1 pb-0.5 [scrollbar-width:none]">
          {(["All", ...certCategories] as CategoryFilter[]).map((cat) => {
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
      </div>

      <p className="mb-5 font-mono text-xs text-gray-500">
        Showing <span className="text-white">{filtered.length}</span> of {certificates.length} certificates
      </p>

      {/* Grid */}
      <motion.div layout className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
        <AnimatePresence mode="popLayout">
          {filtered.map((cert) => (
            <motion.div
              key={cert.title}
              layout
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.98 }}
              transition={{ duration: 0.25 }}
            >
              <CertCard {...cert} />
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>
    </main>
  )
}
