"use client";
import { useState } from "react";
import { useCart } from "../../store/cart";

function StepIndicator({ step }: { step: number }) {
  const labels = ["Livraison", "Paiement", "Confirmation"];
  return (
    <ol className="flex items-center gap-2 text-xs">
      {labels.map((label, i) => {
        const idx = i + 1;
        const active = step === idx;
        const done = step > idx;
        return (
          <li key={label} className="flex items-center gap-2">
            <span className={`flex h-6 w-6 items-center justify-center rounded-full ${done ? "bg-emerald-500 text-white" : active ? "bg-accent text-white" : "bg-zinc-200 text-zinc-700"}`}>{idx}</span>
            <span className={`${active ? "text-zinc-900" : "text-zinc-500"}`}>{label}</span>
            {i < labels.length - 1 && <span className="mx-2 h-px w-6 bg-zinc-300" />}
          </li>
        );
      })}
    </ol>
  );
}

export default function CheckoutPage() {
  const { items, total, clear } = useCart();
  const [step, setStep] = useState(1);
  const [shipping, setShipping] = useState({ fullName: "", address: "", city: "", zip: "", country: "" });
  const [payment, setPayment] = useState({ card: "", exp: "", cvc: "" });

  const subTotal = total();

  function next() {
    if (step === 1) {
      if (!shipping.fullName || !shipping.address || !shipping.city || !shipping.zip || !shipping.country) return alert("Veuillez remplir l’adresse complète.");
    }
    if (step === 2) {
      if (!/^[0-9]{16}$/.test(payment.card.replace(/\s/g, ""))) return alert("Numéro de carte invalide");
      if (!/^[0-9]{3,4}$/.test(payment.cvc)) return alert("CVC invalide");
    }
    setStep((s) => Math.min(3, s + 1));
  }

  function submitOrder() {
    clear();
    setStep(3);
  }

  return (
    <div className="container py-10">
      <h1 className="font-title text-3xl">Paiement</h1>
      <div className="mt-4"><StepIndicator step={step} /></div>

      <div className="mt-8 grid gap-8 lg:grid-cols-3">
        <div className="lg:col-span-2 space-y-6">
          {step === 1 && (
            <section className="rounded-xl border border-zinc-200 bg-white p-6">
              <h2 className="text-lg font-medium">Adresse de livraison</h2>
              <div className="mt-4 grid gap-4 sm:grid-cols-2">
                <input className="rounded-md border border-zinc-300 p-2" placeholder="Nom complet" value={shipping.fullName} onChange={(e) => setShipping({ ...shipping, fullName: e.target.value })} />
                <input className="rounded-md border border-zinc-300 p-2 sm:col-span-2" placeholder="Adresse" value={shipping.address} onChange={(e) => setShipping({ ...shipping, address: e.target.value })} />
                <input className="rounded-md border border-zinc-300 p-2" placeholder="Ville" value={shipping.city} onChange={(e) => setShipping({ ...shipping, city: e.target.value })} />
                <input className="rounded-md border border-zinc-300 p-2" placeholder="Code postal" value={shipping.zip} onChange={(e) => setShipping({ ...shipping, zip: e.target.value })} />
                <input className="rounded-md border border-zinc-300 p-2" placeholder="Pays" value={shipping.country} onChange={(e) => setShipping({ ...shipping, country: e.target.value })} />
              </div>
              <div className="mt-4 flex justify-end">
                <button className="btn-primary" onClick={next}>Continuer</button>
              </div>
            </section>
          )}

          {step === 2 && (
            <section className="rounded-xl border border-zinc-200 bg-white p-6">
              <h2 className="text-lg font-medium">Paiement</h2>
              <div className="mt-4 grid gap-4 sm:grid-cols-2">
                <input className="rounded-md border border-zinc-300 p-2 sm:col-span-2" placeholder="Carte (16 chiffres)" value={payment.card} onChange={(e) => setPayment({ ...payment, card: e.target.value })} />
                <input className="rounded-md border border-zinc-300 p-2" placeholder="Expiration (MM/AA)" value={payment.exp} onChange={(e) => setPayment({ ...payment, exp: e.target.value })} />
                <input className="rounded-md border border-zinc-300 p-2" placeholder="CVC" value={payment.cvc} onChange={(e) => setPayment({ ...payment, cvc: e.target.value })} />
              </div>
              <div className="mt-4 flex justify-between">
                <button className="rounded-md border border-zinc-300 px-4 py-2" onClick={() => setStep(1)}>Retour</button>
                <button className="btn-primary" onClick={next}>Payer</button>
              </div>
            </section>
          )}

          {step === 3 && (
            <section className="rounded-xl border border-zinc-200 bg-white p-6">
              <h2 className="text-lg font-medium">Confirmation</h2>
              <p className="mt-2 text-sm text-zinc-700">Merci pour votre commande ! Un email de confirmation vous a été envoyé.</p>
              <a href="/" className="btn-primary mt-4 inline-flex">Retour à l’accueil</a>
            </section>
          )}
        </div>

        <aside className="rounded-xl border border-zinc-200 bg-white p-6">
          <h3 className="text-sm font-medium">Récapitulatif</h3>
          <div className="mt-2 space-y-1 text-sm text-zinc-700">
            <div className="flex justify-between"><span>Sous-total</span><span>{subTotal.toFixed(2)} €</span></div>
            <div className="flex justify-between"><span>Livraison</span><span>5.00 €</span></div>
            <div className="flex justify-between"><span>Total</span><span>{(subTotal + 5).toFixed(2)} €</span></div>
          </div>
          {step === 2 && (
            <button className="btn-primary mt-4 w-full" onClick={submitOrder}>Confirmer et payer</button>
          )}
        </aside>
      </div>
    </div>
  );
}
