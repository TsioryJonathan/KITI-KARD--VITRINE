"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { ArrowLeft, CreditCard, ShieldCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Separator } from "@/components/ui/separator";
import { useCart } from "@/context/CartContext";
import { CartSummary } from "@/components/pages/cart/CartSummary";
import { useRouter } from "next/navigation";
import CustomButton from "@/components/CustomButton";

export default function CheckoutPage() {
  const { items, getCartCount, isInitialized } = useCart();
  const router = useRouter();
  const [isSubmitting, setIsSubmitting] = useState(false);

  // If the cart is empty, redirect to the cart page
  useEffect(() => {
    if (isInitialized && items.length === 0) {
      router.push("/cart");
    }
  }, [items, router, isInitialized]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate a delay for processing the order
    setTimeout(() => {
      // Redirect to the confirmation page
      router.push("/checkout/confirmation");
    }, 1500);
  };

  return (
    <div className="flex min-h-screen flex-col">
      <main className="flex-1">
        <div className="px-4 py-8 md:px-6 md:py-12">
          <div className="mb-6">
            <Link
              href="/cart"
              className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground"
            >
              <ArrowLeft className="h-4 w-4" />
              Back to Cart
            </Link>
          </div>

          <h1 className="text-3xl font-bold tracking-tight">Checkout</h1>
          <p className="text-muted-foreground">
            {getCartCount()} items in your cart
          </p>

          <Separator className="my-6" />

          <form
            onSubmit={handleSubmit}
            className="grid grid-cols-1 gap-8 md:grid-cols-3"
          >
            <div className="md:col-span-2 space-y-8">
              {/* Shipping Information */}
              <div>
                <h2 className="mb-4 text-xl font-semibold">
                  Shipping Information
                </h2>
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <div>
                    <Label htmlFor="firstName">First Name</Label>
                    <Input id="firstName" required className="mt-1" />
                  </div>
                  <div>
                    <Label htmlFor="lastName">Last Name</Label>
                    <Input id="lastName" required className="mt-1" />
                  </div>
                  <div className="sm:col-span-2">
                    <Label htmlFor="email">Email Address</Label>
                    <Input id="email" type="email" required className="mt-1" />
                  </div>
                  <div className="sm:col-span-2">
                    <Label htmlFor="address">Street Address</Label>
                    <Input id="address" required className="mt-1" />
                  </div>
                  <div>
                    <Label htmlFor="city">City</Label>
                    <Input id="city" required className="mt-1" />
                  </div>
                  <div>
                    <Label htmlFor="postalCode">Postal Code</Label>
                    <Input id="postalCode" required className="mt-1" />
                  </div>
                  <div>
                    <Label htmlFor="country">Country</Label>
                    <Input id="country" required className="mt-1" />
                  </div>
                  <div>
                    <Label htmlFor="phone">Phone Number</Label>
                    <Input id="phone" required className="mt-1" />
                  </div>
                </div>
              </div>

              {/* Payment Method */}
              <div>
                <h2 className="mb-4 text-xl font-semibold">Payment Method</h2>
                <RadioGroup defaultValue="card">
                  <div className="flex items-center space-x-2 rounded-md border p-4">
                    <RadioGroupItem value="card" id="card" />
                    <Label
                      htmlFor="card"
                      className="flex items-center gap-2 font-normal"
                    >
                      <CreditCard className="h-5 w-5" />
                      Credit / Debit Card
                    </Label>
                  </div>
                  <div className="mt-2 rounded-md border p-4">
                    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                      <div className="sm:col-span-2">
                        <Label htmlFor="cardNumber">Card Number</Label>
                        <Input
                          id="cardNumber"
                          placeholder="1234 5678 9012 3456"
                          required
                          className="mt-1"
                        />
                      </div>
                      <div>
                        <Label htmlFor="expiryDate">Expiry Date</Label>
                        <Input
                          id="expiryDate"
                          placeholder="MM/YY"
                          required
                          className="mt-1"
                        />
                      </div>
                      <div>
                        <Label htmlFor="cvc">CVC</Label>
                        <Input
                          id="cvc"
                          placeholder="123"
                          required
                          className="mt-1"
                        />
                      </div>
                      <div className="sm:col-span-2">
                        <Label htmlFor="nameOnCard">Name on Card</Label>
                        <Input id="nameOnCard" required className="mt-1" />
                      </div>
                    </div>
                  </div>
                </RadioGroup>
              </div>
            </div>

            <div>
              <div className="sticky top-8 rounded-lg border p-6">
                <h2 className="mb-4 text-lg font-semibold">Order Summary</h2>
                <CartSummary />

                <div className="mt-6 flex items-center rounded-md bg-muted p-3">
                  <ShieldCheck className="mr-2 h-5 w-5 text-emerald-500" />
                  <span className="text-sm">
                    Your payment information is secure
                  </span>
                </div>

                <CustomButton
                  type="submit"
                  className="mt-6 w-full"
                  size="lg"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Processing..." : "Complete Order"}
                </CustomButton>
              </div>
            </div>
          </form>
        </div>
      </main>
    </div>
  );
}
