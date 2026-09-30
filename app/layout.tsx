import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import Script from "next/script";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Charles Benedict | Portfolio",
  description:
    "Charles Benedict Boquecosa — BS IT student at the University of San Carlos and IT Intern at Accenture (Travel Ops). Networking, CyberOps, and full-stack development.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased relative overflow-x-hidden`}
      >
        {/* Ambient background: grid, top glow, grain */}
        <div aria-hidden className="pointer-events-none fixed inset-0 -z-10">
          <div className="absolute inset-0 bg-grid" />
          <div className="absolute -top-40 left-1/2 h-[480px] w-[900px] max-w-[140vw] -translate-x-1/2 rounded-full bg-accent/10 blur-[140px]" />
          <div className="absolute inset-0 bg-noise" />
        </div>

        <Navbar />
        <div className="relative">{children}</div>
        <Footer />

        {process.env.NEXT_PUBLIC_TEMPO && (
          <Script src="https://cdn.tempoplatform.com/tempo-devtools.js" strategy="beforeInteractive" />
        )}
      </body>
    </html>
  );
}
