"use client";

import Image from "next/image";
import { motion } from "framer-motion";

type Props = {
  title: string;
  description: string;
  src?: string;
  kind?: "image" | "video";
};

export default function MediaFrame({
  title,
  description,
  src,
  kind = "image",
}: Props) {
  return (
    <motion.div
      whileHover={{ y: -6 }}
      transition={{ duration: 0.25 }}
      className="group overflow-hidden rounded-3xl border border-white/10 bg-white/5 shadow-glow"
    >
      <div className="relative aspect-[9/16] overflow-hidden bg-black">
        {kind === "video" ? (
          <video
            className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
            autoPlay
            muted
            loop
            playsInline
            preload="metadata"
          >
            <source src={src} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        ) : src ? (
          <Image
            src={src}
            alt={title}
            fill
            className="object-cover transition duration-700 group-hover:scale-105"
          />
        ) : null}

        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />

        {/* Content */}
        <div className="absolute inset-x-0 bottom-0 p-5">
          <h3 className="text-lg font-semibold text-white">
            {title}
          </h3>

          <p className="mt-1 text-sm text-white/80">
            {description}
          </p>
        </div>
      </div>
    </motion.div>
  );
}