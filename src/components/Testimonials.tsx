"use client"
import { useEffect, useRef } from "react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

const items = [
  {
    q: "Thinks like a designer, ships like an engineer. The handoff gap just disappeared.",
    a: "Product Lead — Placeholder",
    r: "Working with someone who prototypes motion in the browser changed our velocity.",
  },
  {
    q: "Obsessive about the details that users feel but can't name.",
    a: "Design Director — Placeholder",
    r: "Focus states, loading skeletons, empty states — all considered without being asked.",
  },
  {
    q: "Turned our component chaos into a system we actually want to use.",
    a: "Frontend Team — Placeholder",
    r: "Tokens, variants, docs. And it didn't slow us down — it sped us up.",
  },
]

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
              Built with teams
              <br />
              <span className="italic font-light text-white/50">who care about craft.</span>
            </h2>
          </div>
          <div className="font-mono text-xs leading-5 text-white/60 max-w-[48ch]">
            No invented testimonials. Placeholders below — replace with real quotes when you have them. Layout is designed for 3 staggered cards that still work with 1–6 items.
          </div>
        </div>

        <div className="mt-10 grid md:grid-cols-3 gap-6 items-start">
          {items.map((it, i) => (
            <div
              data-test-card
              key={i}
              className={`relative rounded-[24px] p-7 md:p-8 border ${i === 1 ? "bg-white text-[var(--ink)] border-white md:translate-y-8" : "bg-white/[0.06] backdrop-blur border-white/10 text-white md:translate-y-0"} hover:shadow-xl transition-shadow`}
              style={{ transform: `rotate(${i === 0 ? "-0.6deg" : i === 1 ? "0.7deg" : "-0.4deg"})` }}
            >
              <div className="font-mono text-[10px] tracking-[0.18em] opacity-60">0{i + 1} — PLACEHOLDER QUOTE</div>
              <div className={`mt-4 font-[var(--font-display)] text-[22px] leading-[1.2] tracking-tight ${i === 1 ? "text-[var(--ink)]" : "text-white"}`}>“{it.q}”</div>
              <div className={`mt-4 font-mono text-xs leading-5 ${i === 1 ? "text-[var(--muted-2)]" : "text-white/60"}`}>{it.r}</div>
              <div className="mt-6 flex items-center gap-3 border-t border-dashed pt-4 border-current/15">
                <span className={`size-9 rounded-full grid place-items-center font-mono text-xs ${i === 1 ? "bg-[var(--ink)] text-white" : "bg-white text-black"}`}>{String.fromCharCode(65 + i)}</span>
                <span className="font-mono text-xs tracking-wide">{it.a}</span>
              </div>
              <span className="absolute -top-3 -right-3 size-7 rounded-full bg-[var(--accent)] hidden md:grid place-items-center text-white text-xs">“</span>
            </div>
          ))}
        </div>

        <div className="mt-12 flex flex-wrap gap-3 font-mono text-[11px] tracking-widest">
          <span className="rounded-full border border-white/15 bg-white/5 px-4 py-2 text-white/70">EASILY REPLACEABLE</span>
          <span className="rounded-full bg-white text-black px-4 py-2">ADD REAL QUOTES LATER</span>
          <span className="rounded-full border border-white/15 px-4 py-2 text-white/60">NO FAKE CLIENTS INVENTED</span>
        </div>
      </div>
    </section>
  )
}
