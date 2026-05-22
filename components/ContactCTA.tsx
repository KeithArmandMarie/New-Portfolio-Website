'use client';

import React from 'react';
import { motion } from 'motion/react';
import Link from 'next/link';

export const ContactCTA = () => {
  return (
    <section className="relative py-24 bg-[#F5F5F2] dark:bg-[#0A0A0A] text-center transition-colors duration-300 overflow-hidden">
      <div className="absolute inset-0 bg-grid-subtle opacity-50 pointer-events-none"></div>
      <div className="max-w-[1280px] mx-auto px-6 md:px-[120px] relative z-10">
        <h2 className="text-5xl md:text-6xl font-medium tracking-[-0.06em] mb-6 leading-[0.8] dark:text-[#F5F5F2]">
          Let&apos;s build a website that actually works.
        </h2>
        <p className="text-gray-600 dark:text-gray-400 mb-10 max-w-xl mx-auto leading-[1.2] tracking-[-0.04em]">
          Let&apos;s talk about what your business needs and how I can help build it.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4 mb-24">
          <Link href="mailto:caballerokeith2@gmail.com">
            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-[#FF6B00] text-white px-10 py-4 rounded-xl text-sm font-medium hover:bg-[#C96A13] transition-all w-full sm:w-auto shadow-lg shadow-[#FF6B00]/20"
            >
              Contact
            </motion.button>
          </Link>
          <Link href="/work">
            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white dark:bg-[#171717] text-zinc-900 dark:text-zinc-100 px-10 py-4 rounded-xl text-sm font-medium hover:bg-zinc-50 dark:hover:bg-[#171717]/80 transition-all w-full sm:w-auto shadow-sm"
            >
              Work
            </motion.button>
          </Link>
        </div>
      </div>

      <div className="w-full select-none mt-12 relative flex justify-center items-center overflow-hidden py-10">
        <motion.h2
          initial={{ y: "100%", opacity: 0, skewY: 5 }}
          whileInView={{ y: 0, opacity: 1, skewY: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1] }}
          className="text-[22vw] font-black leading-none tracking-tighter dark:text-white/[0.12] text-black/[0.12] whitespace-nowrap uppercase select-none"
        >
          KEITH
        </motion.h2>
      </div>
    </section>
  );
};
