type BlogProps = {
  title: string;
  date: string;
  category: string;
  children: React.ReactNode;
};

export default function BlogLayout({
  title,
  date,
  category,
  children,
}: BlogProps) {
  return (
    <main className="max-w-4xl mx-auto px-6 py-12">
      <div className="mb-10">
        <span className="text-yellow-400 font-semibold">
          {category}
        </span>

        <h1 className="text-5xl font-bold mt-3 mb-4">
          {title}
        </h1>

        <p className="text-gray-400">
          Published • {date} • 6 min read
        </p>
      </div>

      <article className="prose prose-invert max-w-none">
        {children}
      </article>

      <hr className="my-12 border-gray-700" />

      <div className="rounded-xl border border-gray-700 p-6">
        <h3 className="text-2xl font-bold mb-2">
          About the Author
        </h3>

        <p className="font-semibold">
          Harsh Bharti
        </p>

        <p className="text-gray-400">
          National Kickboxing Medalist • International Competitor • BPES Student
        </p>
      </div>
    </main>
  );
}
