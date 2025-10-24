"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import dynamic from "next/dynamic";
const SearchBar = dynamic(() => import("@/components/SearchBar"), { ssr: false });

type NavItem = { href: string; label: string };

const nav: NavItem[] = [
  { href: "/catalog?category=women", label: "Femmes" },
  { href: "/catalog?category=men", label: "Hommes" },
  { href: "/catalog?category=kids", label: "Enfants" },
  { href: "/catalog?category=accessories", label: "Accessoires" },
  { href: "/blog", label: "Blog" },
];

export function Header() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-40 w-full border-b border-[--color-border] bg-[--color-background]/80 backdrop-blur supports-[backdrop-filter]:bg-[--color-background]/60">
      <div className="container flex h-16 items-center justify-between">
        <Link href="/" className="font-serif text-xl font-semibold tracking-tight">
          Boutique<span className="text-[--color-accent]">Mode</span>
        </Link>

        <nav className="hidden gap-6 md:flex">
          {nav.map((item) => {
            const active = pathname?.startsWith(item.href);
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`text-sm transition-colors hover:text-[--color-accent] ${active ? "text-[--color-accent]" : "text-zinc-600 dark:text-zinc-300"}`}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center gap-3">
          <div className="hidden md:block">
            <SearchBar />
          </div>
          <Link
            href="/account"
            className="hidden h-9 items-center rounded-full border border-[--color-border] px-3 text-sm text-zinc-600 transition-colors hover:border-[--color-accent] hover:text-[--color-accent] sm:flex dark:text-zinc-300"
          >
            Compte
          </Link>
          <Link
            href="/cart"
            className="h-9 items-center rounded-full bg-[--color-accent] px-3 text-sm font-medium text-[--color-accent-foreground] transition-colors hover:opacity-90 flex"
          >
            Panier
          </Link>
        </div>
      </div>
    </header>
  );
}

export default Header;
