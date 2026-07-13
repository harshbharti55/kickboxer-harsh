'use client';

import { motion } from 'framer-motion';
import { Trophy, Medal, Star, Award } from 'lucide-react';

import SectionHeading from './SectionHeading';
import StatCard from './StatCard';
import { stats, boxer, achievements } from '@/data/site';

const icons = [Trophy, Medal, Award, Star];

export default function Stats() {
  return (
    <section
      id="stats"
      className="relative overflow-hidden bg-black py-24"
    >
      {/* Background Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(212,175,55,0.12),transparent_55%)]" />

      <div className="container-page relative z-10">
        <SectionHeading
          eyebrow="Career Overview"
          title="Numbers That Define My Journey"
          subtitle={`Every competition, every medal and every challenge has shaped ${boxer.name}'s career as a professional kickboxer.`}
        />

        {/* Main Stats */}
        <div className="mt-14 grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
          {stats.map((item, index) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.5,
                delay: index * 0.1,
              }}
            >
              <StatCard
                label={item.label}
                value={item.value}
              />
            </motion.div>
          ))}
        </div>

        {/* Achievement Cards */}
        <div className="mt-16">
          <h3 className="mb-8 text-center text-3xl font-display text-white">
            Medal Collection
          </h3>

          <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
            {achievements.map((item, index) => {
              const Icon = icons[index % icons.length];

              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.45,
                    delay: index * 0.12,
                  }}
                  whileHover={{
                    y: -8,
                    scale: 1.03,
                  }}
                  className="glass group rounded-3xl border border-white/10 p-8 transition-all duration-300 hover:border-gold/40"
                >
                  <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-gold/10">
                    <Icon className="h-8 w-8 text-gold" />
                  </div>

                  <p className="mt-6 text-5xl font-display text-gold">
                    {item.count}
                  </p>

                  <h4 className="mt-4 text-lg font-semibold text-white">
                    {item.title}
                  </h4>

                  <div className="mt-5 h-1 w-16 rounded-full bg-gold transition-all duration-300 group-hover:w-24" />
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Quote */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="mx-auto mt-20 max-w-3xl rounded-3xl border border-gold/20 bg-gold/5 p-8 text-center"
        >
          <p className="text-lg italic leading-8 text-white/80">
            "Every medal represents countless hours of discipline, sacrifice,
            and determination. The journey continues with one goal — becoming a
            World Champion."
          </p>
        </motion.div>
      </div>
    </section>
  );
}
