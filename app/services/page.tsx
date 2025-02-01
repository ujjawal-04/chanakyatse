"use client"

import { Suspense } from "react"
import { motion } from "framer-motion"
import ServicesGrid from "./components/ServicesGrid"
import BottomCTA from "./components/BottomCTA"
import { services } from "./data"

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-slate-50 relative overflow-hidden">
      <div className="relative">
        <div className="container mx-auto px-4 md:px-6 py-12 md:py-20">
          {/* Animated Section Title */}
          <motion.div
            className="text-center mb-12 md:mb-20 relative"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl lg:text-7xl font-bold text-[#24388F] mb-4 relative z-10">
              <motion.span initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }}>
                Our Services
              </motion.span>
            </h2>
            <motion.p
              className="text-gray-600 text-sm md:text-base max-w-2xl mx-auto relative z-10"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              Comprehensive legal and business solutions tailored to meet your specific needs
            </motion.p>
          </motion.div>

          <Suspense
            fallback={
              <div className="flex justify-center items-center h-32">
                <div className="w-8 h-8 border-4 border-[#24388F] border-t-transparent rounded-full animate-spin" />
              </div>
            }
          >
            <ServicesGrid services={services} />
          </Suspense>
        </div>

        <motion.div initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
          <BottomCTA />
        </motion.div>
      </div>
    </div>
  )
}

