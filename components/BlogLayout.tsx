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
  <main>
    <h1>{title}</h1>

    <p>
      {date} • {category}
    </p>

    <article>
      {children}
    </article>
  </main>
);
}
