import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar";
import Image from "next/image";
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
  description: "Developer Portfolio",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased relative`}
      >
        {/* ✅ Fixed Background Image */}
        <div className="fixed inset-0 -z-10">
          <Image
            src="/images/background.jpg"
            alt="Background"
            fill
            priority
            className="object-cover scale-105"
          />
        </div>

        {/* ✅ Gradient Overlay (improves text readability) */}
        <div className="fixed inset-0 -z-10 bg-gradient-to-b from-black via-black/70 to-black/95" />


        {/* ✅ Site Content */}
        <div className="relative z-10">
          <Navbar />
          {children}
        </div>
        {process.env.NEXT_PUBLIC_TEMPO && (
          <Script src="https://cdn.tempoplatform.com/tempo-devtools.js" strategy="beforeInteractive" />
        )}
      </body>
    </html>
  );
}
