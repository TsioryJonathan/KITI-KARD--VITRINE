"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowLeft, ShoppingCart } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { useCart } from "@/context/CartContext";
import { CartItem } from "@/components/pages/cart/CartItem";
import { EmptyCart } from "@/components/pages/cart/EmptyCart";
import { CartSummary } from "@/components/pages/cart/CartSummary";
import CustomButton from "@/components/CustomButton";

export default function CartPage() {
  const { items, getCartCount } = useCart();
  const [isProcessing, setIsProcessing] = useState(false);

  const handleCheckout = () => {
    setIsProcessing(true);
    // Simulate a delay before redirecting to checkout
    setTimeout(() => {
      window.location.href = "/checkout";
    }, 800);
  };

  // If the cart is empty, show the empty cart component
  if (items.length === 0) {
    return <EmptyCart />;
  }

  return (
    <div className="flex min-h-screen flex-col">
      <main className="flex-1">
        <div className="px-4 py-8 md:px-6 md:py-12">
          <div className="mb-6">
            <Link
              href="/products"
              className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground"
            >
              <ArrowLeft className="h-4 w-4" />
              Continue Shopping
            </Link>
          </div>

          <div className="flex items-center justify-between">
            <h1 className="text-3xl font-bold tracking-tight">Your Cart</h1>
            <p className="text-muted-foreground">{getCartCount()} items</p>
          </div>

          <Separator className="my-6" />

          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            <div className="md:col-span-2">
              <div className="space-y-4">
                {items.map((item) => (
                  <CartItem key={`${item.id}-${item.color}`} item={item} />
                ))}
              </div>
            </div>

            <div>
              <div className="sticky top-8 rounded-lg border p-6">
                <h2 className="mb-4 text-lg font-semibold">Order Summary</h2>
                <CartSummary />
                <CustomButton
                  onClick={handleCheckout}
                  className="mt-6 w-full gap-2"
                  size="lg"
                  disabled={isProcessing}
                >
                  <ShoppingCart className="h-5 w-5" />
                  {isProcessing ? "Processing..." : "Proceed to Checkout"}
                </CustomButton>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
