import { Hero } from "@/components/sections/Hero"
import { TrustedBy } from "@/components/sections/TrustedBy"
import { Services } from "@/components/sections/Services"
import { About } from "@/components/sections/About"
import { Industries } from "@/components/sections/Industries"
import { WhyChooseUs } from "@/components/sections/WhyChooseUs"
import { OurProcess } from "@/components/sections/OurProcess"
import { EngagementModels } from "@/components/sections/EngagementModels"
import { Testimonials } from "@/components/sections/Testimonials"
import { Newsletter } from "@/components/sections/Newsletter"
import { Insights } from "@/components/sections/Insights"

export function Home() {
  return (
    <>
      <Hero />
      <TrustedBy />
      <WhyChooseUs />
      <About />
      <Services />
      <Industries />
      <EngagementModels />
      <OurProcess />
      <Testimonials />
      <Newsletter />
      <Insights />
    </>
  )
}
