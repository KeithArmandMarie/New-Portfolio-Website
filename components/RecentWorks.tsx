'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowUpRight } from 'lucide-react';
import { motion } from 'motion/react';

const projects = [
  {
    title: 'ELEV8 Consulting',
    description: 'A professional, service-driven website for an Australian occupational rehabilitation provider, focused on building trust and streamlining the referral process.',
    image: 'https://s.wordpress.com/mshots/v1/https%3A%2F%2Felev8consulting.au%2F?w=800&h=600',
    tags: ['Healthcare', 'WordPress', 'UX Strategy'],
    link: 'https://elev8consulting.au/',
  },
  {
    title: 'ELEV8 Wellness & Health',
    description: 'A clean, approachable platform for holistic health services, designed to guide NDIS and Home Care Package clients toward independence and wellbeing.',
    image: 'https://s.wordpress.com/mshots/v1/https%3A%2F%2Felev8wellnesshealth.au%2F?w=800&h=600',
    tags: ['Healthcare', 'UI/UX Design', 'Accessibility'],
    link: 'https://elev8wellnesshealth.au/',
  },
  {
    title: 'GoGorilla',
    description: 'A bold, high-performance website for a marketing FinTech platform, featuring a complex structure that communicates growth, capital, and talent solutions.',
    image: 'https://s.wordpress.com/mshots/v1/https%3A%2F%2Fwww.gogorilla.com%2F?w=800&h=600',
    tags: ['FinTech', 'Web Development', 'Performance'],
    link: 'https://www.gogorilla.com/',
  },
];

export const RecentWorks = () => {
  return (
    <section id="work" className="relative py-24 bg-gray-50 dark:bg-[#0a0a0a] transition-colors duration-300 overflow-hidden">
      <div className="absolute inset-0 bg-grid-subtle opacity-50 pointer-events-none"></div>
      <div className="max-w-[1280px] mx-auto px-6 md:px-[120px] relative z-10">
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-1 rounded-full bg-[#00FF00] text-black text-xs font-bold mb-6">
            Works
          </div>
          <h2 className="text-4xl md:text-5xl font-medium tracking-[-0.06em] mb-6 dark:text-white">Recent Works</h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto leading-[1.2] tracking-[-0.04em]">
            Selected work that shows what&apos;s possible when design meets strategy.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -12 }}
              className="bg-white dark:bg-white/5 rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 group"
            >
              <div className="relative h-64 w-full overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-500" />
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-medium tracking-[-0.06em] mb-4 group-hover:text-[#00DD00] transition-colors dark:text-white">{project.title}</h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm mb-6 leading-[1.2] tracking-[-0.04em]">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-8">
                  {project.tags.map((tag, i) => (
                    <span key={i} className="px-3 py-1 bg-gray-100 dark:bg-white/10 rounded-full text-[10px] font-bold uppercase tracking-wider group-hover:bg-[#00FF00]/10 transition-colors dark:text-gray-300">
                      {tag}
                    </span>
                  ))}
                </div>
                <Link 
                  href={project.link} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-block"
                >
                  <motion.button 
                    whileHover={{ x: 5 }}
                    className="flex items-center text-sm font-bold group/btn dark:text-white"
                  >
                    View project
                    <ArrowUpRight className="ml-1 w-4 h-4 transition-transform group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1" />
                  </motion.button>
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <Link href="/work">
            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-3 border border-black dark:border-white rounded-md text-sm font-semibold hover:bg-black dark:hover:bg-white hover:text-white dark:hover:text-black transition-all shadow-sm hover:shadow-md dark:text-white"
            >
              View more
            </motion.button>
          </Link>
        </div>
      </div>
    </section>
  );
};
