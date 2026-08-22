import { useState } from "react"
import {
  Rocket,
  Users,
  GraduationCap,
  Scale,
  HeartPulse,
  Palmtree,
  BookOpen,
  Clock3,
  Trophy,
  PartyPopper,
  MapPin,
  Briefcase,
  ArrowRight,
  Send,
  CheckCircle2,
} from "lucide-react"
import type { LucideIcon } from "lucide-react"
import { PageHero } from "@/components/PageHero"
import { IconBadge } from "@/components/IconBadge"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

const VALUES: { icon: LucideIcon; title: string; desc: string }[] = [
  {
    icon: Rocket,
    title: "Growth Mindset",
    desc: "We invest in your development with mentorship and real ownership from day one.",
  },
  {
    icon: Users,
    title: "Collaborative Culture",
    desc: "Flat teams where your ideas reach partners directly — no bureaucracy.",
  },
  {
    icon: GraduationCap,
    title: "Continuous Learning",
    desc: "Certifications, workshops and study leave to keep your expertise sharp.",
  },
  {
    icon: Scale,
    title: "Work-Life Balance",
    desc: "Predictable hours during busy season and genuine flexibility the rest of the year.",
  },
]

const BENEFITS: { icon: LucideIcon; label: string }[] = [
  { icon: HeartPulse, label: "Health Insurance" },
  { icon: Palmtree, label: "Paid Time Off" },
  { icon: BookOpen, label: "Learning Budget" },
  { icon: Clock3, label: "Flexible Hours" },
  { icon: Trophy, label: "Performance Bonus" },
  { icon: PartyPopper, label: "Team Outings" },
]

const OPEN_ROLES = [
  {
    title: "Senior Tax Consultant",
    dept: "Taxation",
    type: "Full-time",
    location: "New Delhi",
  },
  {
    title: "Audit & Assurance Associate",
    dept: "Audit",
    type: "Full-time",
    location: "New Delhi",
  },
  {
    title: "GST Compliance Executive",
    dept: "Indirect Tax",
    type: "Full-time",
    location: "Hybrid",
  },
  {
    title: "Business Advisory Analyst",
    dept: "Advisory",
    type: "Full-time",
    location: "New Delhi",
  },
  {
    title: "Article Trainee (CA Inter)",
    dept: "Articleship",
    type: "Internship",
    location: "New Delhi",
  },
]

