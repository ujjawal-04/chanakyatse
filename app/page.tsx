// import React from 'react'
// import Split from '@/components/split'
// import ScrollableCards from '@/components/scrollcards'
// import WorkWithUsLayout from '@/components/reverseSplit'
// import SlidingText from '@/components/slide'
// import { MarqueeDemo } from '@/components/testimonials'
// import Features from '@/components/features'
// import Info from '@/components/info'
// import Detail from '@/components/detail'
// import LegalServicesSplit from '@/components/new'


// const Page = () => {
//   return (
//     <main className="bg-white">
//       <div className='overflow-x-hidden'>
//         <div className='mt-10'>
//           <Split/>
//         </div>
//         <div className='mt-20'>
//           <Info/>
//         </div>
//         <div className="mt-20">
//           <LegalServicesSplit />
//           </div>
//         <div className='mt-20 mb-20'>
//           <Detail/>
//         </div>
//         <div className="mt-20 mb-28">
//           <Features/>
//         </div>
//         <div className="mt-20">
//           <ScrollableCards/>
//         </div>
      
//         <MarqueeDemo/>
//         <div className="mt-20">
//           <SlidingText/>
//         </div>
//         {/* <div className="mt-20">
//           <WorkWithUsLayout/>
//         </div> */}
//       </div>
//     </main>
//   )
// }

// export default Page


'use client';

import React from 'react';
import Split from '@/components/split';
import ScrollableCards from '@/components/scrollcards';

import SlidingText from '@/components/slide';
import { MarqueeDemo } from '@/components/testimonials';
import Features from '@/components/features';
import Info from '@/components/info';
import Detail from '@/components/detail';
import LegalServicesSplit from '@/components/new';
import { motion } from 'framer-motion';

const GridLines = () => (
  <div className="absolute inset-0 overflow-hidden">
    <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(200,200,255,0.02)_1px,transparent_1px),linear-gradient(rgba(200,200,255,0.02)_1px,transparent_1px)] bg-[size:64px_64px]" />
  </div>
);

const FloatingShapes = () => (
  <>
    {/* 3D-like floating cubes */}
    {Array.from({ length: 3 }).map((_, i) => (
      <motion.div
        key={`cube-${i}`}
        className="absolute w-24 h-24"
        style={{
          perspective: '1000px',
          top: `${20 + i * 30}%`,
          left: `${10 + i * 40}%`,
        }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: i * 0.5 }}
      >
        <motion.div
          className="w-full h-full relative"
          animate={{
            rotateX: [0, 360],
            rotateY: [0, 360],
          }}
          transition={{
            duration: 20 + i * 5,
            repeat: Infinity,
            ease: "linear",
          }}
        >
          <div className="absolute inset-0 border-2 border-blue-200/20 bg-blue-50/10 backdrop-blur-sm transform-gpu" />
          <div className="absolute inset-0 border-2 border-blue-200/20 bg-blue-50/10 backdrop-blur-sm transform-gpu rotate-45" />
        </motion.div>
      </motion.div>
    ))}
  </>
);

const ConnectingLines = () => (
  <svg className="absolute inset-0 w-full h-full pointer-events-none">
    <motion.path
      d="M0 100 Q 400 300, 800 100 T 1600 100"
      fill="none"
      stroke="rgba(200, 200, 255, 0.1)"
      strokeWidth="2"
      initial={{ pathLength: 0 }}
      animate={{ pathLength: 1 }}
      transition={{ duration: 2, repeat: Infinity }}
    />
    <motion.path
      d="M200 0 Q 400 400, 600 200 T 1000 400"
      fill="none"
      stroke="rgba(200, 200, 255, 0.1)"
      strokeWidth="2"
      initial={{ pathLength: 0 }}
      animate={{ pathLength: 1 }}
      transition={{ duration: 3, repeat: Infinity, delay: 1 }}
    />
  </svg>
);

const BackgroundGradients = () => (
  <>
    <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-blue-50/50 to-transparent" />
    <div className="absolute top-1/4 right-0 w-96 h-96 bg-purple-100/20 rounded-full filter blur-3xl" />
    <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-blue-100/20 rounded-full filter blur-3xl" />
  </>
);

const FloatingParticles = () => (
  <>
    {Array.from({ length: 20 }).map((_, i) => (
      <motion.div
        key={`particle-${i}`}
        className="absolute w-2 h-2 bg-blue-200/30 rounded-full"
        style={{
          top: `${Math.random() * 100}%`,
          left: `${Math.random() * 100}%`,
        }}
        animate={{
          y: [0, -30, 0],
          x: [0, Math.random() * 20 - 10, 0],
          opacity: [0.3, 0.6, 0.3],
        }}
        transition={{
          duration: 5 + Math.random() * 5,
          repeat: Infinity,
          ease: "linear",
          delay: i * 0.2,
        }}
      />
    ))}
  </>
);

const Page = () => {
  return (
    <main className="bg-white">
      <div className="overflow-x-hidden relative">
        {/* Background Elements */}
        <div className="fixed inset-0 pointer-events-none">
          <GridLines />
          <BackgroundGradients />
          <ConnectingLines />
          <FloatingShapes />
          <FloatingParticles />
        </div>

        {/* Content */}
        <div className="relative z-10">
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="mt-0"
          >
            <Split />
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="mt-20"
          >
            <Info />
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className=""
          >
            <LegalServicesSplit />
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className=" mb-20"
          >
            <Detail />
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="mt-20 mb-28"
          >
            <Features />
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="mt-20"
          >
            <ScrollableCards />
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <MarqueeDemo />
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="mt-20"
          >
            <SlidingText />
          </motion.div>
        </div>
      </div>
    </main>
  );
};

export default Page;