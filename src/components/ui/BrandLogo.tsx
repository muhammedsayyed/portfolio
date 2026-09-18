// AXIOM vector brand identity — geometric mark + lockup.
// Strokes inherit the surrounding tone (ink on light, paper on dark);
// the apex node is always AXIOM red. No image assets, stays razor sharp.

type BrandVariant = "mark" | "logo" | "lockup"
type BrandTheme = "dark" | "light"

const TONE: Record<BrandTheme, string> = {
  dark: "text-[var(--ink)]",
  light: "text-[var(--paper)]",
}

export function AxiomMark({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 40 40" fill="none" aria-hidden="true" className={className}>
      {/* engineered "A" — two load-bearing legs */}
      <path d="M7 33 L20 7 L33 33" stroke="currentColor" strokeWidth="4.5" strokeLinejoin="miter" />
      {/* crossbar — the structural tie */}
      <path d="M12 25 H28" stroke="currentColor" strokeWidth="4.5" />
      {/* axiom point — the node everything resolves to */}
      <rect x="17.25" y="4.25" width="5.5" height="5.5" fill="var(--accent)" />
    </svg>
  )
}

type BrandLogoProps = {
  variant?: BrandVariant
  theme?: BrandTheme
  label?: string
  className?: string
  markClassName?: string
}

export default function BrandLogo({
  variant = "logo",
  theme = "dark",
  label = "AXIOM — Software Development Studio",
  className,
  markClassName,
}: BrandLogoProps) {
  if (variant === "mark") {
    return (
      <span role="img" aria-label={label} className={`inline-flex ${TONE[theme]} ${className ?? ""}`}>
        <AxiomMark className="h-full w-full" />
      </span>
    )
  }

  if (variant === "lockup") {
    return (
      <span role="img" aria-label={label} className={`inline-flex items-center gap-4 ${TONE[theme]} ${className ?? ""}`}>
        <AxiomMark className={markClassName ?? "h-12 w-12 shrink-0"} />
        <span className="flex flex-col items-start">
          <span className="font-semibold text-[22px] leading-none tracking-[0.22em]">AXIOM</span>
          <span className="mt-2 font-mono text-[9px] leading-none tracking-[0.3em] opacity-60">
            SOFTWARE DEVELOPMENT STUDIO
          </span>
        </span>
      </span>
    )
  }

  return (
    <span role="img" aria-label={label} className={`inline-flex items-center gap-2.5 ${TONE[theme]} ${className ?? ""}`}>
      <AxiomMark className={markClassName ?? "h-8 w-8 shrink-0"} />
      <span className="font-semibold text-[17px] leading-none tracking-[0.22em]">AXIOM</span>
    </span>
  )
}
