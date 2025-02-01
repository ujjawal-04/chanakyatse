"use client"

import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"

const SplitLayout = () => {
  return (
    <>
      {/* Mobile Layout (visible on small screens) */}
      <div className="md:hidden min-h-screen relative">
        {/* Background Image */}
        <Image src="/WEBSITE.png" alt="Background" className="object-cover" fill priority />

        {/* Overlay for better text visibility */}
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>

        {/* Content */}
        <div className="relative z-10 flex flex-col h-full">
          {/* Right-side Image */}
          <motion.div
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="w-full h-72 relative mt-8"
          >
            <Image src="/hero.jpg" alt="Trademark Attorney" className="object-cover shadow-lg" fill priority />
          </motion.div>

          {/* Text Content */}
          <div className="flex-grow flex flex-col justify-center items-start p-6">
            <div className="bg-[#0A0B1E]/70 p-4">
              <motion.h1
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 1, ease: "easeOut", delay: 0.3 }}
                className="font-bold font-sans text-3xl mb-4 text-left text-white"
              >
                <motion.span
                  initial={{ y: 50, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.8, delay: 0.5 }}
                  className="block"
                >
                  YOUR SUCCESS
                </motion.span>
                <motion.span
                  initial={{ y: 50, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.8, delay: 0.7 }}
                  className="block"
                >
                  OUR PROMISE
                </motion.span>
              </motion.h1>

              <motion.span
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 1, ease: "easeOut", delay: 1.5 }}
                className="font-serif text-2xl text-white mb-6 block"
              >
                Protecting Your Business & Brand
              </motion.span>

              <motion.div
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 1, ease: "easeOut", delay: 2.3 }}
              >
                <Link
                  href="/contact"
                  className="bg-white text-black py-3 px-8 inline-flex items-center justify-center text-lg font-bold hover:bg-yellow-400 hover:text-teal-800 transition-all duration-300 ease-in-out"
                >
                  GET EXPERT HELP TODAY
                </Link>
              </motion.div>
            </div>
          </div>
        </div>
      </div>

      {/* Desktop Layout (hidden on small screens, visible on md and above) */}
      <div className="hidden md:block min-h-screen relative">
        {/* Full-screen background image */}
        <Image src="/WEBSITE.png" alt="Trademark Attorney" className="object-cover" fill priority />

        {/* Overlay for better text visibility */}
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>

        {/* Content */}
        <div className="absolute inset-0 flex items-center">
          <div className="bg-[#0A0B1E]/70 pr-96 py-6">
            <div className="relative z-10 flex flex-col justify-center items-start max-w-xl mx-auto">
              <div className="relative bg-[#101743] pl-2 pr-20 py-2">
                <motion.h1
                  initial={{ y: 50, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 1, ease: "easeOut", delay: 0.3 }}
                  className="font-bold font-sans text-5xl mb-4 text-left text-white"
                >
                  <motion.span
                    initial={{ y: 50, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.8, delay: 0.5 }}
                    className="flex flex-col"
                  >
                    YOUR SUCCESS
                  </motion.span>
                  <motion.span
                    initial={{ y: 50, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.8, delay: 0.7 }}
                    className="block"
                  >
                    OUR PROMISE
                  </motion.span>
                </motion.h1>

                <motion.span
                  initial={{ y: 50, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 1, ease: "easeOut", delay: 1.5 }}
                  className="font-serif text-3xl text-white mb-2 block text-left mt-0"
                >
                  Protecting Your Business & Brand
                </motion.span>
              </div>

              <motion.div
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 1, ease: "easeOut", delay: 2.3 }}
                className="w-full flex justify-start pl-64 mt-4"
              >
                <Link
                  href="/contact"
                  className="bg-white text-black py-3 px-8 rounded-none inline-flex items-center justify-center text-lg font-bold hover:bg-yellow-400 hover:text-teal-800 transition-all duration-300 ease-in-out"
                >
                  GET EXPERT HELP TODAY
                </Link>
              </motion.div>
            </div>
          </div>
        </div>

        {/* New Image Section on Right Side with Animation */}
        <motion.div
          initial={{ x: 300, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="absolute right-0 top-14 w-2/5 h-5/6 z-20"
          style={{ marginRight: "0", position: "absolute" }}
        >
          <Image src="/hero.jpg" alt="Right Section Image" className="shadow-lg object-contain" fill priority />
        </motion.div>
      </div>
    </>
  )
}

export default SplitLayout

