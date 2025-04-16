"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Cake, Utensils, Building2, GlassWater, Users, ChefHat, ArrowRight } from "lucide-react"

const services = [
  {
    icon: <Utensils className="h-10 w-10" />,
    title: "Wedding Catering",
    description:
      "Make your special day memorable with our authentic Assamese and Indian cuisine. We offer customized menus, elegant presentation, and impeccable service for weddings of all sizes.",
    image: "/placeholder.svg?height=600&width=800",
    link: "/booking",
  },
  {
    icon: <Building2 className="h-10 w-10" />,
    title: "Corporate Events",
    description:
      "Impress your clients and colleagues with our professional catering services. From business lunches to annual galas, we ensure high-quality food and service that reflects your company's standards.",
    image: "/placeholder.svg?height=600&width=800",
    link: "/booking",
  },
  {
    icon: <Cake className="h-10 w-10" />,
    title: "Birthday Parties",
    description:
      "Celebrate your birthday with delicious food that brings joy to the occasion. We offer themed menus, special birthday treats, and flexible catering options for parties of all sizes.",
    image: "/placeholder.svg?height=600&width=800",
    link: "/booking",
  },
  {
    icon: <GlassWater className="h-10 w-10" />,
    title: "Cocktail Parties",
    description:
      "Elevate your social gathering with our elegant finger foods and appetizers. Our cocktail party catering includes a variety of bite-sized delicacies that pair perfectly with drinks.",
    image: "/placeholder.svg?height=600&width=800",
    link: "/booking",
  },
  {
    icon: <Users className="h-10 w-10" />,
    title: "Social Gatherings",
    description:
      "From family reunions to community events, we provide catering solutions that bring people together. Our diverse menu options ensure there's something for everyone to enjoy.",
    image: "/placeholder.svg?height=600&width=800",
    link: "/booking",
  },
  {
    icon: <ChefHat className="h-10 w-10" />,
    title: "Custom Menus",
    description:
      "Work with our experienced chefs to create a personalized menu for your event. We accommodate dietary restrictions, cultural preferences, and special requests to craft the perfect dining experience.",
    image: "/placeholder.svg?height=600&width=800",
    link: "/contact",
  },
]

export default function ServicesList() {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 gap-16">
          {services.map((service, index) => (
            <ServiceItem key={service.title} service={service} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}

function ServiceItem({ service, index }: { service: any; index: number }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.5, delay: 0.1 }}
      className={`flex flex-col ${index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"} gap-8 items-center`}
    >
      <div className="w-full md:w-1/2">
        <div className="relative h-64 md:h-96 w-full rounded-lg overflow-hidden shadow-lg">
          <Image src={service.image || "/placeholder.svg"} alt={service.title} fill className="object-cover" />
        </div>
      </div>
      <div className="w-full md:w-1/2 space-y-4">
        <div className="text-primary mb-4">{service.icon}</div>
        <h2 className="text-3xl font-bold">{service.title}</h2>
        <p className="text-gray-600">{service.description}</p>
        <Button asChild>
          <Link href={service.link}>
            Learn More <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </Button>
      </div>
    </motion.div>
  )
}
