'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { ArrowRight, MessageCircleMore, PlayCircle } from 'lucide-react';
import { boxer, contact } from '@/data/site';

export default function Hero() {
  return (
    <section id="home" className="relative overflow-hidden">
      <div className="absolute inset-0 grid-overlay opacity-25" />
      <div className="absolute inset-0 bg-hero-radial" />
      <div className="container-page relative grid min-h-[92vh] items-center gap-12 py-10 lg:grid-cols-[1.1fr_0.9fr]">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-2xl"
        >
          <div className="mb-5 inline-flex rounded-full border border-gold/20 bg-gold/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-gold">
            Athlete Portfolio
          </div>

          <h1 className="font-display text-6xl leading-[0.92] text-white sm:text-7xl lg:text-[6.8rem]">
            {boxer.name}
            <span className="block text-gradient">{boxer.nickname}</span>
          </h1>

          <p className="mt-6 max-w-xl text-lg leading-8 text-white/75">
            {boxer.tagline}
          </p>

          <p className="mt-5 max-w-xl text-base leading-7 text-white/60">
            {boxer.bio}
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="#media"
              className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 font-semibold text-black transition hover:scale-[1.02]"
            >
              <PlayCircle className="h-5 w-5" /> Watch Highlights
            </a>
            <a
              href={contact.whatsapp}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-6 py-3 font-semibold text-white transition hover:border-gold/40 hover:bg-white/10"
            >
              <MessageCircleMore className="h-5 w-5 text-gold" /> Contact / Book
            </a>
          </div>

          <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-4">
            {[
              ['Age', String(boxer.age)],
              ['Weight', boxer.weightClass],
              ['Division', boxer.division],
              ['Experience', boxer.experienceYears],
            ].map(([label, value]) => (
              <div key={label} className="glass rounded-2xl p-4">
                <p className="text-xs uppercase tracking-[0.25em] text-white/45">{label}</p>
                <p className="mt-2 text-lg font-semibold text-white">{value}</p>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.94, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.15 }}
          className="relative"
        >
          <div className="absolute -inset-6 rounded-[2.5rem] bg-gradient-to-br from-redbrand/30 via-transparent to-gold/20 blur-3xl" />
          <div className="glass relative overflow-hidden rounded-[2.5rem] p-3 shadow-glow">
            <div className="relative aspect-[4/5] overflow-hidden rounded-[2rem]">
              <Image
                src="/media/hero.png"
                alt="Boxer hero portrait"
                fill
                priority
                className="object-cover object-top"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/8 to-transparent" />
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.6 }}
                className="absolute bottom-0 left-0 right-0 p-6"
              >
                <div className="rounded-3xl border border-white/10 bg-black/40 p-5 backdrop-blur-md">
                  <p className="text-xs uppercase tracking-[0.35em] text-gold/90">Fight Mode</p>
                  <p className="mt-2 text-2xl font-semibold text-white">Speed. Pressure. Power.</p>
                </div>
              </motion.div>
            </div>
          </div>

          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
            className="absolute -left-4 top-8 hidden rounded-2xl border border-white/10 bg-black/70 px-4 py-3 backdrop-blur md:block"
          >
            <p className="text-xs uppercase tracking-[0.25em] text-white/50">Style</p>
            <p className="mt-1 text-sm font-semibold text-white">{boxer.style}</p>
          </motion.div>

          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut', delay: 0.6 }}
            className="absolute -right-4 bottom-12 hidden rounded-2xl border border-gold/20 bg-gold/10 px-4 py-3 backdrop-blur md:block"
          >
            <p className="text-xs uppercase tracking-[0.25em] text-gold">Goal</p>
            <p className="mt-1 text-sm font-semibold text-white">World Championship</p>
          </motion.div>
        </motion.div>
      </div>
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-black to-transparent" />
    </section>
  );
}
