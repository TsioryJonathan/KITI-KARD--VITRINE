import React from "react";
import HeroSection from "@/components/sections/landing/HeroSection";
import FeaturesSection from "@/components/sections/landing/FeaturesSection";
import ProductShowcase from "@/components/sections/landing/ProductShowcase";
import HowItWorks from "@/components/sections/landing/HowItWorks";
import Testimonials from "@/components/sections/landing/Testimonials";
import PricingTable from "@/components/sections/landing/PricingTable";
import ContactUsSection from "@/components/sections/landing/ContactUsSection";

function Main() {
  return (
    <>
      <div>
        <HeroSection />
        <FeaturesSection />
        <ProductShowcase />
        <HowItWorks />
        <Testimonials />
        <PricingTable />
        <ContactUsSection />
      </div>
    </>
  );
}

export default Main;
