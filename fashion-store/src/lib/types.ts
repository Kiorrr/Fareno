export type VariantOption = {
  name: string; // e.g., Taille, Couleur
  value: string; // e.g., M, Noir
};

export type Variant = {
  id: string;
  options: VariantOption[];
  price: number;
  compareAtPrice?: number;
  sku?: string;
  stock: number;
};

export type Product = {
  id: string;
  title: string;
  handle: string;
  description: string;
  category: "women" | "men" | "kids" | "accessories";
  images: { url: string; alt?: string }[];
  material?: string;
  care?: string;
  tags?: string[];
  rating?: number;
  reviewsCount?: number;
  variants: Variant[];
};
