import React from "react";
import { Button } from "../ui/button";
import { Card, CardContent } from "../ui/card";

export const HeroSection = (): JSX.Element => {
  const countdownItems = [
    { value: "24", label: "HOURS" },
    { value: "24", label: "MINUTES" },
    { value: "24", label: "SECONDS" },
  ];

  return (
    <section className="pt-24 pb-16 px-4 lg:px-8">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          {/* Main Title */}
          <div className="mb-8">
            <h1 className="text-6xl md:text-8xl lg:text-9xl font-black text-white mb-4">
              merch
            </h1>
            <h2 className="text-6xl md:text-8xl lg:text-9xl font-black text-transparent [-webkit-text-stroke:2px_#ffffff] mb-8">
              drop
            </h2>
          </div>

          {/* Hero Image */}
          <div className="mb-16">
            <img
              src="/untitled-design--1--1.png"
              alt="Merch Collection"
              className="w-full max-w-2xl mx-auto h-auto object-contain"
            />
          </div>

          {/* Countdown Timer */}
          <div className="flex justify-center gap-4 mb-12">
            {countdownItems.map((item, index) => (
              <Card
                key={index}
                className="bg-[#222222] border-none rounded-lg w-20 h-20 md:w-24 md:h-24"
              >
                <CardContent className="p-0 flex flex-col items-center justify-center h-full">
                  <div className="text-2xl md:text-3xl font-bold text-white">
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