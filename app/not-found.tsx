"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Home, Camera, PhoneCall, ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <main className="relative flex min-h-screen items-center justify-center overflow-hidden bg-black text-white">

      {/* Background */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(212,175,55,0.08),transparent_60%)]" />
      <div className="absolute inset-0 grid-overlay opacity-20" />

      <div className="container-page relative z-10">

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mx-auto max-w-4xl text-center"
        >

          <span className="inline-flex rounded-full border border-gold/20 bg-gold/10 px-5 py-2 text-xs font-semibold uppercase tracking-[0.35em] text-gold">
            Error 404
          </span>

          <h1 className="mt-8 font-display text-8xl font-bold text-gold sm:text-9xl">
            404
          </h1>

          <h2 className="mt-6 font-display text-4xl text-white sm:text-5xl">
            Looks Like This Page
            <span className="block text-gradient">
              Left The Ring
            </span>
          </h2>

          <p className="mx-auto mt-8 max-w-2xl text-lg leading-8 text-white/70">
            The page you're looking for doesn't exist or may have been moved.
            Let's get you back to the action.
          </p>

          <div className="mt-12 flex flex-wrap justify-center gap-5">

            <Link
              href="/"
              className="inline-flex items-center gap-3 rounded-full bg-gold px-8 py-4 font-semibold text-black transition hover:scale-105"
            >
              <Home className="h-5 w-5" />
              Home
            </Link>

            <Link
              href="/gallery"
              className="inline-flex items-center gap-3 rounded-full border border-white/15 bg-white/5 px-8 py-4 font-semibold text-white transition hover:border-gold/40 hover:bg-white/10"
            >
              <Camera className="h-5 w-5" />
              Gallery
            </Link>

            <Link
              href="/contact"
              className="inline-flex items-center gap-3 rounded-full border border-gold/30 bg-gold/10 px-8 py-4 font-semibold text-gold transition hover:bg-gold hover:text-black"
            >
              <PhoneCall className="h-5 w-5" />
              Contact
            </Link>

          </div>

          <Link
            href="/"
            className="mt-10 inline-flex items-center gap-2 text-white/60 transition hover:text-gold"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Homepage
          </Link>

        </motion.div>

      </div>

    </main>
  );
}
