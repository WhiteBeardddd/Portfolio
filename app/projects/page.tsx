"use client"

import { useState } from "react"
import ProjectCard from "@/components/projectCard"
import type { Project } from "@/types/project"

type Category = "All" | "Networking" | "Security" | "Mobile" | "Web & Fullstack"

const projects: (Project & { category: Category })[] = [
  {
    title: "Structured Cabling Plan for StudyLab",
    projectType: "Final Project · Networking 1",
    role: "Team Leader",
    date: "Mar 2024 – May 2024",
    category: "Networking",
    description: (
      <>
        <ul className="list-disc ml-6 space-y-2 mb-2">
          <li>Designed scalable multi-site cabling and network architecture for a coworking environment.</li>
          <li>Created IPv4/IPv6 VLSM addressing and routing (RIPv2, static IPv6).</li>
          <li>Simulated and validated the network using Cisco Packet Tracer and Lucidchart.</li>
        </ul>
      </>
    ),
    image: "/images/net1.png",
    url: "/files/Networking 1 Final Project.pdf"
  },
  {
    title: "IP Telephony",
    projectType: "Final Project · Networking 2",
    role: "By Pair",
    date: "Nov 2024 – Dec 2024",
    category: "Networking",
    description: (
      <>
        <ul className="list-disc ml-6 space-y-2 mb-2">
          <li>Built a multi-branch VoIP-enabled enterprise network using Cisco IOS.</li>
          <li>Implemented VLANs, Inter-VLAN routing, OSPF and EIGRP routing protocols.</li>
          <li>Configured DHCPv4/v6 services and applied Layer 2 security using EtherChannel.</li>
        </ul>
      </>
    ),
    image: "/images/net2.png",
    url: "/files/Networking 2 Final Project.pdf"
  },
  {
    title: "DCISM Network Infrastructure Runbook",
    projectType: "Final Project · Network Management",
    role: "Member",
    date: "Nov 2025 – Dec 2025",
    category: "Networking",
    description: (
      <>
        <ul className="list-disc ml-6 space-y-2 mb-2">
          <li>Developed a structured network infrastructure runbook for operational management.</li>
          <li>Documented monitoring, troubleshooting, and maintenance procedures.</li>
          <li>Outlined escalation workflows and system recovery strategies.</li>
        </ul>
      </>
    ),
    image: "/images/dcism.png",
    url: "/files/Network Management Final Project.pdf"
  },
  {
    title: "Network Security Simulation – Attacker vs Defender",
    projectType: "Final Project · Network Security",
    role: "By Pair",
    date: "Jun 2025 – Jul 2025",
    category: "Security",
    description: (
      <>
        <ul className="list-disc ml-6 space-y-2 mb-2">
          <li>Performed penetration testing using Kali Linux tools including Nmap, Metasploit, and SQLmap.</li>
          <li>Implemented defensive mechanisms using iptables firewall, Snort IDS, OpenVAS vulnerability scanner, and Wireshark.</li>
          <li>Analyzed attack behavior across OSI layers and documented mitigation strategies.</li>
        </ul>
      </>
    ),
    image: "/images/kali_desktop_view.jpg",
    url: "/files/Network Security Final Project.pdf"
  },
  {
    title: "Peer-to-Peer Encrypted Communication System with Multi-Layer Cipher Integration",
    projectType: "Final Project · Information Assurance & Security",
    role: "By Pair",
    date: "Jun 2025 – Jul 2025",
    category: "Security",
    description: (
      <>
        <ul className="list-disc ml-6 space-y-2 mb-2">
          <li>Developed a peer-to-peer encrypted chat system with secure message transmission.</li>
          <li>Implemented layered cryptographic algorithms for enhanced confidentiality.</li>
          <li>Added integrity verification and decryption validation mechanisms.</li>
        </ul>
      </>
    ),
    image: "/images/p2p.png",
    url: "https://github.com/WhiteBeardddd/Final-Project-IAS"
  },
  {
    title: "EV Alert System",
    projectType: "Final Project · Signals and Systems",
    role: "Member",
    date: "Nov 2025 – Dec 2025",
    category: "Mobile",
    description: (
      <>
        <ul className="list-disc ml-6 space-y-2 mb-2">
          <li>Developed an Android mobile application for emergency vehicle detection alerts.</li>
          <li>Implemented alarm notification system triggered by nearby emergency signals.</li>
          <li>Designed user-friendly interface for real-time alert monitoring.</li>
        </ul>
        <h1 className="font-bold mb-2 text-xl sm:text-2xl">Repository Links</h1>
        <ul className="list-disc ml-6 space-y-2">
          <li>Frontend: <a href="https://github.com/WhiteBeardddd/EV-Alert-System-FrontEnd" className="text-[#4d6cdd] underline hover:text-[#f6c742]">Link</a></li>
          <li>BackEnd: <a href="https://github.com/Gnashal/evalert-api" className="text-[#4d6cdd] underline hover:text-[#f6c742]">Link</a></li>
        </ul>
      </>
    ),
    image: "/images/EV.png",
    url: "https://github.com/WhiteBeardddd/EV-Alert-System-FrontEnd"
  },
  {
    title: "Agrikita",
    projectType: "Mobile Development · Final Project",
    role: "Frontend Developer",
    date: "April 2024 – May 2024",
    category: "Mobile",
    description: (
      <>
        <ul className="list-disc ml-6 space-y-2 mb-2">
          <li>Developed a mobile platform connecting farmers and vendors for agricultural trade.</li>
          <li>Implemented product listing, buying, and selling functionalities.</li>
          <li>Designed responsive frontend interface for rural user accessibility.</li>
        </ul>
        <h1 className="font-bold mb-2 text-xl sm:text-2xl">Repository Links</h1>
        <ul className="list-disc ml-6 space-y-2">
          <li>Frontend: <a href="https://github.com/Gnashal/AgriKita" className="text-[#4d6cdd] underline hover:text-[#f6c742]">Link</a></li>
          <li>BackEnd: <a href="https://github.com/Gnashal/Agrikita-backendi" className="text-[#4d6cdd] underline hover:text-[#f6c742]">Link</a></li>
        </ul>
      </>
    ),
    image: "/images/agrikita.jpeg",
    url: "https://github.com/Gnashal/AgriKita"
  },
  {
    title: "Finnbank",
    projectType: "Systems Integration and Architecture · Final Project",
    role: "FullStack Developer",
    date: "Jan 2024 – May 2024",
    category: "Web & Fullstack",
    description: (
      <>
        <ul className="list-disc ml-6 space-y-2 mb-2">
          <li>Developed a microservice-based online banking system architecture.</li>
          <li>Implemented secure authentication, transaction handling, and service integration.</li>
          <li>Integrated multiple backend services with scalable system design.</li>
        </ul>
        <h1 className="font-bold mb-2 text-xl sm:text-2xl">Repository Links</h1>
        <ul className="list-disc ml-6 space-y-2">
          <li>Frontend: <a href="https://github.com/23000003/Finnbank-web" className="text-[#4d6cdd] underline hover:text-[#f6c742]">Link</a></li>
          <li>BackEnd: <a href="https://github.com/23000003/Finnbank" className="text-[#4d6cdd] underline hover:text-[#f6c742]">Link</a></li>
        </ul>
      </>
    ),
    image: "/images/finbank.png",
    url: "https://github.com/23000003/Finnbank-web"
  },
  {
    title: "Stockwise",
    projectType: "Information Management 2 · Final Project",
    role: "Frontend Developer & Founder",
    date: "Jun 2024 – Jul 2024",
    category: "Web & Fullstack",
    description: (
      <>
        <ul className="list-disc ml-6 space-y-2 mb-2">
          <li>Built an inventory management web application using React and Supabase.</li>
          <li>Implemented stock tracking, product management, and database synchronization.</li>
          <li>Designed responsive UI and user-friendly dashboard interface.</li>
        </ul>
      </>
    ),
    image: "/images/stockwise.png",
    url: "https://github.com/OppenJayme/SUMMER-IM2-FINAL-PROJECTS"
  }
]

