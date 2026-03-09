import React from 'react';
import { Link } from 'react-router-dom';
import { Terminal } from 'lucide-react';

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 bg-lab-bg/80 backdrop-blur-md border-b border-slate-800 py-4">
      <div className="max-w-6xl mx-auto px-6 flex justify-between items-center font-mono text-xs">
        <Link to="/" className="flex items-center gap-2 hover:text-lab-cyan transition-colors">
          <Terminal size={16} className="text-lab-green" />
          <span>AMOS_CORE_v2.0</span>
        </Link>
        <div className="flex gap-8 uppercase tracking-widest">
          <Link to="/" className="hover:text-lab-cyan transition-colors">01_Home</Link>
          <Link to="/about" className="hover:text-lab-cyan transition-colors">02_About</Link>
          <Link to="/projects" className="hover:text-lab-cyan transition-colors">03_Projects</Link>
        </div>
      </div>
    </nav>
  );
}