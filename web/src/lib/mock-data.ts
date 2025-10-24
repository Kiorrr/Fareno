import type { Product, Category } from "./types";

export const products: Product[] = [
  {
    id: "p1",
    slug: "manteau-laine-classique",
    title: "Manteau en laine classique",
    description: "Un manteau intemporel, coupe droite, 80% laine.",
    category: "women",
    price: 18900,
    images: ["/p1-1.jpg", "/p1-2.jpg"],
    colors: ["beige", "black"],
    sizes: ["XS", "S", "M", "L", "XL"],
    rating: 4.6,
    reviewsCount: 128,
    tags: ["automne", "intemporel"],
  },
  {
    id: "p2",
    slug: "chemise-oxford",
    title: "Chemise Oxford",
    description: "Chemise 100% coton, coupe ajustée.",
    category: "men",
    price: 5900,
    images: ["/p2-1.jpg"],
    colors: ["blue", "white"],
    sizes: ["S", "M", "L", "XL"],
    rating: 4.4,
    reviewsCount: 76,
  },
  {
    id: "p3",
    slug: "basket-confort-kids",
    title: "Baskets confort enfants",
    description: "Semelle souple, parfaites pour l'école.",
    category: "kids",
    price: 4500,
    images: ["/p3-1.jpg"],
    colors: ["pink", "green"],
    sizes: ["28", "30", "32", "34"],
    rating: 4.7,
    reviewsCount: 54,
  },
  {
    id: "p4",
    slug: "sac-cuir-mini",
    title: "Sac en cuir mini",
    description: "Petit sac à bandoulière en cuir pleine fleur.",
    category: "accessories",
    price: 9900,
    images: ["/p4-1.jpg"],
    colors: ["black", "brown"],
    sizes: [],
    rating: 4.5,
    reviewsCount: 92,
  },
];

export function getProductsByCategory(category?: Category): Product[] {
  return products.filter((p) => (category ? p.category === category : true));
}

export function getProductBySlug(slug: string): Product | undefined {
  return products.find((p) => p.slug === slug);
}

export function searchProducts(query: string): Product[] {
  const q = query.toLowerCase();
  return products.filter(
    (p) =>
      p.title.toLowerCase().includes(q) ||
      p.description.toLowerCase().includes(q) ||
      p.tags?.some((t) => t.toLowerCase().includes(q))
  );
}
