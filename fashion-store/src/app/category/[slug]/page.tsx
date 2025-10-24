import { products } from "../../../lib/products";
import ProductCard from "../../../components/ProductCard";
import type { Metadata } from "next";

export function generateStaticParams() {
  return ["women", "men", "kids", "accessories"].map((slug) => ({ slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const titleMap: Record<string, string> = {
    women: "Femmes",
    men: "Hommes",
    kids: "Enfants",
    accessories: "Accessoires",
  };
  return { title: `${titleMap[params.slug] ?? "Boutique"}` };
}

export default function CategoryPage({ params }: { params: { slug: string } }) {
  const filtered = products.filter((p) => p.category === params.slug);
  return (
    <div className="container py-10">
      <div className="flex items-end justify-between gap-4">
        <h1 className="font-title text-3xl">
          {params.slug === "women" && "Femmes"}
          {params.slug === "men" && "Hommes"}
          {params.slug === "kids" && "Enfants"}
          {params.slug === "accessories" && "Accessoires"}
        </h1>
        <div className="text-sm text-zinc-600">{filtered.length} articles</div>
      </div>
      {/* TODO: Filters & sorting UI */}
      <div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
        {filtered.map((p) => (
          <ProductCard key={p.id} product={p} />)
        )}
      </div>
    </div>
  );
}
