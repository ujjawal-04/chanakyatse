'use client';

import React, { useRef } from 'react';
import Image from 'next/image';
import { motion, useInView } from 'framer-motion';
import Link from 'next/link';

const SplitLayout = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  return (
    <div ref={sectionRef} className="min-h-screen flex flex-col md:flex-row bg-gray-50 overflow-hidden relative">
      {/* Vector Background Elements */}
      <div className="absolute top-10 left-10 w-24 h-24 sm:w-32 sm:h-32 bg-blue-200 rounded-full opacity-30"></div>
      <div className="absolute bottom-10 right-10 w-20 h-20 sm:w-24 sm:h-24 bg-blue-300 rounded-full opacity-30"></div>

      {/* Left Content */}
      <motion.div
        className="w-full md:w-1/2 px-6 sm:px-12 py-12 sm:py-20 flex flex-col justify-center relative"
        initial={{ scale: 0.95 }}
        animate={isInView ? { scale: 1 } : {}}
        transition={{ duration: 0.8 }}
      >
        <div 
          className="absolute inset-0 bg-cover bg-center z-0 opacity-20"
          style={{ backgroundImage: "url('/small.jpg')" }}
        />
        <div className="relative z-10 flex flex-col justify-center items-start max-w-xl mx-auto">
          <motion.h1
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, ease: "easeOut", delay: 0.3 }}
            className="font-serif text-4xl sm:text-5xl md:text-6xl mb-6 text-left text-blue-900 leading-tight sm:mr-10"
          >
            Comprehensive Partner for all your Individual & Business Needs in India and UAE
          </motion.h1>
          <motion.span
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, ease: "easeOut", delay: 1 }}
            className="font-serif text-2xl sm:text-3xl md:text-4xl text-blue-800 mb-8 block text-left"
          >
            {/* Add any subtitle or extra text if needed */}
          </motion.span>
          <Link href="/services">
            <motion.button
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 1, ease: "easeOut", delay: 1.5 }}
              className="bg-[#24388F] text-white px-6 py-3 rounded-lg shadow-lg hover:bg-blue-700 transition"
            >
              Learn More
            </motion.button>
          </Link>
        </div>
      </motion.div>

      {/* Right Image */}
      <motion.div
        className="w-full md:w-1/2 flex items-center justify-center p-6 sm:p-8 relative"
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : {}}
        transition={{ duration: 0.5 }}
      >
        <motion.div
          initial={{ x: '30%', scale: 0.9, rotate: -2 }}
          animate={isInView ? { x: 0, scale: 1, rotate: 0 } : {}}
          transition={{
            type: "spring",
            stiffness: 50,
            damping: 10,
            delay: 0.2
          }}
          className="relative w-full h-[400px] sm:h-[600px] shadow-2xl overflow-hidden rounded-2xl border-4 border-blue-200"
        >
          <Image
            src="/hero2.jpg"
            alt="Business illustration"
            fill
            className="object-cover rounded-2xl"
            sizes="(max-width: 768px) 100vw, 50vw"
            priority
          />
        </motion.div>
      </motion.div>
    </div>
  );
};

export default SplitLayout;
