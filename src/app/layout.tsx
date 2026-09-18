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
  title: "AXIOM — Software & Digital Product Studio",
  description:
    "AXIOM is a software and digital product studio that designs and builds modern digital products and experiences. Web Development, E-Commerce, Custom Software, Digital Product Design, Mobile Applications, API & Backend Systems. React, Next.js, TypeScript, Node.js, Python, PostgreSQL.",
  metadataBase: new URL("https://axiom.studio"),
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/icon.png", type: "image/png", sizes: "32x32" },
      { url: "/favicon.png", type: "image/png", sizes: "32x32" },
      { url: "/icon-192.png", type: "image/png", sizes: "192x192" },
      { url: "/icon-512.png", type: "image/png", sizes: "512x512" },
    ],
    apple: [{ url: "/apple-icon.png", sizes: "180x180", type: "image/png" }],
    shortcut: "/favicon.ico",
  },
  openGraph: {
    title: "AXIOM — Software & Digital Product Studio",
    description:
      "AXIOM designs and builds high-performance websites, digital products and custom software for ambitious teams. Web, E-Commerce, Mobile, API & Backend.",
    url: "https://axiom.studio",
    siteName: "AXIOM",
    type: "website",
    images: [
      {
        url: "/og.png",
        width: 1200,
        height: 630,
        alt: "AXIOM — Software Development Studio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "AXIOM — Software & Digital Product Studio",
    description: "AXIOM designs and builds high-performance websites, digital products and custom software for ambitious teams.",
    images: ["/og.png"],
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
