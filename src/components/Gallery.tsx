import { useEffect, useRef } from 'react';
import gsap from 'gsap';

export function Gallery() {
  const containerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const images = gsap.utils.toArray('.gallery-img');
      images.forEach((img: any) => {
        gsap.to(img, {
          yPercent: 20,
          ease: 'none',
          scrollTrigger: {
            trigger: img.parentElement,
            start: 'top bottom',
            end: 'bottom top',
            scrub: true,
          }
        });
      });
    }, containerRef);
    return () => ctx.revert();
  }, []);

  return (
    <section id="gallery" ref={containerRef} className="py-24 md:py-48 px-8 bg-black relative">
      <div className="max-w-[1400px] mx-auto">
        <div className="text-center mb-24 md:mb-40">
          <div className="font-sans text-[10px] uppercase tracking-[0.15em] text-gold mb-6">Editorial Gallery</div>
          <h2 className="font-serif text-6xl md:text-8xl font-light text-white mb-6 italic tracking-tight">The Aesthetic</h2>
          <p className="text-beige/60 max-w-lg mx-auto font-light text-sm md:text-base leading-relaxed">
            Glimpses of emotionally rich, unforgettable celebrations. Each frame a testament to our commitment to luxury and detail.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 lg:gap-20 items-center">
          {/* Image 1: Large Left */}
          <div className="md:col-span-7 aspect-[4/5] md:aspect-[3/4] overflow-hidden group">
            <div 
              className="gallery-img w-full h-[120%] bg-cover bg-center -mt-[10%] scale-100 group-hover:scale-105 transition-transform duration-[1.5s] ease-[cubic-bezier(0.19,1,0.22,1)]"
              style={{ backgroundImage: 'url(/img/samp1.jpg)' }}
            />
          </div>

          {/* Spacer for right column content */}
          <div className="md:col-span-5 flex flex-col gap-8 lg:gap-20 md:mt-32">
            {/* Image 2: Smaller Right */}
            <div className="aspect-square md:aspect-[4/5] overflow-hidden group w-[85%] md:w-[90%] ml-auto">
              <div 
                className="gallery-img w-full h-[120%] bg-cover bg-center -mt-[10%] scale-100 group-hover:scale-105 transition-transform duration-[1.5s] ease-[cubic-bezier(0.19,1,0.22,1)]"
                style={{ backgroundImage: 'url(/img/samp2.jpg)' }}
              />
            </div>

            {/* Image 3: Wide Right */}
            <div className="aspect-[4/3] md:aspect-square overflow-hidden group w-[95%]">
              <div 
                className="gallery-img w-full h-[120%] bg-cover bg-center -mt-[10%] scale-100 group-hover:scale-105 transition-transform duration-[1.5s] ease-[cubic-bezier(0.19,1,0.22,1)]"
                style={{ backgroundImage: 'url(/img/samp4.jpg)' }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
