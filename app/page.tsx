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

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <LogoMarquee />
      <Expertise />
      <RecentWorks limit={3} />
      <Testimonials />
      <ContactCTA />
      <Footer />
      <ScrollToTop />
    </main>
  );
}
