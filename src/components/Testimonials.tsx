import { useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { cn } from '../lib/utils';

const testimonials = [
  { quote: "I contacted Elite Events for my sister’s wedding, and I’m extremely impressed with their services. From the decoration to the food, everything was perfect.", author: "Bijaya Paul" },
  { quote: "Elite Events made my daughter’s birthday unforgettable. From décor to entertainment, everything was handled with care and creativity.", author: "Sohini" },
  { quote: "Our company conference needed precision. Elite Events delivered flawless décor, AV and vendor coordination.", author: "Rahul" },
  { quote: "Elite Events turned our wedding into an unforgettable celebration.", author: "Dr Supriyo & Dr Shreyosi" }
];

export function Testimonials() {
  const [active, setActive] = useState(0);
  const [direction, setDirection] = useState(1);
  const isInteracting = useRef(false);

  const slide = (newActive: number) => {
    setDirection(newActive > active ? 1 : -1);
    setActive(newActive);
  };

  useEffect(() => {
    const timer = setInterval(() => {
      if (!isInteracting.current) {
        setDirection(1);
        setActive((prev) => (prev + 1) % testimonials.length);
      }
    }, 5000);
    return () => clearInterval(timer);
  }, [active]);

  const variants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 100 : -100,
      opacity: 0,
      filter: 'blur(4px)'
    }),
    center: {
      z: 1,
      x: 0,
      opacity: 1,
      filter: 'blur(0px)'
    },
    exit: (direction: number) => ({
      z: 0,
      x: direction < 0 ? 100 : -100,
      opacity: 0,
      filter: 'blur(4px)'
    })
  };

  const handleDragEnd = (_e: any, { offset }: any) => {
    const swipe = offset.x;
    if (swipe < -50) {
      slide((active + 1) % testimonials.length);
    } else if (swipe > 50) {
      slide((active - 1 + testimonials.length) % testimonials.length);
    }
  };

  return (
    <section className="py-24 md:py-40 px-8 bg-charcoal/50 text-ivory flex items-center justify-center overflow-hidden">
      <div 
        className="max-w-4xl mx-auto w-full flex flex-col items-center cursor-grab active:cursor-grabbing"
        onMouseEnter={() => isInteracting.current = true}
        onMouseLeave={() => isInteracting.current = false}
        onTouchStart={() => isInteracting.current = true}
        onTouchEnd={() => isInteracting.current = false}
      >
        
        <div className="mb-12 z-10">
          <div className="h-[1px] w-12 bg-gold/50"></div>
        </div>

        <div className="h-[250px] md:h-[300px] w-full relative flex items-center justify-center">
          <AnimatePresence custom={direction}>
            <motion.div
              key={active}
              custom={direction}
              variants={variants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ x: { type: "spring", stiffness: 300, damping: 30 }, opacity: { duration: 0.4 }, filter: { duration: 0.4 } }}
              drag="x"
              dragConstraints={{ left: 0, right: 0 }}
              dragElastic={1}
              onDragEnd={handleDragEnd}
              className="absolute w-full px-4 text-center"
            >
              <p className="font-serif text-3xl md:text-5xl font-light leading-relaxed text-balance text-white italic mb-12">
                "{testimonials[active].quote}"
              </p>
              <p className="font-sans tracking-widest uppercase text-[9px] text-gold">
                — {testimonials[active].author}
              </p>
            </motion.div>
          </AnimatePresence>
        </div>

        <div className="mt-8 flex gap-6 z-10">
          {testimonials.map((_, i) => (
            <button 
              key={i}
              onClick={() => slide(i)}
              className={cn(
                "w-1.5 h-1.5 rounded-full transition-all duration-500",
                active === i ? "bg-gold scale-125" : "bg-white/20 hover:bg-white/50"
              )}
              aria-label={`Go to testimonial ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
