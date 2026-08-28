export type Skill = {
  name: string
  category: string
  level: string
  description: string
  meta: string
  highlight?: boolean
}

export const skills: Skill[] = [
  {
    name: "React",
    category: "Core / Architecture",
    level: "Expert — Daily driver since hooks",
    description: "Compound components, concurrent features, performance profiling. I think in effects and memo boundaries, not just JSX.",
    meta: "18 • Suspense • Server Components",
    highlight: true,
  },
  {
    name: "Next.js",
    category: "Framework / Production",
    level: "Expert — App Router, RSC, edge",
    description: "File-based routing, streaming, image optimization and the discipline of shipping fast, cacheable UIs.",
    meta: "App Router • ISR • Turbopack",
    highlight: true,
  },
  {
    name: "TypeScript",
    category: "Language / Safety",
    level: "Advanced — Types as design tool",
    description: "Generics, discriminated unions, and type-driven APIs that make wrong code look wrong.",
    meta: "Strict • Zod • tRPC",
  },
  {
    name: "Tailwind CSS",
    category: "Styling / System",
    level: "Expert — Design tokens in utility",
    description: "Constraint-based styling. Tokens, variants, and a system that scales without specificity wars.",
    meta: "CVA • Design Tokens • a11y",
    highlight: true,
  },
  {
    name: "Motion",
    category: "Animation / Interaction",
    level: "Advanced — Framer / GSAP",
    description: "ScrollTrigger timelines, spring physics, and reduced-motion aware choreography.",
    meta: "GSAP • Framer Motion • Lenis",
  },
  {
    name: "Bootstrap",
    category: "UI / Rapid",
    level: "Proficient — When it fits",
    description: "Utility when deadlines are tight, but I reach for custom systems when craft matters.",
    meta: "Utilities • Responsive",
  },
  {
    name: "UI / UX",
    category: "Design / Product Thinking",
    level: "Strong — Systems & research",
    description: "Hierarchy, rhythm, and micro-interactions. I prototype in code and argue with Figma until it ships.",
    meta: "Figma • A11y • RWD",
    highlight: true,
  },
  {
    name: "Backend *",
    category: "Growth / Learning",
    level: "Training — Node, APIs, DBs",
    description: "Currently deepening backend: REST, auth, Prisma, Postgres. Frontend-first, but aiming for full product ownership.",
    meta: "Node • Express • Prisma • PostgreSQL",
  },
]

export const principles = [
  { k: "01", v: "Interfaces should have opinion" },
  { k: "02", v: "Motion is communication" },
  { k: "03", v: "Accessible by default" },
  { k: "04", v: "Performance is a feature" },
]
