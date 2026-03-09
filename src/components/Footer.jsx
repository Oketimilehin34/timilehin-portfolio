import React from 'react';

export default function Footer() {
  return (
    <footer className="py-12 border-t border-slate-800 bg-lab-bg text-center">
      <div className="max-w-6xl mx-auto px-6">
        <div className="font-mono text-[10px] text-slate-500 tracking-[0.2em] uppercase">
          System Status: Stable // Built by Oluwatimilehin Amos
        </div>
        <div className="mt-4 text-slate-600 text-xs">
          &copy; {new Date().getFullYear()} Lagos State University // Computer Science
        </div>
      </div>
    </footer>
  );
}