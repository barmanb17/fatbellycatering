"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import Image from "next/image"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { X } from "lucide-react"

const categories = [
  { id: "all", name: "All" },
  { id: "weddings", name: "Weddings" },
  { id: "corporate", name: "Corporate" },
  { id: "birthdays", name: "Birthdays" },
  { id: "dishes", name: "Signature Dishes" },
]

const galleryItems = [
  {
    id: 1,
    title: "Traditional Assamese Wedding",
    description: "Catering for a traditional Assamese wedding in Guwahati",
    category: "weddings",
    image: "/placeholder.svg?height=600&width=800",
  },
  {
    id: 2,
    title: "Corporate Lunch Event",
    description: "Business lunch for a tech company in Assam",
    category: "corporate",
    image: "/placeholder.svg?height=600&width=800",
  },
  {
    id: 3,
    title: "50th Birthday Celebration",
    description: "Golden jubilee birthday party with family and friends",
    category: "birthdays",
    image: "/placeholder.svg?height=600&width=800",
  },
  {
    id: 4,
    title: "Masor Tenga",
    description: "Our signature Assamese fish curry",
    category: "dishes",
    image: "/placeholder.svg?height=600&width=800",
  },
  {
    id: 5,
    title: "Destination Wedding",
    description: "Catering for a riverside wedding in Majuli",
    category: "weddings",
    image: "/placeholder.svg?height=600&width=800",
  },
  {
    id: 6,
    title: "Annual Corporate Gala",
    description: "End-of-year celebration for a multinational company",
    category: "corporate",
    image: "/placeholder.svg?height=600&width=800",
  },
  {
    id: 7,
    title: "Sweet 16 Party",
    description: "Birthday celebration with custom menu for teenagers",
    category: "birthdays",
    image: "/placeholder.svg?height=600&width=800",
  },
  {
    id: 8,
    title: "Pork with Bamboo Shoot",
    description: "Traditional Assamese delicacy",
    category: "dishes",
    image: "/placeholder.svg?height=600&width=800",
  },
  {
    id: 9,
    title: "Engagement Ceremony",
    description: "Intimate engagement celebration with family",
    category: "weddings",
    image: "/placeholder.svg?height=600&width=800",
  },
  {
    id: 10,
    title: "Product Launch Event",
    description: "Catering for a new product launch in the hospitality sector",
    category: "corporate",
    image: "/placeholder.svg?height=600&width=800",
  },
  {
    id: 11,
    title: "Assamese Thali",
    description: "Complete traditional Assamese meal served on a bell metal plate",
    category: "dishes",
    image: "/placeholder.svg?height=600&width=800",
  },
  {
    id: 12,
    title: "Retirement Party",
    description: "Celebration of 30 years of service",
    category: "birthdays",
    image: "/placeholder.svg?height=600&width=800",
  },
]

export default function GalleryGrid() {
  const [activeTab, setActiveTab] = useState("all")
  const [selectedImage, setSelectedImage] = useState<null | {
    id: number
    title: string
    description: string
    image: string
  }>(null)

  const filteredItems = activeTab === "all" ? galleryItems : galleryItems.filter((item) => item.category === activeTab)

  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <Tabs defaultValue="all" value={activeTab} onValueChange={setActiveTab} className="w-full">
          <div className="flex justify-center mb-12">
            <TabsList className="bg-orange-50">
              {categories.map((category) => (
                <TabsTrigger
                  key={category.id}
                  value={category.id}
                  className="px-4 py-2 data-[state=active]:bg-primary data-[state=active]:text-white"
                >
                  {category.name}
                </TabsTrigger>
              ))}
            </TabsList>
          </div>

          <TabsContent value={activeTab} className="mt-0 focus-visible:outline-none focus-visible:ring-0">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            >
              {filteredItems.map((item, index) => (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="overflow-hidden rounded-lg shadow-md cursor-pointer group"
                  onClick={() => setSelectedImage(item)}
                >
                  <div className="relative h-64 w-full overflow-hidden">
                    <Image
                      src={item.image || "/placeholder.svg"}
                      alt={item.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-all duration-300 flex items-end">
                      <div className="p-4 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                        <h3 className="font-semibold text-lg">{item.title}</h3>
                        <p className="text-sm text-white/80">{item.description}</p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </TabsContent>
        </Tabs>

        {/* Image Modal */}
        <Dialog open={selectedImage !== null} onOpenChange={(open) => !open && setSelectedImage(null)}>
          <DialogContent className="max-w-4xl p-0 overflow-hidden">
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute right-4 top-4 z-10 rounded-full bg-white/10 p-2 text-white backdrop-blur-sm transition-colors hover:bg-white/20"
            >
              <X className="h-5 w-5" />
              <span className="sr-only">Close</span>
            </button>
            {selectedImage && (
              <div>
                <div className="relative h-[60vh] w-full">
                  <Image
                    src={selectedImage.image || "/placeholder.svg"}
                    alt={selectedImage.title}
                    fill
                    className="object-contain"
                  />
                </div>
                <DialogHeader className="p-6">
                  <DialogTitle>{selectedImage.title}</DialogTitle>
                  <DialogDescription>{selectedImage.description}</DialogDescription>
                </DialogHeader>
              </div>
            )}
          </DialogContent>
        </Dialog>
      </div>
    </section>
  )
}
