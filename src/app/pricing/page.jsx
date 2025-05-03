import React from "react";

import PricingTable from "@/components/pages/landing/PricingTable";
import FeatureComparison from "@/components/pages/pricing/FeatureComparison";
import FAQSection from "@/components/pages/pricing/FAQSection";
import CtaSection from "@/components/pages/about/CTASection";

export default function Pricing() {
  return (
    <div>
      <PricingTable />
      <FeatureComparison />
      <FAQSection />
      <CtaSection />
    </div>
  );
}
