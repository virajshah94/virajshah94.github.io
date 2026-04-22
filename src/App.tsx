import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { CursorProvider, useCursor } from './context/CursorContext';

const AppContent = () => {
  const { cursorPos, cursorBig } = useCursor();

  const styles = {
    root: {
      background: "#0a0a0f",
      color: "#e2e8f0",
      fontFamily: "'DM Sans', 'Segoe UI', sans-serif",
      minHeight: "100vh",
      overflowX: "hidden" as const,
      position: "relative" as const,
    },
    cursor: {
      position: "fixed" as const,
      top: cursorPos.y - (cursorBig ? 24 : 10),
      left: cursorPos.x - (cursorBig ? 24 : 10),
      width: cursorBig ? 48 : 20,
      height: cursorBig ? 48 : 20,
      borderRadius: "50%",
      background: cursorBig ? "rgba(0,255,200,0.15)" : "rgba(0,255,200,0.7)",
      border: cursorBig ? "2px solid #00ffc8" : "none",
      pointerEvents: "none" as const,
      zIndex: 9999,
      transition: "width 0.2s, height 0.2s, top 0.05s, left 0.05s, background 0.2s",
      mixBlendMode: "screen" as const,
    }
  };

  return (
    <div style={styles.root}>
      {/* Custom Cursor */}
      <div style={styles.cursor} />

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700;800&family=DM+Sans:wght@400;500;600;700&display=swap');
        * { margin: 0; padding: 0; box-sizing: border-box; }
        body { cursor: none !important; background: #0a0a0f; }
        @keyframes blink { 0%,100%{opacity:1} 50%{opacity:0} }
        @keyframes morph {
          0%,100% { border-radius: 40% 60% 55% 45% / 50% 45% 55% 50%; }
          33% { border-radius: 60% 40% 45% 55% / 55% 60% 40% 45%; }
          66% { border-radius: 50% 50% 60% 40% / 45% 55% 50% 50%; }
        }
        @keyframes float { 0%,100%{transform:translateY(0)} 50%{transform:translateY(-12px)} }
        @keyframes pulse { 0%,100%{box-shadow:0 0 20px rgba(0,255,200,0.3)} 50%{box-shadow:0 0 40px rgba(0,255,200,0.6)} }
        .project-card:hover { transform: translateY(-6px); box-shadow: 0 20px 40px rgba(0,0,0,0.4) !important; }
        .btn-primary:hover { transform: scale(1.04); box-shadow: 0 0 30px rgba(0,255,200,0.5) !important; }
        .btn-secondary:hover { background: rgba(0,255,200,0.07) !important; border-color: rgba(0,255,200,0.6) !important; }
        .nav-link:hover { color: #00ffc8 !important; }
        input:focus, textarea:focus { border-color: rgba(0,255,200,0.5) !important; outline: none; }
        ::-webkit-scrollbar { width: 5px; }
        ::-webkit-scrollbar-track { background: #0a0a0f; }
        ::-webkit-scrollbar-thumb { background: #00ffc8; border-radius: 10px; }
        @media (max-width: 768px) {
          .about-grid { grid-template-columns: 1fr !important; }
          .contact-grid { grid-template-columns: 1fr !important; }
          .nav-links { display: none !important; }
        }
      `}</style>
      
      <Navbar />
      <main>
        <Hero />
        <About />
        <Projects />
        <Skills />
        <Experience />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

function App() {
  return (
    <CursorProvider>
      <AppContent />
    </CursorProvider>
  );
}

export default App;
