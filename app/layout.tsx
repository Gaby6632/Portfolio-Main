import type { Metadata } from 'next';
import { GoogleAnalytics } from '@next/third-parties/google';
import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ChatWidget from '@/components/ChatWidget';

export const metadata: Metadata = {
  title: 'Gabriel I. Joian | Full Stack Developer',
  description: 'Personal portfolio of Gabriel I. Joian — Full Stack Web Developer and CEO of GabHosting. Specializing in high-performance web applications, cloud infrastructure, and digital solutions.',
  keywords: ['Full Stack Developer', 'GabHosting', 'Next.js Developer', 'React', 'TypeScript', 'Web Development'],
  authors: [{ name: 'Gabriel I. Joian' }],
  openGraph: {
    title: 'Gabriel I. Joian | Full Stack Developer',
    description: 'High-performance web development and custom cloud hosting solutions.',
    type: 'website',
    locale: 'en_US',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  // Grab your GA ID from .env.local (e.g. NEXT_PUBLIC_GA_ID="G-XXXXXXXXXX")
  const gaId = process.env.NEXT_PUBLIC_GA_ID;

  return (
    <html lang="en" className="scroll-smooth">
      <body className="min-h-screen bg-slate-950 text-slate-100 antialiased selection:bg-blue-500 selection:text-white flex flex-col">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
        <ChatWidget />
        
        {/* Google Analytics 4 */}
        {gaId && <GoogleAnalytics gaId={gaId} />}
      </body>
    </html>
  );
}