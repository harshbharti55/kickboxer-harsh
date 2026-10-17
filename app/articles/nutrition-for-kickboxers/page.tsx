import type { Metadata } from "next";
import Link from "next/link";

const canonical = "https://kickboxer-harsh.online/articles/nutrition-for-kickboxers";
const description =
  "General sports-nutrition principles for kickboxers: balanced meals, hydration, recovery, and safe preparation around training.";

export const metadata: Metadata = {
  title: "Nutrition for Kickboxers: Basics for Training and Recovery | Harsh Bharti",
  description,
  alternates: { canonical },
  openGraph: {
    title: "Nutrition for Kickboxers: Training and Recovery",
    description,
    type: "article",
    url: canonical,
  },
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  "@id": `${canonical}#article`,
  headline: "Nutrition for Kickboxers: Basics for Training and Recovery",
  description,
  mainEntityOfPage: canonical,
  author: {
    "@type": "Person",
    "@id": "https://kickboxer-harsh.online/#person",
    name: "Harsh Bharti",
    url: "https://kickboxer-harsh.online/",
  },
  publisher: {
    "@type": "Organization",
    "@id": "https://kickboxer-harsh.online/#organization",
    name: "Harsh Bharti",
    url: "https://kickboxer-harsh.online/",
  },
  inLanguage: "en-IN",
};

export default function NutritionForKickboxers() {
  return (
    <main className="min-h-screen bg-[#080c17] px-5 py-16 text-white sm:px-8">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(articleSchema).replace(/</g, "\\u003c"),
        }}
      />
      <article className="mx-auto max-w-3xl">
        <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#e8c56a]">
          Training and recovery
        </p>
        <h1 className="mt-4 text-4xl font-black leading-tight sm:text-5xl">
          Nutrition for Kickboxers
        </h1>
        <p className="mt-5 text-sm text-slate-400">By Harsh Bharti</p>
        <p className="mt-8 text-lg leading-8 text-slate-300">
          Kickboxing places demands on endurance, speed, coordination, and
          recovery. Consistent, balanced eating can help athletes meet the demands
          of training. Individual needs vary with age, body size, training load,
          health, and competition rules, so this article offers general information
          rather than an individual meal plan.
        </p>

        <h2 className="mt-10 text-2xl font-bold">Build balanced meals</h2>
        <p className="mt-4 leading-8 text-slate-300">
          Include carbohydrate-rich foods such as rice, oats, potatoes, or
          whole-grain breads to help fuel training; protein sources such as beans,
          lentils, dairy, eggs, fish, or other suitable foods to support recovery;
          and a variety of vegetables, fruit, and healthy fats. Choose foods that
          fit your preferences, budget, and any medical or dietary needs.
        </p>

        <h2 className="mt-10 text-2xl font-bold">Plan around training</h2>
        <p className="mt-4 leading-8 text-slate-300">
          Avoid starting a demanding session hungry or uncomfortably full. A
          familiar meal or snack containing carbohydrates, with some protein when
          practical, may be useful before or after training. Experiment during
          normal training—not on competition day—to learn what feels comfortable.
        </p>

        <h2 className="mt-10 text-2xl font-bold">Hydration matters</h2>
        <p className="mt-4 leading-8 text-slate-300">
          Drink regularly throughout the day and make water available during
          training. Heat, session length, and sweat loss affect individual needs.
          Long or intense sessions may require a coach or qualified sports
          dietitian to help plan fluid and electrolyte replacement.
        </p>

        <h2 className="mt-10 text-2xl font-bold">Recovery and weight categories</h2>
        <p className="mt-4 leading-8 text-slate-300">
          Recovery is supported by enough food, sleep, and sensible training
          progression. Rapid weight loss, severe restriction, and dehydration can
          harm health and performance. Athletes in weight-category sports should
          work with a qualified sports dietitian and coach on a safe, gradual plan.
        </p>

        <h2 className="mt-10 text-2xl font-bold">Get individual advice</h2>
        <p className="mt-4 leading-8 text-slate-300">
          A registered dietitian or qualified sports nutrition professional can
          adapt advice to an athlete's training schedule and health needs. If you
          have a medical condition, food allergy, or history of disordered eating,
          seek individual professional guidance.
        </p>

        <div className="mt-12 border-t border-white/10 pt-6">
          <Link className="text-[#e8c56a] hover:underline" href="/articles">
            ← All articles
          </Link>
        </div>
      </article>
    </main>
  );
}
