"use client";

import { createContext, useContext, useState, useEffect } from "react";

// Create the cart context
const CartContext = createContext();

// Create a provider component
export function CartProvider({ children }) {
  const [items, setItems] = useState([]);

  // Load cart from localStorage on initial render
  const [isInitialized, setIsInitialized] = useState(false); // ⬅️ Nouvel état

  useEffect(() => {
    const savedCart = localStorage.getItem("cart");
    if (savedCart) {
      try {
        setItems(JSON.parse(savedCart));
      } catch (error) {
        console.error("Failed to parse cart from localStorage:", error);
        setItems([]);
      }
    }
    setIsInitialized(true); // ✅ Panier chargé (même si vide)
  }, []);

  // Save cart to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(items));
  }, [items]);

  // Add an item to the cart
  const addToCart = (item) => {
    setItems((prevItems) => {
      // Check if the item already exists in the cart (with the same color if applicable)
      const existingItemIndex = prevItems.findIndex(
        (i) => i.id === item.id && i.color === item.color
      );

      if (existingItemIndex !== -1) {
        // If the item exists, update its quantity
        const updatedItems = [...prevItems];
        updatedItems[existingItemIndex].quantity += item.quantity;
        return updatedItems;
      } else {
        // If the item doesn't exist, add it to the cart
        return [...prevItems, item];
      }
    });
  };

  // Remove an item from the cart
  const removeFromCart = (itemId, color) => {
    setItems((prevItems) =>
      prevItems.filter((item) => !(item.id === itemId && item.color === color))
    );
  };

  // Update the quantity of an item in the cart
  const updateQuantity = (itemId, quantity, color) => {
    if (quantity <= 0) {
      removeFromCart(itemId, color);
      return;
    }

    setItems((prevItems) =>
      prevItems.map((item) =>
        item.id === itemId && item.color === color
          ? { ...item, quantity }
          : item
      )
    );
  };

  // Clear the cart
  const clearCart = () => {
    setItems([]);
  };

  // Calculate the total price of all items in the cart
  const getCartTotal = () => {
    return items.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  // Calculate the total number of items in the cart
  const getCartCount = () => {
    return items.reduce((count, item) => count + item.quantity, 0);
  };

  // Calculate shipping cost (free shipping for orders over 100)
  const getShippingCost = () => {
    const subtotal = getCartTotal();
    return subtotal >= 100 ? 0 : 10;
  };

  return (
    <CartContext.Provider
      value={{
        items,
        addToCart,
        removeFromCart,
        updateQuantity,
        isInitialized,
        clearCart,
        getCartTotal,
        getCartCount,
        getShippingCost,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

// Create a hook to use the cart context
export function useCart() {
  const context = useContext(CartContext);
  if (context === undefined) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
}
