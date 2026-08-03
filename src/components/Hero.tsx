import { Star, ShieldCheck, ArrowRight, Flame, Droplets, Wrench, PhoneCall } from 'lucide-react';
import heroImg from '../images/hero_heating_sanitary.jpg';

interface HeroProps {
  onOpenContact: () => void;
}

export function Hero({ onOpenContact }: HeroProps) {
  return (
    <section className="relative pt-28 lg:pt-36 pb-16 lg:pb-24 overflow-hidden bg-slate-950">
      
      {/* Background Aura */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-cyan-500/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-blue-600/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Text & CTAs */}
          <div className="lg:col-span-7 space-y-6 text-left">
            
            {/* Google Reviews Badge */}
            <div className="inline-flex flex-wrap items-center gap-3 bg-slate-900/90 border border-slate-800 rounded-full px-4 py-2 text-xs">
              <div className="flex items-center gap-1 text-amber-400">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-3.5 h-3.5 fill-amber-400" />
                ))}
              </div>
              <span className="font-semibold text-slate-200">4.8 / 5.0 Sterne</span>
              <span className="text-slate-500">•</span>
              <span className="text-slate-400 font-medium">Top-Bewertungen in Köln & Umgebung</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.1] text-balance">
              Moderne Heizung.<br />
              <span className="bg-gradient-to-r from-cyan-400 via-sky-400 to-blue-500 bg-clip-text text-transparent">
                Traumbad & Haustechnik.
              </span>
            </h1>

            {/* Subline */}
            <p className="text-base sm:text-lg text-slate-300 max-w-2xl leading-relaxed text-pretty">
              Michael Hauschild GmbH ist Ihr Meisterbetrieb für moderne Wärmepumpen, effiziente Heizsysteme, Badsanierungen und zuverlässigen Kundendienst in Köln-Wahnheide & Rhein-Erft-Kreis. Seit über 25 Jahren.
            </p>

            {/* Action Buttons */}
            <div className="pt-2 flex flex-col sm:flex-row gap-4">
              <button
                onClick={onOpenContact}
                className="inline-flex items-center justify-center gap-3 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-slate-950 font-bold text-sm uppercase tracking-wider px-7 py-4 rounded-xl shadow-xl shadow-cyan-500/25 hover:shadow-cyan-500/40 hover:-translate-y-0.5 transition-all cursor-pointer group"
              >
                <span>Kostenloses Angebot anfordern</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>

              <a
                href="tel:+492203921382"
                className="inline-flex items-center justify-center gap-3 bg-slate-900 hover:bg-slate-800 text-white border border-slate-800 hover:border-slate-700 font-semibold text-sm px-6 py-4 rounded-xl transition-all"
              >
                <PhoneCall className="w-4 h-4 text-cyan-400" />
                <span>02203 / 92 13 82</span>
              </a>
            </div>

            {/* Bullet Points */}
            <div className="pt-6 border-t border-slate-800/80 grid grid-cols-3 gap-4">
              <div className="flex items-center gap-2 text-xs sm:text-sm text-slate-300 font-medium">
                <ShieldCheck className="w-4 h-4 text-cyan-400 shrink-0" />
                <span>Meisterbetrieb</span>
              </div>
              <div className="flex items-center gap-2 text-xs sm:text-sm text-slate-300 font-medium">
                <Flame className="w-4 h-4 text-cyan-400 shrink-0" />
                <span>Wärmepumpen</span>
              </div>
              <div className="flex items-center gap-2 text-xs sm:text-sm text-slate-300 font-medium">
                <Droplets className="w-4 h-4 text-cyan-400 shrink-0" />
                <span>Badsanierung</span>
              </div>
            </div>

          </div>

          {/* Right Column: Visual Frame */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none rounded-2xl overflow-hidden border border-slate-800 shadow-2xl group">
              <img
                src={heroImg}
                alt="Michael Hauschild GmbH Badsanierung und Heizungsbau"
                className="w-full h-[420px] sm:h-[500px] object-cover object-center group-hover:scale-105 transition-transform duration-700"
                width={800}
                height={1000}
              />
              
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent opacity-80" />

              {/* Floating Badge */}
              <div className="absolute bottom-6 left-6 right-6 bg-slate-900/90 backdrop-blur-md p-4 rounded-xl border border-slate-800 flex items-center justify-between">
                <div>
                  <p className="text-xs text-slate-400 font-medium">Firmensitz & Standort</p>
                  <p className="text-sm font-bold text-white">Magazinstr. 41 A, 51147 Köln</p>
                </div>
                <div className="w-9 h-9 rounded-lg bg-cyan-500/20 text-cyan-400 border border-cyan-500/30 flex items-center justify-center font-bold text-xs">
                  KÖLN
                </div>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
