import React, { useEffect, useRef, useState } from 'react';

interface RevealProps {
  children: React.ReactNode;
  width?: "fit-content" | "100%";
  delay?: number;
  className?: string;
  effect?: "fade-up" | "fade-in" | "slide-right";
}

export const Reveal: React.FC<RevealProps> = ({ 
  children, 
  width = "fit-content", 
  delay = 0, 
  className = "",
  effect = "fade-up"
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect(); // Only animate once
        }
      },
      {
        threshold: 0.1,
        rootMargin: "0px 0px -50px 0px" // Trigger slightly before element is fully in view
      }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) observer.unobserve(ref.current);
    };
  }, []);

  const getTransform = () => {
    if (!isVisible) {
      if (effect === "fade-up") return "translateY(75px)";
      if (effect === "slide-right") return "translateX(-75px)";
      return "none";
    }
    return "translate(0, 0)";
  };

  return (
    <div
      ref={ref}
      style={{ 
        position: 'relative', 
        width, 
        overflow: 'visible' 
      }}
      className={className}
    >
      <div
        style={{
          transform: getTransform(),
          opacity: isVisible ? 1 : 0,
          transition: `all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) ${delay}s`
        }}
      >
        {children}
      </div>
    </div>
  );
};