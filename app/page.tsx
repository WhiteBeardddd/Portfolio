"use client";

import { motion, type Variants } from "framer-motion";
import Image from "next/image";
import TerminalCard from "@/components/terminalCard";
import ProfileCard from "@/components/profileCard";
import SectionHeading from "@/components/sectionHeading";
import CertCard from "@/components/certificationCard";
import { ProjectTile } from "@/components/projectCard";
import {
  certificates,
  contacts,
  experience,
  featuredCertificates,
  ongoingProjects,
  projects,
  securityProjects,
  type Experience,
} from "@/lib/data";

const stats = [
  { value: projects.length, label: "Projects" },
  { value: securityProjects.length, label: "Security cases" },
  { value: certificates.length, label: "Certifications" },
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
      <span className={`${size} relative grid place-items-center overflow-hidden rounded-xl border border-line bg-white p-1`}>
        <Image src={item.logo} alt={`${item.org} logo`} width={64} height={64} className="h-full w-full object-contain" />
      </span>
    );
  }

  return (
    <span
      aria-hidden
      style={{ backgroundColor: item.brand }}
      className={`${size} grid place-items-center rounded-xl border border-line font-bold text-white shadow-lg shadow-black/30 ${
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
    <main className="relative w-full text-fg">
      {/* ── HERO ── */}
      <section className="mx-auto max-w-6xl px-4 pb-16 pt-16 sm:px-6 sm:pt-24">
        <div className="grid items-center gap-12 lg:grid-cols-[1.2fr_1fr]">
          <div>
            <motion.a
              href="#experience"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="group mb-7 inline-flex max-w-full items-center gap-2.5 rounded-full border border-accent/30 bg-accent/5 py-1.5 pl-2 pr-4 text-xs text-muted transition-colors hover:border-accent/60 sm:text-sm"
            >
              <span className="rounded-full bg-accent-strong px-2 py-0.5 font-mono text-[10px] font-bold uppercase tracking-wider text-white">
                Now
              </span>
              <span className="truncate">
                {currentRole.role} @ <span className="font-semibold text-fg">{currentRole.org}</span>
                <span className="hidden sm:inline"> · {currentRole.team}</span>
              </span>
              <span aria-hidden className="text-accent transition-transform group-hover:translate-x-0.5">
                →
              </span>
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
              className="mt-6 max-w-xl text-base text-muted sm:text-lg"
            >
              BS IT student at the <span className="text-fg">University of San Carlos</span> working across
              cybersecurity operations, networking, and full-stack development. I build systems, then try to break
              them, and I write down what I find.
            </motion.p>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.25 }}
              className="mt-4 max-w-xl border-l-2 border-accent/40 pl-3 font-mono text-xs italic text-subtle sm:text-sm"
            >
              &quot;I use &apos;whosyourdaddy&apos; &amp; &apos;aezakmi&apos;, only had 20₱ at kuya JBoy&apos;s comshop.&quot;
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="mt-8 flex flex-wrap gap-3"
            >
              <a
                href="#security"
                className="rounded-full bg-accent-strong px-6 py-3 text-sm font-bold text-white shadow-lg shadow-accent-strong/30 transition-colors hover:bg-accent-strong-hover sm:text-base"
              >
                See my security work
              </a>
              <a
                href="/files/BoquecosaResume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full border border-line px-6 py-3 text-sm font-semibold text-fg transition-colors hover:border-accent hover:text-accent sm:text-base"
              >
                Download Resume ↓
              </a>
            </motion.div>

            <motion.dl
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="mt-10 grid max-w-md grid-cols-3 divide-x divide-line border-y border-line"
            >
              {stats.map((s) => (
                <div key={s.label} className="px-4 py-4 first:pl-0">
                  <dt className="font-mono text-[10px] uppercase tracking-widest text-subtle">{s.label}</dt>
                  <dd className="mt-1 text-2xl font-bold tabular-nums text-fg sm:text-3xl">
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

      {/* ── FEATURED WORK: every Security-tagged project ── */}
      <section aria-labelledby="security" className="mx-auto max-w-6xl scroll-mt-24 px-4 py-16 sm:px-6">
        <SectionHeading
          id="security"
          eyebrow="Featured work · Security"
          title={<>Security <span className="text-accent">case studies</span></>}
          description="Attack it, detect it, defend it. Each case study shows what I did, the tools I used and why, and the evidence."
          action={{ label: "All projects", href: "/projects" }}
        />

        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {securityProjects.map((project, i) => (
            <motion.div key={project.slug} custom={i} {...reveal}>
              <ProjectTile project={project} priority={i === 0} />
            </motion.div>
          ))}
        </div>
      </section>

      {/* ── CURRENTLY BUILDING ── */}
      {ongoingProjects.length > 0 && (
        <section aria-labelledby="building" className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
          <SectionHeading
            id="building"
            eyebrow="Work in progress"
            title={<>Currently <span className="text-accent">building</span></>}
            description="Active projects that are still under development."
          />

          <div className="grid gap-5 md:grid-cols-2">
            {ongoingProjects.map((project, i) => (
              <motion.div key={project.slug} custom={i} {...reveal}>
                <ProjectTile project={project} />
              </motion.div>
            ))}
          </div>
        </section>
      )}

      {/* ── EXPERIENCE ── */}
      <section aria-labelledby="experience" className="mx-auto max-w-6xl scroll-mt-24 px-4 py-16 sm:px-6">
        <SectionHeading id="experience" eyebrow="Experience" title={<>Where I&apos;m <span className="text-accent">at</span></>} />

        <ol className="relative space-y-4 border-l border-line pl-6 sm:pl-8">
          {experience.map((item, i) => (
            <motion.li key={item.org} custom={i} {...reveal} className="relative">
              <span
                className={`absolute -left-[31px] top-6 h-3 w-3 rounded-full border-2 sm:-left-[39px] ${
                  item.current ? "border-accent bg-accent shadow-[0_0_12px] shadow-accent" : "border-subtle bg-ink"
                }`}
              />
              <div
                className={`flex gap-4 rounded-2xl border p-5 sm:gap-5 sm:p-6 ${
                  item.current ? "border-accent/30 bg-accent/[0.05]" : "border-line bg-panel/60"
                }`}
              >
                <OrgBadge item={item} />
                <div className="min-w-0 flex-1">
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <p className="font-mono text-xs uppercase tracking-wider text-subtle">{item.period}</p>
                    {item.current && (
                      <span className="inline-flex items-center gap-1.5 rounded-full bg-accent-strong px-2.5 py-0.5 font-mono text-[10px] font-bold uppercase tracking-wider text-white">
                        Current
                      </span>
                    )}
                  </div>
                  <h3 className="mt-2 text-xl font-bold text-fg sm:text-2xl">
                    {item.role} <span className="text-subtle">@</span>{" "}
                    <span className={item.current ? "text-accent" : "text-fg"}>{item.org}</span>
                  </h3>
                  {item.team && <p className="mt-1 text-sm font-medium text-muted">{item.team}</p>}
                  <p className="mt-3 max-w-2xl text-sm leading-relaxed text-muted">{item.summary}</p>
                </div>
              </div>
            </motion.li>
          ))}
        </ol>
      </section>

      {/* ── FEATURED CERTIFICATIONS ── */}
      <section aria-labelledby="certs" className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <SectionHeading
          id="certs"
          eyebrow="Credentials"
          title={<>Top <span className="text-accent">certifications</span></>}
          action={{ label: "View all", href: "/certifications" }}
        />

        <div className="grid gap-5 md:grid-cols-3">
          {featuredCertificates.map((cert, i) => (
            <motion.div key={cert.slug} custom={i} {...reveal}>
              <CertCard cert={cert} />
            </motion.div>
          ))}
        </div>
      </section>

      {/* ── ABOUT ── */}
      <section aria-labelledby="about" className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <SectionHeading id="about" eyebrow="whoami" title={<>About <span className="text-accent">me</span></>} />
        <motion.div {...reveal}>
          <TerminalCard />
        </motion.div>
      </section>

      {/* ── CONTACT ── */}
      <section aria-labelledby="contact" className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-24">
        <motion.div
          {...reveal}
          className="relative overflow-hidden rounded-3xl border border-line bg-panel/80 p-8 text-center sm:p-14"
        >
          <div className="pointer-events-none absolute -top-24 left-1/2 h-[240px] w-[480px] max-w-full -translate-x-1/2 rounded-full bg-accent-strong/20 blur-[90px]" />

          <p className="relative font-mono text-xs uppercase tracking-[0.2em] text-accent">Let&apos;s connect</p>
          <h2 id="contact" className="relative mt-3 text-3xl font-bold tracking-tight sm:text-5xl">
            Got something in mind? <br className="hidden sm:block" />
            <span className="text-accent">Say hello.</span>
          </h2>
          <p className="relative mx-auto mt-4 max-w-md text-sm text-muted sm:text-base">
            Open to collaborations, projects, and new opportunities.
          </p>

          <a
            href="mailto:charlesbenedictboquecosa@gmail.com"
            className="relative mt-8 inline-block break-all font-mono text-sm text-fg underline decoration-accent/50 underline-offset-8 transition-colors hover:text-accent sm:text-lg"
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
                className="flex items-center gap-2 rounded-full border border-line bg-white/[0.03] px-4 py-2 text-sm font-medium text-muted transition-all duration-200 hover:border-accent/50 hover:bg-accent/10 hover:text-accent"
              >
                <Image src={item.icon} alt="" width={20} height={20} className="h-5 w-5" />
                <span>{item.label}</span>
              </a>
            ))}
          </div>
        </motion.div>
      </section>
    </main>
  );
}
