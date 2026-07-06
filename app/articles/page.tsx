import Link from "next/link";

const articles = [
  {
    title: "My Kickboxing Journey",
    date: "July 4, 2026",
    description: "My journey from starting kickboxing to representing India.",
    slug: "my-kickboxing-journey",
  },
  {
    title: "My World Cup Preparation",
    date: "July 6, 2026",
    description: "Training, preparation, and goals for the WAKO Kickboxing World Cup.",
    slug: "world-cup-preparation",
  },
];

export default function ArticlesPage() {
  return (
    <main className="max-w-4xl mx-auto px-6 py-12">
      <h1 className="text-4xl font-bold mb-8">Articles</h1>

      <div className="space-y-6">
        {articles.map((article) => (
          <div
            key={article.slug}
            className="border rounded-xl p-6 shadow-sm hover:shadow-lg transition"
          >
            <h2 className="text-2xl font-semibold">
              <Link href={`/articles/${article.slug}`}>
                {article.title}
              </Link>
            </h2>

            <p className="text-gray-500 mt-1">{article.date}</p>

            <p className="mt-3">{article.description}</p>

            <Link
              href={`/articles/${article.slug}`}
              className="inline-block mt-4 text-blue-600 font-semibold"
            >
              Read Article →
            </Link>
          </div>
        ))}
      </div>
    </main>
  );
}
