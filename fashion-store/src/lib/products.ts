import type { Product } from "./types";

export const products: Product[] = [
  {
    id: "p1",
    title: "Blazer en laine recyclée",
    handle: "blazer-laine-recyclee",
    description:
      "Blazer structuré en laine recyclée, coupe droite, doublure en viscose.",
    category: "women",
    images: [
      { url: "/women.jpg", alt: "Blazer en laine recyclée" },
      { url: "/women.jpg" },
    ],
    material: "50% laine recyclée, 50% polyester",
    care: "Nettoyage à sec uniquement",
    tags: ["blazer", "travail", "durable"],
    rating: 4.6,
    reviewsCount: 128,
    variants: [
      {
        id: "p1-v1",
        options: [
          { name: "Taille", value: "S" },
          { name: "Couleur", value: "Noir" },
        ],
        price: 119,
        stock: 8,
      },
      {
        id: "p1-v2",
        options: [
          { name: "Taille", value: "M" },
          { name: "Couleur", value: "Noir" },
        ],
        price: 119,
        stock: 4,
      },
    ],
  },
  {
    id: "p2",
    title: "Chemise oxford",
    handle: "chemise-oxford",
    description: "Chemise oxford coupe régulière, coton biologique.",
    category: "men",
    images: [
      { url: "/men.jpg", alt: "Chemise oxford" },
      { url: "/men.jpg" },
    ],
    material: "100% coton bio",
    care: "Lavage en machine à 30°",
    tags: ["chemise", "classique"],
    rating: 4.3,
    reviewsCount: 64,
    variants: [
      {
        id: "p2-v1",
        options: [
          { name: "Taille", value: "M" },
          { name: "Couleur", value: "Bleu" },
        ],
        price: 49,
        stock: 15,
      },
    ],
  },
];
