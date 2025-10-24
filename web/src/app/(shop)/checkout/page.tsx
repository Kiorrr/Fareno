"use client";

import { useState } from "react";
import { useCart, formatPrice } from "@/state/CartProvider";

export default function CheckoutPage() {
  const [step, setStep] = useState<1 | 2 | 3>(1);
  const { items, subtotalCents, clear } = useCart();

  return (
    <div className="container py-16">
      <h1 className="font-serif text-3xl">Paiement</h1>
      <ol className="mt-6 flex items-center gap-4 text-sm">
        <li className={`${step >= 1 ? "text-[--color-accent]" : "text-zinc-500"}`}>1. Livraison</li>
        <li className={`${step >= 2 ? "text-[--color-accent]" : "text-zinc-500"}`}>2. Paiement</li>
        <li className={`${step >= 3 ? "text-[--color-accent]" : "text-zinc-500"}`}>3. Confirmation</li>
      </ol>

      {step === 1 && (
        <form className="mt-6 grid max-w-2xl gap-4">
          <div className="grid grid-cols-2 gap-4">
            <input placeholder="Prénom" className="rounded-md border border-[--color-border] bg-transparent px-3 py-2 text-sm" />
            <input placeholder="Nom" className="rounded-md border border-[--color-border] bg-transparent px-3 py-2 text-sm" />
          </div>
          <input placeholder="Adresse" className="rounded-md border border-[--color-border] bg-transparent px-3 py-2 text-sm" />
          <div className="grid grid-cols-3 gap-4">
            <input placeholder="Code Postal" className="rounded-md border border-[--color-border] bg-transparent px-3 py-2 text-sm" />
            <input placeholder="Ville" className="rounded-md border border-[--color-border] bg-transparent px-3 py-2 text-sm" />
            <input placeholder="Pays" className="rounded-md border border-[--color-border] bg-transparent px-3 py-2 text-sm" />
          </div>
          <button type="button" onClick={() => setStep(2)} className="mt-2 w-fit rounded-md bg-[--color-accent] px-5 py-2 text-sm font-medium text-[--color-accent-foreground]">Continuer</button>
        </form>
      )}

      {step === 2 && (
        <div className="mt-6 max-w-2xl space-y-4">
          <div className="rounded-md border border-[--color-border] p-4 text-sm">Simulation de paiement (CB, PayPal, etc.).</div>
          <div className="flex items-center justify-between font-medium">
            <span>Total</span>
            <span>{formatPrice(subtotalCents)}</span>
          </div>
          <div className="flex gap-3">
            <button onClick={() => setStep(1)} className="rounded-md border border-[--color-border] px-5 py-2 text-sm">Retour</button>
            <button onClick={() => setStep(3)} className="rounded-md bg-[--color-accent] px-5 py-2 text-sm font-medium text-[--color-accent-foreground]">Payer maintenant</button>
          </div>
        </div>
      )}

      {step === 3 && (
        <div className="mt-6 max-w-2xl rounded-md border border-[--color-border] p-6">
          <h2 className="font-serif text-2xl">Merci pour votre commande !</h2>
          <p className="mt-2 text-zinc-600 dark:text-zinc-400">Un email de confirmation vous a été envoyé.</p>
          <button onClick={() => clear()} className="mt-4 rounded-md border border-[--color-border] px-5 py-2 text-sm">Vider le panier</button>
        </div>
      )}
    </div>
  );
}
