export function CTABanner() {
  return (
    <section className="py-24 md:py-32 px-8 bg-black relative overflow-hidden flex items-center justify-center text-center">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1519225421980-715cb0215aed?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center opacity-20 sepia-[0.3] blur-sm"></div>
      <div className="absolute inset-0 bg-black/60"></div>
      
      <div className="relative z-10 max-w-3xl mx-auto flex flex-col items-center">
        <h2 className="font-serif text-5xl md:text-7xl font-light text-white mb-8 text-balance italic">
          Ready to begin planning your extraordinary celebration?
        </h2>
        <button className="group relative px-10 py-4 bg-transparent overflow-hidden border border-gold/40 text-gold hover:text-black transition-colors duration-500 mt-8">
          <div className="absolute inset-0 bg-gold translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out z-0"></div>
          <span className="relative z-10 font-sans text-[10px] tracking-[0.15em] uppercase">Inquire Now</span>
        </button>
      </div>
    </section>
  );
}
