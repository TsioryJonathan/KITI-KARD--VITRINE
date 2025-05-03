import React from "react";
import { Tabs, TabsTrigger, TabsList, TabsContent } from "@/components/ui/tabs";
import {
  CreditCard,
  UserCircle,
  Smartphone,
  BarChart3,
  Check,
} from "lucide-react";
import Image from "next/image";
import { steps } from "@/constants/workSteps";
import assets from "../../../../public/images/assets";

export default function DetailedSteps() {
  return (
    <section className="py-16 md:py-24">
      <div className="px-4 md:px-6">
        <Tabs defaultValue="step1" className="w-full">
          <div className="flex flex-col items-center justify-center space-y-4 text-center mb-8">
            <h2 className="text-3xl font-bold tracking-tighter">
              Detailed Process
            </h2>
            <p className="max-w-[700px] text-muted-foreground">
              Learn more about each step in the NFC business card journey
            </p>
            <TabsList className="grid w-full max-w-3xl grid-cols-2 md:grid-cols-4">
              <TabsTrigger value="step1" className="cursor-pointer">
                Step 1
              </TabsTrigger>
              <TabsTrigger value="step2" className="cursor-pointer">
                Step 2
              </TabsTrigger>
              <TabsTrigger value="step3" className="cursor-pointer">
                Step 3
              </TabsTrigger>
              <TabsTrigger value="step4" className="cursor-pointer">
                Step 4
              </TabsTrigger>
            </TabsList>
          </div>

          {steps.map((step, index) => (
            <TabsContent
              key={index}
              value={`step${index + 1}`}
              className="w-full"
            >
              <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
                <div className="flex flex-col space-y-4">
                  <div className="inline-block rounded-lg bg-primary/10 p-3 w-fit">
                    {step.icon}
                  </div>
                  <h3 className="text-2xl font-bold">{step.title}</h3>
                  <p className="text-muted-foreground">{step.details}</p>
                  <ul className="space-y-2">
                    {step.items.map((text, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <Check className="h-5 w-5 text-text mt-0.5" />
                        <span>{text}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="flex justify-center">
                  <div className="relative h-[350px] w-[350px] rounded-lg overflow-hidden border">
                    <Image
                      src={assets[`step${index + 1}`]}
                      alt={`Step ${index + 1}: ${step.title}`}
                      fill
                      className="object-cover hover:scale-102 transition-all"
                    />
                  </div>
                </div>
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  );
}
