import { useState } from 'react';
import { Flame, ArrowUp } from 'lucide-react';
import { Impressum } from './Impressum';
import { Datenschutz } from './Datenschutz';

interface FooterProps {
  onOpenContact: () => void;
}

export function Footer({ onOpenContact }: FooterProps) {
  const [showImpressum, setShowImpressum] = useState(false);
  const [showDatenschutz, setShowDatenschutz] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      <footer className="bg-slate-950 border-t border-slate-800 text-slate-400 pt-16 pb-24 lg:pb-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-slate-800/80">
            
            {/* Col 1: Brand */}
            <div className="lg:col-span-2 space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-400">
                  <Flame className="w-5 h-5" />
                </div>
                <span className="font-heading font-extrabold text-xl tracking-tight text-white">
                  HAUSCHILD <span className="text-cyan-400 font-light">GmbH</span>
                </span>
              </div>
              <p className="text-xs text-slate-400 leading-relaxed max-w-sm">
                Michael Hauschild GmbH – Ihr Meisterbetrieb für Heizungsbau, Badsanierung, Wärmepumpen und Klimatechnik in Köln-Wahnheide und Großraum Köln/Bonn.
              </p>
              <div className="text-xs text-slate-400 font-mono pt-2">
                GF: Michael Hauschild • Magazinstr. 41 A, 51147 Köln
              </div>
            </div>

            {/* Col 2: Navigation */}
            <div>
              <h4 className="text-xs font-bold text-white uppercase tracking-wider mb-4">Navigation</h4>
              <ul className="space-y-2 text-xs">
                <li><a href="#services" className="hover:text-cyan-400 transition-colors">Leistungen</a></li>
                <li><a href="#projects" className="hover:text-cyan-400 transition-colors">Referenzen</a></li>
                <li><a href="#about" className="hover:text-cyan-400 transition-colors">Über Uns</a></li>
                <li><a href="#testimonials" className="hover:text-cyan-400 transition-colors">Bewertungen</a></li>
                <li><a href="#contact" className="hover:text-cyan-400 transition-colors">Kontakt</a></li>
              </ul>
            </div>

            {/* Col 3: Services */}
            <div>
              <h4 className="text-xs font-bold text-white uppercase tracking-wider mb-4">Fachgebiete</h4>
              <ul className="space-y-2 text-xs">
                <li><span className="text-slate-300">Wärmepumpen & Heizung</span></li>
                <li><span className="text-slate-300">Komplettbadsanierung</span></li>
                <li><span className="text-slate-300">Sanitärinstallationen</span></li>
                <li><span className="text-slate-300">Klimatechnik & Lüftung</span></li>
                <li><span className="text-slate-300">Wartung & Kundendienst</span></li>
              </ul>
            </div>

            {/* Col 4: Regional Area */}
            <div>
              <h4 className="text-xs font-bold text-white uppercase tracking-wider mb-4">Einsatzgebiet</h4>
              <p className="text-xs leading-relaxed text-slate-400 mb-4">
                Köln-Wahnheide, Porz, Lindenthal, Rodenkirchen, Hürth, Frechen, Troisdorf, Niederkassel & Bergheim.
              </p>
              <button
                onClick={onOpenContact}
                className="w-full py-2 bg-slate-900 border border-slate-800 hover:border-cyan-500/40 text-cyan-400 text-xs font-semibold rounded-lg transition-colors cursor-pointer"
              >
                Angebot Anfragen
              </button>
            </div>

          </div>

          {/* Bottom Row */}
          <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs">
            <p className="text-slate-500">
              © {new Date().getFullYear()} Michael Hauschild GmbH. Alle Rechte vorbehalten.
            </p>

            <div className="flex items-center gap-6">
              <button
                onClick={() => setShowImpressum(true)}
                className="text-slate-400 hover:text-cyan-400 transition-colors cursor-pointer"
              >
                Impressum
              </button>
              <button
                onClick={() => setShowDatenschutz(true)}
                className="text-slate-400 hover:text-cyan-400 transition-colors cursor-pointer"
              >
                Datenschutz
              </button>
              <button
                onClick={scrollToTop}
                className="w-8 h-8 rounded-lg bg-slate-900 border border-slate-800 hover:border-cyan-500/50 flex items-center justify-center text-slate-300 hover:text-cyan-400 transition-colors"
                aria-label="Nach oben scrollen"
              >
                <ArrowUp className="w-4 h-4" />
              </button>
            </div>
          </div>

        </div>
      </footer>

      {/* Modals */}
      <Impressum isOpen={showImpressum} onClose={() => setShowImpressum(false)} />
      <Datenschutz isOpen={showDatenschutz} onClose={() => setShowDatenschutz(false)} />
    </>
  );
}
