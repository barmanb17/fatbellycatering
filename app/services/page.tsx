import type { Metadata } from "next"
import ServicesHeader from "@/components/services-header"
import ServicesList from "@/components/services-list"
import ServiceProcess from "@/components/service-process"
import ServiceFAQ from "@/components/service-faq"
import CTASection from "@/components/cta-section"

export const metadata: Metadata = {
  title: "Services - Fatbelly Catering",
  description:
    "Explore our comprehensive catering services for weddings, corporate events, birthdays and more in Assam, India.",
}

export default function ServicesPage() {
  return (
    <div className="pt-20">
      <ServicesHeader />
      <ServicesList />
      <ServiceProcess />
      <ServiceFAQ />
      <CTASection />
    </div>
  )
}
