"use client";

import { motion } from "framer-motion";
import { Trophy } from "lucide-react";

export default function Loading() {
  return (
    <main className="relative flex min-h-screen items-center justify-center overflow-hidden bg-black text-white">

      {/* Background */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(212,175,55,0.08),transparent_60%)]" />
      <div className="absolute inset-0 grid-overlay opacity-20" />

      <div className="relative z-10 text-center">

        <motion.div
          animate={{
            rotate: 360,
          }}
          transition={{
            repeat: Infinity,
            duration: 2,
            ease: "linear",
          }}
          className="mx-auto flex h-24 w-24 items-center justify-center rounded-full border-2 border-gold/30"
        >
          <Trophy className="h-10 w-10 text-gold" />
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mt-10 font-display text-4xl text-white"
        >
          Loading...
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            delay: 0.4,
            repeat: Infinity,
            repeatType: "reverse",
            duration: 1,
          }}
          className="mt-4 text-white/60"
        >
          Preparing the next round...
        </motion.p>

        <div className="mx-auto mt-10 h-2 w-64 overflow-hidden rounded-full bg-white/10">

          <motion.div
            animate={{
              x: ["-100%", "100%"],
            }}
            transition={{
              repeat: Infinity,
              duration: 1.5,
              ease: "easeInOut",
            }}
            className="h-full w-1/2 rounded-full bg-gold"
          />

        </div>

      </div>

    </main>
  );
}
