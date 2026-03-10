'use client';

import React from 'react';
import Image from 'next/image';
import { Star } from 'lucide-react';
import { motion } from 'motion/react';

const testimonials = [
  {
    text: "Keith has been a vital asset to our team, skillfully combining technical expertise with creative design to enhance our digital presence. His thoughtful strategies and consistent attention to detail set him apart.",
    author: "Quiza B.",
    role: "UI/UX Designer",
    image: "https://picsum.photos/seed/user1/100/100",
  },
  {
    text: "Keith took on the challenge of building the website and prototypes. He displayed a high level of professionalism despite jumping from one design software to another and ultimately helped the website development.",
    author: "Jireh R.",
    role: "UI/UX Designer",
    image: "https://picsum.photos/seed/user2/100/100",
  },
  {
    text: "In a workplace where dedication sets the standard, Keith shines brightly. His tireless work ethic and unwavering commitment elevate our team. Thank you, Keith, for your invaluable contributions and inspiring dedication.",
    author: "Kyle R.",
    role: "Team Leader",
    image: "https://picsum.photos/seed/user3/100/100",
  },
];

export const Testimonials = () => {
  return (
    <section className="relative py-24 bg-white dark:bg-[#050505] transition-colors duration-300 overflow-hidden">
      <div className="absolute inset-0 bg-dots opacity-50 pointer-events-none"></div>
      <div className="max-w-[1280px] mx-auto px-6 md:px-[120px] relative z-10">
        <h2 className="text-4xl md:text-5xl font-medium tracking-[-0.06em] mb-16 text-center dark:text-white">Testimonials</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="flex flex-col"
            >
              <div className="flex mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-black text-black dark:fill-white dark:text-white" />
                ))}
              </div>
              <p className="text-gray-600 dark:text-gray-400 text-sm mb-8 flex-grow leading-[1.2] tracking-[-0.04em]">
                &quot;{testimonial.text}&quot;
              </p>
              <div className="flex items-center">
                <div className="relative w-12 h-12 rounded-full overflow-hidden mr-4">
                  <Image
                    src={testimonial.image}
                    alt={testimonial.author}
                    fill
                    className="object-cover"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div>
                  <h4 className="font-medium tracking-[-0.06em] text-sm dark:text-white">{testimonial.author}</h4>
                  <p className="text-gray-500 text-xs dark:text-gray-400">{testimonial.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
