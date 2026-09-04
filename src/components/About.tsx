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
                <span className="size-1.5 bg-[var(--accent)] rounded-full" /> 01 — ABOUT
              </div>

              <div data-about-num-wrap className="overflow-hidden mt-6">
                <div data-about-num className="font-[var(--font-display)] text-[96px] md:text-[120px] leading-none tracking-[-0.06em] flex items-start gap-2">
                  01 <span className="mt-4 size-3 rounded-full bg-[var(--accent)]" />
                </div>
              </div>

              <h2 className="font-[var(--font-display)] text-[42px] md:text-[54px] leading-[0.9] tracking-[-0.03em] mt-2">
                Muhammed
                <br />
                <span className="italic font-light text-[var(--muted-2)]">Sayed.</span>
              </h2>
              <div className="mt-3 font-mono text-xs tracking-[0.18em] text-[var(--muted-2)]">
                Junior Front-End Developer | React.js, Next.js & UI/UX
              </div>
              <div className="mt-1 font-mono text-xs tracking-wide text-[var(--muted)]">Giza, Egypt — Available for work</div>

              <div data-about-line className="h-px bg-[var(--ink)] mt-6 origin-left" />

              <div className="mt-6 grid grid-cols-2 gap-4 font-mono text-xs">
                <div className="rounded-2xl border border-[var(--line)] bg-white p-4">
                  <div className="text-[11px] tracking-[0.18em] text-[var(--muted)]">FOCUS</div>
                  <div className="mt-2 font-medium text-[13px] leading-tight text-[var(--ink)]">Modern, responsive & user-friendly web experiences</div>
                </div>
                <div className="rounded-2xl border border-[var(--line)] bg-[var(--paper-2)] p-4">
                  <div className="text-[11px] tracking-[0.18em] text-[var(--muted)]">NOW</div>
                  <div className="mt-2 font-medium text-[13px] leading-tight">Training Backend @ Route Academy — Node, Express, MongoDB</div>
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
                    <span className="size-1.5 rounded-full bg-emerald-500" /> JUNIOR FRONT-END DEVELOPER
                  </div>

                  <p data-about-reveal className="mt-6 font-[var(--font-display)] text-[22px] md:text-[26px] leading-[1.25] tracking-tight">
                    Junior Front-End Developer and UI/UX Designer passionate about building{" "}
                    <span className="bg-[var(--ink)] text-white px-1.5 py-0.5 rounded">modern, responsive</span> and user-friendly web experiences.
                  </p>

                  <div data-about-reveal className="mt-6 space-y-4 font-mono text-[13px] leading-7 text-[var(--muted-2)]">
                    <p>
                      Skilled in <span className="text-[var(--ink)] font-medium">React.js, Next.js, JavaScript, TypeScript, Tailwind CSS, and Figma</span>, with hands-on experience developing interactive web applications and translating UI designs into functional interfaces.
                    </p>
                    <p>
                      I care about clean code, thoughtful design and the details that make software feel alive — baseline grids, focus states and empty states. I work in Figma but prototype in code, building responsive interfaces that are both beautiful and usable.
                    </p>
                    <p>
                      Currently training in Backend Development with{" "}
                      <span className="inline-flex items-center gap-1.5 rounded-full border border-[var(--line)] bg-[var(--paper-2)] px-2.5 py-0.5 text-xs tracking-wide text-[var(--ink)]">
                        Node · Express · MongoDB · REST APIs
                      </span>{" "}
                      at Route Academy to own the full product — from pixel to API.
                    </p>
                  </div>

                  <div data-about-reveal className="mt-8 grid grid-cols-3 gap-4 border-t border-[var(--line)] pt-6">
                    {[
                      { k: "Clean", v: "Clean code & thoughtful design" },
                      { k: "Responsive", v: "Modern, user-friendly flows" },
                      { k: "Learning", v: "Continuous learning mindset" },
                    ].map((s) => (
                      <div key={s.k}>
                        <div className="font-mono text-[11px] tracking-[0.18em] text-[var(--muted)]">{s.k.toUpperCase()}</div>
                        <div className="mt-1.5 font-mono text-xs leading-5 text-[var(--ink-soft)]">{s.v}</div>
                      </div>
                    ))}
                  </div>

                  {/* Education block */}
                  <div data-about-reveal className="mt-8 rounded-2xl border border-[var(--line)] bg-[var(--paper)] p-5">
                    <div className="font-mono text-[10px] tracking-[0.2em] text-[var(--muted)]">EDUCATION</div>
                    <div className="mt-2 font-medium text-sm leading-tight">Bachelor of Business Information Systems (BIS)</div>
                    <div className="font-mono text-xs text-[var(--muted-2)]">Higher Institute for Advanced Studies – Management Information Systems</div>
                    <div className="mt-1 font-mono text-xs tracking-wide text-[var(--muted)]">09/2022 – 06/2026 • Giza, Egypt</div>
                    <div className="mt-2 font-mono text-xs leading-5 text-[var(--muted-2)]">
                      Focus on information systems, business technology, and software applications.
                    </div>
                  </div>
                  <div data-about-reveal className="mt-3 rounded-2xl border border-[var(--line)] bg-white p-5">
                    <div className="font-mono text-[10px] tracking-[0.2em] text-[var(--muted)]">TRAINING</div>
                    <div className="mt-2 font-medium text-sm leading-tight">Front-End Development — Route Academy</div>
                    <div className="font-mono text-xs text-[var(--muted-2)]">09/2025 – 03/2026 • Dokki, Egypt</div>
                    <div className="mt-2 font-mono text-xs leading-5 text-[var(--muted-2)]">
                      6-month program covering HTML5, CSS3, JavaScript, React.js, responsive web design, UI/UX fundamentals. Certificate of Completion.
                    </div>
                  </div>
                </div>

                <div className="bg-[var(--paper-2)] border-t md:border-t-0 md:border-l border-[var(--line)] p-8 md:p-8 flex flex-col">
                  <div className="font-mono text-[11px] tracking-[0.24em] text-[var(--muted)]">HOW I WORK</div>

                  <div className="mt-6 space-y-5">
                    {[
                      { n: "01", t: "Design in Figma", d: "Wireframing & prototyping user-friendly flows." },
                      { n: "02", t: "Build in React", d: "Translating UI into responsive, functional interfaces." },
                      { n: "03", t: "Integrate APIs", d: "REST APIs, JWT auth, validation — real data, not mocks." },
                      { n: "04", t: "Learn backend", d: "Node, Express, MongoDB @ Route Academy to close the loop." },
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
                      <div className="font-mono text-[10px] tracking-[0.2em] opacity-60">CURRENTLY</div>
                      <div className="mt-3 font-[var(--font-display)] text-[18px] leading-tight">Training Backend to own features end-to-end.</div>
                      <div className="mt-2 font-mono text-xs leading-5 opacity-70">
                        Frontend-first, but expanding into Node.js, Express, REST APIs and database design for full product ownership.
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-12 border-t border-[var(--line)] text-center font-mono text-xs tracking-widest divide-x divide-[var(--line)]">
                <div className="col-span-4 py-4 bg-[var(--paper)]">CLEAN CODE</div>
                <div className="col-span-4 py-4 bg-white">THOUGHTFUL DESIGN</div>
                <div className="col-span-4 py-4 bg-[var(--paper-2)]">RESPONSIVE UX</div>
              </div>
            </div>

            {/* quote */}
            <div data-about-reveal className="mt-8 rounded-[24px] border border-[var(--line-strong)] bg-[var(--paper-2)] p-6 md:p-8 flex flex-col md:flex-row gap-6 items-start">
              <span className="hidden md:block font-[var(--font-display)] text-[64px] leading-none text-[var(--ink)]/10">“</span>
              <div>
                <p className="font-[var(--font-display)] text-[20px] md:text-[22px] leading-[1.3] tracking-tight">
                  Passionate about <span className="italic">clean code</span>, thoughtful design and continuous learning — building interfaces that are modern and user-friendly.
                </p>
                <div className="mt-3 font-mono text-xs tracking-[0.18em] text-[var(--muted)]">— MUHAMMED SAYED • GIZA, EGYPT</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
