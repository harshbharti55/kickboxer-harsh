"use client";

import { motion } from "framer-motion";
import { CalendarDays, Trophy, Globe, MapPin, ArrowUpRight, Handshake } from "lucide-react";
import { competitionRecords, plannedGoals2027, sponsorshipGoal, PLANNED_NOTE } from "@/data/athlete";

export default function CalendarPage() {
  return (
    <main className="overflow-hidden bg-black text-white">
      <section className="relative py-24 sm:py-28">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(212,175,55,0.10),transparent_60%)]" />
        <div className="absolute inset-0 grid-overlay opacity-20" />
        <div className="container-page relative z-10">
          <motion.div initial={{ opacity: 0, y: 28 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }} className="mx-auto max-w-4xl text-center">
            <div className="inline-flex items-center gap-2 rounded-full border border-gold/20 bg-gold/10 px-5 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-gold">
              <CalendarDays className="h-4 w-4" /> Athlete competition calendar
            </div>
            <h1 className="mt-8 font-display text-5xl sm:text-6xl lg:text-7xl">Road to the <span className="block text-gradient">World Stage</span></h1>
            <p className="mx-auto mt-7 max-w-3xl text-lg leading-8 text-white/70">
              Harsh Bharti’s competition record and planned 2027 targets. Past results are listed separately from future goals; planned events are not confirmed entries.
            </p>
          </motion.div>

          <div className="mt-14 grid gap-5 sm:grid-cols-3">
            {[
              { icon: Trophy, value: "2018–2026", label: "Competition record" },
              { icon: Globe, value: "2027", label: "International goals" },
              { icon: Handshake, value: sponsorshipGoal.requestedFunding, label: "World Championship funding target" },
            ].map((item) => {
              const Icon = item.icon;
              return <motion.div key={item.label} whileHover={{ y: -5 }} className="glass rounded-3xl border border-white/10 p-6 text-center">
                <Icon className="mx-auto h-8 w-8 text-gold" />
                <p className="mt-4 text-2xl font-bold">{item.value}</p>
                <p className="mt-2 text-sm text-white/60">{item.label}</p>
              </motion.div>;
            })}
          </div>
        </div>
      </section>

      <section className="container-page py-12 sm:py-16">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm uppercase tracking-[0.3em] text-gold">2027 · planned goals</p>
          <h2 className="mt-4 font-display text-4xl sm:text-5xl">Target Competition Calendar</h2>
          <p className="mt-5 leading-8 text-white/65">{PLANNED_NOTE}</p>
        </div>
        <div className="mt-10 grid gap-5 lg:grid-cols-2">
          {plannedGoals2027.map((goal, index) => {
            const isWorlds = goal.name.includes("Senior World");
            return <motion.article key={goal.name} initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.05 }}
              className={"rounded-3xl border p-6 sm:p-8 " + (isWorlds ? "border-gold/50 bg-gradient-to-br from-gold/10 to-black" : "border-white/10 bg-white/[0.035]")}>
              <div className="flex flex-wrap items-center justify-between gap-3">
                <span className="rounded-full border border-gold/30 bg-gold/10 px-3 py-1 text-xs font-bold uppercase tracking-wider text-gold">Planned goal</span>
                {isWorlds ? <span className="text-xs font-semibold uppercase tracking-wider text-gold">Primary target</span> : null}
              </div>
              <h3 className="mt-5 text-2xl font-semibold">{goal.name}</h3>
              <div className="mt-5 space-y-3 text-sm text-white/70">
                <p className="flex items-start gap-3"><CalendarDays className="mt-0.5 h-4 w-4 shrink-0 text-gold" />{goal.planningWindow}</p>
                <p className="flex items-start gap-3"><MapPin className="mt-0.5 h-4 w-4 shrink-0 text-gold" />{goal.targetLocation}</p>
              </div>
              <p className="mt-5 border-t border-white/10 pt-4 text-sm leading-6 text-white/50">{goal.note}</p>
            </motion.article>;
          })}
        </div>
        <div className="mt-8 rounded-2xl border border-white/10 bg-white/[0.03] p-5 text-sm leading-6 text-white/55">
          Planning windows are athlete goals, not official event dates. Confirm the calendar, eligibility, qualification/selection process, registration, and travel budget with the relevant federation before making commitments.
          <div className="mt-3 flex flex-wrap gap-4">
            <a className="inline-flex items-center gap-1 text-gold underline" href="https://www.wako.sport/event-list" target="_blank" rel="noreferrer">WAKO event list <ArrowUpRight className="h-3 w-3" /></a>
            <a className="inline-flex items-center gap-1 text-gold underline" href="https://www.wakoindia.org/calendar/" target="_blank" rel="noreferrer">WAKO India calendar <ArrowUpRight className="h-3 w-3" /></a>
          </div>
        </div>
      </section>

      <section className="container-page py-12 sm:py-16">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm uppercase tracking-[0.3em] text-gold">Career history</p>
          <h2 className="mt-4 font-display text-4xl sm:text-5xl">Competition Record</h2>
          <p className="mt-5 leading-8 text-white/65">Results and participation are displayed as supplied by the athlete. Medal awards are not inferred where no medal was reported.</p>
        </div>
        <ol className="relative mx-auto mt-10 max-w-4xl space-y-4 border-l border-gold/30 pl-6 sm:pl-10">
          {competitionRecords.map((record, index) => (
            <motion.li key={`${record.year}-${record.event}`} initial={{ opacity: 0, x: -14 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.04 }} className="relative rounded-2xl border border-white/10 bg-white/[0.035] p-5 sm:p-7">
              <span className="absolute -left-[1.95rem] top-8 h-3 w-3 rounded-full bg-gold ring-4 ring-black sm:-left-[2.55rem]" />
              <div className="flex flex-wrap items-start justify-between gap-4">
                <div>
                  <p className="text-sm font-bold uppercase tracking-[0.25em] text-gold">{record.year}{record.date ? ` · ${record.date}` : ""}</p>
                  <h3 className="mt-3 text-xl font-semibold">{record.event}</h3>
                  <p className="mt-2 text-sm text-white/55">{record.location}{record.category ? ` · ${record.category}` : ""}</p>
                </div>
                <span className="rounded-full border border-gold/40 px-3 py-1 text-xs font-bold uppercase tracking-wider text-gold">{record.headline}</span>
              </div>
            </motion.li>
          ))}
        </ol>
      </section>

      <section className="container-page pb-24 pt-12">
        <div className="rounded-[2rem] border border-gold/30 bg-gradient-to-r from-gold/10 via-black to-black p-8 text-center sm:p-12">
          <p className="text-sm uppercase tracking-[0.3em] text-gold">Sponsorship campaign</p>
          <h2 className="mt-4 font-display text-3xl sm:text-4xl">Help Fund the World Championship Goal</h2>
          <p className="mx-auto mt-4 max-w-2xl text-white/70">Funding target: <strong className="text-white">{sponsorshipGoal.requestedFunding}</strong>. Current sponsorship: <strong className="text-white">{sponsorshipGoal.currentFunding}</strong>.</p>
          <p className="mx-auto mt-3 max-w-2xl text-sm leading-6 text-white/50">Selection and participation are not yet confirmed. Budget is preliminary and must be supported by official information and quotations.</p>
          <div className="mt-7 flex flex-wrap justify-center gap-4">
            <a href="/sponsorship" className="rounded-full bg-gold px-7 py-3 font-semibold text-black transition hover:scale-105">Sponsorship details</a>
            <a href="/cv" className="rounded-full border border-white/20 px-7 py-3 font-semibold text-white transition hover:border-gold hover:text-gold">View athlete CV</a>
          </div>
        </div>
      </section>
    </main>
  );
}
