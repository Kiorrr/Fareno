"use client";
import Link from "next/link";
import { useState } from "react";
import { Search, Heart, ShoppingBag } from "lucide-react";
import Logo from "./Logo";
import clsx from "clsx";
import { useCart } from "../store/cart";

const NAV = [
  { href: "/category/women", label: "Femmes" },
  { href: "/category/men", label: "Hommes" },
  { href: "/category/kids", label: "Enfants" },
  { href: "/category/accessories", label: "Accessoires" },
  { href: "/category/new", label: "Nouveautés" },
  { href: "/category/sale", label: "Soldes" },
];

export default function Header() {
  const [query, setQuery] = useState("");
  const count = useCart((s) => s.count());

  return (
    <header className="sticky top-0 z-40 border-b border-zinc-200/60 bg-background/80 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between gap-4">
          <Link href="/" aria-label="Aller à l’accueil" className="shrink-0">
            <Logo />
          </Link>

          <nav className="hidden md:flex items-center gap-6">
            {NAV.map((item) => (
              <Link key={item.href} href={item.href} className="text-sm text-zinc-700 hover:text-zinc-900">
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-4">
            <form action="/search" className="hidden sm:flex items-center rounded-full border border-zinc-200 bg-white px-3 py-1.5 focus-within:ring-2 focus-within:ring-accent/40">
              <Search className="h-4 w-4 text-zinc-500" aria-hidden />
              <input
                name="q"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Rechercher..."
                className={clsx(
                  "ml-2 w-56 bg-transparent text-sm outline-none placeholder:text-zinc-400",
                )}
                aria-label="Rechercher des produits"
              />
            </form>
            <Link href="/wishlist" className="relative p-2" aria-label="Liste de souhaits">
              <Heart className="h-5 w-5" />
            </Link>
            <Link href="/cart" className="relative p-2" aria-label="Panier">
              <ShoppingBag className="h-5 w-5" />
              {count > 0 && (
                <span className="absolute -right-1 -top-1 flex h-4 min-w-4 items-center justify-center rounded-full bg-accent px-1 text-[10px] text-white">
                  {count}
                </span>
              )}
            </Link>
          </div>
        </div>
      </div>

      <div className="md:hidden border-t border-zinc-200">
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-2 text-sm">
          {NAV.slice(0,4).map((item) => (
            <Link key={item.href} href={item.href} className="text-zinc-700 hover:text-zinc-900">
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
