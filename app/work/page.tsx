'use client';

import React from 'react';
import { motion } from 'motion/react';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { ScrollToTop } from '@/components/ScrollToTop';
import { ContactCTA } from '@/components/ContactCTA';
import { RecentWorks } from '@/components/RecentWorks';
import { CaseStudies } from '@/components/CaseStudies';
import { ScrollReveal } from '@/components/ScrollReveal';

export default function WorkPage() {
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
              Portfolio
            </div>
            <h1 className="text-6xl md:text-8xl font-medium tracking-[-0.06em] leading-[0.9] mb-8 dark:text-white">
              Selected <br />
              <span className="text-[#00FF00]">Works.</span>
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl leading-[1.2] tracking-[-0.04em]">
              A collection of projects where design meets strategy to solve real business problems.
            </p>
          </motion.div>
        </div>
      </section>

      <ScrollReveal>
        <CaseStudies />
      </ScrollReveal>

      <ScrollReveal>
        <RecentWorks />
      </ScrollReveal>
      
      <ContactCTA />
      <Footer />
      <ScrollToTop />
    </main>
  );
}
