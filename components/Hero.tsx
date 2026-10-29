'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion, useReducedMotion } from 'framer-motion';
import { ArrowDownRight, ArrowUpRight, Medal, Trophy, Handshake, PlayCircle } from 'lucide-react';
import { athlete, competitionRecords, sponsorshipGoal } from '@/data/athlete';

export default function Hero() {
  const reduceMotion = useReducedMotion();
  const medals = competitionRecords.filter((record) => ['gold', 'silver', 'bronze'].includes(record.kind)).length;

  return (
    <section id="home" className="hero-stage relative isolate overflow-hidden text-white">
      <div className="hero-grid pointer-events-none absolute inset-0" aria-hidden="true" />
      <div className="pointer-events-none absolute -left-32 top-24 h-72 w-72 rounded-full bg-[#ff4d6d]/20 blur-[100px]" aria-hidden="true" />
      <div className="pointer-events-none absolute right-[-5rem] top-40 h-96 w-96 rounded-full bg-[#e8c56a]/10 blur-[120px]" aria-hidden="true" />
      <div className="hero-vertical-label pointer-events-none absolute left-6 top-1/2 hidden -translate-y-1/2 -rotate-90 text-[10px] font-bold uppercase tracking-[0.55em] text-white/30 xl:block">Discipline · Courage · India</div>

      <div className="container-page relative z-10 grid min-h-[calc(100svh-4rem)] items-center gap-10 pb-16 pt-28 sm:gap-12 sm:pb-20 lg:grid-cols-[1.02fr_.98fr] lg:gap-8 lg:pt-24 xl:gap-16">
        <motion.div
          initial={reduceMotion ? false : { opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65 }}
          className="relative z-20 mx-auto w-full max-w-2xl lg:mx-0"
        >
          <div className="inline-flex max-w-full items-center gap-2 rounded-full border border-[#e8c56a]/25 bg-[#e8c56a]/[0.07] px-3 py-2 text-[10px] font-bold uppercase tracking-[0.2em] text-[#f5d98b] sm:px-4 sm:text-xs sm:tracking-[0.28em]">
            <span className="relative flex h-2 w-2 shrink-0"><span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#e8c56a] opacity-60" /><span className="relative inline-flex h-2 w-2 rounded-full bg-[#e8c56a]" /></span>
            Indian Kickboxing Athlete · Himachal Pradesh
          </div>

          <p className="mt-8 text-xs font-semibold uppercase tracking-[0.42em] text-white/45 sm:mt-10">The next round starts here</p>
          <h1 className="hero-name mt-2 font-display text-[clamp(4.4rem,15vw,8.8rem)] leading-[0.78] tracking-tight text-white sm:text-[clamp(6rem,10vw,9rem)]">
            HARSH <span className="hero-name-accent block">BHARTI<span className="text-[#e8c56a]">.</span></span>
          </h1>
          <div className="mt-7 flex items-center gap-3 sm:mt-8">
            <span className="h-px w-10 bg-[#e8c56a] sm:w-14" />
            <p className="text-xs font-bold uppercase tracking-[0.22em] text-[#e8c56a] sm:text-sm sm:tracking-[0.3em]">Full Contact · −54 kg</p>
          </div>
          <p className="mt-5 max-w-xl text-base leading-7 text-white/65 sm:text-lg sm:leading-8">
            National-level results. A disciplined athlete. A story your brand can help take further. Partner with me to support the next stage of my kickboxing journey.
          </p>

          <div className="mt-7 flex flex-col gap-3 min-[420px]:flex-row sm:mt-9 sm:gap-4">
            <Link href="/sponsorship" className="group inline-flex min-h-12 items-center justify-center gap-3 rounded-xl bg-[#e8c56a] px-5 py-3 text-sm font-extrabold text-black shadow-[0_10px_35px_rgba(255,215,0,.15)] transition duration-300 hover:-translate-y-1 hover:bg-[#f5d98b] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#e8c56a] sm:px-6">
              <Handshake className="h-5 w-5" /> Become a sponsor <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
            </Link>
            <Link href="/achievements" className="inline-flex min-h-12 items-center justify-center gap-3 rounded-xl border border-white/15 bg-white/[0.035] px-5 py-3 text-sm font-bold text-white transition hover:border-white/35 hover:bg-white/[0.08] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white sm:px-6">
              <Trophy className="h-5 w-5 text-[#e8c56a]" /> Explore achievements
            </Link>
          </div>
          <div className="mt-4 flex flex-wrap gap-3">
            <Link href="/cv" className="inline-flex min-h-10 items-center gap-2 rounded-lg px-2 py-2 text-sm font-semibold text-white/65 transition hover:text-[#e8c56a]"><Medal className="h-4 w-4" /> View athlete CV <ArrowUpRight className="h-3.5 w-3.5" /></Link>
            <Link href="/calendar" className="inline-flex min-h-10 items-center gap-2 rounded-lg px-2 py-2 text-sm font-semibold text-white/65 transition hover:text-[#e8c56a]"><PlayCircle className="h-4 w-4" /> 2027 target calendar <ArrowUpRight className="h-3.5 w-3.5" /></Link>
          </div>

          <div className="mt-10 grid max-w-xl grid-cols-3 border-y border-white/10 py-5 sm:mt-12 sm:py-6">
            <div className="pr-3 sm:pr-5">
              <p className="font-display text-3xl text-[#e8c56a] sm:text-4xl">02</p>
              <p className="mt-1 text-[9px] font-bold uppercase tracking-[0.17em] text-white/45 sm:text-[10px] sm:tracking-[0.2em]">Gold · 2022</p>
            </div>
            <div className="border-x border-white/10 px-3 sm:px-5">
              <p className="font-display text-3xl text-white sm:text-4xl">2018<span className="text-[#e8c56a]">—</span>26</p>
              <p className="mt-1 text-[9px] font-bold uppercase tracking-[0.17em] text-white/45 sm:text-[10px] sm:tracking-[0.2em]">Competition years</p>
            </div>
            <div className="pl-3 sm:pl-5">
              <p className="font-display text-3xl text-white sm:text-4xl">−54<span className="text-sm">kg</span></p>
              <p className="mt-1 text-[9px] font-bold uppercase tracking-[0.17em] text-white/45 sm:text-[10px] sm:tracking-[0.2em]">Full Contact</p>
            </div>
          </div>
          <p className="mt-3 text-[11px] leading-5 text-white/35">The 2027 World Championship is a target only. Selection, eligibility, dates and participation are not confirmed.</p>
        </motion.div>

        <motion.div
          initial={reduceMotion ? false : { opacity: 0, y: 24, rotateY: -8 }}
          animate={{ opacity: 1, y: 0, rotateY: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="hero-perspective relative mx-auto w-full max-w-[34rem] lg:ml-auto"
        >
          <div className="hero-orbit hero-orbit-one pointer-events-none absolute inset-[4%] rounded-[2rem] border border-[#e8c56a]/20 sm:rounded-[2.5rem]" aria-hidden="true" />
          <div className="hero-orbit hero-orbit-two pointer-events-none absolute inset-[9%] rounded-[2rem] border border-[#ff4d6d]/25 sm:rounded-[2.5rem]" aria-hidden="true" />
          <motion.div
            whileHover={reduceMotion ? undefined : { rotateY: -5, rotateX: 3, y: -5 }}
            transition={{ type: 'spring', stiffness: 160, damping: 18 }}
            className="hero-photo-card relative z-10 mx-3 aspect-[4/4.7] overflow-hidden rounded-[1.8rem] border border-white/15 bg-[#111a2b] p-2 shadow-[0_30px_100px_rgba(0,0,0,.65)] sm:mx-6 sm:rounded-[2.4rem] sm:p-3"
            style={{ transformStyle: 'preserve-3d' }}
          >
            <div className="relative h-full w-full overflow-hidden rounded-[1.3rem] sm:rounded-[1.8rem]">
              <Image src="/media/hero.png" alt="Harsh Bharti, Indian kickboxing athlete" fill priority sizes="(max-width: 640px) 90vw, (max-width: 1024px) 70vw, 42vw" className="object-cover object-top transition-transform duration-700 hover:scale-[1.04]" />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/10 to-transparent" />
              <div className="absolute inset-0 bg-gradient-to-br from-[#e8c56a]/10 via-transparent to-[#ff4d6d]/20 mix-blend-screen" />
              <div className="absolute left-4 top-4 flex items-center gap-2 rounded-full border border-white/15 bg-black/55 px-3 py-2 backdrop-blur-xl sm:left-6 sm:top-6 sm:px-4">
                <span className="text-base">🇮🇳</span><span className="text-[9px] font-extrabold uppercase tracking-[0.22em] text-white sm:text-[10px]">India · Full Contact</span>
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-5 sm:p-8" style={{ transform: 'translateZ(32px)' }}>
                <p className="text-[10px] font-bold uppercase tracking-[0.35em] text-[#e8c56a]">Athlete · Ambition · Partnership</p>
                <h2 className="mt-2 font-display text-4xl leading-none text-white sm:text-6xl">NO SHORTCUTS.</h2>
                <p className="mt-3 max-w-sm text-sm leading-6 text-white/70">Your support can help turn preparation into opportunity.</p>
              </div>
              <div className="absolute right-4 top-1/2 hidden -translate-y-1/2 rotate-90 text-[9px] font-bold uppercase tracking-[0.35em] text-white/60 sm:block">HIMACHAL PRADESH · INDIA</div>
            </div>
          </motion.div>

          <motion.div
            animate={reduceMotion ? undefined : { y: [0, -7, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
            className="hero-float-card absolute -left-1 bottom-10 z-20 max-w-[13rem] rounded-2xl border border-[#e8c56a]/25 bg-[#0e1424]/90 p-4 shadow-2xl backdrop-blur-xl sm:-left-2 sm:bottom-14 sm:max-w-[15rem] sm:p-5"
          >
            <div className="flex items-center gap-2 text-[#e8c56a]"><Trophy className="h-4 w-4" /><span className="text-[9px] font-bold uppercase tracking-[0.2em]">National results</span></div>
            <p className="mt-2 text-sm font-bold text-white sm:text-base">2× Gold · 2022</p>
            <p className="mt-1 text-[10px] text-white/45 sm:text-xs">WAKO India Open National Tournament</p>
          </motion.div>
          <div className="absolute -right-1 top-[18%] z-20 hidden max-w-[12rem] rounded-2xl border border-white/10 bg-[#111a2b]/90 p-4 shadow-2xl backdrop-blur-xl sm:block">
            <p className="text-[9px] font-bold uppercase tracking-[0.2em] text-white/45">Sponsorship goal</p>
            <p className="mt-2 text-sm font-bold text-[#e8c56a]">₹3–4 lakh target</p>
            <p className="mt-1 text-[10px] leading-4 text-white/45">International campaign budget · preliminary</p>
          </div>
        </motion.div>
      </div>

      <div className="container-page relative z-10 pb-8">
        <a href="#stats" className="inline-flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.3em] text-white/40 transition hover:text-[#e8c56a]">
          Scroll to explore <ArrowDownRight className="h-4 w-4" />
        </a>
        <span className="float-right hidden text-[10px] uppercase tracking-[0.25em] text-white/25 sm:inline">01 / The journey begins</span>
      </div>
    </section>
  );
}
