import Link from "next/link";

const categories = [
  { href: "/women", title: "Femmes", color: "bg-pink-100 text-pink-900" },
  { href: "/men", title: "Hommes", color: "bg-blue-100 text-blue-900" },
  { href: "/kids", title: "Enfants", color: "bg-emerald-100 text-emerald-900" },
  { href: "/accessories", title: "Accessoires", color: "bg-violet-100 text-violet-900" },
];

export default function Categories() {
  return (
    <section className="container py-10 md:py-16">
      <h2 className="font-serif text-2xl">Catégories populaires</h2>
      <div className="mt-6 grid grid-cols-2 gap-4 md:grid-cols-4">
        {categories.map((c) => (
          <Link
            key={c.href}
            href={c.href}
            className={`group rounded-xl ${c.color} p-6 transition-transform hover:-translate-y-1`}
          >
            <div className="text-lg font-semibold">{c.title}</div>
            <div className="mt-2 text-sm opacity-70">Découvrir</div>
          </Link>
        ))}
      </div>
    </section>
  );
}
