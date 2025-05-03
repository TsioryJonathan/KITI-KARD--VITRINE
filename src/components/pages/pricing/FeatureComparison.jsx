import React from "react";
import { Check, Badge } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function FeatureComparison() {
  return (
    <section className="py-16 md:py-24">
      <div className="px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
              Plan Comparison
            </h2>
            <p className="max-w-[700px] text-muted-foreground">
              Compare our plans to find the perfect fit for your needs
            </p>
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full min-w-[800px] border-collapse">
            <thead>
              <tr className="border-b">
                <th className="py-4 px-4 text-left font-medium">Features</th>
                <th className="py-4 px-4 text-center font-medium">Starter</th>
                <th className="py-4 px-4 text-center font-medium">
                  <div className="flex flex-col items-center">Professional</div>
                </th>
                <th className="py-4 px-4 text-center font-medium">Executive</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b">
                <td className="py-4 px-4 font-medium">Card Material</td>
                <td className="py-4 px-4 text-center">Plastic</td>
                <td className="py-4 px-4 text-center">Metal</td>
                <td className="py-4 px-4 text-center">Premium Metal</td>
              </tr>
              <tr className="border-b">
                <td className="py-4 px-4 font-medium">Card Quantity</td>
                <td className="py-4 px-4 text-center">10</td>
                <td className="py-4 px-4 text-center">10</td>
                <td className="py-4 px-4 text-center">10</td>
              </tr>
              <tr className="border-b">
                <td className="py-4 px-4 font-medium">Digital Profile</td>
                <td className="py-4 px-4 text-center">Basic</td>
                <td className="py-4 px-4 text-center">Advanced</td>
                <td className="py-4 px-4 text-center">Premium</td>
              </tr>
              <tr className="border-b">
                <td className="py-4 px-4 font-medium">Social Media Links</td>
                <td className="py-4 px-4 text-center">
                  <Check className="mx-auto h-5 w-5 text-text" />
                </td>
                <td className="py-4 px-4 text-center">
                  <Check className="mx-auto h-5 w-5 text-text" />
                </td>
                <td className="py-4 px-4 text-center">
                  <Check className="mx-auto h-5 w-5 text-text" />
                </td>
              </tr>
              <tr className="border-b">
                <td className="py-4 px-4 font-medium">
                  Portfolio/Website Embedding
                </td>
                <td className="py-4 px-4 text-center">-</td>
                <td className="py-4 px-4 text-center">
                  <Check className="mx-auto h-5 w-5 text-text" />
                </td>
                <td className="py-4 px-4 text-center">
                  <Check className="mx-auto h-5 w-5 text-text" />
                </td>
              </tr>
              <tr className="border-b">
                <td className="py-4 px-4 font-medium">Video Integration</td>
                <td className="py-4 px-4 text-center">-</td>
                <td className="py-4 px-4 text-center">-</td>
                <td className="py-4 px-4 text-center">
                  <Check className="mx-auto h-5 w-5 text-text" />
                </td>
              </tr>
              <tr className="border-b">
                <td className="py-4 px-4 font-medium">Analytics</td>
                <td className="py-4 px-4 text-center">-</td>
                <td className="py-4 px-4 text-center">Basic</td>
                <td className="py-4 px-4 text-center">Advanced</td>
              </tr>
              <tr className="border-b">
                <td className="py-4 px-4 font-medium">Custom Packaging</td>
                <td className="py-4 px-4 text-center">-</td>
                <td className="py-4 px-4 text-center">-</td>
                <td className="py-4 px-4 text-center">
                  <Check className="mx-auto h-5 w-5 text-text" />
                </td>
              </tr>
              <tr className="border-b">
                <td className="py-4 px-4 font-medium">Support</td>
                <td className="py-4 px-4 text-center">Email</td>
                <td className="py-4 px-4 text-center">Priority</td>
                <td className="py-4 px-4 text-center">Priority</td>
              </tr>
              <tr>
                <td className="py-4 px-4"></td>
                <td className="py-4 px-4 text-center">
                  <Button className="w-full cursor-pointer bg-background text-text hover:bg-background/80">
                    Order Now
                  </Button>
                </td>
                <td className="py-4 px-4 text-center">
                  <Button className="w-full cursor-pointer bg-foreground hover:bg-foreground/80">
                    Order Now
                  </Button>
                </td>
                <td className="py-4 px-4 text-center">
                  <Button className="w-full cursor-pointer bg-background text-text hover:bg-background/80">
                    Order Now
                  </Button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
