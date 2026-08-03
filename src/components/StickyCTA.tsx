import { Phone, FileText } from 'lucide-react';

interface StickyCTAProps {
  onOpenContact: () => void;
}

export function StickyCTA({ onOpenContact }: StickyCTAProps) {
  return (
    <div className="md:hidden fixed bottom-0 left-0 right-0 z-40 bg-slate-950/95 backdrop-blur-lg border-t border-slate-800 p-3 flex gap-2">
      <a
        href="tel:+492203921382"
        className="flex-1 py-3 px-4 bg-slate-900 border border-slate-800 rounded-xl flex items-center justify-center gap-2 text-white font-bold text-xs shadow-md active:bg-slate-800"
      >
        <Phone className="w-4 h-4 text-cyan-400" />
        <span>Anrufen</span>
      </a>

      <button
        onClick={onOpenContact}
        className="flex-1 py-3 px-4 bg-cyan-500 text-slate-950 rounded-xl flex items-center justify-center gap-2 font-extrabold text-xs uppercase tracking-wider shadow-lg shadow-cyan-500/20 active:bg-cyan-400"
      >
        <FileText className="w-4 h-4" />
        <span>Angebot</span>
      </button>
    </div>
  );
}
