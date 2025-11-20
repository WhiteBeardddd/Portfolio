import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="">
      <Link href="/contacts">Home</Link>
      <Link href="/about">About</Link>
      <Link href="/certifications">Certifications</Link>
    </div>
  );
}
