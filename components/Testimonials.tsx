import React from 'react';
import { Star } from 'lucide-react';
import { Reveal } from './Reveal';

const Testimonials: React.FC = () => {
  return (
    <section id="testimonials" className="py-32 bg-cream scroll-mt-24">
       <div className="max-w-7xl mx-auto px-6 text-center mb-20">
          <Reveal>
              <h2 className="text-4xl md:text-6xl font-serif font-bold text-dark mb-6">Loved by Marketers</h2>
          </Reveal>
       </div>
       
       <div className="overflow-hidden relative">
          <div className="flex gap-8 animate-scroll w-max px-6 hover:[animation-play-state:paused]">
            {/* Duplicated list for infinite scroll simulation */}
            {[1, 2, 3, 4, 1, 2, 3, 4].map((i, index) => (
               <div key={`${i}-${index}`} className="w-[350px] md:w-[450px] p-10 bg-white rounded-3xl shadow-sm border border-gray-100 shrink-0 hover:shadow-xl hover:-translate-y-2 transition-all duration-300">
                  <div className="flex gap-1 text-yellow-400 mb-6">
                    {[1,2,3,4,5].map(s => <Star key={s} size={20} fill="currentColor" />)}
                  </div>
                  <p className="text-xl text-dark mb-8 font-medium leading-relaxed">
                    "Brandlyft completely transformed our paid social strategy. The creative quality is unmatched and the turnaround time is insane."
                  </p>
                  <div className="flex items-center gap-4">
                    <div className="w-14 h-14 rounded-full bg-gray-200 overflow-hidden">
                        <img src={`https://i.pravatar.cc/150?img=${i + 10}`} alt="User" className="w-full h-full object-cover" />
                    </div>
                    <div className="text-left">
                        <div className="font-bold text-dark text-lg">Sarah Jenkins</div>
                        <div className="text-base text-gray-500">CMO at GlowUp</div>
                    </div>
                  </div>
               </div>
            ))}
          </div>
       </div>
    </section>
  );
};

export default Testimonials;