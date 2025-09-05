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
        <div className="hidden lg:grid lg:grid-cols-[1fr_2fr] lg:gap-8 lg:items-center min-h-[600px]">
          {/* Left Column - Content */}
          <div className="space-y-6 ml-16">
            {/* Merch Drop Graphic Text */}
            <div className="mb-6">
              <img src="/merchdroptext.png" alt="Merch Drop" className="w-48 md:w-64 lg:w-72" />
            </div>

            {/* DOT Club Text */}
            <div className="flex items-center space-x-4 mb-6">
              <img src="/dotclubtext.png" alt="DOT Club Icon" className="w-44 md:w-60 lg:w-68 -mt-8" />
            </div>

            {/* Countdown Timer */}
            <div className="flex gap-3 mb-6">
              {countdownItems.map((item, index) => (
                <Card
                  key={index}
                  className="bg-[#222222] border-none rounded-lg w-16 h-16"
                >
                  <CardContent className="p-0 flex flex-col items-center justify-center h-full">
                    <div className="text-xl font-bold text-white">
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
              className="bg-[#e8ff8c] text-black hover:bg-[#d4e619] text-base px-6 py-4 rounded-full font-semibold transition-all duration-200 hover:scale-105"
            >
              BUY NOW!
            </Button>
          </div>

          {/* Right Column - Product Carousel */}
          <div className="flex justify-center items-center h-full w-full">
            <ProductCarousel />
          </div>
        </div>

        {/* Mobile Layout */}
        <div className="lg:hidden text-center space-y-8">

          {/* DOT Club */}
          <div className="flex items-center justify-center space-x-4 mb-8">
            <img src="/dotclubtext.png" alt="DOT Club Icon" className="w-44 -mt-4" />
          </div>

          {/* Hero Image */}
          <div className="mb-8">
            <ProductCarousel />
          </div>
          
          {/* Merch Drop Graphic Text */}
          <div className="mb-8">
            <img src="/merchdroptext.png" alt="Merch Drop" className="w-48 mx-auto" />
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