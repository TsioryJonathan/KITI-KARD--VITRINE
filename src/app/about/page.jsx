import React from "react";
import HeroSection from "@/components/sections/about/HeroSection";
import StorySection from "@/components/sections/about/StorySection";
import MissionSection from "@/components/sections/about/MissionSection";
import ValueSection from "@/components/sections/about/ValueSection";
import TeamSection from "@/components/sections/about/TeamSection";
import WhyChooseUs from "@/components/sections/about/WhyChooseUs";
import CtaSection from "@/components/sections/about/CTASection";

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
