import { useState, useEffect } from 'react';
import { Phone, Menu, X, Flame, ChevronRight, Wrench } from 'lucide-react';

interface NavbarProps {
  onOpenContact: () => void;
}

export function Navbar({ onOpenContact }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
      isScrolled ? 'bg-slate-950/90 backdrop-blur-md border-b border-slate-800/80 py-3 shadow-xl' : 'bg-gradient-to-b from-slate-950/90 to-transparent py-5'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        
        {/* Brand Logo */}
        <a href="#" className="flex items-center gap-3 group">
          <div className="w-10 h-10 rounded-lg bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-400 group-hover:bg-cyan-500 group-hover:text-slate-950 transition-all duration-300">
            <Flame className="w-5 h-5" />
          </div>
          <div className="flex flex-col">
            <span className="font-heading font-extrabold text-lg sm:text-xl tracking-tight text-white group-hover:text-cyan-400 transition-colors">
              HAUSCHILD <span className="text-cyan-400 font-light">GmbH</span>
            </span>
            <span className="text-[10px] tracking-widest text-slate-400 uppercase font-semibold">
              Heizung & Sanitär • Köln
            </span>
          </div>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          <a href="#services" className="text-sm font-medium text-slate-300 hover:text-cyan-400 transition-colors">Leistungen</a>
          <a href="#projects" className="text-sm font-medium text-slate-300 hover:text-cyan-400 transition-colors">Referenzen</a>
          <a href="#about" className="text-sm font-medium text-slate-300 hover:text-cyan-400 transition-colors">Über Uns</a>
          <a href="#testimonials" className="text-sm font-medium text-slate-300 hover:text-cyan-400 transition-colors">Bewertungen</a>
          <a href="#contact" className="text-sm font-medium text-slate-300 hover:text-cyan-400 transition-colors">Kontakt</a>
        </nav>

        {/* Action Button & Phone */}
        <div className="hidden lg:flex items-center gap-4">
          <a 
            href="tel:+492203921382" 
            className="flex items-center gap-2 text-xs font-semibold text-slate-300 hover:text-white px-3 py-2 rounded-lg bg-slate-900/80 border border-slate-800 hover:border-slate-700 transition-all"
          >
            <Phone className="w-3.5 h-3.5 text-cyan-400" />
            <span>02203 / 92 13 82</span>
          </a>
          <button
            onClick={onOpenContact}
            className="inline-flex items-center gap-2 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-slate-950 font-bold text-xs uppercase tracking-wider px-4 py-2.5 rounded-lg shadow-lg shadow-cyan-500/20 transition-all cursor-pointer"
          >
            <span>Anfrage Senden</span>
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>

        {/* Mobile Menu Toggle */}
        <button 
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 rounded-lg bg-slate-900 border border-slate-800 text-slate-300 hover:text-white"
          aria-label="Menü öffnen"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-slate-950/95 backdrop-blur-xl border-b border-slate-800 px-4 pt-4 pb-6 space-y-4">
          <nav className="flex flex-col space-y-3">
            <a href="#services" onClick={() => setMobileMenuOpen(false)} className="text-base font-medium text-slate-200 hover:text-cyan-400 py-2 border-b border-slate-800/50">Leistungen</a>
            <a href="#projects" onClick={() => setMobileMenuOpen(false)} className="text-base font-medium text-slate-200 hover:text-cyan-400 py-2 border-b border-slate-800/50">Referenzen</a>
            <a href="#about" onClick={() => setMobileMenuOpen(false)} className="text-base font-medium text-slate-200 hover:text-cyan-400 py-2 border-b border-slate-800/50">Über Uns</a>
            <a href="#testimonials" onClick={() => setMobileMenuOpen(false)} className="text-base font-medium text-slate-200 hover:text-cyan-400 py-2 border-b border-slate-800/50">Bewertungen</a>
            <a href="#contact" onClick={() => setMobileMenuOpen(false)} className="text-base font-medium text-slate-200 hover:text-cyan-400 py-2 border-b border-slate-800/50">Kontakt</a>
          </nav>
          <div className="pt-2 flex flex-col gap-3">
            <a 
              href="tel:+492203921382" 
              className="flex items-center justify-center gap-2 text-sm font-semibold text-slate-200 py-3 rounded-lg bg-slate-900 border border-slate-800"
            >
              <Phone className="w-4 h-4 text-cyan-400" />
              <span>Anrufen: 02203 / 92 13 82</span>
            </a>
            <button
              onClick={() => { setMobileMenuOpen(false); onOpenContact(); }}
              className="w-full py-3 bg-cyan-500 text-slate-950 font-bold text-sm uppercase tracking-wider rounded-lg text-center"
            >
              Kostenloses Angebot Anfragen
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
