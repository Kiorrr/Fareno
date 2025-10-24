import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <div className="font-sans">
      {/* Hero */}
      <section className="container flex flex-col items-center gap-8 py-16 sm:py-24">
        <p className="text-xs uppercase tracking-[0.25em] text-accent">Nouvelle collection</p>
        <h1 className="font-title text-4xl sm:text-5xl md:text-6xl tracking-tight text-zinc-900 text-center">
          L’élégance au quotidien
        </h1>
        <p className="max-w-2xl text-center text-zinc-600">
          Découvrez des pièces modernes, intemporelles et responsables pour femmes, hommes et enfants.
        </p>
        <div className="flex gap-3">
          <Link href="/category/new" className="btn-primary">Découvrir</Link>
          <Link href="/category/sale" className="inline-flex items-center justify-center rounded-md border border-zinc-300 px-4 py-2 text-zinc-900 hover:bg-zinc-50">
            Soldes
          </Link>
        </div>
        <div className="mt-10 grid w-full grid-cols-2 gap-3 sm:grid-cols-4" role="list" aria-label="Catégories visuelles">
          {["/women.jpg","/men.jpg","/kids.jpg","/accessories.jpg"].map((src, i) => (
            <div key={i} className="relative aspect-[4/5] overflow-hidden rounded-xl bg-zinc-100" role="listitem">
              <Image src={src} alt="Catégorie" fill className="object-cover" />
            </div>
          ))}
        </div>
      </section>

      {/* Categories */}
      <section className="container py-12">
        <h2 className="font-title text-2xl">Catégories</h2>
        <div className="mt-6 grid grid-cols-2 gap-4 sm:grid-cols-4" role="list">
          {[
            { href: "/category/women", label: "Femmes", color: "bg-rose-100" },
            { href: "/category/men", label: "Hommes", color: "bg-blue-100" },
            { href: "/category/kids", label: "Enfants", color: "bg-emerald-100" },
            { href: "/category/accessories", label: "Accessoires", color: "bg-zinc-100" },
          ].map((c) => (
            <Link key={c.href} href={c.href} className={`group relative rounded-xl p-6 ${c.color}`} role="listitem" aria-label={`Voir la catégorie ${c.label}`}>
              <span className="text-lg font-medium text-zinc-900">{c.label}</span>
              <span className="absolute right-4 top-4 rounded-full bg-white/70 px-3 py-1 text-xs text-zinc-700 transition group-hover:bg-white">Voir</span>
            </Link>
          ))}
        </div>
      </section>

      {/* Trends placeholder */}
      <section className="container py-12">
        <h2 className="font-title text-2xl">Tendances</h2>
        <p className="mt-2 text-sm text-zinc-600">Bientôt: produits populaires dynamiques.</p>
      </section>

      {/* Testimonials placeholder */}
      <section className="container py-12">
        <h2 className="font-title text-2xl">Ils nous font confiance</h2>
        <div className="mt-6 grid gap-4 sm:grid-cols-3">
          {[
            { name: "Camille", text: "Qualité au top et livraison rapide." },
            { name: "Nora", text: "Sélection tendance, j’adore !" },
            { name: "Léa", text: "Service client impeccable." },
          ].map((t) => (
            <div key={t.name} className="rounded-xl border border-zinc-200 bg-white p-6 text-sm text-zinc-700">
              “{t.text}”
              <div className="mt-3 text-xs text-zinc-500">— {t.name}</div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
