import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://msi-major-minor.vercel.app";
  const lastModified = new Date();

  return [
    { url: baseUrl, lastModified, changeFrequency: "weekly", priority: 1 },
    { url: `${baseUrl}/about`, lastModified, changeFrequency: "monthly", priority: 0.8 },
    { url: `${baseUrl}/services/interior-painting`, lastModified, changeFrequency: "monthly", priority: 0.9 },
    { url: `${baseUrl}/services/exterior-painting`, lastModified, changeFrequency: "monthly", priority: 0.9 },
    { url: `${baseUrl}/services/cabinet-refinishing`, lastModified, changeFrequency: "monthly", priority: 0.8 },
    { url: `${baseUrl}/services/drywall-repair`, lastModified, changeFrequency: "monthly", priority: 0.8 },
    { url: `${baseUrl}/services/deck-staining`, lastModified, changeFrequency: "monthly", priority: 0.8 },
    { url: `${baseUrl}/services/property-preservation`, lastModified, changeFrequency: "monthly", priority: 0.8 },
  ];
}
