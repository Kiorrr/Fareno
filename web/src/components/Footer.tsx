import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-[--color-border] bg-[--color-muted] py-12 text-sm">
      <div className="container grid grid-cols-1 gap-8 md:grid-cols-4">
        <div>
          <div className="font-serif text-lg font-semibold">BoutiqueMode</div>
          <p className="mt-2 max-w-xs text-zinc-600 dark:text-zinc-400">
            Style moderne, pièces intemporelles et conseils mode pour toute la famille.
          </p>
        </div>
        <div>
          <div className="mb-3 font-medium">Aide</div>
          <ul className="space-y-2 text-zinc-600 dark:text-zinc-400">
            <li><Link href="/faq" className="hover:text-[--color-accent]">FAQ</Link></li>
            <li><Link href="/contact" className="hover:text-[--color-accent]">Contact</Link></li>
            <li><Link href="/returns" className="hover:text-[--color-accent]">Retours & échanges</Link></li>
          </ul>
        </div>
        <div>
          <div className="mb-3 font-medium">Catégories</div>
          <ul className="space-y-2 text-zinc-600 dark:text-zinc-400">
            <li><Link href="/women" className="hover:text-[--color-accent]">Femmes</Link></li>
            <li><Link href="/men" className="hover:text-[--color-accent]">Hommes</Link></li>
            <li><Link href="/kids" className="hover:text-[--color-accent]">Enfants</Link></li>
            <li><Link href="/accessories" className="hover:text-[--color-accent]">Accessoires</Link></li>
          </ul>
        </div>
        <div>
          <div className="mb-3 font-medium">Newsletter</div>
          <form className="flex gap-2">
            <input
              type="email"
              placeholder="Votre email"
              className="w-full rounded-md border border-[--color-border] bg-white px-3 py-2 text-sm outline-none ring-[--color-accent]/30 focus:ring-2 dark:bg-zinc-900"
            />
            <button className="rounded-md bg-[--color-accent] px-3 py-2 text-sm font-medium text-[--color-accent-foreground] hover:opacity-90">
              S'abonner
            </button>
          </form>
        </div>
      </div>
      <div className="container mt-10 flex flex-col items-center justify-between gap-4 border-t border-[--color-border] pt-6 text-zinc-500 md:flex-row">
        <div>© {new Date().getFullYear()} BoutiqueMode. Tous droits réservés.</div>
        <div className="flex gap-4">
          <Link href="/privacy" className="hover:text-[--color-accent]">Confidentialité</Link>
          <Link href="/terms" className="hover:text-[--color-accent]">Conditions</Link>
        </div>
      </div>
    </footer>
  );
}
