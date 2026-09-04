// Single source of truth for portfolio personal & professional data
// Update live URLs, GitHub links, descriptions here — components read from this file

export const siteConfig = {
  name: "Muhammed Sayed Ahmed Abdelaziz",
  shortName: "Muhammed Sayed",
  title: "Junior Front-End Developer | React.js, Next.js & UI/UX",
  titleShort: "Junior Front-End Developer",
  email: "muhammmmed.sayed@gmail.com",
  phone: "01012444365",
  phoneHref: "tel:+201012444365",
  location: "Giza, Egypt",
  github: "https://github.com/muhammedsayyed",
  githubRepos: "https://github.com/muhammedsayyed?tab=repositories",
  linkedin: "https://linkedin.com/in/muhammed-sayed-420775405",
  portfolio: "https://portfolio-beta-ten-y81ydngqww.vercel.app",
} as const

export const professionalSummary =
  "Junior Front-End Developer and UI/UX Designer passionate about building modern, responsive, and user-friendly web experiences. Skilled in React.js, Next.js, JavaScript, TypeScript, Tailwind CSS, and Figma, with hands-on experience developing interactive web applications and translating UI designs into functional interfaces. Currently training in Backend Development with Node.js, Express.js, MongoDB, and REST APIs at Route Academy. Passionate about clean code, thoughtful design, and continuous learning."

export const education = {
  degree: "Bachelor of Business Information Systems (BIS)",
  institute: "Higher Institute for Advanced Studies – Management Information Systems",
  period: "09/2022 – 06/2026",
  location: "Giza, Egypt",
  description:
    "Bachelor's degree in Business Information Systems (BIS), with a focus on information systems, business technology, and software applications.",
} as const

export const course = {
  title: "Front-End Development",
  institution: "Route Academy",
  period: "09/2025 – 03/2026",
  location: "Dokki, Egypt",
  description:
    "Completed a 6-month Front-End Development training program covering HTML5, CSS3, JavaScript, React.js, responsive web design, UI/UX fundamentals, and modern front-end development practices. Successfully completed the program and received a Certificate of Completion.",
} as const

// Skills — ONLY technologies confirmed by CV (no invented tech)
export const skillGroups = {
  frontend: ["HTML5", "CSS3", "JavaScript (ES6+)", "TypeScript", "React.js", "Next.js", "Vite", "Tailwind CSS", "Responsive Web Design"],
  uiux: ["Figma", "UI/UX Design", "Wireframing", "Prototyping", "Responsive Design", "Design Systems"],
  backend: ["Node.js", "Express.js", "REST APIs", "MongoDB", "Mongoose", "Prisma", "PostgreSQL"],
  tools: ["Git", "GitHub", "VS Code", "API Integration", "JWT Authentication", "RBAC", "Form Validation"],
  learning: ["Backend Development", "Node.js", "Express.js", "REST API Development", "Database Design"],
} as const

export const siteLinks = {
  github: siteConfig.github,
  linkedin: siteConfig.linkedin,
  email: `mailto:${siteConfig.email}`,
  phone: siteConfig.phoneHref,
} as const
