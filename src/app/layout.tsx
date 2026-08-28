import type { Metadata } from "next"
import { Instrument_Serif, Space_Grotesk, JetBrains_Mono } from "next/font/google"
import "./globals.css"
import SmoothScroll from "@/components/ui/SmoothScroll"

const display = Instrument_Serif({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
})

const sans = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
})

const mono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
})

export const metadata: Metadata = {
  title: "Frontend Developer — React / Next.js / UI Engineering",
  description:
    "Frontend Developer specializing in React, Next.js, TypeScript and crafted interfaces. UI/UX obsessed, motion-driven, performance-minded. Currently expanding into backend.",
  metadataBase: new URL("https://example.com"),
  openGraph: {
    title: "Frontend Developer — React / Next.js / UI Engineering",
    description:
      "Premium frontend portfolio — React, TypeScript, Next.js, Tailwind, motion. Built with obsessive attention to typography, interaction and performance.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Frontend Developer — React / Next.js / UI Engineering",
    description: "Crafting premium, interactive interfaces with React & Next.js.",
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      className={`${display.variable} ${sans.variable} ${mono.variable}`}
      suppressHydrationWarning
    >
      <body className="min-h-screen bg-[var(--paper)] text-[var(--ink)] antialiased selection:bg-[var(--ink)] selection:text-[var(--paper)]">
        <SmoothScroll>{children}</SmoothScroll>
      </body>
    </html>
  )
}
