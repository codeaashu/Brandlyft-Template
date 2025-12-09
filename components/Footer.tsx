import React from 'react';
import { Zap, Twitter, Instagram, Linkedin, ArrowRight } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-dark text-white pt-24 pb-12 overflow-hidden relative font-sans">
      {/* Background Glows */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
          <div className="absolute -top-[50%] -left-[20%] w-[80%] h-[80%] bg-primary/10 rounded-full blur-[120px]"></div>
          <div className="absolute bottom-[-20%] right-[-10%] w-[60%] h-[60%] bg-blue-500/5 rounded-full blur-[100px]"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Pre-footer CTA */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 mb-20 pb-20 border-b border-white/10">
            <div className="max-w-2xl text-center md:text-left">
                <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6 leading-tight">
                    Ready to scale your content?
                </h2>
                <p className="text-gray-400 text-lg">Join 100,000+ creators and brands transforming their marketing today.</p>
            </div>
            <button className="group flex items-center gap-2 bg-white text-dark px-8 py-4 rounded-full font-bold text-lg hover:bg-primary hover:text-white transition-all duration-300 transform hover:scale-105 shadow-lg shadow-white/5">
                Start Your Free Trial
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-16">
            {/* Brand Column */}
            <div className="md:col-span-4 space-y-6">
                <a href="#" className="flex items-center gap-2 group w-fit">
                    <div className="bg-white/10 p-2 rounded-xl group-hover:bg-primary transition-colors duration-300">
                        <Zap className="w-6 h-6 fill-white" />
                    </div>
                    <span className="text-2xl font-serif font-bold tracking-tight">Brandlyft</span>
                </a>
                <p className="text-gray-400 text-base leading-relaxed max-w-sm">
                    The leading platform for high-impact short-form video content. We connect brands with expert creators to drive real business results.
                </p>
                <div className="flex gap-4 pt-2">
                    {[Twitter, Instagram, Linkedin].map((Icon, i) => (
                        <a key={i} href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-primary hover:text-white hover:-translate-y-1 transition-all duration-300 group">
                            <Icon size={18} className="text-gray-400 group-hover:text-white transition-colors" />
                        </a>
                    ))}
                </div>
            </div>
            
            {/* Links Columns */}
            <div className="md:col-span-2 md:col-start-6">
                <h4 className="font-bold text-lg mb-6 text-white">Company</h4>
                <ul className="space-y-4 text-gray-400">
                    {['About Us', 'Careers', 'Creators', 'Contact'].map(item => (
                        <li key={item}><a href="#" className="hover:text-primary hover:translate-x-1 inline-block transition-all duration-200">{item}</a></li>
                    ))}
                </ul>
            </div>

             <div className="md:col-span-2">
                <h4 className="font-bold text-lg mb-6 text-white">Resources</h4>
                <ul className="space-y-4 text-gray-400">
                    {['Blog', 'Case Studies', 'Help Center', 'Privacy Policy'].map(item => (
                        <li key={item}><a href="#" className="hover:text-primary hover:translate-x-1 inline-block transition-all duration-200">{item}</a></li>
                    ))}
                </ul>
            </div>

            {/* Newsletter */}
            <div className="md:col-span-3">
                <h4 className="font-bold text-lg mb-6 text-white">Stay in the loop</h4>
                <p className="text-gray-400 text-sm mb-4">Get the latest trends in short-form video delivered to your inbox.</p>
                <form className="relative" onSubmit={(e) => e.preventDefault()}>
                    <input 
                        type="email" 
                        placeholder="Email address" 
                        className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all text-white placeholder-gray-500 hover:bg-white/10" 
                    />
                    <button type="submit" className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/10 p-1.5 rounded-lg hover:bg-primary text-white transition-colors">
                        <ArrowRight size={16} />
                    </button>
                </form>
            </div>
        </div>
        
        {/* Bottom Bar */}
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-gray-500">
            <p>© {new Date().getFullYear()} Brandlyft Inc. All rights reserved.</p>
            <div className="flex gap-8">
                <a href="#" className="hover:text-white transition-colors">Terms</a>
                <a href="#" className="hover:text-white transition-colors">Privacy</a>
                <a href="#" className="hover:text-white transition-colors">Cookies</a>
            </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;