import { ArrowRight, Smartphone, Share2, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Image from "next/image";
import assets from "../../../public/images/assets";

const features = [
  {
    icon: <Smartphone className="h-5 w-5 text-[var(--color-text)]" />,
    label: "Instant Sharing",
  },
  {
    icon: <Share2 className="h-5 w-5 text-[var(--color-text)]" />,
    label: "Digital Profiles",
  },
  {
    icon: <Zap className="h-5 w-5 text-[var(--color-text)]" />,
    label: "No App Required",
  },
];

const Feature = ({ icon, label }) => (
  <div className="flex items-center gap-2">
    {icon}
    <span className="text-sm">{label}</span>
  </div>
);

const HeroSection = () => {
  return (
    <section className="overflow-hidden bg-gradient-to-b from-background to-muted/20 dark:from-background dark:to-muted/10">
      <div className="grid gap-8 pt-10 md:pt-0 lg:grid-cols-2 lg:gap-12 xl:gap-16 px-10">
        {/* Left column - Text content */}

        <div className="flex flex-col justify-center space-y-8">
          <div className="space-y-4">
            <Badge
              variant="outline"
              className="w-fit border-white bg-third text-[var(--color-text)]"
            >
              Next Generation Networking
            </Badge>

            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-5xl">
              Your Digital Identity in a Tap
            </h1>

            <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Elevate your professional image with our premium NFC business
              cards. Share your contact info, portfolio, and social profiles
              instantly.
            </p>
          </div>

          <div className="flex flex-col gap-3 min-[400px]:flex-row">
            <Button
              size="lg"
              className="gap-2 bg-foreground hover:bg-foreground/80 cursor-pointer font-semibold"
            >
              Shop Now
              <ArrowRight className="h-4 w-4" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="cursor-pointer font-semibold"
            >
              How It Works ?
            </Button>
          </div>

          {/* Features */}
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-3 mt-5">
            {features.map((feature, index) => (
              <Feature key={index} icon={feature.icon} label={feature.label} />
            ))}
          </div>
        </div>

        {/* Right column - Illustration*/}

        <div>
          <Image
            src={assets.nfcMockup}
            alt="NFC Card illustration"
            className="w-full h-full object-cover"
          ></Image>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
