import { useState } from 'react';
import { Phone, Mail, MapPin, Send, CheckCircle2, ShieldCheck } from 'lucide-react';

export function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    serviceType: 'Heizungsbau / Wärmepumpe',
    location: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="contact" className="py-20 lg:py-28 bg-slate-900/60 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Contact Info & Map */}
          <div className="lg:col-span-5 space-y-8">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-xs font-bold uppercase tracking-wider mb-4">
                Ihr direkter Kontakt
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
                Sprechen Sie mit unserem Meisterteam.
              </h2>
              <p className="text-sm text-slate-300 mt-2">
                Egal ob geplante Heizungsmodernisierung, Badsanierung oder dringende Reparatur – wir stehen Ihnen in Köln und Umgebung zur Seite.
              </p>
            </div>

            <div className="space-y-4">
              <div className="bg-slate-900 border border-slate-800 p-4 rounded-xl flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-cyan-500/10 text-cyan-400 flex items-center justify-center shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-xs text-slate-400 font-semibold uppercase">Firmensitz & Adresse</h4>
                  <p className="text-sm font-bold text-white">Michael Hauschild GmbH</p>
                  <p className="text-xs text-slate-300">Magazinstr. 41 A, 51147 Köln (Wahnheide)</p>
                </div>
              </div>

              <div className="bg-slate-900 border border-slate-800 p-4 rounded-xl flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-cyan-500/10 text-cyan-400 flex items-center justify-center shrink-0">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-xs text-slate-400 font-semibold uppercase">Telefon & Kundendienst</h4>
                  <a href="tel:+492203921382" className="text-sm font-bold text-cyan-400 hover:underline">
                    02203 / 92 13 82
                  </a>
                  <p className="text-xs text-slate-400">Mo – Fr: 07:30 – 17:00 Uhr</p>
                </div>
              </div>

              <div className="bg-slate-900 border border-slate-800 p-4 rounded-xl flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-cyan-500/10 text-cyan-400 flex items-center justify-center shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-xs text-slate-400 font-semibold uppercase">E-Mail Kontakt</h4>
                  <a href="mailto:michael-hauschild@t-online.de" className="text-sm font-bold text-slate-200 hover:text-cyan-400">
                    michael-hauschild@t-online.de
                  </a>
                  <p className="text-xs text-slate-400">Antwort i.d.R. innerhalb von 24h</p>
                </div>
              </div>
            </div>

            {/* Google Maps Embed */}
            <div className="rounded-xl overflow-hidden border border-slate-800 h-48 bg-slate-900">
              <iframe
                title="Michael Hauschild GmbH Standort Köln-Wahnheide"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2516.483719460454!2d7.0768!3d50.8650!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47bf2585f9e8a5b7%3A0x1c3a64938d8f0!2sMagazinstra%C3%9Fe%2041A%2C%2051147%20K%C3%B6ln!5e0!3m2!1sde!2sde!4v1700000000000!5m2!1sde!2sde"
                width="100%"
                height="100%"
                style={{ border: 0, filter: 'grayscale(0.9) contrast(1.2) invert(0.9)' }}
                allowFullScreen
                loading="lazy"
              />
            </div>
          </div>

          {/* Right Column: Form */}
          <div className="lg:col-span-7 bg-slate-900 border border-slate-800 rounded-2xl p-8 shadow-2xl">
            {submitted ? (
              <div className="py-16 text-center space-y-4">
                <div className="w-16 h-16 rounded-full bg-cyan-500/20 text-cyan-400 mx-auto flex items-center justify-center">
                  <CheckCircle2 className="w-10 h-10" />
                </div>
                <h3 className="text-2xl font-bold text-white">Vielen Dank für Ihre Nachricht!</h3>
                <p className="text-slate-300 text-sm max-w-md mx-auto">
                  Wir haben Ihre Anfrage erhalten. Ein Mitarbeiter der Michael Hauschild GmbH wird sich kurzfristig bei Ihnen melden.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="mt-4 px-6 py-2 rounded-lg bg-slate-800 text-slate-300 hover:text-white text-xs font-semibold"
                >
                  Neue Anfrage senden
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <h3 className="text-xl font-bold text-white mb-2">Unverbindliches Angebot anfordern</h3>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="contact-name" className="block text-xs font-medium text-slate-300 mb-1.5">Vollständiger Name *</label>
                    <input
                      id="contact-name"
                      type="text"
                      required
                      placeholder="z.B. Sandra Becker"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-3 rounded-lg bg-slate-950 border border-slate-800 text-white text-sm focus:border-cyan-500 focus:outline-none transition-colors"
                    />
                  </div>
                  <div>
                    <label htmlFor="contact-phone" className="block text-xs font-medium text-slate-300 mb-1.5">Telefonnummer *</label>
                    <input
                      id="contact-phone"
                      type="tel"
                      required
                      placeholder="z.B. 0221 1234567"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-4 py-3 rounded-lg bg-slate-950 border border-slate-800 text-white text-sm focus:border-cyan-500 focus:outline-none transition-colors"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="contact-email" className="block text-xs font-medium text-slate-300 mb-1.5">E-Mail Adresse *</label>
                    <input
                      id="contact-email"
                      type="email"
                      required
                      placeholder="name@beispiel.de"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3 rounded-lg bg-slate-950 border border-slate-800 text-white text-sm focus:border-cyan-500 focus:outline-none transition-colors"
                    />
                  </div>
                  <div>
                    <label htmlFor="contact-service" className="block text-xs font-medium text-slate-300 mb-1.5">Gewünschtes Gewerk</label>
                    <select
                      id="contact-service"
                      value={formData.serviceType}
                      onChange={(e) => setFormData({ ...formData, serviceType: e.target.value })}
                      className="w-full px-4 py-3 rounded-lg bg-slate-950 border border-slate-800 text-white text-sm focus:border-cyan-500 focus:outline-none transition-colors"
                    >
                      <option>Heizungsbau / Wärmepumpe</option>
                      <option>Badsanierung / Komplettbad</option>
                      <option>Sanitärinstallation</option>
                      <option>Klimatechnik & Lüftung</option>
                      <option>Wartung & Kundendienst</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label htmlFor="contact-location" className="block text-xs font-medium text-slate-300 mb-1.5">Einsatzort / PLZ</label>
                  <input
                    id="contact-location"
                    type="text"
                    placeholder="z.B. 51147 Köln"
                    value={formData.location}
                    onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                    className="w-full px-4 py-3 rounded-lg bg-slate-950 border border-slate-800 text-white text-sm focus:border-cyan-500 focus:outline-none transition-colors"
                  />
                </div>

                <div>
                  <label htmlFor="contact-msg" className="block text-xs font-medium text-slate-300 mb-1.5">Beschreibung Ihres Anliegens</label>
                  <textarea
                    id="contact-msg"
                    rows={4}
                    placeholder="Beschreiben Sie kurz Ihr Vorhaben (z.B. geplante Wärmepumpe, Badsanierung, Zeitpunkt)..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-3 rounded-lg bg-slate-950 border border-slate-800 text-white text-sm focus:border-cyan-500 focus:outline-none transition-colors resize-none"
                  />
                </div>

                <div className="flex items-center gap-2 text-xs text-slate-400">
                  <ShieldCheck className="w-4 h-4 text-cyan-400 shrink-0" />
                  <span>Strikter Datenschutz. Ihre Angaben werden ausschließlich zur Bearbeitung genutzt.</span>
                </div>

                <button
                  type="submit"
                  className="w-full py-4 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-slate-950 font-bold text-sm uppercase tracking-wider rounded-xl shadow-xl shadow-cyan-500/20 transition-all cursor-pointer flex items-center justify-center gap-2"
                >
                  <Send className="w-4 h-4" />
                  <span>Kostenloses Angebot Anfordern</span>
                </button>
              </form>
            )}
          </div>

        </div>

      </div>
    </section>
  );
}
