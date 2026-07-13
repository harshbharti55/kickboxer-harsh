"use client";

import { motion } from "framer-motion";
import { Download, FileArchive, FileText } from "lucide-react";

interface DownloadCardProps {
  title: string;
  description: string;
  file: string;
  type: "PDF" | "ZIP";
  size: string;
}

export default function DownloadCard({
  title,
  description,
  file,
  type,
  size,
}: DownloadCardProps) {
  return (
    <motion.div
      whileHover={{ y: -8 }}
      transition={{ duration: 0.3 }}
      className="group glass rounded-[2rem] border border-white/10 p-7 transition-all duration-300 hover:border-gold/40"
    >
      {/* Icon */}
      <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-gold/10">

        {type === "PDF" ? (
          <FileText className="h-8 w-8 text-gold" />
        ) : (
          <FileArchive className="h-8 w-8 text-gold" />
        )}

      </div>

      {/* Title */}
      <h3 className="mt-6 text-2xl font-display text-white">
        {title}
      </h3>

      {/* Description */}
      <p className="mt-4 leading-7 text-white/65">
        {description}
      </p>

      {/* File Info */}
      <div className="mt-6 flex items-center gap-3">

        <span className="rounded-full border border-gold/20 bg-gold/10 px-4 py-1 text-xs font-semibold uppercase tracking-[0.25em] text-gold">
          {type}
        </span>

        <span className="text-sm text-white/45">
          {size}
        </span>

      </div>

      {/* Download Button */}
      <a
        href={file}
        download
        className="mt-8 inline-flex items-center gap-3 rounded-full bg-gold px-6 py-3 font-semibold text-black transition-all duration-300 hover:scale-105 hover:shadow-[0_0_25px_rgba(212,175,55,0.35)]"
      >
        <Download className="h-5 w-5" />
        Download
      </a>
    </motion.div>
  );
}
