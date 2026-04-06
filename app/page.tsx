"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import TerminalCard from "@/components/terminalCard";
import ProfileCard from "@/components/profileCard";

const contacts = [
  {
    label: "Gmail",
    href: "mailto:charlesbenedictboquecosa@gmail.com",
    icon: "/images/mail.png",
  },
  {
    label: "GitHub",
    href: "https://github.com/Whitebeardddd",
    icon: "/images/githublogo.png",
  },
  {
    label: "Facebook",
    href: "https://www.facebook.com/charlesbenedictboquecosa",
    icon: "/images/fb.png",
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/charles-benedict-boquecosa-31a26a37a/",
    icon: "/images/linkedin.png",
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com/mister_bokii/",
    icon: "/images/instagram.png",
  },
  {
    label: "Curriculum Vitae",
    href: "files/Boquecosa_CV.pdf",
    icon: "/images/pdf.png",
  },
  {
    label: "Resume",
    href: "files/BoquecosaResume.pdf",
    icon: "/images/pdf.png",
  },
];

const featuredProjects = [
  {
    title: "Network Security Simulation",
    projectType: "Final Project · Network Security",
    role: "By Pair",
    date: "Jun 2025 – Jul 2025",
    image: "/images/kali_desktop_view.jpg",
    url: "/files/Network Security Final Project.pdf",
    tag: "Security",
    tagColor: "text-blue-400 border-blue-400 bg-blue-400/10",
  },
  {
    title: "P2P Encrypted Communication System",
    projectType: "Final Project · IAS",
    role: "By Pair",
    date: "Jun 2025 – Jul 2025",
    image: "/images/p2p.png",
    url: "https://github.com/WhiteBeardddd/Final-Project-IAS",
    tag: "Security",
    tagColor: "text-blue-400 border-blue-400 bg-blue-400/10",
  },
  {
    title: "Stockwise",
    projectType: "Information Management 2",
    role: "Frontend Developer & Founder",
    date: "Jun 2024 – Jul 2024",
    image: "/images/stockwise.png",
    url: "https://github.com/OppenJayme/SUMMER-IM2-FINAL-PROJECTS",
    tag: "Web & Fullstack",
    tagColor: "text-purple-400 border-purple-400 bg-purple-400/10",
  },
];

const featuredCerts = [
  {
    title: "Junior Cybersecurity Analyst Career Path",
    image: "/images/cyberessentials.png",
    url: "/files/Document0001.pdf",
    date: "November 2025",
  },
  {
    title: "CCNAv7: Switching, Routing & Wireless",
    image: "/images/networking2.png",
    url: "/files/CCNA-_Switching-_Routing-_and_Wireless_Essentials_certificate_23100750-usc-edu-ph_53735774-6b6e-4776-b010-bc8e0e7b9818 (1).pdf",
    date: "Jan 2025",
  },
  {
    title: "The Future of Tech | Vietnam Hackathon",
    image: "/images/hackathonsbs.png",
    url: "/files/Document0002.pdf",
    date: "April 2025",
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.1,
      duration: 0.5,
      ease: "easeOut" as const,
    },
  }),
} satisfies import("framer-motion").Variants;

