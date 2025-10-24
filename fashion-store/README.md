## Modeé — Boutique e-commerce de mode (MVP)

Stack: Next.js 16 (App Router), TypeScript, Tailwind CSS, Zustand, Fuse.js.

### Scripts

```bash
npm run dev     # lance le serveur de dev
npm run build   # build de production
npm run start   # lance le serveur prod après build
```

### Fonctionnalités
- Page d’accueil avec hero, catégories, tendances, témoignages
- Pages catégories dynamiques (`/category/[slug]`)
- Fiche produit (`/product/[handle]`) avec galerie et actions
- Panier et liste de souhaits (persistés localStorage)
- Checkout en 3 étapes (mock validation)
- Recherche avec autosuggest (Fuse.js)
- SEO de base (OpenGraph/Twitter) et a11y de base
- Blog, Contact, FAQ

### Structure
- `src/app` pages et layout (App Router)
- `src/components` UI partageables
- `src/lib` types, dataset produits, filtres
- `src/store` état global (Zustand)

### Personnalisation design
- Police titres: Playfair Display, texte: Montserrat
- Palette: neutres + accents (bleu, rose, émeraude)
- Utilitaires: `.btn-primary`, `.container`, `.font-title`

### À faire (selon besoins)
- Connecter un backend/catalogue (Shopify, Medusa, Saleor…)
- Authentification et comptes clients
- Paiement réel (Stripe)
- Images réelles, 360°, vidéos produit
- Tests E2E/Unit, suivi analytics, RGPD/consentement
