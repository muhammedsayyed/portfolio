"use client"
import { useRef } from "react"
import { motion } from "framer-motion"
import type { Project } from "@/data/projects"

export default function ProjectCard({ project, index }: { project: Project; index: number }) {
  const ref = useRef<HTMLDivElement>(null)

  const handleMove = (e: React.MouseEvent) => {
    const el = ref.current
    if (!el || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return
    const rect = el.getBoundingClientRect()
    const x = (e.clientX - rect.left) / rect.width - 0.5
    const y = (e.clientY - rect.top) / rect.height - 0.5
    const inner = el.querySelector("[data-tilt]") as HTMLElement
    if (inner) {
      inner.style.transform = `perspective(1200px) rotateY(${x * 6}deg) rotateX(${-y * 6}deg) translateZ(0)`
    }
    const img = el.querySelector("[data-parallax]") as HTMLElement
    if (img) {
      img.style.transform = `translate3d(${x * 18}px, ${y * 12}px, 0) scale(1.06)`
    }
  }
  const handleLeave = () => {
    const el = ref.current
    if (!el) return
    const inner = el.querySelector("[data-tilt]") as HTMLElement
    if (inner) inner.style.transform = `perspective(1200px) rotateY(0deg) rotateX(0deg)`
    const img = el.querySelector("[data-parallax]") as HTMLElement
    if (img) img.style.transform = `translate3d(0,0,0) scale(1)`
  }

  const isEven = index % 2 === 0

  return (
    <article
      ref={ref}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      className="group relative"
    >
      <div
        data-tilt
        className="grid lg:grid-cols-12 gap-0 overflow-hidden rounded-[28px] border border-[var(--line)] bg-white transition-transform duration-700 will-change-transform"
        style={{ transform: "perspective(1200px) rotateY(0deg) rotateX(0deg)" }}
      >
        {/* visual */}
        <div className={`relative lg:col-span-7 min-h-[420px] md:min-h-[520px] overflow-hidden bg-[var(--paper-2)] ${isEven ? "lg:order-1" : "lg:order-2"}`}>
          {/* abstract art instead of screenshot */}
          <div className="absolute inset-0">
            <div className="absolute inset-0" style={{ background: project.color }} />
            {/* grid */}
            <div className="absolute inset-0 opacity-[0.08]" style={{ backgroundImage: `linear-gradient(var(--line-strong) 1px, transparent 1px), linear-gradient(90deg, var(--line-strong) 1px, transparent 1px)`, backgroundSize: "32px 32px" }} />
            {/* big number */}
            <div className="absolute -bottom-6 -right-2 font-[var(--font-display)] text-[220px] leading-none tracking-[-0.08em] text-[var(--ink)]/[0.06] select-none">{project.id}</div>

            {/* central preview mock */}
            <div
              data-parallax
              className="absolute inset-6 md:inset-10 rounded-[24px] overflow-hidden border border-black/10 bg-white shadow-[0_24px_64px_rgba(0,0,0,0.12)] will-change-transform transition-transform duration-700"
              style={{ transition: "transform 0.7s cubic-bezier(0.16,1,0.3,1)" }}
            >
              {/* mock browser chrome */}
              <div className="h-9 flex items-center gap-1.5 px-4 border-b border-black/10 bg-[var(--paper)]">
                <span className="size-2.5 rounded-full bg-[#FF5F57]" />
                <span className="size-2.5 rounded-full bg-[#FFBD2E]" />
                <span className="size-2.5 rounded-full bg-[#28CA42]" />
                <span className="ml-auto font-mono text-[10px] tracking-[0.2em] text-[var(--muted)]">{project.id} — {project.subtitle.toUpperCase()}</span>
              </div>

              <div className="p-6 md:p-8 h-full flex flex-col">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <div className="font-mono text-[10px] tracking-[0.24em] text-[var(--muted)]">{project.category}</div>
                    <div className="mt-2 font-[var(--font-display)] text-[32px] md:text-[40px] leading-none tracking-[-0.04em]">{project.title}</div>
                    <div className="mt-1 font-mono text-xs tracking-[0.18em] text-[var(--muted-2)]">{project.year} — INTERACTIVE PREVIEW</div>
                  </div>
                  <span className="size-10 rounded-full grid place-items-center border border-black/10 bg-white">↗</span>
                </div>

                {/* mock content blocks */}
                <div className="mt-8 grid grid-cols-12 gap-3 flex-1">
                  <div className="col-span-7 space-y-3">
                    <div className="h-3 w-3/4 rounded-full bg-[var(--ink)]" />
                    <div className="h-2 w-full rounded-full bg-black/10" />
                    <div className="h-2 w-5/6 rounded-full bg-black/10" />
                    <div className="mt-4 flex gap-2">
                      <span className="rounded-full bg-[var(--ink)] text-white px-3 py-1 font-mono text-[10px] tracking-widest">PRIMARY</span>
                      <span className="rounded-full border border-black/15 px-3 py-1 font-mono text-[10px] tracking-widest">SECONDARY</span>
                    </div>
                    <div className="mt-6 grid grid-cols-3 gap-2">
                      {[1, 2, 3].map((n) => (
                        <div key={n} className="aspect-[4/3] rounded-xl border border-black/10 bg-[var(--paper-2)] p-3 flex flex-col justify-between">
                          <div className="size-6 rounded-full bg-white border border-black/10" />
                          <div className="space-y-1.5">
                            <div className="h-1.5 w-full bg-black/15 rounded-full" />
                            <div className="h-1 w-2/3 bg-black/10 rounded-full" />
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="col-span-5">
                    <div className="h-full rounded-2xl border border-black/10 bg-[var(--paper-2)] p-3 flex flex-col gap-3">
                      <div className="h-24 rounded-xl bg-white border border-black/10" style={{ background: `linear-gradient(135deg, ${project.accent}18, transparent)` }} />
                      <div className="space-y-2">
                        <div className="h-2 w-full bg-black/15 rounded-full" />
                        <div className="h-2 w-4/5 bg-black/10 rounded-full" />
                        <div className="h-2 w-3/5 bg-black/10 rounded-full" />
                      </div>
                      <div className="mt-auto flex gap-2 flex-wrap">
                        {project.stack.slice(0, 3).map((s) => (
                          <span key={s} className="text-[10px] font-mono tracking-widest border border-black/10 bg-white rounded-full px-2 py-1">{s.toUpperCase()}</span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* accent bar */}
              <div className="absolute bottom-0 inset-x-0 h-1" style={{ background: project.accent }} />
            </div>
          </div>

          {/* header badges */}
          <div className="absolute top-4 left-4 md:top-6 md:left-6 flex gap-2 z-10">
            <span className="rounded-full bg-white border border-black/10 px-3 py-1 font-mono text-[10px] tracking-[0.18em] shadow-sm">CASE {project.id}</span>
            <span className="hidden sm:inline-flex rounded-full bg-[var(--ink)] text-white px-3 py-1 font-mono text-[10px] tracking-[0.18em]">{project.year}</span>
          </div>
          <div className="absolute top-4 right-4 md:top-6 md:right-6 hidden md:flex items-center gap-2 rounded-full bg-white/90 backdrop-blur border border-white px-3 py-1 font-mono text-[10px] tracking-[0.18em] shadow-sm">
            <span className="size-1.5 rounded-full" style={{ background: project.accent }} /> {project.category.split("/")[0]}
          </div>
        </div>

        {/* details */}
        <div className={`lg:col-span-5 p-7 md:p-9 flex flex-col bg-white ${isEven ? "lg:order-2" : "lg:order-1"}`}>
          <div className="flex items-start justify-between gap-4">
            <div>
              <div className="font-mono text-[11px] tracking-[0.24em] text-[var(--muted)]">{project.category}</div>
              <h3 className="mt-2 font-[var(--font-display)] text-[32px] md:text-[40px] leading-none tracking-[-0.04em]">{project.title}</h3>
              <div className="mt-1 font-[var(--font-display)] text-[18px] leading-none italic text-[var(--muted-2)]">{project.subtitle}</div>
            </div>
            <span className="hidden md:grid size-10 rounded-full border border-[var(--line)] place-items-center text-sm group-hover:rotate-45 group-hover:bg-[var(--ink)] group-hover:text-white group-hover:border-[var(--ink)] transition-all duration-500">↗</span>
          </div>

          <p className="mt-5 font-mono text-[13px] leading-6 text-[var(--muted-2)]">{project.description}</p>

          <div className="mt-6 space-y-4">
            <div className="rounded-2xl border border-[var(--line)] bg-[var(--paper)] p-4">
              <div className="font-mono text-[10px] tracking-[0.18em] text-[var(--muted)]">PROBLEM</div>
              <div className="mt-1.5 font-mono text-xs leading-5 text-[var(--ink-soft)]">{project.problem}</div>
            </div>
            <div className="rounded-2xl border border-[var(--line)] bg-white p-4">
              <div className="font-mono text-[10px] tracking-[0.18em] text-[var(--muted)]">SOLUTION & MY ROLE</div>
              <div className="mt-1.5 font-mono text-xs leading-5 text-[var(--ink-soft)]">{project.solution}</div>
              <div className="mt-2 inline-flex rounded-full bg-[var(--ink)] text-white px-2.5 py-1 font-mono text-[11px] tracking-wide">{project.role}</div>
            </div>
          </div>

          <div className="mt-6 flex flex-wrap gap-2">
            {project.stack.map((s) => (
              <span key={s} className="rounded-full border border-[var(--line)] bg-[var(--paper-2)] px-3 py-1 font-mono text-[11px] tracking-[0.12em] text-[var(--muted-2)]">
                {s}
              </span>
            ))}
          </div>

          <div className="mt-7 flex flex-wrap gap-3">
            {project.links.map((l) => (
              <a
                key={l.label}
                href={l.href}
                className="inline-flex items-center gap-2 rounded-full bg-[var(--ink)] text-white px-5 py-2.5 font-mono text-xs tracking-[0.14em] hover:bg-black transition-colors"
              >
                {l.label} <span>↗</span>
              </a>
            ))}
            <span className="inline-flex items-center gap-2 rounded-full border border-[var(--line-strong)] bg-white px-5 py-2.5 font-mono text-xs tracking-[0.14em]">
              VIEW DETAILS
            </span>
          </div>

          <div className="mt-auto pt-6 flex items-center justify-between border-t border-dashed border-[var(--line)] font-mono text-[11px] tracking-[0.18em] text-[var(--muted)]">
            <span>0{index + 1} — 04</span>
            <span className="hidden sm:inline">CRAFTED INTERFACE • {project.year}</span>
            <span className="size-2 rounded-full" style={{ background: project.accent }} />
          </div>
        </div>
      </div>

      {/* bottom accent line on hover */}
      <motion.div
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true, margin: "-10%" }}
        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: index * 0.08 }}
        className="mt-3 h-px bg-[var(--line)] origin-left hidden md:block"
      />
    </article>
  )
}
