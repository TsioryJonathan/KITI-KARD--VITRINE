import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";
import { testimonials } from "@/constants/testimonials";

export default function Testimonials() {
  return (
    <section className="w-full py-16 md:py-24">
      <div className="px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              What Our Clients Say
            </h2>
            <p className="max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Hear from professionals who have transformed their networking
              experience with our NFC business cards.
            </p>
          </div>
        </div>

        <div className="mx-auto grid gap-6 pt-12 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="border-0 bg-muted/30 p-0">
              <CardContent className="p-6">
                <div className="flex items-center gap-4 ">
                  <div className="rounded-full bg-third flex items-center justify-center p-1">
                    <Image
                      src={testimonial.image}
                      alt={testimonial.name}
                      className=" object-cover w-10 h-10"
                    />
                  </div>

                  <div>
                    <h3 className="font-bold">{testimonial.name}</h3>
                    <p className="text-sm text-muted-foreground">
                      {testimonial.role}, {testimonial.company}
                    </p>
                  </div>
                </div>
                <div className="mt-4 flex">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`h-4 w-4 ${
                        i < testimonial.stars
                          ? "text-yellow-400 fill-yellow-400"
                          : "text-muted"
                      }`}
                    />
                  ))}
                </div>
                <blockquote className="mt-3 text-muted-foreground">
                  "{testimonial.content}"
                </blockquote>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
