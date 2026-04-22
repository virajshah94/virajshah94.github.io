import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

interface CursorContextType {
  cursorPos: { x: number; y: number };
  cursorBig: boolean;
  setCursorBig: (big: boolean) => void;
}

const CursorContext = createContext<CursorContextType | undefined>(undefined);

export const CursorProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [cursorPos, setCursorPos] = useState({ x: -200, y: -200 });
  const [cursorBig, setCursorBig] = useState(false);

  useEffect(() => {
    const move = (e: MouseEvent) => setCursorPos({ x: e.clientX, y: e.clientY });
    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, []);

  return (
    <CursorContext.Provider value={{ cursorPos, cursorBig, setCursorBig }}>
      {children}
    </CursorContext.Provider>
  );
};

export const useCursor = () => {
  const context = useContext(CursorContext);
  if (!context) {
    throw new Error('useCursor must be used within a CursorProvider');
  }
  return context;
};
