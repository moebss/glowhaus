
import { motion } from 'motion/react';

export default function Services() {
  const services = [
    {
      id: "nails",
      name: "Gel Nails & Nail Art",
      description: "Makellose Maniküre, Shellac oder aufwendige Nail Art Designs. Wir arbeiten mit hochwertigen Produkten für langanhaltende Perfektion.",
      price_from: "55€",
      duration: "60 Min",
      highlight: true,
      includes: ["Nagelhautpflege", "Formfeilen", "Premium Gel/Shellac", "Handmassage"]
    },
    {
      id: "lashes",
      name: "Lash Extensions",
      description: "Von natürlichem Classic Look bis hin zu voluminösen Russian Lips. Präzise Handarbeit für deinen perfekten Augenaufschlag.",
      price_from: "85€",
      duration: "90 Min",
      highlight: false,
      includes: ["Beratung zur Augenform", "Premium Silk Lashes", "Haltbarkeit 3-4 Wochen", "Inkl. Pflegebürstchen"]
    },
    {
      id: "tattoo",
      name: "Fineline Tattoos",
      description: "Zarte, filigrane Tattoos, die unter die Haut gehen. Jedes Design wird individuell für dich entworfen – minimalistisch und elegant.",
      price_from: "120€",
      duration: "60+ Min",
      highlight: true,
      includes: ["Custom Design Entwurf", "Highest Hygiene Standards", "Vegan Ink", "Nachsorge & Folie"]
    },
    {
      id: "brows",
      name: "Brow Lifting & Styling",
      description: "Perfekt geformte und geliftete Augenbrauen für einen markanten, aber natürlichen Look.",
      price_from: "45€",
      duration: "45 Min",
      highlight: false,
      includes: ["Brow Mapping", "Waxing/Zupfen", "Keratin Pflege", "Färben (optional)"]
    }
  ];

  return (
    <section id="services" className="py-32 bg-anthracite relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
          <h2 className="text-gold uppercase tracking-[0.2em] text-sm mb-4">Leistungen</h2>
          <h3 className="font-serif text-4xl md:text-6xl text-light leading-tight">Was wir <span className="italic text-white/80">anbieten</span></h3>
        </motion.div>
        
        <div className="grid md:grid-cols-2 gap-8">
          {services.map((svc, idx) => (
            <motion.div key={svc.id} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: idx * 0.2 }} className="p-8 md:p-12 border border-white/10 hover:border-gold bg-darker rounded-sm relative transition-colors duration-300 group">
              <h4 className="text-2xl font-serif text-light mb-4">{svc.name}</h4>
              <p className="text-light/70 mb-8">{svc.description}</p>
              
              <div className="mb-8 space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="text-light/50">Ab:</span>
                  <span className="text-gold">{svc.price_from}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-light/50">Dauer:</span>
                  <span className="text-light">{svc.duration}</span>
                </div>
              </div>
              
              <ul className="space-y-3">
                {svc.includes.map((inc, i) => (
                  <li key={i} className="flex items-center gap-3 text-sm text-light/70">
                    <span className="w-1.5 h-1.5 bg-gold rounded-full"></span>
                    {inc}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
