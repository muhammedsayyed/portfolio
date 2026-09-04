"use client"
import { useState } from "react"
import { siteConfig } from "@/data/site"

export default function Contact() {
  const [copied, setCopied] = useState(false)
  const email = siteConfig.email

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(email)
      setCopied(true)
      setTimeout(() => setCopied(false), 1800)
    } catch {}
  }

  return (
    <section id="contact" className="relative bg-[var(--paper)] border-t border-[var(--line)] overflow-hidden">
      <div className="mx-auto max-w-[1600px] px-6 md:px-10 py-16 md:py-24">
        <div className="relative">
          <div className="font-mono text-[11px] tracking-[0.28em] text-[var(--muted)] flex items-center gap-2">
            <span className="size-1.5 bg-[var(--accent)] rounded-full" /> 05 — CONTACT
          </div>
          <h2 className="mt-6 font-[var(--font-display)] leading-[0.82] tracking-[-0.06em]">
            <span className="block text-[13vw] md:text-[11vw] xl:text-[160px]">LET&apos;S</span>
            <span className="block text-[13vw] md:text-[11vw] xl:text-[160px] flex items-center gap-4">
              BUILD
              <span className="hidden md:inline-flex items-center gap-2 rounded-full border border-[var(--ink)] px-6 py-3 font-mono text-xs tracking-[0.2em] translate-y-2">
                <span className="size-2 bg-emerald-500 rounded-full animate-pulse" /> AVAILABLE NOW
              </span>
              <span className="text-transparent hidden md:inline" style={{ WebkitTextStroke: "1.4px var(--ink)" }}>
                SOMETHING
              </span>
            </span>
            <span className="block text-[13vw] md:text-[11vw] xl:text-[160px] text-transparent md:hidden" style={{ WebkitTextStroke: "1.2px var(--ink)" }}>
              SOMETHING
            </span>
            <span className="block font-light italic text-[11vw] md:text-[8vw] xl:text-[120px] leading-none -mt-2 md:-mt-4">precise.</span>
          </h2>
          <div className="absolute right-0 top-10 hidden xl:block">
            <div className="rounded-full border border-[var(--line-strong)] bg-white px-4 py-2 font-mono text-[11px] tracking-widest">GIZA, EGYPT — THANK YOU</div>
          </div>
        </div>

        <div className="mt-10 grid grid-cols-12 gap-6 md:gap-8">
          <div className="col-span-12 lg:col-span-7">
            <div className="rounded-[28px] border border-[var(--ink)] bg-[var(--ink)] text-white p-7 md:p-9 overflow-hidden relative">
              <div className="pointer-events-none absolute inset-0 opacity-[0.06]" style={{ backgroundImage: `linear-gradient(white 1px, transparent 1px), linear-gradient(90deg, white 1px, transparent 1px)`, backgroundSize: "36px 36px" }} />
              <div className="relative">
                <div className="font-mono text-[11px] tracking-[0.24em] opacity-60">START A CONVERSATION</div>
                <div className="mt-4 flex flex-wrap items-center gap-3">
                  <a href={`mailto:${email}`} className="font-[var(--font-display)] text-[22px] md:text-[32px] leading-none tracking-tight underline decoration-white/20 underline-offset-8 hover:decoration-white transition break-all">
                    {email}
                  </a>
                  <button onClick={copy} className="rounded-full bg-white text-black px-4 py-2 font-mono text-xs tracking-widest hover:bg-[var(--paper-2)] transition">
                    {copied ? "COPIED ✓" : "COPY EMAIL"}
                  </button>
                </div>
                <div className="mt-3 flex flex-wrap gap-3 font-mono text-xs tracking-wide opacity-70">
                  <a href="tel:01012444365" className="underline underline-offset-4 hover:text-white">01012444365</a>
                  <span>•</span>
                  <span>Giza, Egypt</span>
                </div>
                <p className="mt-4 font-mono text-xs leading-6 opacity-60 max-w-[60ch]">
                  Reach me via email or phone. All contact links are centralized in <span className="bg-white text-black px-1 rounded">src/data/site.ts</span> for easy updates.
                </p>
                <div className="mt-8 grid sm:grid-cols-3 gap-3">
                  {[
                    { k: "GITHUB", v: "muhammedsayyed", href: siteConfig.github },
                    { k: "LINKEDIN", v: "Muhammed Sayed", href: siteConfig.linkedin },
                    { k: "PORTFOLIO", v: "Vercel — Live", href: siteConfig.portfolio },
                  ].map((s) => (
                    <a key={s.k} href={s.href} target="_blank" className="rounded-2xl border border-white/15 bg-white/5 backdrop-blur p-4 hover:bg-white hover:text-black transition-colors group">
                      <div className="font-mono text-[10px] tracking-[0.2em] opacity-60 group-hover:opacity-60">{s.k}</div>
                      <div className="mt-1 font-mono text-xs tracking-wide break-all">{s.v}</div>
                      <div className="mt-2 text-xs opacity-60 group-hover:opacity-80">↗ Open</div>
                    </a>
                  ))}
                </div>
                <div className="mt-8 flex flex-wrap gap-2 font-mono text-[11px] tracking-widest">
                  <span className="rounded-full bg-white text-black px-3 py-1">RESPONSE — WITHIN 24H</span>
                  <span className="rounded-full border border-white/20 px-3 py-1 opacity-70">GIZA • REMOTE</span>
                </div>
              </div>
            </div>
          </div>

          <div className="col-span-12 lg:col-span-5 flex flex-col gap-6">
            <div className="rounded-[28px] border border-[var(--line)] bg-white p-7 md:p-8 hover:border-[var(--line-strong)] hover:shadow-sm transition-all">
              <div className="font-mono text-[11px] tracking-[0.24em] text-[var(--muted)]">WHAT I CAN HELP WITH</div>
              <ul className="mt-5 space-y-3 font-mono text-sm leading-6 text-[var(--ink-soft)]">
                <li className="flex gap-3">
                  <span className="mt-1 size-1.5 rounded-full bg-[var(--accent)] shrink-0" /> Modern, responsive web interfaces
                </li>
                <li className="flex gap-3">
                  <span className="mt-1 size-1.5 rounded-full bg-[var(--accent)] shrink-0" /> React, Next.js & TypeScript development
                </li>
                <li className="flex gap-3">
                  <span className="mt-1 size-1.5 rounded-full bg-[var(--accent)] shrink-0" /> Figma to code — UI/UX implementation
                </li>
                <li className="flex gap-3">
                  <span className="mt-1 size-1.5 rounded-full bg-[var(--accent)] shrink-0" /> REST APIs & backend integration (training)
                </li>
              </ul>
              <div className="mt-6 h-px bg-[var(--line)]" />
              <div className="mt-6 flex items-center justify-between font-mono text-xs tracking-widest text-[var(--muted)]">
                <span>GIZA, EGYPT — REMOTE</span>
                <span className="hidden sm:inline">2026</span>
              </div>
            </div>
            <div className="rounded-[28px] border border-[var(--line)] bg-[var(--paper-2)] p-7 md:p-8">
              <div className="font-mono text-[11px] tracking-[0.24em] text-[var(--muted)]">QUICK PING</div>
              <form
                onSubmit={(e) => {
                  e.preventDefault()
                  const fd = new FormData(e.currentTarget as HTMLFormElement)
                  const msg = fd.get("message") as string
                  window.location.href = `mailto:${email}?subject=Portfolio%20Inquiry&body=${encodeURIComponent(msg || "")}`
                }}
                className="mt-4"
              >
                <label htmlFor="msg" className="font-mono text-xs tracking-wide text-[var(--muted-2)]">Message</label>
                <textarea
                  id="msg"
                  name="message"
                  rows={3}
                  placeholder="Hey Muhammed — I saw your portfolio..."
                  className="mt-2 w-full rounded-2xl border border-[var(--line)] bg-white px-4 py-3 font-mono text-sm outline-none focus:border-[var(--ink)] focus:ring-2 focus:ring-[var(--ink)]/10 resize-none"
                />
                <button type="submit" className="mt-3 w-full rounded-full bg-[var(--ink)] text-white py-3 font-mono text-xs tracking-[0.18em] hover:bg-black transition">
                  OPEN IN EMAIL →
                </button>
                <p className="mt-2 font-mono text-[11px] leading-4 text-[var(--muted)]">Uses your mail client — no backend required.</p>
              </form>
            </div>
          </div>
        </div>

        <footer className="mt-12 pt-6 border-t border-[var(--line)] flex flex-col md:flex-row gap-4 items-center justify-between font-mono text-[11px] tracking-[0.18em] text-[var(--muted)]">
          <span>© {new Date().getFullYear()} — Muhammed Sayed Ahmed Abdelaziz. Junior Front-End Developer, Giza, Egypt.</span>
          <span className="flex items-center gap-3">
            <a href="#hero" onClick={(e) => { e.preventDefault(); document.querySelector("#hero")?.scrollIntoView({ behavior: "smooth" }) }} className="underline decoration-[var(--line-strong)] underline-offset-4 hover:text-[var(--ink)]">
              BACK TO TOP ↑
            </a>
            <span className="hidden sm:inline">•</span>
            <a href={siteConfig.github} target="_blank" className="underline decoration-[var(--line-strong)] underline-offset-4 hover:text-[var(--ink)]">github.com/muhammedsayyed</a>
          </span>
        </footer>
      </div>
    </section>
  )
}
