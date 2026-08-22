import { useState } from "react"
import type { FormEvent, ReactNode } from "react"
import { MapPin, Phone, Mail, Clock3, Send, CheckCircle2 } from "lucide-react"
import type { LucideIcon } from "lucide-react"
import { PageHero } from "@/components/PageHero"
import { IconBadge } from "@/components/IconBadge"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

const MASKED_PHONE = "+91 xxxxxxxx23"

const CONTACT_CARDS: { icon: LucideIcon; title: string; content: ReactNode }[] = [
  {
    icon: MapPin,
    title: "Visit Us",
    content: "123, Business Park, City Center, New Delhi – 110001",
  },
  {
    icon: Phone,
    title: "Call Us",
    content: MASKED_PHONE,
  },
  {
    icon: Mail,
    title: "Email Us",
    content: (
      <a href="mailto:info@yourcafirm.com" className="hover:text-gold">
        info@yourcafirm.com
      </a>
    ),
  },
  {
    icon: Clock3,
    title: "Working Hours",
    content: "Mon – Sat: 10:00 AM – 7:00 PM",
  },
]

const SUBJECTS = ["General Inquiry", "Tax & Compliance", "Business Advisory", "Audit & Assurance", "Careers"]

const FAQS = [
  {
    q: "How quickly can I get a consultation?",
    a: "Most consultations are scheduled within 1–2 business days of your inquiry. Urgent compliance matters are prioritized same-day where possible.",
  },
  {
    q: "Do you work with clients outside New Delhi?",
    a: "Yes — we support clients across India through virtual consultations, secure document sharing and regular video check-ins.",
  },
  {
    q: "What documents should I bring to a first meeting?",
    a: "PAN, prior year filings, and a summary of your business or financial goals are a great starting point. We'll share a detailed checklist after booking.",
  },
  {
    q: "Can you help with both personal and business finances?",
    a: "Absolutely. We serve individuals, startups and established businesses across accounting, tax, audit and advisory services.",
  },
]

