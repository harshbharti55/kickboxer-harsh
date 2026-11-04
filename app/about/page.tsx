"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight, Flag, Medal, Target, Trophy } from "lucide-react";
import { athlete, competitionRecords, plannedGoals2027 } from "@/data/athlete";

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-[#081626] text-white">
      <section className="relative overflow-hidden border-b border-sky-200/10 bg-[radial-gradient(circle_at_80%_20%,rgba(56,189,248,.14),transparent_36%),linear-gradient(145deg,#102943,#081626_65%)] py-24 sm:py-32">
        <div className="container-page relative z-10 grid items-center gap-12 lg:grid-cols-[1.05fr_.95fr]">
          <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .65 }}>
            <p className="text-xs font-bold uppercase tracking-[.32em] text-[#e8c56a]">Athlete profile · India</p>
            <h1 className="mt-5 font-display text-6xl leading-[.95] sm:text-7xl lg:text-8xl">HARSH <span className="block text-sky-200">BHARTI.</span></h1>
            <p className="mt-7 max-w-2xl text-lg leading-8 text-slate-200/75">
              {athlete.name} is an Indian competitive {athlete.discipline} athlete from {athlete.region}. His journey is shaped by national championship experience, disciplined preparation and the ambition to compete internationally.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <span className="rounded-full border border-sky-200/20 bg-sky-200/5 px-4 py-2 text-sm text-sky-100">🇮🇳 Representing India</span>
              <span className="rounded-full border border-sky-200/20 bg-sky-200/5 px-4 py-2 text-sm text-sky-100">{athlete.weightClass}</span>
              <span className="rounded-full border border-sky-200/20 bg-sky-200/5 px-4 py-2 text-sm text-sky-100">National medalist</span>
            </div>
            <div className="mt-9 flex flex-wrap gap-4">
              <Link href="/achievements" className="inline-flex items-center gap-2 rounded-xl bg-[#e8c56a] px-5 py-3 font-bold text-[#081626]">Competition record <ArrowUpRight className="h-4 w-4" /></Link>
              <Link href="/contact" className="inline-flex items-center gap-2 rounded-xl border border-white/20 px-5 py-3 font-bold text-white hover:border-sky-200/50">Contact & socials <ArrowUpRight className="h-4 w-4" /></Link>
            </div>
          </motion.div>
          <motion.div initial={{ opacity: 0, scale: .97 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: .7, delay: .1 }} className="relative mx-auto w-full max-w-lg">
            <div className="absolute -inset-3 rounded-[2rem] border border-sky-200/20" />
            <div className="relative aspect-[4/5] overflow-hidden rounded-[1.6rem] border border-white/15 bg-[#102943]">
              <Image src="/media/hero.png" alt="Harsh Bharti, Indian full contact kickboxing athlete" fill priority sizes="(max-width: 1024px) 90vw, 42vw" className="object-cover object-top" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#081626]/90 via-transparent to-transparent" />
              <p className="absolute bottom-6 left-6 text-xs font-bold uppercase tracking-[.28em] text-[#e8c56a]">Discipline · Courage · Consistency</p>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="container-page py-20 sm:py-24">
        <div className="grid gap-5 sm:grid-cols-3">
          {[
            { icon: Trophy, title: "Two gold medals", detail: "WAKO India Open National Tournament · 2022" },
            { icon: Medal, title: "National podiums", detail: "Silver in 2023 and 2025; bronze in 2024" },
            { icon: Flag, title: "Latest national result", detail: "5th place · Seniors & Masters · 2026" },
          ].map((item) => {
            const Icon = item.icon;
            return <div key={item.title} className="rounded-2xl border border-sky-200/15 bg-gradient-to-br from-[#173957] to-[#0c2037] p-6">
              <Icon className="h-7 w-7 text-[#e8c56a]" />
              <h2 className="mt-5 text-xl font-bold">{item.title}</h2>
              <p className="mt-2 text-sm leading-6 text-slate-300/65">{item.detail}</p>
            </div>;
          })}
        </div>
      </section>

      <section className="border-y border-sky-200/10 bg-[#0c2035] py-20">
        <div className="container-page">
          <p className="text-xs font-bold uppercase tracking-[.3em] text-[#e8c56a]">The journey</p>
          <h2 className="mt-3 font-display text-4xl sm:text-5xl">COMPETITION RECORD</h2>
          <p className="mt-4 max-w-2xl leading-7 text-slate-300/65">The following results and participation details are based on the competition record supplied by the athlete.</p>
          <ol className="mt-10 space-y-4">
            {competitionRecords.map((record) => (
              <li key={`${record.year}-${record.event}`} className="grid gap-3 rounded-2xl border border-white/10 bg-white/[.035] p-5 sm:grid-cols-[110px_1fr_auto] sm:items-center sm:p-6">
                <p className="font-display text-3xl text-sky-200">{record.year}</p>
                <div>
                  <h3 className="font-bold text-white">{record.event}</h3>
                  <p className="mt-1 text-sm text-slate-300/60">{record.location}{record.date ? ` · ${record.date}` : ""}{record.category ? ` · ${record.category}` : ""}</p>
                </div>
                <span className="w-fit rounded-full border border-[#e8c56a]/30 px-3 py-1.5 text-xs font-bold text-[#e8c56a]">{record.headline}</span>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="container-page py-20 sm:py-24">
        <div className="flex items-center gap-3"><Target className="h-6 w-6 text-[#e8c56a]" /><p className="text-xs font-bold uppercase tracking-[.3em] text-[#e8c56a]">Looking ahead</p></div>
        <h2 className="mt-3 font-display text-4xl sm:text-5xl">2027 INTERNATIONAL TARGETS</h2>
        <p className="mt-4 max-w-3xl leading-7 text-slate-300/65">These are planned competition targets based on the federation calendar details supplied by the athlete. They are not confirmation of selection, entry or participation.</p>
        <div className="mt-9 grid gap-4 md:grid-cols-2">
          {plannedGoals2027.map((goal) => (
            <article key={goal.name} className="rounded-2xl border border-sky-200/15 bg-gradient-to-br from-[#173957]/80 to-[#0c2037] p-6">
              <span className="text-[10px] font-extrabold uppercase tracking-[.22em] text-[#e8c56a]">{goal.status}</span>
              <h3 className="mt-3 text-xl font-bold">{goal.name}</h3>
              <p className="mt-2 text-sm text-sky-100/65">{goal.planningWindow} · {goal.targetLocation}</p>
              {goal.note && <p className="mt-4 text-xs leading-6 text-slate-300/50">{goal.note}</p>}
            </article>
          ))}
        </div>
      </section>

      <section className="container-page pb-24">
        <div className="rounded-3xl border border-[#e8c56a]/25 bg-[linear-gradient(120deg,rgba(232,197,106,.09),rgba(56,189,248,.06),rgba(12,32,53,.9))] p-8 sm:p-12">
          <p className="text-xs font-bold uppercase tracking-[.3em] text-[#e8c56a]">Mission</p>
          <h2 className="mt-3 font-display text-4xl sm:text-5xl">EARN EVERY ROUND.</h2>
          <p className="mt-5 max-w-3xl leading-8 text-slate-200/70">To keep improving through disciplined training, compete with integrity, represent India with pride and encourage more young people to discover the values of sport.</p>
          <p className="mt-4 text-sm text-slate-300/50">The 2027 Senior World Championship remains a target only. Selection, eligibility, event dates, funding and participation are not confirmed.</p>
        </div>
      </section>
    </main>
  );
}
