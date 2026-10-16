import type { Metadata } from "next";
import { ArrowUpRight, Check, Globe2, Handshake, Medal, Sparkles, Target } from "lucide-react";
import {
  PageShell,
  PageHero,
  Section,
  GoldButton,
  OutlineButton,
  RecordsList,
} from "../../components/athlete/Ui";
import SponsorInquiryForm from "../../components/athlete/SponsorInquiryForm";
import { athlete, downloads, sponsorPackages, sponsorshipGoal, SITE_URL } from "../../data/athlete";

export const metadata: Metadata = {
  title: "Athlete Sponsorship | Partner with Harsh Bharti",
  description:
    "Explore sponsorship opportunities with Harsh Bharti, an Indian Full Contact kickboxing athlete. Review competition results, partnership benefits, and the preliminary ₹3–4 lakh international campaign target.",
  alternates: { canonical: `${SITE_URL}/sponsorship` },
  openGraph: {
    title: "Partner with Harsh Bharti",
    description: "Athlete sponsorship, brand collaboration, and partnership opportunities.",
    url: `${SITE_URL}/sponsorship`,
    type: "website",
  },
};

const partnerValue = [
  { icon: Globe2, title: "Digital visibility", text: "Brand mentions and agreed sponsor placement across athlete portfolio and social content." },
  { icon: Sparkles, title: "Authentic storytelling", text: "Training, preparation, and competition journey content shaped around your brand." },
  { icon: Handshake, title: "A partnership that fits", text: "Custom deliverables based on your goals, budget, and the final agreement." },
];

