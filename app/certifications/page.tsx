"use client"

import CertCard, { Certificate } from "@/components/certificationCard"

const certificates: Certificate[] = [
  {
    title: "Introduction to Cyber Security",
    image: "/images/introcybersec.png",
    url: "/files/Introduction_to_Cybersecurity_certificate_23100750-usc-edu-ph_58afaa5e-909d-4517-a170-4daa39d90b42.pdf",
    date: "May 2024", // ← you can change later
  },
  {
    title: "Junior Cybersecurity Analyst Career Path",
    image: "/images/cyberessentials.png",
    url: "/files/Junior_Cybersecurity_Analyst_Career_Path_certificate_23100750-usc-edu-ph_a16d0047-a42d-4d2d-aa5b-e7bafd153396 (1) (1).pdf",
    date: "November 2025",
  },
  {
    title: "CCNAv7: Switching, Routing, and Wireless Essentials",
    image: "/images/networking2.png",
    url: "/files/CCNA-_Switching-_Routing-_and_Wireless_Essentials_certificate_23100750-usc-edu-ph_53735774-6b6e-4776-b010-bc8e0e7b9818 (1).pdf",
    date: "Jan 2025",
  },
  {
    title: "Cloud Infrastructure Fundamentals",
    image: "/images/zuitt.jpeg",
    url: "https://share.zertify.zuitt.co/certificate/195bcbd9-99b3-4fc4-ba9d-88992647244c",
    date: "May 2025",
  },
]

export default function CertificationsPage() {
  return (
    <div className="px-6">
      <h1 className="text-center text-6xl md:text-7xl lg:text-8xl font-extrabold tracking-tight pt-16 pb-2">
        Certifications
      </h1>

      <p className="text-center text-lg md:text-xl lg:text-2xl font-medium tracking-tight">
        I earned these with consistent
        <span className="text-[#e4ae0b]"> hardwork</span> and
        <span className="text-[#e4ae0b]"> coffee</span>
      </p>

      {/* Cards Grid */}
      <div
        className="
          mt-16
          grid
          grid-cols-1
          md:grid-cols-2
          gap-8
          max-w-6xl
          mx-auto
        "
      >
        {certificates.map((cert, index) => (
          <CertCard key={index} {...cert} />
        ))}
      </div>
    </div>
  )
}
