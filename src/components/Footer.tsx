import { useState } from 'react';
import { Instagram, Facebook, MapPin, Phone, Mail } from 'lucide-react';
import Impressum from './Impressum.tsx';
import Datenschutz from './Datenschutz.tsx';

const OPENING_HOURS = [
  { days: "Montag - Freitag", hours: "10:00 - 19:00" },
  { days: "Samstag", hours: "10:00 - 16:00" },
  { days: "Sonntag", hours: "Geschlossen", dimmed: true }
];

export default function Footer() {
  const [isImpressumOpen, setIsImpressumOpen] = useState(false);
  const [isDatenschutzOpen, setIsDatenschutzOpen] = useState(false);

  return (
    <>
      <footer className="bg-darker pt-32 pb-8 border-t border-light/5">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">
            <div className="lg:col-span-1">
              <a href="#" className="inline-block mb-6">
                <span className="font-serif text-3xl tracking-wider text-light">
                  GLOW<span className="text-gold">HAUS</span>
                </span>
              </a>
              <p className="text-light/50 text-sm leading-relaxed mb-8">GlowHaus - Dein exklusives Beauty & Tattoo Studio in Köln. Premium Lashes, Nails & Fineline.</p>
              <div className="flex gap-4">
                <a href="https://www.instagram.com/gorillas_ink/" target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full border border-light/10 flex items-center justify-center text-light/50 hover:text-gold hover:border-gold transition-all duration-300">
                  <Instagram size={18} />
                </a>
                <a href="#" target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full border border-light/10 flex items-center justify-center text-light/50 hover:text-gold hover:border-gold transition-all duration-300">
                  <Facebook size={18} />
                </a>
              </div>
            </div>
            
            <div>
              <h4 className="font-serif text-xl text-light mb-6">Kontakt</h4>
              <ul className="space-y-4">
                <li className="flex items-start gap-3 text-light/50 text-sm">
                  <MapPin size={18} className="text-gold shrink-0 mt-0.5" />
                  <span>Aachener Str. 123<br />50674 Köln<br />Deutschland</span>
                </li>
                <li className="flex items-center gap-3 text-light/50 text-sm">
                  <Phone size={18} className="text-gold shrink-0" />
                  <a href="tel:+4917612345678" className="hover:text-gold transition-colors">+49 (0) 176 123 45678</a>
                </li>
                <li className="flex items-center gap-3 text-light/50 text-sm">
                  <Mail size={18} className="text-gold shrink-0" />
                  <a href="mailto:hello@glowhaus-cgn.de" className="hover:text-gold transition-colors">hello@glowhaus-cgn.de</a>
                </li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-serif text-xl text-light mb-6">Öffnungszeiten</h4>
              <ul className="space-y-4 text-sm">
                {OPENING_HOURS.map((hours, idx) => (
                  <li key={idx} className={`flex justify-between border-b border-light/5 pb-2 ${hours.dimmed ? 'text-light/40' : 'text-light/70'}`}>
                    <span>{hours.days}</span>
                    <span>{hours.hours}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            <div>
              <h4 className="font-serif text-xl text-light mb-6">Rechtliches</h4>
              <ul className="space-y-4 text-sm flex flex-col items-start">
                <button onClick={() => setIsImpressumOpen(true)} className="text-light/50 hover:text-gold transition-colors text-left">Impressum</button>
                <button onClick={() => setIsDatenschutzOpen(true)} className="text-light/50 hover:text-gold transition-colors text-left">Datenschutz</button>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-light/5 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-light/40 uppercase tracking-widest">
            <p>&copy; {new Date().getFullYear()} GlowHaus Köln. Alle Rechte vorbehalten.</p>
            <p>Made with Love by GlowHaus</p>
          </div>
        </div>
      </footer>
      <Impressum isOpen={isImpressumOpen} onClose={() => setIsImpressumOpen(false)} />
      <Datenschutz isOpen={isDatenschutzOpen} onClose={() => setIsDatenschutzOpen(false)} />
    </>
  );
}
