import React from "react";
import HeroSection from "@/components/sections/about/hero-section";
import StorySection from "@/components/sections/about/story-section";
import MissionSection from "@/components/sections/about/mission-section";
import ValueSection from "@/components/sections/about/value-section";

export default function About() {
  return (
    <div>
      <HeroSection />
      <StorySection />
      <MissionSection />
      <ValueSection />
    </div>
  );
}
