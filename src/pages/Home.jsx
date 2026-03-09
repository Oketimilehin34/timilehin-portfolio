import React from 'react';
import { Brain, Code, Microscope, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div className="animate-in fade-in duration-700">
      {/* Hero Section */}
      <section className="max-w-6xl mx-auto px-6 pt-24 pb-16">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-lab-green/10 border border-lab-green/20 text-lab-green font-mono text-xs mb-8">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-lab-green opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-lab-green"></span>
          </span>
          AVAILABLE_FOR_RESEARCH_PROJECTS
        </div>
        
        <h1 className="text-6xl md:text-8xl font-bold tracking-tighter mb-8 leading-none">
          Full Stack <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-lab-cyan to-blue-400 italic">
            & AI Researcher.
          </span>
        </h1>
        
        <p className="text-xl text-slate-400 max-w-2xl leading-relaxed mb-10">
          I bridge the gap between <span className="text-white">Neuroimaging methodology</span> and 
          <span className="text-white"> modern software architecture</span>. Specialized in building 
          data-intensive applications for medical and academic research.
        </p>

        <div className="flex gap-4">
          <Link to="/projects" className="bg-lab-cyan text-slate-900 px-6 py-3 rounded-lg font-bold flex items-center gap-2 hover:bg-white transition-all">
            View Projects <ChevronRight size={18} />
          </Link>
          <Link to="/about" className="border border-slate-700 px-6 py-3 rounded-lg font-bold hover:bg-slate-800 transition-all">
            About Me
          </Link>
        </div>
      </section>

      {/* Core Domains Grid */}
      <section className="max-w-6xl mx-auto px-6 py-20 grid md:grid-cols-3 gap-6">
        <div className="p-8 bg-lab-panel border border-slate-800 rounded-2xl group hover:border-lab-cyan transition-all">
          <Brain className="text-lab-cyan mb-6 group-hover:scale-110 transition-transform" size={32} />
          <h3 className="font-mono text-sm uppercase tracking-widest mb-4">AI Research</h3>
          <p className="text-slate-400 text-sm leading-relaxed">
            Neural Network optimization and medical imaging analysis. Experienced with CNNs and FSL for MRI volumetric data.
          </p>
        </div>

        <div className="p-8 bg-lab-panel border border-slate-800 rounded-2xl group hover:border-lab-cyan transition-all">
          <Code className="text-lab-cyan mb-6 group-hover:scale-110 transition-transform" size={32} />
          <h3 className="font-mono text-sm uppercase tracking-widest mb-4">Full Stack</h3>
          <p className="text-slate-400 text-sm leading-relaxed">
            Architecting robust backends with PHP/MySQL and interactive frontends with React. Focused on HCI principles.
          </p>
        </div>

        <div className="p-8 bg-lab-panel border border-slate-800 rounded-2xl group hover:border-lab-cyan transition-all">
          <Microscope className="text-lab-cyan mb-6 group-hover:scale-110 transition-transform" size={32} />
          <h3 className="font-mono text-sm uppercase tracking-widest mb-4">Computation</h3>
          <p className="text-slate-400 text-sm leading-relaxed">
            Numerical methods (LU Decomposition, Runge-Kutta) and Modeling & Simulation for scientific problem solving.
          </p>
        </div>
      </section>
    </div>
  );
}