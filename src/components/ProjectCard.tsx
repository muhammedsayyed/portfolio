"use client"
import { useState, useRef, useEffect } from "react"
import Image from "next/image"
import { motion, AnimatePresence } from "framer-motion"
import type { Project } from "@/data/projects"

export default function ProjectCard({
  project,
  index,
  total = 3,
}: {
  project: Project
  index: number
  total?: number
}) {
  const ref = useRef<HTMLDivElement>(null)
  const [lightboxOpen, setLightboxOpen] = useState(false)

  // Close lightbox on Escape key
  useEffect(() => {
    if (!lightboxOpen) return
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setLightboxOpen(false)
    }
    window.addEventListener("keydown", handleKeyDown)
    return () => window.removeEventListener("keydown", handleKeyDown)
  }, [lightboxOpen])

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
      img.style.transform = `translate3d(${x * 18}px, ${y * 12}px, 0) scale(1.04)`
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
  const hasScreenshot = project.image && project.image.startsWith("/")

  return (
    <>
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
          <div className={`relative lg:col-span-7 min-h-[440px] md:min-h-[540px] overflow-hidden bg-[var(--paper-2)] ${isEven ? "lg:order-1" : "lg:order-2"}`}>
            <div className="absolute inset-0">
              <div className="absolute inset-0" style={{ background: project.color }} />
              {/* grid */}
              <div
                className="absolute inset-0 opacity-[0.08]"
                style={{
                  backgroundImage: `linear-gradient(var(--line-strong) 1px, transparent 1px), linear-gradient(90deg, var(--line-strong) 1px, transparent 1px)`,
                  backgroundSize: "32px 32px",
                }}
              />
              {/* big number */}
              <div className="absolute -bottom-6 -right-2 font-[var(--font-display)] text-[220px] leading-none tracking-[-0.08em] text-[var(--ink)]/[0.06] select-none">
                {project.id}
              </div>

              {/* central preview mock */}
              <div
                data-parallax
                onClick={() => setLightboxOpen(true)}
                className="absolute inset-5 sm:inset-6 md:inset-8 lg:inset-10 rounded-[20px] md:rounded-[24px] overflow-hidden border border-black/10 bg-white shadow-[0_24px_64px_rgba(0,0,0,0.12)] will-change-transform transition-transform duration-700 flex flex-col cursor-pointer group/preview"
                style={{ transition: "transform 0.7s cubic-bezier(0.16,1,0.3,1)" }}
              >
                {/* mock browser chrome */}
                <div className="h-9 shrink-0 flex items-center gap-1.5 px-4 border-b border-black/10 bg-[var(--paper)] select-none">
                  <span className="size-2.5 rounded-full bg-[#FF5F57]" />
                  <span className="size-2.5 rounded-full bg-[#FFBD2E]" />
                  <span className="size-2.5 rounded-full bg-[#28CA42]" />
                  <div className="mx-auto flex items-center gap-1.5 px-3 py-0.5 rounded-full bg-black/5 text-[10px] font-mono text-[var(--muted)]">
                    <span className="size-1.5 rounded-full bg-[#28CA42]" />
                    <span>{project.title.toLowerCase().replace(/\s+/g, "-")}.app</span>
                  </div>
                  <span className="font-mono text-[10px] tracking-[0.2em] text-[var(--muted)]">{project.id}</span>
                </div>

                {hasScreenshot ? (
                  <div className="relative flex-1 w-full min-h-0 overflow-hidden bg-[var(--paper-2)]">
                    <Image
                      src={project.image}
                      alt={`${project.title} — ${project.subtitle}`}
                      fill
                      sizes="(max-width: 1024px) 100vw, 55vw"
                      className="object-cover object-top transition-transform duration-700 ease-out group-hover/preview:scale-[1.04]"
                      priority={index === 0}
                    />
                    {/* Hover badge to indicate preview */}
                    <div className="absolute inset-0 bg-black/35 opacity-0 group-hover/preview:opacity-100 transition-opacity duration-300 flex items-center justify-center backdrop-blur-[2px]">
                      <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/95 text-[var(--ink)] font-mono text-xs tracking-wider shadow-lg transform translate-y-2 group-hover/preview:translate-y-0 transition-transform duration-300">
                        <span>VIEW FULL PREVIEW</span> ↗
                      </span>
                    </div>
                  </div>
                ) : (
                  /* Fallback abstract wireframe */
                  <div className="p-6 md:p-8 h-full flex flex-col">
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <div className="font-mono text-[10px] tracking-[0.24em] text-[var(--muted)]">{project.category}</div>
                        <div className="mt-2 font-[var(--font-display)] text-[32px] md:text-[40px] leading-none tracking-[-0.04em]">{project.title}</div>
                        <div className="mt-1 font-mono text-xs tracking-[0.18em] text-[var(--muted-2)]">{project.year} — PREVIEW</div>
                      </div>
                      <span className="size-10 rounded-full grid place-items-center border border-black/10 bg-white">↗</span>
                    </div>
                    <div className="mt-8 grid grid-cols-12 gap-3 flex-1">
                      <div className="col-span-7 space-y-3">
                        <div className="h-3 w-3/4 rounded-full bg-[var(--ink)]" />
                        <div className="h-2 w-full rounded-full bg-black/10" />
                        <div className="h-2 w-5/6 rounded-full bg-black/10" />
                      </div>
                    </div>
                  </div>
                )}

                {/* accent bar */}
                <div className="absolute bottom-0 inset-x-0 h-1 z-10" style={{ background: project.accent }} />
              </div>
            </div>

            {/* header badges */}
            <div className="absolute top-4 left-4 md:top-6 md:left-6 flex gap-2 z-10">
              <span className="rounded-full bg-white border border-black/10 px-3 py-1 font-mono text-[10px] tracking-[0.18em] shadow-sm">
                CASE {project.id}
              </span>
              <span className="hidden sm:inline-flex rounded-full bg-[var(--ink)] text-white px-3 py-1 font-mono text-[10px] tracking-[0.18em]">
                {project.year}
              </span>
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
              <span className="hidden md:grid size-10 rounded-full border border-[var(--line)] place-items-center text-sm group-hover:rotate-45 group-hover:bg-[var(--ink)] group-hover:text-white group-hover:border-[var(--ink)] transition-all duration-500">
                ↗
              </span>
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
                <div className="mt-2 inline-flex rounded-full bg-[var(--ink)] text-white px-2.5 py-1 font-mono text-[11px] tracking-wide">
                  {project.role}
                </div>
              </div>
            </div>

            <div className="mt-6 flex flex-wrap gap-2">
              {project.stack.map((s) => (
                <span
                  key={s}
                  className="rounded-full border border-[var(--line)] bg-[var(--paper-2)] px-3 py-1 font-mono text-[11px] tracking-[0.12em] text-[var(--muted-2)]"
                >
                  {s}
                </span>
              ))}
            </div>

            <div className="mt-7 flex flex-wrap gap-3">
              {project.links.map((l) => (
                <a
                  key={l.label}
                  href={l.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full bg-[var(--ink)] text-white px-5 py-2.5 font-mono text-xs tracking-[0.14em] hover:bg-black transition-colors"
                >
                  {l.label} <span>↗</span>
                </a>
              ))}
              <button
                type="button"
                onClick={() => setLightboxOpen(true)}
                className="inline-flex items-center gap-2 rounded-full border border-[var(--line-strong)] bg-white px-5 py-2.5 font-mono text-xs tracking-[0.14em] hover:bg-[var(--paper-2)] hover:border-[var(--ink)] transition-all cursor-pointer"
              >
                PREVIEW <span>🔍</span>
              </button>
            </div>

            <div className="mt-auto pt-6 flex items-center justify-between border-t border-dashed border-[var(--line)] font-mono text-[11px] tracking-[0.18em] text-[var(--muted)]">
              <span>
                0{index + 1} — 0{total}
              </span>
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

      {/* Lightbox Modal */}
      <AnimatePresence>
        {lightboxOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setLightboxOpen(false)}
            className="fixed inset-0 z-[999] bg-black/85 backdrop-blur-md flex items-center justify-center p-4 md:p-8 cursor-zoom-out"
          >
            <motion.div
              initial={{ scale: 0.94, opacity: 0, y: 16 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.94, opacity: 0, y: 16 }}
              transition={{ type: "spring", damping: 28, stiffness: 320 }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-w-6xl w-full bg-[var(--paper)] rounded-2xl overflow-hidden border border-white/20 shadow-2xl flex flex-col cursor-default max-h-[90vh]"
            >
              {/* Modal window header */}
              <div className="flex items-center justify-between px-5 py-3.5 border-b border-[var(--line)] bg-[var(--paper-2)] select-none">
                <div className="flex items-center gap-2">
                  <button
                    type="button"
                    onClick={() => setLightboxOpen(false)}
                    className="size-3 rounded-full bg-[#FF5F57] hover:opacity-80 transition-opacity cursor-pointer"
                    title="Close"
                  />
                  <span className="size-3 rounded-full bg-[#FFBD2E]" />
                  <span className="size-3 rounded-full bg-[#28CA42]" />
                  <span className="ml-3 font-mono text-xs font-semibold tracking-wider text-[var(--ink)]">
                    {project.title} — {project.subtitle}
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="font-mono text-[11px] text-[var(--muted-2)] hidden sm:inline">
                    {project.category}
                  </span>
                  <button
                    type="button"
                    onClick={() => setLightboxOpen(false)}
                    className="rounded-full px-3 py-1 text-[var(--muted-2)] hover:text-[var(--ink)] hover:bg-black/5 font-mono text-xs transition-colors cursor-pointer border border-[var(--line)]"
                  >
                    CLOSE (ESC)
                  </button>
                </div>
              </div>

              {/* Modal image display */}
              <div className="relative w-full flex-1 overflow-auto bg-[#0d0e10] p-3 md:p-6 flex items-center justify-center">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={project.image}
                  alt={`${project.title} Full Preview`}
                  className="w-full h-auto max-h-[76vh] object-contain rounded-lg shadow-2xl"
                />
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
