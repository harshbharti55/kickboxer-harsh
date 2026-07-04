import Link from 'next/link';
import { Metadata } from 'next';
import { ArrowLeft } from 'lucide-react';
import Image from "next/image";

export const metadata: Metadata = {
  title: "My Kickboxing Journey | Harsh Bharti - Indian Kickboxer",
  description:
    "Read the journey of Harsh Bharti, an Indian kickboxer from Shimla, from his first training session to winning national medals and representing India in international competitions.",
  keywords: [
    "Harsh Bharti",
    "Indian kickboxer",
    "Kickboxing",
    "WAKO India",
    "National Kickboxing",
    "Combat Sports",
    "Full Contact Kickboxing",
    "Shimla athlete",
    "Himachal Pradesh",
  ],
  openGraph: {
    title: "My Kickboxing Journey | Harsh Bharti",
    description:
      "Read the journey of Harsh Bharti from beginner to national medalist and international kickboxer.",
    type: "article",
    url: "https://kickboxer-harsh.online/articles/my-kickboxing-journey",
    images: [
      {
        url: "https://kickboxer-harsh.online/media/hero.png",
        width: 1200,
        height: 675,
        alt: "Harsh Bharti Kickboxing",
        
      },
    ],
  },
};

twitter: {
  card: "summary_large_image",
  title: "My Kickboxing Journey | Harsh Bharti",
  description:
    "Read the journey of Harsh Bharti from beginner to national medalist and international kickboxer.",
  images: ["https://kickboxer-harsh.online/media/hero.png"],
},

export default function ArticlePage() {
  const readingTime = 8;
  const publishDate = 'January 15, 2024';
const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "My Kickboxing Journey",
  description:
    "Read the journey of Harsh Bharti from beginner to national medalist and international kickboxer.",
  image: "https://kickboxer-harsh.online/media/hero.png",
  author: {
    "@type": "Person",
    name: "Harsh Bharti",
    url: "https://kickboxer-harsh.online",
  },
  publisher: {
    "@type": "Person",
    name: "Harsh Bharti",
  },
  datePublished: "2024-01-15",
  dateModified: "2026-07-04",
  mainEntityOfPage: {
    "@type": "WebPage",
    "@id": "https://kickboxer-harsh.online/articles/my-kickboxing-journey",
  },
};
  return (
    <main className="min-h-screen bg-bg">
      {/* Back to Home Button */}
      <div className="sticky top-0 z-40 border-b border-white/10 bg-bg/80 backdrop-blur-md">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm font-medium text-gray-400 hover:text-white transition-colors"
          >
            <ArrowLeft size={16} />
            Back to Home
          </Link>
        </div>
      </div>

      {/* Article Content */}
      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Article Header */}
        <header className="mb-12">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 text-gradient">
            My Kickboxing Journey
          </h1>

          <div className="flex flex-wrap items-center gap-4 text-gray-400 mb-8">
            <span>{publishDate}</span>
            <span className="text-gray-600">•</span>
            <span>{readingTime} min read</span>
          </div> 
          
<Image
  src="/media/hero.png"
  alt="Harsh Bharti Kickboxing"
  width={1200}
  height={675}
  className="w-full h-auto rounded-xl"
  />

  <p className="mt-3 text-center text-sm text-gray-400">
  Harsh Bharti after winning the Silver Medal at the Senior National Kickboxing Championship.
