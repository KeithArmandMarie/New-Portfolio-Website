'use client';

import React from 'react';
import { useParams, useRouter } from 'next/navigation';
import { motion } from 'motion/react';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { ScrollToTop } from '@/components/ScrollToTop';
import { ContactCTA } from '@/components/ContactCTA';
import { ArrowLeft, ArrowUpRight, CheckCircle2 } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

const caseStudiesData = {
  'elev8-consulting': {
    title: 'ELEV8 Consulting',
    subtitle: 'Website UX Strategy and Digital Platform Design',
    description: 'A comprehensive digital transformation for an Australian healthcare provider. We focused on building a trust-centric platform that simplifies the referral process for complex occupational rehabilitation services.',
    image: 'https://s.wordpress.com/mshots/v1/https%3A%2F%2Felev8consulting.au%2F?w=1920&h=1080',
    link: 'https://elev8consulting.au/',
    tags: ['Healthcare', 'WordPress', 'UX Strategy', 'Conversion Optimization'],
    overview: 'ELEV8 Consulting provides rehabilitation and recovery services for individuals who were injured in their workplace. The organization works closely with businesses, employees, and healthcare professionals to support recovery, rebuild confidence, and enable a safe return to work.',
    problem: 'The previous digital presence did not clearly communicate the full scope of ELEV8’s services. Workplace rehabilitation programs involve multiple steps and specialized services, which can easily become overwhelming if not presented clearly. Visitors needed a way to quickly understand what ELEV8 offers, who the services are for, and how the programs support recovery and return to work outcomes.',
    role: {
      title: 'UI UX Designer & Web Developer',
      responsibilities: ['UX Strategy', 'Information Architecture', 'Interface Design', 'Content Structure Planning', 'WordPress Implementation']
    },
    insights: {
      intro: 'Understanding the audience was essential in designing the experience. The website needed to serve multiple user groups including employers, injured workers, and organizations seeking rehabilitation solutions.',
      points: [
        'Visitors need clear explanations of rehabilitation services and their outcomes.',
        'Organizations want confidence that programs are structured, reliable, and professionally delivered.',
        'Complex healthcare information must be simplified into digestible sections.'
      ]
    },
    strategy: 'The website experience was designed to guide visitors through a clear journey. A structured information architecture was created to organize ELEV8’s services in a way that makes them easy to explore and understand. Each program was given its own dedicated page with clear explanations of purpose, benefits, and outcomes.',
    design: 'The design focused on clarity, credibility, and professionalism. Clean layouts, strong visual hierarchy, and structured content blocks were used to make complex information easier to read and understand. Typography and spacing were carefully balanced to ensure readability across devices.',
    development: 'The website was built using WordPress to provide flexibility and scalability. Pages were designed with modular sections that allow the ELEV8 team to easily update content while maintaining visual consistency. The platform ensures responsive performance across all devices.',
    outcome: 'The final website provides a structured digital platform that clearly communicates ELEV8 Consulting’s services and mission. Visitors can now easily explore rehabilitation programs, understand their purpose, and learn how the organization supports recovery and workplace reintegration.'
  },
  'elev8-wellness-health': {
    title: 'ELEV8 Wellness & Health',
    subtitle: 'Website Design for Workplace Wellness Programs',
    description: 'Designing an accessible and approachable platform for NDIS and Home Care Package clients. The goal was to create a digital space that feels supportive while providing clear pathways to independence.',
    image: 'https://s.wordpress.com/mshots/v1/https%3A%2F%2Felev8wellnesshealth.au%2F?w=1920&h=1080',
    link: 'https://elev8wellnesshealth.au/',
    tags: ['Healthcare', 'UI/UX Design', 'Accessibility', 'NDIS'],
    overview: 'ELEV8 Wellness and Health focuses on improving employee wellbeing through programs that support recovery, resilience, and long term health outcomes.',
    problem: 'Wellness programs can often feel abstract when presented online. Organizations may struggle to understand the practical impact of these services or how they translate into real benefits for employees. The challenge was to transform a wide range of wellness services into a digital experience that is clear, engaging, and outcome focused.',
    role: {
      title: 'UI UX Designer & Web Developer',
      responsibilities: ['UX Strategy', 'Service Page Design', 'Content Structure Planning', 'WordPress Implementation']
    },
    insights: {
      intro: 'The target audience for the website included employers, HR teams, and organizations seeking solutions to support employee wellbeing.',
      points: [
        'Decision makers want to understand the tangible benefits of wellness programs.',
        'Visitors need clear explanations of how each program contributes to employee health.',
        'Content should highlight outcomes rather than simply describing services.'
      ]
    },
    strategy: 'Each wellness service was designed as a clear and focused experience. Programs such as Rebalance, Reclaim, Momentum, ClearPath, Vitality, and RARE were organized into dedicated pages that explain their purpose and benefits. The structure helps organizations easily identify which programs align with their goals.',
    design: 'The visual design emphasizes clarity, accessibility, and professionalism. Layouts were structured to support readability while maintaining an engaging and modern interface. Content blocks, visual hierarchy, and clear section flow were used to help visitors quickly understand each program.',
    development: 'The website was implemented using WordPress, allowing the ELEV8 team to manage and expand content as their wellness programs evolve. The platform ensures consistent design, responsive layouts, and an accessible browsing experience.',
    outcome: 'The final website provides a clear and engaging platform that communicates the value of ELEV8 Wellness and Health programs. Organizations can easily explore the available services and understand how these initiatives support employee wellbeing.'
  }
};

