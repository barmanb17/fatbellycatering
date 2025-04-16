"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { Facebook, Instagram, Twitter } from "lucide-react"
import { Button } from "@/components/ui/button"

const team = [
  {
    name: "Rajiv Bora",
    role: "Founder & Head Chef",
    bio: "With over 20 years of culinary experience, Chef Rajiv brings authentic Assamese flavors to every dish he creates.",
    image: "/placeholder.svg?height=400&width=400",
    social: {
      facebook: "#",
      instagram: "#",
      twitter: "#",
    },
  },
  {
    name: "Priya Sharma",
    role: "Executive Chef",
    bio: "Specializing in North Indian cuisine, Chef Priya has worked in some of the finest restaurants across India.",
    image: "/placeholder.svg?height=400&width=400",
    social: {
      facebook: "#",
      instagram: "#",
      twitter: "#",
    },
  },
  {
    name: "Amit Das",
    role: "Event Manager",
    bio: "Amit ensures every event runs smoothly, from initial planning to final execution.",
    image: "/placeholder.svg?height=400&width=400",
    social: {
      facebook: "#",
      instagram: "#",
      twitter: "#",
    },
  },
  {
    name: "Meena Gogoi",
    role: "Customer Relations",
    bio: "Meena is dedicated to providing exceptional service and ensuring client satisfaction.",
    image: "/placeholder.svg?height=400&width=400",
    social: {
      facebook: "#",
      instagram: "#",
      twitter: "#",
    },
  },
]

export default function AboutTeam() {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-primary font-medium"
          >
            OUR TEAM
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-3xl md:text-4xl font-bold mt-2 mb-4"
          >
            Meet the Experts
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-gray-600"
          >
            Our talented team brings together years of experience and a passion for culinary excellence.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {team.map((member, index) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow"
            >
              <div className="relative h-64 w-full">
                <Image src={member.image || "/placeholder.svg"} alt={member.name} fill className="object-cover" />
              </div>
              <div className="p-6 text-center">
                <h3 className="text-xl font-semibold mb-1">{member.name}</h3>
                <p className="text-primary font-medium mb-3">{member.role}</p>
                <p className="text-gray-600 mb-4">{member.bio}</p>
                <div className="flex justify-center space-x-3">
                  <Button
                    variant="ghost"
                    size="icon"
                    className="rounded-full hover:bg-primary hover:text-white"
                    asChild
                  >
                    <a href={member.social.facebook} aria-label="Facebook">
                      <Facebook className="h-4 w-4" />
                    </a>
                  </Button>
                  <Button
                    variant="ghost"
                    size="icon"
                    className="rounded-full hover:bg-primary hover:text-white"
                    asChild
                  >
                    <a href={member.social.instagram} aria-label="Instagram">
                      <Instagram className="h-4 w-4" />
                    </a>
                  </Button>
                  <Button
                    variant="ghost"
                    size="icon"
                    className="rounded-full hover:bg-primary hover:text-white"
                    asChild
                  >
                    <a href={member.social.twitter} aria-label="Twitter">
                      <Twitter className="h-4 w-4" />
                    </a>
                  </Button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
