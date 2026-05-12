export function Footer() {
  return (
    <footer className="relative bg-[#0a0a0a] text-ivory px-6 md:px-12 py-24 md:py-40 overflow-hidden">
      {/* Decorative large text overlay */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[20vw] font-serif italic text-white/[0.02] whitespace-nowrap pointer-events-none select-none leading-none">
        Elite Events
      </div>

      <div className="relative max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-16 md:gap-8 lg:gap-12 items-start">
        
        <div className="col-span-1 md:col-span-12 lg:col-span-4 flex flex-col items-start gap-12">
          <div className="font-serif text-4xl md:text-5xl lg:text-6xl font-light text-white uppercase tracking-[0.15em] leading-[1.1]">
            Elite<br />Events
          </div>
          <p className="font-serif italic text-lg md:text-xl leading-relaxed max-w-sm text-beige/70">
            Crafting cinematic celebrations across West Bengal with refined aesthetics and flawless execution.
          </p>
        </div>

        <div className="col-span-1 md:col-span-6 lg:col-span-3 lg:col-start-6 flex flex-col gap-10 lg:pt-4">
          <h4 className="font-sans text-[9px] tracking-[0.3em] uppercase text-gold/80">Inquiries</h4>
          <div className="space-y-8 font-sans text-[10px] md:text-[11px] tracking-[0.15em] uppercase leading-loose text-beige/60">
            <div className="flex flex-col items-start gap-4">
              <a href="tel:08073223294" className="group relative inline-flex pb-1 hover:text-white transition-colors duration-500">
                +91 80732 23294
                <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-gold transition-all duration-500 ease-[cubic-bezier(0.19,1,0.22,1)] group-hover:w-full"></span>
              </a>
              <a href="mailto:helloeliteevents@gmail.com" className="group relative inline-flex pb-1 hover:text-white transition-colors duration-500 lowercase tracking-[0.2em]">
                helloeliteevents@gmail.com
                <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-gold transition-all duration-500 ease-[cubic-bezier(0.19,1,0.22,1)] group-hover:w-full"></span>
              </a>
            </div>
            <p className="text-balance text-white/40 leading-loose">
              30th Street, Bengal Ambuja<br/>
              City Centre, Durgapur<br/>
              West Bengal 713216
            </p>
          </div>
        </div>

        <div className="col-span-1 md:col-span-6 lg:col-span-3 lg:col-start-10 flex flex-col gap-10 lg:pt-4">
          <h4 className="font-sans text-[9px] tracking-[0.3em] uppercase text-gold/80">Destinations</h4>
          <div className="grid grid-cols-2 gap-y-6 gap-x-12 font-sans text-[10px] md:text-[11px] tracking-[0.15em] uppercase text-beige/60">
            {['Durgapur', 'Asansol', 'Bardhaman', 'Raniganj', 'Bankura', 'Bolpur', 'Panagarh', 'Kolkata'].map((city) => (
              <span key={city} className="group relative inline-flex pb-1 hover:text-white transition-colors duration-500 cursor-pointer w-fit">
                {city}
                <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-gold transition-all duration-500 ease-[cubic-bezier(0.19,1,0.22,1)] group-hover:w-full"></span>
              </span>
            ))}
          </div>
        </div>

      </div>

      <div className="relative max-w-7xl mx-auto mt-32 md:mt-48 pt-12 border-t border-white/[0.05] flex flex-col md:flex-row items-center justify-between gap-8 font-sans text-[9px] tracking-[0.25em] uppercase text-beige/30">
        <p>&copy; {new Date().getFullYear()} Elite Events. All Rights Reserved.</p>
        <div className="flex gap-12">
          <a href="#" className="hover:text-gold transition-colors duration-500">Instagram</a>
          <a href="#" className="hover:text-gold transition-colors duration-500">Facebook</a>
        </div>
      </div>
    </footer>
  );
}
