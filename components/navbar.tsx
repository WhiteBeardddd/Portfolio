"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const routes = [
  { name: "Certifications", link: "/certifications" },
  { name: "Projects", link: "/projects" },
];

export default function Navbar() {
  const pathname = usePathname();

  return (
    <nav className="sticky top-0 z-50 h-[60px] backdrop-blur-xl bg-black/40">
      <div className="max-w-7xl mx-auto h-full flex items-center justify-between px-6">

        {/* Home */}
        <Link
          href="/"
          className={`px-6 py-2 rounded-lg transition font-extrabold
            ${pathname === "/" 
              ? "bg-[#e4ae0b] text-black" 
              : "text-white hover:bg-[#e4ae0b] hover:text-black"}
          `}
        >
          WhiteBeard
        </Link>

        {/* Routes */}
        <div className="flex gap-3">
          {routes.map((route) => (
            <Link
              key={route.link}
              href={route.link}
              className={`px-6 py-2 rounded-lg transition
                ${pathname === route.link
                  ? "bg-[#e4ae0b] text-black"
                  : "text-white hover:bg-[#e4ae0b] hover:text-black"}
              `}
            >
              {route.name}
            </Link>
          ))}
        </div>

      </div>
    </nav>
  );
}
