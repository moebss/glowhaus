import { useState, useEffect, useRef } from 'react';

interface StatItemProps {
  end: number;
  suffix?: string;
  prefix?: string;
  label: string;
  description: string;
}

function StatItem({ end, suffix = '', prefix = '', label, description }: StatItemProps) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasAnimated) {
          setHasAnimated(true);
          let startTime: number | null = null;
          const duration = 2000;

          const animate = (currentTime: number) => {
            if (!startTime) startTime = currentTime;
            const progress = Math.min((currentTime - startTime) / duration, 1);
            const easeProgress = 1 - Math.pow(1 - progress, 3);
            setCount(Math.floor(easeProgress * end));

            if (progress < 1) {
              requestAnimationFrame(animate);
            } else {
              setCount(end);
            }
          };

          requestAnimationFrame(animate);
        }
      },
      { threshold: 0.2 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [end, hasAnimated]);

  return (
    <div ref={ref} className="bg-slate-900/60 border border-slate-800/80 p-6 rounded-2xl text-center relative overflow-hidden group hover:border-cyan-500/40 transition-colors">
      <div className="absolute top-0 right-0 w-24 h-24 bg-cyan-500/5 rounded-full blur-xl group-hover:bg-cyan-500/10 transition-colors" />
      <div className="font-heading font-extrabold text-4xl sm:text-5xl text-cyan-400 mb-2 font-features-[tnum]">
        {prefix}{count}{suffix}
      </div>
      <div className="text-base font-bold text-white mb-1">{label}</div>
      <div className="text-xs text-slate-400 font-medium">{description}</div>
    </div>
  );
}

export function StatsCounter() {
  return (
    <section className="py-12 bg-slate-950 border-y border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          <StatItem end={25} suffix="+" label="Jahre Meisterbetrieb" description="Gegründet im Jahr 2000" />
          <StatItem end={1200} suffix="+" label="Installierte Anlagen" description="Heizung & Sanitär in Köln" />
          <StatItem end={100} suffix="%" label="Kundenservice" description="Schnelle Reaktionszeiten" />
          <StatItem end={34} suffix=" Sterne" prefix="4.8 / 5 " label="Zufriedene Kunden" description="Höchste Bewertungen in Köln" />
        </div>
      </div>
    </section>
  );
}
