import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { 
  ChevronLeft, 
  Database, 
  Terminal, 
  Code, 
  Cpu, 
  Github, 
  Lock, 
  ShieldCheck 
} from 'lucide-react';

export default function ProjectDetail() {
  const { id } = useParams();

  // Integrated project database
  const projectData = {
    "01": {
      id: "01",
      title: "Automated MRI Analysis Pipeline",
      context: "DATICAN Medical Research",
      problem: "Manual volumetric analysis of thalamic structures is time-consuming and prone to human error in clinical research environments.",
      solution: "Developed a Python-based pipeline that interfaces with FSL (FMRIB Software Library) to automate tissue segmentation and sub-cortical volume calculation.",
      tech: ["Python", "FSL", "Bash Scripting", "NumPy"],
      github: null, // Set to null because this is private research
      status: "PRIVATE_RESEARCH_ENCLAVE",
      specs: [
        "Data Input: NIfTI (.nii.gz) MRI structural scans.",
        "Processing: FSL FIRST for subcortical structure extraction and boundary correction.",
        "Statistical Output: Automated CSV generation for thalamic volume metrics.",
        "Security: Compliant with institutional data privacy protocols."
      ]
    },
    "02": {
      id: "02",
      title: "LectureHub Repository",
      context: "Academic Infrastructure",
      problem: "Students at LASU lacked a secure, centralized hub for accessing verified lecture materials and past questions.",
      solution: "Engineered a Full Stack PHP application with a relational MySQL database to manage material distribution and secure student authentication.",
      tech: ["PHP", "MySQL", "Bootstrap", "JavaScript"],
      github: "https:github.com/Oketimilehin34/Lecturehub", // REPLACE WITH YOUR ACTUAL GITHUB LINK
      status: "PUBLIC_REPOSITORY",
      specs: [
        "Backend: Procedural PHP with secure session management.",
        "Database: Relational schema for Users, Courses, and File metadata.",
        "Authentication: Custom password hashing and role-based access control.",
        "Frontend: Responsive UI built with Bootstrap 5 and jQuery."
      ]
    }
  };

  const project = projectData[id];

  // Error handling if ID doesn't exist
  if (!project) {
    return (
      <div className="max-w-4xl mx-auto px-6 py-40 text-center font-mono">
        <h1 className="text-red-500 mb-4 text-2xl">ERROR_404: PROJECT_NOT_FOUND</h1>
        <Link to="/projects" className="text-lab-cyan hover:underline">RETURN_TO_BASE</Link>
      </div>
    );
  }

  return (
    <div className="max-w-5xl mx-auto px-6 py-20 animate-in fade-in slide-in-from-bottom-5 duration-700">
      {/* Back Button */}
      <Link to="/projects" className="text-lab-cyan flex items-center gap-2 mb-12 font-mono text-xs hover:tracking-widest transition-all">
        <ChevronLeft size={14} /> RETURN_TO_LAB_INDEX
      </Link>

      {/* Header */}
      <div className="border-l-4 border-lab-cyan pl-8 mb-16">
        <span className="font-mono text-xs text-lab-green uppercase tracking-[0.2em]">{project.context}</span>
        <h1 className="text-4xl md:text-6xl font-bold mt-2 tracking-tighter italic">{project.title}</h1>
      </div>

      <div className="grid md:grid-cols-[2fr_1fr] gap-12">
        {/* Left Column: Documentation */}
        <div className="space-y-12">
          <section>
            <h3 className="text-xl font-bold mb-4 flex items-center gap-2 text-white">
              <Terminal size={20} className="text-lab-cyan" /> Research Problem
            </h3>
            <p className="text-slate-400 leading-relaxed text-sm md:text-base">{project.problem}</p>
          </section>

          <section>
            <h3 className="text-xl font-bold mb-4 flex items-center gap-2 text-white">
              <Cpu size={20} className="text-lab-cyan" /> Implementation Strategy
            </h3>
            <p className="text-slate-400 leading-relaxed text-sm md:text-base">{project.solution}</p>
          </section>

          <section className="bg-lab-panel p-8 border border-slate-800 rounded-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 p-2 opacity-10">
              <Code size={100} />
            </div>
            <h3 className="text-white font-mono text-sm mb-6 flex items-center gap-2 border-b border-slate-700 pb-4">
              <Code size={18} className="text-lab-green" /> TECHNICAL_MANIFEST.LOG
            </h3>
            <ul className="space-y-4 font-mono text-[11px] md:text-xs text-slate-300">
              {project.specs.map((s, i) => (
                <li key={i} className="flex gap-3">
                  <span className="text-lab-green shrink-0">{">"}</span> {s}
                </li>
              ))}
            </ul>
          </section>
        </div>

        {/* Right Column: Sidebar & Actions */}
        <div className="space-y-8">
          {/* Action Button: Dynamic Check */}
          <div className="p-6 bg-slate-900 border border-slate-800 rounded-2xl space-y-4 shadow-xl">
            {project.github ? (
              <a 
                href={project.github} 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-3 w-full py-4 bg-white text-slate-900 rounded-xl font-bold hover:bg-lab-cyan transition-all transform active:scale-95"
              >
                <Github size={20} /> VIEW_SOURCE_CODE
              </a>
            ) : (
              <div className="flex flex-col items-center justify-center gap-3 w-full py-6 bg-slate-800/30 border border-dashed border-slate-700 text-slate-500 rounded-xl">
                <Lock size={24} className="mb-1" />
                <div className="flex items-center gap-2 font-mono text-[10px] uppercase tracking-tighter">
                  <span className="w-1.5 h-1.5 rounded-full bg-red-500 animate-pulse"></span>
                  Proprietary_Access_Only
                </div>
              </div>
            )}
            
            <div className="flex items-center justify-center gap-2 text-[10px] font-mono text-slate-500 uppercase tracking-tighter">
              <ShieldCheck size={12} /> STATUS: {project.status}
            </div>
          </div>

          {/* Tech Stack Box */}
          <div className="p-6 bg-lab-panel border border-slate-800 rounded-2xl">
            <h4 className="text-xs font-bold mb-6 flex items-center gap-2 text-lab-cyan font-mono uppercase tracking-widest">
              <Database size={14} /> Environment
            </h4>
            <div className="flex flex-wrap gap-2">
              {project.tech.map(t => (
                <span key={t} className="px-3 py-1 bg-lab-bg rounded-md border border-slate-700 font-mono text-[10px] text-slate-300">
                  {t}
                </span>
              ))}
            </div>
          </div>

          {/* Verification Note */}
          <div className="p-4 border-l-2 border-slate-700 italic">
            <p className="text-[11px] text-slate-500 leading-relaxed">
              * Verification of project milestones can be provided upon request via academic transcripts or institutional letters.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}