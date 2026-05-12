import { useState } from 'react';
import { cn } from '../lib/utils';
import { motion, AnimatePresence } from 'motion/react';

const faqs = [
  { question: "What locations do you serve?", answer: "We primarily serve West Bengal including Durgapur, Kolkata, Asansol, Bardhaman, and surrounding areas. We are also available for select destination weddings across India." },
  { question: "How far in advance should we book your services?", answer: "For full wedding planning, we recommend booking 6-12 months in advance. For specific events or decor-only services, 3-6 months is ideal to ensure availability." },
  { question: "Do you offer partial planning and day-of coordination?", answer: "Yes, we offer bespoke packages tailored to your specific needs, ranging from comprehensive end-to-end planning to execution-only services for the day of the event." },
  { question: "Can you manage events of all scales?", answer: "Absolutely. Whether it's an intimate engagement gathering of 50 people or a grand reception hosting thousands, our team is equipped to execute flawlessly." }
];

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-24 md:py-40 px-8 bg-black text-ivory">
      <div className="max-w-3xl mx-auto">
        <h2 className="font-serif text-4xl md:text-5xl font-light text-center text-white mb-20 italic">
          Frequently Asked Questions
        </h2>
        
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="border-b border-gold/10 group">
              <button 
                onClick={() => toggle(index)}
                className="w-full py-8 flex items-center justify-between text-left focus:outline-none"
              >
                <span className={cn(
                  "font-serif text-xl md:text-2xl font-light transition-colors duration-300",
                  openIndex === index ? "text-gold" : "text-white group-hover:text-gold/80"
                )}>
                  {faq.question}
                </span>
                <span className={cn(
                  "ml-8 flex-shrink-0 transition-transform duration-500 ease-in-out text-gold",
                  openIndex === index ? "rotate-45" : "rotate-0"
                )}>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"><line x1="12" y1="5" x2="12" y2="19"></line><line x1="5" y1="12" x2="19" y2="12"></line></svg>
                </span>
              </button>
              
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div 
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.5, ease: [0.19, 1.0, 0.22, 1.0] }}
                    className="overflow-hidden"
                  >
                    <p className="pb-8 font-sans text-sm md:text-base font-light text-ivory/60 leading-relaxed pr-12">
                      {faq.answer}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
