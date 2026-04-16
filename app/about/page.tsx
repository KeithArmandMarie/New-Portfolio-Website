'use client';

import React from 'react';
import { motion } from 'motion/react';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { ScrollToTop } from '@/components/ScrollToTop';
import { ContactCTA } from '@/components/ContactCTA';
import { 
  Briefcase, GraduationCap, Code2, Trophy, ExternalLink,
  Layout, SquareDashed, Layers, Palette, Fingerprint, PencilRuler,
  Monitor, Paintbrush, Wrench, Share2,
  Search, PenLine, Users, Network, Clapperboard
} from 'lucide-react';
import { 
  SiFramer, SiTailwindcss, SiReact, SiElementor, SiWordpress, 
  SiFigma, SiGit, SiGithub,
  SiCanva, SiClaude, SiOpenai, SiGooglegemini
} from 'react-icons/si';
import { VscVscode } from 'react-icons/vsc';
import { DiPhotoshop, DiIllustrator } from 'react-icons/di';
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

const achievements = [
  {
    title: 'ELEV8 CONSULTING',
    role: 'LEAD DESIGNER & DEVELOPER',
    year: '2025-2026',
    description: 'Lead designing and developing two websites for an Australian company focusing on workplace injury rehabilitation.',
    link: 'https://elev8consulting.au/'
  },
  {
    title: 'GOGORILLA',
    role: 'REBRANDING',
    year: '2024',
    description: 'I was one of the designers who contributed to creating, designing, and publishing the rebranded GoGorilla to the public.',
    link: 'https://gogorilla.com/'
  },
  {
    title: 'LATIN HONOR AWARDEE',
    role: 'CUM LAUDE',
    year: '2023',
    description: 'Graduated with flying colors. I was among the pioneering group to achieve Cum Laude honors in our program.',
  },
  {
    title: 'DAVAO UNITY AWARD WINNER',
    role: 'CAPSTONE COMPETITION',
    year: '2023',
    description: 'The Davao Unity Awards honors outstanding thesis papers that contribute to local government programs and promote academic research. I led a team of five to win the 2023 Health Category with our capstone project, "Skincure: An Android-Based Skin Disease Classifier System using CNN."',
    link: 'https://www.facebook.com/davaocitygov/posts/look-the-city-government-of-davao-gave-recognition-to-six-6-of-the-most-innovati/228264349715479/'
  },
  {
    title: 'INTERNATIONAL JOURNAL OF SCIENTIFIC RESEARCH AND ENGINEERING DEVELOPMENT',
    role: 'RESEARCH PUBLICATION',
    year: '2021',
    description: 'Co-authored a scientific study that has been published in Volume 4 Issue 4 -2021 of IJSRED.',
    link: 'https://ijsred.com/volume4/issue4/IJSRED-V4I4P5.pdf'
  }
];

