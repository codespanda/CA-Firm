import {
  Building2,
  Factory,
  ShoppingCart,
  Users2,
  HeartPulse,
  GraduationCap,
  Sprout,
  HandHeart,
} from "lucide-react"
import { IconBadge } from "@/components/IconBadge"

const INDUSTRIES = [
  { icon: Building2, label: "Real Estate" },
  { icon: Factory, label: "Manufacturing" },
  { icon: ShoppingCart, label: "Retail & e-commerce" },
  { icon: Users2, label: "IT & Consulting" },
  { icon: HeartPulse, label: "Healthcare" },
  { icon: GraduationCap, label: "Education" },
  { icon: Sprout, label: "Startups" },
  { icon: HandHeart, label: "Non-Profit" },
]

export function Industries() {
  return (
    <section id="industries" className="bg-background">
      <div className="mx-auto max-w-[1440px] px-4 py-16 sm:px-6 lg:px-10 lg:py-20">
        <div className="text-center">
          <p className="mb-2 flex items-center justify-center gap-2 text-xs font-semibold tracking-[0.2em] text-gold">
            <span className="inline-block h-px w-6 bg-gold" /> INDUSTRIES WE SERVE
          </p>
          <h2 className="font-serif text-3xl font-semibold text-navy sm:text-4xl">
            Specialized Support for Every Industry
          </h2>
        </div>

        <div className="mt-12 grid grid-cols-2 gap-8 sm:grid-cols-4 lg:grid-cols-8">
          {INDUSTRIES.map(({ icon: Icon, label }) => (
            <div key={label} className="group flex flex-col items-center gap-3 text-center">
              <div className="transition-transform group-hover:scale-105">
                <IconBadge icon={Icon} size="sm" />
              </div>
              <span className="text-xs font-medium text-navy/80">{label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
