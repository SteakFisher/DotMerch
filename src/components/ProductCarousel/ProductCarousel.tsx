import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const products = [
  {
    id: 1,
    title: "Regular Hoodies",
    subtitle: "Regular",
    image: "/17.png",
    bgColor: "bg-[#e8ff8c]",
  },
  {
    id: 2,
    title: "Oversized T-Shirts",
    subtitle: "Oversized",
    image: "/18.png",
    bgColor: "bg-gradient-to-br from-purple-600 to-blue-600",
  },
  {
    id: 3,
    title: "Cropped Hoodies",
    subtitle: "Cropped",
    image: "/17-1.png",
    bgColor: "bg-[#e8ff8c]",
  },
];

export const ProductCarousel = (): JSX.Element => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % products.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const getItemPosition = (index: number) => {
    const diff = index - currentIndex;
    if (diff === 0) return "center";
    if (diff === 1 || diff === -(products.length - 1)) return "right";
    if (diff === -1 || diff === products.length - 1) return "left";
    return "hidden";
  };

  const getItemStyles = (position: string) => {
    switch (position) {
      case "center":
        return {
          scale: 1,
          x: 0,
          zIndex: 3,
          filter: "blur(0px)",
          opacity: 1,
        };
      case "left":
        return {
          scale: 0.8,
          x: -200,
          zIndex: 1,
          filter: "blur(4px)",
          opacity: 0.6,
        };
      case "right":
        return {
          scale: 0.8,
          x: 200,
          zIndex: 1,
          filter: "blur(4px)",
          opacity: 0.6,
        };
      default:
        return {
          scale: 0.6,
          x: 0,
          zIndex: 0,
          filter: "blur(8px)",
          opacity: 0,
        };
    }
  };

  return (
    <div className="relative w-full h-96 flex items-center justify-center overflow-hidden">
      {products.map((product, index) => {
        const position = getItemPosition(index);
        const styles = getItemStyles(position);

        return (
          <motion.div
            key={product.id}
            className={`absolute w-80 h-80 rounded-2xl ${product.bgColor} cursor-pointer`}
            animate={styles}
            transition={{
              duration: 0.6,
              ease: "easeInOut",
            }}
            onClick={() => setCurrentIndex(index)}
          >
            <div className="h-full flex flex-col items-center justify-center p-6 relative overflow-hidden">
              <motion.img
                src={product.image}
                alt={product.title}
                className="w-32 h-48 object-cover mb-4"
                animate={{
                  scale: position === "center" ? 1.1 : 1,
                }}
                transition={{ duration: 0.6 }}
              />
              <div className="text-center text-white">
                <div className="text-lg font-light italic mb-2">
                  {product.subtitle}
                </div>
                <div className="text-xl font-bold">
                  {product.title}
                </div>
              </div>
            </div>
          </motion.div>
        );
      })}

      {/* Indicators */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {products.map((_, index) => (
          <button
            key={index}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentIndex ? "bg-[#e8ff8c]" : "bg-white/30"
            }`}
            onClick={() => setCurrentIndex(index)}
          />
        ))}
      </div>
    </div>
  );
};