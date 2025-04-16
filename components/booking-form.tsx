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
import { CalendarIcon, CheckCircle, ChevronRight } from "lucide-react"
import { cn } from "@/lib/utils"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export default function BookingForm() {
  const [date, setDate] = useState<Date | undefined>(undefined)
  const [currentStep, setCurrentStep] = useState(1)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleNextStep = () => {
    setCurrentStep((prev) => Math.min(prev + 1, 3))
  }

  const handlePrevStep = () => {
    setCurrentStep((prev) => Math.max(prev - 1, 1))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // In a real application, you would handle form submission here
    setIsSubmitted(true)
  }

  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {isSubmitted ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              className="bg-white p-12 rounded-lg shadow-md text-center"
            >
              <CheckCircle className="h-20 w-20 text-green-500 mx-auto mb-6" />
              <h2 className="text-3xl font-bold mb-4">Booking Submitted!</h2>
              <p className="text-gray-600 mb-8 text-lg">
                Thank you for booking with Fatbelly Catering. We've received your request and will contact you within 24
                hours to confirm your booking and discuss further details.
              </p>
              <Button asChild>
                <a href="/">Return to Home</a>
              </Button>
            </motion.div>
          ) : (
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              {/* Progress Steps */}
              <div className="bg-orange-50 p-6">
                <div className="flex justify-between">
                  {[1, 2, 3].map((step) => (
                    <div key={step} className="flex flex-col items-center relative">
                      <div
                        className={`w-10 h-10 rounded-full flex items-center justify-center ${
                          step <= currentStep ? "bg-primary text-white" : "bg-gray-200 text-gray-500"
                        }`}
                      >
                        {step < currentStep ? <CheckCircle className="h-5 w-5" /> : step}
                      </div>
                      <span
                        className={`mt-2 text-sm font-medium ${step <= currentStep ? "text-primary" : "text-gray-500"}`}
                      >
                        {step === 1 ? "Event Details" : step === 2 ? "Menu Selection" : "Confirmation"}
                      </span>
                      {step < 3 && (
                        <div
                          className={`absolute top-5 left-10 w-[calc(100%-2.5rem)] h-0.5 ${
                            step < currentStep ? "bg-primary" : "bg-gray-200"
                          }`}
                        />
                      )}
                    </div>
                  ))}
                </div>
              </div>

              {/* Form Steps */}
              <div className="p-8">
                <form onSubmit={handleSubmit}>
                  {/* Step 1: Event Details */}
                  {currentStep === 1 && (
                    <motion.div
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3 }}
                      className="space-y-6"
                    >
                      <h2 className="text-2xl font-bold mb-6">Event Details</h2>

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
                                className={cn(
                                  "w-full justify-start text-left font-normal",
                                  !date && "text-muted-foreground",
                                )}
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
                          <Input id="guests" type="number" placeholder="Approximate number" required />
                        </div>
                      </div>

                      <div className="space-y-2">
                        <label htmlFor="venue" className="text-sm font-medium">
                          Venue Address
                        </label>
                        <Input id="venue" placeholder="Event venue address" required />
                      </div>

                      <div className="space-y-2">
                        <label htmlFor="requirements" className="text-sm font-medium">
                          Special Requirements
                        </label>
                        <Textarea id="requirements" placeholder="Any special requirements or preferences" rows={3} />
                      </div>

                      <div className="flex justify-end">
                        <Button type="button" onClick={handleNextStep}>
                          Next Step <ChevronRight className="ml-2 h-4 w-4" />
                        </Button>
                      </div>
                    </motion.div>
                  )}

                  {/* Step 2: Menu Selection */}
                  {currentStep === 2 && (
                    <motion.div
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3 }}
                      className="space-y-6"
                    >
                      <h2 className="text-2xl font-bold mb-6">Menu Selection</h2>

                      <div className="space-y-6">
                        <Accordion type="single" collapsible className="w-full">
                          <AccordionItem value="assamese">
                            <AccordionTrigger className="text-lg font-medium">Assamese Cuisine</AccordionTrigger>
                            <AccordionContent>
                              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
                                <div className="flex items-center space-x-2">
                                  <Input type="checkbox" id="masor-tenga" className="w-4 h-4" />
                                  <label htmlFor="masor-tenga" className="text-sm">
                                    Masor Tenga
                                  </label>
                                </div>
                                <div className="flex items-center space-x-2">
                                  <Input type="checkbox" id="aloo-pitika" className="w-4 h-4" />
                                  <label htmlFor="aloo-pitika" className="text-sm">
                                    Aloo Pitika
                                  </label>
                                </div>
                                <div className="flex items-center space-x-2">
                                  <Input type="checkbox" id="pork-bamboo" className="w-4 h-4" />
                                  <label htmlFor="pork-bamboo" className="text-sm">
                                    Pork with Bamboo Shoot
                                  </label>
                                </div>
                                <div className="flex items-center space-x-2">
                                  <Input type="checkbox" id="khar" className="w-4 h-4" />
                                  <label htmlFor="khar" className="text-sm">
                                    Khar
                                  </label>
                                </div>
                              </div>
                            </AccordionContent>
                          </AccordionItem>

                          <AccordionItem value="north-indian">
                            <AccordionTrigger className="text-lg font-medium">North Indian Cuisine</AccordionTrigger>
                            <AccordionContent>
                              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
                                <div className="flex items-center space-x-2">
                                  <Input type="checkbox" id="butter-chicken" className="w-4 h-4" />
                                  <label htmlFor="butter-chicken" className="text-sm">
                                    Butter Chicken
                                  </label>
                                </div>
                                <div className="flex items-center space-x-2">
                                  <Input type="checkbox" id="dal-makhani" className="w-4 h-4" />
                                  <label htmlFor="dal-makhani" className="text-sm">
                                    Dal Makhani
                                  </label>
                                </div>
                                <div className="flex items-center space-x-2">
                                  <Input type="checkbox" id="paneer-tikka" className="w-4 h-4" />
                                  <label htmlFor="paneer-tikka" className="text-sm">
                                    Paneer Tikka Masala
                                  </label>
                                </div>
                                <div className="flex items-center space-x-2">
                                  <Input type="checkbox" id="naan-roti" className="w-4 h-4" />
                                  <label htmlFor="naan-roti" className="text-sm">
                                    Naan/Roti Basket
                                  </label>
                                </div>
                              </div>
                            </AccordionContent>
                          </AccordionItem>

                          <AccordionItem value="south-indian">
                            <AccordionTrigger className="text-lg font-medium">South Indian Cuisine</AccordionTrigger>
                            <AccordionContent>
                              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
                                <div className="flex items-center space-x-2">
                                  <Input type="checkbox" id="masala-dosa" className="w-4 h-4" />
                                  <label htmlFor="masala-dosa" className="text-sm">
                                    Masala Dosa
                                  </label>
                                </div>
                                <div className="flex items-center space-x-2">
                                  <Input type="checkbox" id="idli-sambar" className="w-4 h-4" />
                                  <label htmlFor="idli-sambar" className="text-sm">
                                    Idli Sambar
                                  </label>
                                </div>
                              </div>
                            </AccordionContent>
                          </AccordionItem>

                          <AccordionItem value="fusion">
                            <AccordionTrigger className="text-lg font-medium">Fusion Cuisine</AccordionTrigger>
                            <AccordionContent>
                              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
                                <div className="flex items-center space-x-2">
                                  <Input type="checkbox" id="fusion-pasta" className="w-4 h-4" />
                                  <label htmlFor="fusion-pasta" className="text-sm">
                                    Assamese Fusion Pasta
                                  </label>
                                </div>
                                <div className="flex items-center space-x-2">
                                  <Input type="checkbox" id="bamboo-risotto" className="w-4 h-4" />
                                  <label htmlFor="bamboo-risotto" className="text-sm">
                                    Bamboo Shoot Risotto
                                  </label>
                                </div>
                              </div>
                            </AccordionContent>
                          </AccordionItem>

                          <AccordionItem value="desserts">
                            <AccordionTrigger className="text-lg font-medium">Desserts</AccordionTrigger>
                            <AccordionContent>
                              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
                                <div className="flex items-center space-x-2">
                                  <Input type="checkbox" id="payasam" className="w-4 h-4" />
                                  <label htmlFor="payasam" className="text-sm">
                                    Payasam
                                  </label>
                                </div>
                                <div className="flex items-center space-x-2">
                                  <Input type="checkbox" id="gulab-jamun" className="w-4 h-4" />
                                  <label htmlFor="gulab-jamun" className="text-sm">
                                    Gulab Jamun
                                  </label>
                                </div>
                              </div>
                            </AccordionContent>
                          </AccordionItem>
                        </Accordion>

                        <div className="space-y-2">
                          <label htmlFor="custom-menu" className="text-sm font-medium">
                            Custom Menu Requests
                          </label>
                          <Textarea
                            id="custom-menu"
                            placeholder="Any specific dishes or menu items you'd like that aren't listed above"
                            rows={3}
                          />
                        </div>

                        <div className="space-y-2">
                          <label htmlFor="dietary" className="text-sm font-medium">
                            Dietary Restrictions
                          </label>
                          <Textarea
                            id="dietary"
                            placeholder="Please list any dietary restrictions or allergies we should be aware of"
                            rows={3}
                          />
                        </div>
                      </div>

                      <div className="flex justify-between">
                        <Button type="button" variant="outline" onClick={handlePrevStep}>
                          Previous
                        </Button>
                        <Button type="button" onClick={handleNextStep}>
                          Next Step <ChevronRight className="ml-2 h-4 w-4" />
                        </Button>
                      </div>
                    </motion.div>
                  )}

                  {/* Step 3: Confirmation */}
                  {currentStep === 3 && (
                    <motion.div
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3 }}
                      className="space-y-6"
                    >
                      <h2 className="text-2xl font-bold mb-6">Confirm Your Booking</h2>

                      <div className="bg-orange-50 p-6 rounded-lg">
                        <p className="text-gray-700 mb-4">
                          Please review your booking details before submitting. Our team will contact you within 24
                          hours to confirm your booking and discuss any additional details.
                        </p>

                        <div className="space-y-2">
                          <div className="flex items-center space-x-2">
                            <Input type="checkbox" id="terms" className="w-4 h-4" required />
                            <label htmlFor="terms" className="text-sm">
                              I agree to the terms and conditions
                            </label>
                          </div>
                          <div className="flex items-center space-x-2">
                            <Input type="checkbox" id="privacy" className="w-4 h-4" required />
                            <label htmlFor="privacy" className="text-sm">
                              I have read the privacy policy
                            </label>
                          </div>
                        </div>
                      </div>

                      <div className="flex justify-between">
                        <Button type="button" variant="outline" onClick={handlePrevStep}>
                          Previous
                        </Button>
                        <Button type="submit">Submit Booking</Button>
                      </div>
                    </motion.div>
                  )}
                </form>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}
