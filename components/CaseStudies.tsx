'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowUpRight } from 'lucide-react';
import { motion } from 'motion/react';

const caseStudies = [
  {
    title: 'ELEV8 Consulting',
    slug: 'elev8-consulting',
    subtitle: 'Streamlining Occupational Rehabilitation',
    description: 'A comprehensive digital transformation for an Australian healthcare provider. We focused on building a trust-centric platform that simplifies the referral process for complex occupational rehabilitation services.',
    image: '/elev8-consulting.png',
    tags: ['Healthcare', 'WordPress', 'UX Strategy', 'Conversion Optimization'],
    link: 'https://elev8consulting.au/',
    stats: [
      { label: 'Platform', value: 'WordPress' },
      { label: 'Focus', value: 'Trust & Referrals' },
    ]
  },
  {
    title: 'ELEV8 Wellness & Health',
    slug: 'elev8-wellness-health',
    subtitle: 'Empowering Holistic Wellbeing',
    description: 'Designing an accessible and approachable platform for NDIS and Home Care Package clients. The goal was to create a digital space that feels supportive while providing clear pathways to independence.',
    image: '/elev8-wellness.png',
    tags: ['Healthcare', 'UI/UX Design', 'Accessibility', 'NDIS'],
    link: 'https://elev8wellnesshealth.au/',
    stats: [
      { label: 'Platform', value: 'WordPress' },
      { label: 'Focus', value: 'Accessibility' },
    ]
  }
];

export const CaseStudies = () => {
  return (
    <section className="relative py-24 bg-[#F5F5F2] dark:bg-[#0A0A0A] transition-colors duration-300 overflow-hidden">
      <div className="absolute inset-0 bg-grid-subtle opacity-30 pointer-events-none"></div>
      <div className="max-w-[1280px] mx-auto px-6 md:px-[120px] relative z-10">
        <div className="mb-16">
          <div className="inline-block px-4 py-1 rounded-full bg-[#FF6B00] text-black text-xs font-bold mb-6">
            Case Studies
          </div>
          <h2 className="text-4xl md:text-5xl font-medium tracking-[-0.06em] mb-6 dark:text-white">Featured Projects</h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl leading-[1.2] tracking-[-0.04em]">
            Deep dives into how we solve complex problems through design and development.
          </p>
        </div>

        <div className="space-y-32">
          {caseStudies.map((study, index) => (
            <div key={index} className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-12 items-center`}>
              <div className="w-full lg:w-1/2">
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8 }}
                  className="relative aspect-[4/3] rounded-3xl overflow-hidden group shadow-2xl"
                >
                  <Image
                    src={study.image}
                    alt={study.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-colors duration-500"></div>
                </motion.div>
              </div>

              <div className="w-full lg:w-1/2 space-y-8">
                <div>
                  <h3 className="text-sm font-bold text-[#FF6B00] uppercase tracking-widest mb-2">{study.subtitle}</h3>
                  <h4 className="text-4xl md:text-5xl font-medium tracking-[-0.06em] dark:text-white mb-6">{study.title}</h4>
                  <p className="text-lg text-gray-600 dark:text-gray-400 leading-[1.4] tracking-[-0.02em]">
                    {study.description}
                  </p>
                </div>

                <div className="grid grid-cols-2 gap-8 py-8 border-y border-gray-100 dark:border-white/10">
                  {study.stats.map((stat, i) => (
                    <div key={i}>
                      <p className="text-[10px] uppercase tracking-widest text-gray-400 mb-1">{stat.label}</p>
                      <p className="text-xl font-medium dark:text-white">{stat.value}</p>
                    </div>
                  ))}
                </div>

                <div className="flex flex-wrap gap-2">
                  {study.tags.map((tag, i) => (
                    <span key={i} className="px-3 py-1 bg-gray-100 dark:bg-white/10 rounded-full text-[10px] font-bold uppercase tracking-wider dark:text-gray-300">
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex flex-wrap gap-6 pt-4">
                  <Link href={`/work/${study.slug}`}>
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="bg-[#FF6B00] text-black px-8 py-3 rounded-full text-sm font-bold hover:bg-[#C96A13] hover:text-white transition-all flex items-center shadow-lg shadow-[#FF6B00]/20"
                    >
                      View Case Study
                    </motion.button>
                  </Link>

                  <Link
                    href={study.link}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="border border-zinc-200 dark:border-white/10 dark:text-white px-8 py-3 rounded-full text-sm font-bold hover:bg-zinc-50 dark:hover:bg-white/5 transition-all flex items-center"
                    >
                      Visit Website
                      <ArrowUpRight className="ml-2 w-4 h-4" />
                    </motion.button>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
