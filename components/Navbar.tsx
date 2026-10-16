"use client";

import Link from "next/link";

const links = [
  { label: "Home", href: "/" },
  { label: "Articles", href: "/articles" },
  { label: "About", href: "/#about" },
  { label: "Record", href: "/achievements" },
  { label: "Training", href: "/#training" },
  { label: "Media", href: "/media" },
  { label: "Athlete Profile", href: "/athlete-profile" },
  { label: "CV", href: "/cv" },
  { label: "Sponsorship", href: "/sponsorship" },
  { label: "Contact", href: "/#contact" },
];

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-zinc-800 bg-black/90 backdrop-blur">
      <nav aria-label="Main navigation" className="mx-auto flex max-w-7xl items-center justify-between gap-5 px-4 py-4 sm:px-6">
        <Link href="/" className="shrink-0 text-2xl font-bold text-yellow-400" aria-label="Harsh Bharti home">HB</Link>
        <div className="flex max-w-full flex-wrap justify-end gap-x-5 gap-y-2 text-sm text-gray-300">
          {links.map((link) => <Link key={link.label} href={link.href} className="transition hover:text-yellow-400">{link.label}</Link>)}
        </div>
      </nav>
    </header>
  );
}
