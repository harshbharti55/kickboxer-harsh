"use client";

import SectionHeading from './SectionHeading';
import { boxer, journey, represented } from '@/data/site';
import { motion } from 'framer-motion';

export default function About() {
  return (
    <section id="about" className="container-page py-24">
      <SectionHeading
        eyebrow="About Boxer"
        title="Built for the ring, branded for the future."
        subtitle={boxer.bio}
      />

      <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
        <motion.div
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: 20 }}
          viewport={{ once: true }}
          className="glass rounded-[2rem] p-8"
        >
          <div className="grid gap-5 sm:grid-cols-2">
            {[
              ['Full Name', boxer.name],
              ['Nickname', boxer.nickname],
              ['Birth Date', boxer.birthDate],
              ['Hometown', boxer.hometown],
              ['Nationality', boxer.nationality],
              ['Weight Class', boxer.weightClass],
              ['Division', boxer.division],
              ['Team', boxer.team],
            ].map(([label, value]) => (
              <div key={label} className="rounded-3xl border border-white/10 bg-white/5 p-4">
                <p className="text-xs uppercase tracking-[0.25em] text-white/45">{label}</p>
                <p className="mt-2 text-lg font-semibold text-white">{value}</p>
              </div>
            ))}
          </div>

          <div className="mt-6 rounded-3xl border border-redbrand/20 bg-redbrand/10 p-5">
            <p className="text-xs uppercase tracking-[0.3em] text-redbrand">Fighting Style</p>
            <p className="mt-3 text-base leading-7 text-white/80">{boxer.style}</p>
          </div>
        </motion.div>

        <motion.div
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: 20 }}
          viewport={{ once: true }}
          className="glass rounded-[2rem] p-8"
        >
          <p className="text-sm uppercase tracking-[0.3em] text-gold/80">Career Goals</p>
          <div className="mt-5 space-y-6">
            <div>
              <h3 className="text-xl font-semibold text-white">Short-Term Goals (2026)</h3>
              <ul className="mt-3 space-y-2 text-white/70">
                {boxer.goals.shortTerm.map((item) => (
                  <li key={item} className="flex gap-3">
                    <span className="mt-2 h-2 w-2 rounded-full bg-gold" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-white">Long-Term Goals</h3>
              <ul className="mt-3 space-y-2 text-white/70">
                {boxer.goals.longTerm.map((item) => (
                  <li key={item} className="flex gap-3">
                    <span className="mt-2 h-2 w-2 rounded-full bg-redbrand" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </motion.div>
      </div>

      <div className="mt-6 grid gap-6 lg:grid-cols-2">
        <div className="glass rounded-[2rem] p-8">
          <p className="text-sm uppercase tracking-[0.3em] text-white/45">Athlete Journey</p>
          <div className="mt-5 space-y-4">
            {journey.map((item) => (
              <div key={item.year + item.title} className="flex items-start gap-4">
                <div className="mt-1 min-w-16 rounded-2xl border border-gold/20 bg-gold/10 px-3 py-2 text-center text-sm font-bold text-gold">
                  {item.year}
                </div>
                <p className="pt-2 text-white/75">{item.title}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="glass rounded-[2rem] p-8">
          <p className="text-sm uppercase tracking-[0.3em] text-white/45">Represented</p>
          <div className="mt-5 grid gap-4">
            {represented.map((item) => (
              <div key={item} className="rounded-2xl border border-white/10 bg-white/5 px-4 py-4 text-white/80">
                {item}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
