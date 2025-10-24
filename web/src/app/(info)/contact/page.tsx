export default function ContactPage() {
  return (
    <div className="container py-16">
      <h1 className="font-serif text-3xl">Contact</h1>
      <form className="mt-6 max-w-xl space-y-3">
        <input placeholder="Nom" className="w-full rounded-md border border-[--color-border] bg-transparent px-3 py-2 text-sm" />
        <input type="email" placeholder="Email" className="w-full rounded-md border border-[--color-border] bg-transparent px-3 py-2 text-sm" />
        <textarea placeholder="Message" rows={5} className="w-full rounded-md border border-[--color-border] bg-transparent px-3 py-2 text-sm" />
        <button className="rounded-md bg-[--color-accent] px-5 py-2 text-sm font-medium text-[--color-accent-foreground]">Envoyer</button>
      </form>
    </div>
  );
}
