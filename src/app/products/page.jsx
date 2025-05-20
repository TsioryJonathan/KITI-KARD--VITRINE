import { SlidersHorizontal, ChevronDown } from "lucide-react";
import Link from "next/link";
import NextImage from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import assets from "../../../public/images/assets";
import CustomButton from "@/components/CustomButton";

export default function ProductsPage() {
  const products = [
    {
      id: "premium-metal",
      name: "Premium Metal",
      slug: "premium-metal",
      price: 99,
      originalPrice: 129,
      rating: 4.9,
      reviewCount: 124,
      image: assets.metal,
      material: "Metal",
      bestSeller: true,
      new: false,
      description:
        "Our flagship metal NFC business card with premium finish and durability. Perfect for executives and professionals.",
      colors: ["Silver", "Gold", "Black"],
    },
    {
      id: "wood-finish",
      name: "Wood Finish",
      slug: "wood-finish",
      price: 79,
      originalPrice: 99,
      rating: 4.7,
      reviewCount: 86,
      image: assets.bois,
      material: "Wood",
      bestSeller: false,
      new: true,
      description:
        "Eco-friendly wooden NFC business card with natural finish. Great for creative professionals and environmentally conscious individuals.",
      colors: ["Maple", "Walnut", "Cherry"],
    },
    {
      id: "essential-plastic",
      name: "Essential Plastic",
      slug: "essential-plastic",
      price: 49,
      originalPrice: 59,
      rating: 4.5,
      reviewCount: 210,
      image: assets.pvc,
      material: "Plastic",
      bestSeller: false,
      new: false,
      description:
        "Affordable and durable plastic NFC business card. Perfect for startups and budget-conscious professionals.",
      colors: ["White", "Black", "Blue", "Red"],
    },
  ];

  return (
    <div className="flex min-h-screen flex-col">
      <main className="flex-1">
        <div className="px-4 py-8 md:px-6 md:py-12">
          <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <div>
              <h1 className="text-3xl font-bold tracking-tight">
                NFC Business Cards
              </h1>
              <p className="text-muted-foreground">
                Choose from our selection of premium NFC business cards
              </p>
            </div>
            <div className="flex items-center gap-2">
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="outline" className="gap-2">
                    <SlidersHorizontal className="h-4 w-4" />
                    Sort
                    <ChevronDown className="h-4 w-4" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                  <DropdownMenuItem>Price: Low to High</DropdownMenuItem>
                  <DropdownMenuItem>Price: High to Low</DropdownMenuItem>
                  <DropdownMenuItem>Best Selling</DropdownMenuItem>
                  <DropdownMenuItem>Top Rated</DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </div>

          <Separator className="my-6" />

          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            {products.map((product) => (
              <Link
                key={product.id}
                href={`/products/${product.slug}`}
                className="group"
              >
                <Card className="h-full overflow-hidden transition-all hover:shadow-md">
                  <div className="relative aspect-square overflow-hidden flex items-center justify-center">
                    <NextImage
                      src={product.image || "/placeholder.svg"}
                      alt={product.name}
                      className="object-cover transition-transform group-hover:scale-105"
                    />
                    <div className="absolute left-2 top-2 flex flex-col gap-1">
                      {product.bestSeller && (
                        <Badge className="text-text bg-yellow-500 hover:bg-yellow-600">
                          Best Seller
                        </Badge>
                      )}
                      {product.new && <Badge className="text-text">New</Badge>}
                    </div>
                  </div>
                  <CardContent className="p-4">
                    <div className="mb-2">
                      <h3 className="text-xl font-semibold">{product.name}</h3>
                      <p className="text-sm text-muted-foreground">
                        {product.material}
                      </p>
                    </div>
                    <p className="mb-4 text-sm text-muted-foreground">
                      {product.description}
                    </p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-baseline gap-2">
                        <span className="text-lg font-bold">
                          ${product.price}
                        </span>
                        {product.originalPrice > product.price && (
                          <span className="text-sm text-muted-foreground line-through">
                            ${product.originalPrice}
                          </span>
                        )}
                      </div>
                      <div className="flex items-center gap-1">
                        <span className="text-sm font-medium">★</span>
                        <span className="text-sm">{product.rating}</span>
                        <span className="text-xs text-muted-foreground">
                          ({product.reviewCount})
                        </span>
                      </div>
                    </div>
                  </CardContent>
                  <CardFooter className="border-t p-4">
                    <CustomButton className="w-full font-bold">
                      View details
                    </CustomButton>
                  </CardFooter>
                </Card>
              </Link>
            ))}
          </div>

          <div className="mt-12 rounded-lg bg-muted p-6 text-center">
            <h2 className="mb-2 text-2xl font-bold">Need a Custom Solution?</h2>
            <p className="mb-4 text-muted-foreground">
              We offer custom designs and bulk orders for businesses. Contact us
              to discuss your specific requirements.
            </p>
            <Button size="lg" asChild>
              <Link href="/contact">Contact Sales</Link>
            </Button>
          </div>
        </div>
      </main>
    </div>
  );
}
