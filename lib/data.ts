export type ProjectCategory =
  | "Networking"
  | "Security"
  | "Mobile"
  | "Web & Fullstack"
  | "Game Development"

export type ProjectStatus = "Ongoing" | "Completed"

export type ProjectLink = {
  label: string
  href: string
}

export type Project = {
  title: string
  projectType: string
  role: string
  date: string
  category: ProjectCategory
  status: ProjectStatus
  image: string
  url: string
  highlights: string[]
  stack?: string[]
  links?: ProjectLink[]
  featured?: boolean
}

export type CertCategory = "Cybersecurity" | "Networking" | "Cloud" | "Events" | "Hackathon"

export type Certificate = {
  title: string
  /** Issuing organization, as printed on the certificate. */
  issuer?: string
  image: string
  url: string
  date: string
  category: CertCategory
  featured?: boolean
}

export type Experience = {
  role: string
  org: string
  team?: string
  period: string
  current?: boolean
  /** Path to a real logo in /public (e.g. "/images/logos/accenture.png"). When absent, the monogram badge is shown. */
  logo?: string
  /** Short text shown in the badge when there is no logo file. */
  monogram: string
  /** Badge background color for the monogram. */
  brand: string
  summary: string
}

export const projectCategories: ProjectCategory[] = [
  "Networking",
  "Security",
  "Mobile",
  "Web & Fullstack",
  "Game Development",
]

export const certCategories: CertCategory[] = ["Cybersecurity", "Networking", "Cloud", "Events", "Hackathon"]

