"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";

const routes = [
  { name: "Home", link: "/" },
  { name: "Projects", link: "/projects" },
  { name: "Certifications", link: "/certifications" },
];

/* Three destinations only (Hick's law); the current section stays highlighted on detail pages too. */
export default function Navbar() {
  const pathname = usePathname();
  const isActive = (link: string) => (link === "/" ? pathname === "/" : pathname.startsWith(link));

  return (
    <header className="sticky top-0 z-50 px-3 pt-3 sm:px-6 sm:pt-4">
      <nav
        aria-label="Main"
        className="mx-auto flex h-14 max-w-6xl items-center justify-between gap-3 rounded-full border border-line bg-ink/75 pl-4 pr-1.5 shadow-lg shadow-black/40 backdrop-blur-xl"
      >
        <Link href="/" className="group flex items-center gap-2.5 font-bold tracking-tight">
          <span className="grid h-7 w-7 place-items-center rounded-md bg-accent-strong font-mono text-sm font-black text-white transition-transform group-hover:-rotate-6">
            W
          </span>
          <span className="hidden text-fg sm:inline">WhiteBeard</span>
        </Link>

        <div className="flex items-center gap-1">
          {routes.map((route) => {
            const active = isActive(route.link);
            return (
              <Link
                key={route.link}
                href={route.link}
                aria-current={active ? "page" : undefined}
                className={`relative rounded-full px-3 py-2 text-sm font-medium transition-colors sm:px-4 ${
                  active ? "text-fg" : "text-muted hover:text-fg"
                }`}
              >
                {active && (
                  <motion.span
                    layoutId="nav-pill"
                    className="absolute inset-0 rounded-full border border-accent/40 bg-accent/15"
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
