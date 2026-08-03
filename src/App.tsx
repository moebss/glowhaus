import { NoiseOverlay } from './components/NoiseOverlay';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { StatsCounter } from './components/StatsCounter';
import { Services } from './components/Services';
import { Projects } from './components/Projects';
import { About } from './components/About';
import { Testimonials } from './components/Testimonials';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { StickyCTA } from './components/StickyCTA';
import { WhatsAppWidget } from './components/WhatsAppWidget';

export function App() {
  const scrollToContact = () => {
    const el = document.getElementById('contact');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 relative font-sans selection:bg-cyan-500 selection:text-slate-950">
      <NoiseOverlay />
      <Navbar onOpenContact={scrollToContact} />
      
      <main>
        <Hero onOpenContact={scrollToContact} />
        <StatsCounter />
        <Services onOpenContact={scrollToContact} />
        <Projects onOpenContact={scrollToContact} />
        <About onOpenContact={scrollToContact} />
        <Testimonials />
        <Contact />
      </main>

      <Footer onOpenContact={scrollToContact} />
      <StickyCTA onOpenContact={scrollToContact} />
      <WhatsAppWidget />
    </div>
  );
}

export default App;
