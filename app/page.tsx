import HeroSection from "@/components/hero-section"
import ServiceHighlights from "@/components/service-highlights"
import FeaturedDishes from "@/components/featured-dishes"
import TestimonialSection from "@/components/testimonial-section"
import CTASection from "@/components/cta-section"
import ContactSection from "@/components/contact-section"
import type { Metadata } from "next"
import AboutStory from "@/components/about-story"
import ServiceFAQ from "@/components/service-faq"

export const metadata: Metadata = {
  title: "Fatbelly Catering - Premium Catering Services in Assam",
  description:
    "Authentic Assamese and Indian cuisine catering for weddings, corporate events, birthdays and more. Based in Assam, India.",
}

export default function Home() {
  return (
    <div className="flex flex-col w-full">
      <HeroSection />
      <ServiceHighlights />
      <FeaturedDishes />
      <TestimonialSection />
      <AboutStory/>
      <ContactSection />
      
      <CTASection />
      <ServiceFAQ/>
    </div>
  )
}
