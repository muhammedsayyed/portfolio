export type Skill = {
  name: string
  category: string
  level: string
  description: string
  meta: string
  highlight?: boolean
}

// Skills aligned strictly to CV — no invented technologies
export const skills: Skill[] = [
  {
    name: "React.js",
    category: "Frontend",
    level: "Core — Production projects",
    description: "Component-based UI with hooks, React Router, and modern patterns. Used across ORRA, Mira, and VEYRA to build interactive, responsive interfaces.",
    meta: "React.js • Vite • Hooks",
    highlight: true,
  },
  {
    name: "Next.js",
    category: "Frontend",
    level: "Core — Production",
    description: "App Router, routing and SEO foundations used in ORRA premium e-commerce. Focus on reusable component architecture and responsive layouts.",
    meta: "Next.js • React • SSR/SSG",
    highlight: true,
  },
  {
    name: "TypeScript",
    category: "Frontend",
    level: "Advanced — Typed projects",
    description: "Type-safe development across full-stack and frontend projects (VEYRA, ORRA, Mira). Used for props, API contracts and data validation.",
    meta: "TypeScript • JavaScript (ES6+)",
  },
  {
    name: "Tailwind CSS",
    category: "Frontend / Styling",
    level: "Advanced — Daily use",
    description: "Utility-first styling for responsive, modern UIs. Core styling layer for Mira, ORRA and VEYRA with responsive web design principles.",
    meta: "Tailwind CSS • Responsive Web Design • CSS3",
    highlight: true,
  },
  {
    name: "HTML5 / CSS3 / JavaScript",
    category: "Frontend / Fundamentals",
    level: "Strong foundation",
    description: "Semantic HTML5, modern CSS3 and ES6+ JavaScript fundamentals applied across all projects and Route Academy training.",
    meta: "HTML5 • CSS3 • JS (ES6+)",
  },
  {
    name: "Figma / UI/UX",
    category: "Design",
    level: "UI/UX Designer — Wireframe to code",
    description: "Designing user-friendly flows in Figma, from wireframing and prototyping to translating designs into functional, responsive interfaces and design systems.",
    meta: "Figma • Wireframing • Prototyping • Design Systems • Responsive Design",
    highlight: true,
  },
  {
    name: "Node.js / Express / MongoDB",
    category: "Backend",
    level: "Hands-on — Full-stack projects",
    description: "Backend development with Node.js, Express.js, REST APIs, MongoDB and Mongoose. Built APIs for VEYRA with JWT, RBAC and validation.",
    meta: "Node.js • Express.js • REST APIs • MongoDB • Mongoose",
  },
  {
    name: "Git / Tools",
    category: "Tools / Other",
    level: "Daily workflow",
    description: "Git, GitHub, VS Code, API integration, JWT Authentication, RBAC and form validation across full-stack workflows.",
    meta: "Git • GitHub • VS Code • JWT • RBAC",
  },
  {
    name: "Backend Training",
    category: "Currently Learning",
    level: "Training @ Route Academy",
    description: "Currently training in Backend Development — Node.js, Express.js, REST API development and database design to own the full product from pixel to API.",
    meta: "Node.js • Express.js • REST APIs • Database Design",
  },
]

export const principles = [
  { k: "01", v: "Clean code, thoughtful design" },
  { k: "02", v: "Responsive & user-friendly" },
  { k: "03", v: "Design to code, with intent" },
  { k: "04", v: "Continuous learning" },
]
