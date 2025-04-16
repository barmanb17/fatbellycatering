"use client"

import { motion } from "framer-motion"

export default function ServicesHeader() {
  return (
    <section className="relative py-24 bg-orange-50">
      <div className="container mx-auto px-4 text-center">
        <motion.span
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="inline-block bg-primary/10 text-primary px-4 py-1 rounded-full text-sm font-medium mb-4"
        >
          OUR OFFERINGS
        </motion.span>
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-4xl md:text-5xl font-bold mb-6"
        >
          Our Services
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="max-w-2xl mx-auto text-gray-600 text-lg"
        >
          From intimate gatherings to grand celebrations, we provide exceptional catering services tailored to your
          specific needs and preferences.
        </motion.p>
      </div>
    </section>
  )
}
