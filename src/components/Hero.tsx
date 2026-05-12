import { useEffect, useRef } from 'react';
import gsap from 'gsap';

export function Hero() {
  const container = useRef<HTMLDivElement>(null);
  const title1Ref = useRef<HTMLHeadingElement>(null);
  const title2Ref = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline();

      // Image scale in
      tl.fromTo(
        '.hero-bg',
        { scale: 1.1, opacity: 0 },
        { scale: 1, opacity: 0.6, duration: 2.5, ease: 'power2.out' }
      );

      // Text stagger reveal
      tl.fromTo(
        [title1Ref.current, title2Ref.current, subtitleRef.current, ctaRef.current],
        { y: 40, opacity: 0 },
        { y: 0, opacity: 1, duration: 1.2, stagger: 0.2, ease: 'power3.out' },
        '-=1.5'
      );

      // Subtle parallax on scroll
      gsap.to('.hero-bg', {
        yPercent: 30,
        ease: 'none',
        scrollTrigger: {
          trigger: container.current,
          start: 'top top',
          end: 'bottom top',
          scrub: true,
        },
      });
    }, container);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={container} className="relative h-screen w-full flex items-end justify-center overflow-hidden pb-16 md:pb-24 px-8">
      <div 
        className="hero-bg absolute inset-0 z-0 bg-cover bg-center bg-no-repeat bg-charcoal"
        style={{ backgroundImage: 'url(/img/hero_1.png)' }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/40 to-black/80"></div>
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto flex flex-col items-start md:items-center text-left md:text-center">
        <h2 ref={title1Ref} className="font-sans text-[9px] md:text-[11px] tracking-[0.2em] md:tracking-[0.15em] uppercase text-gold mb-4 md:mb-6">
          Elite Events
        </h2>
        <h1 ref={title2Ref} className="font-serif text-5xl sm:text-6xl md:text-8xl lg:text-[8rem] text-balance leading-[1.1] md:leading-none tracking-tight mb-6 md:mb-8 font-light text-white">
          Luxury Wedding &<br />Event Management
        </h1>
        <p ref={subtitleRef} className="text-beige/80 max-w-sm md:max-w-md md:mx-auto text-sm md:text-base md:text-lg font-light mb-10 md:mb-12">
          Crafting cinematic celebrations across West Bengal.
        </p>
        
        <div ref={ctaRef} className="flex flex-col sm:flex-row gap-4 md:gap-10 items-start md:items-center w-full sm:w-auto">
          <button className="w-full sm:w-auto group relative px-8 md:px-10 py-4 bg-charcoal/40 backdrop-blur-md overflow-hidden border border-gold/20 text-beige hover:border-gold/60 transition-all duration-700 ease-[cubic-bezier(0.19,1,0.22,1)] rounded-none outline-none">
            <div className="absolute inset-0 bg-gold/5 -translate-x-full group-hover:translate-x-0 transition-transform duration-700 ease-[cubic-bezier(0.19,1,0.22,1)] z-0"></div>
            <span className="relative z-10 font-sans text-[9px] md:text-[10px] tracking-[0.2em] uppercase flex items-center justify-center gap-4">
              Plan Your Event
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" className="text-gold transform group-hover:translate-x-1 transition-transform duration-500"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
            </span>
          </button>
        </div>
      </div>
    </section>
  );
}
