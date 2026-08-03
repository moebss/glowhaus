import { useEffect } from 'react';
import { X, ShieldCheck } from 'lucide-react';

interface DatenschutzProps {
  isOpen: boolean;
  onClose: () => void;
}

export function Datenschutz({ isOpen, onClose }: DatenschutzProps) {
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
          <ShieldCheck className="w-6 h-6 text-cyan-400" />
          <h2 className="text-2xl font-bold text-white">Datenschutzerklärung</h2>
        </div>

        <div className="space-y-4 text-sm leading-relaxed text-slate-300">
          <section className="space-y-2">
            <h3 className="font-bold text-white text-base">1. Datenschutz auf einen Blick</h3>
            <p>
              Die Betreiber dieser Seiten nehmen den Schutz Ihrer persönlichen Daten sehr ernst. Wir behandeln Ihre personenbezogenen Daten vertraulich und entsprechend der gesetzlichen Datenschutzvorschriften sowie dieser Datenschutzerklärung.
            </p>
          </section>

          <section className="space-y-2 pt-2">
            <h3 className="font-bold text-white text-base">2. Verantwortliche Stelle</h3>
            <p>Die verantwortliche Stelle für die Datenverarbeitung auf dieser Website ist:</p>
            <p className="font-semibold text-white">Michael Hauschild GmbH</p>
            <p>Geschäftsführer: Michael Hauschild</p>
            <p>Magazinstr. 41 A, 51147 Köln</p>
            <p>E-Mail: michael-hauschild@t-online.de</p>
          </section>

          <section className="space-y-2 pt-2">
            <h3 className="font-bold text-white text-base">3. Datenerfassung auf unserer Website</h3>
            <h4 className="font-semibold text-white">Kontaktformular & E-Mail</h4>
            <p>
              Wenn Sie uns per Kontaktformular oder E-Mail Anfragen zukommen lassen, werden Ihre Angaben zwecks Bearbeitung der Anfrage und für den Fall von Anschlussfragen bei uns gespeichert. Diese Daten geben wir nicht ohne Ihre Einwilligung weiter.
            </p>
          </section>

          <section className="space-y-2 pt-2">
            <h3 className="font-bold text-white text-base">4. Ihre Rechte</h3>
            <p>
              Sie haben jederzeit das Recht auf unentgeltliche Auskunft über Ihre gespeicherten personenbezogenen Daten, deren Herkunft und Empfänger und den Zweck der Datenverarbeitung sowie ein Recht auf Berichtigung oder Löschung dieser Daten.
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
