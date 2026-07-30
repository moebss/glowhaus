import { useEffect, useRef, useState } from 'react';
import { motion } from 'motion/react';
import { Sparkles, PenTool } from 'lucide-react';
import aboutImg from '../images/about.png';

// Animated number counter hook
function useCounter(target: number, duration = 2000, inView: boolean) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!inView) return;
    let startTime: number | null = null;
    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      // Ease out cubic
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.round(eased * target));
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [inView, target, duration]);

  return count;
}

function StatCounter({ value, suffix, label }: { value: number; suffix: string; label: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);
  const count = useCounter(value, 1800, inView);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setInView(true); },
      { threshold: 0.5 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref} className="flex flex-col">
      <span className="font-serif text-4xl text-gold leading-none">
        {count}{suffix}
      </span>
      <span className="text-xs uppercase tracking-widest text-light/50 mt-2">{label}</span>
    </div>
  );
}

export default function About() {
  return (
    <section id="about" className="py-32 bg-darker relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="aspect-[3/4] overflow-hidden rounded-sm relative">
              <img
                src={aboutImg}
                alt="Studio Interior"
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
              />
              <div className="absolute inset-0 border border-white/10 m-4 pointer-events-none"></div>
            </div>

            {/* Stats strip — replaces the old static badge */}
            <div className="grid grid-cols-3 gap-4 mt-6 p-6 bg-anthracite border border-white/5">
              <StatCounter value={4} suffix="+" label="Jahre" />
              <StatCounter value={1000} suffix="+" label="Treatments" />
              <StatCounter value={128} suffix="" label="Bewertungen" />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-gold uppercase tracking-[0.2em] text-sm mb-4"
            >
              Dein Beauty & Tattoo Space
            </motion.h2>
            <motion.h3
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="font-serif text-4xl md:text-6xl text-light leading-tight mb-12"
            >
              Perfektion <span className="italic text-white/80">und Ästhetik.</span>
            </motion.h3>

            <p className="text-light/70 leading-relaxed mb-12 text-lg">
              GlowHaus ist deine Anlaufstelle für exklusive Beauty Treatments und Tattoos mitten in Köln. Wir verbinden höchste Beauty-Expertise mit einzigartiger Tattoo-Kunst. Egal ob Russian Volume Lashes, flawless Gel Nails oder delicate Fineline Tattoos – bei uns bekommst du alles aus einer Hand.
            </p>

            <div className="grid sm:grid-cols-2 gap-8">
              <div className="flex flex-col">
                <Sparkles size={32} className="text-gold mb-6" />
                <h4 className="text-light font-medium uppercase tracking-wider text-sm mb-3">Premium Beauty</h4>
                <p className="text-light/50 text-sm leading-relaxed">Hochwertigste Produkte und vegane Gele für langanhaltende und makellose Ergebnisse.</p>
              </div>
              <div className="flex flex-col">
                <PenTool size={32} className="text-gold mb-6" />
                <h4 className="text-light font-medium uppercase tracking-wider text-sm mb-3">Fineline Art</h4>
                <p className="text-light/50 text-sm leading-relaxed">Zarte, filigrane Tattoos. Jedes Design wird individuell und präzise für dich entworfen.</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
