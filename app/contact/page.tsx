import type { Metadata } from "next"
import ContactHeader from "@/components/contact-header"
import ContactForm from "@/components/contact-form"
import ContactInfo from "@/components/contact-info"

export const metadata: Metadata = {
  title: "Contact Us - Fatbelly Catering",
  description:
    "Get in touch with Fatbelly Catering for inquiries, bookings, and more information about our services in Assam, India.",
}

export default function ContactPage() {
  return (
    <div className="pt-20">
      <ContactHeader />
      <div className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <ContactForm />
            <ContactInfo />
          </div>
        </div>
      </div>
    </div>
  )
}
