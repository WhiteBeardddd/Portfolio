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
    <div className="px-6 pb-24">
      {/* Header */}
      <h1 className="text-center text-7xl font-extrabold tracking-tight pt-16 pb-2">
        Certifications & Trainings
      </h1>

      <p className="text-center text-lg md:text-xl lg:text-2xl font-medium tracking-tight">
        I earned these with consistent
        <span className="text-[#e4ae0b]"> hardwork</span> and
        <span className="text-[#e4ae0b]"> coffee</span>
      </p>

      {/* Filter Tabs */}
      <div className="mt-12 flex flex-wrap justify-center gap-3">
        {categories.map((cat) => {
          const isActive = activeCategory === cat
          return (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`
                px-5 py-2 rounded-full text-sm font-semibold border transition-all duration-200
                ${isActive
                  ? `${categoryColors[cat]} ${categoryBg[cat]} border-opacity-100 scale-105`
                  : "text-gray-400 border-white/10 hover:border-white/30 hover:text-white"
                }
              `}
            >
              {cat}
              <span className={`ml-2 text-xs font-bold opacity-70`}>
                {counts[cat]}
              </span>
            </button>
          )
        })}
      </div>

      {/* Section label */}
      {activeCategory !== "All" && (
        <p className={`text-center mt-6 text-sm font-semibold uppercase tracking-widest ${categoryColors[activeCategory]}`}>
          — {activeCategory} —
        </p>
      )}

      {/* Cards Grid */}
      <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
        {filtered.map((cert, index) => (
          <CertCard key={index} {...cert} />
        ))}
      </div>

      {/* Empty state */}
      {filtered.length === 0 && (
        <p className="text-center text-gray-500 mt-16">No certificates in this category yet.</p>
      )}
    </div>
  )
}