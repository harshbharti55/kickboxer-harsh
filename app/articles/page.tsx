"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { BookOpen, Calendar, ArrowRight } from "lucide-react";

const articles = [
  {
    title: "My Kickboxing Journey",
    description:
      "From my first training session to representing India and winning national medals.",
    href: "/articles/my-kickboxing-journey",
    category: "Journey",
    date: "July 2026",
  },
  {
    title: "How I Prepare for Championships",
    description:
      "Training routine, nutrition, recovery and mental preparation before competitions.",
    href: "/articles/how-i-prepare-for-championships",
    category: "Training",
    date: "July 2026",
  },
  {
    title: "Life of a Student Athlete",
    description:
      "Balancing university studies with elite kickboxing training.",
    href: "/articles/life-of-a-student-athlete",
    category: "Lifestyle",
    date: "July 2026",
  },
  {
    title: "My World Cup Preparation",
    description:
      "Training, preparation and goals for the WAKO World Cup.",
    href: "/articles/world-cup-preparation",
    category: "Competition",
    date: "July 2026",
  },
  {
    title: "Nutrition for Kickboxers",
    description:
      "My daily diet, recovery and performance nutrition.",
    href: "/articles/nutrition-for-kickboxers",
    category: "Nutrition",
    date: "July 2026",
  },
];

