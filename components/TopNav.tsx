'use client';

import Link from 'next/link';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import { useEffect, useState } from 'react';

const links = [
  { label: 'About', href: '/about' },
  { label: 'Achievements', href: '/achievements' },
  { label: 'Calendar', href: '/calendar' },
  { label: 'Media', href: '/media' },
  { label: 'Sponsors', href: '/sponsors' },
  { label: 'Contact', href: '/contact' },
];

export default function TopNav() {
  const [open, setOpen] = useState(false);
  useEffect(() => {
    const closeOnEscape = (event: KeyboardEvent) => { if (event.key === 'Escape') setOpen(false); };
    window.addEventListener('keydown', closeOnEscape);
    return () => window.removeEventListener('keydown', closeOnEscape);
  }, []);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/[0.09] bg-[#080808]/90 backdrop-blur-2xl">
      <div className="container-page flex h-[4.25rem] items-center justify-between gap-4 sm:h-[4.5rem]">
        <Link href="/" className="group flex min-w-0 items-center gap-2.5 sm:gap-3" onClick={() => setOpen(false)} aria-label="Harsh Bharti home">
          <span className="relative flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-white via-[#38bdf8] to-[#850b1d] text-sm font-black text-white shadow-[0_0_28px_rgba(56,189,248,.2)] sm:h-10 sm:w-10">HB</span>
          <span className="min-w-0"><span className="block truncate text-sm font-extrabold tracking-wide text-white sm:text-base">HARSH BHARTI</span><span className="mt-0.5 block truncate text-[9px] font-semibold uppercase tracking-[0.18em] text-white/45 sm:text-[10px] sm:tracking-[0.22em]">Indian Kickboxing Athlete</span></span>
        </Link>
        <nav aria-label="Main navigation" className="hidden items-center gap-5 xl:flex 2xl:gap-7">
          {links.map((link) => <Link key={link.href} href={link.href} className="whitespace-nowrap text-xs font-semibold text-white/60 transition hover:text-[#7dd3fc] 2xl:text-sm">{link.label}</Link>)}
        </nav>
        <div className="hidden items-center gap-3 xl:flex">
          <Link href="/cv" className="whitespace-nowrap text-xs font-semibold text-white/70 transition hover:text-white">Athlete CV</Link>
          <Link href="/sponsorship" className="inline-flex items-center gap-2 rounded-lg bg-[#38bdf8] px-4 py-2.5 text-xs font-extrabold text-white transition hover:-translate-y-0.5 hover:bg-[#ff4058]">Sponsor <ArrowUpRight className="h-3.5 w-3.5" /></Link>
        </div>
        <button type="button" onClick={() => setOpen((value) => !value)} aria-label={open ? 'Close navigation menu' : 'Open navigation menu'} aria-expanded={open} aria-controls="mobile-navigation" className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-white/15 bg-white/[0.04] text-white transition hover:border-[#38bdf8]/50 xl:hidden">{open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}</button>
      </div>
      {open ? <div id="mobile-navigation" className="border-t border-white/10 bg-[#0b0b0c]/[0.98] shadow-2xl backdrop-blur-2xl"><nav aria-label="Mobile navigation" className="container-page grid grid-cols-2 gap-2 py-4 sm:grid-cols-3">
        {links.map((link, index) => <Link key={link.href} href={link.href} onClick={() => setOpen(false)} className="flex min-h-12 items-center justify-between gap-2 rounded-xl border border-white/[0.07] bg-white/[0.025] px-3 py-3 text-sm font-semibold text-white/80 transition hover:border-[#38bdf8]/40 hover:bg-[#38bdf8]/[0.07] hover:text-white"><span>{link.label}</span><span className="text-[10px] text-white/25">0{index + 1}</span></Link>)}
        <Link href="/cv" onClick={() => setOpen(false)} className="flex min-h-12 items-center rounded-xl border border-white/[0.07] px-3 py-3 text-sm font-semibold text-white/80">Athlete CV</Link>
        <Link href="/sponsorship" onClick={() => setOpen(false)} className="col-span-2 flex min-h-12 items-center justify-center gap-2 rounded-xl bg-[#38bdf8] px-4 py-3 text-sm font-extrabold text-white sm:col-span-1">Become a sponsor <ArrowUpRight className="h-4 w-4" /></Link>
      </nav></div> : null}
    </header>
  );
}
