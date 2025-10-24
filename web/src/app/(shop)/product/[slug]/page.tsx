"use client";

import Image from "next/image";
import { useParams } from "next/navigation";
import { getProductBySlug } from "@/lib/mock-data";
import { useCart, formatPrice } from "@/state/CartProvider";

export default function ProductPage() {
  const params = useParams<{ slug: string }>();
  const product = getProductBySlug(params.slug);
  const { addItem } = useCart();

  if (!product) return <div className="container py-16">Produit introuvable.</div>;

  return (
    <div className="container grid gap-8 py-10 md:grid-cols-2 md:py-16">
      <div className="relative aspect-[4/5] w-full overflow-hidden rounded-2xl bg-[--color-muted]">
        <Image src={product.images[0] ?? "/next.svg"} alt={product.title} fill className="object-cover" />
        </div>
      <div>
        <h1 className="font-serif text-3xl leading-tight">{product.title}</h1>
        <div className="mt-2 text-sm text-zinc-500">⭐ {product.rating.toFixed(1)} • {product.reviewsCount} avis</div>
        <div className="mt-4 text-2xl font-semibold">{formatPrice(product.price)}</div>
        <p className="mt-4 text-zinc-700 dark:text-zinc-300">{product.description}</p>
        <div className="mt-6 flex gap-3">
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
            className="rounded-md bg-[--color-accent] px-5 py-2.5 text-sm font-medium text-[--color-accent-foreground] hover:opacity-90"
          >
            Ajouter au panier
          </button>
          <button className="rounded-md border border-[--color-border] px-5 py-2.5 text-sm hover:border-[--color-accent] hover:text-[--color-accent]">
            Ajouter à la liste de souhaits
          </button>
        </div>
      </div>
    </div>
  );
}
