'use client';

import React from 'react';
import Link from 'next/link';
import { Layout, Monitor, Code, Framer } from 'lucide-react';
import { motion } from 'motion/react';

const services = [
  {
    title: 'UI/UX Design',
    description: 'I craft refined, user-centric experiences that balance aesthetics and functionality, designed to elevate engagement and guide users toward meaningful action.',
    icon: Layout,
  },
  {
    title: 'WordPress Development',
    description: 'I develop bespoke WordPress websites engineered for performance, scalability, and seamless content management—built to support long-term growth.',
    icon: Code,
  },
  {
    title: 'Framer Development',
    description: 'I design and develop modern, immersive websites in Framer, combining fluid interactions with high-performance builds to create standout digital experiences.',
    icon: Framer,
  },
  {
    title: 'Website Development',
    description: 'I build high-performance, fully responsive websites with precision and attention to detail, ensuring a seamless and elevated experience across all devices.',
    icon: Monitor,
  },
];

export const Expertise = () => {
  return (
    <section id="services" className="relative py-24 bg-white dark:bg-[#050505] transition-colors duration-300 overflow-hidden">
      <div className="absolute inset-0 bg-dots opacity-50 pointer-events-none"></div>
      <div className="max-w-[1280px] mx-auto px-6 md:px-[120px] text-center relative z-10">
        <div className="inline-block px-4 py-1 rounded-full bg-[#00FF00] text-black text-xs font-bold mb-6">
          Services
        </div>
        <h2 className="text-4xl md:text-5xl font-medium tracking-[-0.06em] mb-6 dark:text-white">My Expertise</h2>
        <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto mb-16 leading-[1.2] tracking-[-0.04em]">
          I design and develop websites that work as hard as you do. <br />No unnecessary features. No wasted space.<br />
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 text-left">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="group cursor-default"
            >
              <motion.div
                className="mb-6 p-3 inline-block bg-gray-50 dark:bg-white/5 rounded-lg group-hover:bg-[#00FF00]/20 transition-all duration-300"
                whileHover={{ rotate: 5, scale: 1.1 }}
              >
                <service.icon className="w-6 h-6 group-hover:text-black dark:group-hover:text-white transition-colors" />
              </motion.div>
              <h3 className="text-xl font-medium tracking-[-0.06em] mb-4 group-hover:text-[#00DD00] transition-colors dark:text-white">{service.title}</h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm leading-[1.2] tracking-[-0.04em]">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>

        <div className="mt-16">
          <Link href="/services">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-zinc-200 dark:bg-zinc-800 text-zinc-900 dark:text-zinc-100 px-10 py-4 rounded-xl text-sm font-medium hover:bg-zinc-300 dark:hover:bg-zinc-700 transition-all shadow-sm"
            >
              View more Services
            </motion.button>
          </Link>
        </div>
      </div>
    </section>
  );
};
