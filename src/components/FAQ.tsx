import { useState } from 'react';

import { motion, AnimatePresence } from 'motion/react';
import { ChevronDown } from 'lucide-react';

const FAQ_ITEMS = [
  { question: "Muss ich für ein Tattoo einen Termin vereinbaren?", answer: "Ja, wir arbeiten bei Tattoos ausschließlich nach Terminvereinbarung, um genug Zeit für Beratung und Design zu haben." },
  { question: "Wie pflege ich meine Lashes am besten?", answer: "In den ersten 48 Stunden Wasser und Dampf meiden. Danach täglich mit unserem speziellen Lash Shampoo reinigen und bürsten." },
  { question: "Welche Produkte verwendet ihr für die Nägel?", answer: "Wir arbeiten ausschließlich mit Premium-Marken und veganen/tierversuchsfreien Gelen für höchste Qualität und Haltbarkeit." },
  { question: "Wie buche ich einen Beauty-Termin?", answer: "Du kannst ganz einfach über unser Online-Buchungstool, per WhatsApp oder über unser Kontaktformular einen Termin anfragen." }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-32 bg-anthracite relative">
      <div className="max-w-3xl mx-auto px-6 md:px-12">
        <div className="text-center mb-16">
          <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-gold uppercase tracking-[0.2em] text-sm mb-4">FAQ</motion.h2>
          <motion.h3 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }} className="font-serif text-4xl md:text-6xl text-light leading-tight">Häufige <span className="italic text-white/80">Fragen</span></motion.h3>
        </div>
        
        <div className="space-y-2">
          {FAQ_ITEMS.map((faq, idx) => (
            <div key={idx} className="border-b border-white/10">
              <button onClick={() => toggle(idx)} className="w-full flex items-center justify-between py-6 text-left focus:outline-none group">
                <span className="font-serif text-xl text-light group-hover:text-gold transition-colors">{faq.question}</span>
                <ChevronDown className={`text-gold transition-transform duration-300 ${openIndex === idx ? 'rotate-180' : ''}`} />
              </button>
              <AnimatePresence>
                {openIndex === idx && (
                  <motion.div 
                    initial={{ height: 0, opacity: 0 }} 
                    animate={{ height: 'auto', opacity: 1 }} 
                    exit={{ height: 0, opacity: 0 }} 
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <p className="text-light/70 pb-6 leading-relaxed">{faq.answer}</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
