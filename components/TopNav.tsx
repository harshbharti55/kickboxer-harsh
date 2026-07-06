'use client';


import TopNav from "@/components/TopNav";
import { Menu, X } from 'lucide-react';
import { useState } from 'react';

const links = [
  ['About', '#about'],
  ['Stats', '#stats'],
  ['Record', '#record'],
  ['Training', '#training'],
  ['Media', '#media'],
  ['Contact', '#contact'],
];

export default function TopNav() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-black/50 backdrop-blur-xl">
      <div className="container-page flex h-16 items-center justify-between">
        <a href="#home" className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-gradient-to-br from-redbrand to-gold text-sm font-bold text-black">
            HB
          </div>
          <div>
            <p className="text-sm font-semibold text-white">Harsh Bharti</p>
            <p className="text-xs text-white/50">Kick Boxer's
            
             Portfolio</p>
          </div>
        </a>

        <nav className="hidden items-center gap-6 md:flex">
          {links.map(([label, href]) => (
            <a key={href} href={href} className="text-sm text-white/70 transition hover:text-white">
              {label}
            </a>
          ))}
        </nav>

        <button
          onClick={() => setOpen((s) => !s)}
          className="inline-flex h-10 w-10 items-center justify-center rounded-2xl border border-white/10 bg-white/5 md:hidden"
          aria-label="Toggle navigation"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {open ? (
        <div className="border-t border-white/10 bg-black/80 px-4 py-4 backdrop-blur-xl md:hidden">
          <div className="container-page grid gap-3">
            {links.map(([label, href]) => (
              <a
                key={href}
                href={href}
                onClick={() => setOpen(false)}
                className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-white/80"
              >
                {label}
              </a>
            ))}
          </div>
        </div>
      ) : null}
    </header>
  );
}
