import { certificates } from "./certificates"
import { projects } from "./projects"
import type { CertCategory, Certificate, Experience, Project, ProjectCategory, TeamRole } from "./types"

export * from "./types"
export { certificates, projects }

export const projectCategories: ProjectCategory[] = [
  "Security",
  "Networking",
  "Web & Fullstack",
  "Mobile",
  "Game Development",
]

export const certCategories: CertCategory[] = ["Cybersecurity", "Networking", "Cloud", "Hackathon", "Events"]

/*
 * Category tones for small chips and dots only (blue is reserved for actions).
 * Full class strings so Tailwind can see them.
 */
export const categoryTone: Record<ProjectCategory | CertCategory, { text: string; dot: string; chip: string }> = {
  Security: { text: "text-rose-300", dot: "bg-rose-400", chip: "border-rose-400/30 bg-rose-400/10 text-rose-200" },
  Cybersecurity: { text: "text-rose-300", dot: "bg-rose-400", chip: "border-rose-400/30 bg-rose-400/10 text-rose-200" },
  Networking: { text: "text-emerald-300", dot: "bg-emerald-400", chip: "border-emerald-400/30 bg-emerald-400/10 text-emerald-200" },
  "Web & Fullstack": { text: "text-violet-300", dot: "bg-violet-400", chip: "border-violet-400/30 bg-violet-400/10 text-violet-200" },
  Mobile: { text: "text-amber-300", dot: "bg-amber-400", chip: "border-amber-400/30 bg-amber-400/10 text-amber-200" },
  "Game Development": { text: "text-orange-300", dot: "bg-orange-400", chip: "border-orange-400/30 bg-orange-400/10 text-orange-200" },
  Cloud: { text: "text-sky-300", dot: "bg-sky-400", chip: "border-sky-400/30 bg-sky-400/10 text-sky-200" },
  Hackathon: { text: "text-amber-300", dot: "bg-amber-400", chip: "border-amber-400/30 bg-amber-400/10 text-amber-200" },
  Events: { text: "text-slate-300", dot: "bg-slate-400", chip: "border-slate-400/30 bg-slate-400/10 text-slate-200" },
}

/** Heading and badge text for each way of working on a project. */
export const teamRoleCopy: Record<TeamRole, { badge: string; heading: string; intro: string }> = {
  Leader: {
    badge: "Team lead",
    heading: "How I led the team",
    intro: "I was the lead on this project. This is how I organised the work and supported the team.",
  },
  Member: {
    badge: "Team member",
    heading: "What I contributed to the team",
    intro: "This was a team effort. These are the parts I owned or drove.",
  },
  Solo: {
    badge: "Solo project",
    heading: "",
    intro: "",
  },
}

export const experience: Experience[] = [
  {
    role: "IT Intern",
    org: "Accenture",
    team: "Travel Operations Team",
    period: "2026 – Dec 2026",
    current: true,
    logo: "/images/logos/accenture.png",
    monogram: ">",
    brand: "#A100FF",
    summary: "Interning with Accenture's Travel Ops team through December 2026, supporting IT operations in a global enterprise environment.",
  },
  {
    role: "BS Information Technology",
    org: "University of San Carlos",
    period: "Expected Graduation 2027",
    logo: "/images/logos/usc.svg",
    monogram: "USC",
    brand: "#0B6B3A",
    summary: "Focused on networking, cybersecurity operations, system administration, and full-stack software development.",
  },
  {
    role: "STEM Strand",
    org: "Saint Alphonsus Catholic School",
    team: "Lapu-Lapu City",
    period: "Senior High School",
    logo: "/images/logos/sacs.jpg",
    monogram: "SACS",
    brand: "#1E3A8A",
    summary: "Studied under the Science, Technology, Engineering, and Mathematics (STEM) strand.",
  },
]

export const contacts = [
  { label: "Gmail", href: "mailto:charlesbenedictboquecosa@gmail.com", icon: "/images/mail.png" },
  { label: "GitHub", href: "https://github.com/Whitebeardddd", icon: "/images/githublogo.png" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/charles-benedict-boquecosa-31a26a37a/", icon: "/images/linkedin.png" },
  { label: "Facebook", href: "https://www.facebook.com/charlesbenedictboquecosa", icon: "/images/fb.png" },
  { label: "Instagram", href: "https://www.instagram.com/mister_bokii/", icon: "/images/instagram.png" },
  { label: "Curriculum Vitae", href: "/files/Boquecosa_CV.pdf", icon: "/images/pdf.png" },
  { label: "Resume", href: "/files/BoquecosaResume.pdf", icon: "/images/pdf.png" },
]

/* ── Selectors ─────────────────────────────────────────────── */

/** Homepage "Featured work": every Security-tagged project, never a hand-picked list. */
export const securityProjects: Project[] = projects.filter((p) => p.category === "Security")

export const ongoingProjects: Project[] = projects.filter((p) => p.status === "Ongoing")

export const featuredCertificates: Certificate[] = certificates.filter((c) => c.featured)

export const getProject = (slug: string) => projects.find((p) => p.slug === slug)

export const getCertificate = (slug: string) => certificates.find((c) => c.slug === slug)

export const projectHref = (p: Pick<Project, "slug">) => `/projects/${p.slug}`

export const certificateHref = (c: Pick<Certificate, "slug">) => `/certifications/${c.slug}`

/** Previous and next items for the bottom-of-page navigation (wraps around). */
export function neighbours<T>(list: T[], index: number): { prev: T; next: T } {
  return {
    prev: list[(index - 1 + list.length) % list.length],
    next: list[(index + 1) % list.length],
  }
}

/** True for links that leave the site (repos, demos), as opposed to pages and files we host. */
export const isExternal = (href: string) => /^https?:\/\//.test(href)
