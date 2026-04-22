import { useState, useEffect, RefObject } from "react";

export function useInView(ref: RefObject<HTMLElement>, threshold = 0.15) {
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) setInView(true);
      },
      { threshold }
    );

    if (ref.current) {
      obs.observe(ref.current);
    }

    return () => obs.disconnect();
  }, [ref, threshold]);

  return inView;
}