export default function CaseStudyPage() {
  const params = useParams();
  const router = useRouter();
  const slug = params.slug as string;
  const study = caseStudiesData[slug as keyof typeof caseStudiesData];

  if (!study) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-white dark:bg-[#050505]">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4 dark:text-white">Case Study Not Found</h1>
          <button 
            onClick={() => router.push('/work')}
            className="text-[#00FF00] font-bold flex items-center justify-center mx-auto"
          >
            <ArrowLeft className="mr-2 w-4 h-4" /> Back to Work
          </button>
        </div>
      </div>
    );
  }

  return (
    <main className="min-h-screen bg-white dark:bg-[#050505] transition-colors duration-300">
      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-6 overflow-hidden">
        <div className="absolute inset-0 bg-grid-subtle opacity-30 pointer-events-none"></div>
        <div className="max-w-[1280px] mx-auto md:px-[120px] relative z-10">
          <motion.button
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            onClick={() => router.push('/work')}
            className="flex items-center text-sm font-bold text-gray-500 hover:text-[#00FF00] transition-colors mb-12"
          >
            <ArrowLeft className="mr-2 w-4 h-4" /> Back to Work
          </motion.button>

          <div className="grid lg:grid-cols-2 gap-12 items-end mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="text-5xl md:text-7xl font-medium tracking-[-0.06em] leading-[0.9] mb-8 dark:text-white">
                {study.title}
              </h1>
              <p className="text-xl text-gray-600 dark:text-gray-400 max-w-xl leading-[1.4] tracking-[-0.02em]">
                {study.subtitle}
              </p>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="flex flex-wrap gap-3"
            >
              {study.tags.map((tag, i) => (
                <span key={i} className="px-4 py-2 bg-gray-100 dark:bg-white/10 rounded-full text-xs font-bold uppercase tracking-wider dark:text-gray-300">
                  {tag}
                </span>
              ))}
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative aspect-video rounded-[2rem] overflow-hidden shadow-2xl"
          >
            <Image
              src={study.image}
              alt={study.title}
              fill
              className="object-cover"
              referrerPolicy="no-referrer"
              priority
            />
          </motion.div>
        </div>
      </section>

      {/* Overview & Role Section */}
      <section className="py-24 px-6 border-b border-gray-100 dark:border-white/10">
        <div className="max-w-[1280px] mx-auto md:px-[120px]">
          <div className="grid lg:grid-cols-3 gap-16">
            <div className="lg:col-span-2 space-y-8">
              <h2 className="text-sm font-bold text-[#00FF00] uppercase tracking-widest">Overview</h2>
              <p className="text-2xl text-gray-800 dark:text-gray-200 leading-[1.4] tracking-tight">
                {study.overview}
              </p>
            </div>
            <div className="space-y-8">
              <div>
                <h2 className="text-sm font-bold text-[#00FF00] uppercase tracking-widest mb-4">My Role</h2>
                <p className="text-lg font-medium dark:text-white mb-4">{study.role.title}</p>
                <ul className="space-y-2">
                  {study.role.responsibilities.map((resp, i) => (
                    <li key={i} className="text-gray-600 dark:text-gray-400 text-sm flex items-center gap-2">
                      <div className="w-1 h-1 bg-[#00FF00] rounded-full"></div>
                      {resp}
                    </li>
                  ))}
                </ul>
              </div>
              <Link href={study.link} target="_blank" className="inline-flex items-center gap-2 text-[#00FF00] font-bold group">
                Visit Live Site <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content Sections */}
      <section className="py-24 px-6 space-y-32">
        <div className="max-w-[1280px] mx-auto md:px-[120px]">
          <div className="grid lg:grid-cols-2 gap-24 items-start">
            <div className="space-y-8">
              <h2 className="text-sm font-bold text-[#00FF00] uppercase tracking-widest">The Problem</h2>
              <p className="text-xl text-gray-600 dark:text-gray-400 leading-[1.6]">
                {study.problem}
              </p>
            </div>
            <div className="space-y-8">
              <h2 className="text-sm font-bold text-[#00FF00] uppercase tracking-widest">Research & Insights</h2>
              <p className="text-lg text-gray-800 dark:text-gray-200 mb-6">{study.insights.intro}</p>
              <ul className="space-y-4">
                {study.insights.points.map((point, i) => (
                  <li key={i} className="flex gap-4 items-start">
                    <CheckCircle2 className="w-5 h-5 text-[#00FF00] shrink-0 mt-1" />
                    <span className="text-gray-600 dark:text-gray-400">{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="max-w-[1280px] mx-auto md:px-[120px]">
          <div className="grid lg:grid-cols-3 gap-16">
            <div className="space-y-6">
              <h2 className="text-sm font-bold text-[#00FF00] uppercase tracking-widest">UX Strategy</h2>
              <p className="text-gray-600 dark:text-gray-400 leading-[1.6]">{study.strategy}</p>
            </div>
            <div className="space-y-6">
              <h2 className="text-sm font-bold text-[#00FF00] uppercase tracking-widest">Design Approach</h2>
              <p className="text-gray-600 dark:text-gray-400 leading-[1.6]">{study.design}</p>
            </div>
            <div className="space-y-6">
              <h2 className="text-sm font-bold text-[#00FF00] uppercase tracking-widest">Development</h2>
              <p className="text-gray-600 dark:text-gray-400 leading-[1.6]">{study.development}</p>
            </div>
          </div>
        </div>

        <div className="max-w-[1280px] mx-auto md:px-[120px] pt-16 border-t border-gray-100 dark:border-white/10">
          <div className="max-w-3xl">
            <h2 className="text-sm font-bold text-[#00FF00] uppercase tracking-widest mb-8">The Outcome</h2>
            <p className="text-3xl md:text-4xl font-medium tracking-tight dark:text-white leading-[1.3]">
              {study.outcome}
            </p>
          </div>
        </div>
      </section>

      <ContactCTA />
      <Footer />
      <ScrollToTop />
    </main>
  );
}
