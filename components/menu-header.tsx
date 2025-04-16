"use client"

import { motion } from "framer-motion"

export default function MenuHeader() {
  return (
    <section className="relative py-24 bg-orange-50">
      <div className="container mx-auto px-4 text-center">
        <motion.span
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="inline-block bg-primary/10 text-primary px-4 py-1 rounded-full text-sm font-medium mb-4"
        >
          OUR CULINARY OFFERINGS
        </motion.span>
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-4xl md:text-5xl font-bold mb-6"
        >
          Explore Our Menu
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="max-w-2xl mx-auto text-gray-600 text-lg"
        >
          From traditional Assamese delicacies to popular Indian dishes, our menu offers a wide variety of options to
          suit every taste and occasion.
        </motion.p>
      </div>
    </section>
  )
}
