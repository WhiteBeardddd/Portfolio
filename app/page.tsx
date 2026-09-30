"use client";

import { motion, type Variants } from "framer-motion";
import Link from "next/link";
import TerminalCard from "@/components/terminalCard";
import ProfileCard from "@/components/profileCard";
import SectionHeading from "@/components/sectionHeading";
import StatusBadge from "@/components/statusBadge";
import { categoryTone, certificates, contacts, experience, projects, type Experience } from "@/lib/data";

const ongoingProjects = projects.filter((p) => p.status === "Ongoing");
const featuredProjects = projects.filter((p) => p.featured);
const featuredCerts = certificates.filter((c) => c.featured);

const stats = [
  { value: projects.length, label: "Projects" },
  { value: certificates.length, label: "Certifications" },
  { value: ongoingProjects.length, label: "In Progress" },
];

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.08, duration: 0.5, ease: "easeOut" },
  }),
};

const reveal = {
  initial: "hidden",
  whileInView: "visible",
  viewport: { once: true, margin: "-60px" },
  variants: fadeUp,
} as const;

/* Organization logo, or a brand-colored monogram until a logo file is added to the data. */
function OrgBadge({ item }: { item: Experience }) {
  const size = "h-14 w-14 shrink-0 self-center sm:h-16 sm:w-16";

  if (item.logo) {
    return (
      <span className={`${size} grid place-items-center overflow-hidden rounded-xl border border-white/10 bg-white p-1`}>
        <img src={item.logo} alt={`${item.org} logo`} className="h-full w-full object-contain" />
      </span>
    );
  }

  return (
    <span
      aria-hidden
      style={{ backgroundColor: item.brand }}
      className={`${size} grid place-items-center rounded-xl border border-white/10 font-bold text-white shadow-lg shadow-black/30 ${
        item.monogram.length > 3 ? "text-[11px] tracking-tight sm:text-xs" : item.monogram.length > 1 ? "text-sm" : "text-2xl"
      }`}
    >
      {item.monogram}
    </span>
  );
}

