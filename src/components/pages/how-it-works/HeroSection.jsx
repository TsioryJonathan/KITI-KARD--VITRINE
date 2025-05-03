import React from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
export default function HeroSection() {
  return (
    <section className="py-16 md:py-30">
      <div className="px-4 md:px-6">
        <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 xl:grid-cols-2">
          <div className="flex flex-col justify-center space-y-4">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl">
                How NFC Business Cards Work
              </h1>
              <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Discover how our smart NFC business cards revolutionize
                networking with just a simple tap.
              </p>
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <Button
                size="lg"
                className="gap-2 bg-foreground hover:bg-foreground/80 cursor-pointer font-semibold"
              >
                Get Started
                <ArrowRight className="h-4 w-4" />
              </Button>
              <Button size="lg" variant="outline" className="cursor-pointer">
                View Products
              </Button>
            </div>
          </div>
          <div className="flex items-center justify-center">
            <div className="relative h-[350px] w-[350px]">
              <div className="absolute left-1/2 top-1/2 h-[250px] w-[400px] -translate-x-1/2 -translate-y-1/2 rounded-2xl bg-gradient-to-br from-primary/80 to-primary shadow-xl">
                <div className="absolute inset-[2px] rounded-2xl bg-background p-6">
                  <div className="flex h-full flex-col justify-between">
                    <div className="flex justify-between">
                      <div>
                        <h3 className="font-bold">John Smith</h3>
                        <p className="text-sm text-muted-foreground">
                          Marketing Director
                        </p>
                      </div>
                      <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center">
                        <span className="text-primary font-bold">NFC</span>
                      </div>
                    </div>
                    <div>
                      <p className="text-sm">john@company.com</p>
                      <p className="text-sm">+1 (555) 123-4567</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Phone mockup */}
              <div className="absolute bottom-0 right-0 h-[300px] w-[150px] rounded-3xl border-8 border-muted bg-background shadow-lg">
                <div className="absolute top-4 left-1/2 h-4 w-1/3 -translate-x-1/2 rounded-full bg-muted-foreground/20"></div>
                <div className="absolute inset-0 p-2">
                  <div className="h-full w-full rounded-2xl bg-muted/30 flex items-center justify-center">
                    <div className="text-center p-2">
                      <p className="text-xs font-medium">Contact Added</p>
                      <div className="mt-2 h-12 w-12 mx-auto rounded-full bg-primary/20 flex items-center justify-center">
                        <span className="text-primary text-xl">✓</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Animation indicators */}
              <div className="absolute bottom-[100px] right-[80px] h-6 w-6">
                <div className="absolute inset-0 animate-ping rounded-full bg-primary opacity-25"></div>
                <div className="absolute inset-[30%] rounded-full bg-primary"></div>
              </div>
              <div className="absolute bottom-[110px] right-[90px] h-4 w-4">
                <div className="absolute inset-0 animate-ping rounded-full bg-primary opacity-25 animation-delay-300"></div>
              </div>
              <div className="absolute bottom-[120px] right-[100px] h-2 w-2">
                <div className="absolute inset-0 animate-ping rounded-full bg-primary opacity-25 animation-delay-600"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
