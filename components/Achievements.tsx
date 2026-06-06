"use client";
import SectionHeading from './SectionHeading';
import { motion } from 'framer-motion';
import { Award, Medal, ShieldCheck, Trophy } from 'lucide-react';

const items = [
  { icon: Trophy, title: 'Championship Belts', desc: 'Highlight belts and top-tier victories.' },
  { icon: Medal, title: 'Medals', desc: 'Show gold, silver, bronze, and podium finishes.' },
  { icon: ShieldCheck, title: 'Certifications', desc: 'Add camp and federation certificates.' },
  { icon: Award, title: 'Awards', desc: 'Feature recognition from events and bodies.' },
];

export default function Achievements() {
  return (
    <section className="container-page py-24">
      <SectionHeading
        eyebrow="Achievements"
        title="Turn trophies into a premium athlete brand."
        subtitle="Sponsors, agencies, and media teams care about presentation as much as the medal count."
      />

      <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
        {items.map((item) => {
          const Icon = item.icon;
          return (
            <motion.div
              key={item.title}
              whileHover={{ y: -6 }}
              className="glass rounded-[1.75rem] p-6"
            >
              <Icon className="h-8 w-8 text-gold" />
              <h3 className="mt-4 text-xl font-semibold text-white">{item.title}</h3>
              <p className="mt-2 text-sm leading-6 text-white/65">{item.desc}</p>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
