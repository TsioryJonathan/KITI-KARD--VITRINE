"use client";

import { useState } from "react";
import NextImage from "next/image";
import { cn } from "@/lib/utils";

export function ProductGallery(images) {
  const [selectedImage, setSelectedImage] = useState(0);

  return (
    <div className="space-y-4">
      <div className="relative aspect-square overflow-hidden rounded-lg border flex items-center justify-center">
        <NextImage
          src={images.images[selectedImage] || "/placeholder.svg"}
          alt="Product image"
          className="object-cover"
          priority
        />
      </div>
      <div className="grid grid-cols-4 gap-4">
        {images.images.map((image, index) => (
          <button
            key={index}
            className={cn(
              "relative overflow-hidden rounded-md border flex items-center justify-center p-4",
              selectedImage === index && "ring-2 ring-primary ring-offset-2"
            )}
            onClick={() => setSelectedImage(index)}
          >
            <NextImage
              src={image || "/placeholder.svg"}
              alt={`Product thumbnail ${index + 1}`}
              className="object-cover w-[80%] "
            />
          </button>
        ))}
      </div>
    </div>
  );
}
