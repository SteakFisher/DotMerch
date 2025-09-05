import React from "react";
import { Header } from "./components/Header/Header";
import { HeroSection } from "./components/HeroSection/HeroSection";
import { SizeChartSection } from "./components/SizeChartSection/SizeChartSection";
import { FaqSection } from "./components/FaqSection/FaqSection";
import { AboutSection } from "./components/AboutSection/AboutSection";
import { ProductSection } from "./components/ProductSection/ProductSection";

export const App = (): JSX.Element => {
  return (
    <div className="min-h-screen bg-[#1a1a1a] text-white">
      <Header />
      <main>
        <div id="home">
          <HeroSection />
        </div>
        <ProductSection />
        <SizeChartSection />
        <FaqSection />
        <AboutSection />
      </main>
    </div>
  );
};