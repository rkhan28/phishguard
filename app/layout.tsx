import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { ThemeProvider } from 'next-themes';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { AnimatedBackground } from '@/components/AnimatedBackground';
import { Toaster } from '@/components/ui/toaster';

const inter = Inter({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'PhishGuard — Email Review Prototype',
  description: 'An email-review prototype with sample reports and a local keyword checker',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem storageKey="phishguard-theme">
          <div className="min-h-screen flex flex-col relative">
            <AnimatedBackground />
            <Navbar />
            <p className="relative z-10 px-6 py-3 text-center text-sm text-muted-foreground">Prototype: sample reports and keyword checks, not a production security service.</p>
            <main className="flex-1 relative z-10">{children}</main>
            <Footer />
          </div>
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}
