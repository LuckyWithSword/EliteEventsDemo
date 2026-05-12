import { useEffect, useRef } from 'react';
import gsap from 'gsap';

export function About() {
  const containerRef = useRef<HTMLElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Image Parallax
      gsap.to(imageRef.current, {
        yPercent: 15,
        ease: 'none',
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top bottom',
          end: 'bottom top',
          scrub: true,
        },
      });

      // Text Reveal
      gsap.fromTo(
        textRef.current?.querySelectorAll('p'),
        { y: 40, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          stagger: 0.2,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: textRef.current,
            start: 'top 80%',
          },
        }
      );
      
      gsap.fromTo(
        '.about-label',
        { opacity: 0, x: -20 },
        { 
          opacity: 1, x: 0, duration: 1, ease: 'power2.out',
          scrollTrigger: { trigger: textRef.current, start: 'top 80%' }
        }
      );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="about" ref={containerRef} className="py-24 md:py-32 px-8 bg-black text-ivory relative">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-8 items-stretch">
        
        {/* Left: Image */}
        <div className="lg:col-span-7 relative h-[60vh] lg:h-auto overflow-hidden group">
          <div 
            ref={imageRef}
            className="absolute inset-[-10%] w-[120%] h-[120%] bg-cover bg-center opacity-60"
            style={{ backgroundImage: 'url(/img/samp3.jpg)' }}
          />
        </div>

        {/* Right: Content */}
        <div className="lg:col-span-5 flex flex-col justify-between bg-charcoal/30 border-l border-gold/20 p-8 lg:p-12" ref={textRef}>
          <div className="space-y-8">
            <div className="about-label">
              <h3 className="font-sans text-[10px] uppercase tracking-[0.15em] text-gold mb-6">The Story</h3>
            </div>
            
            <div className="font-serif text-xl md:text-2xl leading-relaxed text-white space-y-6 opacity-90">
              <p>
                Elite Events is a luxury wedding and event management company based in Durgapur, specialising in timeless celebrations designed with elegance, precision, and emotional depth.
              </p>
              <p className="text-beige/80 text-lg md:text-xl">
                From intimate engagements to grand destination weddings, we curate every detail — décor, hospitality, logistics, lighting, entertainment, and experiences — with a refined aesthetic approach.
              </p>
              <p className="text-beige/60 text-base md:text-lg">
                Over the last 7+ years, Elite Events has become a trusted name across West Bengal for sophisticated weddings and flawlessly executed events.
              </p>
            </div>
          </div>
          
          <div className="mt-16 grid grid-cols-2 gap-4 text-[10px] uppercase tracking-[0.15em]">
            <div className="border-t border-gold/20 pt-4">
              <div className="text-gold text-2xl font-serif mb-1 capitalize tracking-normal">500+</div>
              <div className="opacity-60 text-beige">Events Managed</div>
            </div>
            <div className="border-t border-gold/20 pt-4">
              <div className="text-gold text-2xl font-serif mb-1 capitalize tracking-normal">7+ Yrs</div>
              <div className="opacity-60 text-beige">Experience</div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
