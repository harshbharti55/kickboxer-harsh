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
<main className="min-h-screen bg-[#111827] py-12 px-5">
 <div className="max-w-4xl mx-auto bg-[#18181B] rounded-3xl shadow-2xl border border-gray-800 p-8 md:p-12">
        <span className="text-yellow-400 font-semibold">
          {category}
        </span>

        <h1 className="text-4xl md:text-6xl font-bold mt-3 mb-4">
          {title}
        </h1>

        <p className="text-gray-400">
          Published • {date} • 6 min read
        </p>
      </div>
<article className="prose prose-invert prose-lg max-w-none leading-8">
        {children}
      </article>

      <hr className="my-12 border-gray-700" />

      <div className="rounded-2xl bg-[#202020] border border-gray-700 p-6">
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
