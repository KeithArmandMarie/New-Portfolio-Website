'use client';

import React from 'react';
import Link from 'next/link';
import { Facebook, Linkedin, Mail } from 'lucide-react';

export const Footer = () => {
  return (
    <footer className="py-12 border-t border-gray-100 dark:border-white/10 dark:bg-[#050505] transition-colors duration-300">
      <div className="max-w-[1280px] mx-auto px-6 md:px-[120px]">
        <div className="flex flex-col md:flex-row justify-between items-center mb-12">
          <div className="mb-8 md:mb-0">
            <Link href="/" className="text-2xl font-bold tracking-tighter dark:text-white">
              Keith
            </Link>
          </div>

          <div className="flex flex-wrap justify-center gap-6 md:gap-8 mb-8 md:mb-0">
            <Link href="/" className="text-xs font-medium hover:text-gray-600 dark:text-gray-400 dark:hover:text-white">Home</Link>
            <Link href="/about" className="text-xs font-medium hover:text-gray-600 dark:text-gray-400 dark:hover:text-white">About</Link>
            <Link href="/work" className="text-xs font-medium hover:text-gray-600 dark:text-gray-400 dark:hover:text-white">Work</Link>
            <Link href="/services" className="text-xs font-medium hover:text-gray-600 dark:text-gray-400 dark:hover:text-white">Services</Link>
          </div>

          <div className="flex gap-4">
            <Link href="https://www.linkedin.com/in/designwithkeith/" target="_blank" rel="noopener noreferrer" className="p-2 hover:bg-gray-100 dark:hover:bg-white/10 rounded-full transition-colors dark:text-white">
              <Linkedin className="w-4 h-4" />
            </Link>
            <Link href="mailto:caballerokeith2@gmail.com" className="p-2 hover:bg-gray-100 dark:hover:bg-white/10 rounded-full transition-colors dark:text-white">
              <Mail className="w-4 h-4" />
            </Link>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-gray-50 dark:border-white/5 text-[10px] text-gray-500 dark:text-gray-400 uppercase tracking-widest font-medium">
          <p className="mb-4 md:mb-0">© {new Date().getFullYear()} Keith Caballero. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};
