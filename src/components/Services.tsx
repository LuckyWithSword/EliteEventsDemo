import { useEffect, useRef } from 'react';
import gsap from 'gsap';

const services = [
  { id: '01', title: 'Wedding Planning', desc: 'Comprehensive curation of your special day.' },
  { id: '02', title: 'Wedding Decor & Styling', desc: 'Bespoke aesthetic design and floral artistry.' },
  { id: '03', title: 'Engagement Planning', desc: 'Intimate and elegant preludes to marriage.' },
  { id: '04', title: 'Reception Event Management', desc: 'Grand celebrations flawlessly executed.' },
  { id: '05', title: 'Corporate Events', desc: 'Professional, sophisticated brand experiences.' },
  { id: '06', title: 'Social Celebrations', desc: 'Milestones marked with luxury and emotion.' },
];

export function Services() {
  const containerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        '.service-row',
        { y: 30, opacity: 0 },
        { 
          y: 0, opacity: 1, duration: 1, stagger: 0.1, ease: 'power2.out',
          scrollTrigger: { trigger: containerRef.current, start: 'top 70%' }
        }
      );
    }, containerRef);
    return () => ctx.revert();
  }, []);

  return (
    <section id="services" ref={containerRef} className="py-24 md:py-32 px-8 bg-[#0E0E0E] text-ivory">
      <div className="max-w-7xl mx-auto">
        <div className="mb-20 md:mb-32 flex flex-col md:flex-row md:items-end justify-between gap-8">
          <div>
            <h2 className="font-serif text-5xl md:text-7xl font-light text-white mb-4 tracking-tight">Our Services</h2>
            <p className="text-beige/60 font-sans text-sm md:text-base max-w-md">
              A curated suite of offerings designed for those who appreciate refined aesthetics and flawless execution.
            </p>
          </div>
          <p className="text-[10px] uppercase tracking-[0.15em] text-gold hidden md:block">( The Offering )</p>
        </div>

        <div className="border-t border-white/10">
          {services.map((service) => (
            <div 
              key={service.id} 
              className="service-row group relative py-8 md:py-12 border-b border-gold/10 flex flex-col md:flex-row md:items-center justify-between gap-4 cursor-pointer overflow-hidden"
            >
              <div className="absolute inset-0 bg-charcoal/30 -translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-in-out z-0"></div>
              
              <div className="relative z-10 flex items-start md:items-center gap-6 md:gap-12 md:w-1/2">
                <span className="font-sans text-[10px] tracking-[0.15em] uppercase text-gold/60">{service.id}</span>
                <h3 className="font-serif text-3xl md:text-5xl font-light text-white group-hover:text-gold transition-colors duration-500 mb-0 italic">
                  {service.title}
                </h3>
              </div>
              
              <div className="relative z-10 md:w-1/3 flex justify-between items-center mt-4 md:mt-0">
                <p className="text-beige/60 text-sm md:text-base font-light group-hover:text-ivory transition-colors duration-500 leading-relaxed">
                  {service.desc}
                </p>
                <div className="w-8 h-8 rounded-full border border-gold/30 flex items-center justify-center opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-500">
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className="text-gold"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
