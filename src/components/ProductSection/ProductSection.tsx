import React from "react";
import { ProductCarousel } from "../ProductCarousel/ProductCarousel";

export const ProductSection = (): JSX.Element => {
  return (
    <section id="products" className="py-16 px-4 lg:px-8">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Our Products
          </h2>
          <p className="text-xl text-white/70">
            Premium quality merchandise for the design community
          </p>
        </div>

        {/* Product Carousel */}
        <div className="mb-16">
          <ProductCarousel />
        </div>

        {/* Gallery Grid */}
        <div className="mt-16">
          <h3 className="text-3xl font-bold text-white text-center mb-8">
            Gallery
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4">
            {[
              "/2.png", "/1.png", "/5.svg", "/4.png", "/9.png",
              "/6.svg", "/16.svg", "/7.png", "/11.png", "/13.svg"
            ].map((src, index) => (
              <div
                key={index}
                className="aspect-square overflow-hidden rounded-lg group cursor-pointer"
              >
                <img
                  src={src}
                  alt={`Gallery ${index + 1}`}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};