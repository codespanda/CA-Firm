import { Target, Gavel, Lightbulb, ShieldCheck, Headset } from "lucide-react"
import type { LucideIcon } from "lucide-react"
import { IconBadge } from "@/components/IconBadge"

const WHY_ITEMS: { icon: LucideIcon; title: string; desc: string }[] = [
  {
    icon: Target,
    title: "Personalized Solutions",
    desc: "Strategies tailored to your specific goals — never one-size-fits-all.",
  },
  {
    icon: Gavel,
    title: "Up-to-Date Expertise",
    desc: "Current knowledge of ever-changing laws & regulations, applied correctly.",
  },
  {
    icon: Lightbulb,
    title: "Proactive Advice",
    desc: "We flag opportunities and risks before they become problems.",
  },
  {
    icon: ShieldCheck,
    title: "Integrity & Trust",
    desc: "Confidentiality and transparency in every engagement, always.",
  },
  {
    icon: Headset,
    title: "Dedicated Support",
    desc: "A responsive team by your side at every step of the way.",
  },
]

export function WhyChooseUs() {
  return (
    <section className="bg-background">
      <div className="mx-auto grid max-w-[1440px] grid-cols-1 items-center gap-12 px-4 py-16 sm:px-6 lg:grid-cols-2 lg:gap-16 lg:px-10 lg:py-20">
        {/* Left: image */}
        <div className="relative">
          <div className="overflow-hidden rounded-lg shadow-xl">
            <img
              src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=1000&auto=format&fit=crop"
              alt="Advisor discussing financial strategy with a client"
              className="h-[320px] w-full object-cover sm:h-[420px] lg:h-[480px]"
            />
          </div>
          <div className="absolute -bottom-6 -right-6 hidden max-w-[220px] rounded-md bg-navy p-5 text-white shadow-2xl sm:block">
            <p className="font-serif text-3xl font-bold text-gold">12+</p>
            <p className="mt-1 text-xs text-white/70">
              Years of trusted, hands-on financial guidance
            </p>
          </div>
        </div>

        {/* Right: heading + list */}
        <div>
          <p className="mb-2 flex items-center gap-2 text-xs font-semibold tracking-[0.2em] text-gold">
            <span className="inline-block h-px w-6 bg-gold" /> WHY CHOOSE US
          </p>
          <h2 className="font-serif text-3xl font-semibold text-navy sm:text-4xl">
            Your Success is Our Priority
          </h2>
          <p className="mt-3 max-w-md text-sm text-muted-foreground">
            Five commitments that shape how we work with every client, every time.
          </p>

          <div className="mt-8 flex flex-col">
            {WHY_ITEMS.map(({ icon: Icon, title, desc }, i) => (
              <div
                key={title}
                className={`grid grid-cols-[2.75rem_1fr] items-start gap-x-4 py-5 ${
                  i !== WHY_ITEMS.length - 1 ? "border-b border-border" : ""
                }`}
              >
                <IconBadge icon={Icon} size="sm" className="!mx-0" />
                <div>
                  <h3 className="text-sm font-semibold text-navy">{title}</h3>
                  <p className="mt-1 text-sm text-muted-foreground">{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
