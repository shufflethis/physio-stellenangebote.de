
import React from 'react';
import { Search, MapPin, Sparkles } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="pt-20 pb-28 px-4 text-center relative overflow-hidden">
      <div className="max-w-5xl mx-auto relative z-10">
        <div className="inline-flex items-center gap-2 bg-emerald-100 border border-emerald-200 px-5 py-2 rounded-full text-emerald-700 text-sm font-bold mb-10 animate-bounce-slow">
          <Sparkles size={16} />
          Deutschlands Portal für Therapieberufe
        </div>
        <h1 className="text-6xl md:text-8xl font-black text-emerald-950 mb-8 leading-[0.9] font-brand tracking-tighter">
          Bringe <span className="text-emerald-600">Heilung</span> <br/>
          in den Alltag.
        </h1>
        <p className="text-xl text-emerald-800/60 mb-16 max-w-2xl mx-auto font-medium leading-relaxed">
          Finde Stellenangebote in Physiotherapie-Praxen und Kliniken, die Work-Life-Balance und fachliche Weiterbildung wirklich leben.
        </p>
        
        <div className="max-w-4xl mx-auto bg-white p-4 rounded-[2.5rem] shadow-2xl flex flex-col md:flex-row items-center gap-4 border border-emerald-50">
          <div className="flex-grow flex items-center px-6 py-4 w-full bg-emerald-50/50 rounded-full">
            <Search className="text-emerald-400 mr-4" size={24} />
            <input 
              type="text" 
              placeholder="Spezialisierung (z.B. Manuelle Therapie)" 
              className="w-full bg-transparent focus:outline-none text-emerald-900 font-bold placeholder-emerald-300"
            />
          </div>
          <div className="flex-grow flex items-center px-6 py-4 w-full bg-emerald-50/50 rounded-full">
            <MapPin className="text-emerald-400 mr-4" size={24} />
            <input 
              type="text" 
              placeholder="Region" 
              className="w-full bg-transparent focus:outline-none text-emerald-900 font-bold placeholder-emerald-300"
            />
          </div>
          <button className="w-full md:w-auto bg-emerald-600 hover:bg-emerald-700 text-white font-black px-12 py-5 rounded-full transition-all shadow-xl shadow-emerald-200">
            Finden
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
