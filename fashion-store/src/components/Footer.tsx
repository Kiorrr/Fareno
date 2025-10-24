import Link from "next/link";

const LINKS = [
  { title: "Aide", items: [
    { href: "/faq", label: "FAQ" },
    { href: "/contact", label: "Contact" },
    { href: "/returns", label: "Retours & échanges" },
  ]},
  { title: "À propos", items: [
    { href: "/about", label: "Notre histoire" },
    { href: "/blog", label: "Blog" },
    { href: "/careers", label: "Carrières" },
  ]},
  { title: "Légal", items: [
    { href: "/privacy", label: "Confidentialité" },
    { href: "/terms", label: "Conditions" },
    { href: "/cookies", label: "Cookies" },
  ]},
];

export default function Footer() {
  return (
    <footer className="mt-16 border-t border-zinc-200/60 bg-zinc-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-2 gap-8 sm:grid-cols-4">
          {LINKS.map((col) => (
            <div key={col.title}>
              <h3 className="text-sm font-semibold text-zinc-900">{col.title}</h3>
              <ul className="mt-4 space-y-2 text-sm text-zinc-600">
                {col.items.map((item) => (
                  <li key={item.href}>
                    <Link className="hover:text-zinc-900" href={item.href}>{item.label}</Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
          <div className="col-span-2 sm:col-span-1">
            <h3 className="text-sm font-semibold text-zinc-900">Newsletter</h3>
            <p className="mt-4 text-sm text-zinc-600">Recevez tendances, nouveautés et offres exclusives.</p>
            <form className="mt-4 flex max-w-sm items-center gap-2">
              <input type="email" required placeholder="Votre email" className="h-10 w-full rounded-md border border-zinc-300 bg-white px-3 text-sm outline-none focus:ring-2 focus:ring-accent/40" aria-label="Adresse email" />
              <button className="h-10 shrink-0 rounded-md bg-accent px-4 text-sm font-medium text-white hover:brightness-110">S’abonner</button>
            </form>
          </div>
        </div>
        <div className="mt-12 flex items-center justify-between border-t border-zinc-200 pt-6 text-xs text-zinc-500">
          <p>© {new Date().getFullYear()} Modeé. Tous droits réservés.</p>
          <p>Fait avec Next.js</p>
        </div>
      </div>
    </footer>
  );
}
