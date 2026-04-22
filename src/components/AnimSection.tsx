import React, { useRef, ReactNode } from "react";
import { useInView } from "../hooks/useInView";

interface AnimSectionProps {
  children: ReactNode;
  className?: string;
  style?: React.CSSProperties;
}

const AnimSection: React.FC<AnimSectionProps> = ({ children, className = "", style = {} }) => {
  const ref = useRef<HTMLDivElement>(null);
  const visible = useInView(ref);

  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(40px)",
        transition: "opacity 0.7s ease, transform 0.7s ease",
        ...style
      }}
    >
      {children}
    </div>
  );
};

export default AnimSection;
