import assets from "../../public/images/assets";
export const materials = [
    {
      id: "metal",
      name: "Premium Metal",
      description:
        "Durable stainless steel with laser engraving for a sophisticated, premium feel.",
      features: [
        "Waterproof",
        "Scratch Resistant",
        "Premium Weight",
        "Laser Engraved",
      ],
      image: assets.metal,
    },
    {
      id: "wood",
      name: "Natural Wood",
      description:
        "Sustainably sourced wood with elegant engraving for an eco-friendly option.",
      features: ["Eco-Friendly", "Unique Grain", "Lightweight", "Natural Feel"],
      image: assets.bois,
    },
    {
      id: "plastic",
      name: "Composite Plastic",
      description:
        "Durable plastic cards with full-color printing for vibrant, detailed designs.",
      features: [
        "Affordable",
        "Full-Color Printing",
        "Flexible",
        "Weather Resistant",
      ],
      image: assets.pvc,
    },
  ];