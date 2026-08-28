"use client"
import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { skills, principles } from "@/data/skills"

export default function Skills() {
  const [activeIdx, setActiveIdx] = useState(0)
  const active = skills[activeIdx]

  return (
    <section id="stack" className="relative bg-[var(--ink)] text-[var(--paper)] overflow-hidden">
      <div className="absolute top-0 inset-x-0 h-px bg-white/10" />
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.12) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.12) 1px, transparent 1px)`,
          backgroundSize: "80px 80px",
        }}
      />

      <div className="relative mx-auto max-w-[1600px] px-6 md:px-10 py-16 md:py-24">
        <div className="flex flex-wrap items-start justify-between gap-6">
          <div>
            <div className="inline-flex items-center gap-2 font-mono text-[11px] tracking-[0.28em] text-white/60">
              <span className="size-1.5 bg-[var(--accent)] rounded-full" /> 02 — STACK & PRINCIPLES
            </div>
            <h2 className="mt-4 font-[var(--font-display)] text-[46px] md:text-[72px] leading-[0.85] tracking-[-0.04em]">
              Tools I <span className="italic font-light text-white/60">think</span> in.
            </h2>
            <p className="mt-4 max-w-[60ch] font-mono text-[13px] leading-6 text-white/60">
              No logo grid. Each technology is a material with trade-offs. Hover to read how I actually use it — and what I reach for when it&apos;s not the answer.
            </p>
          </div>

          <div className="hidden lg:flex items-center gap-2 rounded-full border border-white/15 bg-white/[0.06] backdrop-blur px-4 py-2 font-mono text-[11px] tracking-[0.18em] text-white/70">
            <span className="size-2 rounded-full bg-emerald-400 animate-pulse" /> HOVER / TAP TO EXPLORE
            <span className="mx-2 h-4 w-px bg-white/15" />
            <span className="text-white">
              {String(activeIdx + 1).padStart(2, "0")} / {String(skills.length).padStart(2, "0")}
            </span>
          </div>
        </div>

        <div className="mt-10 grid grid-cols-12 gap-6 md:gap-8 items-start">
          <div className="col-span-12 lg:col-span-7">
            <div className="divide-y divide-white/10 rounded-[28px] overflow-hidden border border-white/10 bg-white/[0.04] backdrop-blur">
              {skills.map((s, i) => {
                const isActive = i === activeIdx
                return (
                  <button
                    key={s.name}
                    onMouseEnter={() => setActiveIdx(i)}
                    onFocus={() => setActiveIdx(i)}
                    onClick={() => setActiveIdx(i)}
                    className={`group w-full text-left flex items-center gap-4 md:gap-6 px-5 md:px-8 py-5 md:py-6 transition-all text-white ${
                      isActive ? "bg-white text-[var(--ink)]" : "hover:bg-white/[0.06] hover:pl-9"
                    }`}
                  >
                    <span className={`font-mono text-[11px] tracking-[0.2em] min-w-[36px] ${isActive ? "text-[var(--muted-2)]" : "text-white/40"}`}>
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span
                      className={`font-[var(--font-display)] text-[26px] md:text-[36px] leading-none tracking-[-0.03em] flex-1 transition-transform ${isActive ? "translate-x-1" : "group-hover:translate-x-1"}`}
                    >
                      {s.name}
                      {s.highlight && <span className="ml-2 inline-block size-2 rounded-full align-super bg-[var(--accent)]" />}
                    </span>
                    <span className={`hidden md:inline font-mono text-[11px] tracking-[0.18em] max-w-[22ch] text-right leading-4 ${isActive ? "text-[var(--muted-2)]" : "text-white/50"}`}>
                      {s.category}
                    </span>
                    <span
                      className={`size-8 rounded-full grid place-items-center border transition ${isActive ? "bg-[var(--ink)] text-white border-[var(--ink)] rotate-45" : "border-white/15 text-white/60 group-hover:border-white/30 group-hover:text-white"}`}
                    >
                      ↗
                    </span>
                  </button>
                )
              })}
            </div>

            <div className="mt-6 grid grid-cols-2 md:grid-cols-4 gap-3">
              {principles.map((p) => (
                <div key={p.k} className="rounded-2xl border border-white/10 bg-white/[0.04] px-4 py-4 hover:bg-white/[0.07] hover:border-white/15 transition-colors">
                  <div className="font-mono text-[11px] tracking-[0.18em] text-white/40">{p.k}</div>
                  <div className="mt-2 font-mono text-xs leading-5 text-white/80">{p.v}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="col-span-12 lg:col-span-5 lg:sticky lg:top-28">
            <div className="rounded-[28px] overflow-hidden border border-white/10 bg-[var(--paper)] text-[var(--ink)] shadow-xl">
              <div className="p-7 md:p-8">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <div className="font-mono text-[11px] tracking-[0.24em] text-[var(--muted)]">{active.category.toUpperCase()}</div>
                    <AnimatePresence mode="wait">
                      <motion.div
                        key={active.name}
                        initial={{ y: 12, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        exit={{ y: -8, opacity: 0 }}
                        transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                        className="font-[var(--font-display)] text-[42px] md:text-[52px] leading-none tracking-[-0.03em] mt-2"
                      >
                        {active.name}
                      </motion.div>
                    </AnimatePresence>
                  </div>
                  <span className="hidden sm:inline-flex rounded-full bg-[var(--ink)] text-white px-3 py-1.5 font-mono text-[10px] tracking-[0.18em]">FOCUS</span>
                </div>

                <AnimatePresence mode="wait">
                  <motion.div
                    key={active.name + "-desc"}
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -6 }}
                    transition={{ duration: 0.3, ease: "easeOut" }}
                  >
                    <p className="mt-4 font-[var(--font-display)] text-[18px] leading-[1.4] tracking-tight">{active.description}</p>
                    <div className="mt-4 inline-flex rounded-full bg-[var(--ink)] text-white px-3 py-1.5 font-mono text-xs tracking-wide">{active.level}</div>
                    <div className="mt-3 font-mono text-xs tracking-[0.16em] text-[var(--muted)]">{active.meta}</div>
                  </motion.div>
                </AnimatePresence>

                <div className="mt-6 h-px bg-[var(--line)]" />
                <div className="mt-6 grid grid-cols-3 gap-3">
                  <div className="rounded-2xl bg-[var(--paper-2)] border border-[var(--line)] p-4">
                    <div className="font-mono text-[10px] tracking-[0.18em] text-[var(--muted)]">WHEN I USE IT</div>
                    <div className="mt-2 font-mono text-xs leading-5 text-[var(--ink-soft)]">Default choice for production UI.</div>
                  </div>
                  <div className="rounded-2xl bg-white border border-[var(--line)] p-4">
                    <div className="font-mono text-[10px] tracking-[0.18em] text-[var(--muted)]">WHEN I DON&apos;T</div>
                    <div className="mt-2 font-mono text-xs leading-5 text-[var(--ink-soft)]">When a lighter tool wins on constraints.</div>
                  </div>
                  <div className="rounded-2xl bg-[var(--ink)] text-white p-4">
                    <div className="font-mono text-[10px] tracking-[0.18em] opacity-60">TRADE-OFF</div>
                    <div className="mt-2 font-mono text-xs leading-5 opacity-80">Craft vs velocity — I choose intentionally.</div>
                  </div>
                </div>
              </div>
              <div className="bg-[var(--paper-2)] border-t border-[var(--line)] px-7 md:px-8 py-4 flex items-center justify-between font-mono text-xs tracking-widest text-[var(--muted-2)]">
                <span>SYSTEM THINKING</span>
                <span className="hidden sm:inline">TYPE-SAFE • A11Y • PERFORMANT</span>
                <span className="size-2 rounded-full bg-[var(--accent)]" />
              </div>
            </div>
            <div className="mt-4 rounded-[20px] border border-white/10 bg-white/[0.06] p-4 flex items-center gap-3 font-mono text-xs text-white/70">
              <span className="size-8 rounded-full bg-white text-[var(--ink)] grid place-items-center">◎</span>
              <span>
                <span className="text-white">Tip:</span> On desktop hover the list. On mobile tap.
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
