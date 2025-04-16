import type { Metadata } from "next"
import BookingHeader from "@/components/booking-header"
import BookingForm from "@/components/booking-form"

export const metadata: Metadata = {
  title: "Book Now - Fatbelly Catering",
  description:
    "Book Fatbelly Catering for your next event. Easy online booking for weddings, corporate events, birthdays and more in Assam, India.",
}

export default function BookingPage() {
  return (
    <div className="pt-20">
      <BookingHeader />
      <BookingForm />
    </div>
  )
}
