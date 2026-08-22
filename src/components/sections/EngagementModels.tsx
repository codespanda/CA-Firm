import { FileSignature, Repeat, Briefcase, FolderKanban } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { IconBadge } from "@/components/IconBadge"

const MODELS = [
  {
    icon: FileSignature,
    title: "One-Time Consultation",
    desc: "Get expert advice for specific needs.",
  },
  {
    icon: Repeat,
    title: "Monthly Compliance",
    desc: "Stay compliant with recurring support.",
  },
  {
    icon: Briefcase,
    title: "Retainer Services",
    desc: "Ongoing advisory and strategic support.",
    popular: true,
  },
  {
    icon: FolderKanban,
    title: "Project-Based",
    desc: "Specialized support for specific projects.",
  },
]

export function EngagementModels() {
  return (
    <section className="bg-muted">
      <div className="mx-auto max-w-[1440px] px-4 py-16 sm:px-6 lg:px-10 lg:py-20">
        <div className="text-center">
          <p className="mb-2 flex items-center justify-center gap-2 text-xs font-semibold tracking-[0.2em] text-gold">
            <span className="inline-block h-px w-6 bg-gold" /> FLEXIBLE ENGAGEMENT MODELS
          </p>
          <h2 className="font-serif text-3xl font-semibold text-navy sm:text-4xl">
            Solutions that Fit Your Needs
          </h2>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {MODELS.map(({ icon: Icon, title, desc, popular }) => (
            <div
              key={title}
              className="relative rounded-md border border-border bg-background p-6 text-center"
            >
              {popular && (
                <Badge className="absolute -right-2 -top-2 rounded-sm bg-gold text-navy hover:bg-gold">
                  POPULAR
                </Badge>
              )}
              <IconBadge icon={Icon} className="mb-4" />
              <h3 className="text-base font-semibold text-navy">{title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{desc}</p>
              <span className="mx-auto mt-4 block h-0.5 w-8 bg-gold/60" />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
