import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import LogoTicker from './components/LogoTicker';
import Features from './components/Features';
import Process from './components/Process';
import Testimonials from './components/Testimonials';
import Pricing from './components/Pricing';
import FAQ from './components/FAQ';
import Footer from './components/Footer';
import { Zap } from 'lucide-react';

const LoadingScreen = ({ onComplete }: { onComplete: () => void }) => {
  const [active, setActive] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setActive(false);
      setTimeout(onComplete, 500); // Wait for exit animation
    }, 2000);
    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <div className={`fixed inset-0 z-[60] flex items-center justify-center bg-cream transition-opacity duration-500 ${active ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
      <div className="flex flex-col items-center gap-4">
        <div className="relative">
             <div className="absolute inset-0 bg-primary/20 rounded-full blur-xl animate-pulse"></div>
             <Zap className="w-16 h-16 fill-dark text-dark relative z-10 animate-bounce-slow" />
        </div>
        <h1 className="text-2xl font-serif font-bold text-dark animate-pulse">Brandlyft</h1>
      </div>
    </div>
  );
};

const App: React.FC = () => {
  const [loading, setLoading] = useState(true);

  return (
    <>
      {loading && <LoadingScreen onComplete={() => setLoading(false)} />}
      <div className={`min-h-screen bg-cream selection:bg-primary/20 transition-opacity duration-700 ${loading ? 'opacity-0' : 'opacity-100'}`}>
        <Navbar />
        <main>
          <Hero />
          <LogoTicker />
          <Features />
          <Process />
          <Testimonials />
          <Pricing />
          <FAQ />
        </main>
        <Footer />
      </div>
    </>
  );
};

export default App;