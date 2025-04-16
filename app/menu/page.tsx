import type { Metadata } from "next"
import MenuHeader from "@/components/menu-header"
import MenuCategories from "@/components/menu-categories"

export const metadata: Metadata = {
  title: "Menu - Fatbelly Catering",
  description: "Explore our extensive menu of authentic Assamese and Indian cuisine for your next event.",
}

export default function MenuPage() {
  return (
    <div className="pt-20">
      <MenuHeader />
      <MenuCategories />
    </div>
  )
}
