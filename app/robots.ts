import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: [
        "/api/",
        "/admin/",
      ],
    },

    sitemap: "https://kickboxer-harsh.online/sitemap.xml",

    host: "https://kickboxer-harsh.online",
  };
}
