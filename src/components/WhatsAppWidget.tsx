import { MessageCircle } from 'lucide-react';

export function WhatsAppWidget() {
  const whatsappUrl = "https://wa.me/492203921382?text=Hallo%20Michael%20Hauschild%20GmbH%2C%20ich%20habe%20eine%20Anfrage%20zu%20einer%20Heizungs-%20oder%20Sanit%C3%A4rleistung.";

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-20 md:bottom-8 right-6 z-40 w-13 h-13 rounded-full bg-emerald-500 hover:bg-emerald-400 text-white flex items-center justify-center shadow-xl shadow-emerald-500/30 hover:scale-110 transition-all duration-300 group"
      aria-label="WhatsApp Chat starten"
    >
      <MessageCircle className="w-7 h-7 fill-white/20 group-hover:rotate-12 transition-transform" />
      <span className="sr-only">WhatsApp Chat</span>
      
      <span className="hidden md:group-hover:block absolute right-16 top-1/2 -translate-y-1/2 bg-slate-900 border border-slate-800 text-white text-xs font-semibold px-3 py-1.5 rounded-lg whitespace-nowrap shadow-lg">
        WhatsApp Chat starten
      </span>
    </a>
  );
}
