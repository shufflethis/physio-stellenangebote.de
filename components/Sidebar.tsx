
import React from 'react';
import { Filter, Users, Sparkles, Move } from 'lucide-react';

const Sidebar: React.FC = () => {
  return (
    <div className="space-y-8">
      <div className="flex items-center gap-3 px-2">
        <Filter size={24} className="text-emerald-500" />
        <h3 className="font-black text-emerald-950 text-xl font-brand">Filter</h3>
      </div>

      <div className="bg-white p-8 rounded-[2.5rem] border border-emerald-50 shadow-sm">
        <section className="mb-10">
          <h4 className="font-black text-emerald-300 text-[10px] uppercase mb-6 tracking-[0.3em] flex items-center gap-2">
            <Move size={14} className="text-emerald-500" /> Schwerpunkte
          </h4>
          <div className="space-y-4">
            {['Manuelle Therapie', 'Lymphdrainage', 'Sportphysio', 'Neurologie (Bobath)', 'Osteopathie'].map(item => (
              <label key={item} className="flex items-center gap-4 cursor-pointer group">
                <input type="checkbox" className="w-6 h-6 rounded-lg border-emerald-100 text-emerald-600 focus:ring-emerald-500/50 transition-all cursor-pointer" />
                <span className="text-emerald-800/70 font-bold text-sm group-hover:text-emerald-600 transition-colors">{item}</span>
              </label>
            ))}
          </div>
        </section>

        <section className="mb-10">
          <h4 className="font-black text-emerald-300 text-[10px] uppercase mb-6 tracking-[0.3em] flex items-center gap-2">
            <Users size={14} className="text-emerald-500" /> Teamgröße
          </h4>
          <div className="space-y-4">
            {['Kleine Praxis (<5)', 'Mittlere Praxis (5-15)', 'Zentrum / Klinik (>15)'].map(item => (
              <label key={item} className="flex items-center gap-4 cursor-pointer group">
                <input type="radio" name="teamsize" className="w-6 h-6 border-emerald-100 text-emerald-600 focus:ring-emerald-500/50 transition-all cursor-pointer" />
                <span className="text-emerald-800/70 font-bold text-sm group-hover:text-emerald-600 transition-colors">{item}</span>
              </label>
            ))}
          </div>
        </section>

        <div className="bg-emerald-50 p-6 rounded-[2rem] border border-emerald-100">
          <div className="flex items-center gap-2 text-emerald-700 font-bold text-xs mb-3 uppercase tracking-widest">
            <Sparkles size={18} className="text-amber-500" />
            <span>Info-Ecke</span>
          </div>
          <p className="text-emerald-800/50 text-xs leading-relaxed font-medium">Aktuell werden besonders viele Fachkräfte für die <b>pädiatrische Therapie</b> gesucht.</p>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
