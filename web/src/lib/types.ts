export type Category = "women" | "men" | "kids" | "accessories";

export type Product = {
  id: string;
  slug: string;
  title: string;
  description: string;
  category: Category;
  price: number; // in cents
  images: string[]; // paths under /public
  colors: string[];
  sizes: string[];
  rating: number; // 0-5
  reviewsCount: number;
  tags?: string[];
};

export type FilterState = {
  query?: string;
  category?: Category;
  colors?: string[];
  sizes?: string[];
  minPrice?: number; // cents
  maxPrice?: number; // cents
  sort?: "relevance" | "price_asc" | "price_desc" | "popular" | "new";
  view?: "grid" | "list";
};
