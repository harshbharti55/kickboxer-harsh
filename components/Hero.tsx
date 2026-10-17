'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion, useReducedMotion } from 'framer-motion';
import { ArrowUpRight, Medal, Trophy, Handshake } from 'lucide-react';
import { competitionRecords, sponsorshipGoal } from '@/data/athlete';

export default function Hero() {
  const reduceMotion = useReducedMotion();
  const medals = competitionRecords.filter((record) => ['gold', 'silver', 'bronze'].includes(record.kind)).length;

  return (
    <section id="home" className="relative isolate min-h-[100svh] overflow-hidden bg-[#070707] text-white">
      <div className="pointer-events-none absolute inset-0 opacity-40" aria-hidden="true" style={{ backgroundImage: 'linear-gradient(rgba(255,255,255,.035) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.035) 1px, transparent 1px)', backgroundSize: '44px 44px' }} />
      <div className="relative z-10 grid min-h-[100svh] lg:grid-cols-2">
        <motion.div
          initial={reduceMotion ? false : { opacity: 0, x: -24 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.65 }}
          className="relative order-2 flex min-w-0 items-center px-5 pb-14 pt-10 sm:px-8 sm:pb-16 sm:pt-12 lg:order-1 lg:px-[clamp(2rem,6vw,6.5rem)] lg:pb-20 lg:pt-32 xl:px-[clamp(4rem,8vw,8rem)]"
        >
          <div className="pointer-events-none absolute -left-20 top-1/4 h-72 w-72 rounded-full bg-[#f32640]/15 blur-[100px]" aria-hidden="true" />
          <div className="relative z-10 mx-auto w-full max-w-2xl lg:mx-0">
            <div className="inline-flex max-w-full items-center gap-2 rounded-full border border-[#f32640]/40 bg-[#f32640]/[0.09] px-3 py-2 text-[10px] font-bold uppercase tracking-[0.18em] text-white sm:px-4 sm:text-xs sm:tracking-[0.24em]"><span className="h-2 w-2 shrink-0 rounded-full bg-[#f32640] shadow-[0_0_14px_#f32640]" />Indian Kickboxing Athlete · Himachal Pradesh</div>
            <p className="mt-7 text-[10px] font-semibold uppercase tracking-[0.35em] text-white/45 sm:mt-10 sm:text-xs sm:tracking-[0.42em]">Discipline. Courage. Relentless work.</p>
            <h1 className="hero-name mt-4 font-display text-[clamp(4.2rem,13vw,8.4rem)] leading-[0.79] tracking-tight text-white sm:text-[clamp(5.8rem,9vw,8.5rem)] lg:text-[clamp(5rem,7.4vw,8rem)]">HARSH <span className="hero-name-accent block">BHARTI<span className="text-[#f32640]">.</span></span></h1>
            <div className="mt-7 flex items-center gap-3"><span className="h-px w-10 bg-[#f32640] sm:w-14" /><p className="text-xs font-bold uppercase tracking-[0.2em] text-[#ff5268] sm:text-sm sm:tracking-[0.28em]">Full Contact · −54 kg</p></div>
            <p className="mt-5 max-w-xl text-base leading-7 text-white/70 sm:text-lg sm:leading-8">Built through discipline. Tested in competition. Ready for the next round. Partner with Harsh to help fund training, travel and the next stage of his kickboxing journey.</p>
            <div className="mt-7 flex flex-col gap-3 min-[430px]:flex-row sm:mt-9 sm:gap-4">
              <Link href="/sponsorship" className="group inline-flex min-h-12 items-center justify-center gap-3 rounded-xl bg-[#f32640] px-5 py-3 text-sm font-extrabold text-white shadow-[0_10px_35px_rgba(243,38,64,.22)] transition duration-300 hover:-translate-y-1 hover:bg-[#ff4058] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#f32640] sm:px-6"><Handshake className="h-5 w-5" />Become a sponsor<ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" /></Link>
              <Link href="/achievements" className="inline-flex min-h-12 items-center justify-center gap-3 rounded-xl border border-white/20 bg-white/[0.035] px-5 py-3 text-sm font-bold text-white transition hover:border-[#f32640]/60 hover:bg-white/[0.08] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white sm:px-6"><Trophy className="h-5 w-5 text-[#ff5268]" />Explore achievements</Link>
            </div>
            <div className="mt-4 flex flex-wrap gap-x-4 gap-y-1">
              <Link href="/cv" className="inline-flex min-h-10 items-center gap-2 py-2 text-sm font-semibold text-white/65 transition hover:text-[#ff5268]"><Medal className="h-4 w-4" />View athlete CV<ArrowUpRight className="h-3.5 w-3.5" /></Link>
              <Link href="/calendar" className="inline-flex min-h-10 items-center gap-2 py-2 text-sm font-semibold text-white/65 transition hover:text-[#ff5268]">2027 campaign targets<ArrowUpRight className="h-3.5 w-3.5" /></Link>
            </div>
            <div className="mt-8 grid max-w-xl grid-cols-3 border-y border-white/10 py-4 sm:mt-10 sm:py-5">
              <div className="pr-3 sm:pr-5"><p className="font-display text-3xl text-[#ff5268] sm:text-4xl">{medals}</p><p className="mt-1 text-[9px] font-bold uppercase tracking-[0.12em] text-white/45 sm:text-[10px] sm:tracking-[0.17em]">Medal results</p></div>
              <div className="border-x border-white/10 px-3 sm:px-5"><p className="font-display text-3xl text-white sm:text-4xl">2018<span className="text-[#f32640]">—</span>26</p><p className="mt-1 text-[9px] font-bold uppercase tracking-[0.12em] text-white/45 sm:text-[10px] sm:tracking-[0.17em]">Competition years</p></div>
              <div className="pl-3 sm:pl-5"><p className="font-display text-3xl text-white sm:text-4xl">₹3–4<span className="text-lg">L</span></p><p className="mt-1 text-[9px] font-bold uppercase tracking-[0.12em] text-white/45 sm:text-[10px] sm:tracking-[0.17em]">Funding target</p></div>
            </div>
            <p className="mt-3 max-w-xl text-[11px] leading-5 text-white/45">{sponsorshipGoal.event} is a campaign target only. Selection, eligibility, dates and participation are not confirmed.</p>
          </div>
        </motion.div>

        <motion.div
          initial={reduceMotion ? false : { opacity: 0, scale: 1.035 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, ease: 'easeOut' }}
          className="group relative order-1 min-h-[52svh] overflow-hidden border-b border-white/10 lg:order-2 lg:min-h-[100svh] lg:border-b-0 lg:border-l lg:border-white/10"
        >
          <Image src="/gallery/IMG-20250718-WA0013.jpg" alt="Harsh Bharti competing in a kickboxing ring" fill priority sizes="(max-width: 1023px) 100vw, 50vw" className="object-cover object-[center_28%] transition-transform duration-[1200ms] ease-out group-hover:scale-[1.035]" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#070707] via-black/10 to-black/15 lg:bg-gradient-to-r lg:from-[#070707]/50 lg:via-transparent lg:to-black/10" />
          <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(243,38,64,.12),transparent_42%)]" />
          <div className="absolute left-5 top-6 flex items-center gap-2 rounded-full border border-white/25 bg-black/55 px-3 py-2 text-[9px] font-bold uppercase tracking-[0.22em] text-white backdrop-blur-md sm:left-8 sm:top-8 sm:text-[10px]"><span className="h-2 w-2 rounded-full bg-[#f32640]" />Fight mode · Competition ready</div>
          <div className="absolute bottom-5 left-5 right-5 sm:bottom-8 sm:left-8 sm:right-8 lg:bottom-12 lg:left-10 lg:right-10">
            <div className="max-w-lg border-l-2 border-[#f32640] pl-4 sm:pl-6">
              <p className="text-[10px] font-bold uppercase tracking-[0.28em] text-[#ff5268] sm:text-xs">The athlete · The journey</p>
              <p className="mt-2 font-display text-3xl uppercase leading-[0.95] text-white sm:text-5xl lg:text-4xl xl:text-5xl">Earn every round.</p>
              <p className="mt-2 max-w-sm text-xs leading-5 text-white/70 sm:text-sm sm:leading-6">Real competition. Real commitment. One goal at a time.</p>
            </div>
            <div className="mt-5 flex w-fit max-w-full items-center gap-4 rounded-xl border border-white/15 bg-black/65 px-4 py-3 backdrop-blur-xl sm:mt-6 sm:px-5">
              <div><p className="text-[9px] font-bold uppercase tracking-[0.2em] text-[#ff5268]">Road to 2027</p><p className="mt-1 text-sm font-extrabold text-white">International campaign</p></div>
              <span className="h-8 w-px bg-white/15" />
              <p className="max-w-24 text-[10px] leading-4 text-white/55">Target only · selection not confirmed</p>
            </div>
          </div>
          <div className="pointer-events-none absolute right-5 top-1/2 hidden -translate-y-1/2 select-none font-display text-[clamp(5rem,10vw,10rem)] leading-none text-white/[0.08] [writing-mode:vertical-rl] lg:block" aria-hidden="true">FIGHT</div>
        </motion.div>
      </div>
    </section>
  );
}
