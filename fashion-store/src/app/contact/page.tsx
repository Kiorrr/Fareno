export default function ContactPage() {
  return (
    <div className="container py-10">
      <h1 className="font-title text-3xl">Contact</h1>
      <p className="mt-2 text-sm text-zinc-600">Besoin d’aide ? Envoyez-nous un message.</p>
      <form className="mt-6 max-w-lg space-y-3">
        <input className="w-full rounded-md border border-zinc-300 p-2" placeholder="Nom" />
        <input className="w-full rounded-md border border-zinc-300 p-2" placeholder="Email" type="email" />
        <textarea className="w-full rounded-md border border-zinc-300 p-2" placeholder="Message" rows={5} />
        <button className="btn-primary">Envoyer</button>
      </form>
    </div>
  );
}
