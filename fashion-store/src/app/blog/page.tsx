import Link from "next/link";

const posts = [
  { slug: "tendances-automne", title: "Tendances mode automne", excerpt: "Couleurs chaudes, superpositions et textures riches pour la saison.", date: "2025-09-01" },
  { slug: "guide-tailles", title: "Guide des tailles: bien choisir", excerpt: "Conseils pour choisir la bonne taille selon les marques.", date: "2025-08-12" },
];

export default function BlogPage() {
  return (
    <div className="container py-10">
      <h1 className="font-title text-3xl">Blog</h1>
      <div className="mt-6 grid gap-4 sm:grid-cols-2">
        {posts.map((p) => (
          <Link key={p.slug} href={`/blog/${p.slug}`} className="rounded-xl border border-zinc-200 bg-white p-6 hover:bg-zinc-50">
            <div className="text-sm text-zinc-500">{new Date(p.date).toLocaleDateString("fr-FR")}</div>
            <h2 className="mt-1 text-lg font-medium text-zinc-900">{p.title}</h2>
            <p className="mt-2 text-sm text-zinc-700">{p.excerpt}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}
