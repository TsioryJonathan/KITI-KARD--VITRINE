import React from "react";

export default function HeroSection() {
  return (
    <section className="bg-muted/30 py-16 md:py-24">
      <div className="px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl">
              Contact Us
            </h1>
            <p className="max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              We'd love to hear from you. Reach out with any questions,
              feedback, or inquiries.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
