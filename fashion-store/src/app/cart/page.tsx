"use client";
import Image from "next/image";
import Link from "next/link";
import { useCart } from "../../store/cart";

export default function CartPage() {
  const { items, updateQty, remove, total } = useCart();
  const grandTotal = total();

  return (
    <div className="container py-10">
      <h1 className="font-title text-3xl">Panier</h1>
      {items.length === 0 ? (
        <div className="mt-6 text-sm text-zinc-600">
          Votre panier est vide. <Link href="/" className="text-accent">Continuer vos achats</Link>
        </div>
      ) : (
        <div className="mt-6 grid gap-8 lg:grid-cols-3">
          <div className="lg:col-span-2 space-y-4">
            {items.map((i) => (
              <div key={i.variantId} className="flex items-center gap-4 rounded-xl border border-zinc-200 bg-white p-4">
                {i.image && (
                  <div className="relative h-20 w-16 overflow-hidden rounded-md bg-zinc-100">
                    <Image src={i.image} alt="" fill className="object-cover" />
                  </div>
                )}
                <div className="flex-1">
                  <div className="text-sm font-medium text-zinc-900">{i.title}</div>
                  <div className="mt-1 text-xs text-zinc-600">{i.price.toFixed(2)} €</div>
                </div>
                <div className="flex items-center gap-2">
                  <input
                    type="number"
                    min={1}
                    value={i.quantity}
                    onChange={(e) => updateQty(i.variantId, Number(e.target.value))}
                    className="h-9 w-16 rounded-md border border-zinc-300 px-2 text-sm"
                  />
                  <button className="text-xs text-zinc-500 hover:text-zinc-800" onClick={() => remove(i.variantId)}>Retirer</button>
                </div>
              </div>
            ))}
          </div>
          <div className="rounded-xl border border-zinc-200 bg-white p-6">
            <div className="flex items-center justify-between text-sm">
              <span>Sous-total</span>
              <span>{grandTotal.toFixed(2)} €</span>
            </div>
            <p className="mt-2 text-xs text-zinc-500">Les frais de livraison et taxes seront calculés à l’étape suivante.</p>
            <Link href="/checkout" className="btn-primary mt-4 w-full">Passer au paiement</Link>
          </div>
        </div>
      )}
    </div>
  );
}
