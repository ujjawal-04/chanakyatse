"use client"
import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"

const SplitLayout = () => {
  return (
    <>
      {/* Mobile Layout (hidden on md and above) */}
      <div className="min-h-screen flex flex-col bg-white md:hidden">
        {/* Hero Image Section */}
        <div className="w-full h-72 relative">
          <Image
            src="/hero.jpg"
            alt="Trademark Attorney"
            className="object-cover w-full h-full"
            width={2000}
            height={2000}
            priority
          />
        </div>

        {/* Content Section */}
        <div className="w-full px-6 py-8 bg-gradient-to-b from-blue-50 to-white">
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="font-bold text-3xl text-blue-800 mb-3">
              YOUR SUCCESS
              <span className="block mt-2">OUR PROMISE</span>
            </h1>

            <p className="font-serif text-2xl text-black mt-6 mb-8">Protecting Your Business & Brand</p>

            <Link
              href="/about"
              className="bg-blue-800 text-white py-4 px-8 rounded-full inline-flex items-center justify-center text-lg font-semibold hover:bg-yellow-400 hover:text-teal-800 transition-all duration-300 ease-in-out w-full sm:w-auto"
            >
              Get Expert Help Today
            </Link>
          </motion.div>

          <div className="mt-12 relative">
            <Image
              src="/small.jpg"
              alt="Background Design"
              className="w-full h-48 object-cover rounded-lg opacity-40"
              width={800}
              height={400}
            />
          </div>
        </div>
      </div>

      {/* Desktop Layout (hidden below md) */}
      <div className="hidden md:block min-h-screen relative">
        {/* Full-screen background image */}
        <Image src="/WEBSITE.png" alt="Trademark Attorney" className="object-cover" fill priority />

        {/* Overlay for better text visibility */}
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>

        {/* Content */}
        <div className="absolute inset-0 flex items-center">
          <div className=" bg-[#0A0B1E]/70 pr-80 py-6">
            <div className="relative z-10 flex flex-col justify-center items-start max-w-xl mx-auto">
              <div className="relative bg-[#101743] pl-2 pr-4 py-2">
                <motion.h1
                  initial={{ y: 50, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 1, ease: "easeOut", delay: 0.3 }}
                  className="font-bold font-sans text-6xl mb-4 text-left text-white"
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
                  className="font-serif text-4xl text-white mb-2 block text-left mt-0"
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
                  className="bg-white text-black py-3 px-16 rounded-none inline-flex items-center justify-center text-lg font-semibold hover:bg-yellow-400 hover:text-teal-800 transition-all duration-300 ease-in-out"
                >
                  Get Expert Help Today
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
          className="absolute right-0 top-32 w-2/5 h-5/6 z-20"
          style={{ marginRight: '0', position: 'absolute' }}

        >
          <Image
            src="/hero.jpg"
            alt="Right Section Image"
            className="shadow-lg object-cover"
            width={600}
            height={700}
            priority
          />
        </motion.div>
      </div>
    </>
  )
}

export default SplitLayout
