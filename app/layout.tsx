import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { ThemeProvider } from '@/components/ThemeProvider';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-sans',
});

export const metadata: Metadata = {
  title: 'Keith Caballero | UI/UX Designer & Developer',
  description: 'Portfolio of Keith Caballero, a UI/UX Designer and WordPress Developer.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable}`} suppressHydrationWarning>
      <body className="font-sans antialiased transition-colors duration-300">
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem={false}>
          <div className="min-h-screen bg-white text-black dark:bg-[#050505] dark:text-white transition-colors duration-300">
            {children}
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
