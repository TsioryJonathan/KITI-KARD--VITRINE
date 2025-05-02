import React from "react";
import HeroSection from "@/components/sections/hero-section";
import FeaturesSection from "@/components/sections/features-section";
import ProductShowcase from "@/components/sections/product-showcase";

function Main() {
  return (
    <>
      <div>
        <HeroSection />
        <FeaturesSection />
        <ProductShowcase />
      </div>
    </>
  );
}

export default Main;
