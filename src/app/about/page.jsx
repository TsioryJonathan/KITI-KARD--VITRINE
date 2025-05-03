import React from "react";
import HeroSection from "@/components/pages/about/HeroSection";
import StorySection from "@/components/pages/about/StorySection";
import MissionSection from "@/components/pages/about/MissionSection";
import ValueSection from "@/components/pages/about/ValueSection";
import TeamSection from "@/components/pages/about/TeamSection";
import WhyChooseUs from "@/components/pages/about/WhyChooseUs";
import CtaSection from "@/components/pages/about/CTASection";

export default function About() {
  return (
    <div>
      <HeroSection />
      <StorySection />
      <MissionSection />
      <ValueSection />
      <TeamSection />
      <WhyChooseUs />
      <CtaSection />
    </div>
  );
}
