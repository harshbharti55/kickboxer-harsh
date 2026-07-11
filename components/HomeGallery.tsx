"use client";

import SectionHeading from "./SectionHeading";
import Image from "next/image";
import Link from "next/link";
import { gallery } from "@/data/site";
import { motion } from "framer-motion";

export default function HomeGallery() {
  return (
    <section className="container-page py-24">
      <SectionHeading
        eyebrow="Gallery"
        title="Official Photo Gallery"
        subtitle="A glimpse of my kickboxing journey."
      />

      <div className="grid gap-5 sm:grid-cols-2">
        {gallery.slice(0, 2).map((item, index) => (
          <motion.div
            key={index}
            whileHover={{ y: -6 }}
            className="group overflow-hidden rounded-3xl border border-white/10"
          >
            <div className="relative aspect-[4/5]">
              <Image
                src={item.src}
                alt={item.alt}
                fill
                className="object-cover transition duration-700 group-hover:scale-105"
              />
            </div>
          </motion.div>
        ))}
      </div>

      <div className="mt-10 flex justify-center">
        <Link
          href="/gallery"
          className="rounded-full bg-gold px-6 py-3 font-semibold text-black"
        >
          📸 See All Photos
        </Link>
      </div>
    </section>
  );
}
