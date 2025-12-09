import React from 'react';
import { Reveal } from './Reveal';

const Process: React.FC = () => {
  return (
    <section id="how-it-works" className="py-32 bg-white overflow-hidden relative scroll-mt-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center gap-20">
          
          <div className="md:w-1/2">
            <Reveal effect="slide-right">
                <h2 className="text-5xl md:text-6xl font-serif font-bold text-dark mb-8 leading-tight">
                Get stunning content in <br/><span className="text-primary italic">3 simple steps</span>
                </h2>
            </Reveal>
            <Reveal effect="slide-right" delay={0.2}>
                <p className="text-xl text-gray-600 mb-12">No creative brief? No problem. We handle the strategy, sourcing, and editing.</p>
            </Reveal>
            
            <div className="space-y-12 relative">
              {/* Vertical line connecting steps */}
              <div className="absolute left-6 top-8 bottom-8 w-0.5 bg-gray-100 -z-10"></div>

              {[
                { title: "Match", text: "We pair you with creators that match your brand aesthetic." },
                { title: "Ship", text: "Send your product. We handle the logistics and tracking." },
                { title: "Receive", text: "Get fully edited, ready-to-post videos in your dashboard." }
              ].map((step, i) => (
                <Reveal key={i} delay={0.3 + (i * 0.2)} effect="fade-up">
                    <div className="flex gap-8 items-start group cursor-default">
                        <div className="w-14 h-14 rounded-full bg-cream border-2 border-gray-100 flex items-center justify-center text-2xl font-bold text-dark shrink-0 group-hover:bg-primary group-hover:text-white group-hover:border-primary transition-all duration-300 shadow-sm group-hover:shadow-lg group-hover:scale-110">
                            {i + 1}
                        </div>
                        <div className="pt-2">
                            <h4 className="text-2xl font-bold text-dark mb-2 group-hover:text-primary transition-colors">{step.title}</h4>
                            <p className="text-gray-600 text-lg">{step.text}</p>
                        </div>
                    </div>
                </Reveal>
              ))}
            </div>
          </div>

          <div className="md:w-1/2 relative perspective-1000">
             <Reveal delay={0.4}>
                <div className="relative z-10 grid grid-cols-2 gap-6 transform hover:rotate-y-12 hover:rotate-x-6 transition-transform duration-700 ease-out preserve-3d">
                    <img 
                        src="https://images.unsplash.com/photo-1611162616475-46b635cb6868?q=80&w=400&auto=format&fit=crop" 
                        className="rounded-3xl shadow-2xl translate-y-12 hover:scale-105 transition-transform duration-500" 
                        alt="Creator working" 
                    />
                    <img 
                        src="https://images.unsplash.com/photo-1596558450268-9c27524ba856?q=80&w=400&auto=format&fit=crop" 
                        className="rounded-3xl shadow-2xl hover:scale-105 transition-transform duration-500" 
                        alt="Product shot" 
                    />
                </div>
            </Reveal>
            {/* Decorative blob */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[140%] h-[140%] bg-cream rounded-full blur-3xl -z-10 opacity-70 animate-pulse"></div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Process;