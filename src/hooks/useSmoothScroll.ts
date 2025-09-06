import { useCallback } from 'react';
import { animate } from 'framer-motion';

export const useSmoothScroll = () => {
  const scrollToElement = useCallback((elementId: string) => {
    const element = document.getElementById(elementId.replace('#', ''));
    if (!element) return;

    const startY = window.scrollY;
    const targetY = element.offsetTop - 80; // 80px offset for header
    const distance = targetY - startY;

    animate(0, 1, {
      duration: 1.2,
      ease: [0.25, 0.1, 0.25, 1], // Custom cubic bezier for smooth animation
      onUpdate: (progress) => {
        window.scrollTo(0, startY + distance * progress);
      },
    });
  }, []);

  return { scrollToElement };
};