export default function ArticlesPage() {
  return (
    <main className="bg-black text-white">

      {/* Hero */}

      <section className="relative overflow-hidden py-28">

        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(212,175,55,.08),transparent_60%)]" />
        <div className="absolute inset-0 grid-overlay opacity-20" />

        <div className="container-page relative z-10">

          <motion.div
            initial={{ opacity: 0, y: 35 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: .8 }}
            className="mx-auto max-w-4xl text-center"
          >

            <div className="inline-flex items-center gap-2 rounded-full border border-gold/20 bg-gold/10 px-5 py-2 text-xs font-semibold uppercase tracking-[0.35em] text-gold">

              <BookOpen className="h-4 w-4" />

              Official Articles

            </div>

            <h1 className="mt-8 font-display text-5xl sm:text-6xl lg:text-7xl">

              Stories

              <span className="block text-gradient">
                Beyond The Ring
              </span>

            </h1>

            <p className="mx-auto mt-8 max-w-3xl text-lg leading-8 text-white/70">

              Explore my journey, training insights, nutrition tips,
              championship preparation and experiences representing India.

            </p>

          </motion.div>

        </div>

      </section>
            {/* Articles Grid */}

      <section className="container-page py-24">

        <div className="mx-auto max-w-3xl text-center">

          <p className="text-sm uppercase tracking-[0.35em] text-gold">
            Latest Articles
          </p>

          <h2 className="mt-4 font-display text-5xl text-white">
            Learn From My Journey
          </h2>

          <p className="mt-6 text-lg leading-8 text-white/70">
            From championship preparation to athlete lifestyle, these
            articles share my experiences, lessons and insights from years
            of competitive kickboxing.
          </p>

        </div>

        <div className="mt-20 grid gap-8 md:grid-cols-2 xl:grid-cols-3">

          {articles.map((article, index) => (

            <motion.div
              key={article.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08 }}
              whileHover={{ y: -8 }}
            >

              <Link href={article.href}>

                <article className="group glass flex h-full flex-col rounded-[2rem] border border-white/10 p-8 transition-all duration-300 hover:border-gold/40">

                  {/* Category */}

                  <div className="flex items-center justify-between">

                    <span className="rounded-full bg-gold/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-gold">

                      {article.category}

                    </span>

                    <ArrowRight className="h-5 w-5 text-gold transition group-hover:translate-x-1" />

                  </div>

                  {/* Title */}

                  <h3 className="mt-8 text-3xl font-display text-white transition group-hover:text-gold">

                    {article.title}

                  </h3>

                  {/* Description */}

                  <p className="mt-5 flex-1 leading-8 text-white/65">

                    {article.description}

                  </p>

                  {/* Footer */}

                  <div className="mt-8 flex items-center justify-between border-t border-white/10 pt-6">

                    <div className="flex items-center gap-2 text-white/50">

                      <Calendar className="h-4 w-4 text-gold" />

                      <span>{article.date}</span>

                    </div>

                    <span className="font-semibold text-gold">

                      Read More →

                    </span>

                  </div>

                </article>

              </Link>

            </motion.div>

          ))}

        </div>

      </section>
            {/* Featured Article */}

      <section className="container-page py-24">

        <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr]">

          {/* Featured Card */}

          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.01 }}
            className="overflow-hidden rounded-[2.5rem] border border-gold/20 bg-gradient-to-br from-gold/10 via-black to-black p-10"
          >

            <span className="rounded-full bg-gold px-4 py-2 text-xs font-bold uppercase tracking-[0.3em] text-black">
              Featured Story
            </span>

            <h2 className="mt-8 font-display text-5xl text-white">
              My Kickboxing
              <span className="block text-gradient">
                Journey
              </span>
            </h2>

            <p className="mt-8 text-lg leading-8 text-white/70">
              From stepping into the gym for the very first time to winning
              national medals and representing India, this journey has been
              built on discipline, sacrifice and passion.
            </p>

            <Link
              href="/articles/my-kickboxing-journey"
              className="mt-10 inline-flex items-center gap-3 rounded-full bg-gold px-8 py-4 font-semibold text-black transition hover:scale-105"
            >
              Read Full Story
              <ArrowRight className="h-5 w-5" />
            </Link>

          </motion.div>

          {/* Categories */}

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >

            <p className="text-sm uppercase tracking-[0.35em] text-gold">
              Categories
            </p>

            <h2 className="mt-4 font-display text-5xl text-white">
              Explore Topics
            </h2>

            <div className="mt-10 space-y-5">

              {[
                {
                  emoji: "🥊",
                  title: "Training",
                  text: "Workouts, sparring, conditioning and technical preparation.",
                },
                {
                  emoji: "🏆",
                  title: "Competition",
                  text: "Championship preparation, tournament experiences and results.",
                },
                {
                  emoji: "🥗",
                  title: "Nutrition",
                  text: "Diet plans, recovery, hydration and performance nutrition.",
                },
                {
                  emoji: "🎓",
                  title: "Student Athlete",
                  text: "Balancing university education with elite sports.",
                },
              ].map((item) => (

                <motion.div
                  key={item.title}
                  whileHover={{ x: 8 }}
                  className="glass rounded-[2rem] border border-white/10 p-6 transition hover:border-gold/40"
                >

                  <div className="flex items-start gap-5">

                    <div className="text-4xl">
                      {item.emoji}
                    </div>

                    <div>

                      <h3 className="text-2xl font-display text-white">
                        {item.title}
                      </h3>

                      <p className="mt-3 leading-7 text-white/65">
                        {item.text}
                      </p>

                    </div>

                  </div>

                </motion.div>

              ))}

            </div>

          </motion.div>

        </div>

      </section>
            {/* Article Statistics */}

      <section className="container-page py-24">

        <div className="grid gap-6 md:grid-cols-4">

          {[
            {
              number: `${articles.length}+`,
              label: "Published Articles",
            },
            {
              number: "8+",
              label: "Years of Experience",
            },
            {
              number: "20+",
              label: "Championships",
            },
            {
              number: "100%",
              label: "Real Experiences",
            },
          ].map((item) => (

            <motion.div
              key={item.label}
              whileHover={{ y: -8 }}
              className="glass rounded-[2rem] border border-white/10 p-8 text-center"
            >

              <h3 className="text-5xl font-display text-gold">
                {item.number}
              </h3>

              <p className="mt-4 uppercase tracking-[0.25em] text-white/60">
                {item.label}
              </p>

            </motion.div>

          ))}

        </div>

      </section>

      {/* CTA */}

      <section className="container-page pb-28">

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="overflow-hidden rounded-[2.5rem] border border-gold/20 bg-gradient-to-r from-gold/10 via-black to-black p-12"
        >

          <div className="mx-auto max-w-4xl text-center">

            <p className="text-sm uppercase tracking-[0.35em] text-gold">
              Keep Reading
            </p>

            <h2 className="mt-5 font-display text-5xl text-white">
              Learn More About
              <span className="block text-gradient">
                My Journey
              </span>
            </h2>

            <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-white/70">
              Discover stories from my kickboxing career, competition
              experiences, training methods and athlete lifestyle. More
              articles will be added regularly.
            </p>

            <div className="mt-10 flex flex-wrap justify-center gap-5">

              <Link
                href="/gallery"
                className="rounded-full bg-gold px-8 py-4 font-semibold text-black transition hover:scale-105"
              >
                View Gallery
              </Link>

              <Link
                href="/media"
                className="rounded-full border border-white/15 bg-white/5 px-8 py-4 font-semibold text-white transition hover:border-gold/40 hover:bg-white/10"
              >
                Watch Highlights
              </Link>

              <Link
                href="/contact"
                className="rounded-full border border-gold/30 bg-gold/10 px-8 py-4 font-semibold text-gold transition hover:bg-gold hover:text-black"
              >
                Contact Me
              </Link>

            </div>

          </div>

        </motion.div>

      </section>

    </main>
  );
}
      
