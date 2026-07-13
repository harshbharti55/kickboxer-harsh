"use client";

import { motion } from "framer-motion";
import { Download, FileText } from "lucide-react";

export default function DownloadHero() {
  return (
    <section className="relative overflow-hidden border-b border-white/10 py-28">

      {/* Background */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(212,175,55,0.08),transparent_60%)]" />
      <div className="absolute inset-0 grid-overlay opacity-20" />

      <div className="container-page relative z-10">

        <motion.div
          initial={{ opacity: 0, y: 35 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mx-auto max-w-4xl text-center"
        >

          {/* Badge */}
          <div className="inline-flex items-center gap-2 rounded-full border border-gold/20 bg-gold/10 px-5 py-2 text-xs font-semibold uppercase tracking-[0.35em] text-gold">
            <Download className="h-4 w-4" />
            Official Downloads
          </div>

          {/* Heading */}
          <h1 className="mt-8 font-display text-5xl text-white sm:text-6xl lg:text-7xl">
            Athlete
            <span className="block text-gradient">
              Resources
            </span>
          </h1>

          {/* Description */}
          <p className="mx-auto mt-8 max-w-3xl text-lg leading-8 text-white/70">
            Download official athlete documents including my profile,
            sponsorship proposal, media kit, competition resume,
            high-resolution photos and brand assets.
          </p>

          {/* Stats */}
          <div className="mt-14 grid gap-5 sm:grid-cols-3">

            <div className="glass rounded-3xl border border-white/10 p-6">
              <FileText className="mx-auto h-8 w-8 text-gold" />

              <h3 className="mt-4 text-3xl font-bold text-white">
                6+
              </h3>

              <p className="mt-2 text-white/60">
                Official Documents
              </p>
            </div>

            <div className="glass rounded-3xl border border-white/10 p-6">
              <Download className="mx-auto h-8 w-8 text-gold" />

              <h3 className="mt-4 text-3xl font-bold text-white">
                PDF + ZIP
              </h3>

              <p className="mt-2 text-white/60">
                Download Formats
              </p>
            </div>

            <div className="glass rounded-3xl border border-white/10 p-6">
              <Download className="mx-auto h-8 w-8 text-gold" />

              <h3 className="mt-4 text-3xl font-bold text-white">
                100%
              </h3>

              <p className="mt-2 text-white/60">
                Free Access
              </p>
            </div>

          </div>

        </motion.div>

      </div>

    </section>
  );
}
