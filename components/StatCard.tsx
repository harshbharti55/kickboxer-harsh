'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

type Props = {
  label: string;
  value: number;
};

export default function StatCard({ label, value }: Props) {
  const ref = useRef<HTMLDivElement | null>(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <motion.div
      ref={ref}
      whileHover={{ y: -4, scale: 1.01 }}
      className="glass rounded-3xl p-6 shadow-glow"
    >
      <div className="font-display text-5xl text-white">
        {inView ? value.toLocaleString() : '0'}
      </div>
      <p className="mt-3 text-sm uppercase tracking-[0.3em] text-white/60">{label}</p>
    </motion.div>
  );
}
