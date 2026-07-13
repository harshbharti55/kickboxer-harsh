"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Camera, Images, Medal, ArrowUpRight } from "lucide-react";
import { gallery } from "@/data/site";

export default function GalleryPage() {
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

              Official Gallery

            </div>

            <h1 className="mt-8 font-display text-5xl sm:text-6xl lg:text-7xl">

              Moments

              <span className="block text-gradient">
                That Matter
              </span>

            </h1>

            <p className="mx-auto mt-8 max-w-3xl text-lg leading-8 text-white/70">

              Explore official competition photos, training sessions,
              medal ceremonies and unforgettable moments throughout my
              kickboxing journey.

            </p>

          </motion.div>

          {/* Stats */}

          <div className="mt-20 grid gap-6 md:grid-cols-3">

            <div className="glass rounded-3xl border border-white/10 p-8 text-center">

              <Images className="mx-auto h-10 w-10 text-gold" />

              <h3 className="mt-5 text-3xl font-bold">
                {gallery.length}+
              </h3>

              <p className="mt-2 text-white/60">
                Official Photos
              </p>

            </div>

            <div className="glass rounded-3xl border border-white/10 p-8 text-center">

              <Medal className="mx-auto h-10 w-10 text-gold" />

              <h3 className="mt-5 text-3xl font-bold">
                National
              </h3>

              <p className="mt-2 text-white/60">
                Championships
              </p>

            </div>

            <div className="glass rounded-3xl border border-white/10 p-8 text-center">

              <Camera className="mx-auto h-10 w-10 text-gold" />

              <h3 className="mt-5 text-3xl font-bold">
                HD
              </h3>

              <p className="mt-2 text-white/60">
                Professional Gallery
              </p>

            </div>

          </div>

        </div>

      </section>
      {/* Gallery Grid */}

      <section className="container-page py-24">

        <div className="mx-auto max-w-3xl text-center">

          <p className="text-sm uppercase tracking-[0.35em] text-gold">
            Photo Collection
          </p>

          <h2 className="mt-4 font-display text-5xl text-white">
            Official Gallery
          </h2>

          <p className="mt-6 text-lg leading-8 text-white/70">
            A collection of competition moments, medal ceremonies, training
            sessions and unforgettable memories from my kickboxing career.
          </p>

        </div>

        <div className="mt-20 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">

          {gallery.map((photo, index) => (

            <motion.div
              key={photo.src}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              whileHover={{ y: -8 }}
              className="group overflow-hidden rounded-[2rem] border border-white/10 bg-white/5"
            >

              <div className="relative aspect-[4/5] overflow-hidden">

                <Image
                  src={photo.src}
                  alt={photo.alt}
                  fill
                  className="object-cover transition duration-700 group-hover:scale-110"
                />

                {/* Overlay */}

                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/10 to-transparent opacity-0 transition duration-300 group-hover:opacity-100" />

                {/* View Button */}

                <div className="absolute bottom-5 left-5 right-5 translate-y-6 opacity-0 transition duration-300 group-hover:translate-y-0 group-hover:opacity-100">

                  <div className="flex items-center justify-between rounded-2xl border border-white/10 bg-black/60 p-4 backdrop-blur-xl">

                    <div>

                      <p className="text-xs uppercase tracking-[0.3em] text-gold">
                        Official Photo
                      </p>

                      <h3 className="mt-2 text-lg font-semibold text-white">
                        {photo.alt}
                      </h3>

                    </div>

                    <ArrowUpRight className="h-6 w-6 text-gold" />

                  </div>

                </div>

              </div>

            </motion.div>

          ))}

        </div>

      </section>
            {/* Featured Photo */}

      <section className="container-page py-24">

        <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr]">

          {/* Featured Image */}

          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.01 }}
            className="group relative overflow-hidden rounded-[2.5rem] border border-white/10"
          >

            <div className="relative aspect-[4/5]">

              <Image
                src={gallery[0].src}
                alt={gallery[0].alt}
                fill
                priority
                className="object-cover transition duration-700 group-hover:scale-105"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />

              <div className="absolute bottom-0 left-0 right-0 p-8">

                <span className="rounded-full bg-gold px-4 py-2 text-xs font-bold uppercase tracking-[0.3em] text-black">
                  Featured Photo
                </span>

                <h2 className="mt-5 text-4xl font-display text-white">
                  Representing India
                </h2>

                <p className="mt-4 max-w-xl leading-8 text-white/75">
                  Every photograph tells the story of dedication,
                  perseverance and the honour of competing for India on
                  the national and international stage.
                </p>

              </div>

            </div>

          </motion.div>

          {/* Gallery Categories */}

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >

            <p className="text-sm uppercase tracking-[0.35em] text-gold">
              Gallery Categories
            </p>

            <h2 className="mt-4 font-display text-5xl text-white">
              Explore Every Moment
            </h2>

            <div className="mt-10 space-y-5">

              {[
                {
                  emoji: "🥊",
                  title: "Competition",
                  text: "Official fight photographs from national and international championships.",
                },
                {
                  emoji: "🏋️",
                  title: "Training",
                  text: "Daily preparation, fitness sessions and technical practice.",
                },
                {
                  emoji: "🥇",
                  title: "Medal Ceremony",
                  text: "Award ceremonies, podium finishes and championship moments.",
                },
                {
                  emoji: "🇮🇳",
                  title: "Team India",
                  text: "Representing India at major national and international events.",
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
            {/* Gallery Statistics */}

      <section className="container-page py-24">

        <div className="grid gap-6 md:grid-cols-4">

          {[
            {
              number: `${gallery.length}+`,
              label: "Official Photos",
            },
            {
              number: "8+",
              label: "Years Experience",
            },
            {
              number: "20+",
              label: "Championships",
            },
            {
              number: "5+",
              label: "National Medals",
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
              Media Resources
            </p>

            <h2 className="mt-5 font-display text-5xl text-white">
              Need Official
              <span className="block text-gradient">
                Photos?
              </span>
            </h2>

            <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-white/70">
              Journalists, sponsors and event organizers can request
              high-resolution official photographs, media resources and
              promotional materials for publications and partnerships.
            </p>

            <div className="mt-10 flex flex-wrap justify-center gap-5">

              <a
                href="/downloads/official-photos.zip"
                className="rounded-full bg-gold px-8 py-4 font-semibold text-black transition hover:scale-105"
              >
                Download Photos
              </a>

              <a
                href="/downloads/media-kit.pdf"
                className="rounded-full border border-white/15 bg-white/5 px-8 py-4 font-semibold text-white transition hover:border-gold/40 hover:bg-white/10"
              >
                Media Kit
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
      
