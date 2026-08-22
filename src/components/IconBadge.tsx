import type { LucideIcon } from "lucide-react"

type IconBadgeProps = {
  icon: LucideIcon
  size?: "sm" | "md" | "lg"
  className?: string
}

const SIZES = {
  sm: { wrap: "size-11", icon: "size-5" },
  md: { wrap: "size-14", icon: "size-6" },
  lg: { wrap: "size-16", icon: "size-7" },
}

/** Navy-to-gold gradient badge used for service/industry/process icons site-wide. */
export function IconBadge({ icon: Icon, size = "md", className = "" }: IconBadgeProps) {
  const s = SIZES[size]
  return (
    <span
      className={`relative mx-auto flex ${s.wrap} shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-navy via-navy to-navy/80 shadow-md shadow-navy/10 ${className}`}
    >
      <span className="absolute inset-0 rounded-full ring-1 ring-gold/40" />
      <Icon className={`${s.icon} text-gold`} strokeWidth={1.75} />
    </span>
  )
}
