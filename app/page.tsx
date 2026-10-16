import Hero from "@/components/Hero";
import Stats from "@/components/Stats";
import About from "@/components/About";
import Timeline from "@/components/Timeline";
import Highlights from "@/components/Highlights";
import HomeGallery from "@/components/HomeGallery";
import Articles from "@/components/Articles";
import Contact from "@/components/Contact";

export default function Page() {
  return (
    <main className="min-h-screen bg-bg">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@graph": [
              {
                "@type": "ProfilePage",
                "@id": "https://kickboxer-harsh.online/#profile",
                url: "https://kickboxer-harsh.online/",
                name: "Harsh Bharti Athlete Profile",
                mainEntity: { "@id": "https://kickboxer-harsh.online/#person" },
                isPartOf: { "@id": "https://kickboxer-harsh.online/#website" },
              },
              {
                "@type": "Article",
                "@id": "https://kickboxer-harsh.online/#athlete-article",
                headline: "Harsh Bharti: Indian Kickboxing Athlete Profile and Career Journey",
                description: "Athlete profile, career journey, and selected competition achievements of Harsh Bharti.",
                mainEntityOfPage: "https://kickboxer-harsh.online/",
                author: { "@id": "https://kickboxer-harsh.online/#person" },
                publisher: { "@id": "https://kickboxer-harsh.online/#organization" },
                about: { "@id": "https://kickboxer-harsh.online/#person" },
                inLanguage: "en-IN",
              },
            ],
          }).replace(/</g, "\\u003c"),
        }}
      />
      {/* Hero */}
      <Hero />

      {/* Quick Stats */}
      <Stats />

      {/* About Me */}
      <About />

      {/* Career Journey */}
      <Timeline />

      {/* Fight Highlights */}
      <Highlights />

      {/* Gallery */}
      <HomeGallery />

      {/* Latest Articles */}
      <Articles />

      {/* Contact */}
      <Contact />
    </main>
  );
}
