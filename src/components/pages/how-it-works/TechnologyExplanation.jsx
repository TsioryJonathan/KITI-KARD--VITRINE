import React from "react";
import { ArrowRight, RefreshCw } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function TechnologyExplanation() {
  return (
    <section className="bg-muted/30 py-16 md:py-24">
      <div className="px-4 md:px-6">
        <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
          <div className="flex flex-col space-y-4">
            <h2 className="text-3xl font-bold tracking-tighter">
              The Technology Behind NFC Cards
            </h2>
            <p className="text-muted-foreground">
              NFC (Near Field Communication) is a set of communication protocols
              that enables two electronic devices to establish communication
              when they're within 4 cm of each other.
            </p>
            <p className="text-muted-foreground">
              Our NFC business cards contain a small chip and antenna that can
              store and transmit data to NFC-enabled smartphones. When tapped
              against a phone, the card transmits a URL that opens your digital
              profile.
            </p>
            <p className="text-muted-foreground">
              Unlike traditional business cards, NFC cards don't need to store
              all your information on the card itself. Instead, they direct
              recipients to your always up-to-date digital profile, giving you
              complete control over what information you share and when.
            </p>
            <div className="flex flex-col gap-2 sm:flex-row">
              <Button className="gap-2 bg-foreground hover:bg-foreground/80 cursor-pointer font-semibold">
                Browse NFC Cards
                <ArrowRight className="h-4 w-4" />
              </Button>
            </div>
          </div>
          <div className="flex justify-center">
            <div className="relative h-[400px] w-full max-w-[500px]">
              <div className="absolute left-1/2 top-1/2 h-[300px] w-[300px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/5 flex items-center justify-center">
                <div className="absolute h-[200px] w-[200px] rounded-full bg-primary/10 flex items-center justify-center">
                  <div className="absolute h-[100px] w-[100px] rounded-full bg-primary/20 flex items-center justify-center">
                    <div className="h-[50px] w-[50px] rounded-full bg-primary flex items-center justify-center">
                      <RefreshCw className="h-6 w-6 text-primary-foreground" />
                    </div>
                  </div>
                </div>
              </div>

              {/* Card */}
              <div className="absolute top-[20%] left-[15%] h-[80px] w-[140px] rotate-[-15deg] rounded-lg bg-gradient-to-br from-primary/80 to-primary shadow-lg">
                <div className="absolute inset-[1px] rounded-lg bg-background"></div>
              </div>

              {/* Phone */}
              <div className="absolute bottom-[20%] right-[15%] h-[180px] w-[90px] rotate-[15deg] rounded-3xl border-4 border-muted bg-background shadow-lg">
                <div className="absolute top-2 left-1/2 h-2 w-1/3 -translate-x-1/2 rounded-full bg-muted-foreground/20"></div>
              </div>

              {/* Signal waves */}
              <div className="absolute top-[30%] left-[30%] h-4 w-4">
                <div className="absolute inset-0 animate-ping rounded-full bg-primary opacity-25"></div>
              </div>
              <div className="absolute top-[35%] left-[35%] h-3 w-3">
                <div className="absolute inset-0 animate-ping rounded-full bg-primary opacity-25 animation-delay-300"></div>
              </div>
              <div className="absolute top-[40%] left-[40%] h-2 w-2">
                <div className="absolute inset-0 animate-ping rounded-full bg-primary opacity-25 animation-delay-600"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
