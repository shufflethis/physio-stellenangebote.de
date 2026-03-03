// HR-UPDATER: v1.0

import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import JobCard from '../components/JobCard';
import Sidebar from '../components/Sidebar';
import Hero from '../components/Hero';
import { Job } from '../types';
import { Accessibility, Sparkles, Heart } from 'lucide-react';

const MOCK_JOBS: Job[] = [
  {
    id: 'physio1',
    title: 'Physiotherapeut (m/w/d) - Sport & Reha',
    company: 'Physio-Zentrum am Park',
    location: 'Berlin-Charlottenburg',
    type: 'Vollzeit',
    salary: '3.600€ - 4.400€',
    description: 'Wir suchen Verstärkung für unser Team mit Fokus auf Sportphysiotherapie und Manuelle Therapie. Modernste Geräte und 30 Min. Taktung.',
    postedAt: 'Vor 1 Std.',
    logo: 'https://picsum.photos/seed/physio1/120/120'
  },
  {
    id: 'physio2',
    title: 'Leitender Physiotherapeut',
    company: 'Therapie-Klinik Sonnenblick',
    location: 'Freiburg',
    type: 'Vollzeit',
    salary: '4.800€ - 5.500€',
    description: 'Verantwortung für ein Team von 12 Therapeuten. Schwerpunkt Neurologie und Geriatrie. Inkl. Fortbildungsbudget.',
    postedAt: 'Vor 4 Std.',
    logo: 'https://picsum.photos/seed/physio2/120/120'
  },
  {
    id: 'physio3',
    title: 'Physiotherapeut (Teilzeit) - Kinderphysio',
    company: 'Praxis Kleiner Schritt',
    location: 'Leipzig',
    type: 'Teilzeit',
    salary: '2.200€ (20h)',
    description: 'Werde Teil unserer familiären Praxis für Pädiatrie. Wir bieten flexible Arbeitszeiten und ein herzliches Miteinander.',
    postedAt: 'Vor 1 Tag',
    logo: 'https://picsum.photos/seed/physio3/120/120'
  }
];

const Home: React.FC = () => {
  const [jobs] = useState<Job[]>(MOCK_JOBS);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen flex flex-col relative overflow-hidden">
      {/* Background blobs for organic feel */}
      <div className="blob-bg w-[500px] h-[500px] bg-emerald-100 top-[-10%] right-[-10%]"></div>
      <div className="blob-bg w-[400px] h-[400px] bg-amber-50 bottom-[10%] left-[-10%]"></div>

      <Navbar />
      <main className="flex-grow z-10">
        <Hero />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="flex flex-col lg:flex-row gap-12">
            <aside className="w-full lg:w-1/4">
              <Sidebar />
            </aside>
            <div className="w-full lg:w-3/4">
              <div className="flex items-center justify-between mb-10">
                <div className="flex items-center gap-4">
                  <div className="bg-emerald-500 p-4 rounded-3xl text-white shadow-lg shadow-emerald-200">
                    <Accessibility size={28} />
                  </div>
                  <div>
                    <h2 className="text-3xl font-extrabold text-emerald-950 tracking-tight font-brand">
                      Ihre Chance zur <span className="text-emerald-600">Heilung</span>
                    </h2>
                    <p className="text-emerald-700/60 font-medium">Entdecken Sie Jobs, die Bewegung in Ihr Leben bringen.</p>
                  </div>
                </div>
              </div>
              
              {loading ? (
                <div className="space-y-6">
                  {[1, 2, 3].map((n) => (
                    <div key={n} className="h-48 bg-white/60 animate-pulse rounded-[2rem] border border-emerald-50"></div>
                  ))}
                </div>
              ) : (
                <div className="grid gap-8">
                  {jobs.map((job) => (
                    <JobCard key={job.id} job={job} />
                  ))}
                </div>
              )}

              {/* Vitality CTA */}
              <div className="mt-20 bg-emerald-900 rounded-[3rem] p-12 relative overflow-hidden text-white shadow-2xl">
                <div className="absolute top-0 right-0 p-8 opacity-10">
                  <Sparkles size={160} />
                </div>
                <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-10">
                  <div className="max-w-xl text-center md:text-left">
                    <h3 className="text-4xl font-black mb-4 font-brand leading-tight">Gemeinsam für mehr Lebensqualität.</h3>
                    <p className="text-emerald-200 text-lg mb-8 font-medium">Lassen Sie sich von Praxen finden, die Ihre Spezialisierung und Ihr Engagement wirklich schätzen.</p>
                    <button className="bg-amber-500 hover:bg-amber-400 text-white font-black px-12 py-4 rounded-full transition-all shadow-xl shadow-amber-900/40">
                      Jetzt Talent-Profil erstellen
                    </button>
                  </div>
                  <div className="bg-emerald-800/50 p-6 rounded-full border border-emerald-700/50 flex-shrink-0">
                    <Heart size={80} className="text-emerald-400" fill="currentColor" opacity="0.4" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      
      <footer className="bg-emerald-950 text-emerald-200/50 py-20 mt-20">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-12">
          <div className="col-span-1 md:col-span-2">
            <div className="text-3xl font-black text-white font-brand mb-6 flex items-center gap-2">
              physio<span className="text-emerald-400">stellen</span>
            </div>
            <p className="text-emerald-200/70 leading-relaxed max-w-sm font-medium">
              Das Herzstück für Physiotherapie-Karrieren. Wir verbinden leidenschaftliche Therapeuten mit den besten Arbeitsplätzen Deutschlands.
            </p>
          </div>
          <div className="flex flex-col gap-4">
            <h4 className="text-white font-bold mb-4">Bereiche</h4>
            <a href="#" className="hover:text-amber-400 transition-colors">Orthopädie</a>
            <a href="#" className="hover:text-amber-400 transition-colors">Pädiatrie</a>
            <a href="#" className="hover:text-amber-400 transition-colors">Sportphysio</a>
          </div>
          <div className="flex flex-col gap-4">
            <h4 className="text-white font-bold mb-4">Rechtliches</h4>
            <Link to="/impressum" className="hover:text-amber-400 transition-colors">Impressum</Link>
            <Link to="/datenschutz" className="hover:text-amber-400 transition-colors">Datenschutz</Link>
            <Link to="/kontakt" className="hover:text-blue-400 transition-colors">Kontakt</Link>
            <Link to="/autor/thomas-sander" className="hover:text-blue-400 transition-colors">Autor</Link>
            <p className="text-emerald-900 mt-6">© 2024 physio-stellenangebote.de</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;
