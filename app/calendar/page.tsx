"use client";

import { motion } from "framer-motion";
import {
  CalendarDays,
  Trophy,
  Globe,
  MapPin,
} from "lucide-react";

const upcoming = [
  {
    event: "WAKO World Cup",
    date: "October 2026",
    location: "Tashkent, Uzbekistan",
    status: "Upcoming",
  },
  {
    event: "Senior National Kickboxing Championship",
    date: "2026",
    location: "India",
    status: "Planned",
  },
];

const history = [
  {
    year: "2025",
    event: "Senior National Kickboxing Championship",
    result: "🥈 Silver Medal",
    location: "Raipur, India",
  },
  {
    year: "2024",
    event: "National Kickboxing Championship",
    result: "🥉 Bronze Medal",
    location: "Siliguri, India",
  },
  {
    year: "2023",
    event: "WAKO India National Championship",
    result: "🥈 Silver Medal",
    location: "Ranchi, India",
  },
  {
    year: "2022",
    event: "Junior National Kickboxing Championship",
    result: "🥇 Gold Medal",
    location: "Kolkata, India",
  },
];

export default function CalendarPage() {
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

              <CalendarDays className="h-4 w-4" />

              Competition Calendar

            </div>

            <h1 className="mt-8 font-display text-5xl sm:text-6xl lg:text-7xl">

              Season

              <span className="block text-gradient">

                Schedule

              </span>

            </h1>

            <p className="mx-auto mt-8 max-w-3xl text-lg leading-8 text-white/70">

              Explore upcoming competitions, previous championships,
              international tournaments and my journey representing India
              in Full Contact Kickboxing.

            </p>

          </motion.div>

          {/* Stats */}

          <div className="mt-20 grid gap-6 md:grid-cols-4">

            {[
              {
                icon: Trophy,
                title: "National Events",
                value: "20+",
              },
              {
                icon: Globe,
                title: "International",
                value: "2+",
              },
              {
                icon: CalendarDays,
                title: "Season",
                value: "2026",
              },
              {
                icon: MapPin,
                title: "Countries",
                value: "India + Abroad",
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
      {/* Upcoming Competitions */}

      <section className="container-page py-24">

        <div className="mx-auto max-w-3xl text-center">

          <p className="text-sm uppercase tracking-[0.35em] text-gold">
            2026 Competition Schedule
          </p>

          <h2 className="mt-4 font-display text-5xl text-white">
            Upcoming Events
          </h2>

          <p className="mt-6 text-lg leading-8 text-white/70">
            These are the major competitions and tournaments planned for the
            current season as I continue my journey toward international success.
          </p>

        </div>

        <div className="relative mt-20">

          {/* Timeline */}
          <div className="absolute left-5 top-0 h-full w-px bg-gold/30 lg:left-1/2" />

          {upcoming.map((item, index) => (

            <motion.div
              key={item.event}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15 }}
              className={`relative mb-12 lg:flex ${
                index % 2 === 0
                  ? "lg:flex-row"
                  : "lg:flex-row-reverse"
              }`}
            >

              {/* Timeline Dot */}

              <div className="absolute left-2 top-8 h-6 w-6 rounded-full border-4 border-black bg-gold lg:left-1/2 lg:-translate-x-1/2" />

              <div className="ml-14 lg:ml-0 lg:w-1/2 lg:px-10">

                <motion.div
                  whileHover={{ y: -8 }}
                  className="glass rounded-[2rem] border border-white/10 p-8 transition-all duration-300 hover:border-gold/40"
                >

                  <div className="flex items-center justify-between">

                    <span className="rounded-full bg-gold/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-gold">

                      {item.status}

                    </span>

                    <CalendarDays className="h-6 w-6 text-gold" />

                  </div>

                  <h3 className="mt-6 text-3xl font-display text-white">

                    {item.event}

                  </h3>

                  <div className="mt-6 space-y-3">

                    <div className="flex items-center gap-3">

                      <CalendarDays className="h-5 w-5 text-gold" />

                      <span className="text-white/75">
                        {item.date}
                      </span>

                    </div>

                    <div className="flex items-center gap-3">

                      <MapPin className="h-5 w-5 text-gold" />

                      <span className="text-white/75">
                        {item.location}
                      </span>

                    </div>

                  </div>

                </motion.div>

              </div>

            </motion.div>

          ))}

        </div>

      </section>
            {/* Competition History */}

      <section className="container-page py-24">

        <div className="mx-auto max-w-3xl text-center">

          <p className="text-sm uppercase tracking-[0.35em] text-gold">
            Competition History
          </p>

          <h2 className="mt-4 font-display text-5xl text-white">
            Career Highlights
          </h2>

          <p className="mt-6 text-lg leading-8 text-white/70">
            A timeline of national championships, medal-winning performances,
            and milestones achieved throughout my kickboxing career.
          </p>

        </div>

        <div className="mt-20 grid gap-8">

          {history.map((item, index) => (

            <motion.div
              key={item.year}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.12 }}
              whileHover={{ y: -6 }}
              className="glass rounded-[2rem] border border-white/10 p-8 transition-all duration-300 hover:border-gold/40"
            >

              <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">

                <div>

                  <span className="rounded-full bg-gold/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-gold">
                    {item.year}
                  </span>

                  <h3 className="mt-6 text-3xl font-display text-white">
                    {item.event}
                  </h3>

                  <div className="mt-5 flex items-center gap-3 text-white/70">

                    <MapPin className="h-5 w-5 text-gold" />

                    <span>{item.location}</span>

                  </div>

                </div>

                <div className="text-left lg:text-right">

                  <div className="inline-flex rounded-full border border-gold/20 bg-gold/10 px-6 py-3">

                    <span className="text-lg font-semibold text-gold">
                      {item.result}
                    </span>

                  </div>

                  <p className="mt-5 text-white/60">
                    Official Championship Result
                  </p>

                </div>

              </div>

            </motion.div>

          ))}

        </div>

      </section>

      {/* Season Goals */}

      <section className="container-page py-24">

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="overflow-hidden rounded-[2.5rem] border border-gold/20 bg-gradient-to-r from-gold/10 via-black to-black p-12"
        >

          <div className="mx-auto max-w-4xl text-center">

            <p className="text-sm uppercase tracking-[0.35em] text-gold">
              2026 Goals
            </p>

            <h2 className="mt-5 font-display text-5xl text-white">
              Mission
              <span className="block text-gradient">
                World Stage
              </span>
            </h2>

            <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-white/70">
              Continue representing India in national and international
              competitions while striving to become a World Championship
              medalist and inspiring the next generation of athletes.
            </p>

            <div className="mt-10 grid gap-6 md:grid-cols-3">

              <div className="glass rounded-3xl border border-white/10 p-6">
                <h3 className="text-3xl">🌍</h3>
                <p className="mt-4 font-semibold text-white">
                  International Competition
                </p>
              </div>

              <div className="glass rounded-3xl border border-white/10 p-6">
                <h3 className="text-3xl">🥇</h3>
                <p className="mt-4 font-semibold text-white">
                  Win More Gold Medals
                </p>
              </div>

              <div className="glass rounded-3xl border border-white/10 p-6">
                <h3 className="text-3xl">🇮🇳</h3>
                <p className="mt-4 font-semibold text-white">
                  Represent India
                </p>
              </div>

            </div>

          </div>

        </motion.div>

      </section>
            {/* Contact CTA */}

      <section className="container-page pb-28">

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="overflow-hidden rounded-[2.5rem] border border-gold/20 bg-gradient-to-r from-gold/10 via-black to-black p-12"
        >

          <div className="mx-auto max-w-4xl text-center">

            <p className="text-sm uppercase tracking-[0.35em] text-gold">
              Competition Journey
            </p>

            <h2 className="mt-5 font-display text-5xl text-white">
              Follow My
              <span className="block text-gradient">
                Next Chapter
              </span>
            </h2>

            <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-white/70">
              My competition calendar is regularly updated with upcoming
              championships, international tournaments and major career
              milestones. Thank you for supporting my journey toward
              representing India on the world stage.
            </p>

            <div className="mt-10 flex flex-wrap justify-center gap-5">

              <a
                href="/achievements"
                className="rounded-full bg-gold px-8 py-4 font-semibold text-black transition hover:scale-105"
              >
                View Achievements
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
      
