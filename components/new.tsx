'use client';

import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import Link from 'next/link';

const LegalServicesSplit = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  const stats = [
    { number: "20+", label: "Years Experience" },
    { number: "5000+", label: "Satisfied Clients" },
    { number: "50+", label: "Legal Experts" },
    { number: "95%", label: "Satisfaction" }
  ];

  return (
    <div ref={sectionRef} className=" flex flex-col lg:flex-row bg-gray-50 overflow-hidden relative">
      {/* Vector Background Elements */}
      <motion.div 
        className="absolute top-8 left-8 w-32 h-32 bg-blue-200 rounded-full opacity-30"
        animate={{
          scale: [1, 1.2, 1],
          rotate: [0, 90, 0],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
        }}
      />
      <motion.div 
        className="absolute bottom-8 right-8 w-28 h-28 bg-blue-300 rounded-full opacity-30"
        animate={{
          scale: [1.2, 1, 1.2],
          rotate: [90, 0, 90],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
        }}
      />
      
      {/* Left Content */}
      <motion.div 
        className="w-full lg:w-1/2 px-6 sm:px-8 lg:px-12 py-10 lg:py-16 flex flex-col justify-center relative"
        initial={{ scale: 0.95 }}
        animate={isInView ? { scale: 1 } : {}}
        transition={{ duration: 0.8 }}
      >
        <div className="relative z-10 flex flex-col justify-center items-start max-w-3xl mx-auto">
          <motion.h1
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, ease: "easeOut", delay: 0.3 }}
            className="font-bold text-black sm:text-5xl lg:text-7xl mb-6 text-left leading-tight"
          >
            Excellence in Legal Services
          </motion.h1>
          <motion.p
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, ease: "easeOut", delay: 0.6 }}
            className="text-2xl lg:text-3xl text-black mb-8 font-serif"
          >
            Premier law firm serving clients across the UAE with expertise in corporate, commercial, and civil law
          </motion.p>
          
          <Link href="/contact">
            <motion.button
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 1, ease: "easeOut", delay: 1.5 }}
              className="bg-slate-900 text-white font-bold text-lg px-8 py-4 rounded-none shadow-lg hover:bg-slate-700 transition"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              SCHEDULE A CONSULTATION
            </motion.button>
          </Link>
        </div>
      </motion.div>

      {/* Right Content - Stats Grid */}
      <motion.div 
        className="w-full lg:w-1/2 flex items-center justify-center p-6 sm:p-8 lg:p-12"
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : {}}
        transition={{ duration: 0.5 }}
      >
        <motion.div
          initial={{ x: '30%', scale: 0.9 }}
          animate={isInView ? { x: 0, scale: 1 } : {}}
          transition={{ 
            type: "spring",
            stiffness: 50,
            damping: 10,
            delay: 0.2
          }}
          className="grid grid-cols-2 gap-4 sm:gap-6 lg:gap-8 w-full max-w-2xl"
        >
          {stats.map((stat, index) => (
  <motion.div
    key={index}
    className="bg-slate-900 p-6 sm:p-8 lg:p-10 rounded-none shadow-xl border-2 border-blue-100 flex flex-col items-center text-center"
    initial={{ opacity: 0, y: 20 }}
    animate={isInView ? { opacity: 1, y: 0 } : {}}
    transition={{ delay: 0.2 * index }}
    whileHover={{ scale: 1.05 }}
  >
    <h3 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-2 text-center">
      {stat.number}
    </h3>
    <p className="text-white text-lg font-bold lg:text-xl text-center">
      {stat.label}
    </p>
  </motion.div>
))}
        </motion.div>
      </motion.div>


    </div>
  );
};

export default LegalServicesSplit;