export default function Home() {
  const [currentRole] = experience;

  return (
    <main className="relative w-full text-white">
      {/* ── HERO ── */}
      <section className="mx-auto max-w-6xl px-4 pb-16 pt-16 sm:px-6 sm:pt-24">
        <div className="grid items-center gap-12 lg:grid-cols-[1.2fr_1fr]">
          <div>
            <motion.a
              href="#experience"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="group mb-7 inline-flex max-w-full items-center gap-2.5 rounded-full border border-accent/30 bg-accent/5 py-1.5 pl-2 pr-4 text-xs text-gray-300 transition-colors hover:border-accent/60 sm:text-sm"
            >
              <span className="rounded-full bg-accent px-2 py-0.5 font-mono text-[10px] font-bold uppercase tracking-wider text-black">
                Now
              </span>
              <span className="truncate">
                {currentRole.role} @ <span className="font-semibold text-white">{currentRole.org}</span>
                <span className="hidden sm:inline"> · {currentRole.team}</span>
              </span>
              <span className="text-accent transition-transform group-hover:translate-x-0.5">→</span>
            </motion.a>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.05 }}
              className="text-5xl font-bold leading-[1.02] tracking-tighter sm:text-7xl lg:text-8xl"
            >
              Charles
              <br />
              <span className="text-accent">Benedict.</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="mt-6 max-w-xl text-base text-gray-400 sm:text-lg"
            >
              BS IT student at the <span className="text-gray-200">University of San Carlos</span> working across
              networking, cybersecurity operations, and full-stack development. I like building systems and then
              trying to break them.
            </motion.p>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.25 }}
              className="mt-4 max-w-xl border-l-2 border-accent/40 pl-3 font-mono text-xs italic text-gray-500 sm:text-sm"
            >
              &quot;I use &apos;whosyourdaddy&apos; &amp; &apos;aezakmi&apos;, only had 20₱ at kuya JBoy&apos;s comshop.&quot;
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="mt-8 flex flex-wrap gap-3"
            >
              <Link
                href="/projects"
                className="rounded-full bg-accent px-6 py-3 text-sm font-bold text-black shadow-lg shadow-accent/20 transition-colors hover:bg-accent-soft sm:text-base"
              >
                View Projects
              </Link>
              <a
                href="/files/BoquecosaResume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full border border-white/20 px-6 py-3 text-sm font-semibold text-white transition-colors hover:border-accent hover:text-accent sm:text-base"
              >
                Download Resume
              </a>
            </motion.div>

            <motion.dl
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="mt-10 grid max-w-md grid-cols-3 divide-x divide-white/10 border-y border-white/10"
            >
              {stats.map((s) => (
                <div key={s.label} className="px-4 py-4 first:pl-0">
                  <dt className="font-mono text-[10px] uppercase tracking-widest text-gray-500">{s.label}</dt>
                  <dd className="mt-1 text-2xl font-bold tabular-nums text-white sm:text-3xl">
                    {String(s.value).padStart(2, "0")}
                  </dd>
                </div>
              ))}
            </motion.dl>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="px-6 sm:px-10 lg:px-0"
          >
            <ProfileCard />
          </motion.div>
        </div>
      </section>

      {/* ── EXPERIENCE ── */}
      <section id="experience" className="mx-auto max-w-6xl scroll-mt-24 px-4 py-16 sm:px-6">
        <SectionHeading eyebrow="Experience" title={<>Where I&apos;m <span className="text-accent">at</span></>} />

        <ol className="relative space-y-4 border-l border-white/10 pl-6 sm:pl-8">
          {experience.map((item, i) => (
            <motion.li key={item.org} custom={i} {...reveal} className="relative">
              <span
                className={`absolute -left-[31px] top-6 h-3 w-3 rounded-full border-2 sm:-left-[39px] ${
                  item.current ? "border-accent bg-accent shadow-[0_0_12px] shadow-accent" : "border-gray-500 bg-ink"
                }`}
              />
              <div
                className={`flex gap-4 rounded-2xl border p-5 sm:gap-5 sm:p-6 ${
                  item.current ? "border-accent/30 bg-accent/[0.04]" : "border-white/10 bg-panel/60"
                }`}
              >
                <OrgBadge item={item} />
                <div className="min-w-0 flex-1">
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <p className="font-mono text-xs uppercase tracking-wider text-gray-500">{item.period}</p>
                    {item.current && (
                      <span className="inline-flex items-center gap-1.5 rounded-full bg-accent px-2.5 py-0.5 font-mono text-[10px] font-bold uppercase tracking-wider text-black">
                        Current
                      </span>
                    )}
                  </div>
                  <h3 className="mt-2 text-xl font-bold text-white sm:text-2xl">
                    {item.role} <span className="text-gray-500">@</span>{" "}
                    <span className={item.current ? "text-accent" : "text-white"}>{item.org}</span>
                  </h3>
                  {item.team && <p className="mt-1 text-sm font-medium text-gray-300">{item.team}</p>}
                  <p className="mt-3 max-w-2xl text-sm leading-relaxed text-gray-400">{item.summary}</p>
                </div>
              </div>
            </motion.li>
          ))}
        </ol>
      </section>

      {/* ── CURRENTLY BUILDING ── */}
      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <SectionHeading
          eyebrow="Work in progress"
          title={<>Currently <span className="text-accent">building</span></>}
          description="Active projects that are still under development."
          action={{ label: "All projects", href: "/projects" }}
        />

        <div className="grid gap-5 md:grid-cols-2">
          {ongoingProjects.map((project, i) => (
            <motion.article
              key={project.title}
              custom={i}
              {...reveal}
              className="group flex flex-col overflow-hidden rounded-2xl border border-accent/25 bg-panel/80 transition-colors hover:border-accent/50"
            >
              <div className="relative h-48 overflow-hidden sm:h-56">
                <img
                  src={project.image}
                  alt=""
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <StatusBadge status={project.status} className="absolute left-3 top-3" />
              </div>
              <div className="flex flex-1 flex-col p-5 sm:p-6">
                <p className="font-mono text-[11px] uppercase tracking-wider text-gray-500">
                  {project.projectType} · {project.date}
                </p>
                <h3 className="mt-2 text-xl font-bold text-white">{project.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-gray-400">{project.highlights[0]}</p>
                {project.stack && (
                  <div className="mt-4 flex flex-wrap gap-1.5">
                    {project.stack.map((tech) => (
                      <span key={tech} className="rounded-md border border-white/10 bg-white/[0.03] px-2 py-0.5 font-mono text-[11px] text-gray-300">
                        {tech}
                      </span>
                    ))}
                  </div>
                )}
                <div className="mt-auto flex flex-wrap gap-2 pt-5">
                  {project.links?.map((link) => (
                    <a
                      key={link.href}
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="rounded-full border border-white/15 px-3.5 py-1.5 text-xs font-semibold text-gray-200 transition-colors hover:border-accent hover:text-accent"
                    >
                      {link.label} ↗
                    </a>
                  ))}
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </section>

      {/* ── ABOUT ── */}
      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <SectionHeading eyebrow="whoami" title={<>About <span className="text-accent">me</span></>} />
        <motion.div {...reveal}>
          <TerminalCard />
        </motion.div>
      </section>

      {/* ── FEATURED PROJECTS ── */}
      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <SectionHeading
          eyebrow="Featured work"
          title={<>Selected <span className="text-accent">projects</span></>}
          action={{ label: "View all", href: "/projects" }}
        />

        <div className="grid gap-5 md:grid-cols-3">
          {featuredProjects.map((project, i) => (
            <motion.a
              key={project.title}
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              custom={i}
              {...reveal}
              className="group relative flex flex-col overflow-hidden rounded-2xl border border-white/10 bg-panel/80 transition-all duration-300 hover:-translate-y-1 hover:border-accent/40 hover:shadow-2xl hover:shadow-accent/10"
            >
              {/* Gold rule that draws across the top on hover */}
              <span className="absolute inset-x-0 top-0 z-10 h-0.5 origin-left scale-x-0 bg-accent transition-transform duration-500 group-hover:scale-x-100" />

              <div className="relative aspect-[16/10] overflow-hidden">
                <img
                  src={project.image}
                  alt=""
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-panel via-panel/30 to-transparent" />
                <span
                  className={`absolute left-3 top-3 rounded-full border border-white/15 bg-black/75 px-2.5 py-1 font-mono text-[10px] font-semibold uppercase tracking-wider backdrop-blur ${categoryTone[project.category].text}`}
                >
                  {project.category}
                </span>
                {/* First highlight slides up over the image on hover */}
                <p className="absolute inset-x-0 bottom-0 line-clamp-2 translate-y-2 px-5 pb-3 text-xs leading-relaxed text-gray-200 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                  {project.highlights[0]}
                </p>
              </div>

              <div className="flex flex-1 flex-col px-5 pb-5 pt-4">
                <p className="font-mono text-[11px] uppercase tracking-wider text-gray-500">{project.date}</p>
                <h3 className="mt-1.5 line-clamp-2 text-lg font-bold leading-snug text-white transition-colors group-hover:text-accent">
                  {project.title}
                </h3>
                <p className="mt-1 text-sm text-gray-400">{project.projectType}</p>

                {project.stack && (
                  <div className="mt-4 flex flex-wrap gap-1.5">
                    {project.stack.slice(0, 3).map((tech) => (
                      <span key={tech} className="rounded-md border border-white/10 bg-white/[0.03] px-2 py-0.5 font-mono text-[11px] text-gray-300">
                        {tech}
                      </span>
                    ))}
                    {project.stack.length > 3 && (
                      <span className="rounded-md px-1.5 py-0.5 font-mono text-[11px] text-gray-500">
                        +{project.stack.length - 3}
                      </span>
                    )}
                  </div>
                )}

                <div className="mt-auto pt-5">
                  <div className="flex items-center justify-between border-t border-white/5 pt-4">
                    <span className="truncate pr-3 text-xs text-gray-500">{project.role}</span>
                    <span className="grid h-9 w-9 shrink-0 place-items-center rounded-full border border-accent/30 text-accent transition-all duration-300 group-hover:rotate-45 group-hover:border-accent group-hover:bg-accent group-hover:text-black">
                      <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M7 17 17 7M8 7h9v9" />
                      </svg>
                    </span>
                  </div>
                </div>
              </div>
            </motion.a>
          ))}
        </div>
      </section>

      {/* ── FEATURED CERTIFICATIONS ── */}
      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <SectionHeading
          eyebrow="Credentials"
          title={<>Top <span className="text-accent">certifications</span></>}
          action={{ label: "View all", href: "/certifications" }}
        />

        <div className="grid gap-5 md:grid-cols-3">
          {featuredCerts.map((cert, i) => (
            <motion.a
              key={cert.title}
              href={cert.url}
              target="_blank"
              rel="noopener noreferrer"
              custom={i}
              {...reveal}
              className="group relative flex flex-col rounded-2xl border border-white/10 bg-panel/80 p-3 transition-all duration-300 hover:-translate-y-1 hover:border-accent/40 hover:shadow-2xl hover:shadow-accent/10"
            >
              {/* Certificate shown like a framed print */}
              <div className="relative aspect-[4/3] overflow-hidden rounded-xl bg-white ring-1 ring-white/10">
                <img
                  src={cert.image}
                  alt={`${cert.title} certificate`}
                  className="h-full w-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                <span
                  className={`absolute right-2.5 top-2.5 rounded-full border border-white/15 bg-black/75 px-2.5 py-1 font-mono text-[10px] font-semibold uppercase tracking-wider backdrop-blur ${categoryTone[cert.category].text}`}
                >
                  {cert.category}
                </span>
              </div>

              <div className="flex flex-1 flex-col px-2 pb-2 pt-4">
                {cert.issuer && (
                  <p className="flex items-center gap-2 text-xs font-medium text-gray-400">
                    <span className="grid h-5 w-5 place-items-center rounded-full bg-accent/15 text-accent">
                      <svg className="h-3 w-3" viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth={2}>
                        <path d="M2 6.5 4.5 9 10 3" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </span>
                    {cert.issuer}
                  </p>
                )}
                <h3 className="mt-2.5 font-bold leading-snug text-white transition-colors group-hover:text-accent">
                  {cert.title}
                </h3>
                <div className="mt-auto flex items-center justify-between pt-4">
                  <span className="font-mono text-[11px] uppercase tracking-wider text-gray-500">{cert.date}</span>
                  <span className="inline-flex items-center gap-1 text-xs font-semibold text-accent">
                    View
                    <svg className="h-3.5 w-3.5 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M7 17 17 7M8 7h9v9" />
                    </svg>
                  </span>
                </div>
              </div>
            </motion.a>
          ))}
        </div>
      </section>

      {/* ── CONTACT ── */}
      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-24">
        <motion.div
          {...reveal}
          className="relative overflow-hidden rounded-3xl border border-white/10 bg-panel/80 p-8 text-center sm:p-14"
        >
          <div className="pointer-events-none absolute -top-24 left-1/2 h-[240px] w-[480px] max-w-full -translate-x-1/2 rounded-full bg-accent/15 blur-[90px]" />

          <p className="relative font-mono text-xs uppercase tracking-[0.2em] text-accent">Let&apos;s connect</p>
          <h2 className="relative mt-3 text-3xl font-bold tracking-tight sm:text-5xl">
            Got something in mind? <br className="hidden sm:block" />
            <span className="text-accent">Say hello.</span>
          </h2>
          <p className="relative mx-auto mt-4 max-w-md text-sm text-gray-400 sm:text-base">
            Open to collaborations, projects, and new opportunities.
          </p>

          <a
            href="mailto:charlesbenedictboquecosa@gmail.com"
            className="relative mt-8 inline-block break-all font-mono text-sm text-white underline decoration-accent/50 underline-offset-8 transition-colors hover:text-accent sm:text-lg"
          >
            charlesbenedictboquecosa@gmail.com
          </a>

          <div className="relative mx-auto mt-10 flex max-w-3xl flex-wrap justify-center gap-2.5 sm:gap-3">
            {contacts.map((item) => (
              <a
                key={item.label}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-4 py-2 text-sm font-medium text-gray-300 transition-all duration-200 hover:border-accent/50 hover:bg-accent/10 hover:text-accent"
              >
                <img src={item.icon} alt="" className="h-5 w-5" />
                <span>{item.label}</span>
              </a>
            ))}
          </div>
        </motion.div>
      </section>
    </main>
  );
}