export default function Home() {
  return (
    <>
      <main className="relative min-h-screen w-full text-white overflow-x-hidden">

        {/* ── HERO ── */}
        <section className="relative flex flex-col items-center justify-center pt-16 sm:pt-24 pb-8 px-4 text-center">
          {/* Subtle glow blob */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-[#e4ae0b]/10 blur-[120px] rounded-full pointer-events-none" />

          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#e4ae0b]/30 bg-[#e4ae0b]/5 text-[#e4ae0b] text-sm font-semibold mb-6 tracking-widest uppercase"
          >
            <span className="w-2 h-2 rounded-full bg-[#e4ae0b] animate-pulse" />
            Available for opportunities
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-extrabold tracking-tight leading-tight"
          >
            Hello, I&apos;m{" "}
            <span className="text-[#e4ae0b] relative">
              Charles
              <span className="absolute -bottom-1 left-0 w-full h-[3px] bg-[#e4ae0b]/40 rounded-full" />
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-4 text-gray-400 text-base sm:text-lg md:text-xl max-w-2xl"
          >
            BS IT Student @ University of San Carlos · Networking · CyberOps · Digital Forensics
          </motion.p>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-3 text-gray-500 text-sm sm:text-base italic max-w-xl"
          >
            &quot;I use &apos;whosyourdaddy&apos; &amp; &apos;aezakmi&apos; — only had 20₱ at kuya JBoy&apos;s comshop.&quot;
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="mt-8 flex flex-wrap justify-center gap-3"
          >
            <Link
              href="/projects"
              className="px-6 py-3 rounded-full bg-[#e4ae0b] text-black font-bold text-sm sm:text-base hover:bg-[#f6c742] transition-all duration-200 shadow-lg shadow-[#e4ae0b]/20"
            >
              View Projects
            </Link>
            <a
              href="files/BoquecosaResume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 rounded-full border border-white/20 text-white font-semibold text-sm sm:text-base hover:border-[#e4ae0b] hover:text-[#e4ae0b] transition-all duration-200"
            >
              Download Resume
            </a>
          </motion.div>
        </section>

        {/* ── ABOUT / TERMINAL + PROFILE ── */}
        <section className="relative z-20 container mx-auto px-4 sm:px-6 py-16 sm:py-20 grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <TerminalCard />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <ProfileCard />
          </motion.div>
        </section>

        {/* ── FEATURED PROJECTS ── */}
        <section className="relative z-20 container mx-auto px-4 sm:px-6 py-12">
          {/* Section header */}
          <div className="flex items-end justify-between mb-8 sm:mb-10">
            <div>
              <p className="text-xs sm:text-sm uppercase tracking-widest text-[#e4ae0b] font-semibold mb-1">
                ✦ Featured Work
              </p>
              <h2 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight">
                Best <span className="text-[#e4ae0b]">Projects</span>
              </h2>
            </div>
            <Link
              href="/projects"
              className="hidden sm:inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-white/20 text-sm font-semibold text-white hover:border-[#e4ae0b] hover:text-[#e4ae0b] transition-all duration-200"
            >
              View All <span className="text-[#e4ae0b]">→</span>
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-6">
            {featuredProjects.map((project, i) => (
              <motion.a
                key={i}
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                className="group relative flex flex-col rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm overflow-hidden hover:border-[#e4ae0b]/40 transition-all duration-300 hover:shadow-xl hover:shadow-[#e4ae0b]/5"
              >
                {/* Image */}
                <div className="relative w-full h-44 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                  <span className={`absolute top-3 right-3 text-xs font-bold px-3 py-1 rounded-full border ${project.tagColor}`}>
                    {project.tag}
                  </span>
                </div>

                {/* Content */}
                <div className="flex flex-col flex-1 p-5">
                  <h3 className="font-bold text-base sm:text-lg text-white leading-snug mb-1 group-hover:text-[#e4ae0b] transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-gray-400 text-sm mb-1">{project.projectType}</p>
                  <p className="text-gray-500 text-xs">{project.date} · {project.role}</p>
                  <div className="mt-auto pt-4">
                    <span className="text-[#e4ae0b] text-xs font-semibold uppercase tracking-wider">
                      View Project →
                    </span>
                  </div>
                </div>
              </motion.a>
            ))}
          </div>

          {/* Mobile view all button */}
          <div className="mt-6 flex justify-center sm:hidden">
            <Link
              href="/projects"
              className="px-6 py-2.5 rounded-full border border-white/20 text-sm font-semibold text-white hover:border-[#e4ae0b] hover:text-[#e4ae0b] transition-all duration-200"
            >
              View All Projects →
            </Link>
          </div>
        </section>

        {/* ── FEATURED CERTIFICATIONS ── */}
        <section className="relative z-20 container mx-auto px-4 sm:px-6 py-12">
          {/* Section header */}
          <div className="flex items-end justify-between mb-8 sm:mb-10">
            <div>
              <p className="text-xs sm:text-sm uppercase tracking-widest text-[#e4ae0b] font-semibold mb-1">
                ✦ Credentials
              </p>
              <h2 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight">
                Top <span className="text-[#e4ae0b]">Certifications</span>
              </h2>
            </div>
            <Link
              href="/certifications"
              className="hidden sm:inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-white/20 text-sm font-semibold text-white hover:border-[#e4ae0b] hover:text-[#e4ae0b] transition-all duration-200"
            >
              View All <span className="text-[#e4ae0b]">→</span>
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-6">
            {featuredCerts.map((cert, i) => (
              <motion.a
                key={i}
                href={cert.url}
                target="_blank"
                rel="noopener noreferrer"
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                className="group flex flex-col rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm overflow-hidden hover:border-[#e4ae0b]/40 transition-all duration-300 hover:shadow-xl hover:shadow-[#e4ae0b]/5"
              >
                {/* Image */}
                <div className="relative w-full h-44 overflow-hidden">
                  <img
                    src={cert.image}
                    alt={cert.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                </div>

                {/* Content */}
                <div className="flex flex-col flex-1 p-5">
                  <h3 className="font-bold text-base text-white leading-snug mb-1 group-hover:text-[#e4ae0b] transition-colors">
                    {cert.title}
                  </h3>
                  <p className="text-gray-400 text-sm">{cert.date}</p>
                  <div className="mt-auto pt-4">
                    <span className="text-[#e4ae0b] text-xs font-semibold uppercase tracking-wider">
                      View Certificate →
                    </span>
                  </div>
                </div>
              </motion.a>
            ))}
          </div>

          {/* Mobile view all button */}
          <div className="mt-6 flex justify-center sm:hidden">
            <Link
              href="/certifications"
              className="px-6 py-2.5 rounded-full border border-white/20 text-sm font-semibold text-white hover:border-[#e4ae0b] hover:text-[#e4ae0b] transition-all duration-200"
            >
              View All Certifications →
            </Link>
          </div>
        </section>

        {/* ── CONTACT ── */}
        <section className="relative z-20 container mx-auto px-4 sm:px-6 py-16 sm:py-20">
          <div className="relative rounded-3xl border border-white/10 bg-white/5 backdrop-blur-sm p-8 sm:p-12 overflow-hidden">
            {/* Glow */}
            <div className="absolute -top-20 left-1/2 -translate-x-1/2 w-[400px] h-[200px] bg-[#e4ae0b]/10 blur-[80px] rounded-full pointer-events-none" />

            <div className="relative text-center mb-8 sm:mb-10">
              <p className="text-xs sm:text-sm uppercase tracking-widest text-[#e4ae0b] font-semibold mb-2">
                ✦ Let&apos;s Connect
              </p>
              <h2 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight">
                Contact <span className="text-[#e4ae0b]">Me</span>
              </h2>
              <p className="mt-3 text-gray-400 text-sm sm:text-base max-w-md mx-auto">
                Open to collaborations, internships, and new opportunities.
              </p>
            </div>

            <div className="flex flex-wrap justify-center gap-3 sm:gap-4 max-w-3xl mx-auto">
              {contacts.map((item, i) => (
                <motion.a
                  key={item.label}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  custom={i}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={fadeUp}
                  whileHover={{ scale: 1.05 }}
                  className="flex items-center gap-2 px-4 sm:px-5 py-2 sm:py-2.5 rounded-full border border-white/10 bg-white/5 text-gray-300 text-sm font-medium transition-all duration-200 hover:bg-[#e4ae0b]/10 hover:text-[#e4ae0b] hover:border-[#e4ae0b]/50"
                >
                  <Image
                    src={item.icon}
                    alt={item.label}
                    width={22}
                    height={22}
                    className="w-5 h-5 sm:w-6 sm:h-6"
                  />
                  <span>{item.label}</span>
                </motion.a>
              ))}
            </div>
          </div>
        </section>
      </main>

      <footer className="w-full text-center py-6 text-gray-600 border-t border-white/5 text-sm">
        <span className="text-gray-500">Personal Portfolio 2026</span>
        <span className="text-[#e4ae0b]/50 mx-2">©</span>
        <span className="text-gray-600">Charles Benedict Boquecosa</span>
      </footer>
    </>
  );
}