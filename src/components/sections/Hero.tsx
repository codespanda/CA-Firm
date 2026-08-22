import { Link } from "react-router-dom"
import { ArrowRight, CalendarCheck, ShieldCheck, Clock, Users, FileCheck2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { LogoMark } from "@/components/Logo"

const TRUST_ITEMS = [
  { icon: ShieldCheck, label: "Trusted\nProfessionals" },
  { icon: Clock, label: "Timely\nDelivery" },
  { icon: Users, label: "Client\nFocused" },
  { icon: FileCheck2, label: "Transparent\nPricing" },
]

export function Hero() {
  return (
    <section id="home" className="bg-background">
      <div className="mx-auto grid max-w-[1440px] gap-10 px-4 py-12 sm:px-6 lg:grid-cols-2 lg:items-center lg:px-10 lg:py-16">
        <div>
          <p className="mb-3 flex items-center gap-2 text-xs font-semibold tracking-[0.2em] text-gold">
            <span className="inline-block h-px w-6 bg-gold" /> WELCOME TO YOUR CA FIRM
          </p>
          <h1 className="font-serif text-4xl font-semibold leading-[1.15] text-navy sm:text-5xl lg:text-[52px]">
            Expert Financial Guidance.
            <br />
            Better Decisions.
            <br />
            <span className="text-gold">Stronger Future.</span>
          </h1>
          <p className="mt-5 max-w-lg text-muted-foreground">
            We provide comprehensive financial solutions to individuals, startups and
            businesses to help you grow with confidence and achieve your goals.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <Button asChild size="lg" className="rounded-sm bg-navy px-6 hover:bg-navy/90">
              <a href="#services">
                Our Services <ArrowRight className="size-4" />
              </a>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="rounded-sm border-navy/30 px-6 text-navy hover:bg-secondary"
            >
              <Link to="/contact">
                <CalendarCheck className="size-4" /> Book Consultation
              </Link>
            </Button>
          </div>

          <div className="mt-10 grid grid-cols-2 gap-y-6 sm:grid-cols-4">
            {TRUST_ITEMS.map(({ icon: Icon, label }) => (
              <div key={label} className="flex items-center gap-3">
                <span className="flex size-9 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-navy to-navy/70 shadow-sm">
                  <Icon className="size-4 text-gold" strokeWidth={1.75} />
                </span>
                <span className="whitespace-pre-line text-left text-xs font-medium leading-tight text-navy/80">
                  {label}
                </span>
              </div>
            ))}
          </div>
        </div>

        <div className="relative">
          <div className="overflow-hidden rounded-lg shadow-xl">
            <img
              src="https://images.unsplash.com/photo-1497215728101-856f4ea42174?q=80&w=1200&auto=format&fit=crop"
              alt="Accountant workspace with laptop and financial documents"
              className="h-[320px] w-full object-cover sm:h-[420px] lg:h-[460px]"
            />
          </div>
          <div className="absolute -bottom-6 -right-2 hidden w-44 rotate-2 rounded-md bg-white p-4 text-center shadow-2xl sm:block">
            <LogoMark className="mx-auto size-12" />
            <p className="mt-2 text-[11px] font-semibold tracking-wide text-navy">
              CHARTERED ACCOUNTANT
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
