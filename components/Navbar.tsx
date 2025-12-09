import React, { useState, useEffect } from 'react';
import { Zap, Menu, X } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-cream/95 backdrop-blur-md shadow-sm py-4' : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        
        {/* Logo */}
        <a href="#" className="flex items-center gap-2 cursor-pointer z-50 group">
          <div className="text-dark transform group-hover:rotate-12 transition-transform duration-300">
              <Zap className="w-8 h-8 fill-dark" />
          </div>
          <span className="text-2xl font-bold font-serif tracking-tight text-dark">Brandlyft</span>
        </a>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-10">
          {['Features', 'How it Works', 'Pricing', 'Testimonials'].map((item) => {
            const href = `#${item.toLowerCase().replace(/\s+/g, '-')}`;
            return (
              <a 
                key={item} 
                href={href} 
                className="relative text-base font-semibold text-gray-600 hover:text-dark transition-colors group py-2"
              >
                {item}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
              </a>
            );
          })}
        </div>

        {/* Desktop CTA */}
        <div className="hidden md:flex items-center gap-6">
          <a href="#" className="text-base font-bold text-dark hover:text-primary transition-colors">Log in</a>
          <a href="#pricing" className="bg-dark text-white text-base font-bold px-6 py-3 rounded-xl hover:bg-gray-800 transition-all hover:scale-105 active:scale-95 shadow-lg shadow-gray-200">
            Signup
          </a>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden z-50 p-2 text-dark"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={32} /> : <Menu size={32} />}
        </button>

        {/* Mobile Menu */}
        <div className={`fixed inset-0 bg-cream z-40 flex flex-col items-center justify-center gap-8 transition-transform duration-500 ease-[cubic-bezier(0.76,0,0.24,1)] md:hidden ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}>
            {['Features', 'How it Works', 'Pricing', 'Testimonials'].map((item, i) => (
               <a 
                 key={item} 
                 href={`#${item.toLowerCase().replace(/\s+/g, '-')}`} 
                 onClick={() => setIsOpen(false)} 
                 className="text-3xl font-serif font-medium hover:text-primary transition-colors transform hover:translate-x-2"
                 style={{ transitionDelay: `${i * 100}ms` }}
               >
                 {item}
               </a>
            ))}
            <div className="flex flex-col gap-4 mt-8 w-64 px-6">
                <button className="w-full py-4 text-dark font-bold border-2 border-dark rounded-xl hover:bg-dark hover:text-white transition-colors">Log in</button>
                <a href="#pricing" onClick={() => setIsOpen(false)} className="w-full py-4 bg-primary text-white font-bold rounded-xl shadow-lg shadow-red-200 hover:shadow-xl transition-all text-center">Get Started</a>
            </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;