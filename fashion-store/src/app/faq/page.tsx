export default function FAQPage() {
  const faqs = [
    { q: "Quels sont les délais de livraison ?", a: "2-4 jours ouvrés en France métropolitaine." },
    { q: "Comment retourner un article ?", a: "Vous disposez de 30 jours pour un retour gratuit." },
    { q: "Quels moyens de paiement acceptez-vous ?", a: "CB, PayPal, virement. Paiement en plusieurs fois bientôt disponible." },
  ];
  return (
    <div className="container py-10">
      <h1 className="font-title text-3xl">FAQ</h1>
      <div className="mt-6 divide-y divide-zinc-200 rounded-xl border border-zinc-200 bg-white">
        {faqs.map((f) => (
          <details key={f.q} className="group p-4 open:bg-zinc-50">
            <summary className="cursor-pointer list-none text-sm font-medium text-zinc-900">{f.q}</summary>
            <p className="mt-2 text-sm text-zinc-700">{f.a}</p>
          </details>
        ))}
      </div>
    </div>
  );
}
