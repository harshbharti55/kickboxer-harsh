import type { Metadata } from "next";
import {
  PageShell,
  PageHero,
  Section,
  GoldButton,
  OutlineButton,
  RecordsList,
  PlannedGoalsList,
} from "../../components/athlete/Ui";
import { athlete, downloads, SITE_URL } from "../../data/athlete";

export const metadata: Metadata = {
  title: "Athlete Profile | Harsh Bharti, Indian Kickboxer",
  description:
    "Athlete profile of Harsh Bharti, an Indian Full Contact kickboxer from Himachal Pradesh: competition record and 2027 planned goals.",
  alternates: { canonical: `${SITE_URL}/athlete-profile` },
  openGraph: {
    title: "Athlete Profile | Harsh Bharti",
    description: "Competition record and 2027 planned goals of Indian kickboxer Harsh Bharti.",
    url: `${SITE_URL}/athlete-profile`,
    type: "profile",
  },
};

const facts: Array<[string, string]> = [
  ["Name", athlete.name],
  ["Discipline", athlete.discipline],
  ["Country", "India"],
  ["Region", athlete.region],
  ["Latest category", "-54 kg Full Contact (2026 Senior Nationals, Indore)"],
];

export default function AthleteProfilePage() {
  return (
    <PageShell>
      <PageHero
        eyebrow="Athlete Profile"
        title={athlete.name}
        intro={`${athlete.headline} from ${athlete.region}. Competing at national level and working toward international competition.`}
      >
        <GoldButton href={downloads.athleteProfile} download>
          Download Profile (PDF)
        </GoldButton>
        <OutlineButton href="/cv">View CV</OutlineButton>
        <OutlineButton href="/sponsorship">Sponsorship</OutlineButton>
      </PageHero>

      <Section title="Profile">
        <dl className="grid gap-px overflow-hidden rounded-lg border border-neutral-800 bg-neutral-800 sm:grid-cols-2">
          {facts.map(([k, v]) => (
            <div key={k} className="bg-neutral-950 p-5">
              <dt className="text-xs font-semibold uppercase tracking-[0.25em] text-[#D4AF37]">{k}</dt>
              <dd className="mt-1 text-white">{v}</dd>
            </div>
          ))}
        </dl>
      </Section>

      <Section title="Competition Record">
        <RecordsList />
      </Section>

      <Section title="2027 Competition Goals">
        <PlannedGoalsList />
        <div className="mt-6">
          <OutlineButton href="/calendar/2027">Open the 2027 goals calendar</OutlineButton>
        </div>
      </Section>

      <Section title="Contact">
        <ul className="space-y-2 text-neutral-300">
          <li>
            Email:{" "}
            <a className="text-[#D4AF37] underline" href={`mailto:${athlete.email}`}>
              {athlete.email}
            </a>
          </li>
          <li>
            Phone / WhatsApp:{" "}
            <a className="text-[#D4AF37] underline" href={athlete.whatsapp} target="_blank" rel="noopener noreferrer">
              {athlete.phone}
            </a>
          </li>
          <li className="flex flex-wrap gap-x-4 gap-y-1">
            {athlete.socials.map((s) => (
              <a key={s.label} className="text-[#D4AF37] underline" href={s.href} target="_blank" rel="noopener noreferrer">
                {s.label}
              </a>
            ))}
          </li>
        </ul>
      </Section>
    </PageShell>
  );
}
