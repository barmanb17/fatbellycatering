"use client"

import type React from "react"

import { useState } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Calendar } from "@/components/ui/calendar"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { format } from "date-fns"
import { CalendarIcon, CheckCircle } from "lucide-react"
import { cn } from "@/lib/utils"

export default function ContactForm() {
  const [date, setDate] = useState<Date | undefined>(undefined)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // form handler
    setIsSubmitted(true)

    // Reset form after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false)
    }, 3000)
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-white p-8 rounded-lg shadow-md"
    >
      <h2 className="text-2xl font-bold mb-6">Send Us a Message</h2>

      {isSubmitted ? (
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          className="flex flex-col items-center justify-center py-12 text-center"
        >
          <CheckCircle className="h-16 w-16 text-green-500 mb-4" />
          <h3 className="text-xl font-semibold mb-2">Message Sent!</h3>
          <p className="text-gray-600">Thank you for contacting us. We'll get back to you as soon as possible.</p>
        </motion.div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label htmlFor="name" className="text-sm font-medium">
                Full Name
              </label>
              <Input id="name" placeholder="Your name" required />
            </div>
            <div className="space-y-2">
              <label htmlFor="email" className="text-sm font-medium">
                Email Address
              </label>
              <Input id="email" type="email" placeholder="Your email" required />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label htmlFor="phone" className="text-sm font-medium">
                Phone Number
              </label>
              <Input id="phone" placeholder="Your phone number" required />
            </div>
            <div className="space-y-2">
              <label htmlFor="event-type" className="text-sm font-medium">
                Event Type
              </label>
              <Select>
                <SelectTrigger id="event-type">
                  <SelectValue placeholder="Select event type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="wedding">Wedding</SelectItem>
                  <SelectItem value="corporate">Corporate Event</SelectItem>
                  <SelectItem value="birthday">Birthday Party</SelectItem>
                  <SelectItem value="social">Social Gathering</SelectItem>
                  <SelectItem value="other">Other</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label htmlFor="date" className="text-sm font-medium">
                Event Date
              </label>
              <Popover>
                <PopoverTrigger asChild>
                  <Button
                    variant="outline"
                    className={cn("w-full justify-start text-left font-normal", !date && "text-muted-foreground")}
                  >
                    <CalendarIcon className="mr-2 h-4 w-4" />
                    {date ? format(date, "PPP") : "Select date"}
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0">
                  <Calendar mode="single" selected={date} onSelect={setDate} initialFocus />
                </PopoverContent>
              </Popover>
            </div>
            <div className="space-y-2">
              <label htmlFor="guests" className="text-sm font-medium">
                Number of Guests
              </label>
              <Input id="guests" type="number" placeholder="Approximate number" />
            </div>
          </div>

          <div className="space-y-2">
            <label htmlFor="message" className="text-sm font-medium">
              Your Message
            </label>
            <Textarea id="message" placeholder="Tell us about your event and requirements" rows={5} required />
          </div>

          <Button type="submit" className="w-full">
            Send Message
          </Button>
        </form>
      )}
    </motion.div>
  )
}
