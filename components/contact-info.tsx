"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { MapPin, Phone, Mail, Clock, Facebook, Instagram, Twitter } from "lucide-react"

export default function ContactInfo() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.2 }}
      className="space-y-8"
    >
      <div>
        <h2 className="text-2xl font-bold mb-6">Contact Information</h2>
        <div className="space-y-6">
          <div className="flex items-start">
            <MapPin className="h-6 w-6 text-primary mr-4 mt-1" />
            <div>
              <h3 className="font-semibold mb-1">Our Location</h3>
              <p className="text-gray-600">123 Main Street, Guwahati, Assam, India - 781001</p>
            </div>
          </div>

          <div className="flex items-start">
            <Phone className="h-6 w-6 text-primary mr-4 mt-1" />
            <div>
              <h3 className="font-semibold mb-1">Phone Number</h3>
              <p className="text-gray-600">+91 98765 43210</p>
              <p className="text-gray-600">+91 98765 43211</p>
            </div>
          </div>

          <div className="flex items-start">
            <Mail className="h-6 w-6 text-primary mr-4 mt-1" />
            <div>
              <h3 className="font-semibold mb-1">Email Address</h3>
              <p className="text-gray-600">info@fatbellycatering.com</p>
              <p className="text-gray-600">bookings@fatbellycatering.com</p>
            </div>
          </div>

          <div className="flex items-start">
            <Clock className="h-6 w-6 text-primary mr-4 mt-1" />
            <div>
              <h3 className="font-semibold mb-1">Business Hours</h3>
              <p className="text-gray-600">Monday - Friday: 9:00 AM - 6:00 PM</p>
              <p className="text-gray-600">Saturday: 10:00 AM - 4:00 PM</p>
              <p className="text-gray-600">Sunday: Closed</p>
            </div>
          </div>
        </div>
      </div>

      <div>
        <h3 className="text-xl font-semibold mb-4">Connect With Us</h3>
        <div className="flex space-x-4">
          <Button variant="outline" size="icon" className="rounded-full hover:bg-primary hover:text-white">
            <Facebook className="h-5 w-5" />
            <span className="sr-only">Facebook</span>
          </Button>
          <Button variant="outline" size="icon" className="rounded-full hover:bg-primary hover:text-white">
            <Instagram className="h-5 w-5" />
            <span className="sr-only">Instagram</span>
          </Button>
          <Button variant="outline" size="icon" className="rounded-full hover:bg-primary hover:text-white">
            <Twitter className="h-5 w-5" />
            <span className="sr-only">Twitter</span>
          </Button>
        </div>
      </div>

      <div className="pt-6">
        <h3 className="text-xl font-semibold mb-4">Location Map</h3>
        <div className="h-80 bg-gray-200 rounded-lg overflow-hidden">
        <div className="h-80 bg-gray-200 rounded-lg overflow-hidden">
  <iframe
    width="100%"
    height="100%"
    style={{ border: 0 }}
    loading="lazy"
    allowFullScreen
    referrerPolicy="no-referrer-when-downgrade"
    src="https://www.google.com/maps/embed/v1/place?key=YOUR_API_KEY&q=123+Main+Street,Guwahati,Assam,India"
  ></iframe>
</div>

          <div className="w-full h-full flex items-center justify-center text-gray-500">
            <p>Google Map would be embedded here</p>
          </div>
        </div>
      </div>
    </motion.div>
  )
}
