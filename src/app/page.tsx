import Navigation from "@/components/Navigation"
import Hero from "@/components/Hero"
import About from "@/components/About"
import Skills from "@/components/Skills"
import Projects from "@/components/Projects"
import Testimonials from "@/components/Testimonials"
import Contact from "@/components/Contact"
import Cursor from "@/components/ui/Cursor"

export default function Page() {
  return (
    <div className="relative bg-[var(--paper)] text-[var(--ink)]">
      <a
        href="#hero"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:rounded-full focus:bg-[var(--ink)] focus:text-white focus:px-5 focus:py-2 focus:font-mono focus:text-xs focus:tracking-widest"
      >
        Skip to content
      </a>
      <Cursor />
      <Navigation />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Testimonials />
        <Contact />
      </main>
    </div>
  )
}
