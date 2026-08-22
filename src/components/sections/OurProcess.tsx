import { MessageSquare, ClipboardList, Target, LineChart } from "lucide-react"
import { IconBadge } from "@/components/IconBadge"

const PROCESS = [
  { icon: MessageSquare, step: "01", title: "Understand", desc: "We listen to your needs and goals." },
  { icon: ClipboardList, step: "02", title: "Analyze", desc: "We analyze and create a custom strategy." },
  { icon: Target, step: "03", title: "Implement", desc: "We execute the plan with precision." },
  { icon: LineChart, step: "04", title: "Deliver Results", desc: "We help you achieve sustainable growth." },
]

export function OurProcess() {
  return (
    <section className="bg-background">
      <div className="mx-auto max-w-[1440px] px-4 py-16 sm:px-6 lg:px-10 lg:py-20">
        <div className="text-center">
          <p className="mb-2 flex items-center justify-center gap-2 text-xs font-semibold tracking-[0.2em] text-gold">
            <span className="inline-block h-px w-6 bg-gold" /> OUR PROCESS
          </p>
          <h2 className="font-serif text-3xl font-semibold text-navy sm:text-4xl">
            Simple Steps. Meaningful Results.
          </h2>
        </div>

        <div className="mt-12 grid grid-cols-2 gap-x-4 gap-y-10 sm:grid-cols-4">
          {PROCESS.map(({ icon: Icon, step, title, desc }, i) => (
            <div key={step} className="relative flex flex-col items-center text-center">
              {i < PROCESS.length - 1 && (
                <span className="absolute left-[calc(50%+32px)] top-7 hidden h-px w-[calc(100%-40px)] border-t border-dashed border-border sm:block" />
              )}
              <div className="relative">
                <IconBadge icon={Icon} size="sm" />
                <span className="absolute -right-1.5 -top-1.5 flex size-5 items-center justify-center rounded-full border-2 border-background bg-gold text-[10px] font-bold text-navy">
                  {i + 1}
                </span>
              </div>
              <h3 className="mt-3 text-sm font-semibold text-navy">{title}</h3>
              <p className="mt-1 text-xs text-muted-foreground">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
