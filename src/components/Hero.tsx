"use client"
import { useEffect, useRef, useState } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import gsap from "gsap"

export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null)
  const imageRef = useRef<HTMLDivElement>(null)
  const [mouse, setMouse] = useState({ x: 0, y: 0 })
  const [time, setTime] = useState("--:--")
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  })
  const yParallax = useTransform(scrollYProgress, [0, 1], ["0%", "16%"])
  const opacityHero = useTransform(scrollYProgress, [0, 0.6], [1, 0])

  useEffect(() => {
    const update = () => setTime(new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }))
    update()
    const id = setInterval(update, 60000)
    return () => clearInterval(id)
  }, [])

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: "expo.out" } })
      tl.from("[data-hero-line]", {
        yPercent: 115,
        duration: 1.1,
        stagger: 0.08,
        delay: 0.15,
      })
        .from("[data-hero-meta]", { opacity: 0, y: 16, duration: 0.7, stagger: 0.06 }, "-=0.7")
        .from("[data-hero-image]", { clipPath: "inset(0 100% 0 0)", duration: 1.15, ease: "expo.inOut" }, "-=0.85")
        .from("[data-hero-code]", { opacity: 0, x: -12, duration: 0.45, stagger: 0.055, ease: "power3.out" }, "-=0.6")
        .from("[data-hero-float]", { opacity: 0, y: 18, stagger: 0.08, duration: 0.6 }, "-=0.9")
    }, sectionRef)
    return () => ctx.revert()
  }, [])

  const onMove = (e: React.MouseEvent) => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return
    if (window.matchMedia("(pointer: coarse)").matches) return
    const rect = sectionRef.current?.getBoundingClientRect()
    if (!rect) return
    const x = (e.clientX - rect.left) / rect.width - 0.5
    const y = (e.clientY - rect.top) / rect.height - 0.5
    setMouse({ x, y })
  }

  return (
    <section
      ref={sectionRef}
      id="hero"
      onMouseMove={onMove}
      className="relative min-h-[100svh] overflow-hidden bg-[var(--paper)] flex flex-col"
    >
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.035]"
        style={{
          backgroundImage: `linear-gradient(var(--line-strong) 1px, transparent 1px), linear-gradient(90deg, var(--line-strong) 1px, transparent 1px)`,
          backgroundSize: "72px 72px",
        }}
      />
      <div className="pointer-events-none absolute -top-10 right-[-2vw] select-none hidden lg:block">
        <span className="font-[var(--font-display)] text-[42vw] leading-none tracking-tighter text-[var(--ink)]/[0.04]">AX</span>
      </div>

      <motion.div style={{ opacity: opacityHero }} className="flex-1 flex flex-col">
        <div className="relative z-10 mx-auto w-full max-w-[1600px] px-6 md:px-10 pt-28 md:pt-32 pb-6 flex flex-wrap gap-4 items-center justify-between text-[11px] font-mono tracking-[0.2em] text-[var(--muted-2)]">
          <div data-hero-meta className="flex items-center gap-3">
            <span className="hidden sm:inline-flex items-center gap-2">
              <span className="size-1.5 bg-[var(--accent)] rounded-full" /> AXIOM — SOFTWARE & DIGITAL PRODUCT STUDIO
            </span>
            <span className="inline-flex items-center gap-2 rounded-full border border-[var(--line)] bg-white px-3 py-1.5 text-[10px]">
              <span className="size-2 rounded-full bg-emerald-500 animate-pulse" /> AVAILABLE FOR NEW PROJECTS
            </span>
          </div>
          <div data-hero-meta className="flex items-center gap-6">
            <span className="hidden md:inline">STUDIO — CAIRO / REMOTE</span>
            <span className="hidden md:inline">
              TIME — <span className="text-[var(--ink)]" suppressHydrationWarning>{time}</span>
            </span>
            <span className="inline-flex gap-1.5">
              <span className="size-1.5 rounded-full bg-[var(--line-strong)]" />
              <span className="size-1.5 rounded-full bg-[var(--line-strong)]" />
              <span className="size-1.5 rounded-full bg-[var(--accent)]" />
            </span>
          </div>
        </div>

        <div className="relative z-10 mx-auto w-full max-w-[1600px] px-6 md:px-10 flex-1 grid grid-cols-12 gap-6 md:gap-8 items-end pb-10 md:pb-14">
          <div className="col-span-12 lg:col-span-7 flex flex-col">
            <div className="overflow-hidden">
              <div data-hero-line className="font-[var(--font-display)] text-[13vw] lg:text-[11vw] xl:text-[148px] leading-[0.82] tracking-[-0.05em]">
                BUILD<span className="font-light italic text-[var(--accent)]">—</span>
              </div>
            </div>
            <div className="overflow-hidden -mt-2 md:-mt-4">
              <div data-hero-line className="font-[var(--font-display)] text-[13vw] lg:text-[11vw] xl:text-[148px] leading-[0.82] tracking-[-0.05em] flex items-baseline gap-3">
                <span className="text-transparent" style={{ WebkitTextStroke: "1.2px var(--ink)" }}>
                  WHAT
                </span>
                <span className="font-mono text-[11px] md:text-xs tracking-[0.35em] leading-none self-center translate-y-1 hidden sm:inline-flex flex-col gap-1">
                  <span className="bg-[var(--ink)] text-[var(--paper)] px-2 py-1">SOFTWARE</span>
                  <span className="border border-[var(--line-strong)] px-2 py-1 bg-white tracking-[0.2em]">PRODUCTS</span>
                </span>
              </div>
            </div>
            <div className="overflow-hidden -mt-1">
              <div data-hero-line className="font-[var(--font-display)] text-[13vw] lg:text-[11vw] xl:text-[148px] leading-[0.82] tracking-[-0.05em]">
                MATTERS<span className="text-[var(--accent)]">.</span>
              </div>
            </div>

            <div className="mt-6 md:mt-10 grid grid-cols-12 gap-6 items-start">
              <div data-hero-meta className="col-span-12 md:col-span-7">
                <p className="font-[var(--font-display)] text-[22px] md:text-[26px] leading-[1.15] tracking-tight text-balance">
                  AXIOM designs and builds <span className="italic font-light">high-performance</span> websites, digital products and{" "}
                  <span className="underline decoration-[var(--accent)] decoration-2 underline-offset-4">custom software</span> for ambitious teams.
                </p>
                <p className="mt-4 font-mono text-xs leading-6 text-[var(--muted-2)] max-w-[52ch]">
                  A studio of designers and engineers — we combine product thinking, design systems and modern engineering to ship useful, precise and performant products. From e-commerce to APIs.
                </p>

                <div className="mt-7 flex flex-wrap gap-3">
                  <a
                    href="#contact"
                    onClick={(e) => {
                      e.preventDefault()
                      document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" })
                    }}
                    className="group inline-flex items-center gap-3 rounded-full bg-[var(--ink)] text-[var(--paper)] pl-7 pr-2 py-2 font-mono text-xs tracking-[0.16em] hover:bg-black transition-colors"
                  >
                    START A PROJECT
                    <span className="size-9 rounded-full bg-[var(--accent)] text-white grid place-items-center group-hover:rotate-45 transition-transform duration-300">→</span>
                  </a>
                  <a
                    href="#work"
                    onClick={(e) => {
                      e.preventDefault()
                      document.querySelector("#work")?.scrollIntoView({ behavior: "smooth" })
                    }}
                    className="inline-flex items-center gap-2 rounded-full border border-[var(--line-strong)] bg-white px-7 py-3 font-mono text-xs tracking-[0.16em] hover:border-[var(--ink)] transition-colors"
                  >
                    VIEW OUR WORK ↓
                  </a>
                </div>

                <div className="mt-8 flex flex-wrap gap-2 font-mono text-[11px] tracking-widest">
                  {["Web Development", "E-Commerce", "Custom Software", "Mobile Apps", "API & Backend", "Product Design"].map((t) => (
                    <span key={t} className="rounded-full border border-[var(--line)] bg-[var(--paper-2)] px-3 py-1 text-[var(--muted-2)]">
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              <div data-hero-meta className="hidden md:block col-span-5">
                <div className="border border-[var(--line)] rounded-2xl p-5 bg-white/85 backdrop-blur shadow-sm">
                  <div className="font-mono text-[10px] tracking-[0.22em] text-[var(--muted)] flex justify-between">
                    <span>SERVICES</span>
                    <span>2026</span>
                  </div>
                  <ul className="mt-4 space-y-2.5 font-mono text-xs tracking-wide">
                    <li className="flex justify-between border-b border-dashed border-[var(--line)] pb-2">
                      <span>Web Development</span>
                      <span className="text-[var(--muted)]">01</span>
                    </li>
                    <li className="flex justify-between border-b border-dashed border-[var(--line)] pb-2">
                      <span>E-Commerce</span>
                      <span className="text-[var(--muted)]">02</span>
                    </li>
                    <li className="flex justify-between border-b border-dashed border-[var(--line)] pb-2">
                      <span>Custom Software</span>
                      <span className="text-[var(--muted)]">03</span>
                    </li>
                    <li className="flex justify-between border-b border-dashed border-[var(--line)] pb-2">
                      <span>Digital Product Design</span>
                      <span className="text-[var(--muted)]">04</span>
                    </li>
                    <li className="flex justify-between border-b border-dashed border-[var(--line)] pb-2">
                      <span>Mobile Applications</span>
                      <span className="text-[var(--muted)]">05</span>
                    </li>
                    <li className="flex justify-between">
                      <span>API & Backend Systems</span>
                      <span className="text-[var(--muted)]">06</span>
                    </li>
                  </ul>
                  <div className="mt-5 flex items-center gap-2 font-mono text-[11px] tracking-widest text-[var(--muted-2)]">
                    <span className="h-px flex-1 bg-[var(--line)]" /> SCROLL TO EXPLORE <span className="h-px flex-1 bg-[var(--line)]" />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="col-span-12 lg:col-span-5 relative lg:h-[78vh] min-h-[520px] flex items-end lg:items-center">
            <motion.div
              ref={imageRef}
              data-hero-image
              style={{ y: yParallax as unknown as number }}
              className="relative w-full aspect-[4/4.8] lg:aspect-[4/5.2] overflow-hidden rounded-[32px] bg-[var(--paper-3)] border border-[var(--line)] shadow-[0_24px_64px_rgba(0,0,0,0.08)]"
            >
              <div
                className="absolute inset-0"
                style={{
                  transform: `translate3d(${mouse.x * 14}px, ${mouse.y * 10}px, 0) scale(1.06)`,
                  transition: "transform 0.6s cubic-bezier(0.16,1,0.3,1)",
                }}
              >
                {/* blueprint grid — same language as project cards */}
                <div
                  className="absolute inset-0 opacity-[0.4]"
                  style={{
                    backgroundImage: `linear-gradient(var(--line-strong) 1px, transparent 1px), linear-gradient(90deg, var(--line-strong) 1px, transparent 1px)`,
                    backgroundSize: "32px 32px",
                    maskImage: "radial-gradient(75% 75% at 50% 45%, black 30%, transparent 100%)",
                    WebkitMaskImage: "radial-gradient(75% 75% at 50% 45%, black 30%, transparent 100%)",
                  }}
                />
                {/* AXIOM system identity board — code-first studio intro */}
                <div className="absolute inset-0 flex items-center justify-center p-4 min-[400px]:p-5 pt-14 pb-24">
                  <div className="w-full max-w-[480px] overflow-hidden rounded-[20px] border border-[var(--line)] bg-white shadow-[0_24px_64px_rgba(0,0,0,0.08)]">
                    {/* board header */}
                    <div data-hero-code className="flex items-center justify-between gap-3 border-b border-[var(--line)] px-3 sm:px-4 py-2.5">
                      <span className="font-mono text-[10px] tracking-[0.24em] text-[var(--ink)]">AXIOM <span className="text-[var(--muted)]">/ SYSTEM.IDENTITY</span></span>
                      <span className="flex items-center gap-1.5 font-mono text-[10px] tracking-[0.18em] text-[var(--muted-2)]">
                        <span className="size-1.5 rounded-full bg-[var(--accent)] animate-pulse" /> LIVE
                      </span>
                    </div>
                    {/* code body */}
                    <div className="px-3 sm:px-4 py-4 font-mono text-[11px] min-[400px]:text-xs sm:text-[13px] lg:text-sm leading-[1.8]">
                      <div data-hero-code className="flex gap-3">
                        <span className="w-5 shrink-0 select-none text-right text-[var(--muted)]/60">1</span>
                        <span className="min-w-0 flex-1 whitespace-pre-wrap break-all text-[var(--muted)]">{`// software development studio`}</span>
                      </div>
                      <div data-hero-code className="flex gap-3">
                        <span className="w-5 shrink-0 select-none text-right text-[var(--muted)]/60">2</span>
                        <span className="min-w-0 flex-1 whitespace-pre-wrap break-all"><span className="text-[var(--muted-2)]">const</span> <span className="font-semibold text-[var(--ink)]">studio</span> <span className="text-[var(--muted)]">= {"{"}</span></span>
                      </div>
                      <div data-hero-code className="flex gap-3">
                        <span className="w-5 shrink-0 select-none text-right text-[var(--muted)]/60">3</span>
                        <span className="min-w-0 flex-1 whitespace-pre-wrap break-all"><span className="font-semibold text-[var(--ink)]">  name</span><span className="text-[var(--muted)]">: </span><span className="text-[var(--muted)]">&quot;</span><span className="font-medium text-[var(--accent)]">AXIOM</span><span className="text-[var(--muted)]">&quot;,</span></span>
                      </div>
                      <div data-hero-code className="flex gap-3">
                        <span className="w-5 shrink-0 select-none text-right text-[var(--muted)]/60">4</span>
                        <span className="min-w-0 flex-1 whitespace-pre-wrap break-all"><span className="font-semibold text-[var(--ink)]">  type</span><span className="text-[var(--muted)]">: </span><span className="text-[var(--muted)]">&quot;</span><span className="text-[var(--ink)]">Software Studio</span><span className="text-[var(--muted)]">&quot;,</span></span>
                      </div>
                      <div data-hero-code className="flex gap-3">
                        <span className="w-5 shrink-0 select-none text-right text-[var(--muted)]/60">5</span>
                        <span className="min-w-0 flex-1 whitespace-pre-wrap break-all"><span className="font-semibold text-[var(--ink)]">  focus</span><span className="text-[var(--muted)]">: [</span></span>
                      </div>
                      <div data-hero-code className="flex gap-3">
                        <span className="w-5 shrink-0 select-none text-right text-[var(--muted)]/60">6</span>
                        <span className="min-w-0 flex-1 whitespace-pre-wrap break-all"><span className="text-[var(--muted)]">    &quot;</span><span className="text-[var(--ink)]">Web Development</span><span className="text-[var(--muted)]">&quot;,</span></span>
                      </div>
                      <div data-hero-code className="flex gap-3">
                        <span className="w-5 shrink-0 select-none text-right text-[var(--muted)]/60">7</span>
                        <span className="min-w-0 flex-1 whitespace-pre-wrap break-all"><span className="text-[var(--muted)]">    &quot;</span><span className="text-[var(--ink)]">Product Engineering</span><span className="text-[var(--muted)]">&quot;,</span></span>
                      </div>
                      <div data-hero-code className="flex gap-3">
                        <span className="w-5 shrink-0 select-none text-right text-[var(--muted)]/60">8</span>
                        <span className="min-w-0 flex-1 whitespace-pre-wrap break-all"><span className="text-[var(--muted)]">    &quot;</span><span className="text-[var(--ink)]">UI / UX Design</span><span className="text-[var(--muted)]">&quot;,</span></span>
                      </div>
                      <div data-hero-code className="flex gap-3">
                        <span className="w-5 shrink-0 select-none text-right text-[var(--muted)]/60">9</span>
                        <span className="min-w-0 flex-1 whitespace-pre-wrap break-all"><span className="text-[var(--muted)]">    &quot;</span><span className="text-[var(--ink)]">Digital Experiences</span><span className="text-[var(--muted)]">&quot;,</span></span>
                      </div>
                      <div data-hero-code className="flex gap-3">
                        <span className="w-5 shrink-0 select-none text-right text-[var(--muted)]/60">10</span>
                        <span className="min-w-0 flex-1 whitespace-pre-wrap break-all"><span className="font-semibold text-[var(--ink)]">  </span><span className="text-[var(--muted)]">],</span></span>
                      </div>
                      <div data-hero-code className="flex gap-3">
                        <span className="w-5 shrink-0 select-none text-right text-[var(--muted)]/60">11</span>
                        <span className="min-w-0 flex-1 whitespace-pre-wrap break-all"><span className="font-semibold text-[var(--ink)]">  approach</span><span className="text-[var(--muted)]">: </span><span className="text-[var(--muted)]">&quot;</span><span className="text-[var(--ink)]">DESIGN + ENGINEERING</span><span className="text-[var(--muted)]">&quot;,</span></span>
                      </div>
                      <div data-hero-code className="flex gap-3">
                        <span className="w-5 shrink-0 select-none text-right text-[var(--muted)]/60">12</span>
                        <span className="min-w-0 flex-1 whitespace-pre-wrap break-all"><span className="font-semibold text-[var(--ink)]">  status</span><span className="text-[var(--muted)]">: </span><span className="text-[var(--muted)]">&quot;</span><span className="font-medium text-[var(--ink)]">OPEN</span><span className="text-[var(--muted)]">&quot;,</span></span>
                      </div>
                      <div data-hero-code className="flex gap-3">
                        <span className="w-5 shrink-0 select-none text-right text-[var(--muted)]/60">13</span>
                        <span className="min-w-0 flex-1 whitespace-pre-wrap break-all text-[var(--muted)]">{"};"}</span>
                      </div>
                      <div data-hero-code className="flex gap-3">
                        <span className="w-5 shrink-0 select-none text-right text-[var(--muted)]/60">14</span>
                        <span className="min-w-0 flex-1 whitespace-pre-wrap break-all text-[var(--muted)]">{`// WE DESIGN. WE ENGINEER. WE SHIP.`}<span aria-hidden className="ml-1 inline-block h-[12px] w-[7px] translate-y-[2px] bg-[var(--accent)]" style={{ animation: "caretBlink 1.1s steps(1) infinite" }} /></span>
                      </div>
                    </div>
                    {/* board footer */}
                    <div data-hero-code className="flex items-center justify-between gap-3 border-t border-[var(--line)] bg-[var(--paper-2)] px-3 sm:px-4 py-2.5">
                      <span className="flex items-center gap-2 font-mono text-[10px] tracking-[0.18em] text-[var(--muted-2)]">
                        <span className="size-1.5 rounded-full bg-emerald-500 animate-pulse" /> AVAILABLE FOR NEW PROJECTS
                      </span>
                      <span className="hidden sm:inline font-mono text-[10px] tracking-[0.18em] text-[var(--muted)]">EST. 2026</span>
                    </div>
                  </div>
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-[var(--paper)]/30 via-transparent to-transparent pointer-events-none" />
                <div className="absolute inset-0 mix-blend-multiply opacity-[0.08] pointer-events-none" style={{ background: "radial-gradient(600px 400px at 50% 10%, #FF3B30, transparent 70%)" }} />
              </div>

              <div data-hero-float className="absolute top-4 left-4 flex gap-2">
                <span className="rounded-full bg-white/90 backdrop-blur px-3 py-1.5 font-mono text-[10px] tracking-[0.18em] border border-white shadow-sm">AXIOM — 2026</span>
                <span className="hidden sm:inline-flex rounded-full bg-[var(--ink)] text-white px-3 py-1.5 font-mono text-[10px] tracking-[0.18em]">STUDIO</span>
              </div>

              <div data-hero-float className="absolute bottom-4 left-4 right-4 flex items-end justify-between gap-3">
                <div className="rounded-2xl bg-white/95 backdrop-blur p-3 pr-4 flex items-center gap-3 border border-white shadow-[0_12px_40px_rgba(0,0,0,0.12)] max-w-[78%]">
                  <span className="size-10 rounded-full bg-[var(--ink)] text-white grid place-items-center text-sm">⬢</span>
                  <div className="leading-tight">
                    <div className="font-mono text-[10px] tracking-[0.2em] text-[var(--muted)]">STUDIO FOCUS</div>
                    <div className="font-medium text-sm leading-none">Design + Engineering — shipped together</div>
                  </div>
                </div>
                <span className="hidden sm:grid size-12 rounded-full bg-[var(--accent)] text-white place-items-center text-xl shadow-lg">↗</span>
              </div>

              <div className="absolute right-3 top-1/2 -translate-y-1/2 hidden xl:flex flex-col items-center gap-2 font-mono text-[10px] tracking-[0.3em] text-[var(--ink)]/50">
                <span className="h-12 w-px bg-[var(--ink)]/20" />
                <span style={{ writingMode: "vertical-rl" }}>WEB — E-COMMERCE — PRODUCT — API</span>
                <span className="h-12 w-px bg-[var(--ink)]/20" />
              </div>
            </motion.div>

            <div
              data-hero-float
              className="hidden lg:block absolute -z-10 top-8 -right-4 w-[86%] h-[82%] rounded-[28px] border border-[var(--line-strong)] bg-[var(--paper-2)]"
              style={{ transform: `translate3d(${mouse.x * -10}px, ${mouse.y * -8}px, 0)`, transition: "transform 0.7s cubic-bezier(0.16,1,0.3,1)" }}
            />
            <div
              data-hero-float
              className="hidden lg:block absolute -z-20 top-12 -right-8 w-[84%] h-[78%] rounded-[28px] border border-dashed border-[var(--line-strong)]"
              style={{ transform: `translate3d(${mouse.x * -16}px, ${mouse.y * -12}px, 0)`, transition: "transform 0.8s cubic-bezier(0.16,1,0.3,1)" }}
            />

            <div data-hero-float className="absolute -bottom-6 left-6 hidden lg:flex items-center gap-2 rounded-full bg-white border border-[var(--line)] px-4 py-2 shadow-sm font-mono text-[11px] tracking-widest">
              <span className="size-2 rounded-full bg-[var(--accent)]" /> SOFTWARE & DIGITAL PRODUCTS — CRAFT & SYSTEMS
            </div>
          </div>
        </div>

        <div className="relative z-10 border-y border-[var(--line)] bg-[var(--ink)] text-[var(--paper)] overflow-hidden">
          <div className="flex animate-[marquee_22s_linear_infinite] whitespace-nowrap will-change-transform">
            {Array.from({ length: 8 }).map((_, i) => (
              <span key={i} className="flex items-center gap-6 px-6 py-3 font-mono text-xs tracking-[0.24em]">
                <span className="opacity-60">REACT</span> <span className="size-1 bg-[var(--accent)] rounded-full" />
                <span>NEXT.JS</span> <span className="size-1 bg-white/30 rounded-full" />
                <span>TYPESCRIPT</span> <span className="size-1 bg-[var(--accent)] rounded-full" />
                <span>TAILWIND</span> <span className="size-1 bg-white/30 rounded-full" />
                <span>NODE.JS</span> <span className="size-1 bg-[var(--accent)] rounded-full" />
                <span>POSTGRESQL</span> <span className="size-1 bg-white/30 rounded-full" />
                <span>GSAP</span> <span className="size-1 bg-white/30 rounded-full" />
                <span>FIGMA</span> <span className="size-1 bg-white/30 rounded-full" />
              </span>
            ))}
          </div>
        </div>
      </motion.div>

      <style>{`@keyframes marquee { from { transform: translateX(0) } to { transform: translateX(-50%) } } @keyframes caretBlink { 0%, 49% { opacity: 1 } 50%, 100% { opacity: 0 } }`}</style>
    </section>
  )
}
