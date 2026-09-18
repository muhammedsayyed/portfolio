"use client"
import { useEffect, useRef } from "react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

export default function About() {
  const ref = useRef<HTMLElement>(null)

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)
    const ctx = gsap.context(() => {
      gsap.from("[data-about-reveal]", {
        y: 28,
        opacity: 0,
        duration: 0.9,
        stagger: 0.08,
        ease: "power3.out",
        scrollTrigger: {
          trigger: "[data-about-wrap]",
          start: "top 78%",
        },
      })
      gsap.from("[data-about-line]", {
        scaleX: 0,
        duration: 1.1,
        ease: "expo.out",
        scrollTrigger: { trigger: "[data-about-wrap]", start: "top 75%" },
      })
      gsap.from("[data-about-num]", {
        yPercent: 100,
        duration: 1,
        ease: "expo.out",
        scrollTrigger: { trigger: "[data-about-num-wrap]", start: "top 85%" },
      })
    }, ref)
    return () => ctx.revert()
  }, [])

  return (
    <section ref={ref} id="about" className="relative bg-[var(--paper)] border-t border-[var(--line)]">
      <div className="mx-auto max-w-[1600px] px-6 md:px-10 py-16 md:py-24">
        <div data-about-wrap className="grid grid-cols-12 gap-8 md:gap-10">
          {/* left sticky */}
          <div className="col-span-12 lg:col-span-4">
            <div className="lg:sticky lg:top-28">
              <div className="flex items-center gap-3 font-mono text-[11px] tracking-[0.28em] text-[var(--muted)]">
                <span className="size-1.5 bg-[var(--accent)] rounded-full" /> 01 — STUDIO
              </div>

              <div data-about-num-wrap className="overflow-hidden mt-6">
                <div data-about-num className="font-[var(--font-display)] text-[96px] md:text-[120px] leading-none tracking-[-0.06em] flex items-start gap-2">
                  01 <span className="mt-4 size-3 rounded-full bg-[var(--accent)]" />
                </div>
              </div>

              <h2 className="font-[var(--font-display)] text-[42px] md:text-[54px] leading-[0.9] tracking-[-0.03em] mt-2">
                AXIOM
                <br />
                <span className="italic font-light text-[var(--muted-2)]">Studio.</span>
              </h2>
              <div className="mt-3 font-mono text-xs tracking-[0.18em] text-[var(--muted-2)]">
                Software & Digital Product Studio
              </div>
              <div className="mt-1 font-mono text-xs tracking-wide text-[var(--muted)]">Cairo, Egypt — Remote Worldwide</div>

              <div data-about-line className="h-px bg-[var(--ink)] mt-6 origin-left" />

              <div className="mt-6 grid grid-cols-2 gap-4 font-mono text-xs">
                <div className="rounded-2xl border border-[var(--line)] bg-white p-4">
                  <div className="text-[11px] tracking-[0.18em] text-[var(--muted)]">FOCUS</div>
                  <div className="mt-2 font-medium text-[13px] leading-tight text-[var(--ink)]">High-performance products that are useful and precise</div>
                </div>
                <div className="rounded-2xl border border-[var(--line)] bg-[var(--paper-2)] p-4">
                  <div className="text-[11px] tracking-[0.18em] text-[var(--muted)]">APPROACH</div>
                  <div className="mt-2 font-medium text-[13px] leading-tight">Design + Engineering as one team, from idea to launch</div>
                </div>
              </div>

              <div className="mt-6 hidden lg:flex items-center gap-3 font-mono text-[11px] tracking-widest text-[var(--muted-2)]">
                <span className="h-px flex-1 bg-[var(--line)]" /> EST. 2026 <span className="h-px flex-1 bg-[var(--line)]" />
              </div>
            </div>
          </div>

          {/* right content */}
          <div className="col-span-12 lg:col-span-8">
            <div className="border border-[var(--line)] rounded-[28px] bg-white overflow-hidden">
              <div className="grid md:grid-cols-[1.2fr_0.9fr] gap-0">
                <div className="p-8 md:p-10">
                  <div data-about-reveal className="inline-flex items-center gap-2 rounded-full border border-[var(--line)] bg-[var(--paper)] px-3 py-1 font-mono text-[11px] tracking-[0.18em] text-[var(--muted-2)]">
                    <span className="size-1.5 rounded-full bg-emerald-500" /> SOFTWARE & DIGITAL PRODUCT STUDIO
                  </div>

                  <p data-about-reveal className="mt-6 font-[var(--font-display)] text-[22px] md:text-[26px] leading-[1.25] tracking-tight">
                    We design and build{" "}
                    <span className="bg-[var(--ink)] text-white px-1.5 py-0.5 rounded">modern, high-performance</span> digital products for ambitious teams.
                  </p>

                  <div data-about-reveal className="mt-6 space-y-4 font-mono text-[13px] leading-7 text-[var(--muted-2)]">
                    <p>
                      AXIOM is a studio at the intersection of <span className="text-[var(--ink)] font-medium">design and engineering</span>. We don&apos;t hand off — we work as one product team from discovery to deployment, shaping business goals into software people enjoy using.
                    </p>
                    <p>
                      Quality is our system: design systems, accessible interactions, thoughtful empty states and baseline grids — all prototyped in code and validated with real data.
                    </p>
                    <p>
                      Our stack is{" "}
                      <span className="inline-flex items-center gap-1.5 rounded-full border border-[var(--line)] bg-[var(--paper-2)] px-2.5 py-0.5 text-xs tracking-wide text-[var(--ink)]">
                        React · Next.js · TypeScript · Node · Python · PostgreSQL
                      </span>{" "}
                      — chosen for performance, reliability and product velocity.
                    </p>
                  </div>

                  <div data-about-reveal className="mt-8 grid grid-cols-3 gap-4 border-t border-[var(--line)] pt-6">
                    {[
                      { k: "Precise", v: "Craft, systems and edge cases handled" },
                      { k: "Performant", v: "Fast, accessible, reliable" },
                      { k: "Product", v: "Design + build, together" },
                    ].map((s) => (
                      <div key={s.k}>
                        <div className="font-mono text-[11px] tracking-[0.18em] text-[var(--muted)]">{s.k.toUpperCase()}</div>
                        <div className="mt-1.5 font-mono text-xs leading-5 text-[var(--ink-soft)]">{s.v}</div>
                      </div>
                    ))}
                  </div>

                  {/* Capabilities block */}
                  <div data-about-reveal className="mt-8 rounded-2xl border border-[var(--line)] bg-[var(--paper)] p-5">
                    <div className="font-mono text-[10px] tracking-[0.2em] text-[var(--muted)]">CAPABILITIES</div>
                    <div className="mt-3 flex flex-wrap gap-2 font-mono text-xs">
                      {["Web Development", "E-Commerce", "Custom Software", "Digital Product Design", "Mobile Apps", "API & Backend"].map((c) => (
                        <span key={c} className="rounded-full border border-[var(--line)] bg-white px-3 py-1 tracking-wide">{c}</span>
                      ))}
                    </div>
                    <div className="mt-3 font-mono text-xs leading-5 text-[var(--muted-2)]">
                      End-to-end: product strategy, design systems, frontend and backend engineering, integrations and launch.
                    </div>
                  </div>
                  <div data-about-reveal className="mt-3 rounded-2xl border border-[var(--line)] bg-white p-5">
                    <div className="font-mono text-[10px] tracking-[0.2em] text-[var(--muted)]">AXIOM STACK</div>
                    <div className="mt-3 flex flex-wrap gap-2 font-mono text-[11px] tracking-wide">
                      {["React", "Next.js", "TypeScript", "Node.js", "Python", "PostgreSQL", "MongoDB", "REST API", "GraphQL", "GSAP", "Motion", "Figma"].map((t) => (
                        <span key={t} className="rounded-full border border-[var(--line)] bg-[var(--paper-2)] px-2.5 py-1 text-[var(--ink-soft)]">{t}</span>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="bg-[var(--paper-2)] border-t md:border-t-0 md:border-l border-[var(--line)] p-8 md:p-8 flex flex-col">
                  <div className="font-mono text-[11px] tracking-[0.24em] text-[var(--muted)]">HOW WE WORK</div>

                  <div className="mt-6 space-y-5">
                    {[
                      { n: "01", t: "Discover & Define", d: "Goals, users and constraints — shaping the right problem to solve." },
                      { n: "02", t: "Design in Systems", d: "Figma to design system — flows, components and prototypes in code." },
                      { n: "03", t: "Build & Integrate", d: "React/Next.js frontend, Node/Python APIs, databases — real data, not mocks." },
                      { n: "04", t: "Ship & Iterate", d: "Launch, measure and improve — continuously." },
                    ].map((step) => (
                      <div data-about-reveal key={step.n} className="flex gap-4">
                        <span className="font-mono text-xs tracking-widest text-[var(--muted)] mt-0.5">{step.n}</span>
                        <div>
                          <div className="font-medium text-sm leading-none">{step.t}</div>
                          <div className="mt-1 font-mono text-xs leading-5 text-[var(--muted-2)]">{step.d}</div>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div data-about-reveal className="mt-auto pt-8">
                    <div className="rounded-2xl bg-[var(--ink)] text-[var(--paper)] p-5">
                      <div className="font-mono text-[10px] tracking-[0.2em] opacity-60">STUDIO PRINCIPLE</div>
                      <div className="mt-3 font-[var(--font-display)] text-[18px] leading-tight">Design and engineering, shipped together.</div>
                      <div className="mt-2 font-mono text-xs leading-5 opacity-70">
                        No hand-offs. We prototype in code, validate with users, and engineer for performance from the first component.
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-12 border-t border-[var(--line)] text-center font-mono text-xs tracking-widest divide-x divide-[var(--line)]">
                <div className="col-span-4 py-4 bg-[var(--paper)]">PRECISE</div>
                <div className="col-span-4 py-4 bg-white">PERFORMANT</div>
                <div className="col-span-4 py-4 bg-[var(--paper-2)]">PRODUCT-MINDED</div>
              </div>
            </div>

            {/* quote */}
            <div data-about-reveal className="mt-8 rounded-[24px] border border-[var(--line-strong)] bg-[var(--paper-2)] p-6 md:p-8 flex flex-col md:flex-row gap-6 items-start">
              <span className="hidden md:block font-[var(--font-display)] text-[64px] leading-none text-[var(--ink)]/10">“</span>
              <div>
                <p className="font-[var(--font-display)] text-[20px] md:text-[22px] leading-[1.3] tracking-tight">
                  We believe in <span className="italic">useful software</span> — products that are fast, honest and a pleasure to use, built with systems that scale.
                </p>
                <div className="mt-3 font-mono text-xs tracking-[0.18em] text-[var(--muted)]">— AXIOM • SOFTWARE & DIGITAL PRODUCT STUDIO</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
