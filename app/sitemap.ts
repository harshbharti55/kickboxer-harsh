import type { MetadataRoute } from "next";

const baseUrl = "https://kickboxer-harsh.online";

const pages = [
  {
    path: "",
    priority: 1.0,
    changeFrequency: "weekly" as const,
  },
  {
    path: "/about",
    priority: 0.9,
    changeFrequency: "monthly" as const,
  },
  {
    path: "/gallery",
    priority: 0.9,
    changeFrequency: "weekly" as const,
  },
  {
    path: "/calendar",
    priority: 0.9,
    changeFrequency: "weekly" as const,
  },
  {
    path: "/achievements",
    priority: 0.9,
    changeFrequency: "monthly" as const,
  },
  {
    path: "/media",
    priority: 0.9,
    changeFrequency: "weekly" as const,
  },
  {
    path: "/articles",
    priority: 0.9,
    changeFrequency: "weekly" as const,
  },
  {
    path: "/sponsors",
    priority: 0.8,
    changeFrequency: "monthly" as const,
  },
  {
    path: "/downloads",
    priority: 0.7,
    changeFrequency: "monthly" as const,
  },
  {
    path: "/contact",
    priority: 0.8,
    changeFrequency: "monthly" as const,
  },
  {
    path: "/privacy",
    priority: 0.3,
    changeFrequency: "yearly" as const,
  },
  {
    path: "/terms",
    priority: 0.3,
    changeFrequency: "yearly" as const,
  },
  {
    path: "/cookies",
    priority: 0.3,
    changeFrequency: "yearly" as const,
  },
];

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  return pages.map((page) => ({
    url: `${baseUrl}${page.path}`,
    lastModified,
    changeFrequency: page.changeFrequency,
    priority: page.priority,
  }));
}
