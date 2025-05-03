import React from "react";
import HeroSection from "@/components/pages/landing/HeroSection";
import FeaturesSection from "@/components/pages/landing/FeaturesSection";
import ProductShowcase from "@/components/pages/landing/ProductShowcase";
import HowItWorks from "@/components/pages/landing/HowItWorks";
import Testimonials from "@/components/pages/landing/Testimonials";
import PricingTable from "@/components/pages/landing/PricingTable";
import ContactUsSection from "@/components/pages/landing/ContactUsSection";

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
