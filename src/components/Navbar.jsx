import React, { useState } from 'react';
import { Menu, X, Terminal } from 'lucide-react';
// Import Link correctly
import { Link } from 'react-router-dom';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  // Helper to close menu on click (for mobile)
  const closeMenu = () => setIsOpen(false);

  return (
    <nav className="fixed top-0 w-full z-50 bg-[#050505]/80 backdrop-blur-md border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        
        {/* Logo - Link to Home */}
        <Link 
          to="/" 
          className="text-lab-cyan font-mono font-bold tracking-tighter flex items-center gap-2"
          onClick={closeMenu}
        >
          <Terminal size={18} />
          {`>_ AMOS_CORE_V2.0`}
        </Link>

        {/* Mobile Menu Toggle Button */}
        <button 
          className="md:hidden text-slate-400 hover:text-white transition-colors"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Desktop Links - Functional with Link */}
        <div className="hidden md:flex gap-8 font-mono text-[10px] tracking-widest uppercase">
          <Link to="/" className="hover:text-lab-cyan transition-colors">01_Home</Link>
          <Link to="/about" className="hover:text-lab-cyan transition-colors">02_About</Link>
          <Link to="/projects" className="hover:text-lab-cyan transition-colors">03_Projects</Link>
          <Link to="/lab" className="text-lab-green font-bold hover:brightness-110 transition-all">04_Lab</Link>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isOpen && (
        <div className="md:hidden bg-[#0a0a0a] border-b border-slate-800 animate-in slide-in-from-top duration-300">
          <div className="flex flex-col p-6 gap-6 font-mono text-xs tracking-widest uppercase">
            <Link onClick={closeMenu} to="/">01_Home</Link>
            <Link onClick={closeMenu} to="/about">02_About</Link>
            <Link onClick={closeMenu} to="/projects">03_Projects</Link>
            {/* The Lab link is critical for your MRI data processing demo */}
            <Link onClick={closeMenu} to="/lab" className="text-lab-green">04_Lab</Link>
          </div>
        </div>
      )}
    </nav>
  );
}