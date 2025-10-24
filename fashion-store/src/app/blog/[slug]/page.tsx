import { notFound } from "next/navigation";

const posts = {
  "tendances-automne": {
    title: "Tendances mode automne",
    body: "Les couleurs chaudes et les superpositions dominent la saison...",
  },
  "guide-tailles": {
    title: "Guide des tailles: bien choisir",
    body: "Mesurer son tour de poitrine, taille et hanches pour un meilleur fit...",
  },
} as const;

export function generateStaticParams() {
  return Object.keys(posts).map((slug) => ({ slug }));
}

export default function BlogPost({ params }: { params: { slug: string } }) {
  const post = posts[params.slug as keyof typeof posts];
  if (!post) return notFound();
  return (
    <div className="container prose prose-zinc py-10">
      <h1 className="font-title not-prose text-3xl">{post.title}</h1>
      <article className="mt-4 text-zinc-800">{post.body}</article>
    </div>
  );
}
