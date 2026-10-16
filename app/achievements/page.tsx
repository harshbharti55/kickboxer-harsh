"use client";

import { motion } from "framer-motion";
import { Trophy, Medal, Award, Star } from "lucide-react";
import { competitionRecords } from "@/data/athlete";

export default function AchievementsPage() {
  const medals = competitionRecords.filter((record) => ["gold", "silver", "bronze"].includes(record.kind));
  const nationalEvents = competitionRecords.length;

  return (
    <main className="overflow-hidden bg-black text-white">
      <section className="relative py-24 sm:py-28">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(212,175,55,0.08),transparent_60%)]" />
        <div className="absolute inset-0 grid-overlay opacity-20" />
        <div className="container-page relative z-10">
          <motion.div initial={{ opacity: 0, y: 25 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }} className="mx-auto max-w-4xl text-center">
            <div className="inline-flex items-center gap-2 rounded-full border border-gold/20 bg-gold/10 px-5 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-gold">
              <Trophy className="h-4 w-4" /> Competition record
            </div>
            <h1 className="mt-8 font-display text-5xl sm:text-6xl lg:text-7xl">Medals <span className="block text-gradient">& milestones</span></h1>
            <p className="mx-auto mt-8 max-w-3xl text-lg leading-8 text-white/70">A verified-by-athlete record of the competitions, medals and placings shared by Harsh Bharti. Each result is shown with its event and location.</p>
          </motion.div>

          <div className="mt-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { icon: Medal, title: "Medal-winning events", value: String(medals.length) },
              { icon: Trophy, title: "Gold medals (2022)", value: "2" },
              { icon: Award, title: "Latest placing", value: "5th" },
              { icon: Star, title: "Record spans", value: "2018–2026" },
            ].map((item) => {
              const Icon = item.icon;
              return <motion.div key={item.title} whileHover={{ y: -5 }} className="glass rounded-3xl border border-white/10 p-6 text-center">
                <Icon className="mx-auto h-9 w-9 text-gold" />
                <h2 className="mt-4 text-2xl font-bold">{item.value}</h2>
                <p className="mt-2 text-sm text-white/60">{item.title}</p>
              </motion.div>;
            })}
          </div>
        </div>
      </section>

      <section className="container-page py-16 sm:py-20">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm uppercase tracking-[0.3em] text-gold">Career timeline</p>
          <h2 className="mt-4 font-display text-4xl sm:text-5xl">Competition by competition</h2>
          <p className="mt-5 leading-8 text-white/65">Participation, medals and placing are intentionally distinguished. No unprovided results or medal totals are inferred.</p>
        </div>
        <ol className="relative mx-auto mt-12 max-w-4xl space-y-5 border-l border-gold/30 pl-6 sm:pl-10">
          {competitionRecords.map((record, index) => (
            <motion.li key={`${record.year}-${record.event}`} initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.04 }} className="relative rounded-2xl border border-white/10 bg-white/[0.04] p-6 sm:p-8">
              <span className="absolute -left-[2.05rem] top-8 h-3 w-3 rounded-full bg-gold ring-4 ring-black sm:-left-[2.55rem]" />
              <div className="flex flex-wrap items-start justify-between gap-4">
                <div>
                  <p className="text-sm font-bold uppercase tracking-[0.3em] text-gold">{record.year}{record.date ? ` · ${record.date}` : ""}</p>
                  <h3 className="mt-3 text-xl font-semibold">{record.event}</h3>
                  <p className="mt-2 text-sm text-white/55">{record.location}{record.category ? ` · ${record.category}` : ""}</p>
                </div>
                <span className="rounded-full border border-gold/40 px-3 py-1 text-xs font-bold uppercase tracking-wider text-gold">{record.headline}</span>
              </div>
            </motion.li>
          ))}
        </ol>
        <div className="mt-12 flex flex-wrap justify-center gap-4">
          <a href="/cv" className="rounded-full bg-gold px-7 py-3 font-semibold text-black transition hover:scale-105">View CV</a>
          <a href="/athlete-profile" className="rounded-full border border-white/20 px-7 py-3 font-semibold text-white transition hover:border-gold hover:text-gold">Athlete profile</a>
          <a href="/sponsorship" className="rounded-full border border-gold/40 bg-gold/10 px-7 py-3 font-semibold text-gold transition hover:bg-gold hover:text-black">Partner with me</a>
        </div>
      </section>
    </main>
  );
}
