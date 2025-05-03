import React from "react";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { HelpCircle } from "lucide-react";
import { faqs } from "@/constants/faqs";

export default function FAQSection() {
  return (
    <section className="bg-muted/30 py-16 md:py-24">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
              Frequently Asked Questions
            </h2>
            <p className="max-w-[700px] text-muted-foreground">
              Find answers to common questions about our pricing and plans
            </p>
          </div>
        </div>

        <div className="mx-auto max-w-3xl">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-left cursor-pointer">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent>{faq.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        <div className="mt-12 flex flex-col items-center justify-center space-y-4 text-center">
          <p className="text-muted-foreground">Still have questions?</p>
          <Button variant="outline" className="gap-2">
            <HelpCircle className="h-4 w-4" />
            Contact Support
          </Button>
        </div>
      </div>
    </section>
  );
}
