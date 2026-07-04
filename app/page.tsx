import TopNav from '@/components/TopNav';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Stats from '@/components/Stats';
import Timeline from '@/components/Timeline';
import Highlights from '@/components/Highlights';
import Articles from '@/components/Articles';
import Gallery from '@/components/Gallery';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

export default function Page() {
  return (
    <main className="min-h-screen bg-bg">
      <TopNav />
      <Hero />
      <About /> 
      <Gallery/>

      <Articles />

      <Stats />
      <Timeline />
      <Highlights />
      
      <Contact />
      <Footer />
    </main>
  );
}
