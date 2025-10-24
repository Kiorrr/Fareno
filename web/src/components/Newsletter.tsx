export default function Newsletter() {
  return (
    <section className="container py-10 md:py-16">
      <div className="rounded-2xl bg-[--color-muted] p-8 md:p-12">
        <h3 className="font-serif text-2xl">Restez inspiré·e</h3>
        <p className="mt-2 max-w-2xl text-zinc-600 dark:text-zinc-400">
          Recevez nos nouveautés, inspirations et offres exclusives chaque semaine.
        </p>
        <form className="mt-6 flex max-w-md gap-2">
          <input
            type="email"
            placeholder="Votre email"
            className="w-full rounded-md border border-[--color-border] bg-white px-3 py-2 text-sm outline-none ring-[--color-accent]/30 focus:ring-2 dark:bg-zinc-900"
          />
          <button className="rounded-md bg-[--color-accent] px-4 py-2 text-sm font-medium text-[--color-accent-foreground] hover:opacity-90">
            S'abonner
          </button>
        </form>
      </div>
    </section>
  );
}
