import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const products = [
  {
    id: 1,
    title: "Regular Hoodies",
    subtitle: "Regular",
    image: "/regular.jpg",
    bgColor: "bg-[#e8ff8c]",
  },
  {
    id: 2,
    title: "Oversized T-Shirts",
    subtitle: "Oversized",
    image: "/oversized.jpg",
    bgColor: "bg-[#e8ff8c]",
  },
  {
    id: 3,
    title: "Cropped Hoodies",
    subtitle: "Cropped",
    image: "/cropped.jpg",
    bgColor: "bg-[#e8ff8c]",
  },
  {
    id: 4,
    title: "Regular Hoodies",
    subtitle: "Regular",
    image: "/back-2.jpeg",
    bgColor: "bg-[#e8ff8c]",
  },
  {
    id: 5,
    title: "Oversized T-Shirts",
    subtitle: "Oversized",
    image: "/back-1.jpeg",
    bgColor: "bg-[#e8ff8c]",
  },
  {
    id: 6,
    title: "Cropped Hoodies",
    subtitle: "Cropped",
    image: "/back-3.jpeg",
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
            className="absolute cursor-pointer"
            animate={styles}
            transition={{
              duration: 0.6,
              ease: "easeInOut",
            }}
            onClick={() => setCurrentIndex(index)}
          >
            {/* Text with creative curved border background */}
            <div className="-mb-2 text-center w-fit relative justify-center mx-auto">
              {/* Curved border background that goes behind the card */}
              <div className="absolute inset-0 -inset-x-8 -bottom-8">
                <div className="w-full h-full border-[0.3px] border-[#b2a046] rounded-t-2xl bg-black/10"
                     style={{
                       borderBottomLeftRadius: '0',
                       borderBottomRightRadius: '0',
                       borderBottom: 'none'
                     }}>
                </div>
              </div>
              
              {/* Text content */}
              <div className="relative z-10 px-6 py-4">
                <div className="text-xl font-bold text-white drop-shadow-lg pb-2">
                  {product.title}
                </div>
              </div>
            </div>

            {/* Card Image */}
            <div className={`w-80 h-80 rounded-2xl ${product.bgColor} overflow-hidden`}>
              <motion.img
                src={product.image}
                alt={product.title}
                className="w-full h-full object-cover rounded-2xl"
                animate={{
                  scale: position === "center" ? 1.1 : 1,
                }}
                transition={{ duration: 0.6 }}
              />
            </div>
          </motion.div>
        );
      })}

      {/* Indicators */}
      {/* <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {products.map((_, index) => (
          <button
            key={index}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentIndex ? "bg-[#e8ff8c]" : "bg-white/30"
            }`}
            onClick={() => setCurrentIndex(index)}
          />
        ))}
      </div> */}
    </div>
  );
};