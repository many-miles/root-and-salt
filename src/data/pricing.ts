import type { PricingTier } from "@/types/pricing";

export const pricing: PricingTier[] = [
  {
    id: "free",
    name: "Free access",
    price: "R0",
    interval: "forever",
    description: "A gentle first taste of the Root & Salt kitchen.",
    features: [
      "Selected free recipes",
      "Public journal posts",
      "Free recipe videos",
      "Newsletter letters",
    ],
    cta: "Start free",
    isFeatured: false,
  },
  {
    id: "monthly",
    name: "Monthly membership",
    price: "R149",
    interval: "per month",
    description:
      "Join the monthly table with new recipes, videos, and seasonal inspiration.",
    features: [
      "Weekly recipes",
      "Recipe videos",
      "Meal plans",
      "Grocery lists",
      "Seasonal collections",
      "Exclusive cook-with-me videos",
      "Downloadable recipe PDFs",
    ],
    cta: "Join monthly",
    isFeatured: true,
  },
  {
    id: "annual",
    name: "Annual membership",
    price: "R1490",
    interval: "per year",
    description:
      "A full year of nourishing kitchen rituals with two months gifted.",
    features: [
      "Everything in monthly",
      "Annual member notes",
      "Priority seasonal collections",
      "Two months gifted",
      "Printable hosting menus",
    ],
    cta: "Join annually",
    isFeatured: false,
  },
];
