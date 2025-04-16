"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ChevronRight } from "lucide-react"
import Image from "next/image"

const categories = ["Assamese", "North Indian", "South Indian", "Fusion", "Desserts"]

const dishes = [
  {
    name: "Masor Tenga",
    category: "Assamese",
    description: "A tangy fish curry made with tomatoes, ou tenga (elephant apple), and minimal spices.",
    image: "/d1.jpg",
  },
  {
    name: "Aloo Pitika",
    category: "Assamese",
    description: "Mashed potatoes with mustard oil, onions, and green chilies.",
    image: "/d2.jpg",
  },
  {
    name: "Pork with Bamboo Shoot",
    category: "Assamese",
    description: "A traditional Assamese delicacy with pork and fermented bamboo shoots.",
    image: "/d3.jpg",
  },
  {
    name: "Butter Chicken",
    category: "North Indian",
    description: "Tender chicken cooked in a rich, creamy tomato-based sauce with butter and spices.",
    image: "/placeholder.svg?height=400&width=600",
  },
  {
    name: "Dal Makhani",
    category: "North Indian",
    description: "Black lentils and kidney beans slow-cooked with butter and cream.",
    image: "/placeholder.svg?height=400&width=600",
  },
  {
    name: "Masala Dosa",
    category: "South Indian",
    description: "Crispy rice crepe filled with spiced potato filling, served with sambar and chutney.",
    image: "/placeholder.svg?height=400&width=600",
  },
  {
    name: "Idli Sambar",
    category: "South Indian",
    description: "Steamed rice cakes served with lentil soup and coconut chutney.",
    image: "/placeholder.svg?height=400&width=600",
  },
  {
    name: "Assamese Fusion Pasta",
    category: "Fusion",
    description: "Italian pasta with Assamese bhut jolokia (ghost pepper) and local herbs.",
    image: "/placeholder.svg?height=400&width=600",
  },
  {
    name: "Payasam",
    category: "Desserts",
    description: "A sweet pudding made with rice, milk, sugar, and flavored with cardamom.",
    image: "/placeholder.svg?height=400&width=600",
  },
]

export default function FeaturedDishes() {
  const [activeCategory, setActiveCategory] = useState("Assamese")
  const filteredDishes = dishes.filter((dish) => dish.category === activeCategory)

  return (
    <section className="section-padding">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-primary font-medium"
          >
            OUR SPECIALTIES
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-3xl md:text-4xl font-bold mt-2 mb-4"
          >
            Signature Dishes
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-gray-600"
          >
            Explore our most popular dishes that blend traditional flavors with modern culinary techniques.
          </motion.p>
        </div>

        {/* Category Tabs */}
        <div className="flex justify-center mb-12 overflow-x-auto pb-2">
          <div className="flex space-x-2">
            {categories.map((category) => (
              <Button
                key={category}
                variant={activeCategory === category ? "default" : "outline"}
                onClick={() => setActiveCategory(category)}
                className="rounded-full"
              >
                {category}
              </Button>
            ))}
          </div>
        </div>

        {/* Dishes Grid */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {filteredDishes.map((dish, index) => (
            <motion.div
              key={dish.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow"
            >
              <div className="relative h-60 w-full">
                <Image src={dish.image || "/placeholder.svg"} alt={dish.name} fill className="object-cover" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{dish.name}</h3>
                <p className="text-gray-600 mb-4">{dish.description}</p>
                <div className="inline-block bg-orange-100 text-primary px-3 py-1 rounded-full text-sm font-medium">
                  {dish.category}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <div className="text-center mt-12">
          <Button variant="outline" size="lg" asChild>
            <a href="/menu">
              View Full Menu <ChevronRight className="ml-2 h-4 w-4" />
            </a>
          </Button>
        </div>
      </div>
    </section>
  )
}
