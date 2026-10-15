import type { Metadata } from "next";
import {
  PageShell,
  PageHero,
  Section,
  GoldButton,
  OutlineButton,
  RecordsList,
} from "../../components/athlete/Ui";
import SponsorInquiryForm from "../../components/athlete/SponsorInquiryForm";
import { athlete, downloads, sponsorPackages, SITE_URL } from "../../data/athlete";

export const metadata: Metadata = {
  title: "Sponsorship | Partner with Harsh Bharti, Indian Kickboxer",
  description:
    "Sponsorship and partnership opportunities with Harsh Bharti, an Indian Full Contact kickboxer. View packages and send a sponsor inquiry.",
  alternates: { canonical: `${SITE_URL}/sponsorship` },
  openGraph: {
    title: "Sponsorship | Harsh Bharti",
    description: "Partner with Indian kickboxer Harsh Bharti.",
    url: `${SITE_URL}/sponsorship`,
    type: "website",
  },
};

export default function SponsorshipPage() {
  return (
    <PageShell>
      <PageHero
        eyebrow="Sponsorship"
        title="Partner With Harsh"
        intro="Support an Indian Full Contact kickboxer working toward international competition, and give your brand authentic visibility through sport, media and digital storytelling."
      >
        <GoldButton href="#inquiry">Send an inquiry</GoldButton>
        <OutlineButton href={downloads.sponsorshipProposal}>Download proposal (PDF)</OutlineButton>
      </PageHero>

      <Section title="Partnership Packages">
        <ul className="grid gap-5 sm:grid-cols-2">
          {sponsorPackages.map((p) => (
            <li key={p.tier} className="rounded-xl border border-neutral-800 bg-neutral-950 p-6">
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#D4AF37]">{p.tier}</p>
              <h3 className="mt-1 text-xl font-bold text-white">{p.name}</h3>
              <ul className="mt-4 space-y-2 text-sm text-neutral-300">
                {p.perks.map((perk) => (
                  <li key={perk} className="flex gap-2">
                    <span aria-hidden className="text-[#D4AF37]">
                      &#10003;
                    </span>
                    {perk}
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
        <p className="mt-4 text-sm text-neutral-500">
          Every partnership can be customized around your goals and budget. Get in touch to discuss the details.
        </p>
      </Section>

      <Section title="Competition Record">
        <RecordsList />
        <div className="mt-6">
          <OutlineButton href="/calendar/2027">2027 planned goals</OutlineButton>
        </div>
      </Section>

      <Section title="Sponsor Inquiry" id="inquiry">
        <SponsorInquiryForm />
        <p className="mt-6 text-sm text-neutral-400">
          Prefer to reach out directly? Email{" "}
          <a className="text-[#D4AF37] underline" href={`mailto:${athlete.email}`}>
            {athlete.email}
          </a>{" "}
          or message on{" "}
          <a className="text-[#D4AF37] underline" href={athlete.whatsapp} target="_blank" rel="noopener noreferrer">
            WhatsApp
          </a>
          .
        </p>
      </Section>
    </PageShell>
  );
}
