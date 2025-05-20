"use client";

import { useState } from "react";
import { useParams } from "next/navigation";
import { CardFooter } from "@/components/ui/card";
import { CardContent } from "@/components/ui/card";
import { Card } from "@/components/ui/card";
import {
  ArrowLeft,
  Check,
  CreditCard,
  Minus,
  Plus,
  Share2,
  Star,
} from "lucide-react";
import Link from "next/link";

import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { ProductGallery } from "@/components/pages/products/ProductGallery";
import NextImage from "next/image";
import { AddToCartButton } from "@/components/pages/products/AddToCardButton";
import { products } from "@/constants/individualProductInfo";

export default function ProductPage() {
  const [quantity, setQuantity] = useState(1);
  const [selectedColor, setSelectedColor] = useState();

  // Get the product based on the slug

  const params = useParams();
  const product = products[params.slug];

  // If product not found, you could redirect or show a not found page
  if (!product) {
    return (
      <div className="flex min-h-screen flex-col items-center justify-center">
        <h1 className="text-2xl font-bold">Product not found</h1>
        <p className="mt-2 text-muted-foreground">
          The product you're looking for doesn't exist.
        </p>
        <Button asChild className="mt-4">
          <Link href="/products">Back to Products</Link>
        </Button>
      </div>
    );
  }

  // Set default selected color if not set
  if (!selectedColor && product.colors && product.colors.length > 0) {
    setSelectedColor(product.colors[0].name);
  }

  // Get the other products for the "You might also like" section
  const otherProducts = Object.values(products).filter(
    (p) => p.id !== product.id
  );

  const decreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const increaseQuantity = () => {
    setQuantity(quantity + 1);
  };

  return (
    <div className="flex min-h-screen flex-col">
      <main className="flex-1">
        <div className="container px-4 py-8 md:px-6 md:py-12">
          <div className="mb-6">
            <Link
              href="/products"
              className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground"
            >
              <ArrowLeft className="h-4 w-4" />
              Back to Products
            </Link>
          </div>

          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
            {/* Product Gallery */}
            <ProductGallery images={product.images} />

            {/* Product Info */}
            <div className="space-y-6">
              <div>
                <div className="flex items-center gap-2">
                  {product.bestSeller && (
                    <Badge className="bg-yellow-500 hover:bg-yellow-600">
                      Best Seller
                    </Badge>
                  )}
                  {product.new && <Badge>New</Badge>}
                  <Badge
                    variant="outline"
                    className="text-emerald-500 border-emerald-200 dark:border-emerald-800"
                  >
                    In Stock
                  </Badge>
                </div>
                <h1 className="mt-3 text-3xl font-bold">{product.name}</h1>
                <div className="mt-2 flex items-center gap-2">
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`h-4 w-4 ${
                          i < Math.floor(product.rating)
                            ? "fill-yellow-400 text-yellow-400"
                            : "text-muted-foreground"
                        }`}
                      />
                    ))}
                  </div>
                  <span className="text-sm font-medium">{product.rating}</span>
                  <span className="text-sm text-muted-foreground">
                    ({product.reviewCount} reviews)
                  </span>
                </div>
              </div>

              <div className="flex items-baseline gap-2">
                <span className="text-3xl font-bold">${product.price}</span>
                {product.originalPrice > product.price && (
                  <span className="text-lg text-muted-foreground line-through">
                    ${product.originalPrice}
                  </span>
                )}
                <Badge variant="outline" className="ml-2 text-emerald-500">
                  Save ${product.originalPrice - product.price}
                </Badge>
              </div>

              <Separator />

              <div>
                <h3 className="mb-3 font-medium">Description</h3>
                <p className="text-muted-foreground">{product.description}</p>
              </div>

              <div>
                <h3 className="mb-3 font-medium">Color</h3>
                <div className="flex gap-3">
                  {product.colors.map((color) => (
                    <div key={color.name} className="text-center">
                      <button
                        className={`relative h-10 w-10 rounded-full border-2 ${
                          selectedColor === color.name
                            ? "border-primary"
                            : "border-muted"
                        } focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2`}
                        style={{ backgroundColor: color.value }}
                        aria-label={`Select ${color.name} color`}
                        onClick={() => setSelectedColor(color.name)}
                      >
                        <span className="sr-only">{color.name}</span>
                        <span className="absolute inset-0 flex items-center justify-center rounded-full">
                          {selectedColor === color.name && (
                            <Check
                              className={`h-4 w-4 ${
                                color.name === "White"
                                  ? "text-black"
                                  : "text-white"
                              }`}
                            />
                          )}
                        </span>
                      </button>
                      <span className="mt-1 block text-xs">{color.name}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="mb-3 font-medium">Quantity</h3>
                <div className="flex items-center">
                  <Button
                    variant="outline"
                    size="icon"
                    className="rounded-r-none"
                    onClick={decreaseQuantity}
                    disabled={quantity <= 1}
                  >
                    <Minus className="h-4 w-4" />
                  </Button>
                  <div className="flex h-10 w-14 items-center justify-center border-y border-input bg-transparent text-sm">
                    {quantity}
                  </div>
                  <Button
                    variant="outline"
                    size="icon"
                    className="rounded-l-none"
                    onClick={increaseQuantity}
                  >
                    <Plus className="h-4 w-4" />
                  </Button>
                </div>
              </div>

              <div className="flex flex-col gap-3 sm:flex-row">
                <AddToCartButton
                  product={product}
                  quantity={quantity}
                  selectedColor={selectedColor}
                  className="flex-1"
                />
                <Button variant="outline" size="lg" className="gap-2">
                  <Share2 className="h-5 w-5" />
                  Share
                </Button>
              </div>

              <Separator />

              <div className="space-y-4">
                <h3 className="font-medium">Key Features</h3>
                <ul className="grid grid-cols-1 gap-2 sm:grid-cols-2">
                  {product.features.map((feature, index) => (
                    <li key={index} className="flex items-center gap-2">
                      <Check className="h-4 w-4 text-emerald-500" />
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="rounded-lg bg-muted p-4">
                <div className="flex items-center gap-3">
                  <div className="rounded-full bg-primary/10 p-2">
                    <CreditCard className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-medium">Free Digital Profile</h4>
                    <p className="text-sm text-muted-foreground">
                      Includes a free digital profile that you can update
                      anytime
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-16">
            <Tabs defaultValue="details" className="w-full">
              <TabsList className="grid w-full grid-cols-2">
                <TabsTrigger value="details">Product Details</TabsTrigger>
                <TabsTrigger value="shipping">Shipping & Returns</TabsTrigger>
              </TabsList>
              <TabsContent value="details" className="mt-6 space-y-6">
                <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
                  <div>
                    <h3 className="mb-4 text-lg font-medium">Specifications</h3>
                    <div className="space-y-3">
                      <div className="flex justify-between border-b pb-2">
                        <span className="font-medium">Material</span>
                        <span>{product.material}</span>
                      </div>
                      <div className="flex justify-between border-b pb-2">
                        <span className="font-medium">Dimensions</span>
                        <span>{product.dimensions}</span>
                      </div>
                      <div className="flex justify-between border-b pb-2">
                        <span className="font-medium">Thickness</span>
                        <span>{product.thickness}</span>
                      </div>
                      <div className="flex justify-between border-b pb-2">
                        <span className="font-medium">Weight</span>
                        <span>{product.weight}</span>
                      </div>
                      <div className="flex justify-between border-b pb-2">
                        <span className="font-medium">NFC Compatibility</span>
                        <span>All modern smartphones</span>
                      </div>
                      <div className="flex justify-between border-b pb-2">
                        <span className="font-medium">Warranty</span>
                        <span>1 year warranty</span>
                      </div>
                    </div>
                  </div>
                  <div>
                    <h3 className="mb-4 text-lg font-medium">
                      What's Included
                    </h3>
                    <ul className="space-y-2">
                      <li className="flex items-center gap-2">
                        <Check className="h-4 w-4 text-emerald-500" />
                        <span>1 {product.name}</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <Check className="h-4 w-4 text-emerald-500" />
                        <span>Free Digital Profile Setup</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <Check className="h-4 w-4 text-emerald-500" />
                        <span>QR Code Generation</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <Check className="h-4 w-4 text-emerald-500" />
                        <span>Analytics Dashboard Access</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <Check className="h-4 w-4 text-emerald-500" />
                        <span>Gift Box</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <Check className="h-4 w-4 text-emerald-500" />
                        <span>User Guide & Instructions</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </TabsContent>
              <TabsContent value="shipping" className="mt-6 space-y-4">
                <div>
                  <h3 className="mb-2 text-lg font-medium">
                    Shipping Information
                  </h3>
                  <p className="text-muted-foreground">
                    We offer free worldwide shipping on all orders. Standard
                    delivery takes 3-5 business days within the US and 7-14
                    business days for international orders.
                  </p>
                </div>
                <div>
                  <h3 className="mb-2 text-lg font-medium">Return Policy</h3>
                  <p className="text-muted-foreground">
                    We offer a 30-day return policy for all our products. If
                    you're not completely satisfied with your purchase, you can
                    return it within 30 days for a full refund or exchange.
                    Please note that items must be returned in their original
                    packaging and in unused condition.
                  </p>
                </div>
              </TabsContent>
            </Tabs>
          </div>

          {otherProducts.length > 0 && (
            <div className="mt-16">
              <h2 className="mb-8 text-2xl font-bold">You Might Also Like</h2>
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                {otherProducts.map((product) => (
                  <Link
                    key={product.id}
                    href={`/products/${product.slug}`}
                    className="group"
                  >
                    <Card className="overflow-hidden transition-all hover:shadow-md">
                      <div className="relative aspect-video overflow-hidden">
                        <NextImage
                          src={product.images[0] || "/placeholder.svg"}
                          alt={product.name}
                          fill
                          className="object-cover transition-transform group-hover:scale-105"
                        />
                        <div className="absolute left-2 top-2 flex flex-col gap-1">
                          {product.bestSeller && (
                            <Badge className="bg-yellow-500 hover:bg-yellow-600">
                              Best Seller
                            </Badge>
                          )}
                          {product.new && <Badge>New</Badge>}
                        </div>
                      </div>
                      <CardContent className="p-4">
                        <div className="flex items-center justify-between">
                          <div>
                            <h3 className="font-semibold">{product.name}</h3>
                            <p className="text-sm text-muted-foreground">
                              {product.material}
                            </p>
                          </div>
                          <div className="text-right">
                            <span className="text-lg font-bold">
                              ${product.price}
                            </span>
                          </div>
                        </div>
                      </CardContent>
                      <CardFooter className="border-t p-4">
                        <Button className="w-full">View Details</Button>
                      </CardFooter>
                    </Card>
                  </Link>
                ))}
              </div>
            </div>
          )}

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