export function Contact() {
  const [submitted, setSubmitted] = useState(false)

  function handleSubmit(e: FormEvent) {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <>
      <PageHero
        eyebrow="Contact Us"
        title="Let's Start a Conversation"
        subtitle="Have a question about your finances or ready to book a consultation? Reach out — our team responds within one business day."
      />

      {/* Contact info cards */}
      <section className="bg-background">
        <div className="mx-auto max-w-[1440px] px-4 py-16 sm:px-6 lg:px-10 lg:py-20">
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {CONTACT_CARDS.map(({ icon: Icon, title, content }) => (
              <div
                key={title}
                className="rounded-md border border-border p-6 text-center transition-all hover:-translate-y-1 hover:shadow-lg"
              >
                <IconBadge icon={Icon} className="mb-4" />
                <h3 className="text-base font-semibold text-navy">{title}</h3>
                <div className="mt-2 text-sm text-muted-foreground">{content}</div>
              </div>
            ))}
          </div>

          {/* Form + map */}
          <div className="mt-14 grid grid-cols-1 gap-10 lg:grid-cols-5">
            <div className="lg:col-span-3">
              <p className="mb-2 flex items-center gap-2 text-xs font-semibold tracking-[0.2em] text-gold">
                <span className="inline-block h-px w-6 bg-gold" /> SEND A MESSAGE
              </p>
              <h2 className="font-serif text-2xl font-semibold text-navy sm:text-3xl">
                We&apos;d Love to Hear From You
              </h2>

              {submitted ? (
                <div className="mt-6 flex items-center gap-3 rounded-md border border-gold/30 bg-gold/10 p-6">
                  <CheckCircle2 className="size-6 shrink-0 text-gold" />
                  <div>
                    <p className="font-semibold text-navy">Message sent!</p>
                    <p className="text-sm text-muted-foreground">
                      Thanks for reaching out — our team will get back to you within one business
                      day.
                    </p>
                  </div>
                </div>
              ) : (
                <form className="mt-6 flex flex-col gap-4" onSubmit={handleSubmit}>
                  <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                    <div className="flex flex-col gap-1.5">
                      <label htmlFor="name" className="text-xs font-medium text-navy">
                        Full Name
                      </label>
                      <Input id="name" required placeholder="Your name" className="rounded-sm" />
                    </div>
                    <div className="flex flex-col gap-1.5">
                      <label htmlFor="email" className="text-xs font-medium text-navy">
                        Email Address
                      </label>
                      <Input
                        id="email"
                        type="email"
                        required
                        placeholder="you@example.com"
                        className="rounded-sm"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                    <div className="flex flex-col gap-1.5">
                      <label htmlFor="phone" className="text-xs font-medium text-navy">
                        Phone Number
                      </label>
                      <Input id="phone" type="tel" placeholder="+91 00000 00000" className="rounded-sm" />
                    </div>
                    <div className="flex flex-col gap-1.5">
                      <label htmlFor="subject" className="text-xs font-medium text-navy">
                        Subject
                      </label>
                      <select
                        id="subject"
                        required
                        defaultValue=""
                        className="h-9 rounded-sm border border-border bg-background px-3 text-sm text-navy outline-none focus-visible:ring-2 focus-visible:ring-navy/30"
                      >
                        <option value="" disabled>
                          Select a topic
                        </option>
                        {SUBJECTS.map((s) => (
                          <option key={s} value={s}>
                            {s}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="message" className="text-xs font-medium text-navy">
                      Message
                    </label>
                    <textarea
                      id="message"
                      required
                      rows={5}
                      placeholder="Tell us a bit about what you need help with..."
                      className="resize-none rounded-sm border border-border bg-background px-3 py-2 text-sm outline-none focus-visible:ring-2 focus-visible:ring-navy/30"
                    />
                  </div>

                  <Button type="submit" className="self-start rounded-sm bg-navy px-6 hover:bg-navy/90">
                    Send Message <Send className="size-4" />
                  </Button>
                </form>
              )}
            </div>

            {/* Map */}
            <div className="lg:col-span-2">
              <p className="mb-2 flex items-center gap-2 text-xs font-semibold tracking-[0.2em] text-gold">
                <span className="inline-block h-px w-6 bg-gold" /> FIND US
              </p>
              <h2 className="font-serif text-2xl font-semibold text-navy sm:text-3xl">Our Office</h2>
              <div
                className="relative mt-6 flex h-64 items-center justify-center overflow-hidden rounded-md border border-border bg-[linear-gradient(0deg,transparent_24%,var(--border)_25%,var(--border)_26%,transparent_27%,transparent_74%,var(--border)_75%,var(--border)_76%,transparent_77%,transparent),linear-gradient(90deg,transparent_24%,var(--border)_25%,var(--border)_26%,transparent_27%,transparent_74%,var(--border)_75%,var(--border)_76%,transparent_77%,transparent)] bg-[length:40px_40px] sm:h-80 lg:h-[calc(100%-2.5rem)]"
              >
                <div className="flex flex-col items-center gap-2 rounded-md bg-background/90 px-6 py-4 text-center shadow-md backdrop-blur">
                  <IconBadge icon={MapPin} size="sm" />
                  <p className="text-sm font-semibold text-navy">Your CA Firm</p>
                  <p className="text-xs text-muted-foreground">
                    123, Business Park, City Center
                    <br />
                    New Delhi – 110001
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-muted">
        <div className="mx-auto max-w-3xl px-4 py-16 sm:px-6 lg:px-10 lg:py-20">
          <div className="text-center">
            <p className="mb-2 flex items-center justify-center gap-2 text-xs font-semibold tracking-[0.2em] text-gold">
              <span className="inline-block h-px w-6 bg-gold" /> FAQ
            </p>
            <h2 className="font-serif text-3xl font-semibold text-navy sm:text-4xl">
              Common Questions
            </h2>
          </div>

          <Accordion type="single" collapsible className="mt-10 w-full">
            {FAQS.map((faq, i) => (
              <AccordionItem key={faq.q} value={`item-${i}`} className="border-border">
                <AccordionTrigger className="text-left text-sm font-semibold text-navy hover:text-gold hover:no-underline sm:text-base">
                  {faq.q}
                </AccordionTrigger>
                <AccordionContent className="text-sm text-muted-foreground">{faq.a}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>
    </>
  )
}
