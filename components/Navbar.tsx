"use client";

import Link from "next/link";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 bg-black/80 backdrop-blur border-b border-zinc-800">
      <nav className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
        <Link href="/" className="text-2xl font-bold text-yellow-400">
          HB
        </Link>

        <div className="hidden md:flex gap-8 text-gray-300">
          <Link href="/">Home</Link>
          <Link href="/articles">Articles</Link>
          <Link href="/#about">About</Link>
          <Link href="/#record">Record</Link>
          <Link href="/#training">Training</Link>
          <Link href="/#media">Media</Link>
          <Link href="/#contact">Contact</Link>
        </div>
      </nav>
    </header>
  );
}
