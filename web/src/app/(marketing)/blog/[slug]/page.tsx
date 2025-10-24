import { readFileSync, existsSync } from "node:fs";
import path from "node:path";

export default async function BlogPost({ params }: { params: { slug: string } }) {
  const file = path.join(process.cwd(), "src", "content", "blog", `${params.slug}.mdx`);
  if (!existsSync(file)) return <div className="container py-16">Article introuvable.</div>;
  const content = readFileSync(file, "utf-8");

  // MDX in App Router can be imported directly when inside /app.
  // Here we render raw content as a fallback. For production, precompile or import.
  return (
    <div className="container prose prose-zinc py-16 dark:prose-invert">
      <pre className="whitespace-pre-wrap">{content}</pre>
    </div>
  );
}
