import {
  Calculator,
  FileText,
  Handshake,
  TrendingUp,
  UserCheck,
  Landmark,
  ArrowRight,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { IconBadge } from "@/components/IconBadge"

const SERVICES = [
  {
    icon: Calculator,
    title: "Accounting & Bookkeeping",
    desc: "Accurate records, better decisions, stronger business.",
  },
  {
    icon: FileText,
    title: "Tax Planning & Compliance",
    desc: "Smart tax strategies to save more and stay compliant.",
  },
  {
    icon: Handshake,
    title: "Business Advisory",
    desc: "Actionable insights to accelerate your business growth.",
  },
  {
    icon: TrendingUp,
    title: "GST & Indirect Taxation",
    desc: "End-to-end GST compliance and consulting.",
  },
  {
    icon: UserCheck,
    title: "Audit & Assurance",
    desc: "Reliable audits, transparent assurance.",
  },
  {
    icon: Landmark,
    title: "Startup & Registration",
    desc: "We help you start strong and stay compliant.",
  },
]

export function Services() {
  return (
    <section id="services" className="bg-background">
      <div className="mx-auto max-w-[1440px] px-4 py-16 sm:px-6 lg:px-10 lg:py-20">
        <div className="text-center">
          <p className="mb-2 flex items-center justify-center gap-2 text-xs font-semibold tracking-[0.2em] text-gold">
            <span className="inline-block h-px w-6 bg-gold" /> OUR SERVICES
          </p>
          <h2 className="font-serif text-3xl font-semibold text-navy sm:text-4xl">
            Comprehensive Solutions for Your Financial Needs
          </h2>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6">
          {SERVICES.map(({ icon: Icon, title, desc }) => (
            <div
              key={title}
              className="group rounded-md border border-border p-6 text-center transition-all hover:-translate-y-1 hover:shadow-lg"
            >
              <IconBadge icon={Icon} className="mb-4 transition-transform group-hover:scale-105" />
              <h3 className="text-base font-semibold text-navy">{title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{desc}</p>
              <span className="mx-auto mt-4 block h-0.5 w-8 bg-gold/60 transition-all group-hover:w-12" />
            </div>
          ))}
        </div>

        <div className="mt-10 text-center">
          <Button className="rounded-sm bg-navy px-6 hover:bg-navy/90">
            View All Services <ArrowRight className="size-4" />
          </Button>
        </div>
      </div>
    </section>
  )
}
