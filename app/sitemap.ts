import type { MetadataRoute } from "next";

const BASE_URL = "https://kickboxer-harsh.online";

const pages = [
  "",
  "/about",
  "/gallery",
  "/calendar",
  "/achievements",
  "/media",
  "/articles",
  "/sponsors",
  "/downloads",
  "/contact",
  "/privacy",
  "/terms",
  "/cookies",
];

const articleSlugs = [
  "world-cup-preparation",
  "how-i-prepare-for-championships",
  "my-kickboxing-journey",
  "nutrition-for-kickboxers",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  const staticPages: MetadataRoute.Sitemap = pages.map((path) => ({
    url: `${BASE_URL}${path}`,
    lastModified,
    changeFrequency:
      path === ""
        ? "weekly"
        : path === "/privacy" ||
          path === "/terms" ||
          path === "/cookies"
        ? "yearly"
        : "monthly",
    priority:
      path === ""
        ? 1.0
        : path === "/privacy" ||
          path === "/terms" ||
          path === "/cookies"
        ? 0.3
        : 0.8,
  }));

  const articlePages: MetadataRoute.Sitemap = articleSlugs.map((slug) => ({
    url: `${BASE_URL}/articles/${slug}`,
    lastModified,
    changeFrequency: "monthly",
    priority: 0.9,
  }));

  return [...staticPages, ...articlePages];
}
