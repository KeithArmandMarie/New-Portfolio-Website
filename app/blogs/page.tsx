'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { ScrollToTop } from '@/components/ScrollToTop';
import { ScrollReveal } from '@/components/ScrollReveal';
import { motion } from 'motion/react';
import { ArrowUpRight } from 'lucide-react';
import { blogPosts } from '@/lib/blogData';

export default function BlogsPage() {
  return (
    <main className="min-h-screen flex flex-col pt-[88px] dark:bg-[#0A0A0A]">
      <Navbar />
      
      <div className="flex-1">
        <section className="py-24 relative overflow-hidden">
          <div className="absolute inset-0 bg-grid-subtle opacity-30 pointer-events-none"></div>
          <div className="max-w-[1280px] mx-auto px-6 md:px-[120px] relative z-10">
            <ScrollReveal>
              <div className="mb-16">
                <div className="inline-block px-4 py-1 rounded-full bg-[#FF6B00] text-black text-xs font-bold mb-6">
                  Knowledge Hub
                </div>
                <h1 className="text-5xl md:text-6xl font-medium tracking-[-0.06em] mb-6 dark:text-white">All Articles</h1>
                <p className="text-gray-600 dark:text-gray-400 max-w-2xl leading-[1.4] tracking-[-0.02em] text-lg">
                  Explore my thoughts, detailed technical guides, and visual design explorations.
                </p>
              </div>
            </ScrollReveal>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {blogPosts.map((post, index) => (
                <ScrollReveal key={post.id}>
                  <Link href={`/blogs/${post.slug}`}>
                    <motion.div
                      whileHover={{ y: -8 }}
                      className="bg-white dark:bg-[#171717] border border-gray-100 dark:border-white/5 rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 group h-full flex flex-col"
                    >
                      <div className="relative h-56 w-full overflow-hidden">
                        <Image
                          src={post.image}
                          alt={post.title}
                          fill
                          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                          className="object-cover transition-transform duration-700 group-hover:scale-110"
                        />
                        <div className="absolute top-4 left-4">
                          <span className="px-3 py-1 bg-black/50 backdrop-blur-md text-white rounded-full text-[10px] font-bold uppercase tracking-wider">
                            {post.category}
                          </span>
                        </div>
                      </div>
                      <div className="p-8 flex-1 flex flex-col">
                        <div className="flex items-center text-xs text-gray-500 dark:text-gray-400 mb-4 font-mono">
                          <span>{post.date}</span>
                          <span className="mx-2">•</span>
                          <span>{post.readTime}</span>
                        </div>
                        <h3 className="text-xl font-medium tracking-[-0.04em] mb-4 group-hover:text-[#C96A13] transition-colors dark:text-white line-clamp-2">
                          {post.title}
                        </h3>
                        <p className="text-gray-600 dark:text-gray-400 text-sm mb-6 leading-[1.4] tracking-[-0.02em] line-clamp-3 flex-1">
                          {post.excerpt}
                        </p>
                        <div className="flex items-center text-sm font-bold group/btn dark:text-white mt-auto">
                          Read article
                          <ArrowUpRight className="ml-1 w-4 h-4 transition-transform group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1" />
                        </div>
                      </div>
                    </motion.div>
                  </Link>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>
      </div>

      <Footer />
      <ScrollToTop />
    </main>
  );
}
