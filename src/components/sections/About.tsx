import { Users, Briefcase, FileCheck, Award } from "lucide-react"
import { IconBadge } from "@/components/IconBadge"

const STATS = [
  { icon: Users, value: "500+", label: "Happy Clients" },
  { icon: Briefcase, value: "12+", label: "Years of Experience" },
  { icon: FileCheck, value: "1000+", label: "Projects Completed" },
  { icon: Award, value: "98%", label: "Client Satisfaction" },
]

export function About() {
  return (
    <section id="about" className="bg-muted">
      <div className="mx-auto grid max-w-[1440px] grid-cols-1 lg:grid-cols-2">
        <div className="order-2 flex flex-col justify-center px-4 py-12 sm:px-10 lg:order-1 lg:px-16 lg:py-0">
          <p className="mb-2 flex items-center gap-2 text-xs font-semibold tracking-[0.2em] text-gold">
            <span className="inline-block h-px w-6 bg-gold" /> ABOUT US
          </p>
          <h2 className="font-serif text-3xl font-semibold text-navy sm:text-4xl">
            Experience. Commitment. Value.
          </h2>
          <p className="mt-4 max-w-md text-muted-foreground">
            We combine deep financial expertise with a personal approach to build
            long-term relationships based on trust and results.
          </p>

          <div className="mt-10 grid grid-cols-2 gap-y-8 sm:grid-cols-4 sm:divide-x sm:divide-border">
            {STATS.map(({ icon: Icon, value, label }) => (
              <div key={label} className="flex flex-col items-center gap-2 px-2 text-center sm:first:pl-0">
                <IconBadge icon={Icon} size="sm" />
                <span className="font-serif text-2xl font-bold text-navy">{value}</span>
                <span className="text-xs text-muted-foreground">{label}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="order-1 h-64 sm:h-80 lg:order-2 lg:h-auto">
          <img
            src="https://images.unsplash.com/photo-1554224155-6726b3ff858f?q=80&w=1200&auto=format&fit=crop"
            alt="Accountant reviewing financial charts"
            className="h-full w-full object-cover"
          />
        </div>
      </div>
    </section>
  )
}
