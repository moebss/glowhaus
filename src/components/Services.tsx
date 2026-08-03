import { Flame, Droplets, Wrench, Wind, ShieldAlert, ArrowRight, CheckCircle2, Zap } from 'lucide-react';

interface ServicesProps {
  onOpenContact: () => void;
}

export function Services({ onOpenContact }: ServicesProps) {
  const servicesList = [
    {
      icon: Flame,
      title: "Heizungsbau & Wärmepumpen",
      description: "Installation und Modernisierung nachhaltiger Heizsysteme: Luft- & Erdwärmepumpen, Gas-Brennwerttechnik, Hybrid-Heizungen.",
      features: ["Staatliche BAFA/KfW-Förderung", "Hydraulischer Abgleich", "Markengeräte (Viessmann, Vaillant)"]
    },
    {
      icon: Droplets,
      title: "Badsanierung & Komplettbäder",
      description: "Von der 3D-Badplanung bis zur schlüsselfertigen Fliesen- und Sanitärmontage. Barrierefreie Bäder und moderne Walk-in Duschen.",
      features: ["Alles aus einer Hand", "Staubarme Sanierung", "Barrierefreie Planung"]
    },
    {
      icon: Wrench,
      title: "Sanitär- & Wasserinstallation",
      description: "Fachgerechte Verlegung von Wasser- und Abwasserleitungen, Trinkwasserhygiene sowie Hebeanlagen für Wohn- und Gewerbeobjekte.",
      features: ["Trinkwasserschutz nach DIN", "Rohrsanierung & Dichtheitsprüfung", "Entkalkungsanlagen"]
    },
    {
      icon: Wind,
      title: "Klimatechnik & Belüftung",
      description: "Moderne Wohnraumlüftung mit Wärmerückgewinnung und Split-Klimaanlagen für ein gesundes Raumklima im Sommer wie Winter.",
      features: ["Allergikerfreundliche Filter", "Flüsterleise Systeme", "Geringer Energieverbrauch"]
    },
    {
      icon: ShieldAlert,
      title: "Wartung & Notdienst",
      description: "Zuverlässiger Kundendienst für schnellen Soforteinsatz bei Heizungsausfall, Rohrbruch oder verstopften Abflüssen in Köln.",
      features: ["Schnelle Anfahrt in Köln", "Transparente Stundensätze", "Regelmäßige Anlagenwartung"]
    },
    {
      icon: Zap,
      title: "Förderberatung & Energieeffizienz",
      description: "Wir unterstützen Sie bei der Beantragung von staatlichen Fördergeldern für Ihre neue Wärmepumpe oder Badsanierung.",
      features: ["Bis zu 70% staatliche Förderung", "Berechnung der Einsparpotenziale", "Kompletter Antrags-Support"]
    }
  ];

  return (
    <section id="services" className="py-20 lg:py-28 bg-slate-900/40 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-xs font-bold uppercase tracking-wider">
            Unsere Fachgebiete
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight text-balance">
            Haustechnik & Meisterhandwerk aus einer Hand
          </h2>
          <p className="text-base sm:text-lg text-slate-300 text-pretty">
            Egal ob neue Wärmepumpe, exklusives Traumbad oder schnelle Reparatur – Michael Hauschild GmbH sichert höchste Qualität und Verlässlichkeit.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {servicesList.map((service, index) => {
            const Icon = service.icon;
            return (
              <div 
                key={index}
                className="bg-slate-900 border border-slate-800 rounded-2xl p-8 hover:border-cyan-500/50 transition-all duration-300 flex flex-col justify-between group shadow-lg hover:shadow-2xl hover:shadow-cyan-500/5"
              >
                <div>
                  <div className="w-14 h-14 rounded-xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-400 group-hover:bg-cyan-500 group-hover:text-slate-950 transition-all duration-300 mb-6">
                    <Icon className="w-7 h-7" />
                  </div>
                  
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors">
                    {service.title}
                  </h3>
                  
                  <p className="text-sm text-slate-400 leading-relaxed mb-6">
                    {service.description}
                  </p>

                  <ul className="space-y-2 border-t border-slate-800/80 pt-4 mb-6">
                    {service.features.map((feat, fIdx) => (
                      <li key={fIdx} className="flex items-center gap-2 text-xs text-slate-300 font-medium">
                        <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <button
                  onClick={onOpenContact}
                  className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-cyan-400 group-hover:text-cyan-300 pt-2 border-t border-slate-800/50 cursor-pointer"
                >
                  <span>Jetzt anfragen</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
