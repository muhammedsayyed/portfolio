// Single source of truth for AXIOM studio data
// Update links, descriptions here — components read from this file

export const siteConfig = {
  name: "AXIOM",
  shortName: "AXIOM",
  title: "AXIOM — Software & Digital Product Studio",
  titleShort: "Software & Digital Product Studio",
  email: "hello@axiom.studio",
  phone: "+20 101 244 4365",
  phoneHref: "tel:+201012444365",
  location: "Cairo, Egypt — Remote Worldwide",
  github: "https://github.com/muhammedsayyed",
  githubRepos: "https://github.com/muhammedsayyed?tab=repositories",
  linkedin: "https://linkedin.com/in/muhammed-sayed-420775405",
  portfolio: "https://axiom.studio",
} as const

export const professionalSummary =
  "AXIOM is a software and digital product studio that designs and builds modern digital products and experiences. We partner with ambitious teams to ship high-performance websites, e-commerce, custom software, mobile apps and API systems — with precision, performance and product thinking."

export const education = {
  degree: "Studio Focus — Product & Engineering",
  institute: "AXIOM — Software & Digital Product Studio",
  period: "Est. 2026",
  location: "Cairo, Egypt — Remote Worldwide",
  description:
    "A studio blending design and engineering to build useful, high-performance digital products — from concept to launch and beyond.",
} as const

export const course = {
  title: "How we work",
  institution: "AXIOM Studio",
  period: "Discovery → Design → Build → Ship",
  location: "Remote & On-site",
  description:
    "From discovery and product design to engineering, API integration and launch — we work as a product team, not a vendor. Clean code, design systems, and continuous iteration.",
} as const

// AXIOM Stack — capabilities grouped for reference
export const skillGroups = {
  frontend: ["React", "Next.js", "TypeScript", "JavaScript", "Tailwind CSS", "GSAP", "Motion"],
  uiux: ["Figma", "Digital Product Design", "Design Systems", "Prototyping", "Responsive Design"],
  backend: ["Node.js", "Python", "PostgreSQL", "MongoDB", "REST API", "GraphQL"],
  tools: ["Git", "GitHub", "Prisma", "API Integration", "JWT Authentication", "RBAC"],
  learning: ["Performance", "Accessibility", "Product Thinking", "Continuous Delivery"],
} as const

export const siteLinks = {
  github: siteConfig.github,
  linkedin: siteConfig.linkedin,
  email: `mailto:${siteConfig.email}`,
  phone: siteConfig.phoneHref,
} as const
