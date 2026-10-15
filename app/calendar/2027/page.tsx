import type { Metadata } from "next";
import { PageShell, PageHero, Section, OutlineButton, PlannedGoalsList } from "../../../components/athlete/Ui";
import { SITE_URL } from "../../../data/athlete";

export const metadata: Metadata = {
  title: "2027 Competition Goals | Harsh Bharti, Indian Kickboxer",
  description:
    "Harsh Bharti's planned 2027 competition goals: India Open, Italy World Cup, Thailand World Cup, Uzbekistan World Cup and Senior World Championship. Dates and participation unconfirmed.",
  alternates: { canonical: `${SITE_URL}/calendar/2027` },
};

export default function Goals2027Page() {
  return (
    <PageShell>
      <PageHero
        eyebrow="2027 Calendar"
        title="2027 Competition Goals"
        intro="These are goals, not confirmed entries. Dates and participation will only be published once they are officially verified."
      >
        <OutlineButton href="/calendar">Back to the main calendar</OutlineButton>
      </PageHero>

      <Section title="Planned Goals">
        <PlannedGoalsList />
      </Section>

      <Section title="Sponsor the journey">
        <p className="max-w-2xl text-neutral-300">
          Reaching international events depends on training, travel and entry costs. Partnerships help make these goals possible.
        </p>
        <div className="mt-5">
          <OutlineButton href="/sponsorship">View sponsorship</OutlineButton>
        </div>
      </Section>
    </PageShell>
  );
}
