import { useEffect, useRef } from 'react';
import { useScroll, useSpring, useTransform, motion } from 'framer-motion';

export const SmoothScrollProvider = ({ children }: { children: React.ReactNode }) => {
  const contentRef = useRef<HTMLDivElement>(null);
  const { scrollY } = useScroll();
  
  // Create a smooth spring animation for the scroll
  const smoothScrollY = useSpring(scrollY, {
    damping: 30,
    stiffness: 300,
    restDelta: 0.001,
  });

  const y = useTransform(smoothScrollY, (value) => -value);

  useEffect(() => {
    const updateHeight = () => {
      if (contentRef.current) {
        document.body.style.height = `${contentRef.current.scrollHeight}px`;
      }
    };

    updateHeight();
    window.addEventListener('resize', updateHeight);
    
    return () => {
      window.removeEventListener('resize', updateHeight);
      document.body.style.height = 'auto';
    };
  }, []);

  return (
    <div style={{ position: 'fixed', top: 0, left: 0, width: '100%', overflow: 'hidden' }}>
      <motion.div
        ref={contentRef}
        style={{ y }}
        className="will-change-transform"
      >
        {children}
      </motion.div>
    </div>
  );
};
