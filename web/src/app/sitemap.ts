import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://example.com";
  return [
    { url: `${base}/`, priority: 1, changeFrequency: "weekly" },
    { url: `${base}/catalog`, priority: 0.8, changeFrequency: "weekly" },
    { url: `${base}/cart`, priority: 0.2 },
    { url: `${base}/checkout`, priority: 0.2 },
  ];
}
