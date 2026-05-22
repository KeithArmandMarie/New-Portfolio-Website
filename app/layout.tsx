import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { ThemeProvider } from '@/components/ThemeProvider';
import { SmoothScroll } from '@/components/SmoothScroll';
import { Preloader } from '@/components/Preloader';
import { GoogleAnalytics } from '@next/third-parties/google';
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/next';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-sans',
});

export const metadata: Metadata = {
  title: 'Keith Caballero | UI/UX Designer & Developer',
  description: 'Portfolio of Keith Caballero, a UI/UX Designer and WordPress Developer.',
  icons: {
    icon: 'https://cdn.peakcell.studio/assets/web/favicon.ico',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable}`} suppressHydrationWarning>
      <body className="font-sans antialiased transition-colors duration-300" suppressHydrationWarning>
        <Preloader />
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem={false}>
          <SmoothScroll>
            <div className="min-h-screen bg-[#F5F5F2] text-black dark:bg-[#0A0A0A] dark:text-[#F5F5F2] transition-colors duration-300">
              {children}
            </div>
          </SmoothScroll>
        </ThemeProvider>
        <GoogleAnalytics gaId="G-BWKR8QJ000" />
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
