// HR-UPDATER: v1.0

import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import JobCard from '../components/JobCard';
import Sidebar from '../components/Sidebar';
import Hero from '../components/Hero';
import { Job } from '../types';
import { Accessibility, Sparkles, Heart, HelpCircle, GraduationCap, MapPin as MapPinIcon } from 'lucide-react';

const MOCK_JOBS: Job[] = [
  {
    id: '1',
    title: 'Leitung Physiotherapie (m/w/d)',
    company: 'Henneberg-Rehaklinik Masserberg GmbH',
    location: 'Masserberg',
    type: 'Vollzeit',
    description: 'Leitung Physiotherapie (m/w/d)',
    postedAt: '2026-03-06'
  },
  {
    id: '2',
    title: 'Fachkraft für Physiotherapie (m/w/d)',
    company: 'Dt. Rentenversicherung Baden-Württemberg Hauptsitz Karlsruhe',
    location: 'Stuttgart',
    type: 'Vollzeit',
    description: 'Fachkraft für Physiotherapie (m/w/d)',
    postedAt: '2026-03-05'
  },
  {
    id: '3',
    title: 'Lehrkraft Physiotherapie (m/w/d)',
    company: 'Ludwig Fresenius Schulen GmbH',
    location: 'Wolfsburg',
    type: 'Vollzeit',
    description: 'Lehrkraft Physiotherapie (m/w/d)',
    postedAt: '2026-03-03'
  },
  {
    id: '4',
    title: 'Rezeptionskraft (m/w/d)in Physiotherapie',
    company: 'Körperconcept Physiotherapie Inh. Matthias Paulsen',
    location: 'Schwerin, Mecklenburg',
    type: 'Vollzeit',
    description: 'Rezeptionskraft (m/w/d)in Physiotherapie',
    postedAt: '2026-03-02'
  },
  {
    id: '5',
    title: 'Physiotherapie',
    company: 'PhysioFit Ines Mertins',
    location: 'Sassenburg',
    type: 'Vollzeit',
    description: 'Physiotherapie',
    postedAt: '2026-02-28'
  },
  {
    id: '6',
    title: 'Empfangskraft Physiotherapie',
    company: 'Bodo Peckruhn',
    location: 'Kiel',
    type: 'Vollzeit',
    description: 'Empfangskraft Physiotherapie',
    postedAt: '2026-02-27'
  },
  {
    id: '7',
    title: 'Leitung Physiotherapie',
    company: 'P-MedConsulting Medical Care Personalberatung Grit Frömel',
    location: 'Berlin',
    type: 'Vollzeit',
    description: 'Leitung Physiotherapie',
    postedAt: '2026-02-26'
  },
  {
    id: '8',
    title: 'Praxis für Physiotherapie',
    company: 'Praxis M.Buch',
    location: 'Grünstadt',
    type: 'Vollzeit',
    description: 'Praxis für Physiotherapie',
    postedAt: '2026-02-23'
  },
  {
    id: '9',
    title: 'Physiotherapie',
    company: 'Dietrich / Stadtler GbR',
    location: 'München',
    type: 'Vollzeit',
    description: 'Physiotherapie',
    postedAt: '2026-02-17'
  },
  {
    id: '10',
    title: 'Physiotherapie',
    company: 'Jacqueline Schönherr Praxis für Physiotherapie',
    location: 'Stavenhagen, Reuterstadt',
    type: 'Vollzeit',
    description: 'Physiotherapie',
    postedAt: '2026-02-10'
  },
  {
    id: '11',
    title: 'Physiotherapie',
    company: 'Sabrina Schumann Praxis für Physiotherapie',
    location: 'Parchim',
    type: 'Vollzeit',
    description: 'Physiotherapie',
    postedAt: '2026-02-09'
  },
  {
    id: '12',
    title: 'Physiotherapie',
    company: 'Robert Balter',
    location: 'Karlsruhe, Baden',
    type: 'Vollzeit',
    description: 'Physiotherapie',
    postedAt: '2026-02-05'
  },
  {
    id: '13',
    title: 'Physiotherapie',
    company: 'Romi Knoll-Küchler',
    location: 'Sindelfingen',
    type: 'Vollzeit',
    description: 'Physiotherapie',
    postedAt: '2026-01-29'
  },
  {
    id: '14',
    title: 'Physiotherapie',
    company: 'Physiotherapie Atlas Einzelunternehmen',
    location: 'Wester-Ohrstedt',
    type: 'Vollzeit',
    description: 'Physiotherapie',
    postedAt: '2026-01-28'
  },
  {
    id: '15',
    title: 'Physiotherapie',
    company: 'Anne-Kathrin Dreschler Sport & Physiotherapie Lübz',
    location: 'Lübz',
    type: 'Vollzeit',
    description: 'Physiotherapie',
    postedAt: '2026-01-27'
  },
  {
    id: '16',
    title: 'Physiotherapie (m/w/d)',
    company: 'ZAR Gesundheits- und Therapiezentren GmbH',
    location: 'Leinfelden-Echterdingen',
    type: 'Vollzeit',
    description: 'Physiotherapie (m/w/d)',
    postedAt: '2026-01-27'
  },
  {
    id: '17',
    title: 'Physiotherapie (m/w/d)',
    company: 'Schlossphysiotherapie Gaby Karius',
    location: 'Großfahner',
    type: 'Vollzeit',
    description: 'Physiotherapie (m/w/d)',
    postedAt: '2026-01-19'
  },
  {
    id: '18',
    title: 'Physiotherapie',
    company: 'Friedhelm Wanke',
    location: 'Cuxhaven',
    type: 'Vollzeit',
    description: 'Physiotherapie',
    postedAt: '2025-11-22'
  },
  {
    id: '19',
    title: 'Neue Physiotherapie',
    company: 'Praxis für Physiotherapie Darina Kieschnick',
    location: 'Malschwitz',
    type: 'Vollzeit',
    description: 'Neue Physiotherapie',
    postedAt: '2025-11-10'
  },
  {
    id: '20',
    title: 'Physiotherapie',
    company: 'Beatrix Gerken Massage und Krankengymnastik',
    location: 'Walkenried',
    type: 'Vollzeit',
    description: 'Physiotherapie',
    postedAt: '2025-11-02'
  },
  {
    id: '21',
    title: 'Physiotherapie',
    company: 'Physiozentrum Scheerer & Heesch GbR',
    location: 'Bad Bramstedt',
    type: 'Vollzeit',
    description: 'Physiotherapie',
    postedAt: '2025-10-28'
  },
  {
    id: '22',
    title: 'PHYSIOTHERAPIE',
    company: 'Dieter Dunklau Physiotherapie und Krankengymn astik',
    location: 'Wesselburen',
    type: 'Vollzeit',
    description: 'PHYSIOTHERAPIE',
    postedAt: '2025-10-25'
  },
  {
    id: '23',
    title: 'Verstärkung in der Physiotherapie (m/w/d)',
    company: 'Johannes Van den Bosch Jun Praxis für Physiotherapie',
    location: 'Emmerich am Rhein',
    type: 'Vollzeit',
    description: 'Verstärkung in der Physiotherapie (m/w/d)',
    postedAt: '2025-09-01'
  },
  {
    id: '24',
    title: 'Physiotherapie',
    company: 'Stefanie Söffler Praxis für Physiotherapie am Ostrauer Park',
    location: 'Petersberg bei Halle, Saale',
    type: 'Vollzeit',
    description: 'Physiotherapie',
    postedAt: '2025-08-19'
  },
  {
    id: '25',
    title: 'Physiotherapie (m/w/d)',
    company: 'Schrömer, Maximilian',
    location: 'Haltern am See',
    type: 'Vollzeit',
    description: 'Physiotherapie (m/w/d)',
    postedAt: '2025-06-18'
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
            <aside className="w-full lg:w-1/4 order-2 lg:order-1">
              <Sidebar />
            </aside>
            <div className="w-full lg:w-3/4 order-1 lg:order-2">
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
        {/* Geo SEO: Physiotherapie-Jobs in deutschen Städten */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-emerald-100 border border-emerald-200 px-4 py-2 rounded-full text-emerald-700 text-sm font-bold mb-6">
              <MapPinIcon size={16} />
              Regionale Stellenangebote
            </div>
            <h2 className="text-3xl md:text-4xl font-black text-emerald-950 font-brand mb-4">Physiotherapie-Jobs in Ihrer Stadt</h2>
            <p className="text-emerald-700/60 max-w-2xl mx-auto">Finden Sie Stellenangebote fuer Physiotherapeuten in den groessten Staedten Deutschlands.</p>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
            {[
              { city: 'Berlin', count: 87 },
              { city: 'Hamburg', count: 54 },
              { city: 'Muenchen', count: 72 },
              { city: 'Koeln', count: 41 },
              { city: 'Frankfurt am Main', count: 38 },
              { city: 'Stuttgart', count: 45 },
              { city: 'Duesseldorf', count: 33 },
              { city: 'Leipzig', count: 29 },
              { city: 'Dortmund', count: 24 },
              { city: 'Essen', count: 21 },
              { city: 'Bremen', count: 19 },
              { city: 'Dresden', count: 26 },
              { city: 'Hannover', count: 28 },
              { city: 'Nuernberg', count: 22 },
              { city: 'Duisburg', count: 15 },
              { city: 'Bochum', count: 13 },
              { city: 'Wuppertal', count: 11 },
              { city: 'Bielefeld', count: 14 },
              { city: 'Bonn', count: 17 },
              { city: 'Mannheim', count: 16 },
              { city: 'Karlsruhe', count: 18 },
              { city: 'Augsburg', count: 15 },
              { city: 'Wiesbaden', count: 12 },
              { city: 'Muenster', count: 20 },
              { city: 'Freiburg', count: 23 },
            ].map(({ city, count }) => (
              <a key={city} href={`#/jobs/${city.toLowerCase().replace(/\s+/g, '-')}`} className="bg-white border border-emerald-100 rounded-2xl p-4 text-center hover:border-emerald-300 hover:shadow-md transition-all group">
                <p className="font-bold text-emerald-900 group-hover:text-emerald-600 transition-colors text-sm">{city}</p>
                <p className="text-emerald-500 text-xs font-medium mt-1">{count} Stellen</p>
              </a>
            ))}
          </div>
        </section>

        {/* FAQ Section */}
        <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-amber-100 border border-amber-200 px-4 py-2 rounded-full text-amber-700 text-sm font-bold mb-6">
              <HelpCircle size={16} />
              Haeufige Fragen
            </div>
            <h2 className="text-3xl md:text-4xl font-black text-emerald-950 font-brand mb-4">FAQ - Haeufig gestellte Fragen</h2>
          </div>
          <div className="space-y-6">
            {[
              {
                q: 'Ist die Nutzung von physio-stellenangebote.de fuer Bewerber kostenlos?',
                a: 'Ja, die Suche nach Physiotherapie-Stellenangeboten ist fuer Bewerber vollstaendig kostenlos. Sie koennen alle Stellenanzeigen einsehen und sich direkt bewerben.'
              },
              {
                q: 'Welche Qualifikationen brauche ich als Physiotherapeut/in?',
                a: 'In Deutschland benoetigen Sie eine abgeschlossene Ausbildung zum/zur Physiotherapeut/in (3 Jahre) oder ein Studium der Physiotherapie (Bachelor/Master). Zusaetzliche Qualifikationen wie Manuelle Therapie, Bobath oder Lymphdrainage erhoehen Ihre Chancen.'
              },
              {
                q: 'Wie hoch ist das Gehalt fuer Physiotherapeuten in Deutschland?',
                a: 'Das Einstiegsgehalt liegt bei ca. 2.400-2.800 Euro brutto monatlich. Mit Berufserfahrung und Zusatzqualifikationen sind 3.000-4.000 Euro moeglich. Leitende Positionen in Kliniken koennen deutlich hoeher verguetet werden.'
              },
              {
                q: 'Kann ich mich als Physiotherapeut/in selbstaendig machen?',
                a: 'Ja, mit einer Kassenzulassung koennen Sie eine eigene Praxis eroeffnen. Dafuer benoetigen Sie in der Regel mindestens 2 Jahre Berufserfahrung und die Erfuellung der Zulassungsvoraussetzungen der Krankenkassen.'
              },
              {
                q: 'Welche Weiterbildungsmoeglichkeiten gibt es?',
                a: 'Beliebte Weiterbildungen sind Manuelle Therapie, Bobath-Therapie, Sportphysiotherapie, Osteopathie, Lymphdrainage und Geraetegestuetzte Krankengymnastik (KGG). Viele Arbeitgeber unterstuetzen Fortbildungen finanziell.'
              },
              {
                q: 'Wie kann ich als Arbeitgeber eine Stelle inserieren?',
                a: 'Arbeitgeber koennen ueber unsere Kontaktseite Stellenanzeigen aufgeben. Wir bieten verschiedene Pakete fuer maximale Reichweite und gezielte Ansprache qualifizierter Physiotherapeuten.'
              }
            ].map((faq, i) => (
              <details key={i} className="bg-white border border-emerald-100 rounded-2xl overflow-hidden group">
                <summary className="p-6 font-bold text-emerald-900 cursor-pointer hover:bg-emerald-50 transition-colors flex items-center gap-3">
                  <HelpCircle size={20} className="text-emerald-500 flex-shrink-0" />
                  {faq.q}
                </summary>
                <div className="px-6 pb-6 text-emerald-700/70 leading-relaxed ml-8">
                  {faq.a}
                </div>
              </details>
            ))}
          </div>
        </section>

        {/* Karriere-Ratgeber Section */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-emerald-100 border border-emerald-200 px-4 py-2 rounded-full text-emerald-700 text-sm font-bold mb-6">
              <GraduationCap size={16} />
              Karriere-Ratgeber
            </div>
            <h2 className="text-3xl md:text-4xl font-black text-emerald-950 font-brand mb-4">Karriere in der Physiotherapie</h2>
            <p className="text-emerald-700/60 max-w-2xl mx-auto">Wissenswertes rund um Ihren beruflichen Werdegang als Physiotherapeut/in.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white border border-emerald-100 rounded-[2rem] p-8 hover:shadow-lg transition-shadow">
              <div className="bg-emerald-100 w-14 h-14 rounded-2xl flex items-center justify-center mb-6">
                <GraduationCap size={28} className="text-emerald-600" />
              </div>
              <h3 className="text-xl font-black text-emerald-950 mb-3 font-brand">Ausbildung & Studium</h3>
              <p className="text-emerald-700/60 leading-relaxed text-sm">
                Die Ausbildung zum Physiotherapeuten dauert 3 Jahre und findet an Berufsfachschulen statt. Alternativ bieten immer mehr Hochschulen ein duales oder Vollzeit-Studium der Physiotherapie an, das mit einem Bachelor abschliesst. Beide Wege eroeffnen vielfaeltige Karrierechancen.
              </p>
            </div>
            <div className="bg-white border border-emerald-100 rounded-[2rem] p-8 hover:shadow-lg transition-shadow">
              <div className="bg-amber-100 w-14 h-14 rounded-2xl flex items-center justify-center mb-6">
                <Sparkles size={28} className="text-amber-600" />
              </div>
              <h3 className="text-xl font-black text-emerald-950 mb-3 font-brand">Spezialisierungen</h3>
              <p className="text-emerald-700/60 leading-relaxed text-sm">
                Nach der Grundausbildung koennen Sie sich in Bereichen wie Manuelle Therapie, Sportphysiotherapie, Paediatrie, Neurologie (Bobath/PNF) oder Geriatrie spezialisieren. Zertifikatskurse und Weiterbildungen erhoehen Ihren Marktwert und oeffnen Tueren zu spannenden Positionen.
              </p>
            </div>
            <div className="bg-white border border-emerald-100 rounded-[2rem] p-8 hover:shadow-lg transition-shadow">
              <div className="bg-emerald-100 w-14 h-14 rounded-2xl flex items-center justify-center mb-6">
                <Heart size={28} className="text-emerald-600" />
              </div>
              <h3 className="text-xl font-black text-emerald-950 mb-3 font-brand">Arbeitsmarkt & Gehalt</h3>
              <p className="text-emerald-700/60 leading-relaxed text-sm">
                Der Fachkraeftemangel in der Physiotherapie sorgt fuer ausgezeichnete Berufsaussichten. Physiotherapeuten sind in Praxen, Kliniken, Reha-Zentren und im Sportbereich gefragt. Die Verguetung steigt mit Erfahrung und Spezialisierung, insbesondere in staedtischen Regionen und bei privaten Traegern.
              </p>
            </div>
          </div>
        </section>
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
