import React, { useState, useEffect } from 'react';
import AnimSection from './AnimSection';
import { useCursor } from '../context/CursorContext';
import { portfolioData } from '../config/data';
import { sharedStyles } from '../config/styles';

const Hero: React.FC = () => {
  const { setCursorBig } = useCursor();
  
  const [typeIndex, setTypeIndex] = useState(0);
  const roles = ["Developer.", "Designer.", "Leader.", "Architect."];
  const [typed, setTyped] = useState("");
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const word = roles[typeIndex];
    let timeout: ReturnType<typeof setTimeout>;
    if (!deleting && typed.length < word.length) {
      timeout = setTimeout(() => setTyped(word.slice(0, typed.length + 1)), 100);
    } else if (!deleting && typed.length === word.length) {
      timeout = setTimeout(() => setDeleting(true), 1500);
    } else if (deleting && typed.length > 0) {
      timeout = setTimeout(() => setTyped(word.slice(0, typed.length - 1)), 50);
    } else if (deleting && typed.length === 0) {
      setDeleting(false);
      setTypeIndex((i) => (i + 1) % roles.length);
    }
    return () => clearTimeout(timeout);
  }, [typed, deleting, typeIndex]);

  const heroStyles = {
    hero: {
      minHeight: "100vh",
      display: "flex",
      flexDirection: "column" as const,
      justifyContent: "center",
      padding: "0 8%",
      position: "relative" as const,
      overflow: "hidden",
    },
    heroGrid: {
      position: "absolute" as const, inset: 0,
      backgroundImage: "linear-gradient(rgba(0,255,200,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(0,255,200,0.03) 1px, transparent 1px)",
      backgroundSize: "60px 60px",
      pointerEvents: "none" as const,
    },
    heroBadge: {
      display: "inline-flex",
      alignItems: "center",
      gap: 8,
      background: "rgba(0,255,200,0.08)",
      border: "1px solid rgba(0,255,200,0.2)",
      borderRadius: 20,
      padding: "6px 16px",
      fontSize: 13,
      color: "#00ffc8",
      marginBottom: 24,
      width: "fit-content",
    },
    heroName: {
      fontSize: "clamp(42px, 7vw, 80px)",
      fontFamily: "'Playfair Display', serif",
      fontWeight: 800,
      lineHeight: 1.1,
      marginBottom: 12,
      background: "linear-gradient(135deg, #ffffff 40%, #00ffc8 100%)",
      WebkitBackgroundClip: "text",
      WebkitTextFillColor: "transparent",
    },
    heroType: {
      fontSize: "clamp(22px, 4vw, 44px)",
      color: "#64748b",
      fontWeight: 400,
      marginBottom: 28,
      minHeight: 56,
    },
    typedWord: {
      color: "#00ffc8",
      fontWeight: 700,
    },
    cursor2: {
      display: "inline-block",
      width: 3,
      height: "1em",
      background: "#00ffc8",
      marginLeft: 2,
      verticalAlign: "middle",
      animation: "blink 1s step-end infinite",
    },
    heroSub: {
      maxWidth: 520,
      color: "#94a3b8",
      fontSize: 16,
      lineHeight: 1.8,
      marginBottom: 40,
    },
  };

  const scrollTo = (section: string) => {
    const el = document.getElementById(section);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="home" style={heroStyles.hero}>
      <div style={heroStyles.heroGrid} />
      {/* Floating orbs */}
      <div style={{ position: "absolute", top: "15%", right: "10%", width: 300, height: 300, borderRadius: "50%", background: "radial-gradient(circle, rgba(0,255,200,0.07) 0%, transparent 70%)", pointerEvents: "none", animation: "float 6s ease-in-out infinite" }} />
      <div style={{ position: "absolute", bottom: "20%", right: "25%", width: 200, height: 200, borderRadius: "50%", background: "radial-gradient(circle, rgba(167,139,250,0.07) 0%, transparent 70%)", pointerEvents: "none", animation: "float 8s ease-in-out infinite reverse" }} />

      <AnimSection>
        <div style={heroStyles.heroBadge}>
          <span style={{ width: 8, height: 8, borderRadius: "50%", background: "#00ffc8", display: "inline-block", animation: "pulse 2s infinite" }} />
          Available for Freelance & Full-time
        </div>
        <h1 style={heroStyles.heroName}>{portfolioData.name}</h1>
        <div style={heroStyles.heroType}>
          A passionate{" "}
          <span style={heroStyles.typedWord}>{typed}</span>
          <span style={heroStyles.cursor2} />
        </div>
        <p style={heroStyles.heroSub}>{portfolioData.tagline}</p>
        <div>
          <button
            className="btn-primary"
            style={sharedStyles.btnPrimary}
            onMouseEnter={() => setCursorBig(true)}
            onMouseLeave={() => setCursorBig(false)}
            onClick={() => scrollTo("projects")}
          >
            View My Work
          </button>
          <button
            className="btn-secondary"
            style={sharedStyles.btnSecondary}
            onMouseEnter={() => setCursorBig(true)}
            onMouseLeave={() => setCursorBig(false)}
            onClick={() => window.open(portfolioData.contact.linkedin, '_blank')}
          >
            LinkedIn
          </button>
        </div>
      </AnimSection>
    </section>
  );
};

export default Hero;
