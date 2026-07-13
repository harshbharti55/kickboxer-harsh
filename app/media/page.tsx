"use client";

import { motion } from "framer-motion";
import {
  PlayCircle,
  Newspaper,
  Mic,
  Camera,
  ArrowRight,
} from "lucide-react";

const media = [
  {
    title: "National Championship Highlights",
    type: "Competition",
    year: "2025",
    description:
      "Highlights from the WAKO India Senior National Kickboxing Championship.",
  },
  {
    title: "Training Session",
    type: "Training",
    year: "2026",
    description:
      "Strength, conditioning and technical training footage.",
  },
  {
    title: "Media Interview",
    type: "Interview",
    year: "2026",
    description:
      "Official interviews, athlete stories and behind-the-scenes content.",
  },
];

export default function MediaPage() {
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

              <Camera className="h-4 w-4" />

              Media & Press

            </div>

            <h1 className="mt-8 font-display text-5xl sm:text-6xl lg:text-7xl">

              Official

              <span className="block text-gradient">

                Media Center

              </span>

            </h1>

            <p className="mx-auto mt-8 max-w-3xl text-lg leading-8 text-white/70">

              Explore official videos, interviews, press coverage,
              training highlights and competition moments throughout my
              kickboxing journey.

            </p>

          </motion.div>

        </div>

      </section>

      {/* Featured Video */}

      <section className="container-page py-10">

        <motion.div
          whileHover={{ scale: 1.01 }}
          className="glass overflow-hidden rounded-[2.5rem] border border-gold/20"
        >

          <div className="aspect-video bg-gradient-to-br from-gold/10 to-black flex items-center justify-center">

            <PlayCircle className="h-24 w-24 text-gold" />

          </div>

          <div className="p-10">

            <p className="text-sm uppercase tracking-[0.35em] text-gold">

              Featured Video

            </p>

            <h2 className="mt-4 text-4xl font-display">

              National Championship Highlights

            </h2>

            <p className="mt-5 leading-8 text-white/70">

              Watch my official competition highlights, showcasing
              discipline, technique and determination inside the ring.

            </p>

          </div>

        </motion.div>

      </section>

      {/* Media Grid */}

      <section className="container-page py-20">

        <div className="grid gap-8 lg:grid-cols-3">

          {media.map((item) => (

            <motion.div
              key={item.title}
              whileHover={{ y: -8 }}
              className="glass rounded-[2rem] border border-white/10 p-8"
            >

              <span className="rounded-full bg-gold/10 px-4 py-2 text-xs uppercase tracking-[0.3em] text-gold">

                {item.type}

              </span>

              <h3 className="mt-6 text-2xl font-display">

                {item.title}

              </h3>

              <p className="mt-4 leading-7 text-white/65">

                {item.description}

              </p>

              <div className="mt-8 flex items-center justify-between">

                <span className="text-gold">

                  {item.year}

                </span>

                <ArrowRight className="text-gold" />

              </div>

            </motion.div>

          ))}

        </div>

      </section>

            {/* Press & Interviews */}

      <section className="container-page py-20">

        <div className="text-center">

          <p className="text-sm uppercase tracking-[0.35em] text-gold">
            Press & Interviews
          </p>

          <h2 className="mt-4 font-display text-5xl">
            Featured Media Coverage
          </h2>

        </div>

        <div className="mt-16 grid gap-8 lg:grid-cols-2">

          {/* Interview */}

          <motion.div
            whileHover={{ y: -8 }}
            className="glass rounded-[2.5rem] border border-white/10 p-10"
          >

            <Mic className="h-10 w-10 text-gold" />

            <h3 className="mt-6 text-3xl font-display">
              Athlete Interviews
            </h3>

            <p className="mt-5 leading-8 text-white/70">
              Stories about my journey, preparation, goals and experiences
              representing India in kickboxing competitions.
            </p>

            <button className="mt-8 inline-flex items-center gap-3 rounded-full bg-gold px-6 py-3 font-semibold text-black transition hover:scale-105">

              Read Interview

              <ArrowRight className="h-5 w-5" />

            </button>

          </motion.div>

          {/* Press */}

          <motion.div
            whileHover={{ y: -8 }}
            className="glass rounded-[2.5rem] border border-white/10 p-10"
          >

            <Newspaper className="h-10 w-10 text-gold" />

            <h3 className="mt-6 text-3xl font-display">
              Press Coverage
            </h3>

            <p className="mt-5 leading-8 text-white/70">
              Official news articles, championship reports and media
              publications covering my athletic career.
            </p>

            <button className="mt-8 inline-flex items-center gap-3 rounded-full bg-white px-6 py-3 font-semibold text-black transition hover:scale-105">

              View Articles

              <ArrowRight className="h-5 w-5" />

            </button>

          </motion.div>

        </div>

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
              Media Contact
            </p>

            <h2 className="mt-5 font-display text-5xl text-white">
              Looking For An
              <span className="block text-gradient">
                Interview?
              </span>
            </h2>

            <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-white/70">
              Journalists, media organizations, podcast hosts and event
              organizers are welcome to contact me for interviews,
              appearances, features and collaborations.
            </p>

            <div className="mt-10 flex flex-wrap justify-center gap-5">

              <a
                href="/contact"
                className="rounded-full bg-gold px-8 py-4 font-semibold text-black transition hover:scale-105"
              >
                Contact Me
              </a>

              <a
                href="/downloads/media-kit.pdf"
                className="rounded-full border border-white/15 bg-white/5 px-8 py-4 font-semibold text-white transition hover:border-gold/40 hover:bg-white/10"
              >
                Download Media Kit
              </a>

            </div>

          </div>

        </motion.div>

      </section>

    </main>
  );
}
