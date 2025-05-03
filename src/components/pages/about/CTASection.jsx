import React from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import clsx from "clsx";

export default function CtaSection({ bgMuted }) {
  return (
    <section className={clsx(bgMuted ? "bg-muted/30" : "", "py-16 md:py-24")}>
      <div className="px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
              Join the NFC Revolution
            </h2>
            <p className="max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Ready to transform the way you network? Explore our premium NFC
              business card solutions today.
            </p>
          </div>
          <div className="flex flex-col gap-2 min-[400px]:flex-row">
            <Button
              size="lg"
              className="gap-2 bg-foreground hover:bg-foreground/80 cursor-pointer font-semibold"
            >
              Shop Now
              <ArrowRight className="h-4 w-4" />
            </Button>
            <Button size="lg" variant="outline">
              Contact Us
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
