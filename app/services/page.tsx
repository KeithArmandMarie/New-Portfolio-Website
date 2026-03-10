'use client';

import React from 'react';
import { motion } from 'motion/react';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { ScrollToTop } from '@/components/ScrollToTop';
import { ContactCTA } from '@/components/ContactCTA';
import { Expertise } from '@/components/Expertise';

export default function ServicesPage() {
  return (
    <main className="min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative pt-40 pb-20 px-6 overflow-hidden">
        <div className="absolute inset-0 bg-grid-subtle opacity-30 pointer-events-none"></div>
        <div className="max-w-[1280px] mx-auto md:px-[120px] relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-block px-4 py-1 rounded-full bg-[#00FF00] text-black text-xs font-bold mb-6">
              Services
            </div>
            <h1 className="text-6xl md:text-8xl font-medium tracking-[-0.06em] leading-[0.9] mb-8 dark:text-white">
              What I <br />
              <span className="text-[#00FF00]">Offer.</span>
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl leading-[1.2] tracking-[-0.04em]">
              Comprehensive design and development solutions tailored to your business needs.
            </p>
          </motion.div>
        </div>
      </section>

      <Expertise />
      
      <ContactCTA />
      <Footer />
      <ScrollToTop />
    </main>
  );
}
