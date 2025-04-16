import type { Metadata } from "next"
import GalleryHeader from "@/components/gallery-header"
import GalleryGrid from "@/components/gallery-grid"

export const metadata: Metadata = {
  title: "Gallery - Fatbelly Catering",
  description: "Browse our gallery of past events and delicious dishes from Fatbelly Catering.",
}

export default function GalleryPage() {
  return (
    <div className="pt-20">
      <GalleryHeader />
      <GalleryGrid />
    </div>
  )
}