const education: { level: string; school: string; description: string; image?: string }[] = [
  {
    level: 'College',
    school: 'Jose Maria College Foundation Inc.',
    description: 'I pursued a Bachelor of Science in Information Technology, where I developed a strong understanding of web technologies and how the web functions. My dedication to learning and passion for the field earned me the honor of graduating as Cum Laude, marking a proud milestone in my academic journey.',
    image: '/college-grad.jpg',
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
  { 
    category: 'Design', 
    bentoClass: 'md:col-span-3',
    items: [
      { name: 'UI/UX Design', icon: <Layout className="w-3.5 h-3.5" /> }, 
      { name: 'Wireframing', icon: <SquareDashed className="w-3.5 h-3.5" /> }, 
      { name: 'Prototyping', icon: <Layers className="w-3.5 h-3.5" /> }, 
      { name: 'Graphic Design', icon: <Palette className="w-3.5 h-3.5" /> }, 
      { name: 'Brand Identity', icon: <Fingerprint className="w-3.5 h-3.5" /> }, 
      { name: 'Framer', icon: <SiFramer className="w-3.5 h-3.5" /> }, 
      { name: 'Balsamiq', icon: <PencilRuler className="w-3.5 h-3.5" /> }
    ] 
  },
  { 
    category: 'Development',
    bentoClass: 'md:col-span-2',
    items: [
      { name: 'Frontend Development', icon: <Monitor className="w-3.5 h-3.5" /> }, 
      { name: 'WordPress', icon: <SiWordpress className="w-3.5 h-3.5" /> }, 
      { name: 'WP Theme Customization', icon: <Paintbrush className="w-3.5 h-3.5" /> }, 
      { name: 'Avada Builder', icon: <Wrench className="w-3.5 h-3.5" /> }, 
      { name: 'React', icon: <SiReact className="w-3.5 h-3.5" /> }, 
      { name: 'Tailwind CSS', icon: <SiTailwindcss className="w-3.5 h-3.5" /> }, 
      { name: 'Elementor', icon: <SiElementor className="w-3.5 h-3.5" /> }
    ] 
  },
  { 
    category: 'Tools', 
    bentoClass: 'md:col-span-3',
    items: [
      { name: 'Figma', icon: <SiFigma className="w-3.5 h-3.5" /> }, 
      { name: 'Adobe Photoshop', icon: <DiPhotoshop className="w-3.5 h-3.5" /> }, 
      { name: 'Adobe Illustrator', icon: <DiIllustrator className="w-3.5 h-3.5" /> }, 
      { name: 'VS Code', icon: <VscVscode className="w-3.5 h-3.5" /> }, 
      { name: 'Git', icon: <SiGit className="w-3.5 h-3.5" /> }, 
      { name: 'Github', icon: <SiGithub className="w-3.5 h-3.5" /> },
      { name: 'Socialpilot', icon: <Share2 className="w-3.5 h-3.5" /> },
      { name: 'Canva', icon: <SiCanva className="w-3.5 h-3.5" /> },
      { name: 'Capcut', icon: <Clapperboard className="w-3.5 h-3.5" /> },
      { name: 'Claude AI', icon: <SiClaude className="w-3.5 h-3.5" /> },
      { name: 'ChatGPT', icon: <SiOpenai className="w-3.5 h-3.5" /> },
      { name: 'Google Anti Gravity', icon: <SiGooglegemini className="w-3.5 h-3.5" /> }
    ] 
  },
  { 
    category: 'Strategy', 
    bentoClass: 'md:col-span-2',
    items: [
      { name: 'SEO Optimization', icon: <Search className="w-3.5 h-3.5" /> }, 
      { name: 'Copywriting', icon: <PenLine className="w-3.5 h-3.5" /> }, 
      { name: 'User Research', icon: <Users className="w-3.5 h-3.5" /> }, 
      { name: 'Information Architecture', icon: <Network className="w-3.5 h-3.5" /> }
    ] 
  },
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
            <div className="md:w-2/3 grid grid-cols-1 md:grid-cols-5 gap-4 md:gap-6">
              {skills.map((skillGroup, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className={`p-8 rounded-[2rem] bg-gray-50 dark:bg-[#0a0a0a] border border-gray-200 dark:border-white/5 hover:border-[#00FF00]/30 transition-all duration-300 group shadow-sm hover:shadow-md ${skillGroup.bentoClass}`}
                >
                  <h3 className="text-lg font-bold mb-4 dark:text-white group-hover:text-[#00FF00] transition-colors">{skillGroup.category}</h3>
                  <div className="flex flex-wrap gap-2">
                    {skillGroup.items.map((skill, i) => (
                      <span key={i} className="flex items-center gap-2 px-3 py-1.5 bg-white dark:bg-white/10 border border-gray-100 dark:border-transparent rounded-full text-[10px] font-bold uppercase tracking-wider dark:text-gray-300 hover:border-[#00FF00]/50 hover:bg-[#00FF00]/5 dark:hover:bg-[#00FF00]/10 hover:text-[#00FF00] dark:hover:text-[#00FF00] transition-colors cursor-default">
                        {skill.icon}
                        <span>{skill.name}</span>
                      </span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section className="relative py-24 bg-gray-50 dark:bg-[#0a0a0a] transition-colors duration-300">
        <div className="absolute inset-0 bg-dots opacity-50 pointer-events-none"></div>
        <div className="max-w-[1280px] mx-auto px-6 md:px-[120px] relative z-10">
          <div className="flex flex-col md:flex-row gap-12 items-start">
            <div className="md:w-1/3 md:sticky md:top-32">
              <h2 className="text-4xl font-medium tracking-[-0.06em] dark:text-white flex items-center gap-3 uppercase">
                <Trophy className="text-[#00FF00]" /> Achievements
              </h2>
              <p className="mt-4 text-sm text-gray-500 dark:text-gray-400 max-w-xs">
                Milestones, awards, and noteworthy projects in my career.
              </p>
            </div>
            <div className="md:w-2/3 space-y-12">
              {achievements.map((ach, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="group"
                >
                  <div className="flex flex-col xl:flex-row xl:items-center justify-between mb-4">
                    {ach.link ? (
                      <a 
                        href={ach.link} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="group/link flex items-center gap-2 max-w-lg cursor-pointer"
                        style={{ cursor: "url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI2MCIgaGVpZ2h0PSIzMCIgdmlld0JveD0iMCAwIDYwIDMwIj48cmVjdCB3aWR0aD0iNjAiIGhlaWdodD0iMzAiIGZpbGw9IiMwMEZGMDAiIHJ4PSIxNSIvPjx0ZXh0IHg9IjMwIiB5PSIxOSIgZmlsbD0iYmxhY2siIGZvbnQtc2l6ZT0iMTIiIGZvbnQtZmFtaWx5PSJzYW5zLXNlcmlmIiBmb250LXdlaWdodD0iYm9sZCIgdGV4dC1hbmNob3I9Im1pZGRsZSI+VmlldzwvdGV4dD48L3N2Zz4=') 30 15, pointer" }}
                      >
                        <h3 className="text-xl md:text-2xl font-bold tracking-tight dark:text-white group-hover/link:text-[#00FF00] transition-colors decoration-[#00FF00]/50 decoration-2 underline-offset-[6px] group-hover/link:underline leading-tight">
                          {ach.title}
                        </h3>
                        <ExternalLink className="w-5 h-5 text-gray-400 group-hover/link:text-[#00FF00] transition-transform duration-300 opacity-0 group-hover/link:opacity-100 -translate-x-4 group-hover/link:translate-x-0 shrink-0" />
                      </a>
                    ) : (
                      <h3 className="text-xl md:text-2xl font-bold tracking-tight dark:text-white group-hover:text-[#00FF00] transition-colors max-w-lg leading-tight">
                        {ach.title}
                      </h3>
                    )}
                    <div className="flex flex-wrap items-center gap-3 mt-4 xl:mt-0 xl:justify-end xl:shrink-0">
                      <span className="text-[10px] sm:text-xs font-bold uppercase tracking-widest text-[#00FF00] bg-[#00FF00]/10 px-3 py-1.5 rounded-full whitespace-nowrap">
                        {ach.role}
                      </span>
                      <span className="text-[10px] sm:text-xs font-bold text-gray-500 dark:text-gray-400 border border-gray-200 dark:border-white/10 px-3 py-1.5 rounded-full whitespace-nowrap">
                        {ach.year}
                      </span>
                    </div>
                  </div>
                  <p className="text-gray-600 dark:text-gray-400 leading-relaxed tracking-tight mt-4">
                    {ach.description}
                  </p>
                  <div className="mt-8 h-[1px] w-full bg-gray-200 dark:bg-white/10 group-last:hidden"></div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section className="relative py-24 bg-white dark:bg-[#050505] transition-colors duration-300 overflow-hidden">
        <div className="absolute inset-0 bg-grid-subtle opacity-30 pointer-events-none"></div>
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
                  {edu.image && (
                    <div className="mt-8 relative group/img w-full max-w-3xl">
                      <div className="absolute -inset-3 bg-gradient-to-r from-[#00FF00]/0 via-[#00FF00]/15 to-[#00FF00]/0 rounded-[2rem] blur-xl opacity-0 group-hover/img:opacity-100 transition-all duration-700"></div>
                      <div className="relative p-2 md:p-3 rounded-[1.5rem] md:rounded-[2rem] bg-white/50 dark:bg-white/[0.02] border border-gray-200 dark:border-white/10 backdrop-blur-md transition-all duration-500 group-hover/img:border-[#00FF00]/30 shadow-lg group-hover/img:shadow-[#00FF00]/5">
                        <div className="relative w-full aspect-[16/9] rounded-xl md:rounded-[1.5rem] overflow-hidden bg-gray-100 dark:bg-black/40">
                          <Image 
                            src={edu.image} 
                            alt={`${edu.level} graduation`} 
                            fill
                            className="object-cover transform group-hover/img:scale-[1.03] transition-transform duration-1000 ease-out"
                            sizes="(max-width: 1024px) 100vw, 800px"
                            quality={100}
                          />
                        </div>
                        <div className="absolute top-6 right-6 opacity-0 group-hover/img:opacity-100 transition-all duration-500 hidden sm:flex items-center justify-center translate-y-2 group-hover/img:translate-y-0 shadow-2xl z-10 pointer-events-none">
                          <div className="bg-black/60 backdrop-blur-md border border-white/20 p-2.5 rounded-full text-[#00FF00]">
                            <GraduationCap className="w-5 h-5" />
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
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
                className="relative aspect-[4/5] md:aspect-square rounded-[2rem] overflow-hidden shadow-2xl shadow-[#00FF00]/10 group cursor-pointer"
              >
                <Image 
                  src="/philosophy-img.jpg" 
                  alt="Skincure Capstone Presentation" 
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover transition-all duration-[1.5s] scale-100 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/40 group-hover:bg-transparent transition-colors duration-700"></div>
                <div className="absolute inset-0 bg-gradient-to-t from-[#00FF00]/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"></div>
                
                {/* Interactive overlay on hover */}
                <div className="absolute inset-x-0 bottom-0 p-6 md:p-8 translate-y-8 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-700 ease-[0.22,1,0.36,1] z-10 pointer-events-none">
                  <div className="bg-black/60 backdrop-blur-md border border-white/20 p-4 rounded-2xl shadow-xl">
                    <p className="text-[#00FF00] font-bold text-xs md:text-sm tracking-widest uppercase mb-1">Skincure Capstone</p>
                    <p className="text-white text-xs opacity-90">Presenting our award-winning thesis to the Davao City Government.</p>
                  </div>
                </div>
                
                {/* Animated corner borders on hover */}
                <div className="absolute top-6 left-6 w-8 h-8 border-t-2 border-l-2 border-[#00FF00] opacity-0 group-hover:opacity-100 -translate-x-4 -translate-y-4 group-hover:translate-x-0 group-hover:translate-y-0 transition-all duration-700 pointer-events-none"></div>
                <div className="absolute top-6 right-6 w-8 h-8 border-t-2 border-r-2 border-[#00FF00] opacity-0 group-hover:opacity-100 translate-x-4 -translate-y-4 group-hover:translate-x-0 group-hover:translate-y-0 transition-all duration-700 pointer-events-none"></div>
                <div className="absolute bottom-6 left-6 w-8 h-8 border-b-2 border-l-2 border-[#00FF00] opacity-0 group-hover:opacity-100 -translate-x-4 translate-y-4 group-hover:translate-x-0 group-hover:translate-y-0 transition-all duration-700 pointer-events-none"></div>
                <div className="absolute bottom-6 right-6 w-8 h-8 border-b-2 border-r-2 border-[#00FF00] opacity-0 group-hover:opacity-100 translate-x-4 translate-y-4 group-hover:translate-x-0 group-hover:translate-y-0 transition-all duration-700 pointer-events-none"></div>
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
