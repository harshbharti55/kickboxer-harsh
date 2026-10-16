import type { Metadata } from "next";
import Link from "next/link";

const canonical = "https://kickboxer-harsh.online/articles/life-of-a-student-athlete";
const description =
  "Practical ideas for balancing university study, kickboxing training, recovery, and competition as a student athlete.";

export const metadata: Metadata = {
  title: "Life of a Student Athlete: Study and Kickboxing | Harsh Bharti",
  description,
  alternates: { canonical },
  openGraph: {
    title: "Life of a Student Athlete: Study and Kickboxing",
    description,
    type: "article",
    url: canonical,
  },
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  "@id": `${canonical}#article`,
  headline: "Life of a Student Athlete: Balancing Study and Kickboxing",
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

export default function StudentAthletePage() {
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
          Athlete life
        </p>
        <h1 className="mt-4 text-4xl font-black leading-tight sm:text-5xl">
          Life of a Student Athlete
        </h1>
        <p className="mt-5 text-sm text-slate-400">By Harsh Bharti</p>
        <p className="mt-8 text-lg leading-8 text-slate-300">
          Combining education with competitive sport takes planning and honest
          prioritisation. Classes, assignments, training, travel, and recovery
          all need time. There is no perfect schedule for every student athlete,
          but a few habits can make the balance more manageable.
        </p>
        <h2 className="mt-10 text-2xl font-bold">Plan the week before it starts</h2>
        <p className="mt-4 leading-8 text-slate-300">
          Put fixed commitments—classes, exams, team sessions, and travel—on a
          calendar first. Then schedule study blocks, meals, and sleep around
          them. Keep some flexibility for unexpected coursework or changes to
          training rather than filling every hour.
        </p>
        <h2 className="mt-10 text-2xl font-bold">Use focused study sessions</h2>
        <p className="mt-4 leading-8 text-slate-300">
          Break large assignments into smaller tasks and decide what must be
          completed in each session. Short, focused periods with fewer
          distractions can be easier to protect than waiting for a completely
          free day. Ask instructors about deadlines early when competition travel
          may affect attendance.
        </p>
        <h2 className="mt-10 text-2xl font-bold">Protect recovery</h2>
        <p className="mt-4 leading-8 text-slate-300">
          Training quality suffers when sleep and rest are repeatedly sacrificed.
          Communicate with your coach when exams, illness, or heavy coursework
          create extra pressure. Adjusting a session when necessary is part of
          long-term development, not a lack of commitment.
        </p>
        <h2 className="mt-10 text-2xl font-bold">Keep support around you</h2>
        <p className="mt-4 leading-8 text-slate-300">
          Coaches, teachers, teammates, friends, and family can help a student
          athlete stay organised. Share important dates early, ask for help
          before problems become urgent, and remember that health and education
          matter alongside competition results.
        </p>
        <h2 className="mt-10 text-2xl font-bold">Focus on consistency</h2>
        <p className="mt-4 leading-8 text-slate-300">
          Progress comes from repeatable habits: attending training, completing
          academic work, eating regularly, sleeping enough, and reviewing what
          worked each week. A sustainable routine is more useful than trying to
          do everything perfectly every day.
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
