import { Building2, Cpu, Shirt, Landmark, Sparkles, ShoppingCart } from "lucide-react"
import type { LucideIcon } from "lucide-react"

const CLIENTS: { name: string; icon: LucideIcon; since: string; from: string; to: string }[] = [
  { name: "RM Infra", icon: Building2, since: "Client since 2019", from: "#3b82f6", to: "#1d4ed8" },
  { name: "TechNova", icon: Cpu, since: "Client since 2021", from: "#a855f7", to: "#6d28d9" },
  {
    name: "Urban Threads",
    icon: Shirt,
    since: "Client since 2020",
    from: "#f472b6",
    to: "#db2777",
  },
  {
    name: "FinEdge Capital",
    icon: Landmark,
    since: "Client since 2018",
    from: "#22c55e",
    to: "#15803d",
  },
  { name: "BrightLine", icon: Sparkles, since: "Client since 2022", from: "#f59e0b", to: "#d97706" },
  {
    name: "Coastal Retail",
    icon: ShoppingCart,
    since: "Client since 2020",
    from: "#06b6d4",
    to: "#0e7490",
  },
]

// duplicated once so the marquee track can loop seamlessly at -50%
const TRACK = [...CLIENTS, ...CLIENTS]

export function TrustedBy() {
  return (
    <section className="border-y border-border bg-muted">
      <div className="mx-auto flex max-w-[1440px] flex-col gap-6 px-4 py-10 sm:px-6 lg:flex-row lg:items-center lg:gap-10 lg:px-10">
        <p className="shrink-0 text-xs font-semibold tracking-[0.2em] text-navy/70">
          TRUSTED BY 500+ CLIENTS
        </p>

        <div
          className="marquee-wrap min-w-0 flex-1 overflow-hidden [mask-image:linear-gradient(90deg,transparent,black_8%,black_92%,transparent)]"
        >
          <div className="marquee-track flex w-max items-center gap-12">
            {TRACK.map(({ name, icon: Icon, since, from, to }, i) => (
              <a
                key={`${name}-${i}`}
                href="#testimonials"
                aria-label={`${name} — read client testimonials`}
                className="group flex shrink-0 flex-col items-start gap-0.5"
              >
                <span className="flex items-center gap-3">
                  <span
                    className="flex size-12 items-center justify-center rounded-full shadow-sm transition-transform duration-200 group-hover:scale-110 group-focus-visible:scale-110"
                    style={{ background: `linear-gradient(135deg, ${from}, ${to})` }}
                  >
                    <Icon className="size-6 text-white" strokeWidth={1.75} />
                  </span>
                  <span className="text-xl font-bold tracking-wide text-navy transition-colors group-hover:text-gold">
                    {name}
                  </span>
                </span>
                <span className="max-h-0 overflow-hidden pl-[3.75rem] text-xs text-muted-foreground opacity-0 transition-all duration-200 group-hover:max-h-4 group-hover:opacity-100 group-focus-visible:max-h-4 group-focus-visible:opacity-100">
                  {since}
                </span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
