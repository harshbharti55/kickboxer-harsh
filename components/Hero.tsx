'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import Scene from "./Scene";
import {
  MessageCircleMore,
  PlayCircle,
  Trophy,
  Medal,
  Flag,
} from 'lucide-react';
import { boxer, contact } from '@/data/site';

export default function Hero() {
  return (
    <section
      id="home"
      className="relative overflow-hidden min-h-screen"
    >
      {/* Background */}
      <div className="absolute inset-0 grid-overlay opacity-20" />
      <Scene />

      <div className="absolute inset-0 overflow-hidden">
  <div className="absolute inset-0 bg-gradient-to-br from-black via-[#050505] to-black" />
</div>

      <div className="container-page relative z-10 grid min-h-screen items-center gap-16 lg:grid-cols-[1.15fr_0.85fr]">
        <motion.div
  initial={{ opacity: 0, y: 30 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.8 }}
  className="max-w-2xl"
>
  {/* Top Badge */}
  <div className="mb-6 inline-flex items-center rounded-full border border-gold/30 bg-gold/10 px-5 py-2 text-xs font-bold uppercase tracking-[0.35em] text-gold">
    🇮🇳 Indian Kickboxing Athlete
  </div>

  {/* Heading */}
  <h1 className="font-display leading-[0.9] text-white">
    <span className="block text-6xl sm:text-7xl lg:text-8xl">
      HARSH
    </span>

    <span className="block text-6xl sm:text-7xl lg:text-8xl text-gradient">
      BHARTI
    </span>
  </h1>

  {/* Subtitle */}
  <p className="mt-5 text-xl font-semibold text-gold">
    National Medalist • Full Contact Kickboxer
  </p>

  {/* Description */}
  <p className="mt-6 max-w-xl text-lg leading-8 text-white/75">
    Dedicated to representing India through discipline, hard work and elite
    kickboxing. Every round is another step toward becoming a World Champion.
  </p>

  {/* Achievement Badges */}
  <div className="mt-8 flex flex-wrap gap-3">
    <div className="rounded-full border border-gold/30 bg-gold/10 px-4 py-2 text-sm text-gold">
      🥈 National Medalist
    </div>

    <div className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-white">
      🇮🇳 Representing India
    </div>

    <div className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-white">
      🥊 Full Contact
    </div>

    <div className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-white">
      ⭐ 8+ Years Experience
    </div>
  </div>

  {/* Buttons */}
  <div className="mt-10 flex flex-wrap gap-4">
    <a
      href="#media"
      className="inline-flex items-center gap-2 rounded-full bg-gold px-7 py-3 font-semibold text-black transition hover:scale-105"
    >
      <PlayCircle className="h-5 w-5" />
      Watch Highlights
    </a>

    <a
      href="/achievements"
      className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-7 py-3 font-semibold text-white hover:border-gold/40 hover:bg-white/10"
    >
      <Trophy className="h-5 w-5 text-gold" />
      Achievements
    </a>

    <a
      href={contact.whatsapp}
      target="_blank"
      rel="noreferrer"
      className="inline-flex items-center gap-2 rounded-full border border-gold/40 bg-gold/10 px-7 py-3 font-semibold text-gold hover:bg-gold hover:text-black"
    >
      <MessageCircleMore className="h-5 w-5" />
      Sponsor Me
    </a>
  </div>

  {/* Stats */}
  <div className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-4">
    {[
      {
        icon: <Medal className="h-5 w-5 text-gold" />,
        label: "Medals",
        value: "5+",
      },
      {
        icon: <Flag className="h-5 w-5 text-gold" />,
        label: "Country",
        value: "India",
      },
      {
        icon: <Trophy className="h-5 w-5 text-gold" />,
        label: "Division",
        value: boxer.division,
      },
      {
        icon: <Medal className="h-5 w-5 text-gold" />,
        label: "Experience",
        value: boxer.experienceYears,
      },
    ].map((item) => (
      <div
        key={item.label}
        className="glass rounded-2xl border border-white/10 p-5"
      >
        {item.icon}

        <p className="mt-3 text-xs uppercase tracking-[0.25em] text-white/50">
          {item.label}
        </p>

        <p className="mt-2 text-xl font-bold text-white">
          {item.value}
        </p>
      </div>
    ))}
  </div>
</motion.div>
        {/* RIGHT IMAGE CARD */}
<motion.div
  initial={{ opacity: 0, scale: 0.92, x: 30 }}
  animate={{ opacity: 1, scale: 1, x: 0 }}
  transition={{ duration: 0.9 }}
  whileHover={{
    scale: 1.02,
    rotate: -1,
  }}
  className="relative"
>
  {/* Glow */}
  <div className="absolute -inset-8 rounded-[3rem] bg-gradient-to-br from-gold/25 via-redbrand/20 to-transparent blur-3xl" />

  <div className="glass relative overflow-hidden rounded-[2.5rem] border border-white/10 p-3 shadow-glow">

    <div className="relative aspect-[4/5] overflow-hidden rounded-[2rem]">

      <Image
        src="/media/hero.png"
        alt="Harsh Bharti"
        fill
        priority
        className="object-cover object-top transition duration-700 hover:scale-105"
      />

      {/* Dark Gradient */}
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/10 to-transparent" />

      {/* Top Badge */}
      <div className="absolute left-5 top-5 rounded-full border border-gold/30 bg-black/50 px-4 py-2 backdrop-blur-md">
        <span className="text-xs font-semibold uppercase tracking-[0.3em] text-gold">
          Team India 🇮🇳
        </span>
      </div>

      {/* Bottom Card */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.5,
          duration: 0.6,
        }}
        className="absolute bottom-0 left-0 right-0 p-6"
      >
        <div className="rounded-3xl border border-white/10 bg-black/45 p-6 backdrop-blur-xl">

          <p className="text-xs uppercase tracking-[0.35em] text-gold">
            Dream
          </p>

          <h3 className="mt-2 text-3xl font-bold text-white">
            World Champion
          </h3>

          <p className="mt-3 text-sm leading-6 text-white/70">
            Every round, every punch and every sacrifice is a step toward
            representing India on the world's biggest stage.
          </p>

          <div className="mt-5 h-2 overflow-hidden rounded-full bg-white/10">
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: "82%" }}
              transition={{
                duration: 2,
                delay: 1,
              }}
              className="h-full rounded-full bg-gradient-to-r from-gold to-yellow-300"
            />
          </div>

          <div className="mt-2 flex items-center justify-between text-xs text-white/60">
            <span>Journey Progress</span>
            <span>82%</span>
          </div>

        </div>
      </motion.div>

    </div>
  </div>
</motion.div>
        </div>{/* <-- Close container-page */}
        
        {/* Bottom Fade */}
      

       <div className="pointer-events-none absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-black via-black/70 to-transparent" />

{/* Scroll Indicator */}
<motion.div
  initial={{ opacity: 0 }}
  animate={{ opacity: 1 }}
  transition={{ delay: 1.5 }}
  className="absolute bottom-8 left-1/2 z-20 -translate-x-1/2"
>
  <a
    href="#about"
    className="group flex flex-col items-center gap-2"
  >
    <span className="text-xs uppercase tracking-[0.35em] text-white/50 transition group-hover:text-gold">
      Scroll
    </span>

    <motion.div
      animate={{ y: [0, 10, 0] }}
      transition={{
        repeat: Infinity,
        duration: 1.6,
      }}
      className="flex h-12 w-7 items-start justify-center rounded-full border border-gold/40 p-1"
    >
      <motion.div
        animate={{ y: [0, 16, 0] }}
        transition={{
          repeat: Infinity,
          duration: 1.6,
        }}
        className="h-2 w-2 rounded-full bg-gold"
      />
    </motion.div>
  </a>
</motion.div>
        </section>
    );
}

        
        
