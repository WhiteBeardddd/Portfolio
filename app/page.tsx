"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Navbar from "@/components/navbar";
import TerminalCard from "@/components/terminalCard";
import ProfileCard from "@/components/profileCard";

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
  <div className="relative z-20 container mx-auto px-6 py-24 grid lg:grid-cols-2 gap-12 items-center">
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

  {/* Stats Section */}
  <section className="relative z-20 container mx-auto px-6 py-16">
    <motion.div
      className="grid md:grid-cols-4 gap-6"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={{
        hidden: { opacity: 0 },
        visible: { opacity: 1, transition: { staggerChildren: 0.15 } },
      }}
    >
      {[
        { label: "Projects", value: 12 },
        { label: "Commits", value: 500 },
        { label: "Certificates", value: 6 },
        { label: "Years Learning", value: 3 },
      ].map((item, i) => (
        <motion.div
          key={i}
          className="bg-gray-800 p-6 rounded-xl border border-gray-700 text-center"
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { opacity: 1, y: 0 },
          }}
        >
          <div className="text-4xl font-bold">{item.value}</div>
          <div className="text-gray-400 mt-2">{item.label}</div>
        </motion.div>
      ))}
    </motion.div>
  </section>

</main>

    </>
  );
}
