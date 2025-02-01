"use client"

import React, { useState } from "react"
import { motion } from "framer-motion"
import { Mail, Phone, MapPin, Clock, CalendarIcon } from "lucide-react"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import * as z from "zod"
import { format } from "date-fns"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Calendar } from "@/components/ui/calendar"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { ToastContainer, toast } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"

const formSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  email: z.string().email({ message: "Please enter a valid email address." }),
  phone: z.string().min(10, { message: "Phone number must be at least 10 digits." }),
  subject: z.string().min(2, { message: "Subject is required." }),
  date: z.date({
    required_error: "Please select a date for the appointment.",
  }),
  message: z.string().min(10, { message: "Message must be at least 10 characters." }),
})

const ContactPage = () => {
  const [isSubmitting, setIsSubmitting] = useState(false)

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      subject: "",
      date: undefined,
      message: "",
    },
  })

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setIsSubmitting(true)
    try {
      const response = await fetch("/api/sendEmail", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(values),
      })

      if (response.ok) {
        toast.success("Message sent successfully!")
        form.reset()
      } else {
        toast.error("Failed to send message. Please try again.")
      }
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    } catch (error) {
      toast.error("An error occurred. Please try again later.")
    }
    setIsSubmitting(false)
  }

  return (
    <div className="min-h-screen bg-white text-gray-800">
      <ToastContainer position="top-right" autoClose={5000} hideProgressBar={false} />
      {/* Navigation */}


      {/* Hero Section */}
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="bg-[#24378F] text-white py-20">
        <div className="container mx-auto px-4">
          <motion.h1
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            className="text-4xl md:text-5xl font-light mb-6 text-center"
          >
            CONTACT US
          </motion.h1>
          <motion.p
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-gray-300 text-center"
          >
            Chanakyatse &gt; CONTACT US
          </motion.p>
        </div>
      </motion.div>

      {/* Contact Information */}
      <div className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.1 }}
              className="bg-white p-6 rounded-lg shadow-sm border border-gray-200"
            >
              <MapPin className="w-8 h-8 mb-4 text-[#24378F]" />
              <h3 className="text-lg font-semibold mb-2 text-[#24378F]">Location</h3>
              <p className="text-gray-600">#301, Al Serkal 2, Port Saeed Road, Airport Road, Deira, Dubai</p>
            </motion.div>

            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="bg-white p-6 rounded-lg shadow-sm border border-gray-200"
            >
              <Phone className="w-8 h-8 mb-4 text-[#24378F]" />
              <h3 className="text-lg font-semibold mb-2 text-[#24378F]">Contact</h3>
              <p className="text-gray-600">+91 96330 37870</p>
              <p className="text-gray-600">+971 54 477 8569</p>
            </motion.div>

            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="bg-white p-6 rounded-lg shadow-sm border border-gray-200"
            >
              <Mail className="w-8 h-8 mb-4 text-[#24378F]" />
              <h3 className="text-lg font-semibold mb-2 text-[#24378F]">Email</h3>
              <p className="text-gray-600">contact@chanakyatse.com</p>
            </motion.div>

            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="bg-white p-6 rounded-lg shadow-sm border border-gray-200"
            >
              <Clock className="w-8 h-8 mb-4 text-[#24378F]" />
              <h3 className="text-lg font-semibold mb-2 text-[#24378F]">Visit Between</h3>
              <p className="text-gray-600">Mon - Fri : 9:00-5.00</p>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Contact Form and Map */}
      <div className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-light mb-6 text-[#24378F]">Get In Touch WITH US</h2>
              <p className="text-gray-600 mb-8">Contact us Today for Expert Guidance</p>
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Name*</FormLabel>
                        <FormControl>
                          <Input placeholder="Your Name" {...field} className="border-[#24378F] focus:ring-[#24378F]" />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Email*</FormLabel>
                        <FormControl>
                          <Input
                            placeholder="your mail id"
                            {...field}
                            className="border-[#24378F] focus:ring-[#24378F]"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="phone"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Phone*</FormLabel>
                        <FormControl>
                          <Input
                            placeholder="+Phone Number"
                            {...field}
                            className="border-[#24378F] focus:ring-[#24378F]"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="subject"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Subject*</FormLabel>
                        <FormControl>
                          <Input placeholder="Subject" {...field} className="border-[#24378F] focus:ring-[#24378F]" />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="date"
                    render={({ field }) => (
                      <FormItem className="flex flex-col">
                        <FormLabel>Appointment Date</FormLabel>
                        <Popover>
                          <PopoverTrigger asChild>
                            <FormControl>
                              <Button
                                variant={"outline"}
                                className={cn(
                                  "w-full pl-3 text-left font-normal border-[#24378F]",
                                  !field.value && "text-muted-foreground",
                                )}
                              >
                                {field.value ? format(field.value, "PPP") : <span>Pick a date</span>}
                                <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                              </Button>
                            </FormControl>
                          </PopoverTrigger>
                          <PopoverContent className="w-auto p-0" align="start">
                            <Calendar
                              mode="single"
                              selected={field.value}
                              onSelect={field.onChange}
                              disabled={(date) => date < new Date() || date < new Date("1900-01-01")}
                              initialFocus
                            />
                          </PopoverContent>
                        </Popover>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="message"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Message</FormLabel>
                        <FormControl>
                          <Textarea
                            placeholder="Write Your Message..."
                            {...field}
                            className="border-[#24378F] focus:ring-[#24378F]"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <Button type="submit" disabled={isSubmitting} className="bg-[#24378F] hover:bg-[#1c2a6f] text-white">
                    {isSubmitting ? "Sending..." : "Send a message"}
                  </Button>
                </form>
              </Form>
            </div>
            <div className="bg-gray-200 rounded-lg overflow-hidden h-[400px]">
              <iframe
                src="https://maps.google.com/maps?q=Chanakyatse%20Consultancy%2C%20Dubai&t=m&z=10&output=embed&iwloc=near"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={false}
                loading="lazy"
              ></iframe>
            </div>
          </div>
        </div>
      </div>

    </div>
  )
}

export default ContactPage

