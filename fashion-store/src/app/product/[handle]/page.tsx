import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import { products } from "../../../lib/products";
import { useCart } from "../../../store/cart";
import { useWishlist } from "../../../store/wishlist";
import { Heart } from "lucide-react";
import { Suspense } from "react";

export function generateStaticParams() {
  return products.map((p) => ({ handle: p.handle }));
}

export function generateMetadata({ params }: { params: { handle: string } }): Metadata {
  const product = products.find((p) => p.handle === params.handle);
  if (!product) return { title: "Produit introuvable" };
  return { title: product.title, description: product.description };
}

export default function ProductPage({ params }: { params: { handle: string } }) {
  const product = products.find((p) => p.handle === params.handle);
  if (!product) return notFound();
  const base = product.variants[0];

  return (
    <div className="container py-10">
      <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
        {/* Gallery */}
        <div className="grid gap-3 sm:grid-cols-2">
          {product.images.map((img, i) => (
            <div key={i} className="relative aspect-[4/5] overflow-hidden rounded-xl bg-zinc-100">
              <Image src={img.url} alt={img.alt ?? product.title} fill className="object-cover" />
            </div>
          ))}
        </div>
        {/* Details */}
        <div>
          <h1 className="font-title text-3xl text-zinc-900">{product.title}</h1>
          <p className="mt-2 text-lg text-zinc-700">{base?.price.toFixed(2)} €</p>
          <p className="mt-6 text-sm text-zinc-700">{product.description}</p>

          <Suspense>
            <ClientActions
              productId={product.id}
              handle={product.handle}
              title={product.title}
              price={base?.price ?? 0}
              image={product.images[0]?.url}
              variantId={base?.id ?? ""}
            />
          </Suspense>

          {product.material && (
            <div className="mt-8 text-sm text-zinc-600">
              <div><span className="font-medium text-zinc-900">Matériaux:</span> {product.material}</div>
              <div className="mt-1"><span className="font-medium text-zinc-900">Entretien:</span> {product.care}</div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

function ClientActions({
  productId,
  handle,
  title,
  price,
  image,
  variantId,
}: {
  productId: string;
  handle: string;
  title: string;
  price: number;
  image?: string;
  variantId: string;
}) {
  // mark as client component by using hooks
  const add = useCart((s) => s.add);
  const toggle = useWishlist((s) => s.toggle);
  const has = useWishlist((s) => s.has);

  const inWishlist = has(productId);

  return (
    <div className="mt-6 grid grid-cols-2 gap-3">
      <button
        className="btn-primary"
        onClick={() => add({ productId, variantId, title, price, quantity: 1, image })}
      >
        Ajouter au panier
      </button>
      <button
        className="inline-flex items-center justify-center gap-2 rounded-md border border-zinc-300 px-4 py-2"
        onClick={() => toggle({ productId, handle, title, image })}
        aria-pressed={inWishlist}
      >
        <Heart className={inWishlist ? "fill-red-500 stroke-red-500" : ""} />
        {inWishlist ? "Dans la liste" : "Ajouter à la liste"}
      </button>
    </div>
  );
}
