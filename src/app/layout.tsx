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
  title: "Muhammed Sayed — Junior Front-End Developer | React.js, Next.js & UI/UX",
  description:
    "Junior Front-End Developer and UI/UX Designer passionate about building modern, responsive, and user-friendly web experiences. React.js, Next.js, TypeScript, Tailwind CSS, Figma. Currently training Backend at Route Academy. Giza, Egypt.",
  metadataBase: new URL("https://portfolio-beta-ten-y81ydngqww.vercel.app"),
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/icon.svg", type: "image/svg+xml" },
      { url: "/favicon.png", type: "image/png", sizes: "32x32" },
      { url: "/icon-192.png", type: "image/png", sizes: "192x192" },
      { url: "/icon-512.png", type: "image/png", sizes: "512x512" },
    ],
    apple: [{ url: "/apple-icon.png", sizes: "180x180", type: "image/png" }],
    shortcut: "/favicon.ico",
  },
  openGraph: {
    title: "Muhammed Sayed — Junior Front-End Developer | React.js, Next.js & UI/UX",
    description:
      "Junior Front-End Developer and UI/UX Designer based in Giza, Egypt. React.js, Next.js, TypeScript, Tailwind CSS, Figma. Full-stack projects: VEYRA, Marketing Academy CRM, ORRA, Mira.",
    url: "https://portfolio-beta-ten-y81ydngqww.vercel.app",
    siteName: "Muhammed Sayed Portfolio",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Muhammed Sayed — Junior Front-End Developer",
    description: "Junior Front-End Developer and UI/UX Designer — React.js, Next.js, TypeScript, Tailwind CSS. Giza, Egypt.",
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
