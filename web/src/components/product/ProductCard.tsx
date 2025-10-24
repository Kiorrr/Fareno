"use client";

import Image from "next/image";
import Link from "next/link";
import { Product } from "@/lib/types";
import { useCart, formatPrice } from "@/state/CartProvider";

export default function ProductCard({ product }: { product: Product }) {
  const { addItem } = useCart();

  return (
    <div className="group overflow-hidden rounded-xl border border-[--color-border] bg-white dark:bg-zinc-900">
      <Link href={`/product/${product.slug}`} className="block">
        <div className="relative aspect-[4/5] w-full overflow-hidden bg-[--color-muted]">
          <Image
            src={product.images[0] ?? "/next.svg"}
            alt={product.title}
            fill
            className="object-cover transition-transform duration-300 group-hover:scale-105"
            sizes="(min-width: 1024px) 25vw, (min-width: 768px) 33vw, 50vw"
          />
        </div>
        <div className="p-4">
          <div className="line-clamp-1 text-sm text-zinc-500 capitalize">{product.category}</div>
          <div className="mt-1 line-clamp-2 font-medium">{product.title}</div>
          <div className="mt-2 text-sm text-zinc-500">⭐ {product.rating.toFixed(1)} • {product.reviewsCount}</div>
          <div className="mt-2 font-semibold">{formatPrice(product.price)}</div>
        </div>
      </Link>
      <div className="p-4 pt-0">
        <button
          onClick={() =>
            addItem({
              id: product.id,
              slug: product.slug,
              title: product.title,
              image: product.images[0] ?? "/next.svg",
              price: product.price,
              quantity: 1,
            })
          }
          className="w-full rounded-md bg-[--color-accent] py-2 text-sm font-medium text-[--color-accent-foreground] hover:opacity-90"
          aria-label={`Ajouter ${product.title} au panier`}
        >
          Ajouter au panier
        </button>
      </div>
    </div>
  );
}
