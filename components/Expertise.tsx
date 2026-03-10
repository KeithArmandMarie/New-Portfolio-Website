'use client';

import React from 'react';
import Link from 'next/link';
import { Layout, Monitor, Code, PenTool } from 'lucide-react';
import { motion } from 'motion/react';

const services = [
  {
    title: 'UI/UX Design',
    description: 'I design intuitive, user-centered interfaces that balance aesthetics with functionality, ensuring a seamless journey for your clients.',
    icon: Layout,
  },
  {
    title: 'WordPress Development',
    description: 'Custom WordPress solutions built for performance, security, and ease of use, tailored specifically for service-based businesses.',
    icon: Code,
  },
  {
    title: 'Website Strategy',
    description: 'I help businesses define their online goals and create a strategic roadmap to achieve measurable results and growth.',
    icon: Monitor,
  },
  {
    title: 'Performance Optimization',
    description: 'Ensuring your website loads lightning fast and performs at its best across all devices and search engines.',
    icon: PenTool,
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
          I design and develop websites that work as hard as you do. No unnecessary features. No wasted space.
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
              className="px-6 py-3 border border-black dark:border-white rounded-md text-sm font-semibold hover:bg-black dark:hover:bg-white hover:text-white dark:hover:text-black transition-all shadow-sm hover:shadow-md dark:text-white"
            >
              View more Services
            </motion.button>
          </Link>
        </div>
      </div>
    </section>
  );
};
