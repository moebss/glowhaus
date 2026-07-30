import { ArrowRight, Star } from 'lucide-react';
import heroImg from '../images/hero.png';

export default function Hero() {
  return (
    <section className="relative h-screen w-full flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img src={heroImg} alt="Studio" className="w-full h-full object-cover opacity-40" referrerPolicy="no-referrer" />
        <div className="absolute inset-0 bg-gradient-to-b from-darker/60 via-darker/80 to-darker"></div>
      </div>
      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 flex flex-col items-center text-center mt-20">
        <p className="text-gold uppercase tracking-[0.3em] text-sm md:text-base mb-6">Dein Premium Studio für Beauty & Fineline in Köln</p>
        
        <div className="flex items-center gap-2 mb-8 bg-black/40 border border-white/10 px-4 py-2 rounded-full backdrop-blur-sm">
          <div className="flex gap-1">
            {[...Array(5)].map((_, i) => (
              <Star key={i} size={14} className="fill-gold text-gold" />
            ))}
          </div>
          <span className="text-light/90 text-sm font-medium tracking-wide">4,9/5 · 128 Google Bewertungen</span>
        </div>

        <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif text-light leading-tight mb-8">
          GLOW<span className="italic text-white/80">HAUS</span> <br />
          <span className="italic text-gold text-3xl md:text-5xl block mt-4">Nails · Lashes · Fineline</span>
        </h1>
        <div className="flex flex-col sm:flex-row gap-6 mt-8">
          <a href="#booking" className="group flex items-center justify-center gap-3 bg-gold text-darker hover:bg-gold-hover transition-all duration-300 px-8 py-4 uppercase tracking-widest text-sm font-medium">
            Termin anfragen <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </a>
          <a href="#portfolio" className="flex items-center justify-center gap-3 border border-white/20 text-light px-8 py-4 uppercase tracking-widest text-sm hover:border-gold hover:text-gold transition-all duration-300">
            Portfolio ansehen
          </a>
        </div>
      </div>
    </section>
  );
}
