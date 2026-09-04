"use client"
import { useEffect, useRef } from "react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { projects } from "@/data/projects"
import ProjectCard from "./ProjectCard"

export default function Projects() {
  const ref = useRef<HTMLElement>(null)

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
              Four production projects — VEYRA, Marketing Academy CRM, ORRA and Mira. Full-stack and frontend work with real APIs, auth and deployments. Data centralized in{" "}
              <span className="bg-[var(--ink)] text-white px-1.5 py-0.5 rounded">src/data/projects.ts</span> & <span className="bg-[var(--ink)] text-white px-1.5 py-0.5 rounded">src/data/site.ts</span>.
            </p>
            <div className="mt-4 flex flex-wrap gap-2 font-mono text-[11px] tracking-[0.14em]">
              <span className="rounded-full border border-[var(--line)] bg-white px-3 py-1">4 PROJECTS</span>
              <span className="rounded-full bg-[var(--ink)] text-white px-3 py-1">03/2026 — 08/2026</span>
              <span className="rounded-full border border-[var(--line)] bg-[var(--paper-2)] px-3 py-1 text-[var(--muted-2)]">GITHUB LINKED</span>
            </div>
          </div>
        </div>

        <div data-work-header className="mt-8 h-px bg-[var(--ink)] origin-left" />

        <div className="mt-10 md:mt-12 space-y-10 md:space-y-14">
          {projects.map((p, i) => (
            <ProjectCard key={p.id} project={p} index={i} />
          ))}
        </div>

        <div className="mt-12 rounded-[24px] border border-dashed border-[var(--line-strong)] bg-[var(--paper-2)] p-6 md:p-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div>
            <div className="font-mono text-[11px] tracking-[0.2em] text-[var(--muted)]">UPDATING PROJECTS</div>
            <div className="mt-2 font-[var(--font-display)] text-[22px] leading-tight">Live URLs easy to add later.</div>
            <div className="mt-1 font-mono text-xs leading-5 text-[var(--muted-2)] max-w-[60ch]">
              Update <span className="font-medium text-[var(--ink)]">src/data/site.ts</span> & <span className="font-medium text-[var(--ink)]">src/data/projects.ts</span> — add Vercel URL to <span className="font-mono bg-white px-1 rounded border">links</span>. GitHub links are already live.
            </div>
          </div>
          <div className="flex flex-wrap gap-2">
            <span className="rounded-full bg-white border border-[var(--line)] px-4 py-2 font-mono text-xs tracking-widest">4 REAL PROJECTS</span>
            <span className="rounded-full bg-[var(--ink)] text-white px-4 py-2 font-mono text-xs tracking-widest">CENTRALIZED DATA</span>
          </div>
        </div>
      </div>
    </section>
  )
}
