"use client";

import { useEffect } from "react";
import { motion } from "framer-motion";
import { RefreshCw, Home, AlertTriangle } from "lucide-react";
import Link from "next/link";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

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
          className="mx-auto max-w-3xl text-center"
        >

          <div className="mx-auto flex h-24 w-24 items-center justify-center rounded-full border border-gold/20 bg-gold/10">
            <AlertTriangle className="h-12 w-12 text-gold" />
          </div>

          <h1 className="mt-8 font-display text-5xl sm:text-6xl text-white">
            Something Went
            <span className="block text-gradient">
              Wrong
            </span>
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-white/70">
            An unexpected error occurred while loading this page.
            Please try again or return to the homepage.
          </p>

          <div className="mt-12 flex flex-wrap justify-center gap-5">

            <button
              onClick={reset}
              className="inline-flex items-center gap-3 rounded-full bg-gold px-8 py-4 font-semibold text-black transition hover:scale-105"
            >
              <RefreshCw className="h-5 w-5" />
              Try Again
            </button>

            <Link
              href="/"
              className="inline-flex items-center gap-3 rounded-full border border-white/15 bg-white/5 px-8 py-4 font-semibold text-white transition hover:border-gold/40 hover:bg-white/10"
            >
              <Home className="h-5 w-5" />
              Home
            </Link>

          </div>

        </motion.div>

      </div>

    </main>
  );
}
