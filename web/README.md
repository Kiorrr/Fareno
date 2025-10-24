## Boutique Mode — E-commerce de mode (Next.js + Tailwind CSS)

Application Next.js (App Router) pour une boutique en ligne de vêtements et accessoires. Inclut un design moderne, navigation claire, recherche, catalogue avec filtres, fiches produit, panier et checkout simplifié.

### Scripts

- `npm run dev`: lancer le serveur de développement
- `npm run build`: build de production
- `npm run start`: démarrer le serveur en production
- `npm run lint`: exécuter ESLint

### Structure principale

- `src/app`: routes et layout
  - `/` page d’accueil (Hero, catégories, témoignages, newsletter)
  - `/catalog` catalogue + filtres côté client
  - `/product/[slug]` fiche produit
  - `/cart` panier avec persistance localStorage
  - `/checkout` flow en 3 étapes (livraison, paiement, confirmation)
- `src/components`: UI réutilisable (Header, Footer, ProductCard, etc.)
- `src/state/CartProvider.tsx`: état global du panier
- `src/lib`: types et données mock

### Design system

- Polices: Montserrat (sans-serif), Playfair Display (titres)
- Couleurs: neutres (fond, texte) + accent bleu/émeraude
- Tailwind v4 et variables CSS pour thèmes clair/sombre

### SEO & A11y

- `metadata` dans `layout.tsx`, `robots.ts`, `sitemap.ts`
- Composants accessibles (focus, contraste, libellés)

### Démarrage

```bash
npm install
npm run dev
```

Ouvrez `http://localhost:3000`.

### Remarques

- Les images produits sont des placeholders; remplacez-les par vos médias.
- Intégrez ensuite vos paiements (Stripe/PayPal) et votre backend/catalogue réel.
