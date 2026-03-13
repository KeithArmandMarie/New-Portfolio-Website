'use client';

import React from 'react';
import { motion } from 'motion/react';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { ScrollToTop } from '@/components/ScrollToTop';
import { ContactCTA } from '@/components/ContactCTA';
import { Briefcase, GraduationCap, Code2 } from 'lucide-react';
import Image from 'next/image';
import { BentoProfile } from '@/components/BentoProfile';

const experiences = [
  {
    company: 'ELEV8 Consulting',
    position: 'Web Designer & VA',
    role: 'During my time with ELEV8 Consulting, I developed two company websites from scratch, managing copywriting, wireframing, development, and SEO. In addition, I designed graphics for the company’s social media and supported basic administrative tasks like invoicing.',
  },
  {
    company: 'GOGORILLA',
    position: 'UI/UX DESIGNER & WEB DEVELOPER',
    role: 'At Frontpage Digital (now GoGorilla), I started by creating user-centered low-fidelity wireframes for the Portify project using Balsamiq. Later, I joined the high-fidelity design team, contributing to the prototyping and development of the GoGorilla website. Using Figma and Framer, we designed seamless animations and prototypes, successfully launching a user-friendly site with precision and efficiency.',
  },
  {
    company: 'FUNCTIONEIGHT',
    position: 'UI/UX DESIGNER & WEB DEVELOPER',
    role: 'During my time at FunctionEight as a Frontend Developer and UI/UX Designer, my responsibilities included crafting website designs and bringing them to life using the Avada page builder in WordPress.',
  },
  {
    company: 'TELEPERFORMANCE',
    position: 'Technical Support',
    role: 'At Teleperformance, I provided technical support by troubleshooting issues, resolving concerns, and ensuring excellent customer service.',
  },
  {
    company: 'SPLACE',
    position: 'UI/UX DESIGNER',
    role: 'During my internship at Splace as a UI/UX Designer, my main assignment was to design and develop responsive webpages for their system.',
  },
];

const education = [
  {
    level: 'College',
    school: 'Jose Maria College Foundation Inc.',
    description: 'I pursued a Bachelor of Science in Information Technology, where I developed a strong understanding of web technologies and how the web functions. My dedication to learning and passion for the field earned me the honor of graduating as Cum Laude, marking a proud milestone in my academic journey.',
  },
  {
    level: 'Highschool',
    school: 'Saint Michael’s School of Padada',
    description: 'I completed my junior high and senior high school at Saint Michael\'s School of Padada, focusing on the General Academic Strand (GAS). My hard work and dedication were recognized as I graduated with honors, setting a strong foundation for my academic and professional pursuits.',
  },
  {
    level: 'Elementary',
    school: 'Palili Elementary School',
    description: 'I spent my elementary years at Palili Elementary School, where I built a strong academic foundation and graduated as Salutatorian. This achievement reflected my commitment to learning and growth during those formative years.',
  },
];

const skills = [
  { category: 'Design', items: ['UI/UX Design', 'Wireframing', 'Prototyping', 'Graphic Design', 'Brand Identity', 'Framer', 'Balsamiq'] },
  { category: 'Development', items: ['Frontend Development', 'WordPress', 'Avada Builder', 'React', 'Tailwind CSS', 'Elementor'] },
  { category: 'Tools', items: ['Figma', 'Adobe Photoshop', 'Adobe Illustrator', 'VS Code', 'Git', 'Socialpilot'] },
  { category: 'Strategy', items: ['SEO Optimization', 'Copywriting', 'User Research', 'Information Architecture'] },
];

