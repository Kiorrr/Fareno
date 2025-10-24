"use client";
import Image from "next/image";
import Link from "next/link";
import { useWishlist } from "../../store/wishlist";

export default function WishlistPage() {
  const { items, toggle } = useWishlist();

  return (
    <div className="container py-10">
      <h1 className="font-title text-3xl">Liste de souhaits</h1>
      {items.length === 0 ? (
        <div className="mt-6 text-sm text-zinc-600">
          Votre liste est vide. <Link href="/" className="text-accent">Explorer</Link>
        </div>
      ) : (
        <div className="mt-6 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
          {items.map((i) => (
            <div key={i.productId} className="overflow-hidden rounded-xl border border-zinc-200 bg-white">
              <div className="relative aspect-[4/5]">
                {i.image && <Image src={i.image} alt="" fill className="object-cover" />}
              </div>
              <div className="p-4">
                <div className="text-sm font-medium text-zinc-900">{i.title}</div>
                <div className="mt-3 flex gap-2">
                  <Link className="btn-primary" href={`/product/${i.handle}`}>Voir</Link>
                  <button className="rounded-md border border-zinc-300 px-3 py-2 text-sm" onClick={() => toggle(i)}>Retirer</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
