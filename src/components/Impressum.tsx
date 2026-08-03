import { useEffect } from 'react';
import { X, Building2 } from 'lucide-react';

interface ImpressumProps {
  isOpen: boolean;
  onClose: () => void;
}

export function Impressum({ isOpen, onClose }: ImpressumProps) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      window.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    }
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/90 backdrop-blur-xl overflow-y-auto">
      <div className="bg-slate-900 border border-slate-800 rounded-2xl max-w-3xl w-full p-6 sm:p-8 relative max-h-[90vh] overflow-y-auto text-slate-200 space-y-6 shadow-2xl">
        
        <button
          onClick={onClose}
          className="absolute top-6 right-6 p-2 rounded-lg bg-slate-800 text-slate-400 hover:text-white hover:bg-slate-700 transition-colors"
          aria-label="Schließen"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="flex items-center gap-3 border-b border-slate-800 pb-4">
          <Building2 className="w-6 h-6 text-cyan-400" />
          <h2 className="text-2xl font-bold text-white">Impressum</h2>
        </div>

        <div className="space-y-4 text-sm leading-relaxed">
          <section className="space-y-1">
            <h3 className="font-bold text-white text-base">Angaben gemäß § 5 TMG</h3>
            <p className="font-semibold text-cyan-400">Michael Hauschild GmbH</p>
            <p>Heizung & Sanitär</p>
            <p>Magazinstr. 41 A</p>
            <p>51147 Köln (Wahnheide)</p>
            <p>Deutschland</p>
          </section>

          <section className="space-y-1 pt-2">
            <h3 className="font-bold text-white text-base">Vertreten durch</h3>
            <p>Geschäftsführer: <strong className="text-white">Michael Hauschild</strong></p>
          </section>

          <section className="space-y-1 pt-2">
            <h3 className="font-bold text-white text-base">Kontakt</h3>
            <p>Telefon: 02203 / 92 13 82</p>
            <p>E-Mail: michael-hauschild@t-online.de</p>
          </section>

          <section className="space-y-1 pt-2 border-t border-slate-800">
            <h3 className="font-bold text-white text-base">Verantwortlich für den Inhalt nach § 55 Abs. 2 RStV</h3>
            <p>Michael Hauschild</p>
            <p>Magazinstr. 41 A, 51147 Köln</p>
          </section>

          <section className="space-y-2 pt-2 text-xs text-slate-400">
            <h4 className="font-semibold text-slate-300">Streitschlichtung</h4>
            <p>
              Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit. Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teilzunehmen.
            </p>
          </section>
        </div>

        <div className="pt-4 border-t border-slate-800 flex justify-end">
          <button
            onClick={onClose}
            className="px-5 py-2.5 rounded-lg bg-cyan-500 text-slate-950 font-bold text-xs uppercase tracking-wider hover:bg-cyan-400 cursor-pointer"
          >
            Fenster Schließen
          </button>
        </div>

      </div>
    </div>
  );
}
