import Link from 'next/link';

export default function Articles() {
  const articles = [
    {
      title: "My Kickboxing Journey",
      description:
        "From my first training session to representing India and winning national medals.",
      href: "/articles/my-kickboxing-journey",
    },
    {
      title: "How I Prepare for Championships",
      description:
        "Training routine, nutrition, recovery, and mental preparation before competitions.",
      href: "#",
    },
    {
      title: "Life of a Student Athlete",
      description:
        "Balancing university studies with elite kickboxing training.",
      href: "#",
    },
  ];

  return (
    <section className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold mb-10 text-center">
          Latest Articles
        </h2>

        <div className="grid md:grid-cols-3 gap-6">
          {articles.map((article, index) => (
            <Link
              key={index}
              href={article.href}
            >
              <div
                className="rounded-xl border p-6 hover:shadow-xl transition cursor-pointer h-full hover:border-yellow-500/50 hover:bg-white/5"
              >
                <h3 className="text-xl font-semibold mb-3">
                  {article.title}
                </h3>

                <p className="text-gray-400">
                  {article.description}
                </p>

                <button className="mt-5 font-semibold hover:text-yellow-400 transition-colors">
                  Read More →
                </button>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
