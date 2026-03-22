import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ArrowLeft, Clock, Calendar } from 'lucide-react';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { ScrollToTop } from '@/components/ScrollToTop';
import { getBlogPostBySlug, blogPosts } from '@/lib/blogData';

// Enable static generation for these blogs
export function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }));
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params;
  const post = getBlogPostBySlug(resolvedParams.slug);

  if (!post) {
    notFound();
  }

  return (
    <main className="min-h-screen flex flex-col pt-[88px] dark:bg-[#050505]">
      <Navbar />
      
      <article className="flex-1 w-full pb-24">
        {/* Header Hero Area */}
        <section className="relative w-full h-[60vh] min-h-[400px]">
          <Image
            src={post.image}
            alt={post.title}
            fill
            priority
            className="object-cover"
          />
          <div className="absolute inset-0 bg-black/60 backdrop-blur-[2px]" />
          
          <div className="absolute inset-0 flex flex-col justify-end">
            <div className="max-w-[800px] mx-auto w-full px-6 md:px-12 pb-16">
              <Link 
                href="/blogs" 
                className="inline-flex items-center text-white/70 hover:text-white text-sm font-medium mb-8 transition-colors group"
              >
                <ArrowLeft className="w-4 h-4 mr-2 transition-transform group-hover:-translate-x-1" />
                Back to Articles
              </Link>
              
              <div className="mb-6">
                <span className="px-3 py-1 bg-[#00FF00]/20 text-[#00FF00] border border-[#00FF00]/50 rounded-full text-xs font-bold uppercase tracking-wider">
                  {post.category}
                </span>
              </div>
              
              <h1 className="text-4xl md:text-6xl font-medium text-white mb-6 tracking-[-0.04em] leading-[1.1]">
                {post.title}
              </h1>
              
              <div className="flex flex-wrap items-center text-white/80 text-sm font-mono gap-6">
                <div className="flex items-center">
                  <Calendar className="w-4 h-4 mr-2" />
                  {post.date}
                </div>
                <div className="flex items-center">
                  <Clock className="w-4 h-4 mr-2" />
                  {post.readTime}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Content Area */}
        <section className="max-w-[800px] mx-auto w-full px-6 md:px-12 pt-16">
          <div 
            className="prose prose-lg dark:prose-invert prose-headings:font-medium prose-headings:tracking-[-0.04em] prose-a:text-[#00DD00] prose-a:no-underline hover:prose-a:underline max-w-none text-gray-700 dark:text-gray-300"
            dangerouslySetInnerHTML={{ __html: `<div class="article-content">${post.content}</div>` }}
          />
          
          {/* We are rendering raw HTML strings stored in our mock data directly here. */}
        </section>
      </article>

      <Footer />
      <ScrollToTop />
    </main>
  );
}
