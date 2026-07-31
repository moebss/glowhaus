import { ArrowRight, Star } from 'lucide-react';
import heroImg from '../images/hero.png';

export default function Hero() {
  return (
    <section className="relative h-screen w-full flex items-center justify-center overflow-hidden bg-base">
      <div className="absolute inset-0 z-0">
        <img src={heroImg} alt="Studio" className="w-full h-full object-cover opacity-40 image-grading" referrerPolicy="no-referrer" />
        <div className="absolute inset-0 bg-gradient-to-b from-base/80 via-base/90 to-base"></div>
      </div>
      
      {/* Signature Element: CSS Light Leak Gradient */}
      <div className="signature-lightleak"></div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 flex flex-col items-center text-center mt-20">
        <p className="text-accent uppercase tracking-[0.3em] text-sm md:text-base mb-6 text-balance">Dein Premium Studio für Beauty & Fineline in Köln</p>
        
        <div className="flex items-center gap-2 mb-8 bg-black/40 border border-typo/10 px-4 py-2 rounded-full backdrop-blur-sm">
          <div className="flex gap-1">
            {[...Array(5)].map((_, i) => (
              <Star key={i} size={14} className="fill-accent text-accent" />
            ))}
          </div>
          <span className="text-typo text-sm font-medium tracking-wide font-features-[tnum]">4,9/5 · 128 Google Bewertungen</span>
        </div>

        {/* Fluid Typo & text-balance */}
        <h1 className="text-[length:var(--text-hero)] font-serif text-typo leading-tight mb-8 text-balance text-shadow-sm">
          GLOW<span className="italic text-typo-muted">HAUS</span> <br />
          <span className="italic text-accent text-3xl md:text-5xl block mt-4">Nails · Lashes · Fineline</span>
        </h1>
        
        <div className="flex flex-col sm:flex-row gap-6 mt-8">
          <a href="#booking" className="group flex items-center justify-center gap-3 bg-accent text-base hover:bg-accent-hover transition-colors duration-300 px-8 py-4 uppercase tracking-widest text-sm font-medium focus-visible:ring-2 focus-visible:ring-accent focus-visible:outline-none">
            Termin anfragen <ArrowRight size={18} className="group-hover:translate-x-2 transition-transform duration-500 ease-[var(--ease-signature)]" />
          </a>
          <a href="#portfolio" className="group flex items-center justify-center gap-3 border border-typo/20 text-typo px-8 py-4 uppercase tracking-widest text-sm hover:border-accent hover:text-accent transition-colors duration-300 focus-visible:ring-2 focus-visible:ring-accent focus-visible:outline-none">
            Portfolio ansehen
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-typo-muted animate-bounce">
        <div className="w-px h-10 bg-gradient-to-b from-transparent to-accent/50" />
        <span className="text-[10px] uppercase tracking-[0.3em]">Scroll</span>
      </div>
    </section>
  );
}
