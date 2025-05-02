import React from "react";
import Image from "next/image";
import assets from "../../../../public/images/assets";

export default function StorySection() {
  return (
    <section className="py-16 md:py-24">
      <div className="px-4 md:px-6">
        <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
          <div className="flex justify-center">
            <div className="relative h-[350px] w-[350px] md:w-[500px] md:h-[400px] overflow-hidden rounded-lg border shadow-lg">
              <Image
                src={assets.illustration}
                alt="KITI'KARD Team"
                fill
                className="object-cover w-full h-full"
              />
            </div>
          </div>
          <div className="flex flex-col space-y-4">
            <h2 className="text-3xl font-bold tracking-tighter text-center">Our Story</h2>
            <p className="text-muted-foreground">
              KITI'KARD was founded in 2024 with a simple mission: to
              revolutionize the way professionals connect and share information.
              Our founder, Nihasy , was frustrated with the limitations of
              traditional paper business cards – they were easily lost, quickly
              outdated, and environmentally wasteful.
            </p>
            <p className="text-muted-foreground">
              Inspired by the potential of NFC technology, Nihasy assembled a
              team of experts in hardware engineering, software development, and
              design to create a better solution. The result was KITI'KARD –
              premium business cards embedded with NFC chips that could
              instantly share digital profiles with a simple tap.
            </p>
            <p className="text-muted-foreground">
              What started as a small startup has grown into a global company
              serving thousands of professionals and businesses worldwide.
              Today, we continue to innovate and expand our product offerings,
              always staying true to our core mission of making professional
              connections more meaningful, efficient, and sustainable.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
