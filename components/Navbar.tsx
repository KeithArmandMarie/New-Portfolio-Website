'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, Variants } from 'motion/react';
import { useTheme } from 'next-themes';
import { Sun, Moon } from 'lucide-react';
import { AnimatePresence } from 'motion/react';

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navVariants: Variants = {
    hidden: { y: -100, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: [0.22, 1, 0.36, 1],
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants: Variants = {
    hidden: { y: -20, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: { duration: 0.5, ease: "easeOut" }
    }
  };

  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };

  return (
    <motion.nav 
      initial="hidden"
      animate="visible"
      variants={navVariants}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled 
          ? "bg-white/90 dark:bg-[#050505]/90 backdrop-blur-lg py-2 shadow-[0_4px_30px_rgba(0,0,0,0.03)] border-b border-gray-100 dark:border-white/10" 
          : "bg-transparent py-4"
      }`}
    >
      <div className="max-w-[1280px] mx-auto px-6 md:px-[120px]">
        <div className="flex justify-between items-center h-16">
          <motion.div variants={itemVariants} className="flex-shrink-0">
            <Link href="/" className="text-2xl font-bold tracking-tighter group flex items-center">
              <motion.span 
                whileHover={{ rotate: [0, -10, 10, 0] }}
                className="inline-block mr-2 text-[#00FF00]"
              >
                ✦
              </motion.span>
              <span className="group-hover:text-[#00FF00] transition-colors duration-300 dark:text-white">Keith</span>
            </Link>
          </motion.div>
          
          <div className="hidden md:flex space-x-8 items-center">
            {['Home', 'About', 'Work', 'Services'].map((item) => (
              <motion.div key={item} variants={itemVariants}>
                <Link 
                  href={
                    item === 'Home' ? '/' : 
                    `/${item.toLowerCase()}`
                  } 
                  className="text-sm font-medium relative group py-2"
                >
                  <span className="relative z-10 group-hover:text-black dark:group-hover:text-white transition-colors duration-300 text-gray-600 dark:text-gray-400">
                    {item}
                  </span>
                  <motion.span 
                    className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#00FF00] transition-all duration-300 group-hover:w-full"
                    layoutId="navUnderline"
                  />
                </Link>
              </motion.div>
            ))}
          </div>

          <div className="flex items-center space-x-4">
            <motion.button
              variants={itemVariants}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={toggleTheme}
              className="relative p-2 rounded-full bg-gray-100 dark:bg-white/10 text-gray-800 dark:text-gray-200 hover:bg-gray-200 dark:hover:bg-white/20 transition-colors overflow-hidden h-10 w-10 flex items-center justify-center"
              aria-label="Toggle theme"
            >
              <AnimatePresence mode="wait" initial={false}>
                {mounted && (
                  <motion.div
                    key={theme}
                    initial={{ y: 20, opacity: 0, rotate: -90 }}
                    animate={{ y: 0, opacity: 1, rotate: 0 }}
                    exit={{ y: -20, opacity: 0, rotate: 90 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                  >
                    {theme === 'dark' ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
                  </motion.div>
                )}
              </AnimatePresence>
              {!mounted && <div className="w-5 h-5" />}
            </motion.button>

            <motion.div
              variants={itemVariants}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <button className="bg-black dark:bg-white dark:text-black text-white px-6 py-2.5 rounded-full text-sm font-semibold hover:bg-gray-800 dark:hover:bg-gray-200 transition-all shadow-lg shadow-black/10 hover:shadow-[#00FF00]/20">
                Let&apos;s Talk
              </button>
            </motion.div>
          </div>
        </div>
      </div>
    </motion.nav>
  );
};
