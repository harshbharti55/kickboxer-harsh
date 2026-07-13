"use client";

import { motion } from "framer-motion";
import { PlayCircle, Trophy, Video, ArrowRight } from "lucide-react";

import SectionHeading from "./SectionHeading";
import MediaFrame from "./MediaFrame";
import { highlights } from "@/data/site";

export default function Highlights() {
  return (
    <section
      id="media"
      className="relative overflow-hidden bg-black py-28"
    >
      {/* Background Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(212,175,55,0.08),transparent_60%)]" />

      <div className="container-page relative z-10">

        <SectionHeading
          eyebrow="Fight Highlights"
          title="Experience The Journey"
          subtitle="A collection of competition highlights, training sessions, and career-defining moments that showcase my passion, discipline, and commitment to excellence."
        />

        {/* Featured Video Banner */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="glass mt-16 overflow-hidden rounded-[2.5rem] border border-white/10"
        >
          <div className="grid lg:grid-cols-[1.3fr_0.7fr]">

            {/* Featured Video */}
            <div className="relative">

              <MediaFrame
                title={highlights[0]?.title}
                description={highlights[0]?.description}
                src={highlights[0]?.src}
                kind="video"
              />

              <div className="pointer-events-none absolute inset-0 flex items-center justify-center">

                <div className="rounded-full border border-gold/40 bg-black/50 p-6 backdrop-blur-xl">

                  <PlayCircle className="h-14 w-14 text-gold" />

                </div>

              </div>

            </div>

            {/* Right Content */}
            <div className="flex flex-col justify-center p-10">

              <div className="inline-flex w-fit items-center gap-2 rounded-full border border-gold/30 bg-gold/10 px-4 py-2 text-sm font-semibold text-gold">
                <Video className="h-4 w-4" />
                Featured Highlight
              </div>

              <h3 className="mt-6 text-4xl font-display text-white">
                Watch My Journey
              </h3>

              <p className="mt-5 leading-8 text-white/70">
                Every fight represents years of preparation, sacrifice and
                determination. These highlights capture moments that define
                my journey as an athlete representing India.
              </p>

              <div className="mt-10 space-y-4">

                <div className="flex items-center gap-3 text-white/80">
                  <Trophy className="h-5 w-5 text-gold" />
                  National Championship Highlights
                </div>

                <div className="flex items-center gap-3 text-white/80">
                  <Trophy className="h-5 w-5 text-gold" />
                  International Competition Footage
                </div>

                <div className="flex items-center gap-3 text-white/80">
                  <Trophy className="h-5 w-5 text-gold" />
                  Elite Training Sessions
                </div>

              </div>

            </div>

          </div>
        </motion.div>

        {/* Video Gallery */}
        <div className="mt-16 grid gap-8 md:grid-cols-2 xl:grid-cols-3">

          {highlights.slice(1).map((item, index) => (

            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.5,
                delay: index * 0.1,
              }}
              whileHover={{
                y: -8,
              }}
              className="group"
            >

              <div className="overflow-hidden rounded-[2rem] border border-white/10 bg-white/5 transition-all duration-300 hover:border-gold/40">

                <MediaFrame
                  title={item.title}
                  description={item.description}
                  src={item.src}
                  kind="video"
                />

                <div className="p-6">

                  <h3 className="text-xl font-semibold text-white">
                    {item.title}
                  </h3>

                  <p className="mt-3 leading-7 text-white/65">
                    {item.description}
                  </p>

                  <button className="mt-6 inline-flex items-center gap-2 text-gold transition group-hover:gap-3">
                    Watch Video

                    <ArrowRight className="h-5 w-5" />

                  </button>

                </div>

              </div>

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

          <p className="text-sm uppercase tracking-[0.35em] text-gold">
            Follow My Journey
          </p>

          <h2 className="mt-5 text-4xl font-display text-white">
            More Fights. More Victories. More History.
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-white/70">
            Stay connected for upcoming competitions, training camps,
            exclusive behind-the-scenes content, and future international
            tournaments.
          </p>

          <a
            href="/media"
            className="mt-10 inline-flex items-center gap-3 rounded-full bg-gold px-8 py-4 font-semibold text-black transition hover:scale-105"
          >
            Explore All Media

            <ArrowRight className="h-5 w-5" />

          </a>

        </motion.div>

      </div>
    </section>
  );
}
