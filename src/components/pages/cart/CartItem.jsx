"use client";

import { Minus, Plus, Trash2 } from "lucide-react";
import NextImage from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { useCart } from "@/context/CartContext";

export function CartItem({ item }) {
  const { updateQuantity, removeFromCart } = useCart();

  const decreaseQuantity = () => {
    if (item.quantity > 1) {
      updateQuantity(item.id, item.quantity - 1, item.color);
    }
  };

  const increaseQuantity = () => {
    updateQuantity(item.id, item.quantity + 1, item.color);
  };

  const handleRemove = () => {
    removeFromCart(item.id, item.color);
  };


  return (
    <div className="flex items-start gap-4 rounded-lg border p-4">
      <div className="relative h-24 w-24 flex-shrink-0 overflow-hidden rounded-md">
        <NextImage
          src={item.image}
          alt={item.name}
          fill
          className="object-cover"
        />
      </div>

      <div className="flex flex-1 flex-col">
        <div className="flex justify-between">
          <div>
            <h3 className="font-medium">
              <Link href={`/products/${item.slug}`} className="hover:underline">
                {item.name}
              </Link>
            </h3>
            <p className="mt-1 text-sm text-muted-foreground">
              {item.material}
              {item.color && ` • ${item.color}`}
            </p>
          </div>
          <p className="font-medium">${item.price}</p>
        </div>

        <div className="mt-2 flex items-center justify-between">
          <div className="flex items-center">
            <Button
              variant="outline"
              size="icon"
              className="h-8 w-8 rounded-r-none"
              onClick={decreaseQuantity}
              disabled={item.quantity <= 1}
            >
              <Minus className="h-3 w-3" />
              <span className="sr-only">Decrease quantity</span>
            </Button>
            <div className="flex h-8 w-10 items-center justify-center border-y border-input bg-transparent text-sm">
              {item.quantity}
            </div>
            <Button
              variant="outline"
              size="icon"
              className="h-8 w-8 rounded-l-none"
              onClick={increaseQuantity}
            >
              <Plus className="h-3 w-3" />
              <span className="sr-only">Increase quantity</span>
            </Button>
          </div>

          <Button
            variant="ghost"
            size="sm"
            className="h-8 px-2 text-muted-foreground"
            onClick={handleRemove}
          >
            <Trash2 className="mr-1 h-4 w-4" />
            Remove
          </Button>
        </div>
      </div>
    </div>
  );
}
