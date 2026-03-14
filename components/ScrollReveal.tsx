'use client';

import React from 'react';
import { motion } from 'motion/react';

interface ScrollRevealProps {
  children: React.ReactNode;
  width?: 'fit-content' | '100%';
}

export const ScrollReveal = ({ children, width = '100%' }: ScrollRevealProps) => {
  return (
    <div style={{ position: 'relative', width, overflow: 'hidden' }}>
      <motion.div
        initial={{ opacity: 0, y: 75 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
      >
        {children}
      </motion.div>
    </div>
  );
};