</p>

          </header>

        {/* Article Body */}
        <div className="prose prose-invert max-w-none space-y-6 text-gray-300">
          <section>
            <h2 className="text-3xl font-bold text-white mb-4">
              The Beginning
            </h2>
            <p>
              Every champion has a starting point, and mine began with a simple decision to step into
              the ring. What started as curiosity about combat sports has transformed into a lifelong
              passion and professional pursuit. This is the story of how a young athlete from Himachal
              Pradesh became a national medalist and international competitor.
            </p>
          </section>

          <section>
            <h2 className="text-3xl font-bold text-white mb-4">
              First Steps in the Ring
            </h2>
            <p>
              My first training session was intimidating. The speed of the punches, the intensity of
              the kicks, the constant movement—it was overwhelming. But there was something about it
              that captivated me. I remember walking out of that session exhausted but exhilarated,
              knowing I had found something special.
            </p>
            <p>
              Those early days were all about building foundations. Technical drills, footwork,
              conditioning, and understanding the fundamental principles of kickboxing consumed my
              daily routine. Every session taught me something new, and every mistake became a lesson.
            </p>
          </section>

          <section>
            <h2 className="text-3xl font-bold text-white mb-4">
              Rising Through Competitions
            </h2>
            <p>
              My first competition was nerve-wracking. Standing across from an experienced opponent,
              I realized this wasn't just training—this was real. I lost that match, but the defeat
              was more valuable than any victory could have been. It showed me where I needed to
              improve and gave me the hunger to work harder.
            </p>
            <p>
              Over the years, I competed in numerous tournaments across India. Each competition
              brought new challenges and opportunities to test my skills. The progression from local
              tournaments to state-level competitions to national championships was marked by
              countless hours of training, sacrifice, and unwavering determination.
            </p>
          </section>

          <section>
            <h2 className="text-3xl font-bold text-white mb-4">
              National Glory
            </h2>
            <p>
              Standing on the national podium with a medal around my neck was surreal. All the early
              morning training sessions, the strict dietary regimens, the mental preparation, and the
              sacrifices suddenly felt worth it. But more importantly, it validated my belief that I
              belonged at the elite level of this sport.
            </p>
            <p>
              Representing India on the international stage has been the greatest honor of my career.
              Competing against the world's best kickboxers has pushed me to evolve as a fighter and
              as an athlete. Each international tournament teaches me something new about technique,
              strategy, and mental resilience.
            </p>
          </section>

          <section>
            <h2 className="text-3xl font-bold text-white mb-4">
              Lessons Beyond the Ring
            </h2>
            <p>
              Kickboxing has taught me more than just how to fight. It's taught me about discipline,
              perseverance, humility, and the importance of continuous improvement. It's shown me that
              the mind is often the limiting factor—not the body. And most importantly, it's taught me
              that the journey is more rewarding than the destination.
            </p>
            <p>
              Balancing my education with professional kickboxing has shaped me into someone who
              values time management and multitasking. These skills extend beyond sports into all
              areas of life, making me not just a better athlete but a better person.
            </p>
          </section>

          <section>
            <h2 className="text-3xl font-bold text-white mb-4">
              What's Next
            </h2>
            <p>
              My journey in kickboxing is far from over. There are more championships to win, more
              skills to master, and more opponents to face. I'm committed to pushing the boundaries of
              what I can achieve and continuing to represent India with pride and excellence.
            </p>
            <p>
              For anyone reading this who's thinking about starting their own journey—whether in
              sports or any other field—I want to say this: believe in yourself, embrace the
              challenges, and remember that the process of becoming is more beautiful than the moment
              of achievement.
            </p>
          </section>
        </div>

        {/* Article Footer */}
        <footer className="mt-16 pt-8 border-t border-white/10">
          <div className="mb-8">
            <p className="text-sm text-gray-400 mb-4">
              Share this article
            </p>
            {/* Share buttons placeholder */}
            <div className="flex gap-4">
              <a
                href="#"
                className="px-4 py-2 rounded-lg bg-white/5 hover:bg-white/10 text-sm transition-colors"
              >
                Share on Twitter
              </a>
              <a
                href="#"
                className="px-4 py-2 rounded-lg bg-white/5 hover:bg-white/10 text-sm transition-colors"
              >
                Share on LinkedIn
              </a>
            </div>
          </div>

          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm font-medium text-gray-400 hover:text-white transition-colors"
          >
            <ArrowLeft size={16} />
            Back to Home
          </Link>
        </footer>
      </article>
    </main>
  );
}
