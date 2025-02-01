"use client";

import { motion } from "framer-motion";
import { ArrowRightLeft, Gavel, FileText, Briefcase } from "lucide-react";
import Link from "next/link";

export default function Features() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        when: "beforeChildren",
      },
    },
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: "spring", stiffness: 120 },
    },
  };

  const hoverVariants = {
    hover: { 
      y: -10,
      scale: 1.05,
      transition: { type: "spring", stiffness: 300 }
    },
    initial: { y: 0, scale: 1 }
  };

  const buttonVariants = {
    hover: {
      scale: 1.05,
      transition: { type: "spring", stiffness: 400 }
    },
    tap: {
      scale: 0.95
    }
  };

  const features = [
    {
      icon: FileText,
      title: "Drafting & Writing of Agreements",
      description: "Tailored contracts ensuring compliance & protection.",
      vector: "M10 0 L20 10 L10 20 L0 10 Z",
    },
    {
      icon: Gavel,
      title: "Legal Advice & Opinions",
      description: "Practical guidance & in-depth legal analysis.",
      vector: "M0 10 Q10 0 20 10 Q10 20 0 10",
    },
    {
      icon: ArrowRightLeft,
      title: "Mergers & Acquisitions",
      description: "Expert handling of M&A transactions.",
      vector: "M0 20 Q10 0 20 20",
    },
    {
      icon: Briefcase,
      title: "Succession & Wealth Planning",
      description: "Strategic estate & asset transfer planning.",
      vector: "M5 0 Q15 0 15 10 Q15 20 5 20 Q-5 20 -5 10 Q-5 0 5 0",
    },
  ];
  
  return (
    <motion.section
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      variants={containerVariants}
      className="relative overflow-hidden py-20 bg-[#070D20]"
    >
      {/* Background Vector Elements */}
      <div className="absolute inset-0 opacity-10">
        <svg viewBox="0 0 100 100" className="w-full h-full">
          <motion.path
            d="M20,50 C40,10 60,10 80,50 S100,90 80,90 S60,70 20,70 S0,90 20,90"
            fill="none"
            stroke="#A5B4FC"
            strokeWidth="0.5"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 4, repeat: Infinity }}
          />
        </svg>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          variants={itemVariants}
          className="text-center mb-16 relative"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">
            Our Works
          </h2>
          <motion.svg
            viewBox="0 0 100 10"
            className="w-32 mx-auto mt-4"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.8 }}
          >
            <path
              d="M0 5 Q25 8 50 5 T100 5"
              fill="none"
              stroke="#93C5FD"
              strokeWidth="2"
              strokeLinecap="round"
            />
          </motion.svg>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {features.map((item, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover="hover"
              initial="initial"
              className="group relative cursor-pointer"
            >
              <motion.div
                variants={hoverVariants}
                className="bg-white rounded-none p-6 h-full shadow-xl relative overflow-hidden"
              >
                <div className="relative z-10">
                  <div className="w-16 h-16 rounded-2xl mb-6 flex items-center justify-center mx-auto bg-white">
                    <item.icon className="w-14 h-14 text-black bg-white" />
                  </div>
                  
                  <h3 className="text-2xl font-bold mb-3 text-gray-800">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {item.description}
                  </p>
                </div>

                {/* Hover Effect Background */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-blue-100 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* See More Button */}
        <motion.div 
          className="text-center mt-12"
          variants={itemVariants}
        >
          <Link href="/services">
            <motion.button
              variants={buttonVariants}
              whileHover="hover"
              whileTap="tap"
              className="px-8 py-3 bg-white text-[bg-[#070D20]] rounded-none font-semibold shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              See More Services
            </motion.button>
          </Link>
        </motion.div>

        {/* Bottom Wave */}
        <motion.svg
          viewBox="0 0 1440 120"
          className="w-full absolute left-0 -bottom-20"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          <path
            fill="#1E40AF"
            fillOpacity="0.2"
            d="M0,64L80,58.7C160,53,320,43,480,48C640,53,800,75,960,69.3C1120,64,1280,32,1360,16L1440,0L1440,120L1360,120C1280,120,1120,120,960,120C800,120,640,120,480,120C320,120,160,120,80,120L0,120Z"
          ></path>
        </motion.svg>
      </div>
    </motion.section>
  );
}