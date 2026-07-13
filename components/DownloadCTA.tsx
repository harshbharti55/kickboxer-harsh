"use client";

import { motion } from "framer-motion";
import { ArrowRight, Download, MessageCircleMore } from "lucide-react";

export default function DownloadCTA() {
  return (
    <section className="mt-24">

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="overflow-hidden rounded-[2.5rem] border border-gold/20 bg-gradient-to-r from-gold/10 via-black to-black p-10 lg:p-14"
      >

        <div className="grid items-center gap-10 lg:grid-cols-[1.2fr_0.8fr]">

          {/* Left */}
          <div>

            <div className="inline-flex items-center gap-2 rounded-full border border-gold/20 bg-gold/10 px-5 py-2 text-xs font-semibold uppercase tracking-[0.35em] text-gold">
              <Download className="h-4 w-4" />
              Need More Resources?
            </div>

            <h2 className="mt-6 font-display text-4xl text-white sm:text-5xl">
              Looking for Something
              <span className="block text-gradient">
                Custom?
              </span>
            </h2>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-white/70">
              If you need additional athlete information, media files,
              sponsorship documents, event details, official photographs
              or other resources, feel free to contact me directly.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">

              <span className="rounded-full border border-gold/30 bg-gold/10 px-4 py-2 text-sm text-gold">
                Athlete Profile
              </span>

              <span className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-white">
                Sponsorship
              </span>

              <span className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-white">
                Media Kit
              </span>

              <span className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-white">
                Official Photos
              </span>

            </div>

          </div>

          {/* Right */}
          <div className="flex flex-col gap-5">

            <a
              href="/contact"
              className="inline-flex items-center justify-center gap-3 rounded-full bg-gold px-8 py-4 font-semibold text-black transition hover:scale-105"
            >
              <MessageCircleMore className="h-5 w-5" />
              Contact Me
            </a>

            <a
              href="/sponsors"
              className="inline-flex items-center justify-center gap-3 rounded-full border border-white/15 bg-white/5 px-8 py-4 font-semibold text-white transition hover:border-gold/40 hover:bg-white/10"
            >
              Sponsorship
              <ArrowRight className="h-5 w-5" />
            </a>

          </div>

        </div>

      </motion.div>

    </section>
  );
}
