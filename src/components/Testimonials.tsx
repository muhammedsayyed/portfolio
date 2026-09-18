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
    <section ref={ref} id="process" className="relative bg-[var(--ink)] text-white overflow-hidden">
      <div className="pointer-events-none absolute inset-0 opacity-[0.05]" style={{ backgroundImage: `linear-gradient(white 1px, transparent 1px), linear-gradient(90deg, white 1px, transparent 1px)`, backgroundSize: "72px 72px" }} />
      <div className="relative mx-auto max-w-[1600px] px-6 md:px-10 py-16 md:py-20">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div>
            <div className="font-mono text-[11px] tracking-[0.28em] text-white/50">04 — PROCESS</div>
            <h2 className="mt-3 font-[var(--font-display)] text-[36px] md:text-[54px] leading-[0.9] tracking-[-0.03em]">
              How AXIOM
              <br />
              <span className="italic font-light text-white/50">ships products.</span>
            </h2>
          </div>
          <div className="font-mono text-xs leading-5 text-white/60 max-w-[48ch]">
            A clear, product-minded process — from discovery to launch. We work as one team: design and engineering together, with continuous iteration and measurable outcomes.
          </div>
        </div>

        <div className="mt-10 grid md:grid-cols-3 gap-6 items-start">
          <div
            data-test-card
            className="relative rounded-[24px] p-7 md:p-8 border bg-white text-[var(--ink)] border-white md:translate-y-0 hover:shadow-xl transition-shadow"
          >
            <div className="font-mono text-[10px] tracking-[0.18em] opacity-60">01 — DISCOVER</div>
            <div className="mt-4 font-[var(--font-display)] text-[22px] leading-[1.2] tracking-tight text-[var(--ink)]">Discover & Define</div>
            <div className="mt-4 font-mono text-xs leading-5 text-[var(--muted-2)]">We align on goals, users and constraints. Workshops, audits and journey mapping to define the right problem — before writing a line of code.</div>
            <div className="mt-6 flex items-center gap-3 border-t border-dashed pt-4 border-current/15">
              <span className="size-9 rounded-full grid place-items-center font-mono text-xs bg-[var(--ink)] text-white">01</span>
              <span className="font-mono text-xs tracking-wide">Goals • Users • Constraints</span>
            </div>
          </div>
          <div
            data-test-card
            className="relative rounded-[24px] p-7 md:p-8 border bg-white/[0.06] backdrop-blur border-white/10 text-white md:translate-y-8 hover:shadow-xl transition-shadow"
          >
            <div className="font-mono text-[10px] tracking-[0.18em] opacity-60">02 — DESIGN & BUILD</div>
            <div className="mt-4 font-[var(--font-display)] text-[22px] leading-[1.2] tracking-tight text-white">Design & Build</div>
            <div className="mt-4 font-mono text-xs leading-5 text-white/60">Figma to design system to React/Next.js. Prototyping in code, API design with Node/Python, databases and integrations — real data, not placeholders.</div>
            <div className="mt-6 flex items-center gap-3 border-t border-dashed pt-4 border-current/15">
              <span className="size-9 rounded-full grid place-items-center font-mono text-xs bg-white text-black">02</span>
              <span className="font-mono text-xs tracking-wide">System • Code • API</span>
            </div>
          </div>
          <div
            data-test-card
            className="relative rounded-[24px] p-7 md:p-8 border bg-white/[0.06] backdrop-blur border-white/10 text-white md:translate-y-0 hover:shadow-xl transition-shadow"
          >
            <div className="font-mono text-[10px] tracking-[0.18em] opacity-60">03 — SHIP & SCALE</div>
            <div className="mt-4 font-[var(--font-display)] text-[22px] leading-[1.2] tracking-tight text-white">Ship & Scale</div>
            <div className="mt-4 font-mono text-xs leading-5 text-white/60">Launch, measure and iterate. Performance, accessibility and analytics built in — with handover, docs and continuous improvement.</div>
            <div className="mt-6 flex items-center gap-3 border-t border-dashed pt-4 border-current/15">
              <span className="size-9 rounded-full grid place-items-center font-mono text-xs bg-[var(--accent)] text-white">03</span>
              <span className="font-mono text-xs tracking-wide">Launch • Measure • Iterate</span>
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-wrap gap-3 font-mono text-[11px] tracking-widest">
          <span className="rounded-full border border-white/15 bg-white/5 px-4 py-2 text-white/70">PRODUCT THINKING</span>
          <span className="rounded-full bg-white text-black px-4 py-2">DESIGN + ENGINEERING — ONE TEAM</span>
          <span className="rounded-full border border-white/15 px-4 py-2 text-white/60">CAIRO — REMOTE</span>
        </div>
      </div>
    </section>
  )
}
