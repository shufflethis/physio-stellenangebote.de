
import React from 'react';
import { MapPin, Clock, Star, ChevronRight, Zap } from 'lucide-react';
import { Job } from '../types';

interface JobCardProps {
  job: Job;
}

const JobCard: React.FC<JobCardProps> = ({ job }) => {
  return (
    <div className="physio-card p-8 flex flex-col md:flex-row items-center gap-8 cursor-pointer group">
      <div className="w-24 h-24 rounded-[2rem] bg-emerald-50 flex-shrink-0 flex items-center justify-center border border-emerald-100 overflow-hidden shadow-inner transform group-hover:rotate-3 transition-transform">
        <img src={job.logo} alt={job.company} className="w-full h-full object-cover opacity-90 group-hover:opacity-100 transition-opacity" />
      </div>
      
      <div className="flex-grow text-center md:text-left">
        <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 mb-4">
          <div>
            <h3 className="text-2xl font-black text-emerald-950 group-hover:text-emerald-600 transition-colors mb-1 font-brand leading-none">
              {job.title}
            </h3>
            <p className="text-amber-600 font-bold text-sm flex items-center justify-center md:justify-start gap-1">
              <Star size={14} fill="currentColor" /> {job.company}
            </p>
          </div>
          <div className="bg-emerald-950 text-white font-black text-lg px-6 py-2 rounded-2xl shadow-lg">
            {job.salary}
          </div>
        </div>
        
        <div className="flex flex-wrap justify-center md:justify-start gap-6 text-sm font-bold text-emerald-900/40 mb-6">
          <span className="flex items-center gap-2">
            <MapPin size={18} className="text-emerald-400" />
            {job.location}
          </span>
          <span className="flex items-center gap-2">
            <Clock size={18} className="text-emerald-400" />
            {job.type}
          </span>
          <span className="text-emerald-400 font-medium italic">{job.postedAt}</span>
        </div>

        <div className="flex flex-wrap justify-center md:justify-start gap-2">
          {['MT / MLD', 'Hausbesuche', 'Fortbildungstage'].map(tag => (
            <span key={tag} className="bg-white text-emerald-700 px-3 py-1.5 rounded-xl text-[10px] font-black uppercase tracking-widest border border-emerald-100 flex items-center gap-1.5 shadow-sm">
              <Zap size={12} className="text-amber-500" fill="currentColor" /> {tag}
            </span>
          ))}
        </div>
      </div>
      
      <div className="flex-shrink-0">
        <div className="w-14 h-14 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center group-hover:bg-emerald-600 group-hover:text-white transition-all border border-emerald-100 shadow-inner">
          <ChevronRight size={32} />
        </div>
      </div>
    </div>
  );
};

export default JobCard;
