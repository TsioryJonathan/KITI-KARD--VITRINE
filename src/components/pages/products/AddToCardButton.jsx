"use client";

import { useState } from "react";
import { ShoppingCart, Check } from "lucide-react";
import { useCart } from "@/context/CartContext";
import { useToast } from "@/hooks/use-toast";
import CustomButton from "@/components/CustomButton";
import { Button } from "@/components/ui/button";

export function AddToCartButton({
  product,
  quantity,
  selectedColor,
  className,
  variant = "default",
  size = "lg",
}) {
  const { addToCart } = useCart();
  const { toast } = useToast();
  const [isAdding, setIsAdding] = useState(false);

  const handleAddToCart = () => {
    setIsAdding(true);

    // Add the product to the cart
    addToCart({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.images[0].src,
      slug: product.slug,
      quantity,
      color: selectedColor,
      material: product.material,
    });

    // Show success toast
    toast({
      title: "Added to cart",
      description: `${quantity} × ${product.name} ${
        selectedColor ? `(${selectedColor})` : ""
      } added to your cart.`,
      duration: 3000,
    });

    // Reset the adding state after a short delay
    setTimeout(() => {
      setIsAdding(false);
    }, 1000);
  };

  return (
    <CustomButton
      onClick={handleAddToCart}
      className={`gap-2 ${className}`}
      variant={variant}
      size={size}
      disabled={isAdding}
    >
      {isAdding ? (
        <>
          <Check className="h-5 w-5" />
          Added to Cart
        </>
      ) : (
        <>
          <ShoppingCart className="h-5 w-5" />
          Add to Cart
        </>
      )}
    </CustomButton>
  );
}
