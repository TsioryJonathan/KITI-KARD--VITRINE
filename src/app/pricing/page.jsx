import React from "react";

import PricingTable from "@/components/pages/landing/PricingTable";
import FeatureComparison from "@/components/pages/pricing/FeatureComparison";
import FAQSection from "@/components/pages/pricing/FAQSection";
import CtaSection from "@/components/pages/about/CTASection";
import { faqs } from "@/constants/faqs";

export default function Pricing() {
  return (
    <div>
      <PricingTable />
      <FeatureComparison />
      <FAQSection faqCategory={faqs.pricing} bgMuted={true} />
      <CtaSection />
    </div>
  );
}
