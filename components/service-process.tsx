"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"

const steps = [
  {
    number: "01",
    title: "Initial Consultation",
    description:
      "We begin with a detailed discussion about your event, preferences, and requirements to understand your vision.",
  },
  {
    number: "02",
    title: "Menu Planning",
    description: "Our chefs create a customized menu based on your preferences, dietary restrictions, and event theme.",
  },
  {
    number: "03",
    title: "Tasting Session",
    description: "Sample selected dishes from your menu to ensure they meet your expectations before the event.",
  },
  {
    number: "04",
    title: "Event Coordination",
    description: "We handle all logistics, from staffing to setup, ensuring a seamless catering experience.",
  },
  {
    number: "05",
    title: "Execution",
    description: "On the day of your event, our team delivers and serves exceptional food with professional service.",
  },
  {
    number: "06",
    title: "Follow-up",
    description: "We value your feedback and follow up after the event to ensure your complete satisfaction.",
  },
]

export default function ServiceProcess() {
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
            OUR PROCESS
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-3xl md:text-4xl font-bold mt-2 mb-4"
          >
            How We Work
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-gray-600"
          >
            Our streamlined process ensures a stress-free experience from planning to execution.
          </motion.p>
        </div>

        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {steps.map((step) => (
            <motion.div
              key={step.number}
              variants={itemVariants}
              className="bg-white p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow border border-gray-100"
            >
              <div className="text-5xl font-bold text-primary/20 mb-4">{step.number}</div>
              <h3 className="text-xl font-semibold mb-3">{step.title}</h3>
              <p className="text-gray-600">{step.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
