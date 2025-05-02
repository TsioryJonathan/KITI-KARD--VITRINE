import React from "react";
import { Check } from "lucide-react";
import { whyChooseUs } from "@/constants/whyChooseUs";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import assets from "../../../../public/images/assets";

export default function WhyChooseUs() {
  return (
    <section className="bg-muted/30 py-16 md:py-24">
      <div className="container px-4 md:px-6">
        <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
          <div className="flex flex-col space-y-4">
            <h2 className="text-3xl font-bold tracking-tighter">
              Why Choose KITI'KARD
            </h2>
            <p className="text-muted-foreground">
              At KITI'KARD, we're committed to providing the highest quality NFC
              business card solutions that help professionals make meaningful
              connections and leave lasting impressions.
            </p>
            <div className="space-y-2">
              {whyChooseUs.map((item, index) => {
                return (
                  <div className="flex items-start gap-2" key={index}>
                    <Check className="h-5 w-5 text-text mt-0.5" />
                    <span>{item}</span>
                  </div>
                );
              })}
            </div>
            <div className="flex flex-col gap-2 sm:flex-row">
              <Button className="gap-2 bg-foreground hover:bg-foreground/80 cursor-pointer font-semibold">
                Explore Products
                <ArrowRight className="h-4 w-4" />
              </Button>
            </div>
          </div>
          <div className="flex justify-center">
            <div className="relative h-[400px] w-full max-w-[500px] overflow-hidden rounded-lg border shadow-lg">
              <Image
                src={assets.illustration2}
                alt="KITI'KARD Products"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
