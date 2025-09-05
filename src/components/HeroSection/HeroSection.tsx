import React from "react";
import { Button } from "../ui/button";
import { Card, CardContent } from "../ui/card";
import { ProductCarousel } from "../ProductCarousel/ProductCarousel";

export const HeroSection = (): JSX.Element => {
  const countdownItems = [
    { value: "24", label: "HOURS" },
    { value: "24", label: "MINUTES" },
    { value: "24", label: "SECONDS" },
  ];

  return (
    <section className="pt-24 pb-16 px-4 lg:px-8">
      <div className="container mx-auto">
        {/* Desktop Layout */}
        <div className="hidden lg:grid lg:grid-cols-2 lg:gap-12 lg:items-center">
          {/* Left Column - Content */}
          <div className="space-y-8">
            {/* Merch Drop Graphic Text */}
            <div className="mb-8">
              <h1 className="text-6xl md:text-7xl font-black text-white mb-4">
                merch
              </h1>
              <h2 className="text-6xl md:text-7xl font-black text-transparent [-webkit-text-stroke:2px_#ffffff]">
                drop
              </h2>
            </div>

            {/* DOT Club Text */}
            <div className="flex items-center space-x-4 mb-8">
              <div className="flex items-center space-x-2">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#e8ff8c] to-[#a7c430] flex items-center justify-center">
                  <div className="w-6 h-6 bg-black rounded-full"></div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-[#e8ff8c]">DOT</div>
                  <div className="text-lg text-white/60">CLUB</div>
                </div>
              </div>
              <div className="text-2xl text-[#e8ff8c] font-bold">#25</div>
            </div>

            {/* Countdown Timer */}
            <div className="flex gap-4 mb-8">
              {countdownItems.map((item, index) => (
                <Card
                  key={index}
                  className="bg-[#222222] border-none rounded-lg w-20 h-20"
                >
                  <CardContent className="p-0 flex flex-col items-center justify-center h-full">
                    <div className="text-2xl font-bold text-white">
                      {item.value}
                    </div>
                    <div className="text-xs text-[#666666] font-semibold">
                      {item.label}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* CTA Button */}
            <Button 
              size="lg"
              className="bg-[#e8ff8c] text-black hover:bg-[#d4e619] text-lg px-8 py-6 rounded-full font-semibold transition-all duration-200 hover:scale-105"
            >
              BUY NOW!
            </Button>
          </div>

          {/* Right Column - Hero Image */}
          <div className="flex justify-center">
            <ProductCarousel />
          </div>
        </div>

        {/* Mobile Layout */}
        <div className="lg:hidden text-center space-y-8">
          {/* Merch Drop Graphic Text */}
          <div className="mb-8">
            <h1 className="text-5xl md:text-6xl font-black text-white mb-4">
              merch
            </h1>
            <h2 className="text-5xl md:text-6xl font-black text-transparent [-webkit-text-stroke:2px_#ffffff]">
              drop
            </h2>
          </div>

          {/* Hero Image */}
          <div className="mb-8">
            <ProductCarousel />
          </div>

          {/* DOT Club */}
          <div className="flex items-center justify-center space-x-4 mb-8">
            <div className="flex items-center space-x-2">
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#e8ff8c] to-[#a7c430] flex items-center justify-center">
                <div className="w-6 h-6 bg-black rounded-full"></div>
              </div>
              <div>
                <div className="text-2xl font-bold text-[#e8ff8c]">DOT</div>
                <div className="text-lg text-white/60">CLUB</div>
              </div>
            </div>
            <div className="text-2xl text-[#e8ff8c] font-bold">#25</div>
          </div>

          {/* Countdown Timer */}
          <div className="flex justify-center gap-4 mb-8">
            {countdownItems.map((item, index) => (
              <Card
                key={index}
                className="bg-[#222222] border-none rounded-lg w-20 h-20"
              >
                <CardContent className="p-0 flex flex-col items-center justify-center h-full">
                  <div className="text-2xl font-bold text-white">
                    {item.value}
                  </div>
                  <div className="text-xs text-[#666666] font-semibold">
                    {item.label}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* CTA Button */}
          <Button 
            size="lg"
            className="bg-[#e8ff8c] text-black hover:bg-[#d4e619] text-lg px-8 py-6 rounded-full font-semibold transition-all duration-200 hover:scale-105"
          >
            BUY NOW!
          </Button>
        </div>
      </div>
    </section>
  );
};