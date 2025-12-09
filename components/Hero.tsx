import React, { useEffect, useState } from 'react';
import Carousel from './Carousel';
import { ElevateArrow, FreeArrow } from './HandDrawnIcons';

const Hero: React.FC = () => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      // Normalize mouse position from -1 to 1
      setMousePos({
        x: (e.clientX / window.innerWidth) * 2 - 1,
        y: (e.clientY / window.innerHeight) * 2 - 1,
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className="relative pt-32 md:pt-40 pb-0 w-full overflow-hidden flex flex-col items-center min-h-screen">
      {/* Dynamic Background Decoration */}
      <div 
        className="absolute top-0 left-1/2 w-full h-[800px] bg-radial-gradient from-white to-transparent opacity-60 -z-10 pointer-events-none transition-transform duration-100 ease-out"
        style={{
          transform: `translate(-50%, 0) translate(${mousePos.x * -20}px, ${mousePos.y * -20}px)`
        }}
      ></div>
      
      {/* Decorative Blob */}
      <div 
        className="absolute top-[20%] right-[10%] w-64 h-64 bg-yellow-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 -z-10 animate-pulse"
        style={{
           transform: `translate(${mousePos.x * 30}px, ${mousePos.y * 30}px)`
        }}
      ></div>
       <div 
        className="absolute top-[30%] left-[10%] w-72 h-72 bg-pink-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 -z-10 animate-pulse"
        style={{
           transform: `translate(${mousePos.x * -30}px, ${mousePos.y * -30}px)`
        }}
      ></div>


      {/* Top Tag */}
      <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-orange-200 bg-orange-50/50 backdrop-blur-sm mb-8 animate-fade-in-up hover:scale-105 transition-transform cursor-default">
        <span className="flex h-2 w-2 relative">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-2 w-2 bg-orange-500"></span>
        </span>
        <span className="text-xs font-bold text-orange-800 tracking-wide uppercase">Join over 100,000 happy creators</span>
      </div>

      {/* Headline */}
      <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif font-bold text-center text-dark leading-[1.05] mb-8 max-w-6xl px-4 animate-fade-in-up [animation-delay:100ms] tracking-tight">
        Engage Audiences <br className="hidden md:block" />
        <span className="inline-block relative">
          with Stunning Videos
           <svg className="absolute w-full h-3 -bottom-1 left-0 text-primary opacity-60" viewBox="0 0 200 9" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M2.00026 6.99998C18.4424 4.51268 62.7212 1.34866 117.828 2.0545C158.423 2.5744 186.273 5.48529 197.883 7.00003" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/></svg>
        </span>
      </h1>

      {/* Subheadline */}
      <p className="text-lg md:text-2xl text-gray-600 text-center max-w-3xl px-6 mb-12 leading-relaxed animate-fade-in-up [animation-delay:300ms]">
        Boost Your Brand with High-Impact Short Videos from our expert content creators. 
        Our team is ready to propel your business forward.
      </p>

      {/* CTA Section */}
      <div className="relative mb-8 z-20 animate-fade-in-up [animation-delay:500ms] group">
        {/* Hand drawn arrow - It's free - Parallax */}
        <div 
            className="absolute -left-40 top-4 hidden md:block opacity-0 animate-fade-in [animation-delay:1200ms] [animation-fill-mode:forwards]"
            style={{ transform: `translate(${mousePos.x * -15}px, ${mousePos.y * -15}px) rotate(-10deg)` }}
        >
           <FreeArrow />
        </div>

        <a href="#pricing" className="inline-block relative bg-primary text-white font-bold text-lg px-12 py-5 rounded-2xl shadow-[0_20px_40px_-15px_rgba(255,107,107,0.5)] transition-all hover:scale-110 hover:-translate-y-2 active:scale-95 overflow-hidden">
            <span className="relative z-10">Get Started Now</span>
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-12 translate-x-[-150%] group-hover:animate-[shimmer_1.5s_infinite]"></div>
        </a>
      </div>

      {/* Carousel Section with Annotation */}
      <div className="w-full relative mt-0 z-10">
         {/* Hand drawn arrow - Elevate your brand - Parallax */}
        <div 
            className="absolute right-[10%] lg:right-[18%] -top-12 z-30 hidden lg:block opacity-0 animate-fade-in [animation-delay:1000ms] [animation-fill-mode:forwards]"
            style={{ transform: `translate(${mousePos.x * 20}px, ${mousePos.y * 20}px)` }}
        >
            <ElevateArrow />
        </div>
        
        <Carousel />
      </div>
    </div>
  );
};

export default Hero;