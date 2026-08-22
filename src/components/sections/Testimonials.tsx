import { useState } from "react"
import { Star, Building2, Cpu, Shirt, Landmark, Sparkles } from "lucide-react"
import type { LucideIcon } from "lucide-react"

const TESTIMONIALS = [
  {
    quote:
      "The team is professional, responsive and delivers beyond expectations. Their advice has been invaluable for our growth.",
    name: "Rajat Malhotra",
    role: "Managing Director, RM Infra",
  },
  {
    quote:
      "Working with this firm transformed how we handle compliance. Clear communication and always on time.",
    name: "Ananya Kapoor",
    role: "Founder, TechNova Solutions",
  },
  {
    quote:
      "Their strategic guidance helped us scale confidently while staying fully compliant with every regulation.",
    name: "Vikram Shah",
    role: "CEO, Urban Threads",
  },
]

const CLIENT_LOGOS: { name: string; icon: LucideIcon; from: string; to: string }[] = [
  { name: "RM Infra", icon: Building2, from: "#3b82f6", to: "#1d4ed8" },
  { name: "TechNova", icon: Cpu, from: "#a855f7", to: "#6d28d9" },
  { name: "Urban Threads", icon: Shirt, from: "#f472b6", to: "#db2777" },
  { name: "FinEdge Capital", icon: Landmark, from: "#22c55e", to: "#15803d" },
  { name: "BrightLine", icon: Sparkles, from: "#f59e0b", to: "#d97706" },
]

export function Testimonials() {
  const [active, setActive] = useState(0)

  return (
    <section id="testimonials" className="bg-background">
      <div className="mx-auto max-w-[1440px] px-4 py-16 sm:px-6 lg:px-10 lg:py-20">
        <div className="text-center">
          <p className="mb-2 flex items-center justify-center gap-2 text-xs font-semibold tracking-[0.2em] text-gold">
            <span className="inline-block h-px w-6 bg-gold" /> WHAT OUR CLIENTS SAY
          </p>
          <h2 className="font-serif text-3xl font-semibold text-navy sm:text-4xl">
            Trusted by Individuals & Businesses
          </h2>
        </div>

        <div className="mx-auto mt-12 max-w-3xl">
          <div className="rounded-md border border-border p-8 text-center">
            <span className="font-serif text-4xl text-gold">&ldquo;</span>
            <div className="mb-4 flex justify-center gap-1">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} className="size-4 fill-gold text-gold" />
              ))}
            </div>
            <p className="text-lg leading-relaxed text-navy/90">{TESTIMONIALS[active].quote}</p>
            <div className="mt-6">
              <p className="font-semibold text-navy">{TESTIMONIALS[active].name}</p>
              <p className="text-sm text-muted-foreground">{TESTIMONIALS[active].role}</p>
            </div>
          </div>

          <div className="mt-6 flex flex-wrap items-center justify-center gap-x-6 gap-y-4">
            {CLIENT_LOGOS.map(({ name, icon: Icon, from, to }) => (
              <span
                key={name}
                className="flex items-center gap-2 transition-transform hover:-translate-y-0.5"
              >
                <span
                  className="flex size-8 items-center justify-center rounded-full shadow-sm"
                  style={{ background: `linear-gradient(135deg, ${from}, ${to})` }}
                >
                  <Icon className="size-4 text-white" strokeWidth={1.75} />
                </span>
                <span className="text-sm font-bold tracking-wide text-navy">{name}</span>
              </span>
            ))}
          </div>

          <div className="mt-6 flex justify-center gap-2">
            {TESTIMONIALS.map((_, i) => (
              <button
                key={i}
                aria-label={`Show testimonial ${i + 1}`}
                onClick={() => setActive(i)}
                className={`size-2 rounded-full transition-all ${
                  active === i ? "w-6 bg-navy" : "bg-border"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
