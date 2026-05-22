'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowUpRight } from 'lucide-react';
import { motion } from 'motion/react';
import { blogPosts } from '@/lib/blogData';

interface BlogSectionProps {
  limit?: number;
  excludeSlug?: string;
  title?: string;
}

export const BlogSection = ({ limit = 3, excludeSlug, title = "Blogs & Articles" }: BlogSectionProps) => {
  const displayedPosts = blogPosts
    .filter(post => post.slug !== excludeSlug)
    .slice(0, limit);

  return (
    <section id="blogs" className="relative py-24 bg-[#F5F5F2] dark:bg-[#0A0A0A] transition-colors duration-300 overflow-hidden border-t border-gray-100 dark:border-white/5">
      <div className="absolute inset-0 bg-grid-subtle opacity-30 pointer-events-none"></div>
      <div className="max-w-[1280px] mx-auto px-6 md:px-[120px] relative z-10">
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-1 rounded-full bg-[#FF6B00] text-black text-xs font-bold mb-6">
            Insights
          </div>
          <h2 className="text-4xl md:text-5xl font-medium tracking-[-0.06em] mb-6 dark:text-white">{title}</h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto leading-[1.2] tracking-[-0.04em]">
            Thoughts, tutorials, and insights on development, design, and building the web.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {displayedPosts.map((post, index) => (
            <Link key={post.id} href={`/blogs/${post.slug}`}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
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
          ))}
        </div>

        <div className="mt-16 text-center">
          <Link href="/blogs">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-zinc-900 dark:bg-zinc-100 text-zinc-100 dark:text-zinc-900 px-10 py-4 rounded-xl text-sm font-medium hover:bg-zinc-800 dark:hover:bg-zinc-200 transition-all shadow-sm"
            >
              View all Articles
            </motion.button>
          </Link>
        </div>
      </div>
    </section>
  );
};