export default function AboutPage() {
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
              About Me
            </div>
            <h1 className="text-6xl md:text-8xl font-medium tracking-[-0.06em] leading-[0.9] mb-8 dark:text-white">
              Designing with <br />
              <span className="text-[#00FF00]">Purpose & Precision.</span>
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl leading-[1.2] tracking-[-0.04em]">
              I am Keith Caballero, a UI/UX Designer and Web Developer dedicated to creating digital experiences that are not only visually stunning but also highly functional and user-centric.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="relative py-24 bg-gray-50 dark:bg-[#0a0a0a] transition-colors duration-300">
        <div className="absolute inset-0 bg-dots opacity-50 pointer-events-none"></div>
        <div className="max-w-[1280px] mx-auto px-6 md:px-[120px] relative z-10">
          <div className="flex flex-col md:flex-row gap-12 items-start">
            <div className="md:w-1/3 md:sticky md:top-32">
              <h2 className="text-4xl font-medium tracking-[-0.06em] dark:text-white flex items-center gap-3 uppercase">
                <Briefcase className="text-[#00FF00]" /> Experience
              </h2>
              <p className="mt-4 text-sm text-gray-500 dark:text-gray-400 max-w-xs">
                My professional journey through design, development, and technical support.
              </p>
            </div>
            <div className="md:w-2/3 space-y-12">
              {experiences.map((exp, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="group"
                >
                  <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                    <h3 className="text-2xl font-bold tracking-tight dark:text-white group-hover:text-[#00FF00] transition-colors">
                      {exp.company}
                    </h3>
                    <span className="text-xs font-bold uppercase tracking-widest text-[#00FF00] bg-[#00FF00]/10 px-3 py-1 rounded-full mt-2 md:mt-0 w-fit">
                      {exp.position}
                    </span>
                  </div>
                  <p className="text-gray-600 dark:text-gray-400 leading-relaxed tracking-tight">
                    {exp.role}
                  </p>
                  <div className="mt-8 h-[1px] w-full bg-gray-200 dark:bg-white/10 group-last:hidden"></div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="relative py-24 bg-white dark:bg-[#050505] transition-colors duration-300 overflow-hidden">
        <div className="absolute inset-0 bg-grid-subtle opacity-30 pointer-events-none"></div>
        <div className="max-w-[1280px] mx-auto px-6 md:px-[120px] relative z-10">
          <div className="flex flex-col md:flex-row gap-12 items-start">
            <div className="md:w-1/3 md:sticky md:top-32">
              <h2 className="text-4xl font-medium tracking-[-0.06em] dark:text-white flex items-center gap-3 uppercase">
                <Code2 className="text-[#00FF00]" /> Skills & Tools
              </h2>
              <p className="mt-4 text-sm text-gray-500 dark:text-gray-400 max-w-xs">
                The technical toolkit and creative methodologies I use to bring ideas to life.
              </p>
            </div>
            <div className="md:w-2/3 grid grid-cols-1 sm:grid-cols-2 gap-8">
              {skills.map((skillGroup, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="p-8 rounded-2xl bg-gray-50 dark:bg-white/5 border border-gray-100 dark:border-white/10 hover:border-[#00FF00]/50 transition-colors group"
                >
                  <h3 className="text-lg font-bold mb-4 dark:text-white group-hover:text-[#00FF00] transition-colors">{skillGroup.category}</h3>
                  <div className="flex flex-wrap gap-2">
                    {skillGroup.items.map((skill, i) => (
                      <span key={i} className="px-3 py-1 bg-white dark:bg-white/10 rounded-full text-[10px] font-bold uppercase tracking-wider dark:text-gray-300">
                        {skill}
                      </span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section className="relative py-24 bg-gray-50 dark:bg-[#0a0a0a] transition-colors duration-300">
        <div className="absolute inset-0 bg-dots opacity-50 pointer-events-none"></div>
        <div className="max-w-[1280px] mx-auto px-6 md:px-[120px] relative z-10">
          <div className="flex flex-col md:flex-row gap-12 items-start">
            <div className="md:w-1/3 md:sticky md:top-32">
              <h2 className="text-4xl font-medium tracking-[-0.06em] dark:text-white flex items-center gap-3 uppercase">
                <GraduationCap className="text-[#00FF00]" /> Education
              </h2>
              <p className="mt-4 text-sm text-gray-500 dark:text-gray-400 max-w-xs">
                My academic background and foundations in Information Technology.
              </p>
            </div>
            <div className="md:w-2/3 space-y-16">
              {education.map((edu, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="relative pl-8 border-l-2 border-[#00FF00]/30 hover:border-[#00FF00] transition-colors"
                >
                  <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-[#00FF00] shadow-[0_0_10px_rgba(0,255,0,0.5)]"></div>
                  <div className="mb-2">
                    <span className="text-[10px] font-black uppercase tracking-[0.2em] text-gray-400 dark:text-gray-500">
                      {edu.level}
                    </span>
                    <h3 className="text-2xl font-bold tracking-tight dark:text-white mt-1">
                      {edu.school}
                    </h3>
                  </div>
                  <p className="text-gray-600 dark:text-gray-400 leading-relaxed tracking-tight">
                    {edu.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="relative py-32 bg-black text-white overflow-hidden">
        <div className="absolute inset-0 bg-grid-subtle opacity-10 pointer-events-none"></div>
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-black via-transparent to-black pointer-events-none"></div>
        
        <div className="max-w-[1280px] mx-auto px-6 md:px-[120px] relative z-10">
          <div className="flex flex-col md:flex-row gap-16 items-center">
            <div className="md:w-1/2">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                className="relative aspect-[4/5] md:aspect-square rounded-[2rem] overflow-hidden shadow-2xl shadow-[#00FF00]/10"
              >
                <Image 
                  src="https://images.unsplash.com/photo-1499750310107-5fef28a66643?q=80&w=2070&auto=format&fit=crop" 
                  alt="Design Philosophy" 
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover grayscale hover:grayscale-0 transition-all duration-1000 scale-105 hover:scale-100"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
              </motion.div>
            </div>
            
            <div className="md:w-1/2">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <div className="inline-block px-4 py-1 rounded-full bg-[#00FF00]/20 text-[#00FF00] text-xs font-bold mb-8 border border-[#00FF00]/30">
                  Philosophy
                </div>
                <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-medium tracking-[-0.06em] mb-10 leading-[1.1] md:leading-[1]">
                  <span className="block whitespace-nowrap">Design that speaks,</span>
                  <span className="block whitespace-nowrap text-[#00FF00]">Code that works.</span>
                </h2>
                <div className="space-y-6 max-w-lg">
                  <p className="text-gray-400 text-lg leading-relaxed tracking-tight">
                    I build invisible designs that guide users effortlessly, combining analytical thinking with creative intuition to solve real business problems.
                  </p>
                </div>
                
                <div className="mt-12 flex items-center gap-6">
                  <div className="flex -space-x-4">
                    {[1, 2, 3].map((i) => (
                      <div key={i} className="w-12 h-12 rounded-full border-2 border-black bg-zinc-800 flex items-center justify-center text-[10px] font-bold">
                        {i === 1 ? 'UI' : i === 2 ? 'UX' : 'DEV'}
                      </div>
                    ))}
                  </div>
                  <div className="h-8 w-[1px] bg-white/10"></div>
                  <p className="text-[10px] uppercase tracking-[0.2em] text-gray-500 font-bold">
                    Holistic <br /> Approach
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      <BentoProfile />

      <ContactCTA />
      <Footer />
      <ScrollToTop />
    </main>
  );
}
