import type { Metadata } from "next"
import AboutHeader from "@/components/about-header"
import AboutStory from "@/components/about-story"
import AboutTeam from "@/components/about-team"
import AboutValues from "@/components/about-values"
import CTASection from "@/components/cta-section"

export const metadata: Metadata = {
  title: "About Us - Fatbelly Catering",
  description:
    "Learn about Fatbelly Catering's journey, our team, and our commitment to authentic Assamese and Indian cuisine.",
}

export default function AboutPage() {
  return (
    <div className="pt-20">
      <AboutHeader />
      <AboutStory />
      <AboutValues />
      <AboutTeam />
      <CTASection />
    </div>
  )
}
