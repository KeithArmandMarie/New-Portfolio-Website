'use client';

import React from 'react';
import { motion } from 'motion/react';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { ScrollToTop } from '@/components/ScrollToTop';
import { ContactCTA } from '@/components/ContactCTA';
import { Briefcase, GraduationCap, Code2 } from 'lucide-react';
import Image from 'next/image';

const experiences = [
  {
    company: 'ELEV8 Consulting',
    position: 'Web Designer & VA',
    role: 'During my time with ELEV8 Consulting, I developed two company websites from scratch, managing copywriting, wireframing, development, and SEO. In addition, I designed graphics for the company’s social media and supported basic administrative tasks like invoicing.',
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
      <section className="relative py-24 bg-white dark:bg-[#050505] transition-colors duration-300 overflow-hidden">
        <div className="absolute inset-0 bg-grid-subtle opacity-30 pointer-events-none"></div>
        <div className="max-w-[1280px] mx-auto px-6 md:px-[120px] relative z-10">
          <div className="flex flex-col md:flex-row gap-12 items-center">
            <div className="md:w-1/2">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="relative aspect-square rounded-3xl overflow-hidden"
              >
                <Image 
                  src="https://picsum.photos/seed/philosophy/800/800" 
                  alt="Design Philosophy" 
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover grayscale hover:grayscale-0 transition-all duration-700"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-[#00FF00]/10 mix-blend-overlay"></div>
              </motion.div>
            </div>
            <div className="md:w-1/2">
              <div className="inline-block px-4 py-1 rounded-full bg-[#00FF00]/10 text-[#00FF00] text-xs font-bold mb-6">
                Philosophy
              </div>
              <h2 className="text-4xl md:text-5xl font-medium tracking-[-0.06em] mb-8 dark:text-white leading-none">
                Design that speaks, <br />
                <span className="text-[#00FF00]">Code that works.</span>
              </h2>
              <p className="text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">
                I believe that great design is invisible. It should guide the user effortlessly towards their goal without them even noticing the interface.
              </p>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                My approach combines analytical thinking with creative intuition. I don&apos;t just build websites; I build digital tools that solve real business problems and create lasting impressions.
              </p>
            </div>
          </div>
        </div>
      </section>

      <ContactCTA />
      <Footer />
      <ScrollToTop />
    </main>
  );
}
