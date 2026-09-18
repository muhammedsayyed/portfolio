"use client"
import { useCallback, useEffect, useRef, useState } from "react"
import { motion, AnimatePresence, MotionConfig } from "framer-motion"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { projects } from "@/data/projects"
import ProjectCard from "./ProjectCard"

const EASE: [number, number, number, number] = [0.16, 1, 0.3, 1]

const variants = {
  enter: (dir: number) => ({ x: dir >= 0 ? 72 : -72, opacity: 0 }),
  center: { x: 0, opacity: 1 },
  exit: (dir: number) => ({ x: dir >= 0 ? -72 : 72, opacity: 0 }),
}

export default function Projects() {
  const ref = useRef<HTMLElement>(null)
  const [[index, direction], setPage] = useState<[number, number]>([0, 0])
  const total = projects.length
  const project = projects[index]

  const paginate = useCallback(
    (dir: number) => {
      setPage(([prev]) => [(prev + dir + total) % total, dir])
    },
    [total]
  )

  // Keyboard navigation — ignored while a project preview is open
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (document.querySelector("[data-lightbox]")) return
      if (e.key === "ArrowRight") paginate(1)
      if (e.key === "ArrowLeft") paginate(-1)
    }
    window.addEventListener("keydown", onKey)
    return () => window.removeEventListener("keydown", onKey)
  }, [paginate])

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
              Selected
              <br />
              <span className="italic font-light text-[var(--muted-2)]">work by AXIOM.</span>
            </h2>
          </div>
          <div data-work-header className="lg:max-w-[48ch]">
            <p className="font-mono text-[13px] leading-6 text-[var(--muted-2)]">
              A focused selection of product work — e-commerce, digital platforms and custom software. Each project ships with real APIs, auth and deployment. Data centralized in{" "}
              <span className="bg-[var(--ink)] text-white px-1.5 py-0.5 rounded">src/data/projects.ts</span>.
            </p>
            <div className="mt-4 flex flex-wrap gap-2 font-mono text-[11px] tracking-[0.14em]">
              <span className="rounded-full border border-[var(--line)] bg-white px-3 py-1">3 PROJECTS</span>
              <span className="rounded-full bg-[var(--accent)] text-white px-3 py-1">AXIOM STUDIO</span>
              <span className="rounded-full border border-[var(--line)] bg-[var(--paper-2)] px-3 py-1 text-[var(--muted-2)]">SELECTED WORK</span>
            </div>
          </div>
        </div>

        <div data-work-header className="mt-8 h-px bg-[var(--ink)] origin-left" />

        {/* Showcase controls */}
        <div data-work-header className="mt-10 flex items-center justify-between gap-4">
          <div className="flex items-baseline gap-3 font-mono text-xs tracking-[0.2em] text-[var(--muted)] min-w-0">
            <span className="shrink-0">
              <span className="text-[var(--ink)]">{String(index + 1).padStart(2, "0")}</span>
              {" / "}
              {String(total).padStart(2, "0")}
            </span>
            <span className="hidden sm:inline truncate text-[var(--muted-2)]">
              — {project.title} · {project.category.split("/")[0].trim().toUpperCase()}
            </span>
          </div>
          <div className="flex items-center gap-2 shrink-0">
            <button
              type="button"
              onClick={() => paginate(-1)}
              aria-label="Previous project"
              className="size-12 md:size-13 rounded-full border border-[var(--line-strong)] bg-white grid place-items-center text-lg text-[var(--ink)] hover:bg-[var(--ink)] hover:text-white hover:border-[var(--ink)] active:scale-95 transition-all cursor-pointer"
            >
              <span aria-hidden>←</span>
            </button>
            <button
              type="button"
              onClick={() => paginate(1)}
              aria-label="Next project"
              className="size-12 md:size-13 rounded-full bg-[var(--ink)] text-white grid place-items-center text-lg hover:bg-black active:scale-95 transition-all cursor-pointer"
            >
              <span aria-hidden>→</span>
            </button>
          </div>
        </div>

        {/* Single active project — directional transition, clipped so nothing scrolls sideways */}
        <MotionConfig reducedMotion="user">
          <div className="relative mt-6 overflow-hidden">
            <AnimatePresence mode="wait" custom={direction} initial={false}>
              <motion.div
                key={project.id}
                custom={direction}
                variants={variants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.45, ease: EASE }}
              >
                <ProjectCard project={project} index={index} total={total} />
              </motion.div>
            </AnimatePresence>
          </div>
        </MotionConfig>

        <div className="mt-12 rounded-[24px] border border-dashed border-[var(--line-strong)] bg-[var(--paper-2)] p-6 md:p-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div>
            <div className="font-mono text-[11px] tracking-[0.2em] text-[var(--muted)]">HAVE A PRODUCT IN MIND?</div>
            <div className="mt-2 font-[var(--font-display)] text-[22px] leading-tight">Let&apos;s build something useful together.</div>
            <div className="mt-1 font-mono text-xs leading-5 text-[var(--muted-2)] max-w-[60ch]">
              Every AXIOM project starts with discovery — goals, users and constraints — then design, build and ship as one team.
            </div>
          </div>
          <div className="flex flex-wrap gap-2">
            <a href="#contact" onClick={(e) => { e.preventDefault(); document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" }) }} className="rounded-full bg-[var(--ink)] text-white px-6 py-3 font-mono text-xs tracking-widest hover:bg-black transition">START A PROJECT →</a>
          </div>
        </div>
      </div>
    </section>
  )
}
