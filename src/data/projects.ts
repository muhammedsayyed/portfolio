export type Project = {
  id: string
  title: string
  subtitle: string
  category: string
  year: string
  description: string
  problem: string
  solution: string
  role: string
  stack: string[]
  links: { label: string; href: string }[]
  color: string
  accent: string
  image: string
  featured?: boolean
}

export const projects: Project[] = [
  {
    id: "01",
    title: "KINFOLK",
    subtitle: "Minimal Commerce Experience",
    category: "E-Commerce / Frontend Architecture",
    year: "2025",
    description:
      "A deliberately slow, editorial e-commerce experience. No urgency tricks — just considered product storytelling, fluid cart physics, and a checkout that feels like turning pages.",
    problem:
      "Traditional commerce templates convert through pressure. The brief was to build a store that converts through taste and reduces bounce on product pages.",
    solution:
      "Built a Next.js storefront with optimistic cart, staggered product reveals, and a typographic system that treats products like editorial features. Scroll-synced imagery and motion tuned to 60fps.",
    role: "Frontend Lead — Architecture, UI System, Motion, Performance",
    stack: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion", "Shopify Storefront"],
    links: [
      { label: "Live Preview", href: "#" },
      { label: "UI Case Study", href: "#" },
    ],
    color: "#F2EEE6",
    accent: "#FF3B30",
    image: "kinfolk",
    featured: true,
  },
  {
    id: "02",
    title: "ATLAS",
    subtitle: "Design System & Component Library",
    category: "Design System / Tooling",
    year: "2025",
    description:
      "A component system designed to be used, not admired. Tokens, accessibility baked in, and an API that stays out of the way. Documentation as a product.",
    problem:
      "Teams shipped inconsistent UIs because the system was a Figma file, not code. Variants drifted and a11y was an afterthought.",
    solution:
      "Coded a typed system with compound components, CVA variants, and automated a11y checks. Every component ships with keyboard, focus, and reduced-motion handling.",
    role: "Design Engineer — System Design, Components, Docs",
    stack: ["React", "TypeScript", "CVA", "Tailwind CSS", "Storybook"],
    links: [
      { label: "System Docs", href: "#" },
      { label: "GitHub", href: "#" },
    ],
    color: "#EAECEE",
    accent: "#0B0B0C",
    image: "atlas",
  },
  {
    id: "03",
    title: "MIRAGE",
    subtitle: "Realtime Collaborative Workspace",
    category: "Web App / Interaction",
    year: "2024",
    description:
      "A collaborative canvas where cursors, presence, and drag physics make remote work feel physical. Optimistic updates that never lie to the user.",
    problem:
      "Remote whiteboards feel ghostly. Cursors teleport, drag feels laggy, conflicts overwrite work.",
    solution:
      "Implemented live cursors with interpolation, offline queue, and Framer-powered drag with spring physics. WebSocket presence with graceful degradation.",
    role: "Frontend Engineer — Realtime UI, Interaction, State",
    stack: ["React", "Next.js", "Framer Motion", "WebSockets", "Zustand"],
    links: [
      { label: "Product Demo", href: "#" },
      { label: "Interaction Notes", href: "#" },
    ],
    color: "#E8E6F0",
    accent: "#6B5CFF",
    image: "mirage",
  },
  {
    id: "04",
    title: "LUMEN",
    subtitle: "Editorial Magazine Platform",
    category: "Publishing / Performance",
    year: "2024",
    description:
      "A reading experience that respects focus. Immersive typography, progressive image loading, and a reader mode that never breaks rhythm.",
    problem:
      "Editorial sites overload with ads and layout shifts. Readers skim, they don't stay.",
    solution:
      "Designed a reading-first layout with variable type scale, container queries, and image placeholders that eliminate CLS. Scroll progress, estimated read time, and offline caching.",
    role: "Frontend Developer — Typography, Layout, Performance",
    stack: ["Next.js", "TypeScript", "Tailwind CSS", "GSAP", "MDX"],
    links: [
      { label: "Read Articles", href: "#" },
      { label: "Performance Audit", href: "#" },
    ],
    color: "#F5F0E8",
    accent: "#D97706",
    image: "lumen",
  },
]
