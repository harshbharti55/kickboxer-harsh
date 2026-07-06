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
    // layout code here
  );
}
