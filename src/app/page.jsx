import React from "react";
import HeroSection from "@/components/sections/hero-section";
import FeaturesSection from "@/components/sections/features-section";
import ProductShowcase from "@/components/sections/product-showcase";
import HowItWorks from "@/components/sections/how-it-works";

function Main() {
  return (
    <>
      <div>
        <HeroSection />
        <FeaturesSection />
        <ProductShowcase />
        <HowItWorks />
      </div>
    </>
  );
}

export default Main;
