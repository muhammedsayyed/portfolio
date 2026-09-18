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

// AXIOM Selected Work — presented as studio projects
// Centralized here for easy future updates of live URLs, descriptions, tech stacks
export const projects: Project[] = [
  {
    id: "01",
    title: "VEYRA",
    subtitle: "AI Wellness & Nutrition Platform — AXIOM Concept",
    category: "Digital Product / AI Platform",
    year: "05/2026 – 08/2026",
    description:
      "AXIOM concept: a full-stack AI-powered wellness and nutrition platform — personalized guidance, meal planning and fitness tracking in one coherent product.",
    problem:
      "Wellness tools are fragmented and often handle sensitive health data poorly — users need one trusted, personalized system.",
    solution:
      "Designed and engineered a cohesive platform with REST APIs, JWT authentication, nutrition tracking, recipe discovery, food scanning, fitness tracking, pantry & shopping management, favorites, reviews and contextual AI assistance — with server-side AI, validation, rate limiting and data isolation.",
    role: "AXIOM Studio — React, TypeScript, Node.js, Express, MongoDB",
    stack: ["React", "TypeScript", "Node.js", "Express", "MongoDB"],
    links: [{ label: "GitHub", href: "https://github.com/muhammedsayyed/VEYRA" }],
    color: "#EAECEE",
    accent: "#FF3B30",
    image: "/projects/veyra.png",
    featured: true,
  },
  {
    id: "02",
    title: "ORRA",
    subtitle: "Premium E-Commerce Platform — Selected Project",
    category: "E-Commerce / Web Platform",
    year: "04/2026 – 05/2026",
    description:
      "AXIOM selected project: a premium, responsive e-commerce platform with a reusable component architecture and persistent client state — built for performance and conversion.",
    problem:
      "Premium commerce needs live catalog data, persistent cart/wishlist state and protected flows without sacrificing responsiveness or SEO.",
    solution:
      "Engineered live REST API integration for products, categories, brands, auth, cart, wishlist, search, filtering and checkout. Added protected routes, responsive layouts, motion, SEO and social sharing optimization with Zustand for client state.",
    role: "AXIOM Studio — Next.js, React, TypeScript, Tailwind CSS",
    stack: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Zustand", "REST API"],
    links: [{ label: "GitHub", href: "https://github.com/muhammedsayyed/ORRA---Premium-E-Commerce-Platform" }],
    color: "#E8E6F0",
    accent: "#6B5CFF",
    image: "/projects/orra.png",
  },
  {
    id: "03",
    title: "Mira",
    subtitle: "Social Micro-Blogging Platform — Selected Project",
    category: "Digital Product / Social Platform",
    year: "03/2026 – 04/2026",
    description:
      "AXIOM selected project: a responsive social micro-blogging platform — real authentication, interactions and media handling against a live API.",
    problem:
      "Social products need real auth, nested interactions and media handling — not just static UI. Consistency across feeds, profiles and notifications is critical.",
    solution:
      "Shipped registration, login and JWT auth, posts, likes, comments, nested replies, reposts, bookmarks, follows, notifications, profile management and media uploads via REST API with Axios. Responsive component architecture and editorial visual system. Deployed on Vercel with API rewrites.",
    role: "AXIOM Studio — React 18, Vite, Tailwind CSS, React Router",
    stack: ["React.js", "Vite", "Tailwind CSS", "REST API"],
    links: [{ label: "GitHub", href: "https://github.com/muhammedsayyed/Mira---Social-Micro-Blogging-Platform" }],
    color: "#F5F0E8",
    accent: "#FF6B35",
    image: "/projects/mira.png",
  },
]
