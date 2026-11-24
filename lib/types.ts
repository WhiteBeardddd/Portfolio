/* Content model for the portfolio. Pages only render these shapes; all words live in lib/. */

export type ProjectCategory = "Networking" | "Security" | "Mobile" | "Web & Fullstack" | "Game Development"

export type ProjectStatus = "Ongoing" | "Completed"

/**
 * How I worked on the project. Decides the team section on the case study:
 * Leader -> "How I led the team", Member -> "What I contributed", Solo -> none.
 */
export type TeamRole = "Solo" | "Leader" | "Member"

export type Link = {
  label: string
  href: string
}

/** A concrete, sourced number shown at the top of a case study. */
export type Metric = {
  value: string
  label: string
}

/** "I used <tool> to solve <problem>." */
export type ToolUse = {
  tool: string
  problem: string
}

/** Situation, Task, Action, Result. Situation/Task: 1-2 sentences. Action/Result: short bullets. */
export type Star = {
  situation: string
  task: string
  action: string[]
  result: string[]
}

/** Evidence image. width/height are the real pixel size of the file in /public. */
export type Shot = {
  src: string
  width: number
  height: number
  alt: string
  caption: string
}

export type Project = {
  slug: string
  title: string
  /** Optional longer name or subtitle shown under the title. */
  subtitle?: string
  projectType: string
  role: string
  teamRole: TeamRole
  /** Plain description of the team, e.g. "4-person capstone team". */
  team: string
  date: string
  category: ProjectCategory
  status: ProjectStatus
  /** Card image (cover). */
  image: string
  /** One or two sentence lead used on cards and as the page description. */
  summary: string
  stack: string[]
  /** Repos, demos, videos. */
  links?: Link[]
  /** Reports and documents the case study is written from. */
  documents?: Link[]
  metrics?: Metric[]
  star: Star
  toolbox: ToolUse[]
  /** Required when teamRole is "Member". */
  contribution?: string[]
  /** Required when teamRole is "Leader". */
  leadership?: string[]
  gallery?: Shot[]
}

export type CertCategory = "Cybersecurity" | "Networking" | "Cloud" | "Events" | "Hackathon"

export type Certificate = {
  slug: string
  title: string
  /** Issuing organization, as printed on the certificate. */
  issuer: string
  image: string
  /** Original certificate (PDF in /files or the issuer's verification page). */
  url: string
  date: string
  category: CertCategory
  featured?: boolean
  /** What the certificate itself says, when it differs from the title. */
  printedAs?: string
  /** Extra instruction needed to open the original (e.g. a PDF password). */
  accessNote?: string
  summary: string
  star: Star
  skills: string[]
  /** Slugs of projects where this knowledge was used. */
  relatedProjects?: string[]
}

export type Experience = {
  role: string
  org: string
  team?: string
  period: string
  current?: boolean
  /** Path to a real logo in /public. When absent, the monogram badge is shown. */
  logo?: string
  /** Short text shown in the badge when there is no logo file. */
  monogram: string
  /** Badge background color for the monogram. */
  brand: string
  summary: string
}
