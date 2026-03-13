'use client';

import React from 'react';
import { motion, Variants } from 'motion/react';
import Link from 'next/link';

export const Hero = () => {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  return (
    <section className="relative pt-32 pb-20 px-4 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 -z-10 h-full w-full bg-white dark:bg-[#050505] transition-colors duration-300 overflow-hidden">
        {/* Noise Overlay */}
        <div className="absolute inset-0 bg-noise opacity-[0.03] dark:opacity-[0.05] pointer-events-none"></div>
        
        {/* Bottom Fade */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white dark:from-[#050505] to-transparent z-10"></div>
        
        {/* Atmospheric Glows */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] bg-[#00FF00]/5 dark:bg-[#00FF00]/10 blur-[120px] rounded-full opacity-50 dark:opacity-30 -translate-y-1/2"></div>
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-[#00FF00]/5 dark:bg-[#00FF00]/5 blur-[100px] rounded-full opacity-30 translate-x-1/4 translate-y-1/4"></div>

        {/* Abstract Graphics */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.4 }}
          transition={{ duration: 2 }}
          className="absolute inset-0"
        >
          {/* Floating Circle 1 */}
          <motion.div
            animate={{ 
              y: [0, -20, 0],
              rotate: [0, 5, 0]
            }}
            transition={{ 
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="absolute top-[20%] left-[10%] w-64 h-64 border border-[#00FF00]/20 dark:border-[#00FF00]/10 rounded-full"
          />

          {/* Floating Circle 2 */}
          <motion.div
            animate={{ 
              y: [0, 30, 0],
              rotate: [0, -10, 0]
            }}
            transition={{ 
              duration: 10,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="absolute bottom-[10%] right-[15%] w-96 h-96 border border-[#00FF00]/10 dark:border-[#00FF00]/5 rounded-full"
          />

          {/* Abstract Lines */}
          <div className="absolute top-[40%] right-[5%] w-32 h-[1px] bg-gradient-to-r from-transparent via-[#00FF00]/30 to-transparent rotate-45" />
          <div className="absolute top-[45%] right-[7%] w-32 h-[1px] bg-gradient-to-r from-transparent via-[#00FF00]/20 to-transparent rotate-45" />
          
          <div className="absolute bottom-[30%] left-[5%] w-48 h-[1px] bg-gradient-to-r from-transparent via-[#00FF00]/20 to-transparent -rotate-12" />
          
          {/* Small Dots */}
          <div className="absolute top-1/4 right-1/4 w-1 h-1 bg-[#00FF00]/40 rounded-full" />
          <div className="absolute top-1/3 left-1/3 w-1.5 h-1.5 bg-[#00FF00]/30 rounded-full" />
          <div className="absolute bottom-1/4 left-1/2 w-1 h-1 bg-[#00FF00]/20 rounded-full" />

          {/* Plus Signs */}
          <div className="absolute top-[15%] right-[20%] text-[#00FF00]/20 dark:text-[#00FF00]/10 font-light text-2xl select-none">+</div>
          <div className="absolute bottom-[25%] left-[15%] text-[#00FF00]/20 dark:text-[#00FF00]/10 font-light text-2xl select-none">+</div>
          
          {/* Floating Square */}
          <motion.div
            animate={{ 
              rotate: [45, 90, 45],
              scale: [1, 1.1, 1]
            }}
            transition={{ 
              duration: 12,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="absolute top-[60%] left-[8%] w-12 h-12 border border-[#00FF00]/20 dark:border-[#00FF00]/10 rounded-lg rotate-45"
          />
        </motion.div>
      </div>

      <motion.div 
        className="max-w-[1280px] mx-auto px-6 md:px-[120px] text-center"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div
          variants={itemVariants}
          className="inline-flex items-center px-4 py-1.5 rounded-full bg-[#00FF00] text-black text-xs font-semibold mb-8 shadow-[0_0_20px_rgba(0,255,0,0.3)]"
        >
          <span className="w-2 h-2 bg-black rounded-full mr-2 animate-pulse"></span>
          Keith Caballero Online Portfolio
        </motion.div>
        
        <motion.h1
          variants={itemVariants}
          className="text-5xl md:text-7xl font-medium tracking-[-0.06em] mb-8 leading-[0.8] dark:text-white"
        >
          Websites For Service <br /> Based Businesses
        </motion.h1>
        
        <motion.p
          variants={itemVariants}
          className="text-lg md:text-xl text-gray-600 dark:text-gray-400 mb-10 max-w-2xl mx-auto leading-[1.2] tracking-[-0.04em]"
        >
          I&apos;m Keith Caballero, a UI UX Designer and WordPress Developer helping service based businesses build clear, high performing websites
        </motion.p>
        
        <motion.div
          variants={itemVariants}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <Link 
            href="https://drive.google.com/drive/u/2/folders/1vQ5c-UjkvYq4-cwUYfO7MPSHaDdirl8v" 
            target="_blank" 
            rel="noopener noreferrer"
          >
            <button className="bg-zinc-200 dark:bg-zinc-800 text-zinc-900 dark:text-zinc-100 px-10 py-4 rounded-xl text-sm font-medium hover:bg-zinc-300 dark:hover:bg-zinc-700 transition-all shadow-sm">
              Download Resume
            </button>
          </Link>
        </motion.div>
      </motion.div>
    </section>
  );
};
