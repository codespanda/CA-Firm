type LogoProps = {
  className?: string
  variant?: "dark" | "light"
}

/**
 * Monogram mark: interlocking "C" + "A" inside a badge ring, with a gold
 * ascending swoosh (growth line) cutting through — echoes the navy/gold
 * palette used across the site.
 */
export function LogoMark({ className = "size-11", variant = "dark" }: LogoProps) {
  const ink = variant === "dark" ? "#0f2148" : "#ffffff"
  const ring = variant === "dark" ? "#0f2148" : "#ffffff"

  return (
    <svg
      viewBox="0 0 64 64"
      className={className}
      role="img"
      aria-label="Your CA Firm logo"
    >
      <defs>
        <linearGradient id="logo-gold" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#f3c05a" />
          <stop offset="100%" stopColor="#d99a1e" />
        </linearGradient>
      </defs>

      {/* outer ring */}
      <circle
        cx="32"
        cy="32"
        r="29.5"
        fill="none"
        stroke={ring}
        strokeOpacity="0.14"
        strokeWidth="2"
      />
      <circle cx="32" cy="32" r="29.5" fill="none" stroke="url(#logo-gold)" strokeWidth="2" strokeDasharray="72 114" strokeLinecap="round" />

      {/* C */}
      <path
        d="M35.5 20.2a12 12 0 1 0 0 23.6"
        fill="none"
        stroke={ink}
        strokeWidth="5.2"
        strokeLinecap="round"
      />
      {/* A */}
      <path
        d="M30 44 37.5 20.5 45 44M32.6 36.3h9.8"
        fill="none"
        stroke="url(#logo-gold)"
        strokeWidth="5.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export function Logo({
  className,
  variant = "dark",
  showText = true,
  hideTextOnMobile = false,
}: LogoProps & { showText?: boolean; hideTextOnMobile?: boolean }) {
  const textColor = variant === "dark" ? "text-navy" : "text-white"
  const subColor = variant === "dark" ? "text-muted-foreground" : "text-white/60"

  return (
    <span className={`flex items-center gap-3 ${className ?? ""}`}>
      <LogoMark variant={variant} className="size-10 shrink-0 sm:size-11" />
      {showText && (
        <span
          className={`${hideTextOnMobile ? "hidden sm:flex" : "flex"} flex-col leading-tight text-left`}
        >
          <span className={`text-sm font-semibold tracking-wide ${textColor}`}>
            YOUR CA FIRM
          </span>
          <span className={`text-[10px] tracking-[0.15em] ${subColor}`}>
            CHARTERED ACCOUNTANTS
          </span>
        </span>
      )}
    </span>
  )
}
