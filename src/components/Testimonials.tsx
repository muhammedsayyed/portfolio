"use client"
import { useEffect, useRef } from "react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

export default function Testimonials() {
  const ref = useRef<HTMLElement>(null)
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)
    const ctx = gsap.context(() => {
      gsap.from("[data-test-card]", {
        y: 36,
        opacity: 0,
        duration: 0.8,
        stagger: 0.1,
        ease: "power3.out",
        scrollTrigger: { trigger: ref.current, start: "top 78%" },
      })
    }, ref)
    return () => ctx.revert()
  }, [])

  return (
    <section ref={ref} className="relative bg-[var(--ink)] text-white overflow-hidden">
      <div className="pointer-events-none absolute inset-0 opacity-[0.05]" style={{ backgroundImage: `linear-gradient(white 1px, transparent 1px), linear-gradient(90deg, white 1px, transparent 1px)`, backgroundSize: "72px 72px" }} />
      <div className="relative mx-auto max-w-[1600px] px-6 md:px-10 py-16 md:py-20">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div>
            <div className="font-mono text-[11px] tracking-[0.28em] text-white/50">04 — COLLABORATION</div>
            <h2 className="mt-3 font-[var(--font-display)] text-[36px] md:text-[54px] leading-[0.9] tracking-[-0.03em]">
              Learning in public,
              <br />
              <span className="italic font-light text-white/50">building with intent.</span>
            </h2>
          </div>
          <div className="font-mono text-xs leading-5 text-white/60 max-w-[48ch]">
            Currently focused on shipping real projects and deepening backend skills at Route Academy. Open to collaboration with teams who value clean code and thoughtful design.
          </div>
        </div>

        <div className="mt-10 grid md:grid-cols-3 gap-6 items-start">
          <div
            data-test-card
            className="relative rounded-[24px] p-7 md:p-8 border bg-white text-[var(--ink)] border-white md:translate-y-0 hover:shadow-xl transition-shadow"
          >
            <div className="font-mono text-[10px] tracking-[0.18em] opacity-60">01 — EDUCATION</div>
            <div className="mt-4 font-[var(--font-display)] text-[22px] leading-[1.2] tracking-tight text-[var(--ink)]">BIS — Business Information Systems</div>
            <div className="mt-4 font-mono text-xs leading-5 text-[var(--muted-2)]">Higher Institute for Advanced Studies — MIS. 09/2022 – 06/2026, Giza, Egypt. Focus on information systems, business technology and software applications.</div>
            <div className="mt-6 flex items-center gap-3 border-t border-dashed pt-4 border-current/15">
              <span className="size-9 rounded-full grid place-items-center font-mono text-xs bg-[var(--ink)] text-white">E</span>
              <span className="font-mono text-xs tracking-wide">Higher Institute — Giza</span>
            </div>
          </div>
          <div
            data-test-card
            className="relative rounded-[24px] p-7 md:p-8 border bg-white/[0.06] backdrop-blur border-white/10 text-white md:translate-y-8 hover:shadow-xl transition-shadow"
          >
            <div className="font-mono text-[10px] tracking-[0.18em] opacity-60">02 — TRAINING</div>
            <div className="mt-4 font-[var(--font-display)] text-[22px] leading-[1.2] tracking-tight text-white">Route Academy — Front-End + Backend</div>
            <div className="mt-4 font-mono text-xs leading-5 text-white/60">6-month Front-End Development (09/2025–03/2026, Dokki) + currently training Backend (Node, Express, MongoDB, REST APIs). Certificate of Completion.</div>
            <div className="mt-6 flex items-center gap-3 border-t border-dashed pt-4 border-current/15">
              <span className="size-9 rounded-full grid place-items-center font-mono text-xs bg-white text-black">R</span>
              <span className="font-mono text-xs tracking-wide">Route Academy — Dokki</span>
            </div>
          </div>
          <div
            data-test-card
            className="relative rounded-[24px] p-7 md:p-8 border bg-white/[0.06] backdrop-blur border-white/10 text-white md:translate-y-0 hover:shadow-xl transition-shadow"
          >
            <div className="font-mono text-[10px] tracking-[0.18em] opacity-60">03 — FOCUS</div>
            <div className="mt-4 font-[var(--font-display)] text-[22px] leading-[1.2] tracking-tight text-white">Clean code, thoughtful design</div>
            <div className="mt-4 font-mono text-xs leading-5 text-white/60">Passionate about responsive, user-friendly interfaces, continuous learning and translating Figma into functional React/Next.js experiences.</div>
            <div className="mt-6 flex items-center gap-3 border-t border-dashed pt-4 border-current/15">
              <span className="size-9 rounded-full grid place-items-center font-mono text-xs bg-white text-black">F</span>
              <span className="font-mono text-xs tracking-wide">Giza, Egypt — Available</span>
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-wrap gap-3 font-mono text-[11px] tracking-widest">
          <span className="rounded-full border border-white/15 bg-white/5 px-4 py-2 text-white/70">REAL EDUCATION & TRAINING</span>
          <span className="rounded-full bg-white text-black px-4 py-2">NO FICTIONAL CLIENTS</span>
          <span className="rounded-full border border-white/15 px-4 py-2 text-white/60">GIZA — EGYPT</span>
        </div>
      </div>
    </section>
  )
}
