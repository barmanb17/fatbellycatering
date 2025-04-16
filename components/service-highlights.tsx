"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { Cake, Utensils, Building2, GlassWater, Users, ChefHat } from "lucide-react"

const services = [
  {
    icon: <Cake className="h-10 w-10" />,
    title: "Birthday Parties",
    description: "Make your birthday celebration special with our customized menu options.",
  },
  {
    icon: <Utensils className="h-10 w-10" />,
    title: "Wedding Catering",
    description: "Authentic Assamese and Indian cuisine for your most special day.",
  },
  {
    icon: <Building2 className="h-10 w-10" />,
    title: "Corporate Events",
    description: "Impress your clients and colleagues with our professional catering services.",
  },
  {
    icon: <GlassWater className="h-10 w-10" />,
    title: "Cocktail Parties",
    description: "Elegant finger foods and appetizers perfect for social gatherings.",
  },
  {
    icon: <Users className="h-10 w-10" />,
    title: "Social Gatherings",
    description: "From small get-togethers to large community events, we've got you covered.",
  },
  {
    icon: <ChefHat className="h-10 w-10" />,
    title: "Custom Menus",
    description: "Work with our chefs to create a personalized menu for your event.",
  },
]

export default function ServiceHighlights() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
  }

  return (
    <section className="section-padding bg-gray-50">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-primary font-medium"
          >
            OUR SERVICES
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-3xl md:text-4xl font-bold mt-2 mb-4"
          >
            Catering for Every Occasion
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-gray-600"
          >
            From intimate gatherings to grand celebrations, we provide exceptional catering services tailored to your
            needs.
          </motion.p>
        </div>

        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="bg-white p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow border border-gray-100 flex flex-col items-center text-center"
            >
              <div className="text-primary mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
