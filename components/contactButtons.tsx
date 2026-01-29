"use client"

import { motion } from "framer-motion"
import Image from "next/image"

type ContactItem = {
  label: string
  href: string
  icon: string
}

const contactItems: ContactItem[] = [
  {
    label: "Gmail",
    href: "mailto:yourname@gmail.com",
    icon: "/images/gmail.png",
  },
  {
    label: "Instagram",
    href: "https://instagram.com/yourusername",
    icon: "/images/instagram.png",
  },
  {
    label: "GitHub",
    href: "https://github.com/yourusername",
    icon: "/images/github.png",
  },
]

export default function ContactButtons() {
  return (
    <section className="mt-12 flex justify-center gap-6">
      {contactItems.map((item) => (
        <motion.a
          key={item.label}
          href={item.href}
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.08 }}
          className="
            flex items-center gap-3
            px-5 py-3
            rounded-xl
            border border-white/10
            bg-white/5
            backdrop-blur-md
            text-white
            transition-colors
            hover:border-[#e4ae0b]
            hover:text-[#e4ae0b]
          "
        >
          <Image
            src={item.icon}
            alt={item.label}
            width={20}
            height={20}
          />
          <span className="font-medium">{item.label}</span>
        </motion.a>
      ))}
    </section>
  )
}
