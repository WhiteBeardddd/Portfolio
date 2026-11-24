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
  title: {
    default: "Charles Benedict | Portfolio",
    template: "%s · Charles Benedict",
  },
  description:
    "Charles Benedict Boquecosa — BS IT student at the University of San Carlos and IT Intern at Accenture (Travel Ops). Security, networking, and full-stack case studies.",
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
        <a
          href="#main"
          className="sr-only z-[60] rounded-full bg-accent-strong px-4 py-2 text-sm font-semibold text-white focus:not-sr-only focus:fixed focus:left-4 focus:top-4"
        >
          Skip to content
        </a>

        {/* Ambient background: grid, top glow, grain */}
        <div aria-hidden className="pointer-events-none fixed inset-0 -z-10">
          <div className="absolute inset-0 bg-grid" />
          <div className="absolute -top-40 left-1/2 h-[480px] w-[900px] max-w-[140vw] -translate-x-1/2 rounded-full bg-accent-strong/15 blur-[140px]" />
          <div className="absolute inset-0 bg-noise" />
        </div>

        <Navbar />
        <div id="main" className="relative">
          {children}
        </div>
        <Footer />

        {process.env.NEXT_PUBLIC_TEMPO && (
          <Script src="https://cdn.tempoplatform.com/tempo-devtools.js" strategy="beforeInteractive" />
        )}
      </body>
    </html>
  );
}
