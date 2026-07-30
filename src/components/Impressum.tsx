export default function Impressum({ isOpen, onClose }: { isOpen: boolean, onClose: () => void }) {
  if (!isOpen) return null;
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm" onClick={onClose}>
      <div className="bg-darker border border-white/10 p-8 max-w-2xl w-full max-h-[80vh] overflow-y-auto text-light/70" onClick={e => e.stopPropagation()}>
        <div className="flex justify-between items-center mb-6 border-b border-white/10 pb-4">
          <h2 className="text-2xl font-serif text-light">Impressum</h2>
          <button onClick={onClose} className="text-2xl hover:text-gold">&times;</button>
        </div>
        <div className="space-y-4 text-sm">
          <p><strong>Angaben gem  5 TMG:</strong></p>
          <p>Gorillas Ink<br/>Berliner Str. 2<br/>63654 Bdingen</p>
          <p><strong>Vertreten durch:</strong><br/>Max Mustermann</p>
          <p><strong>Kontakt:</strong><br/>Telefon: +49 (0) 123 456 7890<br/>E-Mail: info@gorillas-ink.de</p>
        </div>
      </div>
    </div>
  );
}