export function Careers() {
  const [sent, setSent] = useState(false)

  return (
    <>
      <PageHero
        eyebrow="Careers"
        title="Build Your Career with Purpose"
        subtitle="Join a team that values expertise, integrity and growth — and help individuals and businesses make smarter financial decisions."
      />

      {/* Why join us */}
      <section id="why-join" className="bg-background">
        <div className="mx-auto max-w-[1440px] px-4 py-16 sm:px-6 lg:px-10 lg:py-20">
          <div className="text-center">
            <p className="mb-2 flex items-center justify-center gap-2 text-xs font-semibold tracking-[0.2em] text-gold">
              <span className="inline-block h-px w-6 bg-gold" /> WHY JOIN US
            </p>
            <h2 className="font-serif text-3xl font-semibold text-navy sm:text-4xl">
              A Firm That Invests in Its People
            </h2>
          </div>

          <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {VALUES.map(({ icon: Icon, title, desc }) => (
              <div
                key={title}
                className="rounded-md border border-border p-6 text-center transition-all hover:-translate-y-1 hover:shadow-lg"
              >
                <IconBadge icon={Icon} className="mb-4" />
                <h3 className="text-base font-semibold text-navy">{title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="bg-muted">
        <div className="mx-auto max-w-[1440px] px-4 py-16 sm:px-6 lg:px-10 lg:py-20">
          <div className="text-center">
            <p className="mb-2 flex items-center justify-center gap-2 text-xs font-semibold tracking-[0.2em] text-gold">
              <span className="inline-block h-px w-6 bg-gold" /> BENEFITS & PERKS
            </p>
            <h2 className="font-serif text-3xl font-semibold text-navy sm:text-4xl">
              What You&apos;ll Get
            </h2>
          </div>

          <div className="mt-12 grid grid-cols-2 gap-5 sm:grid-cols-3 lg:grid-cols-6">
            {BENEFITS.map(({ icon: Icon, label }) => (
              <div
                key={label}
                className="flex flex-col items-center gap-3 rounded-md border border-border bg-background p-5 text-center"
              >
                <IconBadge icon={Icon} size="sm" />
                <span className="text-xs font-medium text-navy/80">{label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Open positions */}
      <section id="open-roles" className="bg-background">
        <div className="mx-auto max-w-[1440px] px-4 py-16 sm:px-6 lg:px-10 lg:py-20">
          <div className="text-center">
            <p className="mb-2 flex items-center justify-center gap-2 text-xs font-semibold tracking-[0.2em] text-gold">
              <span className="inline-block h-px w-6 bg-gold" /> OPEN POSITIONS
            </p>
            <h2 className="font-serif text-3xl font-semibold text-navy sm:text-4xl">
              Current Openings
            </h2>
          </div>

          <div className="mx-auto mt-12 flex max-w-3xl flex-col gap-4">
            {OPEN_ROLES.map((role) => (
              <div
                key={role.title}
                className="flex flex-col gap-4 rounded-md border border-border p-6 transition-shadow hover:shadow-md sm:flex-row sm:items-center sm:justify-between"
              >
                <div>
                  <div className="flex flex-wrap items-center gap-2">
                    <h3 className="text-base font-semibold text-navy">{role.title}</h3>
                    <Badge className="rounded-sm bg-secondary text-navy hover:bg-secondary">
                      {role.dept}
                    </Badge>
                  </div>
                  <div className="mt-2 flex flex-wrap items-center gap-4 text-xs text-muted-foreground">
                    <span className="flex items-center gap-1.5">
                      <Briefcase className="size-3.5 text-gold" /> {role.type}
                    </span>
                    <span className="flex items-center gap-1.5">
                      <MapPin className="size-3.5 text-gold" /> {role.location}
                    </span>
                  </div>
                </div>
                <Button className="shrink-0 rounded-sm bg-navy hover:bg-navy/90 sm:self-auto">
                  Apply Now <ArrowRight className="size-4" />
                </Button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* General application */}
      <section className="bg-muted">
        <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 lg:px-10 lg:py-20">
          <div className="rounded-md border border-border bg-background p-8 text-center">
            <h3 className="font-serif text-xl font-semibold text-navy sm:text-2xl">
              Don&apos;t See a Role That Fits?
            </h3>
            <p className="mx-auto mt-2 max-w-md text-sm text-muted-foreground">
              We&apos;re always looking for talented people. Send us your resume and we&apos;ll
              reach out when a matching role opens up.
            </p>

            {sent ? (
              <div className="mx-auto mt-6 flex max-w-sm items-center justify-center gap-2 rounded-sm border border-gold/30 bg-gold/10 p-4 text-sm text-navy">
                <CheckCircle2 className="size-5 shrink-0 text-gold" />
                Thanks! We&apos;ve received your details.
              </div>
            ) : (
              <form
                className="mx-auto mt-6 flex max-w-sm flex-col gap-3 sm:flex-row"
                onSubmit={(e) => {
                  e.preventDefault()
                  setSent(true)
                }}
              >
                <input
                  type="email"
                  required
                  placeholder="Your email address"
                  className="h-10 flex-1 rounded-sm border border-border bg-background px-3 text-sm outline-none focus-visible:ring-2 focus-visible:ring-navy/30"
                />
                <Button type="submit" className="rounded-sm bg-navy hover:bg-navy/90">
                  Submit <Send className="size-4" />
                </Button>
              </form>
            )}
          </div>
        </div>
      </section>
    </>
  )
}
