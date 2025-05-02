import React from "react";
import HeroSection from "@/components/sections/landing/hero-section";
import FeaturesSection from "@/components/sections/landing/features-section";
import ProductShowcase from "@/components/sections/landing/product-showcase";
import HowItWorks from "@/components/sections/landing/how-it-works";
import Testimonials from "@/components/sections/landing/testimonials";
import PricingTable from "@/components/sections/landing/pricing-table";
import ContactUsSection from "@/components/sections/landing/contact-us-section";

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
