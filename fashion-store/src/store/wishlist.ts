"use client";
import { create } from "zustand";
import { persist } from "zustand/middleware";

type Wish = { productId: string; handle: string; title: string; image?: string };

type WishlistState = {
  items: Wish[];
  toggle: (wish: Wish) => void;
  has: (productId: string) => boolean;
};

export const useWishlist = create<WishlistState>()(
  persist(
    (set, get) => ({
      items: [],
      toggle: (wish) =>
        set((s) => {
          const exists = s.items.some((i) => i.productId === wish.productId);
          return exists
            ? { items: s.items.filter((i) => i.productId !== wish.productId) }
            : { items: [...s.items, wish] };
        }),
      has: (productId) => get().items.some((i) => i.productId === productId),
    }),
    { name: "modee-wishlist" }
  )
);
