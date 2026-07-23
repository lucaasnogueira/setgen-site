"use client";

import { useEffect, useState } from "react";

export function useCountUp(targets, start, duration = 1500) {
  const [values, setValues] = useState(() => targets.map(() => 0));

  useEffect(() => {
    if (!start) return;
    const startTime = performance.now();
    let raf;
    const step = (now) => {
      const p = Math.min(1, (now - startTime) / duration);
      const ease = 1 - Math.pow(1 - p, 3);
      setValues(targets.map((v) => v * ease));
      if (p < 1) raf = requestAnimationFrame(step);
    };
    raf = requestAnimationFrame(step);
    return () => cancelAnimationFrame(raf);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [start, duration]);

  return values;
}
