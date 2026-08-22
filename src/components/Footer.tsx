import { Link } from "react-router-dom"
import { CalendarCheck, MapPin, Phone, Mail, Globe, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Logo } from "@/components/Logo"

const MASKED_PHONE = "+91 xxxxxxxx23"

const SOCIAL_PATHS: Record<string, string> = {
  Facebook:
    "M22 12a10 10 0 1 0-11.56 9.88v-6.99H7.9V12h2.54V9.8c0-2.5 1.49-3.89 3.78-3.89 1.1 0 2.24.2 2.24.2v2.46h-1.26c-1.24 0-1.63.77-1.63 1.56V12h2.78l-.44 2.89h-2.34v6.99A10 10 0 0 0 22 12Z",
  LinkedIn:
    "M6.94 5a2 2 0 1 1-4 0 2 2 0 0 1 4 0ZM3.2 8.4h3.6v12.4H3.2V8.4Zm6.44 0h3.45v1.7h.05c.48-.9 1.66-1.86 3.42-1.86 3.66 0 4.34 2.4 4.34 5.53v6.03h-3.6v-5.35c0-1.28-.02-2.92-1.78-2.92-1.78 0-2.06 1.4-2.06 2.83v5.44H9.64V8.4Z",
  Instagram:
    "M12 2c2.72 0 3.06.01 4.12.06 1.06.05 1.79.22 2.43.47a4.9 4.9 0 0 1 1.77 1.15 4.9 4.9 0 0 1 1.15 1.77c.25.64.42 1.37.47 2.43.05 1.06.06 1.4.06 4.12s-.01 3.06-.06 4.12c-.05 1.06-.22 1.79-.47 2.43a4.9 4.9 0 0 1-1.15 1.77 4.9 4.9 0 0 1-1.77 1.15c-.64.25-1.37.42-2.43.47-1.06.05-1.4.06-4.12.06s-3.06-.01-4.12-.06c-1.06-.05-1.79-.22-2.43-.47a4.9 4.9 0 0 1-1.77-1.15 4.9 4.9 0 0 1-1.15-1.77c-.25-.64-.42-1.37-.47-2.43C2.01 15.06 2 14.72 2 12s.01-3.06.06-4.12c.05-1.06.22-1.79.47-2.43a4.9 4.9 0 0 1 1.15-1.77A4.9 4.9 0 0 1 5.45.53C6.09.28 6.82.11 7.88.06 8.94.01 9.28 0 12 0Zm0 5a5 5 0 1 0 0 10 5 5 0 0 0 0-10Zm0 8.2a3.2 3.2 0 1 1 0-6.4 3.2 3.2 0 0 1 0 6.4Zm5.2-8.4a1.17 1.17 0 1 1 0-2.33 1.17 1.17 0 0 1 0 2.33Z",
  YouTube:
    "M23.5 6.19a3.02 3.02 0 0 0-2.12-2.14C19.5 3.5 12 3.5 12 3.5s-7.5 0-9.38.55A3.02 3.02 0 0 0 .5 6.19 31.6 31.6 0 0 0 0 12a31.6 31.6 0 0 0 .5 5.81 3.02 3.02 0 0 0 2.12 2.14C4.5 20.5 12 20.5 12 20.5s7.5 0 9.38-.55a3.02 3.02 0 0 0 2.12-2.14A31.6 31.6 0 0 0 24 12a31.6 31.6 0 0 0-.5-5.81ZM9.6 15.6V8.4l6.32 3.6-6.32 3.6Z",
}

function SocialIcon({ name }: { name: keyof typeof SOCIAL_PATHS }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="size-4">
      <path d={SOCIAL_PATHS[name]} />
    </svg>
  )
}

