import React from 'react';
import AnimSection from './AnimSection';
import { useCursor } from '../context/CursorContext';
import { portfolioData } from '../config/data';
import { sharedStyles } from '../config/styles';

const Contact: React.FC = () => {
  const { setCursorBig } = useCursor();

  const contactStyles = {
    contactGrid: {
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      gap: 40,
      alignItems: "start",
    },
    inputWrap: {
      marginBottom: 20,
    },
    input: {
      width: "100%",
      background: "rgba(255,255,255,0.04)",
      border: "1px solid rgba(255,255,255,0.1)",
      borderRadius: 12,
      padding: "14px 18px",
      color: "#f1f5f9",
      fontSize: 14,
      outline: "none",
      transition: "border-color 0.2s",
      boxSizing: "border-box" as const,
    },
    contactInfo: {
      display: "flex",
      flexDirection: "column" as const,
      gap: 20,
    },
    contactItem: {
      display: "flex",
      alignItems: "center",
      gap: 16,
      padding: "16px 20px",
      background: "rgba(255,255,255,0.03)",
      border: "1px solid rgba(255,255,255,0.07)",
      borderRadius: 14,
    },
    contactIcon: {
      fontSize: 22,
      width: 40,
      textAlign: "center" as const,
    },
  };

  return (
    <section id="contact" style={{ ...sharedStyles.section, background: "rgba(255,255,255,0.01)" }}>
      <AnimSection>
        <div style={sharedStyles.sectionTag}>05. Contact</div>
        <h2 style={sharedStyles.sectionTitle}>Let's Work Together</h2>
        <div style={sharedStyles.divider} />
      </AnimSection>
      <AnimSection>
        <div className="contact-grid" style={contactStyles.contactGrid}>
          <div>
            <p style={{ color: "#94a3b8", lineHeight: 1.8, marginBottom: 32, fontSize: 15 }}>
              Have a project in mind or want to chat? My inbox is always open. I'll get back to you within 24 hours.
            </p>
            <div style={contactStyles.contactInfo}>
              {[
                { icon: "📧", label: "Email", val: portfolioData.contact.email },
                { icon: "💼", label: "LinkedIn", val: portfolioData.contact.linkedin },
                { icon: "🐙", label: "GitHub", val: portfolioData.contact.github },
              ].map((c) => (
                <div key={c.label} style={contactStyles.contactItem}
                  onMouseEnter={() => setCursorBig(true)}
                  onMouseLeave={() => setCursorBig(false)}
                >
                  <span style={contactStyles.contactIcon}>{c.icon}</span>
                  <div>
                    <div style={{ fontSize: 12, color: "#64748b", marginBottom: 2 }}>{c.label}</div>
                    <div style={{ fontSize: 14, color: "#00ffc8", fontWeight: 600 }}>{c.val}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div>
            {[["Your Name", "text"], ["Your Email", "email"], ["Subject", "text"]].map(([placeholder, type]) => (
              <div key={placeholder} style={contactStyles.inputWrap}>
                <input
                  type={type}
                  placeholder={placeholder}
                  style={contactStyles.input}
                  onFocus={(e) => (e.target.style.borderColor = "rgba(0,255,200,0.5)")}
                  onBlur={(e) => (e.target.style.borderColor = "rgba(255,255,255,0.1)")}
                />
              </div>
            ))}
            <div style={contactStyles.inputWrap}>
              <textarea
                placeholder="Your Message"
                rows={4}
                style={{ ...contactStyles.input, resize: "vertical", minHeight: 100 }}
                onFocus={(e) => (e.target.style.borderColor = "rgba(0,255,200,0.5)")}
                onBlur={(e) => (e.target.style.borderColor = "rgba(255,255,255,0.1)")}
              />
            </div>
            <button
              className="btn-primary"
              style={{ ...sharedStyles.btnPrimary, width: "100%" }}
              onMouseEnter={() => setCursorBig(true)}
              onMouseLeave={() => setCursorBig(false)}
            >
              Send Message ✉️
            </button>
          </div>
        </div>
      </AnimSection>
    </section>
  );
};

export default Contact;
