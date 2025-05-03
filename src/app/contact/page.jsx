import CtaSection from "@/components/pages/about/CTASection";
import ContactForm from "@/components/pages/contact/ContactForm";
import ContactOptions from "@/components/pages/contact/ContactOptions";
import HeroSection from "@/components/pages/contact/HeroSection";
import React from "react";

export default function Contact() {
  return (
    <div>
      <HeroSection />
      <ContactOptions />
      <ContactForm />
      <CtaSection />
    </div>
  );
}
