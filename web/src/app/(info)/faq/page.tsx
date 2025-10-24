export default function FaqPage() {
  return (
    <div className="container py-16">
      <h1 className="font-serif text-3xl">FAQ</h1>
      <div className="mt-6 space-y-4">
        <details className="rounded-md border border-[--color-border] p-4">
          <summary className="font-medium">Quels sont les délais de livraison ?</summary>
          <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">Entre 2 et 5 jours ouvrés en France métropolitaine.</p>
        </details>
        <details className="rounded-md border border-[--color-border] p-4">
          <summary className="font-medium">Comment retourner un article ?</summary>
          <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">Vous disposez de 30 jours. Consultez la page Retours.</p>
        </details>
      </div>
    </div>
  );
}
