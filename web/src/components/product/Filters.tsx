"use client";

import React from "react";
import { FilterState } from "@/lib/types";

export default function Filters({ state, onChange }: { state: FilterState; onChange: (s: FilterState) => void }) {
  return (
    <div className="flex flex-wrap items-end gap-3 rounded-xl border border-[--color-border] bg-white p-4 dark:bg-zinc-900">
      <div className="flex flex-col">
        <label className="text-xs text-zinc-500">Recherche</label>
        <input
          value={state.query ?? ""}
          onChange={(e) => onChange({ ...state, query: e.target.value })}
          placeholder="Mots-clés..."
          className="rounded-md border border-[--color-border] bg-transparent px-3 py-2 text-sm outline-none ring-[--color-accent]/30 focus:ring-2"
        />
      </div>
      <div className="flex flex-col">
        <label className="text-xs text-zinc-500">Taille</label>
        <select
          value={state.sizes?.[0] ?? ""}
          onChange={(e) => onChange({ ...state, sizes: e.target.value ? [e.target.value] : undefined })}
          className="rounded-md border border-[--color-border] bg-transparent px-3 py-2 text-sm"
        >
          <option value="">Toutes</option>
          {['XS','S','M','L','XL'].map(s => <option key={s} value={s}>{s}</option>)}
        </select>
      </div>
      <div className="flex flex-col">
        <label className="text-xs text-zinc-500">Couleur</label>
        <select
          value={state.colors?.[0] ?? ""}
          onChange={(e) => onChange({ ...state, colors: e.target.value ? [e.target.value] : undefined })}
          className="rounded-md border border-[--color-border] bg-transparent px-3 py-2 text-sm"
        >
          <option value="">Toutes</option>
          {['black','white','blue','green','pink','red','beige','brown'].map(c => <option key={c} value={c}>{c}</option>)}
        </select>
      </div>
      <div className="flex flex-col">
        <label className="text-xs text-zinc-500">Tri</label>
        <select
          value={state.sort ?? "relevance"}
          onChange={(e) => onChange({ ...state, sort: e.target.value as FilterState["sort"] })}
          className="rounded-md border border-[--color-border] bg-transparent px-3 py-2 text-sm"
        >
          <option value="relevance">Pertinence</option>
          <option value="price_asc">Prix croissant</option>
          <option value="price_desc">Prix décroissant</option>
          <option value="popular">Popularité</option>
          <option value="new">Nouveautés</option>
        </select>
      </div>
    </div>
  );
}
