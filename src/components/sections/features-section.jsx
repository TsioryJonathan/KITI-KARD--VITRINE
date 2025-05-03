import {
  Smartphone,
  Edit,
  BarChart3,
  Recycle,
  Globe,
  Shield,
  ArrowRight,
  RefreshCw,
  Zap,
  Palette,
  Feather,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { features, additionalFeatures } from "@/constants/features";
import Image from "next/image";
import assets from "../../../public/images/assets";

export default function FeaturesSection() {
  return (
    <section className="w-full py-16 md:py-24 lg:py-32 bg-muted/50">
      <div className="px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Why Choose NFC Business Cards
            </h2>
            <p className="max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Discover how our smart business cards revolutionize the way
              professionals connect and share information.
            </p>
          </div>
        </div>

        {/* Features Grid */}
        <div className="mx-auto grid gap-6 py-12 md:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => (
            <Card
              key={index}
              className="border-0 bg-background shadow-lg transition-transform transform hover:shadow-xl"
            >
              <CardContent className="px-4 py-2">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/20 shadow-sm hover:shadow-lg transition-all">
                  {feature.icon}
                </div>
                <h3 className="mt-4 text-xl font-semibold text-text">
                  {feature.title}
                </h3>
                <p className="mt-2 text-md text-muted-foreground font-light">
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Interactive Demo Section */}
        <div className="mt-12 rounded-xl bg-secondary p-8">
          <div className="grid gap-8 md:grid-cols-2 items-center">
            <div className="space-y-4">
              <h3 className="text-2xl font-bold">See It In Action</h3>
              <p className="text-muted-foreground">
                Experience the simplicity and power of NFC business cards. Tap,
                connect, and make a lasting impression.
              </p>
              <div className="flex flex-col gap-3 sm:flex-row">
                <Button className="gap-2 bg-foreground hover:bg-foreground/80 cursor-pointer">
                  Request Demo
                  <ArrowRight className="h-4 w-4" />
                </Button>
                <Button variant="outline" className="cursor-pointer">
                  View Gallery
                </Button>
              </div>
            </div>
            <div className="flex items-center justify-center">
              <Image
                src={assets.mockupAnimation}
                alt="Animation"
                className="object-cover"
              ></Image>
            </div>
          </div>
        </div>

        {/* Additional Benefits */}
        <div className="mt-16 grid gap-8 md:grid-cols-3">
          {additionalFeatures.map((feature, index) => (
            <div
              key={index}
              className="group flex flex-col items-center rounded-xl p-6 text-center"
            >
              <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-secondary/80">
                {feature.icon}
              </div>
              <h4 className="text-lg font-semibold text-foreground">
                {feature.title}
              </h4>
              <p className="text-sm text-muted-foreground">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
