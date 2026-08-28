"use client"
import { useEffect, useRef, useState } from "react"

export default function Cursor() {
  const dotRef = useRef<HTMLDivElement>(null)
  const ringRef = useRef<HTMLDivElement>(null)
  const [active, setActive] = useState(false)

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return
    if (window.matchMedia("(pointer: coarse)").matches) return

    let raf = 0
    let mx = 0, my = 0
    let rx = 0, ry = 0
    let dx = 0, dy = 0

    const onMove = (e: MouseEvent) => {
      mx = e.clientX
      my = e.clientY
      setActive(true)
    }
    const onLeave = () => setActive(false)

    const tick = () => {
      rx += (mx - rx) * 0.14
      ry += (my - ry) * 0.14
      dx += (mx - dx) * 0.32
      dy += (my - dy) * 0.32
      if (ringRef.current) ringRef.current.style.transform = `translate3d(${rx}px, ${ry}px, 0) translate(-50%, -50%)`
      if (dotRef.current) dotRef.current.style.transform = `translate3d(${dx}px, ${dy}px, 0) translate(-50%, -50%)`
      raf = requestAnimationFrame(tick)
    }
    tick()
    window.addEventListener("mousemove", onMove, { passive: true })
    window.addEventListener("mouseleave", onLeave)
    return () => {
      cancelAnimationFrame(raf)
      window.removeEventListener("mousemove", onMove)
      window.removeEventListener("mouseleave", onLeave)
    }
  }, [])

  return (
    <>
      <div
        ref={ringRef}
        className={`pointer-events-none fixed left-0 top-0 z-[60] hidden lg:block size-9 rounded-full border border-[var(--ink)]/20 mix-blend-difference transition-opacity duration-300 ${active ? "opacity-100" : "opacity-0"}`}
        aria-hidden
      />
      <div
        ref={dotRef}
        className={`pointer-events-none fixed left-0 top-0 z-[60] hidden lg:block size-1.5 rounded-full bg-[var(--ink)] transition-opacity duration-300 ${active ? "opacity-100" : "opacity-0"}`}
        aria-hidden
      />
    </>
  )
}
