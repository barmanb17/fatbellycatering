"use client"

import { motion } from "framer-motion"
import Image from "next/image"

export default function AboutStory() {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <span className="text-primary font-medium">OUR JOURNEY</span>
            <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-6">The Fatbelly Story</h2>
            <div className="space-y-4 text-gray-600">
              <p>
                Founded in 2010, Fatbelly Catering began as a small family business with a passion for authentic
                Assamese cuisine. Our founder, Chef Rajiv Bora, started with a simple mission: to share the rich
                culinary heritage of Assam with the world.
              </p>
              <p>
                What started as catering for small family gatherings quickly grew into a full-service catering company
                as word spread about our delicious food and impeccable service. Today, we are proud to be one of the
                leading catering services in Assam, serving a wide range of events from intimate gatherings to grand
                weddings and corporate functions.
              </p>
              <p>
                Our commitment to using fresh, locally-sourced ingredients and traditional cooking methods has remained
                unchanged. We believe in preserving the authentic flavors of Assamese cuisine while also embracing
                innovation and contemporary presentation.
              </p>
              <p>
                Over the years, we have expanded our menu to include popular dishes from across India, but our heart
                remains rooted in the unique flavors and culinary traditions of Assam.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="relative h-[500px] rounded-lg overflow-hidden shadow-xl"
          >
            <Image
              src="/1.jpg"
              alt="Fatbelly Catering Team"
              fill
              className="object-cover"
            />
          </motion.div>
        </div>
      </div>
    </section>
  )
}
