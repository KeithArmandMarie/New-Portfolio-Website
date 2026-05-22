'use client';

import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';

export const Preloader = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    // Simulate loading progress
    const interval = setInterval(() => {
      setCounter((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        return prev + Math.floor(Math.random() * 15) + 5;
      });
    }, 80);

    // Minimum loading time of 1 second
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1200);

    return () => {
      clearInterval(interval);
      clearTimeout(timer);
    };
  }, []);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ 
            y: '-100%',
            transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] }
          }}
          className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-[#0A0A0A] text-white overflow-hidden"
        >
          {/* Background Grid Effect */}
          <div className="absolute inset-0 bg-grid-subtle opacity-10 pointer-events-none"></div>
          
          <div className="relative z-10 flex flex-col items-center">
            {/* Unique Geometric Loader */}
            <div className="relative w-24 h-24 mb-8">
              <motion.div
                animate={{ 
                  rotate: 360,
                  borderRadius: ["20%", "50%", "20%"],
                }}
                transition={{ 
                  duration: 2, 
                  repeat: Infinity, 
                  ease: "linear" 
                }}
                className="absolute inset-0 border-2 border-[#FF6B00] opacity-20"
              ></motion.div>
              <motion.div
                animate={{ 
                  rotate: -360,
                  borderRadius: ["50%", "20%", "50%"],
                }}
                transition={{ 
                  duration: 3, 
                  repeat: Infinity, 
                  ease: "linear" 
                }}
                className="absolute inset-2 border-2 border-[#FF6B00] opacity-40"
              ></motion.div>
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-[#FF6B00] font-mono text-xl font-bold">
                  {Math.min(counter, 100)}%
                </span>
              </div>
            </div>
 
            {/* Typographic Element */}
            <div className="overflow-hidden">
              <motion.div
                initial={{ y: 40 }}
                animate={{ y: 0 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                className="flex flex-col items-center"
              >
                <span className="text-xs uppercase tracking-[0.4em] text-gray-500 mb-2">Initializing</span>
                <h2 className="text-2xl font-medium tracking-tighter flex items-center">
                  KEITH<span className="text-[#FF6B00] mx-1">/</span>CABALLERO
                </h2>
              </motion.div>
            </div>
          </div>
 
          {/* Bottom Status Bar */}
          <div className="absolute bottom-12 left-12 right-12 flex justify-between items-end">
            <div className="flex flex-col">
              <span className="text-[10px] uppercase tracking-widest text-gray-600 mb-1">System Status</span>
              <span className="text-[10px] font-mono text-[#FF6B00]">OK_READY_TO_RENDER</span>
            </div>
            <div className="w-32 h-[1px] bg-gray-800 relative overflow-hidden">
              <motion.div 
                className="absolute inset-0 bg-[#FF6B00]"
                initial={{ x: '-100%' }}
                animate={{ x: `${counter - 100}%` }}
              ></motion.div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
