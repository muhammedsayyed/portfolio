export type Skill = {
  name: string
  category: string
  level: string
  description: string
  meta: string
  highlight?: boolean
}

// AXIOM Services — 6 core offerings
export const skills: Skill[] = [
  {
    name: "Web Development",
    category: "01 — Service",
    level: "High-performance websites & platforms",
    description: "Marketing sites and web platforms built with Next.js, React and TypeScript — fast, accessible, and engineered for scale. From design system to deployment.",
    meta: "Next.js • React • TypeScript • Tailwind CSS • GSAP",
    highlight: true,
  },
  {
    name: "E-Commerce",
    category: "02 — Service",
    level: "Commerce that converts",
    description: "Premium storefronts with live catalog, persistent cart and wishlist, protected checkout and integrations — without compromising performance or SEO.",
    meta: "Next.js • Zustand • REST API • Stripe • SEO",
    highlight: true,
  },
  {
    name: "Custom Software",
    category: "03 — Service",
    level: "Tailored systems for real workflows",
    description: "Bespoke web applications for operations, dashboards and internal tools — designed around your process, not a template.",
    meta: "React • Node.js • PostgreSQL • MongoDB • RBAC",
  },
  {
    name: "Digital Product Design",
    category: "04 — Service",
    level: "Design + engineering, together",
    description: "Product strategy, UX/UI and design systems in Figma — then directly into code. Prototyping in the browser to close the gap between vision and reality.",
    meta: "Figma • Design Systems • Prototyping • Motion",
    highlight: true,
  },
  {
    name: "Mobile Applications",
    category: "05 — Service",
    level: "Native-feel web & mobile",
    description: "Responsive, app-like experiences for mobile — fast, offline-aware, and consistent across devices. Product thinking applied to every screen.",
    meta: "React • Next.js • PWA • Responsive • API Integration",
  },
  {
    name: "API & Backend Systems",
    category: "06 — Service",
    level: "Robust APIs & data layers",
    description: "REST and GraphQL APIs, authentication, and data modeling with Node.js, Python, PostgreSQL and MongoDB — built for security and scale.",
    meta: "Node.js • Python • PostgreSQL • MongoDB • REST API • GraphQL",
    highlight: true,
  },
]

export const principles = [
  { k: "01", v: "Precise — every pixel and edge case matters" },
  { k: "02", v: "Performant — fast, accessible, and reliable" },
  { k: "03", v: "Product-minded — design and engineering as one" },
  { k: "04", v: "Confident — ship useful things, continuously" },
]

// AXIOM stack for marquee / detail panels
export const axiomStack = [
  "React",
  "Next.js",
  "TypeScript",
  "JavaScript",
  "Node.js",
  "Python",
  "PostgreSQL",
  "MongoDB",
  "REST API",
  "GraphQL",
  "GSAP",
  "Motion",
  "Figma",
]
