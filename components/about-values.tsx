"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { Heart, Leaf, Award, Users } from "lucide-react"

const values = [
  {
    icon: <Heart className="h-10 w-10" />,
    title: "Passion for Food",
    description: "We pour our heart into every dish we prepare, ensuring each bite is a delightful experience.",
  },
  {
    icon: <Leaf className="h-10 w-10" />,
    title: "Fresh Ingredients",
    description: "We source the freshest, locally-available ingredients to create authentic and flavorful dishes.",
  },
  {
    icon: <Award className="h-10 w-10" />,
    title: "Quality Service",
    description: "We are committed to providing exceptional service that exceeds our clients' expectations.",
  },
  {
    icon: <Users className="h-10 w-10" />,
    title: "Cultural Heritage",
    description: "We take pride in preserving and sharing the rich culinary traditions of Assam and India.",
  },
]

export default function AboutValues() {
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
    <section className="py-16 bg-orange-50">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-primary font-medium"
          >
            OUR VALUES
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-3xl md:text-4xl font-bold mt-2 mb-4"
          >
            What Drives Us
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-gray-600"
          >
            Our core values shape everything we do, from food preparation to customer service.
          </motion.p>
        </div>

        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {values.map((value, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="bg-white p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow border border-gray-100 flex flex-col items-center text-center"
            >
              <div className="text-primary mb-4">{value.icon}</div>
              <h3 className="text-xl font-semibold mb-3">{value.title}</h3>
              <p className="text-gray-600">{value.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
