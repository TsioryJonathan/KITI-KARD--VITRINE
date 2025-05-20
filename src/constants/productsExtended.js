/* Product constant for the product page */
import assets from "../../public/images/assets";
export const products = [
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
      "Eco-friendly wooden NFC business card with natural finish.",
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
