"use client";
import SectionHeading from './SectionHeading';
import Image from 'next/image';
import { gallery } from '@/data/site';
import { motion } from 'framer-motion';

export default function Gallery() {
  return (
    <section className="container-page py-24">
      <SectionHeading
        eyebrow="Gallery"
       title="Official Photo Gallery"
subtitle="Explore Harsh Bharti's journey through national championships, international competitions, training sessions, medal ceremonies, and behind-the-scenes moments."
        />

      <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
        {gallery.map((item, index) => (
          <motion.div
            key={item.alt + index}
            whileHover={{ y: -6 }}
            className="group relative overflow-hidden rounded-[1.75rem] border border-white/10 bg-white/5"
          >
            <div className="relative aspect-[4/5]">
            <a href={item.src} target="_blank" rel="noopener noreferrer">
  <Image
    src={item.src}
    alt={item.alt}
    fill
    className="object-cover transition duration-700 group-hover:scale-105"
  />
</a>
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/15 to-transparent" />
            </div>
            <div className="absolute inset-x-0 bottom-0 p-5">
              <p className="text-sm uppercase tracking-[0.25em] text-gold/80">{index < 3 ? 'Featured' : 'Media'}</p>
              <h3 className="mt-1 text-lg font-semibold text-white">{item.alt}</h3>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
