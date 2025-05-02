import React from "react";
import HeroSection from "@/components/sections/hero-section";
import FeaturesSection from "@/components/sections/features-section";
import ProductShowcase from "@/components/sections/product-showcase";
import HowItWorks from "@/components/sections/how-it-works";
import Testimonials from "@/components/sections/testimonials";
import PricingTable from "@/components/sections/pricing-table";
import ContactUsSection from "@/components/sections/contact-us-section";

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
