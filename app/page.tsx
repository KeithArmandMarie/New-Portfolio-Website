'use client';

import { Navbar } from '@/components/Navbar';
import { Hero } from '@/components/Hero';
import { LogoMarquee } from '@/components/LogoMarquee';
import { Expertise } from '@/components/Expertise';
import { RecentWorks } from '@/components/RecentWorks';
import { Testimonials } from '@/components/Testimonials';
import { ContactCTA } from '@/components/ContactCTA';
import { Footer } from '@/components/Footer';
import { ScrollToTop } from '@/components/ScrollToTop';
import { ScrollReveal } from '@/components/ScrollReveal';
import { BlogSection } from '@/components/BlogSection';

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <ScrollReveal>
        <LogoMarquee />
      </ScrollReveal>
      <ScrollReveal>
        <Expertise />
      </ScrollReveal>
      <ScrollReveal>
        <RecentWorks limit={3} />
      </ScrollReveal>
      <ScrollReveal>
        <Testimonials />
      </ScrollReveal>
      <ScrollReveal>
        <BlogSection />
      </ScrollReveal>
      <ScrollReveal>
        <ContactCTA />
      </ScrollReveal>
      <ScrollReveal>
        <Footer />
      </ScrollReveal>
      <ScrollToTop />
    </main>
  );
}
