"use client";

import React, { createContext, useCallback, useContext, useEffect, useMemo, useReducer } from "react";

export type CartItem = {
  id: string;
  slug: string;
  title: string;
  image: string;
  price: number; // unit price in cents
  quantity: number;
  color?: string;
  size?: string;
};

type CartState = {
  items: CartItem[];
};

type Action =
  | { type: "ADD_ITEM"; item: CartItem }
  | { type: "REMOVE_ITEM"; id: string; variantKey?: string }
  | { type: "UPDATE_QTY"; id: string; quantity: number; variantKey?: string }
  | { type: "CLEAR" };

const STORAGE_KEY = "ecom_cart_v1";

function getVariantKey(item: Pick<CartItem, "id" | "color" | "size">): string {
  return `${item.id}::${item.color ?? "_"}::${item.size ?? "_"}`;
}

function cartReducer(state: CartState, action: Action): CartState {
  switch (action.type) {
    case "ADD_ITEM": {
      const key = getVariantKey(action.item);
      const existingIndex = state.items.findIndex((i) => getVariantKey(i) === key);
      if (existingIndex !== -1) {
        const updated = [...state.items];
        updated[existingIndex] = {
          ...updated[existingIndex],
          quantity: updated[existingIndex].quantity + action.item.quantity,
        };
        return { items: updated };
      }
      return { items: [...state.items, action.item] };
    }
    case "REMOVE_ITEM": {
      const next = state.items.filter((i) => i.id !== action.id || (action.variantKey && getVariantKey(i) !== action.variantKey));
      return { items: next };
    }
    case "UPDATE_QTY": {
      const next = state.items
        .map((i) => {
          const matches = i.id === action.id && (!action.variantKey || getVariantKey(i) === action.variantKey);
          return matches ? { ...i, quantity: Math.max(0, action.quantity) } : i;
        })
        .filter((i) => i.quantity > 0);
      return { items: next };
    }
    case "CLEAR":
      return { items: [] };
    default:
      return state;
  }
}

type CartContextValue = {
  items: CartItem[];
  totalQuantity: number;
  subtotalCents: number;
  addItem: (item: CartItem) => void;
  removeItem: (id: string, variant?: { color?: string; size?: string }) => void;
  updateQuantity: (id: string, quantity: number, variant?: { color?: string; size?: string }) => void;
  clear: () => void;
};

const CartContext = createContext<CartContextValue | null>(null);

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [state, dispatch] = useReducer(cartReducer, { items: [] });

  useEffect(() => {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (raw) {
        const parsed = JSON.parse(raw) as CartState;
        if (Array.isArray(parsed.items)) {
          // Hydrate existing items
          parsed.items.forEach((item) => dispatch({ type: "ADD_ITEM", item }));
        }
      }
    } catch {}
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    try {
      const data: CartState = { items: state.items };
      localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
    } catch {}
  }, [state.items]);

  const addItem = useCallback((item: CartItem) => dispatch({ type: "ADD_ITEM", item }), []);
  const removeItem = useCallback((id: string, variant?: { color?: string; size?: string }) => {
    const variantKey = variant ? getVariantKey({ id, color: variant.color, size: variant.size }) : undefined;
    dispatch({ type: "REMOVE_ITEM", id, variantKey });
  }, []);
  const updateQuantity = useCallback(
    (id: string, quantity: number, variant?: { color?: string; size?: string }) => {
      const variantKey = variant ? getVariantKey({ id, color: variant.color, size: variant.size }) : undefined;
      dispatch({ type: "UPDATE_QTY", id, quantity, variantKey });
    },
    []
  );
  const clear = useCallback(() => dispatch({ type: "CLEAR" }), []);

  const value = useMemo<CartContextValue>(() => {
    const subtotalCents = state.items.reduce((sum, i) => sum + i.price * i.quantity, 0);
    const totalQuantity = state.items.reduce((sum, i) => sum + i.quantity, 0);
    return { items: state.items, subtotalCents, totalQuantity, addItem, removeItem, updateQuantity, clear };
  }, [state.items, addItem, removeItem, updateQuantity, clear]);

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export function useCart(): CartContextValue {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error("useCart must be used within CartProvider");
  return ctx;
}

export function formatPrice(cents: number, locale: string = "fr-FR", currency: string = "EUR") {
  return new Intl.NumberFormat(locale, { style: "currency", currency }).format(cents / 100);
}
