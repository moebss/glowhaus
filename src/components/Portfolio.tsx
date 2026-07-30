import { useState } from 'react';
import p1 from '../images/portfolio1.png';
import p2 from '../images/portfolio2.png';
import p3 from '../images/portfolio3.png';
import p4 from '../images/portfolio4.png';
import p5 from '../images/portfolio5.png';
import p6 from '../images/portfolio6.png';

import { motion, AnimatePresence } from 'motion/react';
import { X } from 'lucide-react';

const GALLERY_STYLES = ["Alle", "Nails", "Lashes", "Fineline"];

const GALLERY_ITEMS = [
  { id: 1, category: "Nails",    image: p1, title: "Black & Gold",   subtitle: "Gel Nails & Nail Art" },
  { id: 2, category: "Lashes",   image: p2, title: "Russian Volume", subtitle: "Lash Extensions" },
  { id: 3, category: "Fineline", image: p3, title: "Floral Design",  subtitle: "Fineline Tattoos" },
  { id: 4, category: "Nails",    image: p4, title: "Nude Chrome",    subtitle: "Gel Nails" },
  { id: 5, category: "Lashes",   image: p5, title: "Classic Look",   subtitle: "Lash Extensions" },
  { id: 6, category: "Fineline", image: p6, title: "Minimalist",     subtitle: "Fineline Tattoos" },
];

export default function Portfolio() {
  const [activeFilter, setActiveFilter] = useState("Alle");
  const [selectedItem, setSelectedItem] = useState<typeof GALLERY_ITEMS[0] | null>(null);

  const filteredItems = activeFilter === "Alle"
    ? GALLERY_ITEMS
    : GALLERY_ITEMS.filter(item => item.category === activeFilter);

  return (
    <section id="portfolio" className="py-32 bg-darker relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12">

        {/* Header */}
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            className="text-gold uppercase tracking-[0.2em] text-sm mb-4"
          >
            Portfolio
          </motion.h2>
          <motion.h3
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }}
            className="font-serif text-4xl md:text-6xl text-light leading-tight mb-12"
          >
            Unsere <span className="italic text-light/80">Arbeiten</span>
          </motion.h3>

          {/* Filter tabs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.4 }}
            className="flex flex-wrap justify-center gap-4 md:gap-8"
          >
            {GALLERY_STYLES.map(style => (
              <button
                key={style}
                onClick={() => setActiveFilter(style)}
                className={`uppercase tracking-widest text-xs md:text-sm pb-2 border-b-2 transition-all duration-300 cursor-pointer ${
                  activeFilter === style ? 'border-gold text-gold' : 'border-transparent text-light/50 hover:text-light'
                }`}
              >
                {style}
              </button>
            ))}
          </motion.div>
        </div>

        {/* Grid — Hover-Reveal pattern */}
        <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-0.5">
          <AnimatePresence>
            {filteredItems.map((item, idx) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.4, delay: idx * 0.06 }}
                className="group relative aspect-square overflow-hidden cursor-pointer"
                onClick={() => setSelectedItem(item)}
              >
                {/* Image — greyscale by default, colour on hover */}
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
                />

                {/* Full-cover dark reveal overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-darker/90 via-darker/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-400" />

                {/* Text reveal — slides up on hover */}
                <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                  <p className="text-gold uppercase tracking-[0.25em] text-xs mb-1">{item.subtitle}</p>
                  <p className="text-light font-serif text-xl">{item.title}</p>
                </div>

                {/* Top-right category chip */}
                <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span className="bg-darker/80 backdrop-blur-sm text-light/70 text-[10px] uppercase tracking-widest px-3 py-1">
                    {item.category}
                  </span>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedItem && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-darker/96 backdrop-blur-sm flex items-center justify-center p-4 md:p-16"
            onClick={() => setSelectedItem(null)}
          >
            <button
              aria-label="Schließen"
              className="absolute top-8 right-8 text-light/40 hover:text-gold transition-colors cursor-pointer"
            >
              <X size={32} />
            </button>

            <div className="flex flex-col md:flex-row items-center gap-8 max-w-5xl w-full" onClick={e => e.stopPropagation()}>
              <motion.img
                initial={{ scale: 0.92, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.4 }}
                src={selectedItem.image}
                alt={selectedItem.title}
                className="max-h-[75vh] max-w-full object-contain rounded-sm shadow-2xl"
              />
              <div className="text-center md:text-left shrink-0">
                <p className="text-gold uppercase tracking-[0.25em] text-xs mb-3">{selectedItem.subtitle}</p>
                <h4 className="font-serif text-3xl text-light mb-2">{selectedItem.title}</h4>
                <p className="text-light/40 text-sm uppercase tracking-widest">{selectedItem.category}</p>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
