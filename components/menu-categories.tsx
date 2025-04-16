"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent } from "@/components/ui/card"
import Image from "next/image"

const menuCategories = [
  {
    id: "assamese",
    name: "Assamese Cuisine",
    description: "Traditional dishes from Assam featuring unique ingredients and flavors.",
    items: [
      {
        name: "Masor Tenga",
        description: "A tangy fish curry made with tomatoes, ou tenga (elephant apple), and minimal spices.",
        price: "₹350",
        image: "/placeholder.svg?height=300&width=400",
      },
      {
        name: "Aloo Pitika",
        description: "Mashed potatoes with mustard oil, onions, and green chilies.",
        price: "₹180",
        image: "/placeholder.svg?height=300&width=400",
      },
      {
        name: "Pork with Bamboo Shoot",
        description: "A traditional Assamese delicacy with pork and fermented bamboo shoots.",
        price: "₹420",
        image: "/placeholder.svg?height=300&width=400",
      },
      {
        name: "Khar",
        description: "A traditional Assamese dish made with raw papaya, pulses, and khar (alkaline).",
        price: "₹220",
        image: "/placeholder.svg?height=300&width=400",
      },
      {
        name: "Xaak Aru Bhaji",
        description: "Assorted leafy greens stir-fried with minimal spices.",
        price: "₹180",
        image: "/placeholder.svg?height=300&width=400",
      },
      {
        name: "Ou Khatta",
        description: "A tangy chutney made with elephant apple, a signature Assamese condiment.",
        price: "₹150",
        image: "/placeholder.svg?height=300&width=400",
      },
    ],
  },
  {
    id: "north-indian",
    name: "North Indian",
    description: "Rich and flavorful dishes from Northern India, known for their aromatic spices and creamy gravies.",
    items: [
      {
        name: "Butter Chicken",
        description: "Tender chicken cooked in a rich, creamy tomato-based sauce with butter and spices.",
        price: "₹380",
        image: "/placeholder.svg?height=300&width=400",
      },
      {
        name: "Dal Makhani",
        description: "Black lentils and kidney beans slow-cooked with butter and cream.",
        price: "₹250",
        image: "/placeholder.svg?height=300&width=400",
      },
      {
        name: "Paneer Tikka Masala",
        description: "Grilled cottage cheese cubes in a spiced tomato-based gravy.",
        price: "₹320",
        image: "/placeholder.svg?height=300&width=400",
      },
      {
        name: "Naan/Roti Basket",
        description: "Assorted Indian breads including butter naan and tandoori roti.",
        price: "₹180",
        image: "/placeholder.svg?height=300&width=400",
      },
      {
        name: "Biryani",
        description: "Fragrant basmati rice cooked with meat or vegetables and aromatic spices.",
        price: "₹350",
        image: "/placeholder.svg?height=300&width=400",
      },
    ],
  },
  {
    id: "south-indian",
    name: "South Indian",
    description: "Delicious dishes from Southern India, featuring rice, lentils, and coconut-based preparations.",
    items: [
      {
        name: "Masala Dosa",
        description: "Crispy rice crepe filled with spiced potato filling, served with sambar and chutney.",
        price: "₹220",
        image: "/placeholder.svg?height=300&width=400",
      },
      {
        name: "Idli Sambar",
        description: "Steamed rice cakes served with lentil soup and coconut chutney.",
        price: "₹180",
        image: "/placeholder.svg?height=300&width=400",
      },
      {
        name: "Uttapam",
        description: "Thick rice pancake topped with onions, tomatoes, and chilies.",
        price: "₹200",
        image: "/placeholder.svg?height=300&width=400",
      },
      {
        name: "Chettinad Chicken",
        description: "Spicy chicken curry from the Chettinad region, known for its complex spice blend.",
        price: "₹380",
        image: "/placeholder.svg?height=300&width=400",
      },
    ],
  },
  {
    id: "fusion",
    name: "Fusion",
    description: "Creative dishes that blend Assamese flavors with international cuisines.",
    items: [
      {
        name: "Assamese Fusion Pasta",
        description: "Italian pasta with Assamese bhut jolokia (ghost pepper) and local herbs.",
        price: "₹320",
        image: "/placeholder.svg?height=300&width=400",
      },
      {
        name: "Bamboo Shoot Risotto",
        description: "Creamy Italian risotto infused with fermented bamboo shoots.",
        price: "₹350",
        image: "/placeholder.svg?height=300&width=400",
      },
      {
        name: "Ghost Pepper Wings",
        description: "Crispy chicken wings glazed with a bhut jolokia-infused sauce.",
        price: "₹380",
        image: "/placeholder.svg?height=300&width=400",
      },
    ],
  },
  {
    id: "desserts",
    name: "Desserts",
    description: "Sweet treats to end your meal on a perfect note.",
    items: [
      {
        name: "Payasam",
        description: "A sweet pudding made with rice, milk, sugar, and flavored with cardamom.",
        price: "₹180",
        image: "/placeholder.svg?height=300&width=400",
      },
      {
        name: "Gulab Jamun",
        description: "Deep-fried milk solids soaked in sugar syrup, served warm.",
        price: "₹150",
        image: "/placeholder.svg?height=300&width=400",
      },
      {
        name: "Assamese Pitha",
        description: "Traditional rice cakes with sweet fillings, a specialty during Bihu festivals.",
        price: "₹200",
        image: "/placeholder.svg?height=300&width=400",
      },
    ],
  },
]

export default function MenuCategories() {
  const [activeTab, setActiveTab] = useState("assamese")

  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <Tabs defaultValue="assamese" value={activeTab} onValueChange={setActiveTab} className="w-full">
          <div className="flex justify-center mb-12">
            <TabsList className="bg-orange-50">
              {menuCategories.map((category) => (
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

          {menuCategories.map((category) => (
            <TabsContent
              key={category.id}
              value={category.id}
              className="mt-0 focus-visible:outline-none focus-visible:ring-0"
            >
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
                className="mb-8 text-center max-w-2xl mx-auto"
              >
                <h2 className="text-2xl font-bold mb-3">{category.name}</h2>
                <p className="text-gray-600">{category.description}</p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
              >
                {category.items.map((item, index) => (
                  <motion.div
                    key={item.name}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    <Card className="overflow-hidden h-full">
                      <div className="relative h-48 w-full">
                        <Image src={item.image || "/placeholder.svg"} alt={item.name} fill className="object-cover" />
                      </div>
                      <CardContent className="p-6">
                        <div className="flex justify-between items-start mb-2">
                          <h3 className="text-lg font-semibold">{item.name}</h3>
                          <span className="font-medium text-primary">{item.price}</span>
                        </div>
                        <p className="text-gray-600 text-sm">{item.description}</p>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </motion.div>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  )
}
