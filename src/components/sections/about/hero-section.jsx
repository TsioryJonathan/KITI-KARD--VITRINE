import React from "react";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import assets from "../../../../public/images/assets";

export default function HeroSection() {
  return (
    <section className="bg-muted/30 py-16 md:py-24">
      <div className="px-4 md:px-6">
        <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 xl:grid-cols-2">
          <div className="flex flex-col justify-center space-y-4">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl">
                About KITI'KARD
              </h1>
              <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                We're revolutionizing professional networking with innovative
                NFC business card solutions.
              </p>
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <Button
                size="lg"
                className="gap-2 bg-foreground hover:bg-foreground/80 cursor-pointer font-semibold"
              >
                Our Products
                <ArrowRight className="h-4 w-4" />
              </Button>

              <Button size="lg" variant="outline" className="cursor-pointer">
                Contact Us
              </Button>
            </div>
          </div>
          <div className="flex items-center justify-center">
            <div className="relative h-[350px] w-[350px] md:w-[500px] md:h-[400px] overflow-hidden rounded-lg border shadow-lg">
              <Image
                src={assets.team}
                alt="KITI'KARD Team"
                fill
                className="object-cover w-full h-full"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
