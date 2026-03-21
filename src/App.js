import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import NeuroLab from './pages/NeuroLab';
// 1. ADD THE IMPORT HERE AT THE TOP
import ProjectDetail from './pages/ProjectDetail';

function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col bg-lab-bg text-slate-100">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/projects" element={<Projects />} />
            {/* 2. ADD THE ROUTE HERE INSIDE THE ROUTES BLOCK */}
            <Route path="/projects/:id" element={<ProjectDetail />} />
            <Route path="/lab" element={<NeuroLab />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;