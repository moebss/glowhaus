import { CalendarCheck } from 'lucide-react';

export default function StickyCTA() {
  const scrollToBooking = () => {
    document.getElementById('booking')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="md:hidden fixed bottom-0 left-0 right-0 z-40 bg-darker border-t border-white/10 p-4 shadow-2xl backdrop-blur-md bg-opacity-95">
      <button 
        onClick={scrollToBooking}
        className="w-full flex items-center justify-center gap-2 bg-gold hover:bg-gold/90 text-darker font-bold uppercase tracking-wider py-4 rounded-sm transition-colors shadow-[0_0_15px_rgba(200,169,126,0.3)]"
      >
        <CalendarCheck size={20} />
        Termin vereinbaren
      </button>
    </div>
  );
}
