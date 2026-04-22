import React, { useState } from 'react';
import AnimSection from './AnimSection';
import { portfolioData } from '../config/data';
import { sharedStyles } from '../config/styles';

const Skills: React.FC = () => {
  const [skillHover, setSkillHover] = useState<number | null>(null);

  const skillStyles = {
    skillRow: {
      marginBottom: 24,
    },
    skillLabel: {
      display: "flex",
      justifyContent: "space-between",
      marginBottom: 8,
      fontSize: 14,
      color: "#cbd5e1",
      fontWeight: 500,
    },
    skillTrack: {
      height: 6,
      background: "rgba(255,255,255,0.07)",
      borderRadius: 10,
      overflow: "hidden",
    },
  };

  return (
    <section id="skills" style={{ ...sharedStyles.section, background: "rgba(255,255,255,0.01)" }}>
      <AnimSection>
        <div style={sharedStyles.sectionTag}>03. Skills</div>
        <h2 style={sharedStyles.sectionTitle}>What I Work With</h2>
        <div style={sharedStyles.divider} />
      </AnimSection>
      <AnimSection>
        <div style={{ maxWidth: 600 }}>
          {portfolioData.skills.map((s, i) => (
            <div
              key={s.name}
              style={skillStyles.skillRow}
              onMouseEnter={() => setSkillHover(i)}
              onMouseLeave={() => setSkillHover(null)}
            >
              <div style={skillStyles.skillLabel}>
                <span style={{ color: skillHover === i ? "#00ffc8" : "#cbd5e1", transition: "color 0.2s" }}>{s.name}</span>
                <span style={{ color: "#00ffc8", fontWeight: 700 }}>{s.level}%</span>
              </div>
              <div style={skillStyles.skillTrack}>
                <div
                  style={{
                    height: "100%",
                    width: `${s.level}%`,
                    background: `linear-gradient(90deg, #00ffc8, #a78bfa)`,
                    borderRadius: 10,
                    transition: "width 1.2s ease",
                    boxShadow: skillHover === i ? "0 0 12px rgba(0,255,200,0.6)" : "none",
                  }}
                />
              </div>
            </div>
          ))}
        </div>
      </AnimSection>
    </section>
  );
};

export default Skills;
