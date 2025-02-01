'use client';

import React, { useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, useInView } from 'framer-motion';
import mamasolo from "@/public/mamsolo.jpg";

const SplitLayout = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true });

  // Store the text content so it can be rendered in two places.
  const textContent = (
    <>
      <motion.h1
        initial={{ y: 50, opacity: 0 }}
        animate={isInView ? { y: 0, opacity: 1 } : { y: 50, opacity: 0 }}
        transition={{ duration: 1, ease: 'easeOut', delay: 0.5 }}
        className="font-bold text-2xl sm:text-4xl mb-4 text-white"
      >
        <motion.span
          initial={{ y: 50, opacity: 0 }}
          animate={isInView ? { y: 0, opacity: 1 } : { y: 50, opacity: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-xl sm:text-4xl block font-extrabold"
        >
          CHANAKYATSE CONSULTANCY
        </motion.span>
        <motion.span
          initial={{ y: 50, opacity: 0 }}
          animate={isInView ? { y: 0, opacity: 1 } : { y: 50, opacity: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="font-medium font-serif text-lg sm:text-3xl block mt-4 text-white"
        >
          &quot;We are your trusted partner for navigating complex legal landscapes, offering expert solutions tailored to both personal and business needs.&quot;
        </motion.span>
      </motion.h1>

      <motion.p
        initial={{ y: 50, opacity: 0 }}
        animate={isInView ? { y: 0, opacity: 1 } : { y: 50, opacity: 0 }}
        transition={{ duration: 1, ease: 'easeOut', delay: 1.2 }}
        className="font-sans font-bold text-white text-base sm:text-lg mb-4 mt-4"
      >
        We specialize in drafting, reviewing, and vetting legal documents, offering dedicated legal assistance through retainerships for consistent support. Our services include business setup, compliance, corporate structuring, and handling personal and civil legal matters. We manage disputes through litigation, mediation, and arbitration, providing expert legal opinions and 24/7 advice. Empower your business with our experienced team for sustained growth and success.
      </motion.p>

      <motion.div
        className="flex justify-start"
        initial={{ y: 50, opacity: 0 }}
        animate={isInView ? { y: 0, opacity: 1 } : { y: 50, opacity: 0 }}
        transition={{ duration: 1, ease: 'easeOut', delay: 1.8 }}
      >
        <Link
          href="/services"
          className="bg-white text-[#070D20] py-2 sm:py-4 px-12 sm:px-20 rounded-full inline-flex items-center justify-center text-sm sm:text-lg font-semibold hover:bg-blue-400 hover:text-teal-400 transition-all duration-300 ease-in-out"
        >
          VIEW ALL
        </Link>
      </motion.div>
    </>
  );

  return (
    <div ref={sectionRef} className="relative flex flex-col md:flex-row bg-red-500">
      {/* Left Image with "Printed" Animation */}
      <div className="w-full md:w-2/3 h-fit relative">
        <motion.div className="h-full">
          <motion.div
            className="absolute w-full h-full bg-white left-0 z-20"
            initial={{ width: "100%" }}
            animate={isInView ? { width: 0 } : { width: "100%" }}
            transition={{ duration: 2.0, ease: "easeOut" }}
          />
          <Image
            src={mamasolo}
            alt="Adv Binschet"
            className="w-full relative z-10"
            width={2000}
            height={2000}
            priority
          />
        </motion.div>
      </div>

      {/* Right Section (Desktop Only) */}
      <div className="hidden md:block w-full md:w-1/3 bg-[#070D20] relative"></div>

      {/* Translucent Overlay Box (Desktop Only) */}
      <div
        className="hidden md:flex absolute z-30 bg-[#070D20] bg-opacity-70 flex-col justify-start px-8 py-6 transform -translate-y-1/2"
        style={{
          left: 'calc(66.66% - 250px)',
          right: 0,
          top: '50%',
          maxHeight: '90%',
          overflowY: 'auto'
        }}
      >
        {textContent}
      </div>

      {/* Content for Mobile (Text Below the Image) */}
      <div className="md:hidden w-full bg-[#070D20] px-6 py-8">
        {textContent}
      </div>
    </div>
  );
};

export default SplitLayout;
