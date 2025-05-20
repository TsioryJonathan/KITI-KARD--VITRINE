"use client";

import { useCart } from "@/context/CartContext";
import { Separator } from "@/components/ui/separator";

export function CartSummary() {
  const { getCartTotal, getShippingCost } = useCart();

  const subtotal = getCartTotal();
  const shipping = getShippingCost();
  const total = subtotal + shipping;

  return (
    <div className="space-y-4">
      <div className="flex justify-between">
        <span>Subtotal</span>
        <span>${subtotal.toFixed(2)}</span>
      </div>
      <div className="flex justify-between">
        <span>Shipping</span>
        <span>
          {shipping === 0 ? (
            <span className="text-emerald-600">Free</span>
          ) : (
            `$${shipping.toFixed(2)}`
          )}
        </span>
      </div>

      {shipping > 0 && (
        <div className="rounded-md bg-muted p-2 text-xs text-muted-foreground">
          Add ${(100 - subtotal).toFixed(2)} more to qualify for free shipping
        </div>
      )}

      <Separator />

      <div className="flex justify-between font-medium">
        <span>Total</span>
        <span>${total.toFixed(2)}</span>
      </div>
    </div>
  );
}
