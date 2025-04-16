"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight, Star } from "lucide-react"
import Image from "next/image"

const testimonials = [
  {
    id: 1,
    name: "Priya Sharma",
    role: "Wedding Client",
    image: `https://randomuser.me/api/portraits/men/${Math.floor(Math.random() * 100)}.jpg`,
    rating: 5,
    text: "Fatbelly Catering made our wedding day truly special. The Assamese dishes were authentic and delicious. All our guests were impressed with the quality and presentation of the food.",
  },
  {
    id: 2,
    name: "Rajiv Bora",
    role: "Corporate Event Manager",
    image: `https://randomuser.me/api/portraits/men/${Math.floor(Math.random() * 100)}.jpg`,
    rating: 5,
    text: "We've used Fatbelly for multiple corporate events, and they never disappoint. Their professionalism and attention to detail are unmatched. The fusion menu options are particularly impressive.",
  },
  {
    id: 3,
    name: "Ankita Das",
    role: "Birthday Celebration",
    image: `https://randomuser.me/api/portraits/men/${Math.floor(Math.random() * 100)}.jpg`,
    rating: 4,
    text: "The team at Fatbelly Catering went above and beyond for my 50th birthday celebration. The traditional Assamese dishes brought back childhood memories, and their service was impeccable.",
  },
  {
    id: 4,
    name: "Vikram Choudhury",
    role: "Family Gathering",
    image: `https://randomuser.me/api/portraits/men/${Math.floor(Math.random() * 100)}.jpg`,
    rating: 5,
    text: "We hired Fatbelly for our family reunion, and everyone was talking about the food for days afterward. Their ability to cater to both traditional tastes and modern preferences is remarkable.",
  },
]

export default function TestimonialSection() {
  const [current, setCurrent] = useState(0)
  const [autoplay, setAutoplay] = useState(true)

  useEffect(() => {
    if (!autoplay) return

    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % testimonials.length)
    }, 5000)

    return () => clearInterval(interval)
  }, [autoplay])

  const next = () => {
    setAutoplay(false)
    setCurrent((prev) => (prev + 1) % testimonials.length)
  }

  const prev = () => {
    setAutoplay(false)
    setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  return (
    <section className="section-padding bg-orange-50">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-primary font-medium"
          >
            TESTIMONIALS
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-3xl md:text-4xl font-bold mt-2 mb-4"
          >
            What Our Clients Say
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-gray-600"
          >
            Hear from our satisfied customers about their experience with Fatbelly Catering.
          </motion.p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{
                transform: `translateX(-${current * 100}%)`,
              }}
            >
              {testimonials.map((testimonial) => (
                <div key={testimonial.id} className="w-full flex-shrink-0 px-4">
                  <div className="bg-white rounded-xl shadow-md p-8 md:p-10">
                    <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
                      <div className="relative w-20 h-20 rounded-full overflow-hidden flex-shrink-0">
                        <Image
                          src={testimonial.image || "/placeholder.svg"}
                          alt={testimonial.name}
                          fill
                          className="object-cover"
                        />
                      </div>
                      <div className="flex-1 text-center md:text-left">
                        <div className="flex justify-center md:justify-start mb-3">
                          {[...Array(5)].map((_, i) => (
                            <Star
                              key={i}
                              className={`h-5 w-5 ${
                                i < testimonial.rating ? "text-yellow-400 fill-yellow-400" : "text-gray-300"
                              }`}
                            />
                          ))}
                        </div>
                        <p className="text-gray-700 italic mb-6">"{testimonial.text}"</p>
                        <h4 className="font-semibold text-lg">{testimonial.name}</h4>
                        <p className="text-gray-500 text-sm">{testimonial.role}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Buttons */}
          <div className="flex justify-center mt-8 space-x-2">
            <Button
              variant="outline"
              size="icon"
              onClick={prev}
              className="rounded-full"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="h-5 w-5" />
            </Button>
            <Button variant="outline" size="icon" onClick={next} className="rounded-full" aria-label="Next testimonial">
              <ChevronRight className="h-5 w-5" />
            </Button>
          </div>

          {/* Indicators */}
          <div className="flex justify-center mt-6 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  setAutoplay(false)
                  setCurrent(index)
                }}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  current === index ? "bg-primary w-8" : "bg-gray-300 hover:bg-gray-400"
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
