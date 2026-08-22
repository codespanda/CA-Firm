import { useState } from "react"
import type { FormEvent } from "react"
import { Mail, Send, CheckCircle2, Check } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"

const NEWSLETTER_PERKS = ["Monthly tax & compliance tips", "No spam, unsubscribe anytime"]

export function Newsletter() {
  const [email, setEmail] = useState("")
  const [submitted, setSubmitted] = useState(false)

  function handleSubscribe(e: FormEvent) {
    e.preventDefault()
    if (!email) return
    setSubmitted(true)
  }

  return (
    <section className="bg-background">
      <div className="mx-auto max-w-[1440px] px-4 py-16 sm:px-6 lg:px-10 lg:py-20">
        <div className="relative mx-auto flex max-w-3xl flex-col items-center overflow-hidden rounded-md bg-gradient-to-br from-navy via-navy to-[#1a2f5c] p-8 text-center text-white shadow-xl sm:p-12">
          {/* decorative glow */}
          <span className="pointer-events-none absolute -right-10 -top-10 size-40 rounded-full bg-gold/10 blur-2xl" />
          <span className="pointer-events-none absolute -bottom-14 -left-10 size-40 rounded-full bg-gold/10 blur-2xl" />

          <div className="relative flex size-14 items-center justify-center rounded-full bg-gold/15 ring-1 ring-gold/30">
            <Mail className="size-6 text-gold" strokeWidth={1.75} />
          </div>

          <p className="relative mt-5 text-xs font-semibold tracking-[0.2em] text-gold">
            NEWSLETTER
          </p>
          <h2 className="relative mt-2 max-w-md font-serif text-2xl font-semibold sm:text-3xl">
            Subscribe to our newsletter for the latest updates
          </h2>

          <ul className="relative mt-5 flex flex-wrap items-center justify-center gap-x-6 gap-y-2">
            {NEWSLETTER_PERKS.map((perk) => (
              <li key={perk} className="flex items-center gap-2 text-sm text-white/70">
                <Check className="size-3.5 shrink-0 text-gold" strokeWidth={3} />
                {perk}
              </li>
            ))}
          </ul>

          {submitted ? (
            <div className="relative mt-8 flex max-w-sm items-center gap-3 rounded-sm border border-gold/30 bg-gold/10 p-4">
              <CheckCircle2 className="size-5 shrink-0 text-gold" />
              <p className="text-sm text-white">
                You&apos;re subscribed! Watch your inbox for updates.
              </p>
            </div>
          ) : (
            <form
              className="relative mt-8 flex w-full max-w-sm flex-col gap-3 sm:flex-row"
              onSubmit={handleSubscribe}
            >
              <Input
                type="email"
                required
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="rounded-sm border-white/20 bg-white/10 text-white placeholder:text-white/50 focus-visible:ring-gold/50"
              />
              <Button
                type="submit"
                className="shrink-0 rounded-sm bg-gold text-navy hover:bg-gold/90"
              >
                Subscribe <Send className="size-4" />
              </Button>
            </form>
          )}
        </div>
      </div>
    </section>
  )
}