export default function SponsorshipPage() {
  return (
    <PageShell>
      <div className="relative overflow-hidden rounded-[2rem] border border-[#e8c56a]/20 bg-[#0b1020] p-6 shadow-[0_30px_100px_rgba(0,0,0,.35)] sm:p-10 lg:p-14">
        <div aria-hidden className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-[#48e5e0]/10 blur-[90px]" />
        <div aria-hidden className="pointer-events-none absolute -bottom-28 -left-20 h-72 w-72 rounded-full bg-[#ff4d6d]/10 blur-[90px]" />
        <div className="relative z-10">
          <PageHero
            eyebrow="Athlete partnerships · India"
            title="Partner With Harsh"
            intro="Support a committed Indian Full Contact kickboxing athlete and build an authentic brand story around discipline, performance, and the pursuit of international competition."
          >
            <GoldButton href="#inquiry">Discuss a partnership <ArrowUpRight className="ml-2 inline h-4 w-4" /></GoldButton>
            <OutlineButton href={downloads.sponsorshipProposal}>Download sponsorship proposal</OutlineButton>
          </PageHero>
          <div className="mt-8 grid gap-4 sm:grid-cols-3">
            <div className="rounded-2xl border border-white/10 bg-white/[0.035] p-5">
              <p className="text-xs font-bold uppercase tracking-[.22em] text-[#e8c56a]">Discipline</p>
              <p className="mt-2 text-lg font-bold text-white">Full Contact</p>
              <p className="mt-1 text-sm text-slate-400">−54 kg category</p>
            </div>
            <div className="rounded-2xl border border-white/10 bg-white/[0.035] p-5">
              <p className="text-xs font-bold uppercase tracking-[.22em] text-[#48e5e0]">Competition record</p>
              <p className="mt-2 text-lg font-bold text-white">2018–2026</p>
              <p className="mt-1 text-sm text-slate-400">National competition experience</p>
            </div>
            <div className="rounded-2xl border border-[#e8c56a]/30 bg-[#e8c56a]/[0.07] p-5">
              <p className="text-xs font-bold uppercase tracking-[.22em] text-[#e8c56a]">Preliminary target</p>
              <p className="mt-2 text-2xl font-black text-white">₹3–4 lakh</p>
              <p className="mt-1 text-sm text-slate-400">International campaign budget</p>
            </div>
          </div>
          <p className="mt-4 max-w-3xl text-xs leading-6 text-slate-500">The WAKO Senior World Kickboxing Championship 2027 in Tashkent is a target only. Selection, eligibility, dates, participation, and the preliminary budget require official confirmation.</p>
        </div>
      </div>

      <Section title="Why partner with this journey">
        <div className="grid gap-4 md:grid-cols-3">
          {partnerValue.map(({ icon: Icon, title, text }) => (
            <article key={title} className="group rounded-2xl border border-white/10 bg-gradient-to-br from-[#162139] to-[#0a0f1b] p-6 transition duration-300 hover:-translate-y-1 hover:border-[#e8c56a]/50">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-[#e8c56a]/20 bg-[#e8c56a]/10 text-[#e8c56a]"><Icon className="h-6 w-6" /></div>
              <h3 className="mt-5 text-lg font-bold text-white">{title}</h3>
              <p className="mt-2 text-sm leading-6 text-slate-400">{text}</p>
            </article>
          ))}
        </div>
      </Section>

      <Section title="Partnership packages">
        <ul className="grid gap-4 sm:grid-cols-2">
          {sponsorPackages.map((p, index) => (
            <li key={p.tier} className={`relative overflow-hidden rounded-2xl border p-6 transition hover:-translate-y-1 ${index === 2 ? "border-[#e8c56a]/45 bg-gradient-to-br from-[#1b2030] to-[#0b1020] shadow-[0_20px_60px_rgba(232,197,106,.06)]" : "border-white/10 bg-[#0c1220]"}`}>
              {index === 2 ? <span className="absolute right-4 top-4 rounded-full bg-[#e8c56a] px-3 py-1 text-[10px] font-black uppercase tracking-wider text-[#0a0e18]">Featured</span> : null}
              <p className="text-xs font-bold uppercase tracking-[.3em] text-[#e8c56a]">{p.tier} partner</p>
              <h3 className="mt-2 text-2xl font-black text-white">{p.name}</h3>
              <ul className="mt-5 space-y-3 text-sm leading-5 text-slate-300">
                {p.perks.map((perk) => <li key={perk} className="flex gap-3"><Check aria-hidden className="mt-0.5 h-4 w-4 shrink-0 text-[#48e5e0]" /><span>{perk}</span></li>)}
              </ul>
              <a href="#inquiry" className="mt-7 inline-flex items-center gap-2 text-sm font-bold text-[#e8c56a] transition hover:text-white">Discuss this package <ArrowUpRight className="h-4 w-4" /></a>
            </li>
          ))}
        </ul>
        <p className="mt-5 text-sm leading-6 text-slate-500">Package benefits are discussion points, not guaranteed audience reach or media placements. Final deliverables can be agreed in writing with each partner.</p>
      </Section>

      <Section title="Competition record">
        <RecordsList />
        <div className="mt-6 flex flex-wrap gap-3">
          <OutlineButton href="/calendar/2027">View 2027 planned goals</OutlineButton>
          <OutlineButton href={downloads.cv}>Download athlete CV</OutlineButton>
        </div>
      </Section>

      <Section title="Start a conversation" id="inquiry">
        <div className="grid gap-8 lg:grid-cols-[.8fr_1.2fr]">
          <div className="rounded-2xl border border-[#48e5e0]/20 bg-[#48e5e0]/[0.04] p-6 sm:p-8">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#48e5e0]/10 text-[#48e5e0]"><Target className="h-6 w-6" /></div>
            <h3 className="mt-5 text-2xl font-black text-white">Let’s find the right fit.</h3>
            <p className="mt-3 text-sm leading-6 text-slate-400">Share your organisation, goals, and preferred partnership level. I’ll follow up by email to discuss the next steps.</p>
            <a className="mt-6 inline-flex items-center gap-2 break-all font-semibold text-[#e8c56a] underline underline-offset-4" href={`mailto:${athlete.email}?subject=Athlete%20Sponsorship%20Enquiry`}>{athlete.email}<ArrowUpRight className="h-4 w-4 shrink-0" /></a>
            <p className="mt-6 text-xs leading-5 text-slate-500">Contact is by email only. No phone number is displayed.</p>
          </div>
          <div className="rounded-2xl border border-white/10 bg-white/[0.025] p-5 sm:p-8">
            <SponsorInquiryForm />
          </div>
        </div>
      </Section>
    </PageShell>
  );
}
