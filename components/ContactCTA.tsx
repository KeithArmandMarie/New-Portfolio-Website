'use client';

import React from 'react';
import { motion } from 'motion/react';
import Link from 'next/link';

export const ContactCTA = () => {
  return (
    <section className="relative py-24 bg-white dark:bg-[#050505] text-center transition-colors duration-300 overflow-hidden">
      <div className="absolute inset-0 bg-grid-subtle opacity-50 pointer-events-none"></div>
      <div className="max-w-[1280px] mx-auto px-6 md:px-[120px] relative z-10">
        <h2 className="text-5xl md:text-6xl font-medium tracking-[-0.06em] mb-6 leading-[0.8] dark:text-white">
          Let&apos;s build a website that actually works.
        </h2>
        <p className="text-gray-600 dark:text-gray-400 mb-10 max-w-xl mx-auto leading-[1.2] tracking-[-0.04em]">
          Let&apos;s talk about what your business needs and how I can help build it.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4 mb-24">
          <Link href="mailto:caballerokeith2@gmail.com">
            <motion.button 
              whileHover={{ scale: 1.05, boxShadow: "0 10px 20px rgba(0,255,0,0.2)" }}
              whileTap={{ scale: 0.95 }}
              className="bg-[#00FF00] text-black px-8 py-4 rounded-md text-sm font-bold hover:bg-[#00DD00] transition-all w-full sm:w-auto"
            >
              Contact
            </motion.button>
          </Link>
          <Link href="/work">
            <motion.button 
              whileHover={{ scale: 1.05, backgroundColor: "#f9fafb" }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 border border-gray-200 dark:border-white/10 rounded-md text-sm font-bold hover:bg-gray-50 dark:hover:bg-white/5 transition-all dark:text-white w-full sm:w-auto"
            >
              Work
            </motion.button>
          </Link>
        </div>
        
        <div className="overflow-hidden select-none">
          <motion.h2
            initial={{ y: 100, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-[15vw] md:text-[20vw] font-black leading-none tracking-tighter dark:text-white/5"
          >
            KEITH
          </motion.h2>
        </div>
      </div>
    </section>
  );
};
