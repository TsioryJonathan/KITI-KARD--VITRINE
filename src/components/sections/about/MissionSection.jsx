import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { CreditCard, Lightbulb } from "lucide-react";
import { missionAndVision } from "@/constants/missionAndVision";

export default function MissionSection() {
  return (
    <section className="bg-muted/30 py-16 md:py-24">
      <div className="px-4 md:px-6">
        <div className="grid gap-6 md:grid-cols-2 md:gap-12">
          {missionAndVision.map((item, index) => {
            return (
              <Card className="border-0 bg-background shadow-md" key={index}>
                <CardContent>
                  <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                    {item.icon}
                  </div>
                  <h3 className="text-2xl font-bold">{item.title}</h3>
                  <p className="mt-2 text-muted-foreground">{item.text}</p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
