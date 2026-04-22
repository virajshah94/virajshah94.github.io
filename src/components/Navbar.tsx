import React, { useState } from 'react';
import { useCursor } from '../context/CursorContext';
import { sharedStyles } from '../config/styles';

const NAV = ["Home", "About", "Projects", "Skills", "Experience", "Contact"];

const Navbar: React.FC = () => {
  const [active, setActive] = useState("Home");
  const { setCursorBig } = useCursor();

  const scrollTo = (section: string) => {
    setActive(section);
    const el = document.getElementById(section.toLowerCase());
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  const navStyles = {
    nav: {
      position: "fixed" as const,
      top: 0, left: 0, right: 0,
      zIndex: 100,
      background: "rgba(10,10,15,0.85)",
      backdropFilter: "blur(16px)",
      borderBottom: "1px solid rgba(255,255,255,0.06)",
      padding: "0 5%",
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      height: 64,
    },
    logo: {
      fontFamily: "'Playfair Display', serif",
      fontSize: 22,
      fontWeight: 700,
      color: "#00ffc8",
      letterSpacing: 1,
      cursor: "pointer",
    },
    navLinks: {
      display: "flex",
      gap: 8,
    },
    navLink: (isActive: boolean) => ({
      padding: "6px 16px",
      borderRadius: 20,
      fontSize: 14,
      fontWeight: 500,
      cursor: "pointer",
      background: isActive ? "rgba(0,255,200,0.12)" : "transparent",
      color: isActive ? "#00ffc8" : "#94a3b8",
      border: isActive ? "1px solid rgba(0,255,200,0.3)" : "1px solid transparent",
      transition: "all 0.2s",
    }),
  };

  return (
    <nav style={navStyles.nav}>
      <div style={navStyles.logo} onClick={() => scrollTo("Home")}>VS.</div>
      <div className="nav-links" style={navStyles.navLinks}>
        {NAV.map((n) => (
          <div
            key={n}
            className="nav-link"
            style={navStyles.navLink(active === n)}
            onClick={() => scrollTo(n)}
            onMouseEnter={() => setCursorBig(true)}
            onMouseLeave={() => setCursorBig(false)}
          >
            {n}
          </div>
        ))}
      </div>
      <button
        className="btn-primary"
        style={{ ...sharedStyles.btnPrimary, padding: "10px 22px", fontSize: 13, marginRight: 0 }}
        onMouseEnter={() => setCursorBig(true)}
        onMouseLeave={() => setCursorBig(false)}
        onClick={() => scrollTo("Contact")}
      >
        Hire Me →
      </button>
    </nav>
  );
};

export default Navbar;