const categories: Category[] = ["All", "Networking", "Security", "Mobile", "Web & Fullstack"]

const categoryColors: Record<Category, string> = {
  All: "text-[#e4ae0b] border-[#e4ae0b]",
  Networking: "text-green-400 border-green-400",
  Security: "text-blue-400 border-blue-400",
  Mobile: "text-pink-400 border-pink-400",
  "Web & Fullstack": "text-purple-400 border-purple-400",
}

const categoryBg: Record<Category, string> = {
  All: "bg-[#e4ae0b]/10",
  Networking: "bg-green-400/10",
  Security: "bg-blue-400/10",
  Mobile: "bg-pink-400/10",
  "Web & Fullstack": "bg-purple-400/10",
}

export default function ProjectsPage() {
  const [activeCategory, setActiveCategory] = useState<Category>("All")

  const filtered = activeCategory === "All"
    ? projects
    : projects.filter((p) => p.category === activeCategory)

  const counts = categories.reduce((acc, cat) => {
    acc[cat] = cat === "All"
      ? projects.length
      : projects.filter((p) => p.category === cat).length
    return acc
  }, {} as Record<Category, number>)

  return (
    <div className="relative min-h-screen pb-24">
      {/* Hero */}
      <div className="relative px-4 sm:px-6 pt-14 sm:pt-20 pb-10 text-center">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[200px] bg-[#e4ae0b]/8 blur-[100px] rounded-full pointer-events-none" />
        <p className="text-xs sm:text-sm uppercase tracking-widest text-[#e4ae0b] font-semibold mb-3">
          ✦ My Work
        </p>
        <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-tight">
          School <span className="text-[#e4ae0b]">Projects</span>
        </h1>
        <p className="mt-3 text-gray-400 text-sm sm:text-base max-w-md mx-auto">
          Academic projects, prototypes &amp; shenanigans built along the way.
        </p>

        {/* Stats row */}
        <div className="mt-8 flex justify-center gap-6 sm:gap-10">
          {(["All", "Networking", "Security", "Mobile", "Web & Fullstack"] as Category[]).slice(1).map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className="flex flex-col items-center gap-1 group"
            >
              <span className={`text-xl sm:text-2xl font-extrabold transition-colors ${activeCategory === cat ? categoryColors[cat].split(" ")[0] : "text-white"}`}>
                {counts[cat]}
              </span>
              <span className="text-gray-500 text-xs group-hover:text-gray-300 transition-colors">{cat}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Filter Tabs */}
      <div className="px-4 sm:px-6 flex flex-wrap justify-center gap-2 sm:gap-3 mb-8">
        {categories.map((cat) => {
          const isActive = activeCategory === cat
          return (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`
                px-4 sm:px-5 py-2 rounded-full text-xs sm:text-sm font-semibold border transition-all duration-200
                ${isActive
                  ? `${categoryColors[cat]} ${categoryBg[cat]} shadow-lg`
                  : "text-gray-400 border-white/10 bg-white/5 hover:border-white/20 hover:text-white"
                }
              `}
            >
              {cat}
              <span className="ml-1.5 text-xs font-bold opacity-60">{counts[cat]}</span>
            </button>
          )
        })}
      </div>

      {/* Results count */}
      <div className="px-4 sm:px-6 max-w-5xl mx-auto mb-5">
        <p className="text-gray-500 text-sm">
          Showing <span className="text-white font-semibold">{filtered.length}</span> project{filtered.length !== 1 ? "s" : ""}
          {activeCategory !== "All" && <> in <span className={categoryColors[activeCategory].split(" ")[0]}>{activeCategory}</span></>}
        </p>
      </div>

      {/* Project Cards */}
      <div className="px-4 sm:px-6 flex flex-col gap-5 sm:gap-6 max-w-5xl mx-auto">
        {filtered.map((project, index) => (
          <ProjectCard key={index} {...project} />
        ))}
      </div>

      {filtered.length === 0 && (
        <div className="text-center mt-20">
          <p className="text-4xl mb-3">🔍</p>
          <p className="text-gray-500">No projects in this category yet.</p>
        </div>
      )}
    </div>
  )
}