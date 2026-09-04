"use client"
import { useEffect, useState } from "react"
import { motion, AnimatePresence } from "framer-motion"

const links = [
  { label: "Index", href: "#hero", id: "hero" },
  { label: "About", href: "#about", id: "about" },
  { label: "Stack", href: "#stack", id: "stack" },
  { label: "Work", href: "#work", id: "work" },
  { label: "Contact", href: "#contact", id: "contact" },
]

export default function Navigation() {
  const [active, setActive] = useState("hero")
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 20)
      const h = document.documentElement.scrollHeight - window.innerHeight
      setProgress(h > 0 ? window.scrollY / h : 0)
      // active detection
      for (const l of [...links].reverse()) {
        const el = document.getElementById(l.id)
        if (el) {
          const top = el.getBoundingClientRect().top
          if (top <= 120) {
            setActive(l.id)
            break
          }
        }
      }
    }
    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  // lock scroll when menu open
  useEffect(() => {
    if (open) document.body.style.overflow = "hidden"
    else document.body.style.overflow = ""
    return () => { document.body.style.overflow = "" }
  }, [open])

  return (
    <>
      {/* progress */}
      <div className="fixed top-0 left-0 right-0 h-[2px] z-[70] origin-left bg-[var(--ink)] pointer-events-none" style={{ transform: `scaleX(${progress})` }} />

      <header
        className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
          scrolled || open ? "py-3" : "py-6"
        }`}
      >
        <div className={`mx-auto max-w-[1600px] px-6 md:px-10 transition-all duration-500 ${scrolled ? "md:px-8" : ""}`}>
          <nav
            className={`flex items-center justify-between gap-6 rounded-full border px-4 py-3 md:px-6 transition-all duration-500 ${
              scrolled || open
                ? "bg-[var(--paper)]/90 backdrop-blur-xl border-[var(--line)] shadow-[0_8px_40px_rgba(0,0,0,0.08)]"
                : "bg-transparent border-transparent"
            }`}
            aria-label="Primary"
          >
            <a href="#hero" className="flex items-center gap-3 group">
              <span className="size-9 rounded-full bg-[var(--ink)] text-[var(--paper)] grid place-items-center font-mono text-[11px] tracking-widest">MS</span>
              <span className="hidden sm:flex flex-col leading-none">
                <span className="font-mono text-[11px] tracking-[0.24em] text-[var(--muted-2)] group-hover:text-[var(--ink)] transition-colors">MUHAMMED SAYED</span>
                <span className="font-[var(--font-display)] text-[17px] leading-none -mt-0.5">Giza — 2026</span>
              </span>
            </a>

            <div className="hidden lg:flex items-center gap-1.5">
              {links.map((l) => (
                <a
                  key={l.id}
                  href={l.href}
                  onClick={(e) => {
                    e.preventDefault()
                    document.querySelector(l.href)?.scrollIntoView({ behavior: "smooth" })
                    setActive(l.id)
                  }}
                  className={`relative px-4 py-2 rounded-full font-mono text-[11px] tracking-[0.18em] transition-colors ${
                    active === l.id ? "text-[var(--paper)]" : "text-[var(--muted-2)] hover:text-[var(--ink)]"
                  }`}
                >
                  {active === l.id && (
                    <motion.span layoutId="nav-pill" className="absolute inset-0 rounded-full bg-[var(--ink)]" transition={{ type: "spring", stiffness: 400, damping: 30 }} />
                  )}
                  <span className="relative">{l.label}</span>
                </a>
              ))}
            </div>

            <div className="flex items-center gap-2">
              <span className="hidden md:flex items-center gap-2 font-mono text-[10px] tracking-[0.2em] text-[var(--muted)] pr-2">
                <span className="size-2 rounded-full bg-emerald-500 animate-pulse" /> AVAILABLE FOR WORK
              </span>
              <a
                href="#contact"
                onClick={(e) => {
                  e.preventDefault()
                  document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" })
                }}
                className="hidden sm:inline-flex items-center gap-2 rounded-full bg-[var(--ink)] text-[var(--paper)] px-6 py-2.5 font-mono text-xs tracking-[0.14em] hover:bg-black transition-colors"
              >
                LET&apos;S TALK <span aria-hidden>↗</span>
              </a>

              <button
                aria-label={open ? "Close menu" : "Open menu"}
                aria-expanded={open}
                onClick={() => setOpen((v) => !v)}
                className="lg:hidden size-11 rounded-full bg-[var(--ink)] text-white grid place-items-center"
              >
                <span className="relative w-5 h-4 block">
                  <span className={`absolute left-0 w-5 h-0.5 bg-white transition-all ${open ? "top-2 rotate-45" : "top-0"}`} />
                  <span className={`absolute left-0 top-2 w-5 h-0.5 bg-white transition-opacity ${open ? "opacity-0" : "opacity-100"}`} />
                  <span className={`absolute left-0 w-5 h-0.5 bg-white transition-all ${open ? "top-2 -rotate-45" : "top-4"}`} />
                </span>
              </button>
            </div>
          </nav>
        </div>
      </header>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-40 bg-[var(--paper)] lg:hidden"
          >
            <div className="h-full flex flex-col pt-28 pb-10 px-6">
              <div className="flex-1 flex flex-col justify-center gap-2">
                {links.map((l, i) => (
                  <motion.a
                    key={l.id}
                    href={l.href}
                    initial={{ y: 30, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.06 * i, ease: [0.16, 1, 0.3, 1] }}
                    onClick={(e) => {
                      e.preventDefault()
                      setOpen(false)
                      setTimeout(() => document.querySelector(l.href)?.scrollIntoView({ behavior: "smooth" }), 200)
                    }}
                    className="group flex items-baseline gap-4 py-3 border-b border-[var(--line)]"
                  >
                    <span className="font-mono text-xs text-[var(--muted)]">0{i + 1}</span>
                    <span className="font-[var(--font-display)] text-[48px] leading-none tracking-tight group-hover:pl-3 transition-all duration-500">{l.label}</span>
                    <span className="ml-auto font-mono text-xs opacity-40 group-hover:opacity-100 transition">→</span>
                  </motion.a>
                ))}
              </div>

              <div className="pt-8 flex flex-col gap-4 font-mono text-xs tracking-widest text-[var(--muted-2)]">
                <a href="mailto:muhammmmed.sayed@gmail.com" className="text-[var(--ink)] text-lg tracking-normal font-sans">muhammmmed.sayed@gmail.com</a>
                <div className="flex gap-4">
                  <a href="https://github.com/muhammedsayyed" target="_blank" className="underline decoration-[var(--line-strong)] underline-offset-4 hover:text-[var(--ink)]">GITHUB</a>
                  <a href="https://linkedin.com/in/muhammed-sayed-420775405" target="_blank" className="underline decoration-[var(--line-strong)] underline-offset-4 hover:text-[var(--ink)]">LINKEDIN</a>
                  <a href="tel:01012444365" className="underline decoration-[var(--line-strong)] underline-offset-4 hover:text-[var(--ink)]">01012444365</a>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
