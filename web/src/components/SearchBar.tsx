"use client";

import React, { useEffect, useMemo, useState } from "react";
import { useRouter } from "next/navigation";
import { searchProducts } from "@/lib/mock-data";

export default function SearchBar() {
  const [query, setQuery] = useState("");
  const [open, setOpen] = useState(false);
  const router = useRouter();

  const results = useMemo(() => (query.length >= 2 ? searchProducts(query).slice(0, 6) : []), [query]);

  useEffect(() => setOpen(results.length > 0), [results.length]);

  return (
    <div className="relative w-56">
      <input
        aria-label="Recherche"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        onFocus={() => setOpen(results.length > 0)}
        placeholder="Rechercher…"
        className="h-9 w-full rounded-full border border-[--color-border] bg-transparent px-3 text-sm outline-none ring-[--color-accent]/30 focus:ring-2"
      />
      {open && (
        <div className="absolute left-0 right-0 top-10 z-50 overflow-hidden rounded-xl border border-[--color-border] bg-white shadow-xl dark:bg-zinc-900">
          {results.map((p) => (
            <button
              key={p.id}
              onMouseDown={(e) => e.preventDefault()}
              onClick={() => router.push(`/product/${p.slug}`)}
              className="flex w-full items-center justify-between px-3 py-2 text-left text-sm hover:bg-[--color-muted]"
            >
              <span className="line-clamp-1">{p.title}</span>
              <span className="text-xs text-zinc-500 capitalize">{p.category}</span>
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
