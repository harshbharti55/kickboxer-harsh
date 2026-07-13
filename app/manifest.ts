import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Harsh Bharti | Official Athlete Website",
    short_name: "Harsh Bharti",
    description:
      "Official website of Harsh Bharti, Indian Full Contact Kickboxer. Explore achievements, competitions, media, articles and sponsorship opportunities.",

    start_url: "/",
    scope: "/",
    display: "standalone",
    orientation: "portrait",

    background_color: "#000000",
    theme_color: "#D4AF37",

    lang: "en",
    dir: "ltr",

    categories: [
      "sports",
      "fitness",
      "portfolio",
    ],

    icons: [
      {
        src: "/icons/icon-192.png",
        sizes: "192x192",
        type: "image/png",
      },
      {
        src: "/icons/icon-512.png",
        sizes: "512x512",
        type: "image/png",
      },
      {
        src: "/icons/apple-touch-icon.png",
        sizes: "180x180",
        type: "image/png",
      },
    ],
  };
}
