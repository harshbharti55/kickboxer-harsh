import Gallery from "@/components/Gallery";
import { createBreadcrumbSchema } from "@/lib/breadcrumb";

export default function GalleryPage() {
  const breadcrumbSchema = createBreadcrumbSchema([
    { name: "Home", url: "https://kickboxer-harsh.online" },
    { name: "Gallery", url: "https://kickboxer-harsh.online/gallery" },
  ]);

  return (
    <main className="pt-24">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbSchema),
        }}
      />

      <Gallery />
    </main>
  );
}
