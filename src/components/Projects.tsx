import React from 'react';
import AnimSection from './AnimSection';
import { useCursor } from '../context/CursorContext';
import { portfolioData } from '../config/data';
import { sharedStyles } from '../config/styles';

const Projects: React.FC = () => {
  const { setCursorBig } = useCursor();

  const projStyles = {
    projectGrid: {
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
      gap: 24,
    },
    projectCard: (color: string) => ({
      background: "rgba(255,255,255,0.03)",
      border: "1px solid rgba(255,255,255,0.07)",
      borderRadius: 20,
      padding: 28,
      cursor: "pointer",
      transition: "transform 0.3s, box-shadow 0.3s, border-color 0.3s",
      position: "relative" as const,
      overflow: "hidden" as const,
    }),
    projectEmoji: {
      fontSize: 36,
      marginBottom: 16,
      display: "block",
    },
    projectTitle: {
      fontSize: 18,
      fontWeight: 700,
      color: "#f1f5f9",
      marginBottom: 10,
    },
    projectDesc: {
      fontSize: 14,
      color: "#94a3b8",
      lineHeight: 1.7,
      marginBottom: 20,
    },
    techTag: (color: string) => ({
      display: "inline-block",
      background: `${color}18`,
      color: color,
      border: `1px solid ${color}40`,
      borderRadius: 12,
      padding: "3px 10px",
      fontSize: 12,
      fontWeight: 600,
      marginRight: 6,
      marginBottom: 6,
    }),
  };

  return (
    <section id="projects" style={sharedStyles.section}>
      <AnimSection>
        <div style={sharedStyles.sectionTag}>02. Work</div>
        <h2 style={sharedStyles.sectionTitle}>Featured Projects</h2>
        <div style={sharedStyles.divider} />
      </AnimSection>
      <AnimSection>
        <div style={projStyles.projectGrid}>
          {portfolioData.projects.map((p) => (
            <div
              key={p.title}
              className="project-card"
              style={projStyles.projectCard(p.color)}
              onMouseEnter={() => setCursorBig(true)}
              onMouseLeave={() => setCursorBig(false)}
            >
              <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: 3, background: `linear-gradient(90deg, ${p.color}, transparent)`, borderRadius: "20px 20px 0 0" }} />
              <span style={projStyles.projectEmoji}>{p.emoji}</span>
              <div style={projStyles.projectTitle}>{p.title}</div>
              <p style={projStyles.projectDesc}>{p.desc}</p>
              <div>
                {p.tech.map((t) => (
                  <span key={t} style={projStyles.techTag(p.color)}>{t}</span>
                ))}
              </div>
              <div style={{ marginTop: 20, fontSize: 13, color: p.color, fontWeight: 600 }}>
                View Project →
              </div>
            </div>
          ))}
        </div>
      </AnimSection>
    </section>
  );
};

export default Projects;
