import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { plans } from "@/constants/pricingPlans";

export default function PricingTable() {
  return (
    <section className="w-full py-16 md:py-24 bg-muted/30">
      <div className="px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Simple, Transparent Pricing
            </h2>
            <p className="max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Choose the perfect plan for your networking needs. All plans
              include free shipping.
            </p>
          </div>
        </div>

        <div className="w-full mx-auto grid max-w-5xl gap-12 py-12 lg:grid-cols-3">
          {plans.map((plan, index) => (
            <Card
              key={index}
              className={`flex flex-col ${
                plan.popular
                  ? "border-primary shadow-lg scale-101 lg:scale-105 z-10 dark:bg-muted p-0 pb-8 overflow-hidden rounded-md"
                  : "bg-card dark:bg-background/60 border-border shadow-sm rounded-md"
              }`}
            >
              {plan.popular && (
                <div className="py-2 px-4 bg-third text-text text-md font-medium text-center">
                  Most Popular
                </div>
              )}
              <CardHeader>
                <CardTitle>{plan.name}</CardTitle>
                <div className="mt-4 flex items-baseline text-5xl font-bold">
                  {plan.price}
                </div>
                <CardDescription className="mt-4">
                  {plan.description}
                </CardDescription>
              </CardHeader>
              <CardContent className="flex-1">
                <ul className="space-y-3">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-center">
                      <Check className="mr-2 h-4 w-4 text-text" />
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
              <CardFooter>
                <Button className="w-full bg-third text-text hover:bg-third/80 cursor-pointer">
                  {plan.cta}
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
