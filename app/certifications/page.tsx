"use client"
import Image from "next/image";
import { usePathname } from "next/navigation";

export default function CertificationsPage() {
  return (
    <div>
      <h1 className="text-center text-6xl md:text-7xl lg:text-8xl font-extrabold tracking-tight pt-16 pb-2">
          Certifications <span className="text-[#e4ae0b]"></span>
      </h1>

      <p className="text-center text-lg md:text-xl lg:text-2xl font-medium tracking-tight mt-0">
          I earned these with consistent<span className="text-[#e4ae0b]"> hardwork</span> and 
          <span className="text-[#e4ae0b]"> coffee</span>
      </p>
    </div>
  );
}
