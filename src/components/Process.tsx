
import { motion } from 'motion/react';

const PROCESS_STEPS = [
  { step: "01", title: "Termin & Beratung", description: "Buche deinen Termin bequem online. Vor Ort besprechen wir deine Wünsche und analysieren deinen Typ." },
  { step: "02", title: "Custom Design", description: "Egal ob Brow Mapping, Wimpern-Style oder Fineline-Tattoo – wir kreieren ein Design, das perfekt zu dir passt." },
  { step: "03", title: "Das Treatment", description: "Lehn dich zurück und genieße dein Treatment in ruhiger Atmosphäre. Höchste Hygiene ist dabei unser Standard." },
  { step: "04", title: "Glow & Care", description: "Du verlässt uns mit deinem perfekten Look. Wir geben dir alle wichtigen Pflege-Tipps mit auf den Weg." }
];

export default function Process() {
  return (
    <section className="py-32 bg-anthracite relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-20">
          <h2 className="text-gold uppercase tracking-[0.2em] text-sm mb-4">Ablauf</h2>
          <h3 className="font-serif text-4xl md:text-6xl text-light leading-tight">Dein Weg zum <span className="italic text-white/80">Perfekten Look</span></h3>
        </motion.div>
        
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-12">
          {PROCESS_STEPS.map((proc, idx) => (
            <motion.div key={proc.step} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: idx * 0.2 }} className="relative">
              <div className="text-6xl font-serif text-white/5 mb-6">{proc.step}</div>
              <h4 className="text-xl font-serif text-gold mb-4">{proc.title}</h4>
              <p className="text-light/70 text-sm leading-relaxed">{proc.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
