'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, Variants } from 'motion/react';
import { useTheme } from 'next-themes';
import { Sun, Moon } from 'lucide-react';
import { AnimatePresence } from 'motion/react';

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const { setTheme, resolvedTheme } = useTheme();
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
    setTheme(resolvedTheme === 'dark' ? 'light' : 'dark');
  };

  return (
    <div className="fixed top-0 left-0 right-0 z-50 flex justify-center pointer-events-none pt-4 md:pt-6">
      <motion.nav 
        initial="hidden"
        animate="visible"
        variants={navVariants}
        className={`pointer-events-auto transition-all duration-500 ease-[0.22, 1, 0.36, 1] ${
          isScrolled 
            ? "bg-black/90 dark:bg-black/90 backdrop-blur-xl py-2 px-4 md:px-6 rounded-full border border-white/10 shadow-[0_8px_32px_rgba(0,0,0,0.4)] w-fit" 
            : "bg-transparent py-4 w-full max-w-[1280px] px-6 md:px-[120px]"
        }`}
      >
        <div className="flex justify-between items-center h-12 md:h-14 gap-8">
          <motion.div variants={itemVariants} className="flex-shrink-0">
            <Link href="/" className="text-xl md:text-2xl font-bold tracking-tighter group flex items-center">
              <motion.span 
                whileHover={{ rotate: [0, -10, 10, 0] }}
                className="inline-block mr-2 text-[#00FF00]"
              >
                ✦
              </motion.span>
              <span className={`transition-colors duration-300 ${isScrolled ? "text-white" : "dark:text-white"}`}>Keith</span>
            </Link>
          </motion.div>
          
          <div className="hidden md:flex space-x-8 items-center">
            {['Home', 'About', 'Work', 'Services', 'Blogs'].map((item) => (
              <motion.div key={item} variants={itemVariants}>
                <Link 
                  href={
                    item === 'Home' ? '/' : 
                    `/${item.toLowerCase()}`
                  } 
                  className="text-sm font-medium relative group py-2"
                >
                  <span className={`relative z-10 transition-colors duration-300 ${
                    isScrolled 
                      ? "text-gray-400 group-hover:text-white" 
                      : "text-gray-600 dark:text-gray-400 dark:group-hover:text-white group-hover:text-black"
                  }`}>
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
              className={`relative p-2 rounded-full transition-colors overflow-hidden h-9 w-9 md:h-10 md:w-10 flex items-center justify-center ${
                isScrolled 
                  ? "bg-white/10 text-white hover:bg-white/20" 
                  : "bg-gray-100 dark:bg-white/10 text-gray-800 dark:text-gray-200 hover:bg-gray-200 dark:hover:bg-white/20"
              }`}
              aria-label="Toggle theme"
            >
              <AnimatePresence mode="wait" initial={false}>
                {mounted && (
                  <motion.div
                    key={resolvedTheme}
                    initial={{ y: 30, opacity: 0, rotate: -180, scale: 0.5 }}
                    animate={{ y: 0, opacity: 1, rotate: 0, scale: 1 }}
                    exit={{ y: -30, opacity: 0, rotate: 180, scale: 0.5 }}
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  >
                    {resolvedTheme === 'dark' ? <Sun className="w-4 h-4 md:w-5 md:h-5" /> : <Moon className="w-4 h-4 md:w-5 md:h-5" />}
                  </motion.div>
                )}
              </AnimatePresence>
              {!mounted && <div className="w-4 h-4 md:w-5 md:h-5" />}
            </motion.button>

            <motion.div
              variants={itemVariants}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link href="mailto:caballerokeith2@gmail.com">
                <button className={`px-5 md:px-6 py-2 md:py-2.5 rounded-full text-sm font-bold transition-all shadow-sm ${
                  isScrolled 
                    ? "bg-white text-black hover:bg-gray-100" 
                    : "bg-zinc-200 dark:bg-zinc-800 text-zinc-900 dark:text-zinc-100 hover:bg-zinc-300 dark:hover:bg-zinc-700"
                }`}>
                  Let&apos;s Talk
                </button>
              </Link>
            </motion.div>
          </div>
        </div>
      </motion.nav>
    </div>
  );
};
