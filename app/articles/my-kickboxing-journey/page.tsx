import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, ArrowUpRight, Mail } from "lucide-react";

const baseUrl = "https://kickboxer-harsh.online";
const articleUrl = `${baseUrl}/articles/my-kickboxing-journey`;

export const metadata: Metadata = {
  title: "My Journey as a Kickboxer | Harsh Bharti",
  description:
    "My story as Indian kickboxer Harsh Bharti: national championship experience, two gold medals in 2022, national silver and bronze medals, and my target for 2027.",
  alternates: { canonical: articleUrl },
  openGraph: {
    title: "My Journey as a Kickboxer — Harsh Bharti",
    description:
      "My competitive kickboxing journey, achievements, lessons, and future ambitions.",
    url: articleUrl,
    type: "article",
    images: [{ url: `${baseUrl}/media/hero.png`, width: 1200, height: 675, alt: "Harsh Bharti, kickboxing athlete" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "My Journey as a Kickboxer — Harsh Bharti",
    description: "My competitive kickboxing journey and future ambitions.",
    images: [`${baseUrl}/media/hero.png`],
  },
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "My Journey as a Kickboxer: Harsh Bharti",
  description:
    "A first-person biography of Indian kickboxer Harsh Bharti, based on his supplied competition record.",
  image: `${baseUrl}/media/hero.png`,
  author: { "@type": "Person", name: "Harsh Bharti", url: baseUrl },
  publisher: { "@type": "Person", name: "Harsh Bharti", url: baseUrl },
  dateModified: "2026-10-27",
  mainEntityOfPage: { "@type": "WebPage", "@id": articleUrl },
};

const milestones = [
  { year: "2018", result: "Participant", event: "Junior National Kickboxing Championship", location: "Shoolini University, Solan, Himachal Pradesh" },
  { year: "2022", result: "2 Gold Medals", event: "WAKO India Open National Tournament", location: "New Delhi" },
  { year: "2023", result: "Silver Medal", event: "National Kickboxing Championship", location: "Ranchi" },
  { year: "2024", result: "Bronze Medal", event: "National Kickboxing Championship", location: "Siliguri" },
  { year: "2025", result: "Participant", event: "Kickboxing Inter-University Championship", location: "Swami Vivekanand Subharti University, Meerut · 12–16 March" },
  { year: "2025", result: "Silver Medal", event: "Senior National Kickboxing Championship", location: "Raipur" },
  { year: "2026", result: "5th Place · −54 kg", event: "National Kickboxing Championship — Seniors & Masters", location: "Indore, Madhya Pradesh · 8–12 September" },
];

export default function ArticlePage() {
  return (
    <main className="min-h-screen bg-[#080c17] text-white">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema).replace(/</g, "\\u003c") }} />
      <section className="relative overflow-hidden border-b border-white/10 bg-gradient-to-br from-[#172743] via-[#080c17] to-[#101b30]">
        <div className="absolute -right-24 -top-24 h-80 w-80 rounded-full bg-[#8bdcff]/10 blur-3xl" />
        <div className="container-page relative mx-auto max-w-6xl px-5 pb-14 pt-10 sm:pb-20 sm:pt-14">
          <Link href="/articles" className="inline-flex items-center gap-2 text-sm font-semibold text-slate-300 transition hover:text-[#e8c56a]">
            <ArrowLeft className="h-4 w-4" /> All articles
          </Link>
          <div className="mt-10 grid items-center gap-10 lg:grid-cols-[1.1fr_.9fr]">
            <header>
              <p className="text-xs font-bold uppercase tracking-[.3em] text-[#e8c56a]">Athlete biography · Personal journey</p>
              <h1 className="mt-5 text-5xl font-black leading-[1.02] tracking-tight sm:text-6xl lg:text-7xl">My Journey <span className="block text-[#8bdcff]">as a Kickboxer</span></h1>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">Discipline. Determination. The courage to keep fighting.</p>
              <p className="mt-5 max-w-2xl leading-7 text-slate-400">I’m Harsh Bharti, a competitive kickboxer from Himachal Pradesh, India. Every championship has taught me something about preparation, resilience, and the work still ahead.</p>
              <div className="mt-8 flex flex-wrap gap-3">
                <a href="#my-record" className="rounded-xl bg-[#e8c56a] px-5 py-3 text-sm font-extrabold text-[#080c17] transition hover:bg-[#f5d98b]">Explore my record</a>
                <a href="mailto:kickboxerharsh@gmail.com?subject=Sponsorship%20Enquiry%20for%20Harsh%20Bharti" className="inline-flex items-center gap-2 rounded-xl border border-white/15 px-5 py-3 text-sm font-bold text-white transition hover:border-[#8bdcff]/50"><Mail className="h-4 w-4" /> Sponsorship enquiries</a>
              </div>
            </header>
            <div className="relative">
              <div className="absolute -inset-3 rounded-[2rem] border border-[#8bdcff]/20" />
              <Image src="/media/hero.png" alt="Harsh Bharti kickboxing athlete" width={1200} height={675} priority className="relative aspect-[4/3] w-full rounded-[1.5rem] border border-white/10 object-cover shadow-2xl" />
              <p className="mt-3 text-xs text-slate-400">Harsh Bharti · Competitive kickboxing</p>
            </div>
          </div>
        </div>
      </section>

      <article className="container-page mx-auto max-w-4xl px-5 py-14 sm:py-20">
        <section className="space-y-5 text-lg leading-8 text-slate-300">
          <h2 className="text-3xl font-black text-white sm:text-4xl">Where my journey began</h2>
          <p>My competitive record begins in 2018, when I participated in the Junior National Kickboxing Championship at Shoolini University in Solan, Himachal Pradesh. It was an early milestone in my journey through organised competition and an important part of the experience I have continued to build.</p>
          <p>For me, kickboxing is more than a result on a scoreboard. It asks me to keep learning, stay disciplined, and take something useful from every competition—whether I leave with a medal or another lesson to work on.</p>
        </section>

        <section id="my-record" className="mt-16 scroll-mt-24">
          <p className="text-xs font-bold uppercase tracking-[.3em] text-[#8bdcff]">The milestones</p>
          <h2 className="mt-3 text-3xl font-black text-white sm:text-4xl">My competition record</h2>
          <p className="mt-4 max-w-2xl leading-7 text-slate-400">These milestones reflect the competition history supplied for my athlete profile.</p>
          <ol className="mt-8 space-y-4">
            {milestones.map((item) => (
              <li key={`${item.year}-${item.event}`} className="grid gap-4 rounded-2xl border border-white/10 bg-white/[.035] p-5 sm:grid-cols-[5rem_1fr] sm:p-6">
                <div className="text-2xl font-black text-[#8bdcff]">{item.year}</div>
                <div>
                  <div className="flex flex-wrap items-center gap-3">
                    <h3 className="text-lg font-bold text-white">{item.event}</h3>
                    <span className="rounded-full border border-[#e8c56a]/25 bg-[#e8c56a]/10 px-3 py-1 text-xs font-bold text-[#e8c56a]">{item.result}</span>
                  </div>
                  <p className="mt-2 text-sm leading-6 text-slate-400">{item.location}</p>
                </div>
              </li>
            ))}
          </ol>
        </section>

        <section className="mt-16 rounded-3xl border border-[#8bdcff]/20 bg-gradient-to-br from-[#14243b] to-[#0b1120] p-7 sm:p-10">
          <p className="text-xs font-bold uppercase tracking-[.3em] text-[#8bdcff]">What I carry forward</p>
          <h2 className="mt-3 text-3xl font-black text-white">More than medals</h2>
          <p className="mt-5 leading-8 text-slate-300">My record includes two gold medals in 2022, silver medals in 2023 and 2025, a bronze medal in 2024, and a fifth-place finish in the −54 kg category in 2026. I value these achievements, but I also know that improvement comes from honest reflection, consistent effort, and the willingness to keep learning.</p>
          <p className="mt-4 leading-8 text-slate-300">I want to keep developing as a competitor and approach each future opportunity with focus and respect for the sport.</p>
        </section>

        <section className="mt-16 space-y-5 text-lg leading-8 text-slate-300">
          <p className="text-xs font-bold uppercase tracking-[.3em] text-[#e8c56a]">Looking ahead</p>
          <h2 className="text-3xl font-black text-white sm:text-4xl">My 2027 international target</h2>
          <p>One of my ambitions is to pursue a campaign targeting the Senior World Championship in 2027. This is a goal only; my selection and participation have not been confirmed. Any opportunity will depend on the official selection process, eligibility requirements, event information, and available funding.</p>
          <p>Preparing for an international competition can bring costs for training, coaching, travel, accommodation, equipment, and participation. I hope to connect with sponsors and supporters who believe in athlete development and may be interested in supporting this next stage.</p>
        </section>

        <section className="mt-16 rounded-3xl border border-white/10 bg-white/[.035] p-7 sm:p-10">
          <h2 className="text-2xl font-black text-white sm:text-3xl">Be part of the next round</h2>
          <p className="mt-4 leading-7 text-slate-300">I’m proud of the experience I’ve gained and motivated by the work still ahead. If you’re interested in sponsorship, media, or a professional collaboration, I welcome you to get in touch.</p>
          <a href="mailto:kickboxerharsh@gmail.com?subject=Sponsorship%20Enquiry%20for%20Harsh%20Bharti" className="mt-6 inline-flex items-center gap-2 rounded-xl bg-[#e8c56a] px-5 py-3 font-extrabold text-[#080c17] transition hover:bg-[#f5d98b]">Email me <ArrowUpRight className="h-4 w-4" /></a>
          <p className="mt-3 text-sm text-slate-400">kickboxerharsh@gmail.com · Public contact is email-only.</p>
        </section>
        <p className="mt-8 text-xs leading-6 text-slate-500">Competition details are based on my supplied record. The 2027 Senior World Championship is an aspiration only; selection and participation are not confirmed.</p>
        <Link href="/articles" className="mt-10 inline-flex items-center gap-2 text-sm font-semibold text-slate-300 transition hover:text-[#e8c56a]"><ArrowLeft className="h-4 w-4" /> Back to all articles</Link>
      </article>
    </main>
  );
}
