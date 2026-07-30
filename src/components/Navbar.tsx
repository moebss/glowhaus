import { useState, useEffect } from 'react';

import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

const NAV_LINKS = [
  { name: "Studio", href: "#about" },
  { name: "Leistungen", href: "#services" },
  { name: "Galerie", href: "#portfolio" },
  { name: "Termine", href: "#booking" }
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-darker/90 backdrop-blur-md py-4 shadow-lg' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
        <a href="#" className="inline-block">
          <span className="font-serif text-2xl tracking-wider text-light">
            GLOW<span className="text-gold">HAUS</span>
          </span>
        </a>
        <div className="hidden md:flex items-center gap-8">
          <ul className="flex items-center gap-8">
            {NAV_LINKS.map(link => (
              <li key={link.name}>
                <a href={link.href} className="text-sm uppercase tracking-widest text-light/70 hover:text-gold transition-colors">{link.name}</a>
              </li>
            ))}
          </ul>
          <a href="#booking" className="border border-gold text-gold hover:bg-gold hover:text-darker transition-all duration-300 px-6 py-2 text-sm uppercase tracking-widest">
            Termin anfragen
          </a>
        </div>
        <button className="md:hidden text-light hover:text-gold" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full w-full bg-darker/95 backdrop-blur-xl border-t border-light/5 py-6 px-6 md:hidden flex flex-col gap-6"
          >
            <ul className="flex flex-col gap-4">
              {NAV_LINKS.map(link => (
                <li key={link.name}>
                  <a href={link.href} onClick={() => setMenuOpen(false)} className="text-lg uppercase tracking-widest text-light/80 hover:text-gold block">{link.name}</a>
                </li>
              ))}
            </ul>
            <a href="#booking" onClick={() => setMenuOpen(false)} className="border border-gold text-gold hover:bg-gold hover:text-darker transition-all duration-300 px-6 py-3 text-center text-sm uppercase tracking-widest">
              Termin anfragen
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
