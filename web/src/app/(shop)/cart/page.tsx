"use client";

import Image from "next/image";
import Link from "next/link";
import { formatPrice, useCart } from "@/state/CartProvider";

export default function CartPage() {
  const { items, subtotalCents, updateQuantity, removeItem } = useCart();

  return (
    <div className="container py-10 md:py-16">
      <h1 className="font-serif text-3xl">Panier</h1>
      {items.length === 0 ? (
        <div className="mt-8">Votre panier est vide. <Link href="/catalog" className="text-[--color-accent]">Continuer vos achats</Link></div>
      ) : (
        <div className="mt-6 grid gap-8 lg:grid-cols-3">
          <div className="lg:col-span-2 space-y-4">
            {items.map((item) => (
              <div key={`${item.id}-${item.color}-${item.size}`} className="flex items-center gap-4 rounded-xl border border-[--color-border] bg-white p-4 dark:bg-zinc-900">
                <div className="relative h-20 w-16 overflow-hidden rounded-md bg-[--color-muted]">
                  <Image src={item.image} alt={item.title} fill className="object-cover" />
                </div>
                <div className="flex-1">
                  <div className="font-medium">{item.title}</div>
                  <div className="text-sm text-zinc-500">{item.color ?? ''} {item.size ?? ''}</div>
                  <div className="mt-2 flex items-center gap-2 text-sm">
                    <label>Qté</label>
                    <input
                      type="number"
                      min={1}
                      value={item.quantity}
                      onChange={(e) => updateQuantity(item.id, Number(e.target.value) || 1, { color: item.color, size: item.size })}
                      className="w-16 rounded-md border border-[--color-border] bg-transparent px-2 py-1"
                    />
                    <button onClick={() => removeItem(item.id, { color: item.color, size: item.size })} className="ml-2 text-sm text-rose-600">Retirer</button>
                  </div>
                </div>
                <div className="font-medium">{formatPrice(item.price * item.quantity)}</div>
              </div>
            ))}
          </div>
          <aside className="rounded-xl border border-[--color-border] bg-white p-4 dark:bg-zinc-900">
            <div className="flex justify-between text-sm text-zinc-600">
              <span>Sous-total</span>
              <span>{formatPrice(subtotalCents)}</span>
            </div>
            <div className="mt-4">
              <Link href="/checkout" className="block rounded-md bg-[--color-accent] px-4 py-2 text-center text-sm font-medium text-[--color-accent-foreground] hover:opacity-90">
                Passer au paiement
              </Link>
            </div>
          </aside>
        </div>
      )}
    </div>
  );
}
