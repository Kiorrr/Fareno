import type { Metadata } from "next";
import { Montserrat, Playfair_Display } from "next/font/google";
import "./globals.css";
import Providers from "@/components/Providers";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const montserrat = Montserrat({
  variable: "--font-sans",
  weight: [
    "300",
    "400",
    "500",
    "600",
    "700",
    "800",
  ],
  subsets: ["latin"],
  display: "swap",
});

const playfair = Playfair_Display({
  variable: "--font-serif",
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Boutique Mode - E-commerce vêtements & accessoires",
    template: "%s | Boutique Mode",
  },
  description:
    "Boutique de mode en ligne: vêtements, accessoires et tendances pour femmes, hommes et enfants.",
  metadataBase: new URL("https://example.com"),
  keywords: [
    "mode",
    "vêtements",
    "accessoires",
    "homme",
    "femme",
    "enfant",
    "tendances",
    "boutique en ligne",
  ],
  openGraph: {
    type: "website",
    locale: "fr_FR",
    siteName: "Boutique Mode",
    title: "Boutique Mode - E-commerce vêtements & accessoires",
    description:
      "Achetez les dernières tendances et des pièces intemporelles pour toute la famille.",
    url: "https://example.com",
  },
  twitter: {
    card: "summary_large_image",
    title: "Boutique Mode",
    description:
      "Vêtements, accessoires et inspirations style pour femmes, hommes et enfants.",
  },
  alternates: {
    canonical: "/",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body className={`${montserrat.variable} ${playfair.variable} antialiased`}>
        <Providers>
          <Header />
          <main className="min-h-[calc(100vh-64px)]">{children}</main>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
