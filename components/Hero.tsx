'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion, useReducedMotion } from 'framer-motion';
import { ArrowDownRight, ArrowUpRight, Medal, Trophy, Handshake } from 'lucide-react';
import { competitionRecords, sponsorshipGoal } from '@/data/athlete';

export default function Hero() {
  const reduceMotion = useReducedMotion();
  const medals = competitionRecords.filter((record) => ['gold', 'silver', 'bronze'].includes(record.kind)).length;
  return (
    <section id="home" className="hero-stage relative isolate overflow-hidden text-white">
      <div className="hero-grid pointer-events-none absolute inset-0" aria-hidden="true" />
      <div className="pointer-events-none absolute -left-32 top-24 h-72 w-72 rounded-full bg-[#f32640]/20 blur-[100px]" aria-hidden="true" />
      <div className="pointer-events-none absolute right-[-5rem] top-40 h-96 w-96 rounded-full bg-white/[0.06] blur-[120px]" aria-hidden="true" />
      <div className="container-page relative z-10 grid min-h-[calc(100svh-4rem)] items-center gap-10 pb-16 pt-28 sm:gap-12 sm:pb-20 lg:grid-cols-[1.02fr_.98fr] lg:gap-8 lg:pt-24 xl:gap-16">
        <motion.div initial={reduceMotion ? false : { opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.65 }} className="relative z-20 mx-auto w-full max-w-2xl lg:mx-0">
          <div className="inline-flex max-w-full items-center gap-2 rounded-full border border-[#f32640]/40 bg-[#f32640]/[0.09] px-3 py-2 text-[10px] font-bold uppercase tracking-[0.2em] text-white sm:px-4 sm:text-xs sm:tracking-[0.28em]"><span className="relative flex h-2 w-2 shrink-0 rounded-full bg-[#f32640] shadow-[0_0_14px_#f32640]" />Indian Kickboxing Athlete · Himachal Pradesh</div>
          <p className="mt-8 text-xs font-semibold uppercase tracking-[0.42em] text-white/45 sm:mt-10">Discipline. Courage. Relentless work.</p>
          <h1 className="hero-name mt-3 font-display text-[clamp(4.2rem,15vw,8.8rem)] leading-[0.78] tracking-tight text-white sm:text-[clamp(6rem,10vw,9rem)]">HARSH <span className="hero-name-accent block">BHARTI<span className="text-[#f32640]">.</span></span></h1>
          <div className="mt-7 flex items-center gap-3 sm:mt-8"><span className="h-px w-10 bg-[#f32640] sm:w-14" /><p className="text-xs font-bold uppercase tracking-[0.22em] text-[#ff5268] sm:text-sm sm:tracking-[0.3em]">Full Contact · −54 kg</p></div>
          <p className="mt-5 max-w-xl text-base leading-7 text-white/70 sm:text-lg sm:leading-8">Built through discipline. Tested in competition. Ready for the next round. Partner with Harsh to help fund training, travel and the next stage of his kickboxing journey.</p>
          <div className="mt-7 flex flex-col gap-3 min-[420px]:flex-row sm:mt-9 sm:gap-4">
            <Link href="/sponsorship" className="group inline-flex min-h-12 items-center justify-center gap-3 rounded-xl bg-[#f32640] px-5 py-3 text-sm font-extrabold text-white shadow-[0_10px_35px_rgba(243,38,64,.22)] transition duration-300 hover:-translate-y-1 hover:bg-[#ff4058] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#f32640] sm:px-6"><Handshake className="h-5 w-5" />Become a sponsor<ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" /></Link>
            <Link href="/achievements" className="inline-flex min-h-12 items-center justify-center gap-3 rounded-xl border border-white/20 bg-white/[0.035] px-5 py-3 text-sm font-bold text-white transition hover:border-[#f32640]/60 hover:bg-white/[0.08] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white sm:px-6"><Trophy className="h-5 w-5 text-[#ff5268]" />Explore achievements</Link>
          </div>
          <div className="mt-4 flex flex-wrap gap-3">
            <Link href="/cv" className="inline-flex min-h-10 items-center gap-2 rounded-lg px-2 py-2 text-sm font-semibold text-white/65 transition hover:text-[#ff5268]"><Medal className="h-4 w-4" />View athlete CV<ArrowUpRight className="h-3.5 w-3.5" /></Link>
            <Link href="/calendar" className="inline-flex min-h-10 items-center gap-2 rounded-lg px-2 py-2 text-sm font-semibold text-white/65 transition hover:text-[#ff5268]"><ArrowDownRight className="h-4 w-4" />2027 campaign targets<ArrowUpRight className="h-3.5 w-3.5" /></Link>
          </div>
          <div className="mt-10 grid max-w-xl grid-cols-3 border-y border-white/10 py-5 sm:mt-12 sm:py-6">
            <div className="pr-3 sm:pr-5"><p className="font-display text-3xl text-[#ff5268] sm:text-4xl">{medals}</p><p className="mt-1 text-[9px] font-bold uppercase tracking-[0.17em] text-white/45 sm:text-[10px]">Medal results</p></div>
            <div className="border-x border-white/10 px-3 sm:px-5"><p className="font-display text-3xl text-white sm:text-4xl">2018<span className="text-[#f32640]">—</span>26</p><p className="mt-1 text-[9px] font-bold uppercase tracking-[0.17em] text-white/45 sm:text-[10px]">Competition years</p></div>
            <div className="pl-3 sm:pl-5"><p className="font-display text-3xl text-white sm:text-4xl">₹3–4<span className="text-lg">L</span></p><p className="mt-1 text-[9px] font-bold uppercase tracking-[0.17em] text-white/45 sm:text-[10px]">Funding target</p></div>
          </div>
          <p className="mt-3 text-[11px] leading-5 text-white/45">{sponsorshipGoal.event} is a campaign target only. Selection, eligibility, dates and participation are not confirmed.</p>
        </motion.div>
        <motion.div initial={reduceMotion ? false : { opacity: 0, y: 24, rotateY: -8 }} animate={{ opacity: 1, y: 0, rotateY: 0 }} transition={{ duration: 0.8, delay: 0.1 }} className="hero-perspective relative mx-auto w-full max-w-[34rem] lg:ml-auto">
          <div className="hero-orbit hero-orbit-one pointer-events-none absolute inset-[4%] rounded-[2rem] border border-[#f32640]/35 sm:rounded-[2.5rem]" aria-hidden="true" /><div className="hero-orbit hero-orbit-two pointer-events-none absolute inset-[9%] rounded-[2rem] border border-white/20 sm:rounded-[2.5rem]" aria-hidden="true" />
          <motion.div whileHover={reduceMotion ? undefined : { rotateY: -3, rotateX: 2, y: -4 }} transition={{ type: 'spring', stiffness: 160, damping: 20 }} className="hero-photo-card relative z-10 mx-3 aspect-[4/4.8] overflow-hidden rounded-[1.8rem] border border-white/15 bg-[#111] p-2 shadow-[0_30px_100px_rgba(0,0,0,.75)] sm:mx-6 sm:rounded-[2.4rem] sm:p-3" style={{ transformStyle: 'preserve-3d' }}>
            <div className="relative h-full w-full overflow-hidden rounded-[1.3rem] sm:rounded-[1.8rem]">
              <Image src="/gallery/IMG-20250718-WA0013.jpg" alt="Harsh Bharti competing in a kickboxing ring" fill priority sizes="(max-width: 640px) 90vw, (max-width: 1024px) 70vw, 42vw" className="object-cover object-center transition duration-700 hover:scale-[1.03]" />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/10 to-transparent" /><div className="absolute left-4 top-4 rounded-full border border-white/20 bg-black/65 px-3 py-2 text-[9px] font-bold uppercase tracking-[0.2em] text-white backdrop-blur sm:left-6 sm:top-6 sm:text-[10px]">Competition mode</div>
              <div className="absolute bottom-4 left-4 right-4 rounded-2xl border border-white/15 bg-black/65 p-4 backdrop-blur-xl sm:bottom-6 sm:left-6 sm:right-6 sm:p-5"><p className="text-[10px] font-bold uppercase tracking-[0.28em] text-[#ff5268]">The athlete · The journey</p><p className="mt-2 text-xl font-black uppercase leading-tight text-white sm:text-2xl">Earn every round.</p><p className="mt-1 text-xs text-white/65">Real competition. Real commitment. One goal at a time.</p></div>
            </div>
          </motion.div>
          <motion.div initial={reduceMotion ? false : { opacity: 0, x: 18, y: 10 }} animate={{ opacity: 1, x: 0, y: 0 }} transition={{ duration: 0.55, delay: 0.5 }} className="hero-float-card absolute -bottom-4 right-0 z-20 max-w-[13rem] rounded-2xl border border-[#f32640]/35 bg-[#111]/95 p-4 backdrop-blur-xl sm:-right-2 sm:bottom-8 sm:max-w-[14rem]"><p className="text-[9px] font-bold uppercase tracking-[0.22em] text-[#ff5268]">Road to 2027</p><p className="mt-1 text-sm font-extrabold text-white">International campaign</p><p className="mt-1 text-[11px] leading-5 text-white/55">Target only · selection not confirmed</p></motion.div>
        </motion.div>
      </div>
    </section>
  );
}
