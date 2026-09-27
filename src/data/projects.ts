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

// Projects — sourced from ROVE
export const projects: Project[] = [
  {
    id: "01",
    title: "FoodieHub",
    subtitle: "Modern Food Ordering & Delivery Platform",
    category: "Full-Stack / Front-End Web Application",
    year: "2025",
    description:
      "A high-performance food ordering web platform built with Next.js and React. Offers a smooth, intuitive browsing experience with instant dish search, dynamic cart management, and seamless mobile responsiveness.",
    problem:
      "Restaurants rely on costly third-party aggregators and phone-call bottlenecks to take orders — creating friction for both customers and kitchen staff, and slashing profit margins.",
    solution:
      "Built an interactive digital menu with real-time cart management, a streamlined checkout flow, and SSR-powered performance via Next.js — eliminating ordering friction and maximising kitchen throughput without aggregator commissions.",
    role: "Web Developer",
    stack: [
      "Next.js",
      "React",
      "Tailwind CSS",
      "TypeScript",
      "JavaScript",
      "State Management",
      "REST APIs",
      "SSR",
    ],
    links: [
      { label: "LIVE DEMO", href: "https://food-pink-six.vercel.app/" },
    ],
    color: "linear-gradient(135deg, #1a0a00 0%, #3d1200 50%, #1a0a00 100%)",
    accent: "#e8350a",
    image: "/projects/foodiehub.png",
    featured: true,
  },
  {
    id: "02",
    title: "DentalCare",
    subtitle: "Dental Clinic & Patient Booking Platform",
    category: "Full-Stack Web Application / HealthTech",
    year: "2025",
    description:
      "A modern, high-performance web platform for dental clinics featuring seamless 24/7 online appointment booking, doctor selection, interactive smile transformation gallery, multilingual support (Arabic/English with full RTL), and a real-time administrative dashboard for clinic operations.",
    problem:
      "Dental clinics lose patients to friction — phone-tag scheduling, zero online presence, and no Arabic-friendly digital experience for MENA markets — while receptionists drown in manual appointment tracking.",
    solution:
      "Engineered a full-stack HealthTech platform with Next.js App Router and Server Actions: 24/7 online booking, calendar-based clinic management, RTL/LTR bi-directional UI, Schema.org LocalBusiness SEO, and Framer Motion micro-interactions for a premium patient experience.",
    role: "Full-Stack Web Developer",
    stack: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Framer Motion",
      "App Router",
      "Server Actions",
      "Lucide Icons",
      "RTL/LTR",
      "SEO",
    ],
    links: [
      { label: "LIVE DEMO", href: "https://dental-clinic-six-woad.vercel.app/" },
    ],
    color: "linear-gradient(135deg, #021a18 0%, #063d36 45%, #0a2a40 100%)",
    accent: "#0abf8e",
    image: "/projects/dentalcare.png",
    featured: true,
  },
  {
    id: "03",
    title: "Kian Egypt",
    subtitle: "Premium Furniture & Interior Design Showroom",
    category: "Front-End Web Application / E-Commerce & Retail",
    year: "2026",
    description:
      "A luxury furniture and interior design platform for Kian Egypt — showcasing curated collections, craftsman-made pieces, and immersive showroom experiences. Built for high-end retail audiences with an editorial design language, smooth page transitions, and a wishlist-driven discovery flow.",
    problem:
      "High-end furniture brands in the MENA region rely heavily on foot traffic and word-of-mouth, with no premium digital presence that matches their product quality — losing online customers to international competitors who offer polished e-commerce experiences.",
    solution:
      "Crafted an editorial, magazine-style web platform with full-screen hero cinematics, collection catalog browsing, showroom locator, wishlist management, and a downloadable product catalog — delivering a flagship digital showroom that converts browsers into buyers.",
    role: "Web Developer",
    stack: [
      "Next.js",
      "React",
      "Tailwind CSS",
      "TypeScript",
      "Framer Motion",
      "SSR",
      "SEO",
    ],
    links: [
      { label: "LIVE DEMO", href: "https://kan-flax.vercel.app/" },
    ],
    color: "linear-gradient(135deg, #1a1208 0%, #2e2010 45%, #3d2e18 100%)",
    accent: "#c8a96e",
    image: "/projects/kian.png",
    featured: true,
  },
  {
    id: "04",
    title: "ORRA",
    subtitle: "Premium Luxury E-Commerce Platform",
    category: "Full-Stack Web Application / Luxury E-Commerce / FinTech",
    year: "2026",
    description:
      "A cutting-edge, high-performance luxury e-commerce platform featuring modern architecture, fluid micro-interactions, robust checkout flows, and enterprise-grade performance. Designed to deliver an editorial Haute-Couture shopping experience with sub-second response times.",
    problem:
      "Luxury retail brands frequently lose high-intent shoppers due to sluggish storefronts, disjointed checkout UX, and bloated client-side bundles that fail to convey the prestige of their high-ticket physical products.",
    solution:
      "Engineered an editorial luxury platform leveraging Next.js App Router with React Server Components, secure Stripe Checkout with real-time webhooks, optimistic Zustand cart updates, and fluid Framer Motion transitions — scoring 95+ on Core Web Vitals.",
    role: "Lead Full-Stack Engineer & UI/UX Architect",
    stack: [
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Framer Motion",
      "Prisma",
      "PostgreSQL",
      "Stripe",
      "NextAuth",
      "Zustand",
    ],
    links: [
      { label: "LIVE DEMO", href: "https://orra-premium-ecommerce.vercel.app/" },
    ],
    color: "linear-gradient(135deg, #0d0d0f 0%, #17161b 45%, #0a0a0c 100%)",
    accent: "#d4af37",
    image: "/projects/orra.png",
    featured: true,
  },
  {
    id: "05",
    title: "Mira",
    subtitle: "Social Micro-Blogging & Real-Time Interaction Platform",
    category: "Full-Stack Web Application / Social Network",
    year: "2026",
    description:
      "A high-performance, real-time social micro-blogging platform engineered for seamless short-form content sharing, instant community interactions, and fluid media experiences. Features optimistic UI updates, rich publishing, and sub-16ms feedback latency.",
    problem:
      "Traditional social web feeds suffer from bloated JavaScript, slow client feedback on interactions (likes, retweets), and degraded FPS during deeply nested conversational threads.",
    solution:
      "Architected a real-time reactive feed with optimistic TanStack mutations, virtualized hierarchical thread rendering maintaining 60 FPS, indexed relational aggregation on PostgreSQL/Prisma, and live event streaming.",
    role: "Full-Stack Developer & UI/UX Designer",
    stack: [
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Framer Motion",
      "Prisma",
      "PostgreSQL",
      "WebSockets",
      "TanStack Query",
    ],
    links: [
      { label: "LIVE DEMO", href: "https://mira-social-micro-blogging.vercel.app/" },
    ],
    color: "linear-gradient(135deg, #1f140e 0%, #2b1810 45%, #180d09 100%)",
    accent: "#ff5722",
    image: "/projects/mira.png",
    featured: true,
  },
  {
    id: "06",
    title: "Phone Store",
    subtitle: "Modern Electronics & Smartphone E-Commerce Platform",
    category: "E-Commerce / Full-Stack Web Development",
    year: "2026",
    description:
      "A modern, high-performance e-commerce platform built with Next.js for browsing, comparing, and purchasing smartphones and tech accessories with an intuitive, mobile-first shopping experience.",
    problem:
      "Consumer tech buyers often encounter overwhelming specs, slow variant selection, and disjointed cart flows when shopping for high-value mobile devices across fragmented e-commerce catalogs.",
    solution:
      "Engineered an agile electronics marketplace with live faceted search, multi-variant selectors (color, storage tiers), real-time synchronized cart state via React Context, and a distraction-free checkout experience.",
    role: "Full-Stack / Frontend Developer",
    stack: [
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Lucide Icons",
      "Context API",
      "SSR",
      "Responsive UX",
    ],
    links: [
      { label: "LIVE DEMO", href: "https://phone-store-silk.vercel.app/" },
    ],
    color: "linear-gradient(135deg, #0f141c 0%, #162232 45%, #0b1017 100%)",
    accent: "#38bdf8",
    image: "/projects/phonestore.png",
    featured: true,
  },
  {
    id: "07",
    title: "Game Arena",
    subtitle: "Interactive Gaming Discovery & Exploration Platform",
    category: "Web Application / Entertainment & Gaming",
    year: "2026",
    description:
      "An immersive, high-performance gaming discovery and exploration platform featuring real-time search, multi-platform filtering, detailed game profiles, and a sleek gamer-centric UI with neon accents.",
    problem:
      "Gamers often struggle to find accurate cross-platform title details, system specs, and community ratings across fragmented storefronts with sluggish, non-optimized browsing experiences.",
    solution:
      "Engineered a responsive, high-speed gaming hub integrating real-time REST game APIs, debounced multi-genre filtering, high-definition media previews, and interactive watchlist tracking wrapped in a gamer-first dark neon theme.",
    role: "Frontend / Full-Stack Developer",
    stack: [
      "React",
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "REST API",
      "Lucide Icons",
      "Framer Motion",
      "Vercel",
    ],
    links: [
      { label: "LIVE DEMO", href: "https://game-arena-theta.vercel.app/" },
    ],
    color: "linear-gradient(135deg, #0a110a 0%, #0d1e10 45%, #060e07 100%)",
    accent: "#ccff00",
    image: "/projects/gamearena.png",
    featured: true,
  },
  {
    id: "08",
    title: "Elite Homes",
    subtitle: "Modern Luxury Real Estate & Property Discovery Platform",
    category: "Real Estate / Web Application / Commercial Platform",
    year: "2026",
    description:
      "A modern, elegant luxury real estate platform designed for seamless property discovery, featuring interactive search filters, high-resolution property showcases, and an agent inquiry system.",
    problem:
      "Prospective high-end homebuyers face disjointed property browsing experiences with confusing specifications, unoptimized media galleries, and clunky scheduling for private viewings.",
    solution:
      "Architected a sleek real estate portal featuring multi-criteria live filtering (location, specs, price range), immersive high-resolution galleries, tour booking forms, and a responsive luxury layout with micro-interactions.",
    role: "Frontend / Full-Stack Developer",
    stack: [
      "React",
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Lucide Icons",
      "Real Estate",
      "Responsive UX",
      "Vercel",
    ],
    links: [
      { label: "LIVE DEMO", href: "https://elite-homes-lovat.vercel.app/" },
    ],
    color: "linear-gradient(135deg, #180926 0%, #290f40 45%, #10061a 100%)",
    accent: "#a855f7",
    image: "/projects/elitehomes.png",
    featured: true,
  },
  {
    id: "09",
    title: "NutriPlan",
    subtitle: "Personalized Nutrition & Meal Planning Platform",
    category: "Health & Wellness / Web Application / HealthTech",
    year: "2026",
    description:
      "An intelligent nutrition and diet-planning web application designed to calculate personalized caloric needs, curate custom meal schedules, and track dietary goals with an intuitive wellness dashboard.",
    problem:
      "Individuals aiming for healthier lifestyles struggle with generic diet plans, confusing macronutrient targets, and tedious manual grocery tracking that lead to inconsistent nutritional habits.",
    solution:
      "Developed an algorithmic wellness platform that computes precise BMI, BMR, and TDEE breakdowns, generates curated meal plans tailored to specific lifestyles (Keto, Vegan, Balanced), and compiles automated grocery lists.",
    role: "Frontend / Full-Stack Developer",
    stack: [
      "React",
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Lucide Icons",
      "HealthTech",
      "Nutrition Calculator",
      "Vercel",
    ],
    links: [
      { label: "LIVE DEMO", href: "https://nutriplan-exam.vercel.app/home" },
    ],
    color: "linear-gradient(135deg, #071f16 0%, #0d3627 45%, #051711 100%)",
    accent: "#10b981",
    image: "/projects/nutriplan.png",
    featured: true,
  },
  {
    id: "10",
    title: "Adasa",
    subtitle: "Modern Eyewear, Photography & Optical Platform",
    category: "E-Commerce / Fashion & Optical Tech / Web Application",
    year: "2026",
    description:
      "A sophisticated, minimalist optical & photography web application designed for exploring designer eyewear, sunglasses, optical lenses, and photography knowledge with an elegant, boutique experience.",
    problem:
      "Eyewear and creative visual brands struggle to present nuanced product attributes (frame dimensions, lens materials, specialized lighting) through generic retail templates with cluttered interfaces.",
    solution:
      "Crafted an editorial-inspired boutique web platform featuring smart style and shape filters, high-resolution frame specifications, responsive cart state, and a clean dark aesthetic with warm amber accents.",
    role: "Frontend / Full-Stack Developer",
    stack: [
      "React",
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Lucide Icons",
      "E-Commerce",
      "Eyewear Fashion",
      "Responsive UX",
      "Vercel",
    ],
    links: [
      { label: "LIVE DEMO", href: "https://adasa-psi.vercel.app/" },
    ],
    color: "linear-gradient(135deg, #170d04 0%, #291807 45%, #0f0802 100%)",
    accent: "#f97316",
    image: "/projects/adasa.png",
    featured: true,
  },
  {
    id: "11",
    title: "FreshCart",
    subtitle: "Enterprise Grocery & Retail Supermarket E-Commerce Platform",
    category: "E-Commerce / Full-Stack Web Application / RetailTech",
    year: "2026",
    description:
      "A complete, enterprise-grade online supermarket and grocery e-commerce web application with user authentication, category browsing, cart & wishlist state, and multi-gateway checkout.",
    problem:
      "High-volume grocery shoppers face sluggish cart interactions, tedious checkout procedures, and unoptimized search across massive inventories with fluctuating prices and stock.",
    solution:
      "Engineered an enterprise retail platform featuring background state synchronization with React Query, schema-validated checkout flows with Formik & Yup, JWT authentication, and multi-channel payment processing (Online Card & COD).",
    role: "Frontend / Full-Stack Developer",
    stack: [
      "React",
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "React Query",
      "Formik & Yup",
      "E-Commerce",
      "Authentication",
      "REST API",
      "Vercel",
    ],
    links: [
      { label: "LIVE DEMO", href: "https://freshcart-route.vercel.app/" },
    ],
    color: "linear-gradient(135deg, #071f11 0%, #0d361c 45%, #051a0d 100%)",
    accent: "#22c55e",
    image: "/projects/freshcart.png",
    featured: true,
  },
  {
    id: "12",
    title: "Lumière Beauty Center",
    subtitle: "Premium Booking Platform (Frontend-Only)",
    category: "Full-Stack Web Application / BeautyTech",
    year: "2026",
    description:
      "Designed and built a complete, production-quality beauty center platform with a luxurious, feminine UI. The app includes a public website (home, services, team, offers, gallery, reviews), a 6-step booking engine with live availability, double-booking prevention based on staff hours and service duration, customer dashboard with reschedule/cancel, and a full admin panel with revenue analytics, appointment/service/staff/customer/offer/gallery/review management. All data persists in localStorage with a centralized storage layer and realistic seeded demo data. Fully responsive with elegant Framer Motion animations.",
    problem:
      "Beauty salons and wellness centers rely on phone calls and walk-ins for scheduling, leading to double-bookings, missed appointments, zero online presence, and no data-driven insights into revenue or staff utilization.",
    solution:
      "Engineered a premium booking platform with a 6-step booking flow featuring live slot calculation and overlap prevention, frontend auth simulation (admin + customer demo accounts), admin analytics dashboard calculated live from bookings, and full CRUD for services, staff, offers, gallery, reviews, and customers — all powered by localStorage with SEO metadata, Open Graph, sitemap, and LocalBusiness schema.",
    role: "Full-Stack Web Developer",
    stack: [
      "Next.js 16",
      "TypeScript",
      "Tailwind CSS v4",
      "Framer Motion",
      "Lucide React",
      "React Hook Form",
      "Zod",
      "date-fns",
      "Recharts",
      "localStorage",
    ],
    links: [
      { label: "LIVE DEMO", href: "https://beauty-center-seven.vercel.app/" },
    ],
    color: "linear-gradient(135deg, #1a0f10 0%, #2d1a1e 45%, #1a0a0e 100%)",
    accent: "#c8a96e",
    image: "/projects/lumiere.png",
    featured: true,
  },
]
