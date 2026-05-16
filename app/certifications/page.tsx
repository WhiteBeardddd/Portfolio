"use client"

import { useState } from "react"
import CertCard, { Certificate } from "@/components/certificationCard"

type Category = "All" | "Cybersecurity" | "Networking" | "Cloud" | "Events" | "Hackathon"

const certificates: (Certificate & { category: Category })[] = [
  {
    title: "Introduction to Cyber Security",
    image: "/images/introcybersec.png",
    url: "/files/Introduction_to_Cybersecurity_certificate_23100750-usc-edu-ph_58afaa5e-909d-4517-a170-4daa39d90b42.pdf",
    date: "May 2024",
    category: "Cybersecurity",
  },
  {
    title: "Junior Cybersecurity Analyst Career Path",
    image: "/images/cyberessentials.png",
    url: "/files/Document0001.pdf",
    date: "November 2025",
    category: "Cybersecurity",
  },
  {
    title: "CCNAv7: Switching, Routing, and Wireless Essentials",
    image: "/images/networking2.png",
    url: "/files/CCNA-_Switching-_Routing-_and_Wireless_Essentials_certificate_23100750-usc-edu-ph_53735774-6b6e-4776-b010-bc8e0e7b9818 (1).pdf",
    date: "Jan 2025",
    category: "Networking",
  },
  {
    title: "Cloud Infrastructure Fundamentals",
    image: "/images/zuitt.jpeg",
    url: "https://share.zertify.zuitt.co/certificate/195bcbd9-99b3-4fc4-ba9d-88992647244c",
    date: "May 2025",
    category: "Cloud",
  },
  {
    title: "National Certificate CCA",
    image: "/images/computer_systems_servicing.png",
    url: "/files/NC.pdf",
    date: "May 2025 | to view password = 09082004B",
    category: "Networking",
  },
  {
    title: "The Future of Tech | Vietnam Hackathon",
    image: "/images/hackathonsbs.png",
    url: "/files/Document0002.pdf",
    date: "April 2025",
    category: "Hackathon",
  },
  {
    title: "The Future of Tech | Vietnam Study Tour",
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

const categories: Category[] = ["All", "Cybersecurity", "Networking", "Cloud", "Events", "Hackathon"]

const categoryColors: Record<Category, string> = {
  All: "text-[#e4ae0b] border-[#e4ae0b]",
  Cybersecurity: "text-blue-400 border-blue-400",
  Networking: "text-green-400 border-green-400",
  Cloud: "text-purple-400 border-purple-400",
  Events: "text-pink-400 border-pink-400",
  Hackathon: "text-orange-400 border-orange-400",
}

const categoryBg: Record<Category, string> = {
  All: "bg-[#e4ae0b]/10",
  Cybersecurity: "bg-blue-400/10",
  Networking: "bg-green-400/10",
  Cloud: "bg-purple-400/10",
  Events: "bg-pink-400/10",
  Hackathon: "bg-orange-400/10",
}

export default function CertificationsPage() {
  const [activeCategory, setActiveCategory] = useState<Category>("All")

  const filtered = activeCategory === "All"
    ? certificates
    : certificates.filter((c) => c.category === activeCategory)

  const counts = categories.reduce((acc, cat) => {
    acc[cat] = cat === "All"
      ? certificates.length
      : certificates.filter((c) => c.category === cat).length
    return acc
  }, {} as Record<Category, number>)

  return (
    <div className="relative min-h-screen pb-24">
      {/* Hero */}
      <div className="relative px-4 sm:px-6 pt-14 sm:pt-20 pb-10 text-center">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[200px] bg-[#e4ae0b]/8 blur-[100px] rounded-full pointer-events-none" />
        <p className="text-xs sm:text-sm uppercase tracking-widest text-[#e4ae0b] font-semibold mb-3">
          ✦ Credentials
        </p>
        <h1 className="text-3xl sm:text-5xl text-[#ffffff] lg:text-6xl font-extrabold tracking-tight leading-tight">
          Certifications &amp; <span className="text-[#e4ae0b]">Trainings</span>
        </h1>
        <p className="mt-3 text-gray-400 text-sm sm:text-base max-w-md mx-auto">
          Earned with consistent hardwork, late nights, and a lot of coffee ☕
        </p>

        {/* Stats strip */}
        <div className="mt-8 flex justify-center gap-6 sm:gap-10">
          {(["Cybersecurity", "Networking", "Cloud", "Events", "Hackathon"] as Category[]).map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className="flex flex-col items-center gap-1 group"
            >
              <span className={`text-xl sm:text-2xl font-extrabold transition-colors ${activeCategory === cat ? categoryColors[cat].split(" ")[0] : "text-white"}`}>
                {counts[cat]}
              </span>
              <span className="text-gray-500 text-xs group-hover:text-gray-300 transition-colors truncate max-w-[70px]">{cat}</span>
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
      <div className="px-4 sm:px-6 max-w-6xl mx-auto mb-5">
        <p className="text-gray-500 text-sm">
          Showing <span className="text-white font-semibold">{filtered.length}</span> certificate{filtered.length !== 1 ? "s" : ""}
          {activeCategory !== "All" && <> in <span className={categoryColors[activeCategory].split(" ")[0]}>{activeCategory}</span></>}
        </p>
      </div>

      {/* Cards Grid */}
      <div className="px-4 sm:px-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 max-w-6xl mx-auto">
        {filtered.map((cert, index) => (
          <CertCard key={index} {...cert} />
        ))}
      </div>

      {filtered.length === 0 && (
        <div className="text-center mt-20">
          <p className="text-4xl mb-3">🎓</p>
          <p className="text-gray-500">No certificates in this category yet.</p>
        </div>
      )}
    </div>
  )
}