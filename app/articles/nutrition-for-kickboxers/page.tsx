export const metadata = {
  title: "Nutrition for Kickboxers | Harsh Bharti",
  description: "General nutrition principles for kickboxers, including balanced meals, hydration, performance, and recovery.",
  alternates: { canonical: "https://kickboxer-harsh.online/articles/nutrition-for-kickboxers" },
  openGraph: {
    title: "Nutrition for Kickboxers | Harsh Bharti",
    description: "General nutrition principles for kickboxers, including balanced meals, hydration, performance, and recovery.",
    type: "article" as const,
    url: "https://kickboxer-harsh.online/articles/nutrition-for-kickboxers",
  },
};

export default function NutritionForKickboxers() {
  return (
    <main style={{ padding: "2rem", maxWidth: "800px", margin: "0 auto" }}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Article",
        "@id": "https://kickboxer-harsh.online/articles/nutrition-for-kickboxers#article",
        headline: "Nutrition for Kickboxers",
        description: "General nutrition principles for kickboxers, including balanced meals, hydration, performance, and recovery.",
        datePublished: "2026-07-06",
        dateModified: "2026-07-06",
        mainEntityOfPage: "https://kickboxer-harsh.online/articles/nutrition-for-kickboxers",
        author: { "@type": "Person", "@id": "https://kickboxer-harsh.online/#person", name: "Harsh Bharti", url: "https://kickboxer-harsh.online/" },
        publisher: { "@type": "Organization", "@id": "https://kickboxer-harsh.online/#organization", name: "Harsh Bharti", url: "https://kickboxer-harsh.online/" },
        inLanguage: "en-IN"
      }).replace(/</g, "\\u003c") }} />
      <h1>Nutrition for Kickboxers</h1>

      <p><strong>Published:</strong> July 6, 2026</p>

      <p>
        Good nutrition is essential for kickboxers. A balanced diet with
        carbohydrates, protein, healthy fats, vitamins, and proper hydration
        helps improve performance, recovery, and overall health.
      </p>
    </main>
  );
}
