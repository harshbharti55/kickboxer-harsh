"use client";

import { motion } from "framer-motion";
import { Trophy, Medal, Award, Star } from "lucide-react";

export default function AchievementsPage() {
  return (
    <main className="bg-black text-white">

      {/* Hero */}
      <section className="relative overflow-hidden py-28">

        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(212,175,55,0.08),transparent_60%)]" />
        <div className="absolute inset-0 grid-overlay opacity-20" />

        <div className="container-page relative z-10">

          <motion.div
            initial={{ opacity: 0, y: 35 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: .8 }}
            className="mx-auto max-w-4xl text-center"
          >

            <div className="inline-flex items-center gap-2 rounded-full border border-gold/20 bg-gold/10 px-5 py-2 text-xs font-semibold uppercase tracking-[0.35em] text-gold">

              <Trophy className="h-4 w-4" />

              Career Achievements

            </div>

            <h1 className="mt-8 font-display text-5xl sm:text-6xl lg:text-7xl">

              Medals

              <span className="block text-gradient">

                & Milestones

              </span>

            </h1>

            <p className="mx-auto mt-8 max-w-3xl text-lg leading-8 text-white/70">

              Every medal represents discipline, sacrifice and continuous
              improvement. This page highlights my achievements throughout
              my kickboxing journey.

            </p>

          </motion.div>

          {/* Stats */}

          <div className="mt-20 grid gap-6 md:grid-cols-4">

            {[
              {
                icon: Trophy,
                title: "National",
                value: "5+",
              },
              {
                icon: Medal,
                title: "Medals",
                value: "10+",
              },
              {
                icon: Award,
                title: "Events",
                value: "20+",
              },
              {
                icon: Star,
                title: "Experience",
                value: "8+ Years",
              },
            ].map((item) => {
              const Icon = item.icon;

              return (
                <motion.div
                  key={item.title}
                  whileHover={{ y: -8 }}
                  className="glass rounded-3xl border border-white/10 p-8 text-center"
                >

                  <Icon className="mx-auto h-10 w-10 text-gold" />

                  <h3 className="mt-5 text-3xl font-bold">
                    {item.value}
                  </h3>

                  <p className="mt-2 text-white/60">
                    {item.title}
                  </p>

                </motion.div>
              );
            })}

          </div>

  
        </div>

      </section>

            {/* Achievement Timeline */}

      <section className="container-page py-24">

        <div className="mx-auto max-w-3xl text-center">

          <p className="text-sm uppercase tracking-[0.35em] text-gold">
            Career Timeline
          </p>

          <h2 className="mt-4 font-display text-5xl text-white">
            Journey of Excellence
          </h2>

          <p className="mt-6 text-lg leading-8 text-white/70">
            Every competition has been a step toward becoming a better athlete
            and proudly representing India on the international stage.
          </p>

        </div>

        <div className="relative mx-auto mt-20 max-w-5xl">

          {/* Timeline Line */}
          <div className="absolute left-4 top-0 h-full w-px bg-gold/30 lg:left-1/2" />

          {[
            {
              year: "2022",
              medal: "🥇 Gold Medal",
              title: "Junior National Kickboxing Championship",
              place: "Kolkata, India",
              description:
                "Won Gold Medal in the Younger Junior Full Contact category and established myself at the national level.",
            },
            {
              year: "2023",
              medal: "🥈 Silver Medal",
              title: "WAKO India National Championship",
              place: "Ranchi, India",
              description:
                "Finished as Silver Medalist after a strong performance throughout the championship.",
            },
            {
              year: "2024",
              medal: "🥉 Bronze Medal",
              title: "National Kickboxing Championship",
              place: "Siliguri, India",
              description:
                "Secured Bronze Medal while continuing to compete against India's best athletes.",
            },
            {
              year: "2025",
              medal: "🥈 Silver Medal",
              title: "Senior National Championship",
              place: "Raipur, India",
              description:
                "Won Silver Medal in the Senior Men's Full Contact category, marking another major milestone.",
            },
          ].map((item, index) => (

            <motion.div
              key={item.year}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={`relative mb-12 lg:flex ${
                index % 2 === 0
                  ? "lg:flex-row"
                  : "lg:flex-row-reverse"
              }`}
            >

              {/* Timeline Dot */}
              <div className="absolute left-1 top-6 h-6 w-6 rounded-full border-4 border-black bg-gold lg:left-1/2 lg:-translate-x-1/2" />

              <div className="ml-12 lg:ml-0 lg:w-1/2 lg:px-10">

                <div className="glass rounded-[2rem] border border-white/10 p-8">

                  <span className="text-sm font-bold uppercase tracking-[0.3em] text-gold">
                    {item.year}
                  </span>

                  <h3 className="mt-4 text-3xl font-display text-white">
                    {item.medal}
                  </h3>

                  <h4 className="mt-4 text-xl font-semibold text-white">
                    {item.title}
                  </h4>

                  <p className="mt-2 text-gold">
                    {item.place}
                  </p>

                  <p className="mt-5 leading-8 text-white/70">
                    {item.description}
                  </p>

                </div>

              </div>

            </motion.div>

          ))}

        </div>

      </section>
            {/* Medal Showcase */}

      <section className="container-page py-24">

        <div className="mx-auto max-w-3xl text-center">

          <p className="text-sm uppercase tracking-[0.35em] text-gold">
            Medal Collection
          </p>

          <h2 className="mt-4 font-display text-5xl text-white">
            Championship Highlights
          </h2>

          <p className="mt-6 text-lg leading-8 text-white/70">
            National and international competitions that have shaped my
            career as a Full Contact Kickboxing athlete.
          </p>

        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">

          {[
            {
              medal: "🥇",
              title: "Gold Medal",
              event: "Junior National Championship",
              year: "2022",
            },
            {
              medal: "🥈",
              title: "Silver Medal",
              event: "WAKO India National",
              year: "2023",
            },
            {
              medal: "🥉",
              title: "Bronze Medal",
              event: "National Championship",
              year: "2024",
            },
            {
              medal: "🥈",
              title: "Silver Medal",
              event: "Senior National Championship",
              year: "2025",
            },
            {
              medal: "🇮🇳",
              title: "Represented India",
              event: "International Events",
              year: "2025–2026",
            },
            {
              medal: "🏆",
              title: "Career Goal",
              event: "World Championship",
              year: "Future",
            },
          ].map((item) => (

            <motion.div
              key={item.title + item.year}
              whileHover={{ y: -8 }}
              className="glass rounded-[2rem] border border-white/10 p-8 text-center"
            >

              <div className="text-6xl">
                {item.medal}
              </div>

              <h3 className="mt-6 text-2xl font-display text-white">
                {item.title}
              </h3>

              <p className="mt-3 text-gold">
                {item.event}
              </p>

              <p className="mt-2 text-white/60">
                {item.year}
              </p>

            </motion.div>

          ))}

        </div>

      </section>

      {/* Final CTA */}

      <section className="container-page pb-28">

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="overflow-hidden rounded-[2.5rem] border border-gold/20 bg-gradient-to-r from-gold/10 via-black to-black p-12"
        >

          <div className="mx-auto max-w-4xl text-center">

            <p className="text-sm uppercase tracking-[0.35em] text-gold">
              The Journey Continues
            </p>

            <h2 className="mt-5 font-display text-5xl text-white">
              Every Medal Is
              <span className="block text-gradient">
                A Step Forward
              </span>
            </h2>

            <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-white/70">
              My achievements are the result of years of discipline,
              determination and hard work. I continue striving to represent
              India with pride while pursuing success on the international
              stage.
            </p>

            <div className="mt-10 flex flex-wrap justify-center gap-5">

              <a
                href="/gallery"
                className="rounded-full bg-gold px-8 py-4 font-semibold text-black transition hover:scale-105"
              >
                View Gallery
              </a>

              <a
                href="/media"
                className="rounded-full border border-white/15 bg-white/5 px-8 py-4 font-semibold text-white transition hover:border-gold/40 hover:bg-white/10"
              >
                Watch Highlights
              </a>

              <a
                href="/contact"
                className="rounded-full border border-gold/30 bg-gold/10 px-8 py-4 font-semibold text-gold transition hover:bg-gold hover:text-black"
              >
                Contact Me
              </a>

            </div>

          </div>

        </motion.div>

      </section>

    </main>
  );
}
