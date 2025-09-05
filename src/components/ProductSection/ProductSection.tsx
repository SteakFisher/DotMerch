export const ProductSection = (): JSX.Element => {
  return (
    <section id="products" className="py-16 px-4 lg:px-8">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Gallery
          </h2>
          <p className="text-xl text-white/70">
            View our premium merch
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="mt-16">
          
          {/* Desktop Gallery - 4x6 grid with specific pattern */}
          <div className="hidden lg:grid grid-cols-4 gap-4 max-w-4xl mx-auto">
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
                src="/5.png"
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
                src="/6.png"
                alt="Gallery 6"
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
              />
            </div>
            <div className="aspect-square"></div>
            <div className="aspect-square overflow-hidden rounded-lg group cursor-pointer">
              <img
                src="/16.png"
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
                src="/13.png"
                alt="Gallery 10"
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
              />
            </div>
            <div className="aspect-square"></div>
          </div>

          {/* Mobile Gallery - 2x5 grid with all images */}
          <div className="lg:hidden grid grid-cols-2 gap-4">
            {[
              "/2.png", "/1.png", "/5.png", "/4.png", "/9.png",
              "/6.png", "/16.png", "/7.png", "/11.png", "/13.png"
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