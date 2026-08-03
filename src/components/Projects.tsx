import { useState } from 'react';
import { MapPin, ExternalLink } from 'lucide-react';
import projBathroom from '../images/project_bathroom.jpg';
import projHeatpump from '../images/project_heatpump.jpg';
import projHero from '../images/hero_heating_sanitary.jpg';

interface ProjectsProps {
  onOpenContact: () => void;
}

export function Projects({ onOpenContact }: ProjectsProps) {
  const [filter, setFilter] = useState<'all' | 'sanitary' | 'heating'>('all');

  const projects = [
    {
      id: '1',
      category: 'sanitary',
      title: 'Exklusive Komplett-Badsanierung mit Walk-In Dusche',
      location: 'Köln-Wahnheide',
      type: 'Sanitär & Fliesen',
      details: 'Regendusche, Natursteinoptik & Freistehende Wanne',
      image: projBathroom,
      tag: 'Badsanierung'
    },
    {
      id: '2',
      category: 'heating',
      title: 'Moderne Luft-Wasser-Wärmepumpe im Neubau',
      location: 'Köln-Porz / Erftkreis',
      type: 'Heizungstechnik',
      details: '70% Heizkostenersparnis + BAFA Förderung',
      image: projHeatpump,
      tag: 'Wärmepumpe'
    },
    {
      id: '3',
      category: 'sanitary',
      title: 'Barrierefreies Komfortbad für Senioren',
      location: 'Köln-Lindenthal',
      type: 'Barrierefrei',
      details: 'Bodenebene Dusche, Haltegriffe & Unterfahrbarer Waschtisch',
      image: projHero,
      tag: 'Komfortbad'
    }
  ];

  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(p => p.category === filter);

  return (
    <section id="projects" className="py-20 lg:py-28 bg-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-xs font-bold uppercase tracking-wider mb-4">
              Umgesetzte Kundenprojekte
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
              Aktuelle Referenzarbeiten
            </h2>
          </div>

          {/* Filter Buttons */}
          <div className="flex flex-wrap gap-2">
            {[
              { id: 'all', label: 'Alle Referenzen' },
              { id: 'sanitary', label: 'Bäder & Sanitär' },
              { id: 'heating', label: 'Wärmepumpen & Heizung' },
            ].map((btn) => (
              <button
                key={btn.id}
                onClick={() => setFilter(btn.id as any)}
                className={`px-4 py-2 rounded-lg text-xs font-semibold tracking-wider transition-all cursor-pointer ${
                  filter === btn.id
                    ? 'bg-cyan-500 text-slate-950 shadow-lg shadow-cyan-500/20'
                    : 'bg-slate-900 text-slate-300 hover:bg-slate-800 border border-slate-800'
                }`}
              >
                {btn.label}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div 
              key={project.id}
              className="group relative rounded-2xl overflow-hidden bg-slate-900 border border-slate-800 shadow-xl"
            >
              {/* Image Container */}
              <div className="aspect-[4/3] overflow-hidden relative">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover object-center grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700 ease-out"
                  width={600}
                  height={450}
                />
                
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />

                <div className="absolute top-4 left-4 bg-slate-950/80 backdrop-blur-md px-3 py-1 rounded-md border border-slate-800 text-[11px] font-bold text-cyan-400 uppercase tracking-wider">
                  {project.tag}
                </div>
              </div>

              {/* Info Block */}
              <div className="p-6 relative z-10 space-y-3">
                <div className="flex items-center gap-2 text-xs text-slate-400">
                  <MapPin className="w-3.5 h-3.5 text-cyan-400" />
                  <span>{project.location}</span>
                  <span>•</span>
                  <span>{project.type}</span>
                </div>

                <h3 className="text-xl font-bold text-white group-hover:text-cyan-400 transition-colors leading-snug">
                  {project.title}
                </h3>

                <div className="flex items-center justify-between pt-3 border-t border-slate-800 text-xs text-slate-400">
                  <span className="font-semibold text-slate-300">{project.details}</span>
                  <button
                    onClick={onOpenContact}
                    className="inline-flex items-center gap-1.5 text-cyan-400 font-bold hover:text-cyan-300 cursor-pointer"
                  >
                    <span>Details</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
