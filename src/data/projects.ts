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

// Real portfolio projects — priority order: VEYRA, Marketing Academy CRM, ORRA, Mira
// Centralized here for easy future updates of live URLs, descriptions, tech stacks
export const projects: Project[] = [
  {
    id: "01",
    title: "VEYRA",
    subtitle: "AI Wellness & Nutrition Platform",
    category: "Full-Stack / AI Wellness",
    year: "05/2026 – 08/2026",
    description:
      "Built a full-stack AI-powered wellness and nutrition platform using React, TypeScript, Node.js, Express, and MongoDB.",
    problem:
      "Users need secure, personalized guidance across nutrition, fitness and daily wellness without fragmented tools or unsafe data handling.",
    solution:
      "Built REST APIs with JWT authentication, personalized nutrition tracking, recipe discovery, food scanning, fitness tracking, meal planning, pantry & shopping list management, favorites, reviews, contextual AI assistance, server-side AI integration, data validation, rate limiting and user data isolation.",
    role: "Full-Stack Developer — React, TypeScript, Node.js, Express, MongoDB",
    stack: ["React", "TypeScript", "Node.js", "Express", "MongoDB"],
    links: [{ label: "GitHub", href: "https://github.com/muhammedsayyed/VEYRA" }],
    color: "#EAECEE",
    accent: "#0B0B0C",
    image: "veyra",
    featured: true,
  },
  {
    id: "02",
    title: "Marketing Academy CRM",
    subtitle: "Full-Stack CRM & Academy Management Platform",
    category: "Full-Stack / CRM & Academy",
    year: "06/2026 – 08/2026",
    description:
      "Built a full-stack CRM and Academy Management platform using React, TypeScript, Node.js, Express, Prisma, and PostgreSQL.",
    problem:
      "Marketing academies need to manage leads, students, courses and operations in one secure, role-aware system.",
    solution:
      "Implemented lead management, sales follow-ups, lead-to-student conversion, student management, role-based access control (RBAC), course & batch management, QR-based attendance, financial tracking, reporting and secure video streaming with Prisma and PostgreSQL.",
    role: "Full-Stack Developer — React, TypeScript, Node.js, Express, Prisma, PostgreSQL",
    stack: ["React", "TypeScript", "Node.js", "Express", "Prisma", "PostgreSQL"],
    links: [{ label: "GitHub", href: "https://github.com/muhammedsayyed/crm-market-agancy" }],
    color: "#F2EEE6",
    accent: "#FF3B30",
    image: "marketing-crm",
  },
  {
    id: "03",
    title: "ORRA",
    subtitle: "Premium E-Commerce Platform",
    category: "Frontend / E-Commerce",
    year: "04/2026 – 05/2026",
    description:
      "Built a premium, responsive e-commerce platform using Next.js, React, TypeScript, and Tailwind CSS, with a reusable component architecture and Zustand for persistent client-side state management.",
    problem:
      "Premium commerce needs live catalog data, persistent cart/wishlist state and protected flows without sacrificing responsiveness or SEO.",
    solution:
      "Integrated live REST APIs for products, categories, brands, authentication, cart, wishlist, search, filtering and checkout workflows. Added protected routes, responsive layouts, Framer Motion interactions, SEO metadata and social sharing optimization with Zustand for client state.",
    role: "Frontend Developer — Next.js, React, TypeScript, Tailwind CSS",
    stack: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Zustand", "REST API"],
    links: [{ label: "GitHub", href: "https://github.com/muhammedsayyed/ORRA---Premium-E-Commerce-Platform" }],
    color: "#E8E6F0",
    accent: "#6B5CFF",
    image: "orra",
  },
  {
    id: "04",
    title: "Mira",
    subtitle: "Social Micro-Blogging Platform",
    category: "Frontend / Social Platform",
    year: "03/2026 – 04/2026",
    description:
      "Built a responsive social micro-blogging platform using React 18, Vite, Tailwind CSS, and React Router.",
    problem:
      "Social platforms need real authentication, nested interactions and media handling integrated with a live API, not just static UI.",
    solution:
      "Implemented registration, login, JWT authentication, posts, likes, comments, nested replies, reposts, bookmarks, follow relationships, notifications, profile management and media uploads via REST API with Axios. Responsive component-based UI with editorial visual system. Production SPA deployed on Vercel using API rewrites and Vite proxy.",
    role: "Frontend Developer — React 18, Vite, Tailwind CSS, React Router",
    stack: ["React.js", "Vite", "Tailwind CSS", "REST API"],
    links: [{ label: "GitHub", href: "https://github.com/muhammedsayyed/Mira---Social-Micro-Blogging-Platform" }],
    color: "#F5F0E8",
    accent: "#D97706",
    image: "mira",
  },
]
