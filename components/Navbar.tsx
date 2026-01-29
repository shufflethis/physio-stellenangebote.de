
import React from 'react';
import { User, Activity } from 'lucide-react';

const Navbar: React.FC = () => {
  return (
    <nav className="h-24 flex items-center bg-white/80 backdrop-blur-xl border-b border-emerald-50 sticky top-0 z-50 px-4">
      <div className="max-w-7xl mx-auto w-full flex justify-between items-center">
        <div className="flex items-center gap-3 cursor-pointer group">
          <div className="bg-emerald-600 text-white p-2.5 rounded-2xl shadow-lg shadow-emerald-100 group-hover:scale-110 transition-transform">
            <Activity size={26} />
          </div>
          <span className="text-2xl font-black tracking-tight text-emerald-950 font-brand">
            PHYSIO<span className="text-emerald-600">STELLEN</span>
          </span>
        </div>
        
        <div className="hidden lg:flex gap-10 font-bold text-emerald-900/40 uppercase text-xs tracking-[0.2em]">
          <a href="#" className="hover:text-emerald-600 transition-colors">Jobs finden</a>
          <a href="#" className="hover:text-emerald-600 transition-colors">Praxis-Check</a>
          <a href="#" className="hover:text-emerald-600 transition-colors">Fortbildung</a>
        </div>

        <div className="flex items-center gap-4">
          <button className="bg-emerald-950 text-white px-8 py-3 rounded-full font-bold hover:bg-emerald-900 transition-all flex items-center gap-2 shadow-xl shadow-emerald-200">
            <User size={18} />
            <span>Mein Account</span>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
