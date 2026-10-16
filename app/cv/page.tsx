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
import { athlete, downloads, SITE_URL, sponsorshipGoal } from "../../data/athlete";

export const metadata: Metadata = {
  title: "Curriculum Vitae | Harsh Bharti, Indian Kickboxer",
  description:
    "Curriculum vitae of Harsh Bharti: competition record, planned 2027 international goals, sponsorship target and contact details.",
  alternates: { canonical: `${SITE_URL}/cv` },
  openGraph: {
    title: "CV | Harsh Bharti",
    description: "Competition record and international goals of Indian kickboxer Harsh Bharti.",
    url: `${SITE_URL}/cv`,
    type: "profile",
  },
};

export default function CvPage() {
  return (
    <PageShell>
      <PageHero
        eyebrow="Athlete CV · Sponsorship Profile"
        title={athlete.name}
        intro={`${athlete.headline} · ${athlete.region} · ${athlete.weightClass}`}
      >
        <GoldButton href={downloads.cv} download>
          Download CV (PDF)
        </GoldButton>
        <OutlineButton href="/athlete-profile">Athlete Profile</OutlineButton>
        <OutlineButton href="/sponsorship">Sponsorship</OutlineButton>
      </PageHero>

      <Section title="Athlete Summary">
        <div className="rounded-lg border border-neutral-800 bg-neutral-950 p-5 sm:p-7">
          <p className="leading-7 text-neutral-300">
            Indian competitive kickboxer with national-level championship experience, two gold medals at the 2022 WAKO India Open National Tournament, and further national silver and bronze medal results. The next major ambition is to pursue the 2027 WAKO Senior World Kickboxing Championship, subject to official eligibility and selection.
          </p>
          <p className="mt-4 text-sm leading-6 text-neutral-500">
            All competition records are supplied by the athlete. Certificates and official results can be provided where available.
          </p>
        </div>
      </Section>

      <Section title="Competition Record">
        <RecordsList />
      </Section>

      <Section title="2027 Competition Goals">
        <PlannedGoalsList />
      </Section>

      <Section title="World Championship Sponsorship Goal">
        <div className="rounded-xl border border-[#D4AF37]/40 bg-[#D4AF37]/[0.06] p-5 sm:p-7">
          <p className="text-xs font-bold uppercase tracking-[0.25em] text-[#D4AF37]">Primary international target</p>
          <h3 className="mt-3 text-2xl font-bold text-white">{sponsorshipGoal.event}</h3>
          <p className="mt-2 text-neutral-400">Target location: {sponsorshipGoal.location}</p>
          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            <div className="rounded-lg border border-neutral-800 bg-black/50 p-4">
              <p className="text-xs uppercase tracking-wider text-neutral-500">Funding requested</p>
              <p className="mt-2 text-xl font-bold text-[#D4AF37]">{sponsorshipGoal.requestedFunding}</p>
            </div>
            <div className="rounded-lg border border-neutral-800 bg-black/50 p-4">
              <p className="text-xs uppercase tracking-wider text-neutral-500">Current sponsorship</p>
              <p className="mt-2 text-xl font-bold text-white">{sponsorshipGoal.currentFunding}</p>
            </div>
          </div>
          <p className="mt-5 text-sm text-neutral-300">Selection status: {sponsorshipGoal.selectionStatus}</p>
          <p className="mt-2 text-sm leading-6 text-neutral-500">{sponsorshipGoal.note}</p>
          <a href="/sponsorship" className="mt-6 inline-flex rounded-md bg-[#D4AF37] px-5 py-3 text-sm font-bold uppercase tracking-wider text-black transition hover:bg-[#e6c24f]">Discuss sponsorship</a>
        </div>
      </Section>

      <Section title="Contact">
        <ul className="space-y-3 text-neutral-300">
          <li>Email: <a className="text-[#D4AF37] underline" href={`mailto:${athlete.email}`}>{athlete.email}</a></li>
          <li>Portfolio: <a className="text-[#D4AF37] underline" href={SITE_URL} target="_blank" rel="noreferrer">{SITE_URL}</a></li>
        </ul>
      </Section>
    </PageShell>
  );
}
