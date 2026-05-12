import { useEffect, useRef } from 'react';
import gsap from 'gsap';

export function Experience() {
  const containerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        '.metric-item',
        { y: 40, opacity: 0 },
        { 
          y: 0, opacity: 1, duration: 1.5, stagger: 0.2, ease: 'power3.out',
          scrollTrigger: { trigger: containerRef.current, start: 'top 75%' }
        }
      );
    }, containerRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} className="py-24 md:py-32 px-8 bg-black border-y border-gold/10 relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gold/5 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-12 md:gap-8 text-center relative z-10">
        <div className="metric-item flex flex-col items-center">
          <span className="font-serif text-5xl md:text-7xl font-light text-white mb-4 italic">7+</span>
          <span className="font-sans text-[10px] uppercase tracking-[0.15em] text-beige/60">Years Experience</span>
        </div>
        <div className="metric-item flex flex-col items-center">
          <span className="font-serif text-5xl md:text-7xl font-light text-white mb-4 italic">500+</span>
          <span className="font-sans text-[10px] uppercase tracking-[0.15em] text-beige/60">Events Managed</span>
        </div>
        <div className="metric-item flex flex-col items-center">
          <span className="font-serif text-5xl md:text-7xl font-light text-white mb-4 italic">1K+</span>
          <span className="font-sans text-[10px] uppercase tracking-[0.15em] text-beige/60">Happy Guests</span>
        </div>
        <div className="metric-item flex flex-col items-center">
          <span className="font-serif text-5xl md:text-6xl font-light text-white mb-4 flex items-center h-full text-balance leading-tight italic">Bengal</span>
          <span className="font-sans text-[10px] uppercase tracking-[0.15em] text-beige/60">Service Area</span>
        </div>
      </div>
    </section>
  );
}
