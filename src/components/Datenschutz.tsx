export default function Datenschutz({ isOpen, onClose }: { isOpen: boolean, onClose: () => void }) {
  if (!isOpen) return null;
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm" onClick={onClose}>
      <div className="bg-darker border border-white/10 p-8 max-w-2xl w-full max-h-[80vh] overflow-y-auto text-light/70" onClick={e => e.stopPropagation()}>
        <div className="flex justify-between items-center mb-6 border-b border-white/10 pb-4">
          <h2 className="text-2xl font-serif text-light">Datenschutzerklrung</h2>
          <button onClick={onClose} className="text-2xl hover:text-gold">&times;</button>
        </div>
        <div className="space-y-4 text-sm">
          <p><strong>1. Datenschutz auf einen Blick</strong></p>
          <p>Allgemeine Hinweise: Die folgenden Hinweise geben einen einfachen berblick darber, was mit Ihren personenbezogenen Daten passiert, wenn Sie diese Website besuchen.</p>
          <p><strong>2. Hosting</strong></p>
          <p>Wir hosten die Inhalte unserer Website bei folgendem Anbieter: GitHub Pages.</p>
          <p><strong>3. Allgemeine Hinweise und Pflichtinformationen</strong></p>
          <p>Die Betreiber dieser Seiten nehmen den Schutz Ihrer persnlichen Daten sehr ernst.</p>
        </div>
      </div>
    </div>
  );
}
