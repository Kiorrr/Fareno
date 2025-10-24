import Link from "next/link";
import Image from "next/image";
import type { Product } from "../lib/types";
import { Star } from "lucide-react";

export default function ProductCard({ product }: { product: Product }) {
  const price = product.variants[0]?.price ?? 0;
  return (
    <Link
      href={`/product/${product.handle}`}
      className="group block overflow-hidden rounded-xl border border-zinc-200 bg-white"
    >
      <div className="relative aspect-[4/5]">
        <Image src={product.images[0]?.url ?? "/file.svg"} alt={product.images[0]?.alt ?? product.title} fill className="object-cover transition duration-300 group-hover:scale-105" />
      </div>
      <div className="p-4">
        <div className="flex items-start justify-between gap-3">
          <h3 className="line-clamp-2 text-sm font-medium text-zinc-900">{product.title}</h3>
          {product.rating && (
            <div className="flex items-center gap-1 text-xs text-zinc-600">
              <Star className="h-4 w-4 fill-yellow-400 stroke-yellow-500" />
              <span>{product.rating.toFixed(1)}</span>
            </div>
          )}
        </div>
        <div className="mt-2 text-sm text-zinc-700">{price.toFixed(2)} €</div>
      </div>
    </Link>
  );
}
