import React from 'react';
import AnimSection from './AnimSection';
import { portfolioData } from '../config/data';
import { sharedStyles } from '../config/styles';

const Experience: React.FC = () => {
  const expStyles = {
    expItem: {
      display: "flex",
      gap: 28,
      marginBottom: 40,
    },
    expYear: {
      minWidth: 110,
      fontSize: 13,
      color: "#00ffc8",
      fontWeight: 700,
      paddingTop: 2,
    },
    expDot: {
      width: 12,
      height: 12,
      borderRadius: "50%",
      background: "#00ffc8",
      marginTop: 6,
      flexShrink: 0,
      boxShadow: "0 0 10px rgba(0,255,200,0.5)",
    },
    expLine: {
      width: 1,
      background: "rgba(0,255,200,0.15)",
      flex: 1,
      marginTop: 18,
      marginLeft: -6,
    },
  };

  return (
    <section id="experience" style={sharedStyles.section}>
      <AnimSection>
        <div style={sharedStyles.sectionTag}>04. Journey</div>
        <h2 style={sharedStyles.sectionTitle}>My Experience</h2>
        <div style={sharedStyles.divider} />
      </AnimSection>
      <AnimSection>
        <div style={{ maxWidth: 640 }}>
          {portfolioData.experience.map((e, i) => (
            <div key={e.role} style={expStyles.expItem}>
              <div>
                <div style={expStyles.expDot} />
                {i < portfolioData.experience.length - 1 && (
                  <div style={{ width: 1, height: "calc(100% - 20px)", background: "rgba(0,255,200,0.12)", marginLeft: 5.5, marginTop: 4 }} />
                )}
              </div>
              <div style={{ flex: 1 }}>
                <div style={{ fontSize: 12, color: "#00ffc8", fontWeight: 700, letterSpacing: 1, marginBottom: 4 }}>{e.year}</div>
                <div style={{ fontSize: 17, fontWeight: 700, color: "#f1f5f9", marginBottom: 2 }}>{e.role}</div>
                <div style={{ fontSize: 13, color: "#64748b", marginBottom: 8 }}>{e.company}</div>
                <p style={{ fontSize: 14, color: "#94a3b8", lineHeight: 1.7 }}>{e.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </AnimSection>
    </section>
  );
};

export default Experience;
