"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Calendar,
  BookOpen,
  Newspaper,
} from "lucide-react";

import SectionHeading from "./SectionHeading";

const articles = [
  {
    title: "My Kickboxing Journey",
    description:
      "From my first training session to representing India and winning national medals.",
    href: "/articles/my-kickboxing-journey",
    category: "Journey",
    readTime: "5 min read",
  },
  {
    title: "How I Prepare for Championships",
    description:
      "Training routine, nutrition, recovery and mental preparation before major competitions.",
    href: "/articles/how-i-prepare-for-championships",
    category: "Training",
    readTime: "6 min read",
  },
  {
    title: "Life of a Student Athlete",
    description:
      "Balancing university education with elite kickboxing training and competition.",
    href: "/articles/life-of-a-student-athlete",
    category: "Lifestyle",
    readTime: "4 min read",
  },
  {
    title: "My World Cup Preparation",
    description:
      "Preparation, training camps and goals ahead of the WAKO World Cup.",
    href: "/articles/world-cup-preparation",
    category: "Competition",
    readTime: "5 min read",
  },
  {
    title: "Nutrition for Kickboxers",
    description:
      "Daily nutrition, recovery meals and healthy habits for peak performance.",
    href: "/articles/nutrition-for-kickboxers",
    category: "Nutrition",
    readTime: "4 min read",
  },
];

export default function Articles() {
  const featured = articles[0];
  const latest = articles.slice(1);

  return (
    <section
      id="articles"
      className="relative overflow-hidden bg-black py-28"
    >
      {/* Background Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(212,175,55,0.08),transparent_60%)]" />

      <div className="container-page relative z-10">
        <SectionHeading
          eyebrow="Media & Articles"
          title="Stories Beyond The Ring"
          subtitle="Articles about my journey, training philosophy, competitions and experiences as an Indian kickboxing athlete."
        />

        {/* Featured Article */}
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="glass mt-16 overflow-hidden rounded-[2.5rem] border border-white/10"
        >
          <div className="grid lg:grid-cols-[0.9fr_1.1fr]">
            <div className="flex items-center justify-center bg-gradient-to-br from-gold/15 to-transparent p-12">
              <BookOpen className="h-28 w-28 text-gold" />
            </div>

            <div className="p-10">
              <div className="flex flex-wrap gap-3">
                <span className="rounded-full bg-gold/10 px-4 py-2 text-sm font-semibold text-gold">
                  Featured Story
                </span>

                <span className="rounded-full bg-white/5 px-4 py-2 text-sm text-white/70">
                  {featured.readTime}
                </span>
              </div>

              <h3 className="mt-6 text-4xl font-display text-white">
                {featured.title}
              </h3>

              <p className="mt-6 text-lg leading-8 text-white/70">
                {featured.description}
              </p>

              <Link
                href={featured.href}
                className="mt-10 inline-flex items-center gap-3 rounded-full bg-gold px-8 py-4 font-semibold text-black transition hover:scale-105"
              >
                Read Featured Story
                <ArrowRight className="h-5 w-5" />
              </Link>
            </div>
          </div>
        </motion.div>

        {/* Articles Grid */}
        <div className="mt-16 grid gap-8 md:grid-cols-2 xl:grid-cols-4">
          {latest.map((article, index) => (
            <motion.div
              key={article.title}
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.45,
                delay: index * 0.1,
              }}
              whileHover={{
                y: -8,
              }}
            >
              <Link href={article.href}>
                <article className="group glass flex h-full flex-col rounded-[2rem] border border-white/10 p-7 transition-all duration-300 hover:border-gold/40">

                  <div className="flex items-center justify-between">

                    <span className="rounded-full bg-gold/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-gold">
                      {article.category}
                    </span>

                    <Calendar className="h-5 w-5 text-white/40" />

                  </div>

                  <h3 className="mt-6 text-2xl font-display text-white">
                    {article.title}
                  </h3>

                  <p className="mt-4 flex-1 leading-7 text-white/65">
                    {article.description}
                  </p>

                  <div className="mt-8 flex items-center justify-between">

                    <span className="text-sm text-white/50">
                      {article.readTime}
                    </span>

                    <span className="inline-flex items-center gap-2 font-semibold text-gold transition group-hover:gap-3">
                      Read More
                      <ArrowRight className="h-4 w-4" />
                    </span>

                  </div>

                </article>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="mt-24 rounded-[2.5rem] border border-gold/20 bg-gradient-to-r from-gold/10 via-black to-black p-10 text-center"
        >
          <Newspaper className="mx-auto h-14 w-14 text-gold" />

          <h2 className="mt-6 text-4xl font-display text-white">
            Discover More Articles
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-white/70">
            Read about my journey, training methods, competitions, athlete
            lifestyle, nutrition and experiences as I continue pursuing success
            in kickboxing.
          </p>

          <Link
            href="/articles"
            className="mt-10 inline-flex items-center gap-3 rounded-full bg-gold px-8 py-4 font-semibold text-black transition hover:scale-105"
          >
            View All Articles
            <ArrowRight className="h-5 w-5" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
