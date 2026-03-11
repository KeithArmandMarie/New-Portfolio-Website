'use client';

import React from 'react';
import Image from 'next/image';
import { Star } from 'lucide-react';
import { motion } from 'motion/react';

import quizaImg from '../public/testimonials/quiza.png';
import jirehImg from '../public/testimonials/jireh.png';
import kyleImg from '../public/testimonials/kyle.png';
import susieImg from '../public/testimonials/susie.png';
import blaireImg from '../public/testimonials/blaire.png';

const testimonials = [
  {
    text: "Keith has been a vital asset to our team, skillfully combining technical expertise with creative design to enhance our digital presence. His thoughtful strategies and consistent attention to detail set him apart.",
    author: "Quiza B.",
    role: "UI/UX Designer",
    image: quizaImg,
  },
  {
    text: "Keith took on the challenge of building the website and prototypes. He displayed a high level of professionalism despite jumping from one design software to another and ultimately helped the website development.",
    author: "Jireh R.",
    role: "UI/UX Designer",
    image: jirehImg,
  },
  {
    text: "In a workplace where dedication sets the standard, Keith shines brightly. His tireless work ethic and unwavering commitment elevate our team. Thank you, Keith, for your invaluable contributions and inspiring dedication.",
    author: "Kyle R.",
    role: "Team Leader",
    image: kyleImg,
  },
  {
    text: "Keith's strategic approach at ELEV8 Consulting transformed our digital presence. His ability to understand our brand's vision and translate it into a high-performing platform was exceptional.",
    author: "Susie I.",
    role: "Client, ELEV8 Consulting",
    image: susieImg,
  },
  {
    text: "Working with Keith was a seamless experience. He delivered a sophisticated solution for ELEV8 Consulting that exceeded our expectations in both design and functionality.",
    author: "Blaire S.",
    role: "Client, ELEV8 Consulting",
    image: blaireImg,
  },
];

export const Testimonials = () => {
  // Duplicate testimonials for seamless loop
  const duplicatedTestimonials = [...testimonials, ...testimonials, ...testimonials];

  return (
    <section className="relative py-24 bg-white dark:bg-[#050505] transition-colors duration-300 overflow-hidden">
      <div className="absolute inset-0 bg-dots opacity-50 pointer-events-none"></div>
      
      <div className="max-w-[1280px] mx-auto px-6 md:px-[120px] relative z-10 mb-16">
        <h2 className="text-4xl md:text-5xl font-medium tracking-[-0.06em] text-center dark:text-white">Testimonials</h2>
      </div>

      <div className="relative">
        {/* Fade Effect Overlays */}
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-white dark:from-[#050505] to-transparent z-30 pointer-events-none"></div>
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-white dark:from-[#050505] to-transparent z-30 pointer-events-none"></div>

        <div className="flex overflow-hidden group">
          <div 
            className="flex gap-8 animate-marquee group-hover:[animation-play-state:paused]"
            style={{ 
              width: 'fit-content',
              animation: 'marquee 80s linear infinite'
            }}
          >
            {duplicatedTestimonials.map((testimonial, index) => (
              <div
                key={index}
                className="flex flex-col min-w-[350px] md:min-w-[450px] bg-gray-50/50 dark:bg-white/5 p-8 rounded-2xl border border-gray-100 dark:border-white/10"
              >
                <div className="flex mb-6">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-black text-black dark:fill-white dark:text-white" />
                  ))}
                </div>
                <p className="text-gray-600 dark:text-gray-400 text-sm mb-8 flex-grow leading-[1.4] tracking-[-0.02em]">
                  &quot;{testimonial.text}&quot;
                </p>
                <div className="flex items-center">
                  <div className="relative w-12 h-12 rounded-full overflow-hidden mr-4">
                    <Image
                      src={testimonial.image}
                      alt={testimonial.author}
                      fill
                      sizes="48px"
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <h4 className="font-medium tracking-[-0.06em] text-sm dark:text-white">{testimonial.author}</h4>
                    <p className="text-gray-500 text-xs dark:text-gray-400">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-33.33%); }
        }
      `}</style>
    </section>
  );
};
