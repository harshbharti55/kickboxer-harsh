"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import {
  Trophy,
  Medal,
  Flag,
  Target,
  ArrowRight,
} from "lucide-react";

import SectionHeading from "./SectionHeading";
import { boxer, journey, represented, contact } from "@/data/site";

export default function About() {
  return (
    <section
      id="about"
      className="relative overflow-hidden bg-black py-28"
    >
      {/* Background Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(212,175,55,0.12),transparent_55%)]" />

      <div className="container-page relative z-10">

        <SectionHeading
          eyebrow="About"
          title="Young. Focused. Built For Greatness."
          subtitle="A dedicated Indian Full Contact Kickboxing athlete striving to represent India at the highest level through discipline, consistency, and elite performance."
        />

        <div className="mt-16 grid gap-12 lg:grid-cols-[0.9fr_1.1fr]"> 

          {/* LEFT - Athlete Profile */}
<motion.div
  initial={{ opacity: 0, x: -40 }}
  whileInView={{ opacity: 1, x: 0 }}
  viewport={{ once: true }}
  transition={{ duration: 0.7 }}
  className="relative"
>
  {/* Glow */}
  <div className="absolute -inset-6 rounded-[3rem] bg-gradient-to-br from-gold/20 via-transparent to-redbrand/20 blur-3xl" />

  <div className="glass relative overflow-hidden rounded-[2.5rem] border border-white/10 p-3">

    {/* Athlete Image */}
    <div className="relative aspect-[4/5] overflow-hidden rounded-[2rem]">

      <Image
        src="/media/hero.png"
        alt={boxer.name}
        fill
        priority
        className="object-cover object-top transition duration-700 hover:scale-105"
      />

      {/* Gradient */}
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />

      {/* Country Badge */}
      <div className="absolute left-5 top-5 rounded-full border border-gold/30 bg-black/50 px-4 py-2 backdrop-blur-xl">
        <span className="text-xs font-semibold uppercase tracking-[0.3em] text-gold">
          🇮🇳 Representing India
        </span>
      </div>

      {/* Bottom Info */}
      <div className="absolute bottom-0 left-0 right-0 p-6">

        <div className="rounded-3xl border border-white/10 bg-black/45 p-6 backdrop-blur-xl">

          <p className="text-xs uppercase tracking-[0.35em] text-gold">
            Athlete Profile
          </p>

          <h2 className="mt-2 text-3xl font-bold text-white">
            {boxer.name}
          </h2>

          <p className="mt-3 leading-7 text-white/70">
            National medal-winning Full Contact Kickboxing athlete dedicated
            to representing India with discipline, resilience and excellence.
          </p>

        </div>

      </div>

    </div>

  </div>

  {/* Floating Achievement Card */}
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ delay: 0.4 }}
    className="absolute -bottom-8 -right-6 hidden w-60 rounded-3xl border border-gold/30 bg-black/80 p-5 backdrop-blur-xl lg:block"
  >
    <div className="flex items-center gap-3">

      <div className="rounded-2xl bg-gold/10 p-3">
        <Medal className="h-7 w-7 text-gold" />
      </div>

      <div>
        <p className="text-xs uppercase tracking-[0.25em] text-white/50">
          Achievement
        </p>

        <h3 className="mt-1 text-xl font-bold text-white">
          National Medalist
        </h3>
      </div>

    </div>

    <div className="mt-5 h-1 rounded-full bg-gradient-to-r from-gold to-yellow-300" />
  </motion.div>
</motion.div>

    {/* RIGHT - About Content */}
<motion.div
  initial={{ opacity: 0, x: 40 }}
  whileInView={{ opacity: 1, x: 0 }}
  viewport={{ once: true }}
  transition={{ duration: 0.7 }}
  className="flex flex-col justify-center"
