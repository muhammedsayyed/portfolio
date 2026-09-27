"use client"
import { useState, useEffect, useRef, useCallback } from "react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { projects } from "@/data/projects"
import ProjectCard from "./ProjectCard"

export default function Projects() {
  const ref = useRef<HTMLElement>(null)
  const [current, setCurrent] = useState(0)
  const total = projects.length

  const prev = useCallback(() => setCurrent((c) => (c - 1 + total) % total), [total])
  const next = useCallback(() => setCurrent((c) => (c + 1) % total), [total])

  // Keyboard navigation (left/right arrows) when section is in view
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      const section = ref.current
      if (!section) return
      const rect = section.getBoundingClientRect()
      const inView = rect.top < window.innerHeight && rect.bottom > 0
      if (!inView) return
      if (e.key === "ArrowLeft") { e.preventDefault(); prev() }
      if (e.key === "ArrowRight") { e.preventDefault(); next() }
    }
    window.addEventListener("keydown", handleKey)
    return () => window.removeEventListener("keydown", handleKey)
  }, [prev, next])

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)
    const ctx = gsap.context(() => {
      gsap.from("[data-work-header]", {
        y: 28,
        opacity: 0,
        duration: 0.85,
        stagger: 0.07,
        ease: "power3.out",
        scrollTrigger: { trigger: "[data-work-wrap]", start: "top 82%" },
      })
    }, ref)
    return () => ctx.revert()
  }, [])

  return (
    <section ref={ref} id="work" className="relative bg-[var(--paper)] border-t border-[var(--line)]">
      <div data-work-wrap className="mx-auto max-w-[1600px] px-6 md:px-10 py-16 md:py-20">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8">
          <div>
            <div data-work-header className="inline-flex items-center gap-2 font-mono text-[11px] tracking-[0.28em] text-[var(--muted)]">
              <span className="size-1.5 bg-[var(--accent)] rounded-full" /> 03 — SELECTED WORK
            </div>
            <h2 data-work-header className="mt-4 font-[var(--font-display)] text-[46px] md:text-[72px] leading-[0.85] tracking-[-0.05em]">
              Interfaces
              <br />
              <span className="italic font-light text-[var(--muted-2)]">that earn attention.</span>
            </h2>
          </div>
          <div data-work-header className="lg:max-w-[48ch]">
            <p className="font-mono text-[13px] leading-6 text-[var(--muted-2)]">
              Production projects — full-stack and frontend work with real APIs, auth and deployments. Data centralized in{" "}
              <span className="bg-[var(--ink)] text-white px-1.5 py-0.5 rounded">src/data/projects.ts</span> & <span className="bg-[var(--ink)] text-white px-1.5 py-0.5 rounded">src/data/site.ts</span>.
            </p>
            <div className="mt-4 flex flex-wrap gap-2 font-mono text-[11px] tracking-[0.14em]">
              <span className="rounded-full border border-[var(--line)] bg-white px-3 py-1">{projects.length} PROJECTS</span>
              <span className="rounded-full bg-[var(--ink)] text-white px-3 py-1">2025 — 2026</span>
              <span className="rounded-full border border-[var(--line)] bg-[var(--paper-2)] px-3 py-1 text-[var(--muted-2)]">LIVE DEMOS</span>
            </div>
          </div>
        </div>

        <div data-work-header className="mt-8 h-px bg-[var(--ink)] origin-left" />

        {/* Single project card */}
        <div className="mt-10 md:mt-12">
          <ProjectCard key={projects[current].id} project={projects[current]} index={current} total={total} />
        </div>

        {/* Navigation — below the card, clear and polished */}
        <div className="mt-8 flex items-center justify-center gap-6">
          {/* Prev arrow */}
          <button
            type="button"
            onClick={prev}
            className="size-12 md:size-14 rounded-full bg-[var(--ink)] text-white grid place-items-center text-lg md:text-xl hover:bg-black hover:scale-105 active:scale-95 transition-all duration-200 cursor-pointer shadow-md"
            aria-label="Previous project"
          >
            ←
          </button>

          {/* Center: counter + dots */}
          <div className="flex flex-col items-center gap-3">
            <div className="font-mono text-sm tracking-[0.2em] text-[var(--ink)]">
              <span className="font-semibold">{String(current + 1).padStart(2, "0")}</span>
              <span className="mx-2 text-[var(--muted)]">/</span>
              <span className="text-[var(--muted)]">{String(total).padStart(2, "0")}</span>
            </div>
            <div className="flex items-center gap-1.5">
              {projects.map((_, i) => (
                <button
                  key={i}
                  type="button"
                  onClick={() => setCurrent(i)}
                  className={`rounded-full transition-all duration-300 cursor-pointer ${
                    i === current
                      ? "w-7 h-2.5 bg-[var(--ink)]"
                      : "size-2.5 bg-[var(--line-strong)] hover:bg-[var(--muted)]"
                  }`}
                  aria-label={`Go to project ${i + 1}`}
                />
              ))}
            </div>
          </div>

          {/* Next arrow */}
          <button
            type="button"
            onClick={next}
            className="size-12 md:size-14 rounded-full bg-[var(--ink)] text-white grid place-items-center text-lg md:text-xl hover:bg-black hover:scale-105 active:scale-95 transition-all duration-200 cursor-pointer shadow-md"
            aria-label="Next project"
          >
            →
          </button>
        </div>

        <div className="mt-12 rounded-[24px] border border-dashed border-[var(--line-strong)] bg-[var(--paper-2)] p-6 md:p-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div>
            <div className="font-mono text-[11px] tracking-[0.2em] text-[var(--muted)]">SELECTED WORK</div>
            <div className="mt-2 font-[var(--font-display)] text-[22px] leading-tight">Real projects, live demos.</div>
            <div className="mt-1 font-mono text-xs leading-5 text-[var(--muted-2)] max-w-[60ch]">
              Each project above includes a live demo link. Click <span className="font-mono bg-white px-1 rounded border">LIVE DEMO</span> to explore.
            </div>
          </div>
          <div className="flex flex-wrap gap-2">
            <span className="rounded-full bg-white border border-[var(--line)] px-4 py-2 font-mono text-xs tracking-widest">{projects.length} PROJECTS</span>
            <span className="rounded-full bg-[var(--ink)] text-white px-4 py-2 font-mono text-xs tracking-widest">LIVE DEMOS</span>
          </div>
        </div>
      </div>
    </section>
  )
}
