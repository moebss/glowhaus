import { Star, Quote, CheckCircle } from 'lucide-react';

export function Testimonials() {
  const reviews = [
    {
      name: "Familie Schneider",
      role: "Eigenheimbesitzer",
      location: "Köln-Wahnheide",
      rating: 5,
      text: "Herr Hauschild hat bei uns eine Luft-Wasser-Wärmepumpe installiert. Von der Beratung über die Beantragung der Fördergelder bis zur sauberen Montage ein absolut perfekter Service. Unser Heizenergieverbrauch ist drastisch gesunken!"
    },
    {
      name: "Dr. Thomas Berg",
      role: "Badsanierung",
      location: "Köln-Porz",
      rating: 5,
      text: "Unsere Komplettbadsanierung verlief absolut reibungslos. Sehr pünktliche Handwerker, sauberste Baustellenführung und das Ergebnis sieht aus wie aus einem Architektur-Magazin."
    },
    {
      name: "Hausverwaltung Weber",
      role: "Gewerbekunde",
      location: "Köln",
      rating: 5,
      text: "Seit vielen Jahren lassen wir die Heizungsunterhaltung unserer Mehrfamilienhäuser durch die Hauschild GmbH durchführen. Verlässlich, fair kalkuliert und bei Notfällen sofort vor Ort."
    }
  ];

  return (
    <section id="testimonials" className="py-20 lg:py-28 bg-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-xs font-bold uppercase tracking-wider">
            Erfahrungen unserer Kunden
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Kundenstimmen & Rezensionen
          </h2>
          <div className="flex items-center justify-center gap-2 pt-2">
            <div className="flex text-amber-400">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-amber-400" />
              ))}
            </div>
            <span className="text-lg font-bold text-white">4.8 von 5.0</span>
            <span className="text-slate-500">•</span>
            <span className="text-sm text-slate-400 font-medium">Top-Bewertungen in Köln</span>
          </div>
        </div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((rev, idx) => (
            <div 
              key={idx}
              className="bg-slate-900 border border-slate-800 rounded-2xl p-8 relative flex flex-col justify-between hover:border-slate-700 transition-colors shadow-lg"
            >
              <Quote className="w-10 h-10 text-slate-800 absolute top-6 right-6" />

              <div className="space-y-4 relative z-10">
                <div className="flex text-amber-400 gap-1">
                  {[...Array(rev.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400" />
                  ))}
                </div>

                <p className="text-sm text-slate-300 leading-relaxed italic">
                  "{rev.text}"
                </p>
              </div>

              <div className="pt-6 border-t border-slate-800/80 mt-6 flex items-center justify-between">
                <div>
                  <h4 className="text-sm font-bold text-white">{rev.name}</h4>
                  <p className="text-xs text-slate-400">{rev.role} • {rev.location}</p>
                </div>
                <CheckCircle className="w-5 h-5 text-cyan-400" />
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
