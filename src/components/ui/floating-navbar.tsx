import React, { useState, useEffect } from "react";
import {
  motion,
  AnimatePresence,
  useScroll,
  useMotionValueEvent,
} from "framer-motion";
import { cn } from "../../lib/utils";
import { useSmoothScroll } from "../../hooks/useSmoothScroll";

export const FloatingNav = ({
  navItems,
  className,
}: {
  navItems: {
    name: string;
    link: string;
    icon?: JSX.Element;
  }[];
  className?: string;
}) => {
  const { scrollYProgress } = useScroll();
  const [visible, setVisible] = useState(false);
  const { scrollToElement } = useSmoothScroll();

  useMotionValueEvent(scrollYProgress, "change", (current) => {
    // Check if current is not undefined and is a number
    if (typeof current === "number") {
      let direction = current! - scrollYProgress.getPrevious()!;

      if (scrollYProgress.get() < 0.05) {
        setVisible(false);
      } else {
        if (direction < 0) {
          setVisible(true);
        } else {
          setVisible(false);
        }
      }
    }
  });

  return (
    <AnimatePresence mode="wait">
      <motion.div
        initial={{
          opacity: 1,
          y: -100,
        }}
        animate={{
          y: visible ? 0 : -100,
          opacity: visible ? 1 : 0,
        }}
        transition={{
          duration: 0.2,
        }}
        className={cn(
          "flex max-w-fit fixed top-10 inset-x-0 mx-auto border border-[#333333] rounded-full bg-[#1a1a1a]/95 backdrop-blur-md shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] z-[5000] px-8 py-4 items-center justify-center space-x-4",
          className
        )}
      >
        {/* Logo */}
        <div className="flex items-center space-x-2 mr-6">
          <div className="text-xl font-bold text-[#e8ff8c]">DOT</div>
          <div className="text-xs text-white/60">CLUB</div>
        </div>

        {/* Navigation Items */}
        {navItems.map((navItem: any, idx: number) => (
          <button
            key={`link-${idx}`}
            onClick={(e) => {
              e.preventDefault();
              scrollToElement(navItem.link);
            }}
            className={cn(
              "relative text-white/80 items-center flex space-x-1 hover:text-[#e8ff8c] transition-colors duration-200 cursor-pointer"
            )}
          >
            <span className="block sm:hidden">{navItem.icon}</span>
            <span className="hidden sm:block text-sm font-medium">
              {navItem.name}
            </span>
          </button>
        ))}

        {/* CTA Button */}
        <button className="bg-[#e8ff8c] text-black px-4 py-2 rounded-full text-sm font-semibold hover:bg-[#d4e619] transition-colors duration-200 ml-4">
          Buy Now
        </button>
      </motion.div>
    </AnimatePresence>
  );
};