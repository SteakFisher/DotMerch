import { Header } from "./components/Header/Header";
import { HeroSection } from "./components/HeroSection/HeroSection";
import { SizeChartSection } from "./components/SizeChartSection/SizeChartSection";
import { FaqSection } from "./components/FaqSection/FaqSection";
import { AboutSection } from "./components/AboutSection/AboutSection";
import { ProductSection } from "./components/ProductSection/ProductSection";
import { SmoothScrollProvider } from "./components/SmoothScrollProvider";

export const App = (): JSX.Element => {
  return (
    <>
      <Header />
      <SmoothScrollProvider>
        <div className="min-h-screen bg-[#1a1a1a] text-white">
          <main>
            <div id="home">
              <HeroSection />
            </div>
            <div id="products">
              <ProductSection />
            </div>
            <div id="size-chart">
              <SizeChartSection />
            </div>
            <div id="faq">
              <FaqSection />
            </div>
            <div id="about">
              <AboutSection />
            </div>
          </main>
        </div>
      </SmoothScrollProvider>
    </>
  );
};