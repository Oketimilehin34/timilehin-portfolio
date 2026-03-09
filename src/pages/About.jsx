import React from 'react';
import { User, GraduationCap, MapPin, Briefcase } from 'lucide-react';
// 1. Import your photo from the assets folder
import profileImg from '../assets/profile.webp'; 

export default function About() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-20 animate-in fade-in duration-1000">
      <h2 className="text-4xl font-bold font-mono text-lab-cyan mb-12 uppercase tracking-tighter">02_Biography</h2>
      
      <div className="grid md:grid-cols-[1.5fr_2fr] gap-12 items-start">
        {/* Profile Sidebar */}
        <div className="space-y-6 sticky top-24">
          <div className="relative group">
            {/* Decorative background element for the "Lab" look */}
            <div className="absolute -inset-1 bg-gradient-to-r from-lab-cyan to-lab-green rounded-2xl blur opacity-25 group-hover:opacity-50 transition duration-1000"></div>
            
            {/* 2. The actual Image tag */}
            <div className="relative aspect-[4/5] overflow-hidden rounded-2xl border border-slate-700 bg-slate-800">
              <img 
                src={profileImg} 
                alt="Oluwatimilehin Amos" 
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500"
              />
            </div>
          </div>

          <div className="space-y-4 font-mono text-xs text-slate-400 p-4 bg-lab-panel/50 rounded-xl border border-slate-800">
            <div className="flex items-center gap-2 text-white">
              <User size={14} className="text-lab-cyan"/> O. Timilehin Amos
            </div>
            <div className="flex items-center gap-2">
              <GraduationCap size={14} className="text-lab-cyan"/> CS @ LASU
            </div>
            <div className="flex items-center gap-2">
              <MapPin size={14} className="text-lab-cyan"/> Lagos, Nigeria
            </div>
          </div>
        </div>

        {/* Story Section (remains the same as before) */}
        <div className="space-y-12">
          <section>
            <h3 className="text-xl font-bold mb-4 text-white uppercase tracking-tight">The Mission</h3>
            <p className="text-slate-400 leading-relaxed text-sm md:text-base">
              I am a Full Stack Developer and Computational Scientist-in-training at Lagos State University. 
              My work focuses on creating high-performance software for scientific research, 
              specifically medical data analysis and neuroimaging.
            </p>
          </section>

          {/* Experience Timeline... */}
          <section>
            <h3 className="text-xl font-bold mb-6 flex items-center gap-2 text-white uppercase tracking-tight">
              <Briefcase size={20} className="text-lab-cyan" /> Experience Timeline
            </h3>
            <div className="border-l border-slate-800 space-y-8 ml-2">
               <div className="relative pl-8">
                <div className="absolute left-[-5px] top-1 w-2 h-2 rounded-full bg-lab-green"></div>
                <h4 className="text-lab-green font-mono text-[10px] uppercase tracking-widest font-bold">2024 - PRESENT</h4>
                <p className="text-white font-bold mt-1">Research Intern @ DATICAN</p>
                <p className="text-xs text-slate-500 mt-2">Focused on Neuroimaging (MRI) analysis using FSL and Python. Developed visualization dashboards to interpret volumetric data.</p>
              </div>
              <div className="relative pl-8">
                <div className="absolute left-[-5px] top-1 w-2 h-2 rounded-full bg-slate-700"></div>
                <h4 className="text-slate-500 font-mono text-[10px] uppercase tracking-widest font-bold">2020 - 2026</h4>
                <p className="text-white font-bold mt-1">B.Sc. Computer Science @ LASU</p>
                <p className="text-xs text-slate-500 mt-2">Specializing in Artificial Intelligence, Numerical Analysis, and Human-Computer Interaction.</p>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}