"use client";

import { motion } from "framer-motion";
import Image from "next/image";
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

export default function Home() {
  return (
    <>
      <main className="relative min-h-screen w-full text-white">
        <h1 className="text-center text-6xl md:text-7xl lg:text-8xl font-extrabold tracking-tight pt-16 pb-2">
          HELLO I AM <span className="text-[#e4ae0b]">CHARLES</span>
        </h1>

        <p className="text-center text-lg md:text-xl lg:text-2xl font-medium tracking-tight mt-0">
          I use "<span className="text-[#e4ae0b]">whosyourdaddy</span>" and "
          <span className="text-[#e4ae0b]">aezakmi</span>"
          because I only have 20Php to play at kuya JBoy's comshop.
        </p>

        {/* Content */}
        <div className="relative z-20 container mx-auto px-6 py-24 pb-0 grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Side */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="mb-6"
          >
            <TerminalCard />
          </motion.div>

          {/* Right Side */}
          <ProfileCard />
        </div>

        {/* Contact / Socials */}
        <section className="relative z-20 container mx-auto px-6 mt-16 pb-15">
          <h1 className="text-center text-6xl md:text-7xl lg:text-8xl font-extrabold tracking-tight pt-6 pb-10">
            Contact <span className="text-[#e4ae0b]">Me</span>
          </h1>
          <div className="flex flex-wrap justify-center gap-6 max-w-4xl mx-auto">
            {contacts.map((item) => (
              <motion.a
                key={item.label}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                className="
                  flex items-center gap-3
                  px-6 py-3 rounded-full
                  border border-gray-700
                  text-gray-300 font-medium
                  transition
                  hover:bg-[#e4ae0b]/10
                  hover:text-[#e4ae0b]
                  hover:border-[#e4ae0b]
                "
              >
                <Image
                  src={item.icon}
                  alt={item.label}
                  width={50}
                  height={50}
                />
                <span>{item.label}</span>
              </motion.a>
            ))}
          </div>
        </section>
      </main>

      <footer className="w-full text-center py-6 text-gray-400 border-t border-gray-800">
        Personal Portfolio 2026 ©
      </footer>
    </>
  );
}