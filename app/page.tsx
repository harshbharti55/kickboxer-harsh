import TopNav from "@/components/TopNav";
import Hero from "@/components/Hero";
import Stats from "@/components/Stats";
import About from "@/components/About";
import Timeline from "@/components/Timeline";
import Highlights from "@/components/Highlights";
import HomeGallery from "@/components/HomeGallery";
import Articles from "@/components/Articles";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Page() {
  return (
    <main className="min-h-screen bg-bg">
      <TopNav />

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

      {/* Latest News */}
      <Articles />

      {/* Contact */}
      <Contact />

      <Footer />
    </main>
  );
}
