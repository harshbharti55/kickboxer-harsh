import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight, Instagram, Facebook, Youtube, Linkedin, Mail } from "lucide-react";
import { athlete, SITE_URL } from "../../data/athlete";

export const metadata: Metadata = {
  title: "Contact Harsh Bharti | Sponsorship & Media",
  description:
    "Contact Indian kickboxing athlete Harsh Bharti for sponsorship, media, events, and brand partnerships. Email and official social profiles.",
  alternates: { canonical: `${SITE_URL}/contact` },
  openGraph: {
    title: "Contact Harsh Bharti",
    description: "Sponsorship, media, event, and brand partnership enquiries.",
    url: `${SITE_URL}/contact`,
    type: "website",
  },
};

const socialIcons = {
  Instagram,
  Facebook,
  YouTube: Youtube,
  LinkedIn: Linkedin,
};

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-[#080c17] pb-20 pt-28 text-white">
      <div className="container-page mx-auto max-w-5xl">
        <p className="text-xs font-bold uppercase tracking-[.3em] text-[#e8c56a]">
          Contact · Partnerships · Media
        </p>
        <h1 className="mt-4 max-w-3xl text-5xl font-black sm:text-6xl">
          Let’s talk about the <span className="text-[#e8c56a]">next round.</span>
        </h1>
        <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-300">
          For sponsorship proposals, media interviews, event invitations, or brand
          collaborations, contact Harsh by email or connect through the official
          social profiles below.
        </p>

        <section className="mt-10 grid gap-6 lg:grid-cols-[1fr_1.1fr]">
          <div className="rounded-3xl border border-[#e8c56a]/20 bg-gradient-to-br from-[#17223a] to-[#0b1020] p-7 sm:p-9">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#e8c56a]/10 text-[#e8c56a]">
              <Mail className="h-6 w-6" />
            </div>
            <h2 className="mt-5 text-2xl font-bold">Email enquiries</h2>
            <p className="mt-3 text-sm leading-6 text-slate-300">
              Email is the public contact method for all professional enquiries.
            </p>
            <a
              href={`mailto:${athlete.email}?subject=Website%20Enquiry%20for%20Harsh%20Bharti`}
              className="mt-6 inline-flex max-w-full items-center gap-2 break-all rounded-xl bg-[#e8c56a] px-5 py-3 font-bold text-[#080c17] transition hover:bg-[#f5d98b]"
            >
              {athlete.email}<ArrowUpRight className="h-4 w-4 shrink-0" />
            </a>
            <p className="mt-5 text-xs leading-5 text-slate-400">
              Public contact is email-only. No phone number is displayed.
            </p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/[.035] p-7 sm:p-9">
            <h2 className="text-2xl font-bold">Follow the journey</h2>
            <p className="mt-3 text-sm leading-6 text-slate-300">
              Follow training updates, competition moments, and athlete news on
              these supplied profiles.
            </p>
            <div className="mt-6 grid gap-3 sm:grid-cols-2">
              {athlete.socials.map((social) => {
                const Icon = socialIcons[social.label as keyof typeof socialIcons];
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Open Harsh Bharti on ${social.label} (opens in a new tab)`}
                    className="group flex min-h-14 items-center justify-between gap-3 rounded-xl border border-white/10 bg-white/[.035] px-4 py-3 transition hover:-translate-y-0.5 hover:border-[#e8c56a]/50 hover:bg-white/[.07] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#e8c56a]"
                  >
                    <span className="flex items-center gap-3 font-semibold">
                      <Icon className="h-5 w-5 text-[#e8c56a]" />{social.label}
                    </span>
                    <ArrowUpRight className="h-4 w-4 text-slate-400 transition group-hover:text-[#e8c56a]" />
                  </a>
                );
              })}
            </div>
          </div>
        </section>

        <div className="mt-8">
          <Link
            href="/sponsorship"
            className="inline-flex min-h-12 items-center gap-2 rounded-xl border border-white/15 px-5 py-3 font-semibold transition hover:border-[#e8c56a]/50 hover:text-[#e8c56a]"
          >
            Explore sponsorship opportunities <ArrowUpRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </main>
  );
}
