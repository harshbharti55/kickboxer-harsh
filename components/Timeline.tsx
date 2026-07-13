"use client";

import { motion } from "framer-motion";
import {
  CalendarDays,
  Trophy,
  ShieldCheck,
  CircleDot,
} from "lucide-react";

import SectionHeading from "./SectionHeading";
import { fightRecords } from "@/data/site";

export default function Timeline() {
  return (
    <section
      id="record"
      className="relative overflow-hidden bg-black py-28"
    >
      {/* Background Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(212,175,55,0.08),transparent_65%)]" />

      <div className="container-page relative z-10">
        <SectionHeading
          eyebrow="Career Timeline"
          title="Every Fight Shapes The Champion"
          subtitle="Every bout represents discipline, preparation, and growth. This timeline highlights the journey through competition."
        />

        <div className="relative mx-auto mt-20 max-w-5xl">

          {/* Timeline Line */}
          <div className="absolute left-6 top-0 hidden h-full w-px bg-gradient-to-b from-gold via-gold/40 to-transparent lg:block" />

          <div className="space-y-10">

            {fightRecords.map((fight, index) => (
              <motion.div
                key={`${fight.opponent}-${fight.date}`}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.08,
                }}
                className="relative"
              >
                {/* Timeline Dot */}
                <div className="absolute left-2 top-10 hidden lg:flex h-8 w-8 items-center justify-center rounded-full border-4 border-black bg-gold">
                  <CircleDot className="h-4 w-4 text-black" />
                </div>

                <div className="glass ml-0 rounded-[2rem] border border-white/10 p-8 transition-all duration-300 hover:-translate-y-2 hover:border-gold/40 lg:ml-16">

                  <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">

                    {/* Left */}
                    <div className="flex-1">

                      <div className="flex flex-wrap items-center gap-3">

                        <div className="inline-flex items-center gap-2 rounded-full bg-gold/10 px-4 py-2 text-sm font-semibold text-gold">
                          <CalendarDays className="h-4 w-4" />
                          {fight.date}
                        </div>

                        <div
                          className={`rounded-full px-4 py-2 text-sm font-bold uppercase tracking-[0.2em]
                          ${
                            fight.result === "Win"
                              ? "bg-gold/10 text-gold"
                              : "bg-redbrand/10 text-redbrand"
                          }`}
                        >
                          {fight.result}
                        </div>

                      </div>

                      <h3 className="mt-6 text-3xl font-display text-white">
                        {fight.opponent}
                      </h3>

                      <p className="mt-3 text-lg leading-7 text-white/70">
                        {fight.event}
                      </p>

                    </div>

                    {/* Right */}
                    <div className="grid gap-4 sm:grid-cols-2 lg:w-80">

                      <div className="rounded-2xl border border-white/10 bg-white/5 p-5 text-center">

                        <Trophy className="mx-auto h-8 w-8 text-gold" />

                        <p className="mt-4 text-xs uppercase tracking-[0.25em] text-white/50">
                          Result
                        </p>

                        <p className="mt-2 text-xl font-bold text-white">
                          {fight.result}
                        </p>

                      </div>

                      <div className="rounded-2xl border border-white/10 bg-white/5 p-5 text-center">

                        <ShieldCheck className="mx-auto h-8 w-8 text-gold" />

                        <p className="mt-4 text-xs uppercase tracking-[0.25em] text-white/50">
                          Method
                        </p>

                        <p className="mt-2 text-xl font-bold text-white">
                          {fight.method}
                        </p>

                      </div>

                    </div>

                  </div>

                </div>
              </motion.div>
            ))}

          </div>
        </div>

        {/* Bottom Quote */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="mx-auto mt-24 max-w-4xl rounded-[2.5rem] border border-gold/20 bg-gradient-to-r from-gold/10 via-black to-black p-10 text-center"
        >
          <p className="text-sm uppercase tracking-[0.35em] text-gold">
            Fighting Philosophy
          </p>

          <h2 className="mt-5 text-4xl font-display text-white">
            Every Round Builds Character
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-white/70">
            Victory teaches confidence. Defeat teaches resilience. Every fight
            is another chapter in the pursuit of excellence and the dream of
            becoming a World Champion.
          </p>
        </motion.div>

      </div>
    </section>
  );
}
