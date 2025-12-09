import React from 'react';
import { Check } from 'lucide-react';
import { Reveal } from './Reveal';

const Pricing: React.FC = () => {
  return (
    <section id="pricing" className="py-32 bg-white scroll-mt-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
           <Reveal>
                <h2 className="text-4xl md:text-6xl font-serif font-bold text-dark mb-6">Simple, Transparent Pricing</h2>
           </Reveal>
           <Reveal delay={0.2}>
                <p className="text-xl text-gray-600">Pause or cancel anytime.</p>
           </Reveal>
        </div>

        <div className="grid md:grid-cols-3 gap-8 items-start">
            {/* Starter */}
            <Reveal delay={0.2}>
                <div className="p-10 rounded-[2rem] border border-gray-200 bg-white hover:border-primary/30 hover:shadow-2xl transition-all duration-300 group">
                    <div className="text-xl font-bold text-gray-500 mb-4">Starter</div>
                    <div className="text-5xl font-bold text-dark mb-8 tracking-tight">$499<span className="text-xl text-gray-400 font-normal">/mo</span></div>
                    <p className="text-gray-600 mb-10 text-base leading-relaxed">Perfect for small brands just getting started with UGC.</p>
                    <button className="w-full py-4 border-2 border-dark rounded-xl font-bold text-dark group-hover:bg-dark group-hover:text-white transition-all mb-10">Get Started</button>
                    <div className="space-y-4">
                        {['2 Videos / month', 'Basic Editing', '1 Revision', 'Standard Creators'].map(feat => (
                            <div key={feat} className="flex items-center gap-4 text-gray-700">
                                <div className="p-1 bg-green-100 rounded-full">
                                    <Check size={14} className="text-green-600" />
                                </div>
                                {feat}
                            </div>
                        ))}
                    </div>
                </div>
            </Reveal>

            {/* Growth - Highlighted */}
            <Reveal delay={0.4}>
                <div className="p-10 rounded-[2rem] border-2 border-primary bg-cream relative transform md:-translate-y-6 shadow-2xl z-10">
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-primary text-white px-6 py-2 rounded-full text-sm font-bold uppercase tracking-wide shadow-lg shadow-red-200">Most Popular</div>
                    <div className="text-xl font-bold text-primary mb-4">Growth</div>
                    <div className="text-5xl font-bold text-dark mb-8 tracking-tight">$999<span className="text-xl text-gray-400 font-normal">/mo</span></div>
                    <p className="text-gray-600 mb-10 text-base leading-relaxed">For scaling brands that need consistent high-performing creatives.</p>
                    <button className="w-full py-4 bg-primary text-white rounded-xl font-bold hover:bg-red-500 transition-all hover:scale-105 active:scale-95 mb-10 shadow-lg shadow-red-200">Get Started</button>
                    <div className="space-y-4">
                        {['4 Videos / month', 'Advanced Editing & Hooks', 'Unlimited Revisions', 'Top Tier Creators', 'Dedicated Success Manager'].map(feat => (
                            <div key={feat} className="flex items-center gap-4 text-dark font-medium">
                                <div className="p-1 bg-primary/20 rounded-full">
                                    <Check size={14} className="text-primary" />
                                </div>
                                {feat}
                            </div>
                        ))}
                    </div>
                </div>
            </Reveal>

             {/* Scale */}
             <Reveal delay={0.6}>
                <div className="p-10 rounded-[2rem] border border-gray-200 bg-white hover:border-primary/30 hover:shadow-2xl transition-all duration-300 group">
                    <div className="text-xl font-bold text-gray-500 mb-4">Scale</div>
                    <div className="text-5xl font-bold text-dark mb-8 tracking-tight">$1,999<span className="text-xl text-gray-400 font-normal">/mo</span></div>
                    <p className="text-gray-600 mb-10 text-base leading-relaxed">Volume production for agencies and enterprise teams.</p>
                    <button className="w-full py-4 border-2 border-dark rounded-xl font-bold text-dark group-hover:bg-dark group-hover:text-white transition-all mb-10">Contact Sales</button>
                    <div className="space-y-4">
                        {['8+ Videos / month', 'Custom Strategy', 'Priority Turnaround', 'Raw Footage Included'].map(feat => (
                            <div key={feat} className="flex items-center gap-4 text-gray-700">
                                <div className="p-1 bg-green-100 rounded-full">
                                    <Check size={14} className="text-green-600" />
                                </div>
                                {feat}
                            </div>
                        ))}
                    </div>
                </div>
            </Reveal>
        </div>
      </div>
    </section>
  );
};

export default Pricing;