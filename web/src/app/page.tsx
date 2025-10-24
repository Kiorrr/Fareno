import Hero from "@/components/Hero";
import Categories from "@/components/Categories";
import Testimonials from "@/components/Testimonials";
import Newsletter from "@/components/Newsletter";

export default function Home() {
  return (
    <>
      <Hero />
      <Categories />
      <div className="container">
        <a
          href="/catalog"
          className="inline-block rounded-full bg-[--color-accent] px-5 py-2.5 text-sm font-medium text-[--color-accent-foreground] hover:opacity-90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[--color-accent]"
        >
          Voir le catalogue
        </a>
      </div>
      <Testimonials />
      <Newsletter />
    </>
  );
}
