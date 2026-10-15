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
  title: "Curriculum Vitae | Harsh Bharti, Indian Kickboxer",
  description:
    "Curriculum vitae of Harsh Bharti: competition record, 2027 planned goals and contact details. Download the CV as a PDF.",
  alternates: { canonical: `${SITE_URL}/cv` },
  openGraph: {
    title: "CV | Harsh Bharti",
    description: "Competition record and contact details of Indian kickboxer Harsh Bharti.",
    url: `${SITE_URL}/cv`,
    type: "profile",
  },
};

export default function CvPage() {
  return (
    <PageShell>
      <PageHero
        eyebrow="Curriculum Vitae"
        title={athlete.name}
        intro={`${athlete.headline} \u00b7 ${athlete.region}`}
      >
        <GoldButton href={downloads.cv} download>
          Download CV (PDF)
        </GoldButton>
        <OutlineButton href="/athlete-profile">Athlete Profile</OutlineButton>
      </PageHero>

      <Section title="Competition Record">
        <RecordsList />
      </Section>

      <Section title="2027 Planned Goals">
        <PlannedGoalsList />
      </Section>

      <Section title="Contact">
        <ul className="space-y-2 text-neutral-300">
          <li>
            Email:{" "}
            <a className="text-[#D4AF37] underline" href={`mailto:${athlete.email}`}>
              {athlete.email}
            </a>
          </li>
          <li>Phone: {athlete.phone}</li>
        </ul>
        <p className="mt-8 text-xs text-neutral-600">
          Records supplied by the athlete.
        </p>
      </Section>
    </PageShell>
  );
}
