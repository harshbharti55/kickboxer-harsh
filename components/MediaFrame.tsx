
"use client";
import Image from 'next/image';
import { Play } from 'lucide-react';
import { motion } from 'framer-motion';

type Props = {
  title: string;
  description: string;
  src?: string;
  kind?: 'image' | 'video';
};

export default function MediaFrame({ title, description, src, kind = 'image' }: Props) {
  return (
    <motion.div
      whileHover={{ y: -6 }}
      className="group overflow-hidden rounded-3xl border border-white/10 bg-white/5 shadow-glow"
    >
      <div className="relative aspect-[4/3] overflow-hidden bg-white/5">
        {kind === 'video' ? (
          <div className="flex h-full items-center justify-center bg-[radial-gradient(circle_at_center,_rgba(217,4,41,.28),_transparent_45%),linear-gradient(135deg,rgba(255,255,255,.08),rgba(255,255,255,.02))]">
            <div className="flex h-20 w-20 items-center justify-center rounded-full border border-white/20 bg-black/40 backdrop-blur">
              <Play className="h-8 w-8 text-gold" />
            </div>
          </div>
        ) : src ? (
          <Image
            src={src}
            alt={title}
            fill
            className="object-cover transition duration-700 group-hover:scale-105"
          />
        ) : null}
        <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black via-black/70 to-transparent p-5">
          <h3 className="text-lg font-semibold text-white">{title}</h3>
          <p className="mt-1 text-sm text-white/70">{description}</p>
        </div>
      </div>
    </motion.div>
  );
}
