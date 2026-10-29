import Link from "next/link";
import Hero from "@/components/Hero";
import { ArrowUpRight, UserRound, Trophy, CalendarDays, Clapperboard, BookOpenText, Handshake, Mail, FileText, Images } from "lucide-react";

const destinations = [
  { number: "01", title: "Athlete Profile", description: "Background, discipline, training focus and the story behind the fighter.", href: "/about", icon: UserRound },
  { number: "02", title: "Achievements", description: "Competition-by-competition record, medals and verified results.", href: "/achievements", icon: Trophy },
  { number: "03", title: "Competition Calendar", description: "Past events and future targets, clearly marked by confirmation status.", href: "/calendar", icon: CalendarDays },
  { number: "04", title: "Fight Media", description: "Photos, videos and moments from the kickboxing journey.", href: "/media", icon: Clapperboard },
  { number: "05", title: "Articles & Story", description: "Long-form updates, athlete story and career milestones.", href: "/articles", icon: BookOpenText },
  { number: "06", title: "Sponsorship", description: "Campaign goals, sponsor opportunities and partnership information.", href: "/sponsors", icon: Handshake },
];

export default function Page() {
  return (
    <main className="min-h-screen bg-transparent text-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@graph": [
              {
                "@type": "ProfilePage",
                "@id": "https://kickboxer-harsh.online/#profile",
                url: "https://kickboxer-harsh.online/",
                name: "Harsh Bharti Athlete Profile",
                mainEntity: { "@id": "https://kickboxer-harsh.online/#person" },
                isPartOf: { "@id": "https://kickboxer-harsh.online/#website" },
              },
            ],
          }).replace(/</g, "\\u003c"),
        }}
      />

      <Hero />

      <section className="relative overflow-hidden border-t border-white/10 bg-[linear-gradient(140deg,rgba(18,48,79,.96),rgba(8,24,43,.97)_55%,rgba(12,34,56,.96))] py-16 sm:py-20 lg:py-24">
        <div className="pointer-events-none absolute -right-24 top-0 h-80 w-80 rounded-full bg-sky-400/10 blur-[100px]" aria-hidden="true" />
        <div className="container-page relative z-10">
          <div className="flex flex-col gap-5 border-b border-white/10 pb-8 sm:flex-row sm:items-end sm:justify-between">
            <div className="max-w-2xl">
              <p className="text-xs font-extrabold uppercase tracking-[0.32em] text-[#e8c56a]">The fighter at a glance</p>
              <h2 className="mt-3 font-display text-4xl leading-none text-white sm:text-5xl lg:text-6xl">A RECORD BUILT ROUND BY ROUND.</h2>
              <p className="mt-4 max-w-xl text-sm leading-7 text-white/65 sm:text-base">A concise overview of Harsh Bharti’s competitive journey. Explore the dedicated pages for full results, athlete details, media and sponsor information.</p>
            </div>
            <Link href="/achievements" className="inline-flex min-h-11 shrink-0 items-center justify-center gap-2 self-start rounded-lg border border-[#e8c56a]/35 px-4 py-3 text-sm font-bold text-[#f5d98b] transition hover:bg-[#e8c56a]/10 sm:self-auto">Full competition record <ArrowUpRight className="h-4 w-4" /></Link>
          </div>

          <div className="mt-8 grid grid-cols-2 gap-3 sm:mt-10 sm:grid-cols-4 sm:gap-4">
            {[
              { value: "02", label: "Gold medals · 2022" },
              { value: "2018–26", label: "Competition years" },
              { value: "−54 kg", label: "Weight class" },
              { value: "5th", label: "National finish · 2026" },
            ].map((item) => (
              <div key={item.label} className="rounded-2xl border border-sky-200/15 bg-gradient-to-br from-[#193b5b]/95 to-[#0c2037]/95 p-5 shadow-[0_14px_40px_rgba(0,0,0,.12)] sm:p-6">
                <p className="font-display text-3xl text-white sm:text-4xl">{item.value}</p>
                <p className="mt-2 text-[10px] font-bold uppercase leading-5 tracking-[0.18em] text-sky-100/60 sm:text-xs">{item.label}</p>
              </div>
            ))}
          </div>
          <p className="mt-4 text-xs leading-5 text-white/45">2027 Senior World Championship is a target only. Selection, eligibility, event dates and participation are not confirmed.</p>

          <div className="mt-16 sm:mt-20">
            <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <p className="text-xs font-extrabold uppercase tracking-[0.32em] text-[#e8c56a]">Explore the site</p>
                <h2 className="mt-3 font-display text-4xl text-white sm:text-5xl">EVERY SIDE OF THE JOURNEY.</h2>
              </div>
              <p className="max-w-md text-sm leading-6 text-white/55">The home page stays focused. Choose a section below for the complete information—without one long page to scroll through.</p>
            </div>

            <div className="mt-7 grid gap-4 sm:mt-9 sm:grid-cols-2 xl:grid-cols-3">
              {destinations.map((item) => {
                const Icon = item.icon;
                return (
                  <Link key={item.href} href={item.href} className="group relative flex min-h-48 flex-col overflow-hidden rounded-2xl border border-sky-200/15 bg-gradient-to-br from-[#183957]/90 via-[#102943]/95 to-[#0b1d32]/95 p-6 transition duration-300 hover:-translate-y-1 hover:border-[#e8c56a]/45 hover:shadow-[0_20px_55px_rgba(0,0,0,.2)] sm:min-h-52 sm:p-7">
                    <div className="flex items-start justify-between">
                      <span className="flex h-11 w-11 items-center justify-center rounded-xl border border-[#e8c56a]/20 bg-[#e8c56a]/[0.08] text-[#e8c56a]"><Icon className="h-5 w-5" /></span>
                      <span className="font-display text-xl text-white/25">{item.number}</span>
                    </div>
                    <h3 className="mt-5 text-xl font-bold text-white">{item.title}</h3>
                    <p className="mt-2 max-w-sm text-sm leading-6 text-white/55">{item.description}</p>
                    <span className="mt-auto flex items-center gap-2 pt-5 text-xs font-extrabold uppercase tracking-[0.18em] text-[#e8c56a]">Explore section <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" /></span>
                  </Link>
                );
              })}
            </div>
          </div>

          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            <Link href="/cv" className="flex min-h-16 items-center justify-between gap-4 rounded-xl border border-white/10 bg-white/[0.035] px-5 py-4 transition hover:border-sky-200/30 hover:bg-white/[0.06]">
              <span className="flex items-center gap-3"><FileText className="h-5 w-5 text-sky-200" /><span><span className="block font-bold text-white">Athlete CV</span><span className="mt-1 block text-xs text-white/45">Competition profile for review and download</span></span></span><ArrowUpRight className="h-4 w-4 shrink-0 text-[#e8c56a]" />
            </Link>
            <Link href="/contact" className="flex min-h-16 items-center justify-between gap-4 rounded-xl border border-white/10 bg-white/[0.035] px-5 py-4 transition hover:border-sky-200/30 hover:bg-white/[0.06]">
              <span className="flex items-center gap-3"><Mail className="h-5 w-5 text-sky-200" /><span><span className="block font-bold text-white">Contact & Socials</span><span className="mt-1 block text-xs text-white/45">Email and official profile links</span></span></span><ArrowUpRight className="h-4 w-4 shrink-0 text-[#e8c56a]" />
            </Link>
          </div>
          <div className="mt-8 flex flex-wrap items-center justify-between gap-3 border-t border-white/10 pt-6 text-xs text-white/35">
            <span>Discipline · Courage · Consistency</span>
            <Link href="/gallery" className="inline-flex items-center gap-2 font-bold text-white/60 transition hover:text-[#e8c56a]"><Images className="h-4 w-4" /> View photo gallery <ArrowUpRight className="h-3.5 w-3.5" /></Link>
          </div>
        </div>
      </section>
    </main>
  );
}