>
  {/* Small Label */}
  <div className="inline-flex w-fit items-center rounded-full border border-gold/30 bg-gold/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-gold">
    Athlete Journey
  </div>

  {/* Heading */}
  <h2 className="mt-6 text-4xl font-display leading-tight text-white lg:text-5xl">
    More Than A
    <span className="block text-gradient">
      Kickboxer
    </span>
  </h2>

  {/* Bio */}
  <p className="mt-6 max-w-2xl text-lg leading-8 text-white/75">
    {boxer.bio}
  </p>

  {/* Feature Cards */}
  <div className="mt-10 grid gap-5 sm:grid-cols-2">

    {[
      {
        icon: Trophy,
        title: "National Medalist",
        value: "Elite Competitor",
      },
      {
        icon: Medal,
        title: "Experience",
        value: boxer.experienceYears,
      },
      {
        icon: Flag,
        title: "Nationality",
        value: boxer.nationality,
      },
      {
        icon: Target,
        title: "Division",
        value: boxer.division,
      },
    ].map((item) => {
      const Icon = item.icon;

      return (
        <motion.div
          key={item.title}
          whileHover={{
            y: -6,
          }}
          className="glass rounded-3xl border border-white/10 p-6 transition-all duration-300 hover:border-gold/40"
        >
          <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gold/10">
            <Icon className="h-7 w-7 text-gold" />
          </div>

          <h3 className="mt-5 text-lg font-semibold text-white">
            {item.title}
          </h3>

          <p className="mt-2 text-white/65">
            {item.value}
          </p>
        </motion.div>
      );
    })}

  </div>

  {/* Career Goals */}
  <div className="mt-12 rounded-[2rem] border border-gold/20 bg-gradient-to-br from-gold/10 to-transparent p-8">

    <p className="text-xs uppercase tracking-[0.35em] text-gold">
      Career Goals
    </p>

    <div className="mt-8 grid gap-8 lg:grid-cols-2">

      {/* Short Term */}
      <div>

        <h3 className="text-xl font-semibold text-white">
          Short-Term Goals
        </h3>

        <ul className="mt-5 space-y-4">
          {boxer.goals.shortTerm.map((goal) => (
            <li
              key={goal}
              className="flex items-start gap-3 text-white/75"
            >
              <span className="mt-2 h-2 w-2 rounded-full bg-gold" />
              <span>{goal}</span>
            </li>
          ))}
        </ul>

      </div>

      {/* Long Term */}
      <div>

        <h3 className="text-xl font-semibold text-white">
          Long-Term Goals
        </h3>

        <ul className="mt-5 space-y-4">
          {boxer.goals.longTerm.map((goal) => (
            <li
              key={goal}
              className="flex items-start gap-3 text-white/75"
            >
              <span className="mt-2 h-2 w-2 rounded-full bg-redbrand" />
              <span>{goal}</span>
            </li>
          ))}
        </ul>

      </div>

    </div>

  </div>

  {/* CTA Buttons */}
  <div className="mt-10 flex flex-wrap gap-4">

    <a
      href="/media/Harsh-Bharti-Athlete-Profile.pdf"
      className="inline-flex items-center gap-2 rounded-full bg-gold px-7 py-3 font-semibold text-black transition hover:scale-105"
    >
      Download Profile
      <ArrowRight className="h-5 w-5" />
    </a>

    <a
      href={contact.whatsapp}
      target="_blank"
      rel="noreferrer"
      className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-7 py-3 font-semibold text-white transition hover:border-gold/40 hover:bg-white/10"
    >
      Become a Sponsor
    </a>

  </div>

</motion.div>

        </div>
        {/* End Main Grid */}

        {/* Bottom Section */}
        <div className="mt-24 grid gap-8 lg:grid-cols-2">

          {/* Career Timeline */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="glass rounded-[2.5rem] border border-white/10 p-8"
          >
            <div className="flex items-center gap-3">
              <div className="rounded-2xl bg-gold/10 p-3">
                <Trophy className="h-7 w-7 text-gold" />
              </div>

              <div>
                <p className="text-xs uppercase tracking-[0.3em] text-gold">
                  Career Journey
                </p>

                <h3 className="mt-1 text-3xl font-display text-white">
                  Timeline
                </h3>
              </div>
            </div>

            <div className="relative mt-10 border-l border-gold/30 pl-8">

              {journey.map((item) => (
                <motion.div
                  key={`${item.year}-${item.title}`}
                  whileHover={{ x: 6 }}
                  className="relative mb-8"
                >
                  <div className="absolute -left-[41px] top-2 h-4 w-4 rounded-full border-4 border-black bg-gold" />

                  <span className="text-sm font-bold text-gold">
                    {item.year}
                  </span>

                  <p className="mt-2 leading-7 text-white/75">
                    {item.title}
                  </p>
                </motion.div>
              ))}

            </div>
          </motion.div>

          {/* Represented */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="glass rounded-[2.5rem] border border-white/10 p-8"
          >
            <div className="flex items-center gap-3">
              <div className="rounded-2xl bg-gold/10 p-3">
                <Flag className="h-7 w-7 text-gold" />
              </div>

              <div>
                <p className="text-xs uppercase tracking-[0.3em] text-gold">
                  Representation
                </p>

                <h3 className="mt-1 text-3xl font-display text-white">
                  Proudly Representing
                </h3>
              </div>
            </div>

            <div className="mt-10 space-y-5">

              {represented.map((item) => (
                <motion.div
                  key={item}
                  whileHover={{
                    scale: 1.02,
                  }}
                  className="glass flex items-center justify-between rounded-2xl border border-white/10 px-6 py-5 transition-all hover:border-gold/40"
                >
                  <span className="text-lg text-white">
                    {item}
                  </span>

                  <ArrowRight className="h-5 w-5 text-gold" />
                </motion.div>
              ))}

            </div>
          </motion.div>

        </div>

        {/* Sponsor CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="mt-24 overflow-hidden rounded-[2.5rem] border border-gold/20 bg-gradient-to-r from-gold/10 via-black to-black p-10 text-center"
        >
          <p className="text-sm uppercase tracking-[0.35em] text-gold">
            Partnership Opportunity
          </p>

          <h2 className="mt-5 text-4xl font-display text-white">
            Let's Build Something Great Together
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-white/70">
            I'm seeking long-term partnerships with brands, organizations,
            and supporters who believe in dedication, excellence, and the
            future of Indian kickboxing.
          </p>

          <div className="mt-10 flex flex-wrap justify-center gap-5">

            <a
              href={contact.whatsapp}
              target="_blank"
              rel="noreferrer"
              className="rounded-full bg-gold px-8 py-4 font-semibold text-black transition hover:scale-105"
            >
              Become a Sponsor
            </a>

            <a
              href="/contact"
              className="rounded-full border border-white/15 bg-white/5 px-8 py-4 font-semibold text-white transition hover:border-gold/40 hover:bg-white/10"
            >
              Contact Me
            </a>

          </div>
        </motion.div>

      </div>
    </section>
  );
}
          
