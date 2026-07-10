'use client';

import React from 'react';

export const LogoMarquee = () => {
  const logos = [
    { name: 'Teleperformance', icon: 'TP' },
    { name: 'FunctionEight', icon: 'F8' },
    { name: 'GoGorilla', icon: 'GG' },
    { name: 'Linked VA', icon: 'LVA' },
    { name: 'ELEV8 Consulting', icon: 'E8' },
    { name: 'ELEV8 Wellness', icon: 'EW' },
    { name: 'Butler Manufacturing', icon: 'BM' },
  ];

  return (
    <div className="bg-gray-50 dark:bg-white/5 py-10 overflow-hidden border-y border-gray-100 dark:border-white/10 transition-colors duration-300">
      <div className="flex animate-marquee whitespace-nowrap">
        {[...logos, ...logos].map((logo, index) => (
          <div key={index} className="flex items-center mx-12 text-gray-400 dark:text-gray-500 opacity-80 hover:opacity-100 transition-opacity">
            <span className="text-2xl font-bold mr-3">{logo.icon}</span>
            <span className="text-xl font-bold tracking-tight">{logo.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
};
