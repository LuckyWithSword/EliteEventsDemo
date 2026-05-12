import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { motion, AnimatePresence } from 'motion/react';
import { cn } from '../lib/utils';

export function Navigation() {
  const navRef = useRef<HTMLDivElement>(null);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (isOpen) {
      gsap.to(navRef.current, { backgroundColor: 'transparent', backdropFilter: 'blur(0px)', duration: 0.3 });
    } else {
      const currentScroll = window.scrollY;
      if (currentScroll > 50) {
        gsap.to(navRef.current, { backgroundColor: 'rgba(11, 11, 11, 0.9)', backdropFilter: 'blur(10px)', duration: 0.3 });
      }
    }
    
    let lastScroll = 0;
    const handleScroll = () => {
      if (isOpen) return;
      const currentScroll = window.scrollY;
      if (currentScroll > 50) {
        if (currentScroll > lastScroll) {
          gsap.to(navRef.current, { yPercent: -100, duration: 0.5, ease: 'power2.out' });
        } else {
          gsap.to(navRef.current, { yPercent: 0, duration: 0.5, ease: 'power2.out', backgroundColor: 'rgba(11, 11, 11, 0.9)', backdropFilter: 'blur(10px)' });
        }
      } else {
        gsap.to(navRef.current, { yPercent: 0, duration: 0.5, ease: 'power2.out', backgroundColor: 'transparent', backdropFilter: 'blur(0px)' });
      }
      lastScroll = currentScroll;
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isOpen]);

  return (
    <>
      <nav ref={navRef} className="fixed top-0 left-0 right-0 z-[60] flex items-center justify-between px-4 md:px-8 py-4 md:py-6 transition-all border-b border-transparent">
        <a href="#" className="flex flex-col relative z-[60]">
          <span className="font-serif text-lg md:text-2xl font-light tracking-widest text-white uppercase">Elite Events</span>
          <span className="text-[7px] md:text-[10px] uppercase tracking-[0.15em] text-beige">West Bengal &middot; India</span>
        </a>
        <div className="hidden md:flex gap-8 items-center font-sans text-[11px] tracking-[0.15em] uppercase text-white/70">
          <a href="#about" className="hover:text-gold transition-colors">Planning</a>
          <a href="#services" className="hover:text-gold transition-colors">Journal</a>
          <a href="#gallery" className="hover:text-gold transition-colors">Atelier</a>
        </div>
        <button 
          onClick={() => setIsOpen(!isOpen)}
          className="group relative flex flex-col items-end justify-center w-8 h-8 outline-none z-[60] cursor-pointer"
          aria-label="Toggle Menu"
        >
          <span className={cn(
            "absolute block h-[1px] bg-gold transition-all duration-500 ease-[cubic-bezier(0.19,1,0.22,1)] rounded-full",
            isOpen ? "w-6 rotate-45 top-1/2 -translate-y-1/2 bg-white" : "w-6 -translate-y-1 top-1/2 group-hover:bg-white"
          )}></span>
          <span className={cn(
            "absolute block h-[1px] bg-gold transition-all duration-500 ease-[cubic-bezier(0.19,1,0.22,1)] rounded-full",
            isOpen ? "w-6 -rotate-45 top-1/2 -translate-y-1/2 bg-white" : "w-4 translate-y-1 top-1/2 group-hover:w-6 group-hover:bg-white"
          )}></span>
        </button>
      </nav>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: '-100%' }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: '-100%' }}
            transition={{ duration: 0.8, ease: [0.19, 1.0, 0.22, 1.0] }}
            className="fixed inset-0 bg-black/95 backdrop-blur-xl z-[55] flex items-center justify-center"
          >
            <div className="flex flex-col items-center gap-8 md:gap-12">
              {[
                { label: 'Planning', href: '#about' },
                { label: 'Journal', href: '#services' },
                { label: 'Atelier', href: '#gallery' },
              ].map((item, i) => (
                <motion.a
                  key={item.label}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 20 }}
                  transition={{ duration: 0.5, delay: i * 0.1 + 0.3 }}
                  className="font-serif text-4xl md:text-6xl lg:text-7xl font-light text-white hover:text-gold transition-colors italic"
                >
                  {item.label}
                </motion.a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
