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
  const articleUrl = `https://kickboxer-harsh.online/articles/${title.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "")}`;
  const dateIso = new Date(date).toISOString().slice(0, 10);
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: title,
    articleSection: category,
    datePublished: dateIso,
    dateModified: dateIso,
    mainEntityOfPage: articleUrl,
    author: { "@type": "Person", "@id": "https://kickboxer-harsh.online/#person", name: "Harsh Bharti", url: "https://kickboxer-harsh.online/" },
    publisher: { "@type": "Organization", "@id": "https://kickboxer-harsh.online/#organization", name: "Harsh Bharti", url: "https://kickboxer-harsh.online/" },
    inLanguage: "en-IN",
  };
  return (
  <main>
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema).replace(/</g, "\\\\u003c") }} />
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