const QUICK_LINKS = [
  { label: "Home", to: "/" },
  { label: "About Us", to: "/#about" },
  { label: "Services", to: "/#services" },
  { label: "Industries", to: "/#industries" },
  { label: "Resources", to: "/#resources" },
  { label: "Careers", to: "/careers" },
  { label: "Contact", to: "/contact" },
]
const SERVICES = [
  "Accounting & Bookkeeping",
  "Tax Planning & Compliance",
  "GST & Indirect Taxation",
  "Audit & Assurance",
  "Business Advisory",
  "Startup & Registration",
]

export function Footer() {
  return (
    <footer className="bg-navy text-white">
      {/* CTA band */}
      <div className="border-b border-white/10">
        <div className="mx-auto flex max-w-[1440px] flex-col items-center justify-between gap-6 px-4 py-10 sm:px-6 lg:flex-row lg:px-10">
          <div className="flex items-center gap-4 text-center lg:text-left">
            <CalendarCheck className="hidden size-10 shrink-0 text-gold sm:block" strokeWidth={1.25} />
            <div>
              <h3 className="font-serif text-xl font-semibold sm:text-2xl">
                Let&apos;s Build a Stronger Financial Future Together
              </h3>
              <p className="mt-1 text-sm text-white/70">
                Schedule a consultation with our experts today.
              </p>
            </div>
          </div>
          <Button asChild className="shrink-0 rounded-sm bg-gold px-6 text-navy hover:bg-gold/90">
            <Link to="/contact">
              Book Consultation <ArrowRight className="size-4" />
            </Link>
          </Button>
        </div>
      </div>

      {/* Main footer */}
      <div className="mx-auto grid max-w-[1440px] grid-cols-1 gap-10 px-4 py-14 sm:px-6 sm:grid-cols-2 lg:grid-cols-4 lg:px-10">
        <div>
          <Logo variant="light" />
          <p className="mt-4 text-sm text-white/70">
            Your trusted partner in achieving financial clarity and business success.
          </p>
          <div className="mt-5 flex gap-3">
            {(Object.keys(SOCIAL_PATHS) as Array<keyof typeof SOCIAL_PATHS>).map((name) => (
              <a
                key={name}
                href="#"
                className="flex size-8 items-center justify-center rounded-full bg-white/10 transition-colors hover:bg-gold hover:text-navy"
                aria-label={name}
              >
                <SocialIcon name={name} />
              </a>
            ))}
          </div>
        </div>

        <div>
          <h4 className="text-sm font-semibold tracking-wide text-gold">QUICK LINKS</h4>
          <ul className="mt-4 flex flex-col gap-3">
            {QUICK_LINKS.map((link) => (
              <li key={link.label}>
                <Link to={link.to} className="text-sm text-white/70 hover:text-white">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-sm font-semibold tracking-wide text-gold">OUR SERVICES</h4>
          <ul className="mt-4 flex flex-col gap-3">
            {SERVICES.map((link) => (
              <li key={link}>
                <Link to="/#services" className="text-sm text-white/70 hover:text-white">
                  {link}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-sm font-semibold tracking-wide text-gold">CONTACT US</h4>
          <ul className="mt-4 flex flex-col gap-4 text-sm text-white/70">
            <li className="flex items-start gap-3">
              <MapPin className="mt-0.5 size-4 shrink-0 text-gold" />
              123, Business Park, City Center, New Delhi &ndash; 110001
            </li>
            <li className="flex items-center gap-3">
              <Phone className="size-4 shrink-0 text-gold" />
              {MASKED_PHONE}
            </li>
            <li className="flex items-center gap-3">
              <Mail className="size-4 shrink-0 text-gold" />
              info@yourcafirm.com
            </li>
            <li className="flex items-center gap-3">
              <Globe className="size-4 shrink-0 text-gold" />
              www.yourcafirm.com
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-[1440px] flex-col items-center justify-between gap-3 px-4 py-6 text-xs text-white/60 sm:flex-row sm:px-6 lg:px-10">
          <p>&copy; 2026 CodesPanda. All Rights Reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white">Privacy Policy</a>
            <a href="#" className="hover:text-white">Terms & Conditions</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
