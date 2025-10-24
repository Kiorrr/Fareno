"use client";
import { useMemo, useState } from "react";
import Fuse from "fuse.js";
import { products } from "../../lib/products";
import ProductCard from "../../components/ProductCard";

export default function SearchPage({ searchParams }: { searchParams: { q?: string } }) {
  const [query, setQuery] = useState(searchParams.q ?? "");

  const fuse = useMemo(() => new Fuse(products, {
    keys: ["title", "description", "tags"],
    threshold: 0.35,
    includeScore: true,
  }), []);

  const results = useMemo(() => {
    if (!query) return products;
    return fuse.search(query).map((r) => r.item);
  }, [query, fuse]);

  return (
    <div className="container py-10">
      <h1 className="font-title text-3xl">Recherche</h1>
      <div className="mt-4 flex items-center gap-2">
        <input
          className="h-10 w-full max-w-md rounded-md border border-zinc-300 px-3 text-sm"
          placeholder="Chercher un produit, ex: blazer"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
      </div>

      <div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
        {results.map((p) => (
          <ProductCard key={p.id} product={p} />
        ))}
      </div>
    </div>
  );
}
