import { useState } from 'react';
import { Phone, Star, ShieldCheck, ArrowRight, CheckCircle2, Building2, HelpCircle, ChevronDown, Send } from 'lucide-react';

export default function App() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const [submitted, setSubmitted] = useState(false);

  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans selection:bg-orange-600 selection:text-white">
      
      <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-slate-200 py-4 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-slate-950 text-white flex items-center justify-center font-extrabold text-lg">
              S
            </div>
            <div>
              <span className="font-extrabold text-lg sm:text-xl text-slate-950 tracking-tight block">
                Schmitz Guido Hairline
              </span>
              <span className="text-[10px] text-slate-500 font-bold uppercase tracking-wider block">
                Meisterbetrieb • Exklusiver Friseur- & Hairline Salon
              </span>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <a href="tel:0220386575" className="hidden sm:flex items-center gap-2 text-xs font-bold text-slate-800 bg-slate-100 hover:bg-slate-200 px-3.5 py-2 rounded-xl border border-slate-200 transition-all"><Phone className="w-3.5 h-3.5 text-slate-900" /><span>0220386575</span></a>
            <button
              onClick={scrollToContact}
              className="bg-orange-600 hover:bg-orange-700 text-white font-bold text-xs uppercase tracking-wider px-4 py-2.5 rounded-xl shadow-md shadow-orange-600/20 transition-all cursor-pointer"
            >
              Kostenlose Anfrage in 2 Min.
            </button>
          </div>
        </div>
      </header>

      <section className="relative min-h-[80vh] flex flex-col lg:flex-row bg-slate-50 border-b border-slate-200 overflow-hidden">
        <div className="w-full lg:w-1/2 flex flex-col justify-center px-6 sm:px-12 lg:px-16 py-16 lg:py-24 space-y-6">
          
          <div className="inline-flex items-center gap-2 bg-white border border-slate-300 shadow-sm rounded-full px-4 py-1.5 text-xs font-bold text-slate-800 w-fit">
            <div className="flex text-slate-800 gap-0.5">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-3.5 h-3.5 fill-slate-800" />
              ))}
            </div>
            <span>4.9 / 5.0 Sterne • Regionaler Meisterbetrieb</span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-950 leading-[1.1] text-balance">
            Ihr Premium Friseursalon für typgerechte Haarschnitte, Balayage & Styling in Porz
          </h1>

          <p className="text-base sm:text-lg text-slate-700 leading-relaxed text-pretty">
            Ihr verlässlicher Partner für Exklusiver Friseur- & Hairline Salon. Wir garantieren höchste Ausführungsqualität, meisterhafte Handwerkskunst und feste Terminabsprachen.
          </p>

          <div className="pt-2 flex flex-col sm:flex-row gap-4">
            <button
              onClick={scrollToContact}
              className="inline-flex items-center justify-center gap-3 bg-orange-600 hover:bg-orange-700 text-white font-bold text-sm uppercase tracking-wider px-7 py-4 rounded-xl shadow-xl shadow-orange-600/30 hover:-translate-y-0.5 transition-all cursor-pointer group"
            >
              <span>Kostenlose Anfrage in 2 Min.</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>

            <a href="tel:0220386575" className="inline-flex items-center justify-center gap-3 bg-slate-950 hover:bg-slate-800 text-white font-bold text-sm px-6 py-4 rounded-xl shadow-sm transition-all"><Phone className="w-4 h-4 text-slate-300" /><span>Direkt anrufen: 0220386575</span></a>
          </div>

          <div className="pt-6 border-t border-slate-200 grid grid-cols-3 gap-3 text-xs sm:text-sm font-bold text-slate-900">
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-slate-800 shrink-0" />
              <span>Meisterqualität</span>
            </div>
            <div className="flex items-center gap-2">
              <Building2 className="w-4 h-4 text-slate-800 shrink-0" />
              <span>Fixpreisgarantie</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-slate-800 shrink-0" />
              <span>Termintreue</span>
            </div>
          </div>
        </div>

        <div className="w-full lg:w-1/2 relative min-h-[380px] lg:min-h-full bg-slate-900 flex items-center justify-center p-8">
          <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-950 to-slate-900 opacity-95" />
          <div className="relative z-10 text-center space-y-4 max-w-md p-8 border border-slate-800 rounded-3xl bg-slate-900/80 backdrop-blur-md shadow-2xl">
            <div className="w-16 h-16 rounded-2xl bg-slate-800 text-white flex items-center justify-center font-extrabold text-2xl mx-auto shadow-inner">
              S
            </div>
            <h3 className="text-2xl font-extrabold text-white">Schmitz Guido Hairline</h3>
            <p className="text-sm text-slate-300 leading-relaxed">
              Erstklassige Handwerksleistungen für private & gewerbliche Auftraggeber in der Region.
            </p>
            <div className="pt-2 flex items-center justify-center gap-2 text-xs font-bold text-slate-400">
              <span>Ansprechpartner: Guido Schmitz</span>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-slate-950 text-white border-t border-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center max-w-3xl mx-auto space-y-3 mb-16">
            <p className="text-xs font-semibold text-slate-400 uppercase tracking-widest">Leistungsübersicht</p>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white">Unsere Fachleistungen im Überblick</h2>
            <p className="text-sm text-slate-300">Ausgeführt nach höchsten handwerklichen Qualitätsstandards.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: 'Fachgerechte Ausführung', desc: 'Präzise Handwerksarbeit mit zertifizierten Qualitäts-Baustoffen.' },
              { title: 'Projektplanung & Beratung', desc: 'Persönliche Beratung vor Ort und transparente Angebotserstellung.' },
              { title: 'Wartung & Instandhaltung', desc: 'Zuverlässiger Service, Reparaturen & nachhaltige Objektbetreuung.' }
            ].map((s, idx) => (
              <div key={idx} className="bg-slate-900 border border-slate-800 rounded-2xl p-8 shadow-xl flex flex-col justify-between">
                <div className="space-y-4">
                  <div className="w-12 h-12 rounded-xl bg-slate-800 text-white flex items-center justify-center font-bold">
                    0{idx + 1}
                  </div>
                  <h3 className="text-xl font-bold text-white">{s.title}</h3>
                  <p className="text-sm text-slate-400 leading-relaxed">{s.desc}</p>
                </div>
                <button onClick={scrollToContact} className="inline-flex items-center gap-2 text-xs font-bold text-slate-300 hover:text-white pt-6 border-t border-slate-800/80 cursor-pointer">
                  <span>Details & Preise anfragen →</span>
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-slate-50 border-t border-slate-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="text-center space-y-3 mb-16">
            <p className="text-xs font-semibold text-slate-500 uppercase tracking-widest">Häufige Fragen</p>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-950">Transparenz für Ihr Vorhaben</h2>
          </div>

          <div className="space-y-4">
            {[
              { q: 'Wie schnell erhalte ich ein Angebot?', a: 'Wir rufen Sie innerhalb von 24 Stunden zurück und erstellen nach Erstberatung ein verbindliches Angebot.' },
              { q: 'Gibt es eine Festpreiszusage?', a: 'Ja, wir arbeiten mit transparenten Angeboten und garantieren Ihnen volle Kostenkontrolle.' },
              { q: 'In welchem Umkreis sind Sie tätig?', a: 'Wir sind im gesamten regionalen Umkreis sowie der umliegenden Region im Einsatz.' }
            ].map((faq, idx) => (
              <div key={idx} className="bg-white border border-slate-200 rounded-2xl overflow-hidden shadow-sm">
                <button
                  onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                  className="w-full p-6 text-left flex items-center justify-between font-bold text-slate-950 text-base sm:text-lg cursor-pointer"
                >
                  <span className="flex items-center gap-3">
                    <HelpCircle className="w-5 h-5 text-slate-700 shrink-0" />
                    <span>{faq.q}</span>
                  </span>
                  <ChevronDown className={`w-5 h-5 text-slate-500 transition-transform ${openFaq === idx ? 'rotate-180' : ''}`} />
                </button>
                {openFaq === idx && (
                  <div className="px-6 pb-6 text-sm text-slate-600 border-t border-slate-100 pt-4">
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="py-20 bg-slate-950 text-white border-t border-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 grid grid-cols-1 lg:grid-cols-12 gap-12">
          <div className="lg:col-span-5 space-y-6">
            <p className="text-xs font-semibold text-slate-400 uppercase tracking-widest">Projektkontakt</p>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white">Besprechen Sie Ihr Vorhaben mit uns.</h2>
            <p className="text-sm text-slate-300">Senden Sie uns Ihre Anfrage oder rufen Sie uns direkt an.</p>
            <div className="bg-slate-900 border border-slate-800 p-4 rounded-xl flex items-center gap-4"><Phone className="w-6 h-6 text-white shrink-0" /><div><h4 className="text-xs text-slate-400 font-semibold uppercase">Telefonische Bauleitung</h4><a href="tel:0220386575" className="text-base font-extrabold text-white hover:underline">0220386575</a></div></div>
          </div>

          <div className="lg:col-span-7 bg-slate-900 border border-slate-800 rounded-2xl p-8 shadow-2xl">
            {submitted ? (
              <div className="py-12 text-center space-y-3">
                <h3 className="text-xl font-bold text-white">Vielen Dank für Ihre Anfrage!</h3>
                <p className="text-sm text-slate-400">Wir melden uns innerhalb von 24 Stunden bei Ihnen.</p>
              </div>
            ) : (
              <form onSubmit={(e) => { e.preventDefault(); setSubmitted(true); }} className="space-y-4">
                <h3 className="text-xl font-bold text-white mb-2">Unverbindliche Anfrage stellen</h3>
                <input required placeholder="Vollständiger Name *" className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-800 text-white text-sm" />
                <input required type="tel" placeholder="Telefonnummer *" className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-800 text-white text-sm" />
                <textarea rows={3} placeholder="Beschreiben Sie kurz Ihr Anliegen..." className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-800 text-white text-sm resize-none" />
                <button type="submit" className="w-full py-4 bg-orange-600 hover:bg-orange-700 text-white font-bold text-sm uppercase tracking-wider rounded-xl shadow-lg shadow-orange-600/30 flex items-center justify-center gap-2 cursor-pointer">
                  <Send className="w-4 h-4" />
                  <span>Kostenlose Anfrage absenden</span>
                </button>
              </form>
            )}
          </div>
        </div>
      </section>

      <footer className="py-8 bg-slate-950 text-slate-400 text-xs border-t border-slate-900 text-center">
        <p>© {new Date().getFullYear()} Schmitz Guido Hairline. Alle Rechte vorbehalten. Meisterbetrieb.</p>
      </footer>

    </div>
  );
}
