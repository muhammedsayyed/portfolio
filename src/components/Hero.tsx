"use client"
import Image from "next/image"
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
        .from("[data-hero-float]", { opacity: 0, y: 18, stagger: 0.08, duration: 0.6 }, "-=0.5")
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
        <span className="font-[var(--font-display)] text-[42vw] leading-none tracking-tighter text-[var(--ink)]/[0.04]">26</span>
      </div>

      <motion.div style={{ opacity: opacityHero }} className="flex-1 flex flex-col">
        <div className="relative z-10 mx-auto w-full max-w-[1600px] px-6 md:px-10 pt-28 md:pt-32 pb-6 flex flex-wrap gap-4 items-center justify-between text-[11px] font-mono tracking-[0.2em] text-[var(--muted-2)]">
          <div data-hero-meta className="flex items-center gap-3">
            <span className="hidden sm:inline-flex items-center gap-2">
              <span className="size-1.5 bg-[var(--accent)] rounded-full" /> PORTFOLIO / 2026
            </span>
            <span className="inline-flex items-center gap-2 rounded-full border border-[var(--line)] bg-white px-3 py-1.5 text-[10px]">
              <span className="size-2 rounded-full bg-emerald-500 animate-pulse" /> OPEN TO COLLABORATION
            </span>
          </div>
          <div data-hero-meta className="flex items-center gap-6">
            <span className="hidden md:inline">BASED — REMOTE / WORLDWIDE</span>
            <span className="hidden md:inline">
              TIME — <span className="text-[var(--ink)]" suppressHydrationWarning>{time}</span>
            </span>
            <span className="inline-flex gap-1.5">
              <span className="size-1.5 rounded-full bg-[var(--line-strong)]" />
              <span className="size-1.5 rounded-full bg-[var(--line-strong)]" />
              <span className="size-1.5 rounded-full bg-[var(--ink)]" />
            </span>
          </div>
        </div>

        <div className="relative z-10 mx-auto w-full max-w-[1600px] px-6 md:px-10 flex-1 grid grid-cols-12 gap-6 md:gap-8 items-end pb-10 md:pb-14">
          <div className="col-span-12 lg:col-span-7 flex flex-col">
            <div className="overflow-hidden">
              <div data-hero-line className="font-[var(--font-display)] text-[13vw] lg:text-[11vw] xl:text-[156px] leading-[0.82] tracking-[-0.05em]">
                FRONT<span className="font-light italic text-[var(--accent)]">—</span>
              </div>
            </div>
            <div className="overflow-hidden -mt-2 md:-mt-4">
              <div data-hero-line className="font-[var(--font-display)] text-[13vw] lg:text-[11vw] xl:text-[156px] leading-[0.82] tracking-[-0.05em] flex items-baseline gap-3">
                <span className="text-transparent" style={{ WebkitTextStroke: "1.2px var(--ink)" }}>
                  END
                </span>
                <span className="font-mono text-[11px] md:text-xs tracking-[0.35em] leading-none self-center translate-y-1 hidden sm:inline-flex flex-col gap-1">
                  <span className="bg-[var(--ink)] text-[var(--paper)] px-2 py-1">DEVELOPER</span>
                  <span className="border border-[var(--line-strong)] px-2 py-1 bg-white">DESIGNER</span>
                </span>
              </div>
            </div>

            <div className="mt-6 md:mt-10 grid grid-cols-12 gap-6 items-start">
              <div data-hero-meta className="col-span-12 md:col-span-7">
                <p className="font-[var(--font-display)] text-[22px] md:text-[26px] leading-[1.15] tracking-tight text-balance">
                  I design & build <span className="italic font-light">premium</span> interfaces with{" "}
                  <span className="underline decoration-[var(--accent)] decoration-2 underline-offset-4">intent</span>. React · TypeScript · Next.js · motion, shipped with care.
                </p>
                <p className="mt-4 font-mono text-xs leading-6 text-[var(--muted-2)] max-w-[52ch]">
                  Obsessed with typography, performance, and the tiny interactions that make software feel alive. Currently deepening backend to own the full product — from pixel to API.
                </p>

                <div className="mt-7 flex flex-wrap gap-3">
                  <a
                    href="#work"
                    onClick={(e) => {
                      e.preventDefault()
                      document.querySelector("#work")?.scrollIntoView({ behavior: "smooth" })
                    }}
                    className="group inline-flex items-center gap-3 rounded-full bg-[var(--ink)] text-[var(--paper)] pl-7 pr-2 py-2 font-mono text-xs tracking-[0.16em] hover:bg-black transition-colors"
                  >
                    VIEW SELECTED WORK
                    <span className="size-9 rounded-full bg-white text-black grid place-items-center group-hover:rotate-45 transition-transform duration-300">↗</span>
                  </a>
                  <a
                    href="#about"
                    onClick={(e) => {
                      e.preventDefault()
                      document.querySelector("#about")?.scrollIntoView({ behavior: "smooth" })
                    }}
                    className="inline-flex items-center gap-2 rounded-full border border-[var(--line-strong)] bg-white px-7 py-3 font-mono text-xs tracking-[0.16em] hover:border-[var(--ink)] transition-colors"
                  >
                    ABOUT ME ↓
                  </a>
                </div>

                <div className="mt-8 flex flex-wrap gap-2 font-mono text-[11px] tracking-widest">
                  {["React Expert", "TypeScript", "Next.js", "Tailwind", "Framer / GSAP", "UI Systems"].map((t) => (
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
                      <span>Frontend Architecture</span>
                      <span className="text-[var(--muted)]">01</span>
                    </li>
                    <li className="flex justify-between border-b border-dashed border-[var(--line)] pb-2">
                      <span>Design Systems</span>
                      <span className="text-[var(--muted)]">02</span>
                    </li>
                    <li className="flex justify-between border-b border-dashed border-[var(--line)] pb-2">
                      <span>Interaction & Motion</span>
                      <span className="text-[var(--muted)]">03</span>
                    </li>
                    <li className="flex justify-between">
                      <span>Product UI / UX</span>
                      <span className="text-[var(--muted)]">04</span>
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
                <Image
                  src="/me.png"
                  alt="Portrait — Frontend Developer"
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 40vw"
                  className="object-cover object-top"
                  style={{ objectPosition: "50% 16%" }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[var(--paper)]/30 via-transparent to-transparent" />
                <div className="absolute inset-0 mix-blend-multiply opacity-[0.08]" style={{ background: "radial-gradient(600px 400px at 50% 10%, #FF3B30, transparent 70%)" }} />
              </div>

              <div data-hero-float className="absolute top-4 left-4 flex gap-2">
                <span className="rounded-full bg-white/90 backdrop-blur px-3 py-1.5 font-mono text-[10px] tracking-[0.18em] border border-white shadow-sm">REACT — 2026</span>
                <span className="hidden sm:inline-flex rounded-full bg-[var(--ink)] text-white px-3 py-1.5 font-mono text-[10px] tracking-[0.18em]">AVAILABLE</span>
              </div>

              <div data-hero-float className="absolute bottom-4 left-4 right-4 flex items-end justify-between gap-3">
                <div className="rounded-2xl bg-white/95 backdrop-blur p-3 pr-4 flex items-center gap-3 border border-white shadow-[0_12px_40px_rgba(0,0,0,0.12)] max-w-[78%]">
                  <span className="size-10 rounded-full bg-[var(--ink)] text-white grid place-items-center text-sm">◆</span>
                  <div className="leading-tight">
                    <div className="font-mono text-[10px] tracking-[0.2em] text-[var(--muted)]">CURRENTLY</div>
                    <div className="font-medium text-sm leading-none">Learning Backend — Node & DBs</div>
                  </div>
                </div>
                <span className="hidden sm:grid size-12 rounded-full bg-[var(--accent)] text-white place-items-center text-xl shadow-lg">↗</span>
              </div>

              <div className="absolute right-3 top-1/2 -translate-y-1/2 hidden xl:flex flex-col items-center gap-2 font-mono text-[10px] tracking-[0.3em] text-white/90">
                <span className="h-12 w-px bg-white/40" />
                <span style={{ writingMode: "vertical-rl" }}>FRONTEND — UI/UX — MOTION</span>
                <span className="h-12 w-px bg-white/40" />
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
              <span className="size-2 rounded-full bg-[var(--accent)]" /> UI ENGINEERING — CRAFT & SYSTEMS
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
                <span>MOTION</span> <span className="size-1 bg-[var(--accent)] rounded-full" />
                <span>UI / UX</span> <span className="size-1 bg-white/30 rounded-full" />
              </span>
            ))}
          </div>
        </div>
      </motion.div>

      <style>{`@keyframes marquee { from { transform: translateX(0) } to { transform: translateX(-50%) } }`}</style>
    </section>
  )
}
