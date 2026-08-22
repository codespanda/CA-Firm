type PageHeroProps = {
  eyebrow: string
  title: string
  subtitle?: string
}

/** Shared banner used at the top of interior pages (Careers, Contact, ...). */
export function PageHero({ eyebrow, title, subtitle }: PageHeroProps) {
  return (
    <section className="relative overflow-hidden bg-navy text-white">
      <span className="pointer-events-none absolute -right-24 -top-24 size-72 rounded-full bg-gold/10 blur-3xl" />
      <span className="pointer-events-none absolute -bottom-24 -left-24 size-72 rounded-full bg-gold/10 blur-3xl" />

      <div className="relative mx-auto max-w-[1440px] px-4 py-16 text-center sm:px-6 lg:px-10 lg:py-20">
        <p className="mb-3 flex items-center justify-center gap-2 text-xs font-semibold tracking-[0.2em] text-gold">
          <span className="inline-block h-px w-6 bg-gold" /> {eyebrow.toUpperCase()}
        </p>
        <h1 className="font-serif text-3xl font-semibold sm:text-4xl lg:text-5xl">{title}</h1>
        {subtitle && (
          <p className="mx-auto mt-4 max-w-xl text-sm text-white/70 sm:text-base">{subtitle}</p>
        )}
      </div>
    </section>
  )
}
