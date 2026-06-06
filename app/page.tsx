import TopNav from '@/components/TopNav';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Stats from '@/components/Stats';
import Timeline from '@/components/Timeline';
import Training from '@/components/Training';
import Highlights from '@/components/Highlights';
import Achievements from '@/components/Achievements';
import Gallery from '@/components/Gallery';
import Sponsors from '@/components/Sponsors';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

export default function Page() {
  return (
    <main className="min-h-screen bg-bg">
      <TopNav />
      <Hero />
      <About /> 
      <Gallery/>

      <Stats />
      <Timeline />
      <Training />
      <Highlights />
      <Achievements />
      
      <Sponsors />
      <Contact />
      <Footer />
    </main>
  );
}
