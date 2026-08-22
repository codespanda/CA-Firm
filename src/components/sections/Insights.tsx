import { ArrowRight } from "lucide-react"

const POSTS = [
  {
    tag: "TAXATION",
    title: "Key Changes in Income Tax FY 2024-25 You Should Know",
    date: "May 10, 2024",
    read: "5 Min Read",
    img: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?q=80&w=600&auto=format&fit=crop",
  },
  {
    tag: "BUSINESS",
    title: "How Financial Planning Helps Your Business Grow Faster",
    date: "May 05, 2024",
    read: "4 Min Read",
    img: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=600&auto=format&fit=crop",
  },
  {
    tag: "COMPLIANCE",
    title: "GST Compliance Checklist for Businesses in 2024",
    date: "Apr 28, 2024",
    read: "6 Min Read",
    img: "https://images.unsplash.com/photo-1554224155-1696413565d3?q=80&w=600&auto=format&fit=crop",
  },
]

export function Insights() {
  return (
    <section id="resources" className="bg-muted">
      <div className="mx-auto max-w-[1440px] px-4 py-16 sm:px-6 lg:px-10 lg:py-20">
        <div className="text-center">
          <p className="mb-2 flex items-center justify-center gap-2 text-xs font-semibold tracking-[0.2em] text-gold">
            <span className="inline-block h-px w-6 bg-gold" /> INSIGHTS & RESOURCES
          </p>
          <h2 className="font-serif text-3xl font-semibold text-navy sm:text-4xl">
            Stay Updated with Financial Insights
          </h2>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {POSTS.map((post) => (
            <article
              key={post.title}
              className="overflow-hidden rounded-md border border-border bg-background"
            >
              <img
                src={post.img}
                alt={post.title}
                className="h-44 w-full object-cover"
                loading="lazy"
              />
              <div className="p-6">
                <span className="text-xs font-semibold tracking-wide text-gold">{post.tag}</span>
                <h3 className="mt-2 text-base font-semibold leading-snug text-navy">
                  {post.title}
                </h3>
                <div className="mt-3 flex items-center gap-2 text-xs text-muted-foreground">
                  <span>{post.date}</span>
                  <span>&middot;</span>
                  <span>{post.read}</span>
                </div>
                <a
                  href="#"
                  className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-navy hover:text-gold"
                >
                  Read More <ArrowRight className="size-3.5" />
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
