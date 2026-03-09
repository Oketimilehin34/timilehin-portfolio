import React from 'react';
import { Link } from 'react-router-dom';
import { ExternalLink, Microscope, Globe } from 'lucide-react';

// 1. IMPORT YOUR IMAGES HERE
import mriImg from '../assets/mri-scan.png';
import lectureImg from '../assets/lecturehub-ui.png';

export default function Projects() {
  const projectList = [
    {
      id: "01",
      title: "Automated MRI Analysis Pipeline",
      category: "Research // DATICAN",
      desc: "An end-to-end tool built to process NIfTI imaging data. Utilized FSL for thalamic structure extraction.",
      tech: ["Python", "FSL", "Bash"],
      image: mriImg, // 2. ASSIGN THE IMAGE
      icon: <Microscope size={20} />
    },
    {
      id: "02",
      title: "LectureHub Repository",
      category: "Infrastructure // Academic",
      desc: "A centralized platform for LASU students to access lecture materials with secure authentication.",
      tech: ["PHP", "MySQL", "JavaScript"],
      image: lectureImg, // 2. ASSIGN THE IMAGE
      icon: <Globe size={20} />
    }
  ];

  return (
    <div className="max-w-6xl mx-auto px-6 py-20 animate-in slide-in-from-bottom-4 duration-700">
      <header className="mb-20 border-b border-slate-800 pb-10">
        <h2 className="text-4xl font-bold font-mono tracking-tighter uppercase text-lab-cyan mb-4">03_Projects</h2>
        <p className="text-slate-400 font-mono text-xs uppercase tracking-widest">Active_Repositories & Research_Logs</p>
      </header>

      <div className="space-y-24">
        {projectList.map((p) => (
          <div key={p.id} className="grid md:grid-cols-[1.2fr_1.8fr] gap-12 items-center group">
            
            {/* 3. UPDATED IMAGE BOX */}
            <div className="relative aspect-video rounded-xl border border-slate-800 overflow-hidden bg-slate-900 shadow-2xl group-hover:border-lab-cyan/50 transition-all">
              <img 
                src={p.image} 
                alt={p.title} 
                className="w-full h-full object-cover opacity-60 group-hover:opacity-100 transition-opacity duration-500"
              />
              {/* Overlay Icon */}
              <div className="absolute top-4 right-4 p-2 bg-lab-bg/80 backdrop-blur rounded border border-slate-700 text-lab-cyan">
                {p.icon}
              </div>
            </div>

            {/* Project Details */}
            <div className="flex flex-col justify-center">
              <span className="font-mono text-[10px] text-lab-green mb-2 block tracking-[0.3em] uppercase">{p.category}</span>
              <h3 className="text-3xl font-bold mb-4 italic group-hover:text-lab-cyan transition-colors">{p.title}</h3>
              <p className="text-slate-400 mb-8 leading-relaxed text-sm">
                {p.desc}
              </p>
              
              <div className="flex flex-wrap gap-2 mb-8">
                {p.tech.map(t => (
                  <span key={t} className="px-2 py-1 bg-lab-panel rounded font-mono text-[9px] text-slate-300 border border-slate-800">
                    {t}
                  </span>
                ))}
              </div>

              <div>
                <Link 
                  to={`/projects/${p.id}`} 
                  className="inline-flex items-center gap-2 text-xs font-mono border border-slate-700 px-6 py-3 hover:bg-white hover:text-slate-900 transition-all uppercase tracking-widest"
                >
                  View_Technical_Specs <ExternalLink size={14} />
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}