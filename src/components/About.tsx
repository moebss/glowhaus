import { CheckCircle2, Award, ShieldCheck, Flame, Users } from 'lucide-react';
import aboutTeamImg from '../images/about_plumber_team.jpg';

interface AboutProps {
  onOpenContact: () => void;
}

export function About({ onOpenContact }: AboutProps) {
  const advantages = [
    "Meisterbetrieb für Heizung & Sanitär – gegründet im Jahr 2000",
    "Geschäftsführung durch Michael Hauschild – persönliche Beratung",
    "Spezialisiert auf zukunftsfähige Wärmepumpen & Badsanierungen",
    "Feste Ansprechpartner & transparente Festpreise ohne versteckte Kosten",
    "Regionale Verwurzelung in Köln-Wahnheide, Porz & Erftkreis",
    "Saubere Baustellenführung & zuverlässiger Kundendienst"
  ];

  return (
    <section id="about" className="py-20 lg:py-28 bg-slate-900/40 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-12 items-center">
          
          {/* Left Column: Image Stack */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-2xl overflow-hidden border border-slate-800 shadow-2xl">
              <img
                src={aboutTeamImg}
                alt="Michael Hauschild GmbH Meisterbetrieb Heizung Sanitär"
                className="w-full h-[450px] object-cover object-center"
                width={800}
                height={900}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />
            </div>

            {/* Experience Card */}
            <div className="absolute -bottom-6 -right-4 sm:right-6 bg-slate-900 border border-slate-800 p-5 rounded-xl shadow-2xl flex items-center gap-4 max-w-xs">
              <div className="w-12 h-12 rounded-lg bg-cyan-500/20 text-cyan-400 flex items-center justify-center font-bold text-xl shrink-0">
                25+
              </div>
              <div>
                <p className="text-xs text-slate-400 font-medium">Jahre Erfahrung</p>
                <p className="text-sm font-bold text-white">Ihr verlässlicher Partner für Haustechnik</p>
              </div>
            </div>
          </div>

          {/* Right Column: Content */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-xs font-bold uppercase tracking-wider">
              Über Michael Hauschild GmbH
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight text-balance">
              Qualität, Innovation &<br />
              <span className="text-cyan-400">Verlässlichkeit seit 2000.</span>
            </h2>

            <p className="text-base text-slate-300 leading-relaxed text-pretty">
              Seit über 25 Jahren steht die <strong className="text-white">Michael Hauschild GmbH</strong> mit Sitz in der Magazinstr. 41 A in Köln-Wahnheide für erstklassige Handwerksleistungen in den Bereichen Heizungsbau, Badsanierung und Haustechnik.
            </p>

            <p className="text-sm text-slate-400 leading-relaxed">
              Unter der Führung von Michael Hauschild vereinen wir tradierte Handwerkskunst mit modernster Umwelttechnologie. Ob Umstieg auf eine zukunftsfähige Wärmepumpe, barrierefreie Traumbäder oder schneller Reparaturdienst – wir sind persönlich für Sie da.
            </p>

            {/* Advantages Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              {advantages.map((item, idx) => (
                <div key={idx} className="flex items-start gap-2 text-xs sm:text-sm text-slate-200">
                  <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                  <span>{item}</span>
                </div>
              ))}
            </div>

            {/* Management Tag */}
            <div className="pt-6 border-t border-slate-800 flex items-center justify-between">
              <div>
                <p className="text-xs text-slate-400">Geschäftsführung</p>
                <p className="text-base font-bold text-white">Michael Hauschild</p>
              </div>
              <button
                onClick={onOpenContact}
                className="bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold text-xs uppercase tracking-wider px-5 py-3 rounded-lg shadow-md transition-all cursor-pointer"
              >
                Persönliche Beratung buchen
              </button>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
