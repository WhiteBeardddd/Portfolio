"use client"

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const routes = [
  { name: "Home", link: "/" },
  { name: "About", link: "/about" },
  { name: "Certifications", link: "/certifications" },
  { name: "", link: "/"}
];

export default function Navbar() {
  const location = usePathname()

  return (
    <div className="">
      {routes.map((route, index) => {
        return (
          <div className="flex flex-col gap-3" key={index}>
          <Link
            key={index}
            href={route.link}
            className={route.link === location ? "bg-black text-white" : ""}
          >
            {route.name}
          </Link>
          </div>
        );
      })}
    </div>
  );
}
