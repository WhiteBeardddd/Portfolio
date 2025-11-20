"use client"
import Image from "next/image";
import { usePathname } from "next/navigation";

export default function CertificationsPage() {
  const location = usePathname()
  return (
    <>
    <h1>This is Certspage</h1>
    <h2>THe path is {location}</h2>
    </>
  );
}
