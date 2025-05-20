"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { CheckCircle2, Package } from "lucide-react";

import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

export default function ConfirmationPage() {
  const router = useRouter();
  const [orderNumber, setOrderNumber] = useState("");
  const [estimatedDelivery, setEstimatedDelivery] = useState("");

  useEffect(() => {
    // Generate a random order number
    const randomOrderNumber = Math.floor(
      100000 + Math.random() * 900000
    ).toString();
    setOrderNumber(randomOrderNumber);

    // Calculate estimated delivery date (7-10 business days from now)
    const today = new Date();
    const deliveryDate = new Date(today);
    deliveryDate.setDate(today.getDate() + 7 + Math.floor(Math.random() * 4));

    // Format the date
    const options = {
      year: "numeric",
      month: "long",
      day: "numeric",
    };
    setEstimatedDelivery(deliveryDate.toLocaleDateString(undefined, options));
  }, []);

  return (
    <div className="flex min-h-screen flex-col">
      <main className="flex flex-1 items-center justify-center">
        <div className="container flex max-w-md flex-col items-center px-4 py-16 text-center">
          <div className="mb-6 rounded-full bg-emerald-100 p-6 dark:bg-emerald-900">
            <CheckCircle2 className="h-10 w-10 text-emerald-600 dark:text-emerald-400" />
          </div>
          <h1 className="mb-2 text-2xl font-bold">Order Confirmed!</h1>
          <p className="mb-6 text-muted-foreground">
            Thank you for your purchase. Your order has been confirmed and will
            be shipped soon.
          </p>

          <div className="mb-8 w-full rounded-lg border p-6 text-left">
            <div className="mb-4">
              <p className="text-sm text-muted-foreground">Order Number</p>
              <p className="font-medium">{orderNumber}</p>
            </div>
            <div className="mb-4">
              <p className="text-sm text-muted-foreground">
                Estimated Delivery
              </p>
              <p className="font-medium">{estimatedDelivery}</p>
            </div>
            <div className="flex items-center rounded-md bg-muted p-3">
              <Package className="mr-2 h-5 w-5 text-primary" />
              <span className="text-sm">
                You'll receive shipping updates via email
              </span>
            </div>
          </div>

          <div className="flex w-full flex-col gap-3 sm:flex-row">
            <Button asChild size="lg" className="flex-1">
              <Link href="/products">Continue Shopping</Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="flex-1">
              <Link href="/dashboard">View Order</Link>
            </Button>
          </div>
        </div>
      </main>
    </div>
  );
}
