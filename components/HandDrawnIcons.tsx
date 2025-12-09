import React from 'react';

export const ElevateArrow: React.FC<{ className?: string }> = ({ className }) => (
  <div className={`flex flex-col items-center ${className}`}>
    <span className="font-hand text-2xl text-dark mb-1 rotate-[-5deg]">Elevate your brand</span>
    <svg width="60" height="60" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="transform translate-x-2">
      <path d="M10 10 Q 50 50 80 80" stroke="black" strokeWidth="2" fill="none" />
      <path d="M80 80 L 70 75 M 80 80 L 75 70" stroke="black" strokeWidth="2" fill="none" />
      {/* A more organic curved arrow */}
      <path d="M20,20 C40,40 60,30 70,60" stroke="black" strokeWidth="1.5" fill="none" strokeLinecap="round" />
      <path d="M70,60 L 65,50 M 70,60 L 60,62" stroke="black" strokeWidth="1.5" fill="none" strokeLinecap="round" />
    </svg>
  </div>
);

export const FreeArrow: React.FC<{ className?: string }> = ({ className }) => (
  <div className={`flex flex-col items-center ${className}`}>
    <svg width="50" height="40" viewBox="0 0 50 40" fill="none" xmlns="http://www.w3.org/2000/svg" className="transform rotate-12 mb-1">
       <path d="M40 5 Q 20 5 10 30" stroke="black" strokeWidth="1.5" fill="none" strokeLinecap="round" />
       <path d="M10 30 L 15 22 M 10 30 L 20 28" stroke="black" strokeWidth="1.5" fill="none" strokeLinecap="round" />
    </svg>
    <span className="font-hand text-2xl text-dark rotate-[-10deg]">It's free</span>
  </div>
);