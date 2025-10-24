import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative isolate">
      <div className="container grid items-center gap-8 py-10 md:grid-cols-2 md:py-16 lg:py-24">
        <div className="order-2 md:order-1">
          <h1 className="font-serif text-4xl leading-tight tracking-tight sm:text-5xl">
            Nouvelle collection automne
            <span className="block text-[--color-accent]">Élégance & confort</span>
          </h1>
          <p className="mt-4 max-w-lg text-zinc-600 dark:text-zinc-400">
            Découvrez des pièces incontournables, pensées pour durer et sublimer votre style au quotidien.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Link href="/women" className="rounded-full bg-[--color-accent] px-5 py-2.5 text-sm font-medium text-[--color-accent-foreground] hover:opacity-90">
              Découvrir Femmes
            </Link>
            <Link href="/men" className="rounded-full border border-[--color-border] px-5 py-2.5 text-sm hover:border-[--color-accent] hover:text-[--color-accent]">
              Découvrir Hommes
            </Link>
          </div>
        </div>
        <div className="order-1 aspect-[4/3] w-full overflow-hidden rounded-2xl bg-[--color-muted] md:order-2">
          <Image
            src="/hero.jpg"
            alt="Collection automne"
            fill
            className="object-cover"
            sizes="(min-width: 768px) 50vw, 100vw"
            priority
          />
        </div>
      </div>
    </section>
  );
}
