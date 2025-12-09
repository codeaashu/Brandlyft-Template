import React from 'react';

const LogoTicker: React.FC = () => {
  return (
    <div className="py-12 border-b border-gray-100 bg-white">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <p className="text-sm font-bold uppercase tracking-widest text-gray-400 mb-8">Trusted by 1000+ fast growing brands</p>
        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
           {/* Replaced generic boxes with simple SVG text logos for realism */}
           <h3 className="text-2xl font-serif font-bold text-gray-800">AcmeCorp</h3>
           <h3 className="text-xl font-sans font-black text-gray-800 tracking-tighter">Bolt.</h3>
           <h3 className="text-2xl font-serif italic font-bold text-gray-800">Feather</h3>
           <h3 className="text-xl font-sans font-bold text-gray-800 border-2 border-gray-800 px-2">SQUARE</h3>
           <h3 className="text-2xl font-hand font-bold text-gray-800">Global</h3>
        </div>
      </div>
    </div>
  );
};

export default LogoTicker;