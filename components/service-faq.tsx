"use client"

import { motion } from "framer-motion"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

const faqs = [
  {
    question: "How far in advance should I book your catering services?",
    answer:
      "We recommend booking at least 2-3 months in advance for large events like weddings and corporate functions. For smaller gatherings, 2-4 weeks notice is usually sufficient, but availability may vary during peak seasons.",
  },
  {
    question: "Do you accommodate dietary restrictions and preferences?",
    answer:
      "Yes, we can accommodate various dietary needs including vegetarian, vegan, gluten-free, and allergy-specific requirements. Please inform us of any dietary restrictions during the consultation phase so we can plan accordingly.",
  },
  {
    question: "What is your pricing structure?",
    answer:
      "Our pricing depends on several factors including menu selection, number of guests, service style, and additional requirements. We offer customized quotes based on your specific needs. Contact us for a detailed estimate for your event.",
  },
  {
    question: "Do you provide staff for serving?",
    answer:
      "Yes, we provide professional serving staff for your event. The number of staff members depends on the size of your event and the service style you choose. Our team includes servers, bartenders, and event supervisors as needed.",
  },
  {
    question: "Can I customize the menu for my event?",
    answer:
      "We specialize in creating customized menus tailored to your preferences and event theme. Our chefs can work with you to design a menu that reflects your taste and accommodates your guests' needs.",
  },
  {
    question: "Do you provide tasting sessions before the event?",
    answer:
      "Yes, we offer tasting sessions for clients who have confirmed their booking with a deposit. This allows you to sample selected dishes from your proposed menu and make any adjustments before your event.",
  },
]

export default function ServiceFAQ() {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-primary font-medium"
          >
            FREQUENTLY ASKED QUESTIONS
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-3xl md:text-4xl font-bold mt-2 mb-4"
          >
            Common Questions
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-gray-600"
          >
            Find answers to frequently asked questions about our catering services.
          </motion.p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl mx-auto"
        >
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-left">{faq.question}</AccordionTrigger>
                <AccordionContent>{faq.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  )
}
