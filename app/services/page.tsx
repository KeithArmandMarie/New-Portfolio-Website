'use client';

import React from 'react';
import { motion } from 'motion/react';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { ScrollToTop } from '@/components/ScrollToTop';
import { ContactCTA } from '@/components/ContactCTA';
import { ScrollReveal } from '@/components/ScrollReveal';
import { Layout, Monitor, Code, Target, RefreshCcw, Palette, Search, Wrench, Framer, Headset } from 'lucide-react';

const allServices = [
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
    title: 'Website Strategy',
    description: 'I architect data-informed website strategies that align structure, messaging, and user journey—ensuring every touchpoint contributes to measurable business outcomes.',
    icon: Target,
  },
  {
    title: 'Website Redesign',
    description: 'I reimagine and elevate existing websites into polished, conversion-driven platforms that reflect brand authority and deliver a significantly improved user experience.',
    icon: RefreshCcw,
  },
  {
    title: 'Website Development',
    description: 'I build high-performance, fully responsive websites with precision and attention to detail, ensuring a seamless and elevated experience across all devices.',
    icon: Monitor,
  },
  {
    title: 'Graphic Design',
    description: 'I design visually sophisticated assets that reinforce brand identity, communicate value with clarity, and create a lasting impression.',
    icon: Palette,
  },
  {
    title: 'SEO Setup and Optimization',
    description: 'I implement strategic SEO foundations and on-page optimization designed to enhance visibility, improve search rankings, and support sustainable growth.',
    icon: Search,
  },
  {
    title: 'Ongoing Website Support',
    description: 'I provide dedicated, ongoing support to maintain, optimize, and continuously refine your website—ensuring it performs at the highest standard over time.',
    icon: Wrench,
  },
  {
    title: 'Virtual Assistant',
    description: 'I deliver high-level, dependable support across administrative and digital operations, allowing you to focus on growth while I ensure everything runs seamlessly behind the scenes.',
    icon: Headset,
  },
];

