import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://kickboxer-harsh.online";

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: `${baseUrl}/about`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/gallery`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/calendar`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/media`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/achievements`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/sponsors`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/press-kit`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/articles`,
      lastModified: new Date(),
    },

    // Article pages
    {
      url: `${baseUrl}/articles/my-kickboxing-journey`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/articles/how-i-prepare-for-championships`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/articles/life-of-a-student-athlete`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/articles/nutrition-for-kickboxers`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/articles/world-cup-preparation`,
      lastModified: new Date(),
    },
  ];
}
