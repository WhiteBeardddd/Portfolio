"use client"

import ProjectCard from "@/components/projectCard"
import type { Project } from "@/types/project"

const projects: Project[] = [
  {
    title: "Structured Cabling Plan for StudyLab",
    projectType: "Final Project · Networking 1",
    role: "Team Leader",
    date: "Mar 2024 – May 2024",
    description:
      "Designed scalable multi-site cabling and network architecture for a coworking environment. Created IPv4/IPv6 VLSM addressing and routing (RIPv2, static IPv6). Simulated and validated the network using Cisco Packet Tracer and Lucidchart.",
    image: "/images/bg.jpg",
    url: "/files/Boquecosa_CV.pdf"
  },
  {
    title: "IP Telephony",
    projectType: "Final Project · Networking 2",
    role: "By Pair",
    date: "Nov 2024 – Dec 2024",
    description:
      "Built a multi-branch VoIP-enabled enterprise network using Cisco IOS. Implemented VLANs, Inter-VLAN routing, OSPF/EIGRP, DHCPv4/v6, and applied Layer 2 security with EtherChannel and enterprise services.",
    image: "/images/charles.png",
    url: "/files/Boquecosa_CV"
  },
  {
    title: "Network Security Simulation – Attacker vs Defender",
    projectType: "Final Project · Network Security",
    role: "By Pair",
    date: "Jun 2025 – Jul 2025",
    description:
      "Conducted penetration testing using Kali Linux tools such as Nmap, Metasploit, and SQLmap. Deployed defenses including iptables, Snort IDS, OpenVAS, and Wireshark. Analyzed attacks across OSI layers and documented mitigation strategies.",
    image: "/images/bg.jpg",
    url: "https://github.com/Whitebeardddd"
  },
  {
    title: "Peer-to-Peer Encrypted Communication System with Multi-Layer Cipher Integration",
    projectType: "Final Project · Information Assurance & Security",
    role: "By Pair",
    date: "Jun 2025 – Jul 2025",
    description:
      "Developed P2P chat system using a custom encryption and decryption. Implemented layered cryptography and message integrity validation",
    image: "/images/p2p.png",
    url: "https://github.com/WhiteBeardddd/Final-Project-IAS"
  },
  {
    title: "DCISM Network Infrastructure Runbook",
    projectType: "Final Project · Network Management",
    role: "Team Leader",
    date: "Nov 2025 – Dec 2025",
    description:
      "Conducted penetration testing using Kali Linux tools such as Nmap, Metasploit, and SQLmap. Deployed defenses including iptables, Snort IDS, OpenVAS, and Wireshark. Analyzed attacks across OSI layers and documented mitigation strategies.",
    image: "/images/dcism.png",
    url: "/files/Boquecosa_CV"
  },
  {
    title: "Agrikita",
    projectType: "CyberOps Cypher Acitivities",
    role: "Member",
    date: "Nov 2025 – Dec 2025",
    description:
      "Conducted penetration testing using Kali Linux tools such as Nmap, Metasploit, and SQLmap. Deployed defenses including iptables, Snort IDS, OpenVAS, and Wireshark. Analyzed attacks across OSI layers and documented mitigation strategies.",
    image: "/images/bg.jpg",
    url: "/files/Boquecosa_CV"
  },
]

export default function ProjectsPage() {
  return (
    <div className="px-6">
      <h1 className="text-center text-6xl md:text-7xl lg:text-8xl font-extrabold tracking-tight pt-16 pb-2">
        Projects
      </h1>

      <p className="text-center text-lg md:text-xl lg:text-2xl font-medium tracking-tight">
        My School <span className="text-[#e4ae0b]">Projects</span> and{" "}
        <span className="text-[#e4ae0b]">Shenanigans</span>
      </p>

      <div className="mt-16 flex flex-col gap-12 items-center">
        {projects.map((project, index) => (
          <ProjectCard key={index} {...project} />
        ))}
      </div>
    </div>
  )
}
