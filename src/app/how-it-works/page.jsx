import CtaSection from "@/components/pages/about/CTASection";
import DetailedSteps from "@/components/pages/how-it-works/DetailedSteps";
import HeroSection from "@/components/pages/how-it-works/HeroSection";
import TechnologyExplanation from "@/components/pages/how-it-works/TechnologyExplanation";
import GlobalStep from "@/components/pages/landing/HowItWorks";
import FAQSection from "@/components/pages/pricing/FAQSection";
import { faqs } from "@/constants/faqs";
import React from "react";

export default function HowItWorks() {
  return (
    <div>
      <HeroSection />
      <GlobalStep />
      <DetailedSteps />
      <TechnologyExplanation />
      <CtaSection bgMuted={false}/>
      <FAQSection faqCategory={faqs.pricing} bgMuted={false} />
      
    </div>
  );
}
