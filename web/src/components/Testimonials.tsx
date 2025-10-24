export default function Testimonials() {
  return (
    <section className="container py-10 md:py-16">
      <h2 className="font-serif text-2xl">Ils nous font confiance</h2>
      <div className="mt-6 grid gap-4 md:grid-cols-3">
        {[1, 2, 3].map((i) => (
          <figure key={i} className="rounded-xl border border-[--color-border] bg-white p-6 shadow-sm dark:bg-zinc-900">
            <blockquote className="text-zinc-700 dark:text-zinc-300">
              "Des pièces de qualité et une livraison rapide. Très satisfaite !"
            </blockquote>
            <figcaption className="mt-3 text-sm text-zinc-500">Camille — Paris</figcaption>
          </figure>
        ))}
      </div>
    </section>
  );
}
