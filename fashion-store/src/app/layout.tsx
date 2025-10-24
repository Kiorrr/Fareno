import type { Metadata } from "next";
import { Montserrat, Playfair_Display, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "../components/Header";
import Footer from "../components/Footer";

// Fonts
const montserrat = Montserrat({
  variable: "--font-geist-sans", // reuse token mapping for font-sans
  subsets: ["latin"],
  display: "swap",
});

const playfair = Playfair_Display({
  variable: "--font-playfair", // used as font-title token
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Modeé — Boutique de Mode",
    template: "%s · Modeé",
  },
  description:
    "E-boutique de vêtements, accessoires et articles de mode pour femmes, hommes et enfants.",
  metadataBase: new URL("https://example.com"),
  openGraph: {
    title: "Modeé — Boutique de Mode",
    description:
      "E-boutique de vêtements, accessoires et articles de mode pour femmes, hommes et enfants.",
    url: "https://example.com",
    siteName: "Modeé",
    locale: "fr_FR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Modeé — Boutique de Mode",
    description:
      "E-boutique de vêtements, accessoires et articles de mode pour femmes, hommes et enfants.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body
        className={`${montserrat.variable} ${playfair.variable} ${geistMono.variable} antialiased bg-background text-foreground`}
      >
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
