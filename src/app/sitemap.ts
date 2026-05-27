import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastMod = "2026-05-26";
  return [
    {
      url: "https://www.demarkussday.com",
      lastModified: lastMod,
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: "https://www.demarkussday.com/ai",
      lastModified: lastMod,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: "https://www.demarkussday.com/audit",
      lastModified: lastMod,
      changeFrequency: "monthly",
      priority: 0.8,
    },
  ];
}
