"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";

const routes = [
  { name: "Home", link: "/" },
  { name: "Projects", link: "/projects" },
  { name: "Certifications", link: "/certifications" },
];

export default function Navbar() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 px-3 pt-3 sm:px-6 sm:pt-4">
      <nav className="mx-auto flex h-14 max-w-6xl items-center justify-between gap-3 rounded-full border border-white/10 bg-ink/70 pl-4 pr-1.5 shadow-lg shadow-black/40 backdrop-blur-xl">
        <Link href="/" className="group flex items-center gap-2.5 font-bold tracking-tight">
          <span className="grid h-7 w-7 place-items-center rounded-md bg-accent font-mono text-sm font-black text-black transition-transform group-hover:-rotate-6">
            W
          </span>
          <span className="hidden text-white sm:inline">WhiteBeard</span>
        </Link>

        <div className="flex items-center gap-1">
          {routes.map((route) => {
            const active = pathname === route.link;
            return (
              <Link
                key={route.link}
                href={route.link}
                aria-current={active ? "page" : undefined}
                className={`relative rounded-full px-3 py-2 text-sm font-medium transition-colors sm:px-4 ${
                  active ? "text-black" : "text-gray-400 hover:text-white"
                }`}
              >
                {active && (
                  <motion.span
                    layoutId="nav-pill"
                    className="absolute inset-0 rounded-full bg-accent"
                    transition={{ type: "spring", stiffness: 400, damping: 32 }}
                  />
                )}
                <span className="relative">{route.name}</span>
              </Link>
            );
          })}
        </div>
      </nav>
    </header>
  );
}
