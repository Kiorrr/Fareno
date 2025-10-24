import Link from "next/link";
import fs from "node:fs";
import path from "node:path";

export default function BlogPage() {
  const dir = path.join(process.cwd(), "src", "content", "blog");
  const files = fs.readdirSync(dir).filter((f) => f.endsWith(".mdx"));

  return (
    <div className="container py-16">
      <h1 className="font-serif text-3xl">Blog</h1>
      <ul className="mt-6 space-y-3">
        {files.map((file) => {
          const slug = file.replace(/\.mdx?$/, "");
          return (
            <li key={slug}>
              <Link href={`/blog/${slug}`} className="text-[--color-accent] hover:underline">
                {slug}
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
