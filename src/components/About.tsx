import React from 'react';
import AnimSection from './AnimSection';
import { portfolioData } from '../config/data';
import { sharedStyles } from '../config/styles';

const About: React.FC = () => {
  const aboutStyles = {
    aboutGrid: {
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      gap: 60,
      alignItems: "center",
    },
    avatarWrap: {
      position: "relative" as const,
      display: "flex",
      justifyContent: "center",
    },
    avatar: {
      width: 240,
      height: 240,
      borderRadius: "40% 60% 55% 45% / 50% 45% 55% 50%",
      background: "linear-gradient(135deg, #00ffc8 0%, #a78bfa 50%, #ff6b6b 100%)",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      fontSize: 80,
      boxShadow: "0 0 60px rgba(0,255,200,0.2)",
      animation: "morph 8s ease-in-out infinite, float 6s ease-in-out infinite",
    },
  };

  return (
    <section id="about" style={{ ...sharedStyles.section, background: "rgba(255,255,255,0.01)" }}>
      <AnimSection>
        <div style={sharedStyles.sectionTag}>01. About</div>
        <h2 style={sharedStyles.sectionTitle}>Who I Am</h2>
        <div style={sharedStyles.divider} />
      </AnimSection>
      <AnimSection>
        <div className="about-grid" style={aboutStyles.aboutGrid}>
          <div style={aboutStyles.avatarWrap}>
            <div style={aboutStyles.avatar}>
              👨💻
            </div>
            <div style={{ position: "absolute", inset: -16, borderRadius: "inherit", border: "1.5px dashed rgba(0,255,200,0.15)", animation: "morph 8s ease-in-out infinite reverse", pointerEvents: "none" }} />
          </div>
          <div>
            <p style={{ color: "#cbd5e1", lineHeight: 1.9, fontSize: 16, marginBottom: 28 }}>
              {portfolioData.about}
            </p>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
              {[
                ["🎯 Projects", "20+"],
                ["⭐ Experience", "8 Years"],
                ["🤝 Teams Led", "3+"],
                ["☕ Innovation", "∞"]
              ].map(([label, val]) => (
                <div key={label} style={{ background: "rgba(0,255,200,0.05)", border: "1px solid rgba(0,255,200,0.1)", borderRadius: 14, padding: "16px 20px" }}>
                  <div style={{ fontSize: 22, fontWeight: 800, color: "#00ffc8" }}>{val}</div>
                  <div style={{ fontSize: 13, color: "#64748b", marginTop: 2 }}>{label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </AnimSection>
    </section>
  );
};

export default About;
