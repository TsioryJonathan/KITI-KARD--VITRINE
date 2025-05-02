import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import assets from "../../../../public/images/assets";
import { materials } from "@/constants/product";

export default function ProductShowcase() {
  return (
    <section className="w-full py-16 md:py-24">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Premium Card Collection
            </h2>
            <p className="max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Explore our range of high-quality NFC business cards crafted from
              premium materials.
            </p>
          </div>
        </div>

        <Tabs defaultValue="metal" className="mt-12">
          <TabsList className="grid w-full gap-2 grid-cols-1 md:grid-cols-3 mb-12">
            {materials.map((material) => (
              <TabsTrigger
                key={material.id}
                value={material.id}
                className="cursor-pointer"
              >
                {material.name}
              </TabsTrigger>
            ))}
          </TabsList>
          {materials.map((material) => (
            <TabsContent key={material.id} value={material.id} className="mt-6">
              <div className="grid gap-6 lg:grid-cols-2">
                <div className="flex items-center justify-center py-16 overflow-hidden rounded-xl border border-muted bg-primary/10">
                  <Image
                    src={material.image}
                    alt={material.name}
                    className="object-cover"
                  />
                </div>
                <div className="flex flex-col justify-center space-y-6">
                  <div>
                    <h3 className="text-2xl font-bold">{material.name}</h3>
                    <p className="mt-2 text-muted-foreground">
                      {material.description}
                    </p>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    {material.features.map((feature, index) => (
                      <Badge
                        key={index}
                        variant="outline"
                        className="justify-center py-2 w-full border border-text rounded-xl"
                      >
                        {feature}
                      </Badge>
                    ))}
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
