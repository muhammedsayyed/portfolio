"use client"
import { useRef } from "react"
import { motion } from "framer-motion"

export function MagneticButton({
  children,
  className = "",
  strength = 0.35,
  ...props
}: Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, "onAnimationStart" | "onDrag" | "onDragStart" | "onDragEnd"> & { strength?: number; children: React.ReactNode }) {
  const ref = useRef<HTMLButtonElement>(null)

  const handleMove = (e: React.MouseEvent) => {
    const el = ref.current
    if (!el) return
    const rect = el.getBoundingClientRect()
    const x = e.clientX - rect.left - rect.width / 2
    const y = e.clientY - rect.top - rect.height / 2
    el.style.transform = `translate(${x * strength}px, ${y * strength}px)`
  }
  const handleLeave = () => {
    if (ref.current) ref.current.style.transform = `translate(0px, 0px)`
  }

  return (
    <motion.button
      ref={ref as any}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      whileTap={{ scale: 0.98 }}
      transition={{ type: "spring", stiffness: 400, damping: 18 }}
      style={{ transition: "transform 0.2s cubic-bezier(0.16,1,0.3,1)" }}
      className={className}
      {...(props as any)}
    >
      {children}
    </motion.button>
  )
}

export function MagneticLink({
  children,
  href,
  className = "",
  strength = 0.28,
  target,
}: {
  children: React.ReactNode
  href: string
  className?: string
  strength?: number
  target?: string
}) {
  const ref = useRef<HTMLAnchorElement>(null)
  const handleMove = (e: React.MouseEvent) => {
    const el = ref.current
    if (!el) return
    const rect = el.getBoundingClientRect()
    const x = e.clientX - rect.left - rect.width / 2
    const y = e.clientY - rect.top - rect.height / 2
    el.style.transform = `translate(${x * strength}px, ${y * strength}px)`
  }
  const handleLeave = () => {
    if (ref.current) ref.current.style.transform = `translate(0px, 0px)`
  }
  return (
    <a
      ref={ref}
      href={href}
      target={target}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      style={{ transition: "transform 0.2s cubic-bezier(0.16,1,0.3,1)" }}
      className={className}
    >
      {children}
    </a>
  )
}
