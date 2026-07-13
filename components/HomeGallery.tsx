"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Images } from "lucide-react";

import SectionHeading from "./SectionHeading";
import { gallery } from "@/data/site";

export default function HomeGallery() {
  const featured = gallery[0];
  const photos = gallery.slice(1, 6);

  return (
    <section
      id="gallery"
      className="relative overflow-hidden bg-black py-28"
    >
      {/* Background Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(212,175,55,0.08),transparent_60%)]" />

      <div className="container-page relative z-10">

        <SectionHeading
          eyebrow="Official Gallery"
          title="Moments That Define My Journey"
          subtitle="From national championships to training camps and international competitions — every photograph tells a story."
        />

        <div className="mt-16 grid gap-6 lg:grid-cols-[1.3fr_0.7fr]">
          {/* Featured Image */}
<motion.div
  initial={{ opacity: 0, x: -30 }}
  whileInView={{ opacity: 1, x: 0 }}
  viewport={{ once: true }}
  transition={{ duration: 0.7 }}
  className="group"
>
  <div className="relative overflow-hidden rounded-[2.5rem] border border-white/10 bg-white/5">

    <div className="relative aspect-[4/5] lg:aspect-[4/4.2]">

      <Image
        src={featured.src}
        alt={featured.alt}
        fill
        priority
        className="object-cover transition duration-700 group-hover:scale-110"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />

      {/* Badge */}
      <div className="absolute left-6 top-6 rounded-full border border-gold/30 bg-black/50 px-4 py-2 backdrop-blur-xl">
        <span className="text-xs font-semibold uppercase tracking-[0.3em] text-gold">
          Featured Moment
        </span>
      </div>

      {/* Bottom */}
      <div className="absolute bottom-0 left-0 right-0 p-8">

        <motion.div
          whileHover={{ y: -4 }}
          className="rounded-3xl border border-white/10 bg-black/45 p-6 backdrop-blur-xl"
        >

          <div className="flex items-center gap-3">

            <div className="rounded-2xl bg-gold/10 p-3">
              <Images className="h-7 w-7 text-gold" />
            </div>

            <div>

              <p className="text-xs uppercase tracking-[0.3em] text-gold">
                Gallery
              </p>

              <h3 className="mt-1 text-3xl font-display text-white">
                {featured.alt}
              </h3>

            </div>

          </div>

        </motion.div>

      </div>

    </div>

  </div>

</motion.div>

{/* Right Grid */}
<div className="grid grid-cols-2 gap-6">

  {photos.map((item, index) => (

    <motion.div
      key={item.src}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{
        duration: 0.45,
        delay: index * 0.08,
      }}
      whileHover={{
        y: -6,
      }}
      className="group"
    >

      <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/5">

        <div className="relative aspect-square">

          <Image
            src={item.src}
            alt={item.alt}
            fill
            className="object-cover transition duration-700 group-hover:scale-110"
          />

          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/10 to-transparent opacity-80" />

          {/* Hover Overlay */}
          <div className="absolute inset-0 flex items-end p-5 opacity-0 transition duration-300 group-hover:opacity-100">

            <div className="w-full rounded-2xl border border-white/10 bg-black/60 p-4 backdrop-blur-xl">

              <p className="text-sm font-semibold text-white">
                {item.alt}
              </p>

            </div>

          </div>

        </div>

      </div>

    </motion.div>

  ))}

</div>
                  </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-20 overflow-hidden rounded-[2.5rem] border border-gold/20 bg-gradient-to-r from-gold/10 via-black to-black p-10"
        >
          <div className="flex flex-col items-center justify-between gap-8 lg:flex-row">

            {/* Left */}
            <div>

              <p className="text-sm uppercase tracking-[0.35em] text-gold">
                Official Gallery
              </p>

              <h2 className="mt-4 text-4xl font-display text-white">
                Every Picture Tells A Story
              </h2>

              <p className="mt-5 max-w-2xl text-lg leading-8 text-white/70">
                Explore memorable moments from national championships,
                international competitions, training camps, medal ceremonies,
                media appearances, and behind-the-scenes experiences throughout
                my kickboxing journey.
              </p>

            </div>

            {/* Right */}
            <div className="flex flex-col items-center gap-5">

              <div className="rounded-3xl border border-white/10 bg-white/5 px-8 py-6 text-center">

                <p className="text-sm uppercase tracking-[0.25em] text-white/50">
                  Gallery Photos
                </p>

                <h3 className="mt-2 text-5xl font-display text-gold">
                  {gallery.length}+
                </h3>

              </div>

              <Link
                href="/gallery"
                className="inline-flex items-center gap-3 rounded-full bg-gold px-8 py-4 font-semibold text-black transition duration-300 hover:scale-105"
              >
                View Complete Gallery

                <ArrowRight className="h-5 w-5" />

              </Link>

            </div>

          </div>
        </motion.div>

      </div>
    </section>
  );
}
