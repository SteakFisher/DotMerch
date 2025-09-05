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
          
          {/* Desktop Gallery - 4x6 grid with specific pattern */}
          <div className="hidden md:grid grid-cols-4 gap-4 max-w-4xl mx-auto">
            {/* Row 1 - only position 2 has image */}
            <div className="aspect-square"></div>
            <div className="aspect-square overflow-hidden rounded-lg group cursor-pointer">
              <img
                src="/2.png"
                alt="Gallery 1"
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
              />
            </div>
            <div className="aspect-square"></div>
            <div className="aspect-square"></div>

            {/* Row 2 - positions 1 and 3 have images */}
            <div className="aspect-square overflow-hidden rounded-lg group cursor-pointer">
              <img
                src="/1.png"
                alt="Gallery 2"
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
              />
            </div>
            <div className="aspect-square"></div>
            <div className="aspect-square overflow-hidden rounded-lg group cursor-pointer">
              <img
                src="/5.svg"
                alt="Gallery 3"
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
              />
            </div>
            <div className="aspect-square"></div>

            {/* Row 3 - positions 2 and 4 have images */}
            <div className="aspect-square"></div>
            <div className="aspect-square overflow-hidden rounded-lg group cursor-pointer">
              <img
                src="/4.png"
                alt="Gallery 4"
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
              />
            </div>
            <div className="aspect-square"></div>
            <div className="aspect-square overflow-hidden rounded-lg group cursor-pointer">
              <img
                src="/9.png"
                alt="Gallery 5"
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
              />
            </div>

            {/* Row 4 - positions 1 and 3 have images */}
            <div className="aspect-square overflow-hidden rounded-lg group cursor-pointer">
              <img
                src="/6.svg"
                alt="Gallery 6"
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
              />
            </div>
            <div className="aspect-square"></div>
            <div className="aspect-square overflow-hidden rounded-lg group cursor-pointer">
              <img
                src="/16.svg"
                alt="Gallery 7"
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
              />
            </div>
            <div className="aspect-square"></div>

            {/* Row 5 - positions 2 and 4 have images */}
            <div className="aspect-square"></div>
            <div className="aspect-square overflow-hidden rounded-lg group cursor-pointer">
              <img
                src="/7.png"
                alt="Gallery 8"
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
              />
            </div>
            <div className="aspect-square"></div>
            <div className="aspect-square overflow-hidden rounded-lg group cursor-pointer">
              <img
                src="/11.png"
                alt="Gallery 9"
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
              />
            </div>

            {/* Row 6 - only position 3 has image */}
            <div className="aspect-square"></div>
            <div className="aspect-square"></div>
            <div className="aspect-square overflow-hidden rounded-lg group cursor-pointer">
              <img
                src="/13.svg"
                alt="Gallery 10"
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
              />
            </div>
            <div className="aspect-square"></div>
          </div>

          {/* Mobile Gallery - 2x5 grid with all images */}
          <div className="md:hidden grid grid-cols-2 gap-4">
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