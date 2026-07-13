"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import {
  User,
  Trophy,
  Flag,
  Target,
} from "lucide-react";

export default function AboutPage() {
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
            transition={{ duration: 0.8 }}
            className="mx-auto max-w-4xl text-center"
          >

            <div className="inline-flex items-center gap-2 rounded-full border border-gold/20 bg-gold/10 px-5 py-2 text-xs font-semibold uppercase tracking-[0.35em] text-gold">

              <User className="h-4 w-4" />

              About Harsh Bharti

            </div>

            <h1 className="mt-8 font-display text-5xl sm:text-6xl lg:text-7xl">

              Passion.

              <span className="block text-gradient">
                Discipline. Excellence.
              </span>

            </h1>

            <p className="mx-auto mt-8 max-w-3xl text-lg leading-8 text-white/70">

              National medal-winning Full Contact Kickboxer dedicated to
              representing India with pride while inspiring the next
              generation through sport, discipline and perseverance.

            </p>

          </motion.div>

        </div>

      </section>

      {/* Profile */}

      <section className="container-page py-24">

        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr]">

          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="overflow-hidden rounded-[2.5rem] border border-white/10"
          >

            <div className="relative aspect-[4/5]">

              <Image
                src="/media/hero.png"
                alt="Harsh Bharti"
                fill
                priority
                className="object-cover"
              />

            </div>

          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >

            <p className="text-sm uppercase tracking-[0.35em] text-gold">
              Athlete Profile
            </p>

            <h2 className="mt-4 font-display text-5xl">
              My Story
            </h2>

            <p className="mt-8 text-lg leading-8 text-white/70">
              I am Harsh Bharti, an Indian Full Contact Kickboxing athlete
              committed to continuous improvement, national excellence,
              and international success. Every competition is an
              opportunity to grow stronger, represent my country and
              inspire others through hard work and determination.
            </p>

            <div className="mt-10 grid gap-6 sm:grid-cols-2">

              <div className="glass rounded-3xl border border-white/10 p-6">

                <Trophy className="h-8 w-8 text-gold" />

                <h3 className="mt-4 text-xl font-semibold">
                  National Medalist
                </h3>

              </div>

              <div className="glass rounded-3xl border border-white/10 p-6">

                <Flag className="h-8 w-8 text-gold" />

                <h3 className="mt-4 text-xl font-semibold">
                  Representing India
                </h3>

              </div>

              <div className="glass rounded-3xl border border-white/10 p-6">

                <Target className="h-8 w-8 text-gold" />

                <h3 className="mt-4 text-xl font-semibold">
                  World Championship Goal
                </h3>

              </div>

            </div>

          </motion.div>

        </div>

      </section>
      
            {/* Career Journey */}

      <section className="container-page py-24">

        <div className="mx-auto max-w-3xl text-center">

          <p className="text-sm uppercase tracking-[0.35em] text-gold">
            My Journey
          </p>

          <h2 className="mt-4 font-display text-5xl text-white">
            Building A Champion
          </h2>

          <p className="mt-6 text-lg leading-8 text-white/70">
            My kickboxing journey has been built on dedication, discipline,
            continuous learning and a dream of representing India at the
            highest level.
          </p>

        </div>

        <div className="relative mx-auto mt-20 max-w-5xl">

          <div className="absolute left-4 top-0 h-full w-px bg-gold/30 lg:left-1/2" />

          {[
            {
              year: "2017",
              title: "Started Kickboxing",
              description:
                "Began my journey with a dream of becoming an elite athlete.",
            },
            {
              year: "2022",
              title: "National Gold Medal",
              description:
                "Won Gold Medal at the Junior National Kickboxing Championship.",
            },
            {
              year: "2023",
              title: "National Silver Medal",
              description:
                "Earned Silver Medal at the WAKO India National Championship.",
            },
            {
              year: "2024",
              title: "National Bronze Medal",
              description:
                "Continued improving with another national podium finish.",
            },
            {
              year: "2025",
              title: "Senior National Silver",
              description:
                "Achieved Silver Medal at the Senior National Championship.",
            },
            {
              year: "Future",
              title: "World Championship",
              description:
                "Working every day to represent India on the world stage.",
            },
          ].map((item, index) => (

            <motion.div
              key={item.year}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08 }}
              className={`relative mb-12 lg:flex ${
                index % 2 === 0
                  ? "lg:flex-row"
                  : "lg:flex-row-reverse"
              }`}
            >

              <div className="absolute left-1 top-6 h-6 w-6 rounded-full border-4 border-black bg-gold lg:left-1/2 lg:-translate-x-1/2" />

              <div className="ml-12 lg:ml-0 lg:w-1/2 lg:px-10">

                <div className="glass rounded-[2rem] border border-white/10 p-8">

                  <span className="rounded-full bg-gold/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-gold">
                    {item.year}
                  </span>

                  <h3 className="mt-6 text-3xl font-display text-white">
                    {item.title}
                  </h3>

                  <p className="mt-5 leading-8 text-white/70">
                    {item.description}
                  </p>

                </div>

              </div>

            </motion.div>

          ))}

        </div>

      </section>

      {/* Mission & Vision */}

      <section className="container-page py-24">

        <div className="grid gap-8 lg:grid-cols-2">

          <motion.div
            whileHover={{ y: -8 }}
            className="glass rounded-[2.5rem] border border-white/10 p-10"
          >

            <p className="text-sm uppercase tracking-[0.35em] text-gold">
              Mission
            </p>

            <h2 className="mt-5 font-display text-4xl text-white">
              Inspire Through Sport
            </h2>

            <p className="mt-6 leading-8 text-white/70">
              To compete with integrity, inspire young athletes and proudly
              represent India while promoting the values of discipline,
              respect and perseverance through kickboxing.
            </p>

          </motion.div>

          <motion.div
            whileHover={{ y: -8 }}
            className="glass rounded-[2.5rem] border border-white/10 p-10"
          >

            <p className="text-sm uppercase tracking-[0.35em] text-gold">
              Vision
            </p>

            <h2 className="mt-5 font-display text-4xl text-white">
              Global Excellence
            </h2>

            <p className="mt-6 leading-8 text-white/70">
              To become a World Championship medalist, build a lasting
              legacy in Indian kickboxing and motivate future generations
              to pursue excellence in sport.
            </p>

          </motion.div>

        </div>

      </section>
            {/* Athlete Profile */}

      <section className="container-page py-24">

        <div className="mx-auto max-w-3xl text-center">

          <p className="text-sm uppercase tracking-[0.35em] text-gold">
            Athlete Profile
          </p>

          <h2 className="mt-4 font-display text-5xl text-white">
            Beyond The Medals
          </h2>

          <p className="mt-6 text-lg leading-8 text-white/70">
            My journey is built on discipline, resilience and the desire to
            continually improve as both an athlete and an individual.
          </p>

        </div>

        <div className="mt-20 grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">

          {/* Stats */}

          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="grid gap-6 sm:grid-cols-2"
          >

            {[
              {
                value: "8+",
                label: "Years Experience",
              },
              {
                value: "20+",
                label: "Competitions",
              },
              {
                value: "5+",
                label: "National Medals",
              },
              {
                value: "100%",
                label: "Commitment",
              },
            ].map((item) => (

              <motion.div
                key={item.label}
                whileHover={{ y: -6 }}
                className="glass rounded-[2rem] border border-white/10 p-8 text-center"
              >

                <h3 className="text-5xl font-display text-gold">
                  {item.value}
                </h3>

                <p className="mt-4 uppercase tracking-[0.25em] text-white/60">
                  {item.label}
                </p>

              </motion.div>

            ))}

          </motion.div>

          {/* Core Values */}

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="glass rounded-[2.5rem] border border-white/10 p-10"
          >

            <p className="text-sm uppercase tracking-[0.35em] text-gold">
              Core Values
            </p>

            <h2 className="mt-5 font-display text-4xl text-white">
              What Drives Me
            </h2>

            <div className="mt-10 space-y-6">

              {[
                {
                  title: "Discipline",
                  text: "Daily commitment to training, recovery and continuous improvement.",
                },
                {
                  title: "Respect",
                  text: "Respect for coaches, teammates, opponents and the sport.",
                },
                {
                  title: "Perseverance",
                  text: "Overcoming challenges with determination and resilience.",
                },
                {
                  title: "Excellence",
                  text: "Always striving for higher performance on and off the mat.",
                },
              ].map((item) => (

                <div
                  key={item.title}
                  className="rounded-2xl border border-white/10 bg-white/5 p-6"
                >

                  <h3 className="text-2xl font-semibold text-white">
                    {item.title}
                  </h3>

                  <p className="mt-3 leading-7 text-white/65">
                    {item.text}
                  </p>

                </div>

              ))}

            </div>

          </motion.div>

        </div>

      </section>

      {/* Representation */}

      <section className="container-page py-24">

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="overflow-hidden rounded-[2.5rem] border border-gold/20 bg-gradient-to-r from-gold/10 via-black to-black p-12"
        >

          <div className="mx-auto max-w-4xl text-center">

            <p className="text-sm uppercase tracking-[0.35em] text-gold">
              Proud Representation
            </p>

            <h2 className="mt-5 font-display text-5xl text-white">
              Competing For
              <span className="block text-gradient">
                India
              </span>
            </h2>

            <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-white/70">
              Every competition is an opportunity to proudly represent India,
              inspire the next generation of athletes and contribute to the
              growth of kickboxing nationally and internationally.
            </p>

          </div>

        </motion.div>

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
              Let's Build The Future
            </p>

            <h2 className="mt-5 font-display text-5xl text-white">
              The Journey
              <span className="block text-gradient">
                Continues
              </span>
            </h2>

            <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-white/70">
              Every training session, competition and achievement is another
              step toward representing India at the highest level. I welcome
              opportunities to collaborate with sponsors, organizations,
              media and supporters who believe in excellence and the future
              of Indian kickboxing.
            </p>

            <div className="mt-10 flex flex-wrap justify-center gap-5">

              <a
                href="/downloads/athlete-profile.pdf"
                className="rounded-full bg-gold px-8 py-4 font-semibold text-black transition hover:scale-105"
              >
                Download Athlete Profile
              </a>

              <a
                href="/sponsors"
                className="rounded-full border border-white/15 bg-white/5 px-8 py-4 font-semibold text-white transition hover:border-gold/40 hover:bg-white/10"
              >
                Sponsor Me
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
      
