import React from 'react';
import { portfolioData } from '../config/data';

const Footer: React.FC = () => {
  const footerStyles = {
    footer: {
      textAlign: "center" as const,
      padding: "40px 5%",
      borderTop: "1px solid rgba(255,255,255,0.06)",
      color: "#475569",
      fontSize: 13,
      background: "#0a0a0f",
    },
  };

  return (
    <footer style={footerStyles.footer}>
      <p>Designed & Built with ❤️ by <span style={{ color: "#00ffc8" }}>{portfolioData.name}</span> · {new Date().getFullYear()}</p>
    </footer>
  );
};

export default Footer;
