"use client";

import { motion } from "framer-motion";
import { FaInstagram, FaFacebookF, FaLinkedinIn, FaEnvelope } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { Handshake, Trophy, Calendar, ArrowUpRight } from "lucide-react";

const EMAIL = "kickboxerharsh@gmail.com";
const SOCIALS = [
  { name: "Instagram", href: "https://www.instagram.com/harsh_bharti5", icon: FaInstagram },
  { name: "Facebook", href: "https://www.facebook.com/share/1Dw6ZKqKyE/", icon: FaFacebookF },
  { name: "X", href: "https://x.com/Harsh_bharti5", icon: FaXTwitter },
  { name: "LinkedIn", href: "https://www.linkedin.com/in/harsh-bharti-931b31251", icon: FaLinkedinIn },
];
const SERVICES = [
  { title: "Sponsorship", text: "Brand partnerships and athlete sponsorships", icon: Handshake },
  { title: "Media", text: "Interviews, podcasts and press enquiries", icon: Calendar },
  { title: "Events", text: "Seminars, competitions and appearances", icon: Trophy },
];

export default function ContactSection() {
  return (
    <section id="contact" className="relative overflow-hidden bg-black py-28">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(212,175,55,0.08),transparent_60%)]" />
      <div className="absolute inset-0 grid-overlay opacity-20" />
      <div className="container-page relative z-10">
        <motion.div initial={{ opacity: 0, y: 25 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mx-auto mb-14 max-w-3xl text-center">
          <div className="inline-flex rounded-full border border-gold/20 bg-gold/10 px-5 py-2 text-xs font-semibold uppercase tracking-[0.35em] text-gold">Contact & Sponsorship</div>
          <h2 className="mt-6 font-display text-5xl text-white sm:text-6xl">Let's Build Something <span className="block text-gradient">Extraordinary</span></h2>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-white/65">For sponsorship, media, events and partnership enquiries, please contact me by email.</p>
          <a href={`mailto:${EMAIL}?subject=Harsh%20Bharti%20Enquiry`} className="mt-8 inline-flex min-h-14 items-center justify-center gap-3 rounded-full bg-gold px-8 py-4 font-semibold text-black transition hover:scale-[1.02]"><FaEnvelope className="text-xl" />{EMAIL}<ArrowUpRight className="h-5 w-5" /></a>
        </motion.div>
        <div className="grid gap-8 lg:grid-cols-2">
          <div className="glass rounded-[2rem] border border-white/10 p-8">
            <h3 className="text-2xl font-display text-white">Available For</h3>
            <div className="mt-6 space-y-4">{SERVICES.map((service) => { const Icon = service.icon; return <div key={service.title} className="flex items-start gap-4 rounded-2xl border border-white/10 bg-white/5 p-5"><div className="rounded-xl bg-gold/10 p-3"><Icon className="h-6 w-6 text-gold" /></div><div><h4 className="font-semibold text-white">{service.title}</h4><p className="mt-1 text-white/60">{service.text}</p></div></div>; })}</div>
          </div>
          <div className="glass rounded-[2rem] border border-white/10 p-8">
            <h3 className="text-2xl font-display text-white">Follow My Journey</h3>
            <p className="mt-3 leading-7 text-white/60">Follow competition updates, training, and athlete news on my social channels.</p>
            <div className="mt-6 grid grid-cols-2 gap-4">{SOCIALS.map((social) => { const Icon = social.icon; return <a key={social.name} href={social.href} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 p-4 text-white transition hover:border-gold/40"><Icon className="text-xl text-gold" /><span>{social.name}</span><ArrowUpRight className="ml-auto h-4 w-4 text-white/40" /></a>; })}</div>
            <a href="/media/Harsh-Bharti-Athlete-Profile.pdf" className="mt-6 flex items-center justify-between rounded-2xl border border-gold/20 bg-gold/5 p-5 transition hover:border-gold/50"><span><span className="block text-xs uppercase tracking-[0.25em] text-gold">Athlete Portfolio</span><span className="mt-1 block font-semibold text-white">Download Media Kit</span></span><ArrowUpRight className="h-5 w-5 text-gold" /></a>
          </div>
        </div>
      </div>
    </section>
  );
}
