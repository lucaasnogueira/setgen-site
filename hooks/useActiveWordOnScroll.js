"use client";

import { useEffect, useRef, useState } from "react";

export function useActiveWordOnScroll(count) {
  const itemRefs = useRef([]);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveIndex(Number(entry.target.dataset.wordIndex));
        });
      },
      { rootMargin: "-35% 0px -35% 0px", threshold: 0 }
    );
    itemRefs.current.forEach((el) => el && observer.observe(el));
    return () => observer.disconnect();
  }, [count]);

  return [itemRefs, activeIndex];
}
