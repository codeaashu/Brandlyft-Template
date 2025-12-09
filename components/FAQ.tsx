import React, { useState } from 'react';
import { Plus, Minus } from 'lucide-react';

const FAQItem: React.FC<{ question: string; answer: string }> = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-gray-200">
      <button 
        className="w-full py-6 flex items-center justify-between text-left focus:outline-none group"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="text-lg font-bold text-dark group-hover:text-primary transition-colors">{question}</span>
        {isOpen ? <Minus className="text-primary shrink-0" /> : <Plus className="text-gray-400 shrink-0" />}
      </button>
      <div className={`overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-96 opacity-100 pb-6' : 'max-h-0 opacity-0'}`}>
        <p className="text-gray-600 leading-relaxed pr-8">{answer}</p>
      </div>
    </div>
  );
};

const FAQ: React.FC = () => {
  return (
    <section className="py-24 bg-cream">
      <div className="max-w-3xl mx-auto px-6">
        <h2 className="text-4xl font-serif font-bold text-center text-dark mb-12">Frequently Asked Questions</h2>
        
        <div className="space-y-2">
            <FAQItem 
                question="Do I own the rights to the videos?" 
                answer="Yes! Once the videos are delivered and approved, you have 100% ownership rights to use them across all your marketing channels organically and for paid ads." 
            />
            <FAQItem 
                question="How long does it take?" 
                answer="Typically, you will receive your first drafts within 5-7 business days after our creators receive your product. Revisions are usually turned around in 24-48 hours." 
            />
             <FAQItem 
                question="Can I choose the creators?" 
                answer="We match you with creators based on your brand aesthetic and target audience. However, on our Growth and Scale plans, you can review creator profiles before we ship the product." 
            />
        </div>
      </div>
    </section>
  );
};

export default FAQ;