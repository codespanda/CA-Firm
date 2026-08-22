import { useState } from "react"
import { Link, useLocation } from "react-router-dom"
import { Menu, X, CalendarCheck } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Logo } from "@/components/Logo"

const NAV_LINKS = [
  { label: "Home", to: "/" },
  { label: "About Us", to: "/#about" },
  { label: "Services", to: "/#services" },
  { label: "Industries", to: "/#industries" },
  { label: "Resources", to: "/#resources" },
  { label: "Careers", to: "/careers" },
  { label: "Contact", to: "/contact" },
]

export function Header() {
  const [open, setOpen] = useState(false)
  const { pathname, hash } = useLocation()

  const isActive = (to: string) => {
    const [toPath, toHash] = to.split("#")
    if (toHash) return pathname === "/" && hash === `#${toHash}`
    return pathname === toPath
  }

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/80">
      <div className="mx-auto flex h-20 max-w-[1440px] items-center justify-between px-4 sm:px-6 lg:px-10">
        {/* Logo */}
        <Link to="/" className="shrink-0">
          <Logo hideTextOnMobile />
        </Link>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-7 xl:flex">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.label}
              to={link.to}
              className={`text-sm font-medium tracking-wide transition-colors hover:text-gold ${
                isActive(link.to) ? "text-gold border-b-2 border-gold pb-1" : "text-navy/90"
              }`}
            >
              {link.label.toUpperCase()}
            </Link>
          ))}
        </nav>

        <div className="hidden xl:block">
          <Button asChild className="bg-navy hover:bg-navy/90 text-white rounded-sm px-5">
            <Link to="/contact">
              <CalendarCheck className="size-4" />
              Book Consultation
            </Link>
          </Button>
        </div>

        {/* Mobile toggle */}
        <button
          className="xl:hidden text-navy"
          aria-label="Toggle menu"
          onClick={() => setOpen((o) => !o)}
        >
          {open ? <X className="size-7" /> : <Menu className="size-7" />}
        </button>
      </div>

      {/* Mobile nav */}
      {open && (
        <div className="xl:hidden border-t border-border bg-background px-4 pb-6 pt-2">
          <nav className="flex flex-col gap-1">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.label}
                to={link.to}
                onClick={() => setOpen(false)}
                className="rounded-sm px-2 py-3 text-sm font-medium text-navy hover:bg-secondary"
              >
                {link.label}
              </Link>
            ))}
          </nav>
          <Button asChild className="mt-4 w-full bg-navy hover:bg-navy/90 text-white rounded-sm">
            <Link to="/contact" onClick={() => setOpen(false)}>
              <CalendarCheck className="size-4" />
              Book Consultation
            </Link>
          </Button>
        </div>
      )}
    </header>
  )
}