/* Shared palette for category chips. Full class strings so Tailwind can see them. */
export const categoryTone: Record<string, { text: string; dot: string; chip: string }> = {
  Networking: { text: "text-emerald-400", dot: "bg-emerald-400", chip: "border-emerald-400/30 bg-emerald-400/10 text-emerald-300" },
  Security: { text: "text-sky-400", dot: "bg-sky-400", chip: "border-sky-400/30 bg-sky-400/10 text-sky-300" },
  Cybersecurity: { text: "text-sky-400", dot: "bg-sky-400", chip: "border-sky-400/30 bg-sky-400/10 text-sky-300" },
  Mobile: { text: "text-pink-400", dot: "bg-pink-400", chip: "border-pink-400/30 bg-pink-400/10 text-pink-300" },
  "Web & Fullstack": { text: "text-violet-400", dot: "bg-violet-400", chip: "border-violet-400/30 bg-violet-400/10 text-violet-300" },
  Cloud: { text: "text-violet-400", dot: "bg-violet-400", chip: "border-violet-400/30 bg-violet-400/10 text-violet-300" },
  "Game Development": { text: "text-orange-400", dot: "bg-orange-400", chip: "border-orange-400/30 bg-orange-400/10 text-orange-300" },
  Hackathon: { text: "text-orange-400", dot: "bg-orange-400", chip: "border-orange-400/30 bg-orange-400/10 text-orange-300" },
  Events: { text: "text-pink-400", dot: "bg-pink-400", chip: "border-pink-400/30 bg-pink-400/10 text-pink-300" },
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

export const projects: Project[] = [
  {
    title: "BioSphere – Biological Museum Management System",
    projectType: "Capstone Project · USC Biological Museum",
    role: "Full-Stack Developer",
    date: "Aug 2026 – Present",
    category: "Web & Fullstack",
    status: "Ongoing",
    image: "/images/biosphere.svg",
    url: "https://github.com/OppenJayme/biosphere-frontend",
    highlights: [
      "Building an offline-first museum management system for the University of San Carlos Biological Museum, replacing paper and spreadsheet specimen records.",
      "Covers a curator PWA for specimen cataloging, storage locations, inquiries, and reports, plus a public website with QR exhibit pages and selective WebAR.",
      "Frontend in Next.js, TypeScript, and Tailwind CSS; backend is a NestJS modular monolith targeting PostgreSQL via Prisma.",
      "Hardened frontend authentication, including closing a login open-redirect gap.",
    ],
    stack: ["Next.js", "TypeScript", "Tailwind CSS", "NestJS", "PostgreSQL", "Prisma"],
    links: [
      { label: "Frontend Repository", href: "https://github.com/OppenJayme/biosphere-frontend" },
      { label: "Backend Repository", href: "https://github.com/OppenJayme/biosphere-backend" },
    ],
  },
  {
    title: "BlueTech – Job Board & HRMS Platform",
    projectType: "Group Project · Integrative Programming",
    role: "Full-Stack Developer",
    date: "Sep 2026 – Present",
    category: "Web & Fullstack",
    status: "Ongoing",
    image: "/images/bluetech.svg",
    url: "https://github.com/WhiteBeardddd/IP-Project-BlueTech-Group1",
    highlights: [
      "Developing two independent systems, a Job Board and an HR Management System, inside a single pnpm monorepo.",
      "Each system pairs a Next.js (App Router) frontend with a NestJS REST backend, with health-check endpoints on every service.",
      "Structured with shared workspace scripts and per-app environment configs so the team can run either system on its own.",
    ],
    stack: ["Next.js", "NestJS", "TypeScript", "pnpm"],
    links: [{ label: "Repository", href: "https://github.com/WhiteBeardddd/IP-Project-BlueTech-Group1" }],
  },
  {
    title: "CubeTech HRMS",
    projectType: "Internship Technical Assessment · CubeTech Innovations",
    role: "FullStack Developer",
    date: "2026",
    category: "Web & Fullstack",
    status: "Completed",
    image: "/images/cubetech.png",
    url: "https://github.com/WhiteBeardddd/CubeTech-HRMS",
    highlights: [
      "Built a mini HR management system as a technical assessment for a CubeTech Innovations internship application.",
      "Implemented core HR workflows using Next.js on the frontend with Supabase for authentication and data storage.",
      "Handled deployment to Vercel along with UI refinements and print-friendly styling for document/report views.",
    ],
    stack: ["Next.js", "Supabase", "Vercel"],
    links: [
      { label: "Repository", href: "https://github.com/WhiteBeardddd/CubeTech-HRMS" },
      { label: "Live Demo", href: "https://cubetech-hrms.vercel.app/login" },
    ],
  },
  {
    title: "TTIGKAGASCIPTRMBIHTWHTGOOP",
    projectType: "Game Development Project",
    role: "Fullstack Game Developer",
    date: "Apr 2026 – May 2026",
    category: "Game Development",
    status: "Completed",
    image: "/images/gamedev.png",
    url: "https://github.com/WhiteBeardddd/ttigkagasciptrmbihtwhtgoop",
    highlights: [
      "Built a 2D platformer in Godot Engine (GDScript) with 7 maps, combat, and HP persistence across scenes.",
      "Designed enemy AI, player mechanics, and an NPC dialogue system for interactive storytelling.",
      "Implemented a local Leaderboard with score data saved and read from the game's user data folder.",
    ],
    stack: ["Godot", "GDScript"],
    links: [
      { label: "Dev Logs", href: "https://www.youtube.com/playlist?list=PLEGKlBQ_-ct_TwAO4X9BDPEmizk1LJdgv" },
      { label: "Repository", href: "https://github.com/WhiteBeardddd/ttigkagasciptrmbihtwhtgoop" },
    ],
  },
  {
    title: "TaraBytes – Android + Supabase Mobile App",
    projectType: "Software Quality Assurance Project",
    role: "Lead Developer / Full-Stack Engineer",
    date: "Mar 2026 – May 2026",
    category: "Mobile",
    status: "Completed",
    image: "/images/tarabytes.jpg",
    url: "https://github.com/WhiteBeardddd/TaraBytes",
    highlights: [
      "Built a mobile application on Android using Java and XML, with Supabase as a fully managed Backend-as-a-Service (BaaS) — eliminating the need for a custom server.",
      "Integrated Supabase Auth for user registration, login, and JWT-based session management, securing all subsequent API requests with token authorization.",
      "Leveraged Supabase's auto-generated REST API over PostgreSQL for all structured data operations (GET, POST, PATCH, DELETE), with row-level security enforced at the database level.",
      "Implemented Supabase Storage Buckets for image file management — uploading binary data, retrieving public/signed URLs, and writing references back to the database for on-demand rendering.",
    ],
    stack: ["Java", "Android", "Supabase", "PostgreSQL"],
    links: [{ label: "Repository", href: "https://github.com/WhiteBeardddd/TaraBytes" }],
  },
  {
    title: "Home SIEM Lab Setup & SSH Brute Force Detection",
    projectType: "Personal Project",
    role: "Security Engineer / Lab Architect",
    date: "Mar 2026",
    category: "Security",
    status: "Completed",
    image: "/images/seim-brutefroce-ssh.png",
    url: "/files/SIEM_SSH_BruteForce_Report_Documentation.pdf",
    highlights: [
      "Deployed Splunk Enterprise on Windows as a fully functional home SIEM, ingesting real-time logs from a Kali Linux VM via Splunk Universal Forwarder.",
      "Configured systemd journal log forwarding on Kali Linux to enable SSH authentication event monitoring in Splunk.",
      "Simulated a realistic SSH brute force attack using Hydra, generating 33 detected failed login events captured and visible in Splunk Search & Reporting.",
      "Validated end-to-end attacker/defender pipeline: attack execution on Kali → log forwarding → real-time SIEM detection on Windows.",
    ],
    stack: ["Splunk", "Kali Linux", "Hydra"],
    links: [{ label: "Report", href: "/files/SIEM_SSH_BruteForce_Report_Documentation.pdf" }],
  },
  {
    title: "DCISM Network Infrastructure Runbook",
    projectType: "Final Project · Network Management",
    role: "Member",
    date: "Nov 2025 – Dec 2025",
    category: "Networking",
    status: "Completed",
    image: "/images/dcism.png",
    url: "/files/Network Management Final Project.pdf",
    highlights: [
      "Developed a structured network infrastructure runbook for operational management.",
      "Documented monitoring, troubleshooting, and maintenance procedures.",
      "Outlined escalation workflows and system recovery strategies.",
    ],
  },
  {
    title: "EV Alert System",
    projectType: "Final Project · Signals and Systems",
    role: "Member",
    date: "Nov 2025 – Dec 2025",
    category: "Mobile",
    status: "Completed",
    image: "/images/EV.png",
    url: "https://github.com/WhiteBeardddd/EV-Alert-System-FrontEnd",
    highlights: [
      "Developed an Android mobile application for emergency vehicle detection alerts.",
      "Implemented alarm notification system triggered by nearby emergency signals.",
      "Designed user-friendly interface for real-time alert monitoring.",
    ],
    links: [
      { label: "Frontend Repository", href: "https://github.com/WhiteBeardddd/EV-Alert-System-FrontEnd" },
      { label: "Backend Repository", href: "https://github.com/Gnashal/evalert-api" },
    ],
  },
  {
    title: "Network Security Simulation – Attacker vs Defender",
    projectType: "Final Project · Network Security",
    role: "By Pair",
    date: "Jun 2025 – Jul 2025",
    category: "Security",
    status: "Completed",
    image: "/images/kali_desktop_view.jpg",
    url: "/files/Network Security Final Project.pdf",
    featured: true,
    highlights: [
      "Performed penetration testing using Kali Linux tools including Nmap, Metasploit, and SQLmap.",
      "Implemented defensive mechanisms using iptables firewall, Snort IDS, OpenVAS vulnerability scanner, and Wireshark.",
      "Analyzed attack behavior across OSI layers and documented mitigation strategies.",
    ],
    stack: ["Kali Linux", "Metasploit", "Snort", "Wireshark"],
  },
  {
    title: "Peer-to-Peer Encrypted Communication System with Multi-Layer Cipher Integration",
    projectType: "Final Project · Information Assurance & Security",
    role: "By Pair",
    date: "Jun 2025 – Jul 2025",
    category: "Security",
    status: "Completed",
    image: "/images/p2p.png",
    url: "https://github.com/WhiteBeardddd/Final-Project-IAS",
    featured: true,
    highlights: [
      "Developed a peer-to-peer encrypted chat system with secure message transmission.",
      "Implemented layered cryptographic algorithms for enhanced confidentiality.",
      "Added integrity verification and decryption validation mechanisms.",
    ],
    links: [{ label: "Repository", href: "https://github.com/WhiteBeardddd/Final-Project-IAS" }],
  },
  {
    title: "IP Telephony",
    projectType: "Final Project · Networking 2",
    role: "By Pair",
    date: "Nov 2024 – Dec 2024",
    category: "Networking",
    status: "Completed",
    image: "/images/net2.png",
    url: "/files/Networking 2 Final Project.pdf",
    highlights: [
      "Built a multi-branch VoIP-enabled enterprise network using Cisco IOS.",
      "Implemented VLANs, Inter-VLAN routing, OSPF and EIGRP routing protocols.",
      "Configured DHCPv4/v6 services and applied Layer 2 security using EtherChannel.",
    ],
    stack: ["Cisco IOS", "OSPF", "EIGRP"],
  },
  {
    title: "Stockwise",
    projectType: "Information Management 2 · Final Project",
    role: "Frontend Developer & Founder",
    date: "Jun 2024 – Jul 2024",
    category: "Web & Fullstack",
    status: "Completed",
    image: "/images/stockwise.png",
    url: "https://github.com/OppenJayme/SUMMER-IM2-FINAL-PROJECTS",
    featured: true,
    highlights: [
      "Built an inventory management web application using React and Supabase.",
      "Implemented stock tracking, product management, and database synchronization.",
      "Designed responsive UI and user-friendly dashboard interface.",
    ],
    stack: ["React", "Supabase"],
    links: [{ label: "Repository", href: "https://github.com/OppenJayme/SUMMER-IM2-FINAL-PROJECTS" }],
  },
  {
    title: "Agrikita",
    projectType: "Mobile Development · Final Project",
    role: "Frontend Developer",
    date: "Apr 2024 – May 2024",
    category: "Mobile",
    status: "Completed",
    image: "/images/agrikita.jpeg",
    url: "https://github.com/Gnashal/AgriKita",
    highlights: [
      "Developed a mobile platform connecting farmers and vendors for agricultural trade.",
      "Implemented product listing, buying, and selling functionalities.",
      "Designed responsive frontend interface for rural user accessibility.",
    ],
    links: [
      { label: "Frontend Repository", href: "https://github.com/Gnashal/AgriKita" },
      { label: "Backend Repository", href: "https://github.com/Gnashal/Agrikita-backend" },
    ],
  },
  {
    title: "Structured Cabling Plan for StudyLab",
    projectType: "Final Project · Networking 1",
    role: "Team Leader",
    date: "Mar 2024 – May 2024",
    category: "Networking",
    status: "Completed",
    image: "/images/net1.png",
    url: "/files/Networking 1 Final Project.pdf",
    highlights: [
      "Designed scalable multi-site cabling and network architecture for a coworking environment.",
      "Created IPv4/IPv6 VLSM addressing and routing (RIPv2, static IPv6).",
      "Simulated and validated the network using Cisco Packet Tracer and Lucidchart.",
    ],
    stack: ["Packet Tracer", "Lucidchart"],
  },
  {
    title: "Finnbank",
    projectType: "Systems Integration and Architecture · Final Project",
    role: "FullStack Developer",
    date: "Jan 2024 – May 2024",
    category: "Web & Fullstack",
    status: "Completed",
    image: "/images/finbank.png",
    url: "https://github.com/23000003/Finnbank-web",
    highlights: [
      "Developed a microservice-based online banking system architecture.",
      "Implemented secure authentication, transaction handling, and service integration.",
      "Integrated multiple backend services with scalable system design.",
    ],
    links: [
      { label: "Frontend Repository", href: "https://github.com/23000003/Finnbank-web" },
      { label: "Backend Repository", href: "https://github.com/23000003/Finnbank" },
    ],
  },
]

export const certificates: Certificate[] = [
  {
    title: "Junior Cybersecurity Analyst Career Path",
    issuer: "Cisco Networking Academy",
    image: "/images/cyberessentials.png",
    url: "/files/Document0001.pdf",
    date: "November 2025",
    category: "Cybersecurity",
    featured: true,
  },
  {
    title: "Introduction to Cyber Security",
    issuer: "Cisco Networking Academy",
    image: "/images/introcybersec.png",
    url: "/files/Introduction_to_Cybersecurity_certificate_23100750-usc-edu-ph_58afaa5e-909d-4517-a170-4daa39d90b42.pdf",
    date: "May 2024",
    category: "Cybersecurity",
  },
  {
    title: "CCNAv7: Switching, Routing, and Wireless Essentials",
    issuer: "Cisco Networking Academy",
    image: "/images/networking2.png",
    url: "/files/CCNA-_Switching-_Routing-_and_Wireless_Essentials_certificate_23100750-usc-edu-ph_53735774-6b6e-4776-b010-bc8e0e7b9818 (1).pdf",
    date: "Jan 2025",
    category: "Networking",
    featured: true,
  },
  {
    title: "National Certificate CCA",
    issuer: "TESDA",
    image: "/images/computer_systems_servicing.png",
    url: "/files/NC.pdf",
    date: "May 2025 | to view password = 09082004B",
    category: "Networking",
  },
  {
    title: "Cloud Infrastructure Fundamentals",
    issuer: "Zuitt",
    image: "/images/zuitt.jpeg",
    url: "https://share.zertify.zuitt.co/certificate/195bcbd9-99b3-4fc4-ba9d-88992647244c",
    date: "May 2025",
    category: "Cloud",
  },
  {
    title: "The Future of Tech | Vietnam Hackathon",
    issuer: "Saigon Business School",
    image: "/images/hackathonsbs.png",
    url: "/files/Document0002.pdf",
    date: "April 2025",
    category: "Hackathon",
    featured: true,
  },
  {
    title: "The Future of Tech | Vietnam Study Tour",
    issuer: "Saigon Business School",
    image: "/images/studytoursbs.png",
    url: "/files/Document0003.pdf",
    date: "March 2025 - April 2025",
    category: "Events",
  },
  {
    title: "Cybersecurity Awareness Seminar",
    image: "/images/cyberawareness.png",
    url: "/files/Document0004.pdf",
    date: "February 11, 2026",
    category: "Events",
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
