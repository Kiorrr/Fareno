"use client";

import { useMemo, useState, useEffect } from "react";
import { getProductsByCategory } from "@/lib/mock-data";
import { FilterState, Category } from "@/lib/types";
import ProductGrid from "@/components/product/ProductGrid";
import Filters from "@/components/product/Filters";
import { useSearchParams } from "next/navigation";

export default function CatalogPage() {
  const searchParams = useSearchParams();
  const initialCategory = (searchParams.get("category") as Category | null) ?? undefined;
  const [filters, setFilters] = useState<FilterState>({ sort: "relevance", category: initialCategory });

  useEffect(() => {
    const c = (searchParams.get("category") as Category | null) ?? undefined;
    setFilters((f) => ({ ...f, category: c }));
  }, [searchParams]);

  const products = useMemo(() => {
    let items = getProductsByCategory(filters.category);
    if (filters.query) {
      const q = filters.query.toLowerCase();
      items = items.filter((p) => p.title.toLowerCase().includes(q) || p.description.toLowerCase().includes(q));
    }
    if (filters.colors?.length) {
      items = items.filter((p) => p.colors?.some((c) => filters.colors!.includes(c)));
    }
    if (filters.sizes?.length) {
      items = items.filter((p) => p.sizes?.some((s) => filters.sizes!.includes(s)));
    }
    if (filters.minPrice != null) items = items.filter((p) => p.price >= filters.minPrice!);
    if (filters.maxPrice != null) items = items.filter((p) => p.price <= filters.maxPrice!);

    switch (filters.sort) {
      case "price_asc":
        items = [...items].sort((a, b) => a.price - b.price);
        break;
      case "price_desc":
        items = [...items].sort((a, b) => b.price - a.price);
        break;
      case "popular":
        items = [...items].sort((a, b) => b.reviewsCount - a.reviewsCount);
        break;
      case "new":
      case "relevance":
      default:
        break;
    }
    return items;
  }, [filters]);

  return (
    <div className="container py-10 md:py-16">
      <div className="flex items-center justify-between">
        <h1 className="font-serif text-3xl">Catalogue</h1>
      </div>
      <div className="mt-6 grid grid-cols-1 gap-6 lg:grid-cols-4">
        <div className="lg:col-span-1">
          <Filters state={filters} onChange={setFilters} />
        </div>
        <div className="lg:col-span-3">
          <ProductGrid products={products} />
        </div>
      </div>
    </div>
  );
}