export default function ServicesPage() {
  return (
    <main className="min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <ScrollReveal>
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
      </ScrollReveal>

      {/* Services Marquee Section */}
      <ScrollReveal>
        <section className="relative py-12 bg-white dark:bg-[#050505] transition-colors duration-300 overflow-hidden flex flex-col gap-6">
          {/* Fade edges */}
          <div className="absolute left-0 top-0 w-32 md:w-[250px] h-full bg-gradient-to-r from-white dark:from-[#050505] to-transparent z-10 pointer-events-none"></div>
          <div className="absolute right-0 top-0 w-32 md:w-[250px] h-full bg-gradient-to-l from-white dark:from-[#050505] to-transparent z-10 pointer-events-none"></div>
          
          {/* Row 1 */}
          <div className="flex w-max animate-marquee hover:[animation-play-state:paused] gap-6 px-6" style={{ animationDuration: '90s' }}>
            {[...allServices.slice(0, 5), ...allServices.slice(0, 5)].map((service, index) => (
              <div
                key={index}
                className="w-[320px] md:w-[400px] shrink-0 p-8 rounded-3xl bg-gray-50 dark:bg-white/5 border border-black/5 dark:border-white/10 hover:border-[#00FF00]/50 transition-all duration-300 group pointer-events-auto cursor-default"
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className="p-4 bg-white dark:bg-black rounded-2xl shadow-sm group-hover:bg-[#00FF00]/10 transition-colors">
                    <service.icon className="w-6 h-6 text-zinc-800 dark:text-zinc-200 group-hover:text-[#00DD00] transition-colors" strokeWidth={1.5} />
                  </div>
                  <h3 className="text-xl md:text-2xl font-medium tracking-[-0.04em] dark:text-white group-hover:text-[#00DD00] transition-colors">
                    {service.title}
                  </h3>
                </div>
                <p className="text-gray-600 dark:text-gray-400 text-sm md:text-base leading-[1.6]">
                  {service.description}
                </p>
              </div>
            ))}
          </div>

          {/* Row 2 */}
          <div className="flex w-max animate-marquee hover:[animation-play-state:paused] gap-6 px-6" style={{ animationDuration: '120s', animationDirection: 'reverse' }}>
            {[...allServices.slice(5), ...allServices.slice(5)].map((service, index) => (
              <div
                key={`row2-${index}`}
                className="w-[320px] md:w-[400px] shrink-0 p-8 rounded-3xl bg-gray-50 dark:bg-white/5 border border-black/5 dark:border-white/10 hover:border-[#00FF00]/50 transition-all duration-300 group pointer-events-auto cursor-default"
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className="p-4 bg-white dark:bg-black rounded-2xl shadow-sm group-hover:bg-[#00FF00]/10 transition-colors">
                    <service.icon className="w-6 h-6 text-zinc-800 dark:text-zinc-200 group-hover:text-[#00DD00] transition-colors" strokeWidth={1.5} />
                  </div>
                  <h3 className="text-xl md:text-2xl font-medium tracking-[-0.04em] dark:text-white group-hover:text-[#00DD00] transition-colors">
                    {service.title}
                  </h3>
                </div>
                <p className="text-gray-600 dark:text-gray-400 text-sm md:text-base leading-[1.6]">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </section>
      </ScrollReveal>

      {/* Process Section */}
      <ScrollReveal>
        <section className="relative py-24 bg-gray-50 dark:bg-[#0a0a0a] transition-colors duration-300">
          <div className="absolute inset-0 bg-dots opacity-50 pointer-events-none"></div>
          <div className="max-w-[1280px] mx-auto px-6 md:px-[120px] relative z-10">
            <div className="text-center mb-20">
              <div className="inline-block px-4 py-1 rounded-full bg-[#00FF00]/10 text-[#00DD00] border border-[#00FF00]/20 text-xs font-bold mb-6 uppercase tracking-widest">
                Workflow
              </div>
              <h2 className="text-5xl md:text-6xl font-medium tracking-[-0.06em] dark:text-white">
                My Process
              </h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative">
              {/* Connecting Line */}
              <div className="hidden md:block absolute top-[48px] left-[15%] right-[15%] h-[1px] bg-gradient-to-r from-transparent via-[#00FF00]/30 to-transparent"></div>
              
              {[
                {
                  step: '01',
                  title: 'Discovery & Strategy',
                  desc: 'We start by understanding your goals, target audience, and brand vision to create a data-driven blueprint for your project.'
                },
                {
                  step: '02',
                  title: 'Design & Development',
                  desc: 'I craft wireframes and high-fidelity designs, followed by flawless, responsive development using modern tech stacks.'
                },
                {
                  step: '03',
                  title: 'Launch & Optimization',
                  desc: 'After rigorous testing, we go live. I ensure your site is fast, modern, and ready to scale over time.'
                }
              ].map((process, idx) => (
                <div key={idx} className="relative z-10 flex flex-col items-center text-center group">
                  <div className="w-24 h-24 mb-8 rounded-[2rem] bg-white dark:bg-black border border-gray-100 dark:border-white/10 flex items-center justify-center text-2xl font-black text-gray-300 dark:text-gray-700 group-hover:text-[#00FF00] group-hover:border-[#00FF00]/50 group-hover:-rotate-6 transition-all shadow-sm">
                    {process.step}
                  </div>
                  <h3 className="text-2xl font-medium tracking-[-0.04em] mb-4 dark:text-white group-hover:text-[#00DD00] transition-colors">
                    {process.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 text-sm md:text-base leading-[1.6]">
                    {process.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </ScrollReveal>
      
      <ScrollReveal>
        <ContactCTA />
      </ScrollReveal>
      
      <ScrollReveal>
        <Footer />
      </ScrollReveal>
      
      <ScrollToTop />
    </main>
  );
}
