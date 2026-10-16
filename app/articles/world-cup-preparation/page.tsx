import type { Metadata } from "next";
import Link from "next/link";

const canonical = "https://kickboxer-harsh.online/articles/world-cup-preparation";

export const metadata: Metadata = {
  title: "Preparing for International Kickboxing Competition | Harsh Bharti",
  description:
    "A practical look at the training, recovery, planning, and official-selection steps involved in preparing for an international kickboxing competition.",
  alternates: { canonical },
  openGraph: {
    title: "Preparing for International Kickboxing Competition | Harsh Bharti",
    description:
      "Training, recovery, logistics, and realistic goal-setting for an international kickboxing campaign.",
    type: "article",
    url: canonical,
  },
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  "@id": `${canonical}#article`,
  headline: "Preparing for International Kickboxing Competition",
  description:
    "A practical look at training, recovery, planning, and official-selection steps for international kickboxing.",
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

export default function WorldCupPreparationPage() {
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
          Competition preparation
        </p>
        <h1 className="mt-4 text-4xl font-black leading-tight sm:text-5xl">
          Preparing for International Kickboxing Competition
        </h1>
        <p className="mt-5 text-sm text-slate-400">
          By Harsh Bharti · Updated October 2026
        </p>
        <p className="mt-8 text-lg leading-8 text-slate-300">
          Preparing for an international kickboxing event takes more than hard
          training. It requires a realistic plan for technical development,
          fitness, recovery, travel, finances, and the official selection process.
          My long-term ambition is to keep improving and work toward opportunities
          to compete on the international stage.
        </p>

        <h2 className="mt-10 text-2xl font-bold">1. Build a clear training plan</h2>
        <p className="mt-4 leading-8 text-slate-300">
          A useful plan is built with a qualified coach around the athlete's
          current level and competition calendar. Technical drills, footwork,
          defensive movement, pad work, conditioning, strength work, and controlled
          sparring each serve a purpose. Training load should increase gradually
          rather than relying on exhausting sessions every day.
        </p>

        <h2 className="mt-10 text-2xl font-bold">2. Prioritise recovery</h2>
        <p className="mt-4 leading-8 text-slate-300">
          Sleep, rest days, mobility, hydration, and balanced meals support
          consistent training. Pain, persistent fatigue, or a drop in performance
          should be discussed with a qualified coach or health professional.
          Extreme weight-cutting and last-minute dehydration are not safe shortcuts.
        </p>

        <h2 className="mt-10 text-2xl font-bold">3. Prepare for competition day</h2>
        <p className="mt-4 leading-8 text-slate-300">
          Athletes should review event rules, required documents, equipment,
          weigh-in procedures, travel arrangements, and the event schedule in
          advance. A simple checklist reduces avoidable stress and leaves more
          attention for performance.
        </p>

        <h2 className="mt-10 text-2xl font-bold">4. Confirm selection and funding</h2>
        <p className="mt-4 leading-8 text-slate-300">
          International participation depends on official eligibility, selection,
          event confirmation, and available funding. My interest in a future
          international campaign is a goal, not a claim that selection or
          participation has already been confirmed. A transparent budget should
          identify expected costs such as registration, travel, accommodation,
          equipment, coaching, and preparation.
        </p>

        <h2 className="mt-10 text-2xl font-bold">5. Measure progress over time</h2>
        <p className="mt-4 leading-8 text-slate-300">
          Training notes, coach feedback, technical goals, and lessons from each
          competition help show where progress is being made. The aim is to arrive
          prepared, healthy, and focused—not simply tired from doing more work.
        </p>

        <p className="mt-10 leading-8 text-slate-300">
          International competition remains an ambition that requires continued
          work and official confirmation. I will share verified updates when
          plans and event details are confirmed.
        </p>
        <div className="mt-12 flex flex-wrap gap-4 border-t border-white/10 pt-6 text-sm">
          <Link className="text-[#e8c56a] hover:underline" href="/articles">
            ← All articles
          </Link>
          <Link className="text-[#e8c56a] hover:underline" href="/sponsorship">
            Sponsorship opportunities →
          </Link>
        </div>
      </article>
    </main>
  );
}
