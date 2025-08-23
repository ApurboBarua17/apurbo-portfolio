import { useEffect, useState } from 'react';
import { Header } from './Header';
import { Footer } from './Footer';
import { StarfieldBackground } from './StarfieldBackground';

interface LayoutProps {
  children: React.ReactNode;
}

export function Layout({ children }: LayoutProps) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <div className="min-h-screen bg-background dark relative overflow-hidden">
      <StarfieldBackground />
      
      {/* Ambient glow effects */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-red-500/20 rounded-full blur-3xl pulse-glow"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-red-600/15 rounded-full blur-3xl pulse-glow" style={{ animationDelay: '1.5s' }}></div>
        <div className="absolute top-1/2 left-0 w-64 h-64 bg-red-400/10 rounded-full blur-2xl pulse-glow" style={{ animationDelay: '3s' }}></div>
      </div>

      <div className="relative z-10">
        <Header />
        <main className="relative">
          {children}
        </main>
        <Footer />
      </div>
    </div>
  );
}