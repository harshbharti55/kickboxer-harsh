"use client";

import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import { ArrowUpRight, Handshake, Trophy, Calendar, Mail } from "lucide-react";

const EMAIL = "kickboxerharsh@gmail.com";

export default function ContactSection() {
  const [name, setName] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const emailUrl = useMemo(() => {
    const body = `Name: ${name}\nSubject: ${subject}\nMessage: ${message}`;
    return `mailto:${EMAIL}?subject=${encodeURIComponent(subject || "Website enquiry")}&body=${encodeURIComponent(body)}`;
  }, [name, subject, message]);

  const opportunities = [
    { title: "Sponsorship", text: "Brand partnerships and athlete support", icon: Handshake },
    { title: "Media", text: "Interviews, stories and press", icon: Calendar },
    { title: "Events", text: "Sport events and appearances", icon: Trophy },
  ];

  return (
    <section id="contact" className="relative overflow-hidden bg-[#070707] py-24 sm:py-28">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(56,189,248,0.1),transparent_60%)]" aria-hidden="true" />
      <div className="absolute inset-0 grid-overlay opacity-20" aria-hidden="true" />
      <div className="container-page relative z-10">
        <motion.div initial={{ opacity: 0, y: 28 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.55 }} className="mx-auto mb-14 max-w-3xl text-center">
          <div className="inline-flex rounded-full border border-[#38bdf8]/30 bg-[#38bdf8]/10 px-5 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-[#7dd3fc]">Contact & Sponsorship</div>
          <h2 className="mt-6 font-display text-4xl text-white sm:text-6xl">Let’s build something <span className="block text-gradient">extraordinary.</span></h2>
          <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-white/65 sm:text-lg">For sponsorships, media, events and brand collaborations, reach out by email.</p>
        </motion.div>
        <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
          <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="space-y-5">
            <div className="glass rounded-3xl p-6 sm:p-8">
              <p className="text-xs font-bold uppercase tracking-[0.28em] text-[#7dd3fc]">Direct contact</p>
              <h3 className="mt-3 text-2xl font-black text-white">One inbox. Real opportunities.</h3>
              <p className="mt-3 leading-7 text-white/60">Available for sponsorship discussions, media interviews and sports partnerships.</p>
              <a href={`mailto:${EMAIL}`} className="mt-6 flex items-center gap-4 rounded-2xl border border-white/10 bg-white/[0.035] p-4 transition hover:border-[#38bdf8]/50">
                <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#38bdf8]/10 text-[#7dd3fc]"><Mail className="h-5 w-5" /></span>
                <span className="min-w-0"><span className="block text-xs uppercase tracking-[0.2em] text-white/40">Email only</span><span className="mt-1 block break-all text-sm font-semibold text-white sm:text-base">{EMAIL}</span></span>
                <ArrowUpRight className="ml-auto h-4 w-4 shrink-0 text-[#7dd3fc]" />
              </a>
            </div>
            <div className="grid gap-3 sm:grid-cols-3 lg:grid-cols-1">
              {opportunities.map(({ title, text, icon: Icon }) => <div key={title} className="flex items-center gap-4 rounded-2xl border border-white/10 bg-white/[0.025] p-4"><span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#38bdf8]/10 text-[#7dd3fc]"><Icon className="h-5 w-5" /></span><span><span className="block font-bold text-white">{title}</span><span className="mt-1 block text-sm text-white/50">{text}</span></span></div>)}
            </div>
          </motion.div>
          <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="glass rounded-3xl p-6 sm:p-8">
            <p className="text-xs font-bold uppercase tracking-[0.28em] text-[#7dd3fc]">Start a conversation</p>
            <h3 className="mt-3 text-2xl font-black text-white">Tell me what you have in mind.</h3>
            <p className="mt-3 text-sm leading-6 text-white/55">This form opens your email app with the details filled in. It does not send anything automatically.</p>
            <form className="mt-6 space-y-4" onSubmit={(event) => { event.preventDefault(); window.location.href = emailUrl; }}>
              <label className="block text-sm font-semibold text-white/75">Your name<input required value={name} onChange={(event) => setName(event.target.value)} className="mt-2 w-full rounded-xl border border-white/15 bg-black/50 px-4 py-3 text-base text-white outline-none transition focus:border-[#38bdf8]" placeholder="Name" autoComplete="name" /></label>
              <label className="block text-sm font-semibold text-white/75">Subject<input value={subject} onChange={(event) => setSubject(event.target.value)} className="mt-2 w-full rounded-xl border border-white/15 bg-black/50 px-4 py-3 text-base text-white outline-none transition focus:border-[#38bdf8]" placeholder="Sponsorship enquiry" /></label>
              <label className="block text-sm font-semibold text-white/75">Message<textarea required minLength={10} rows={5} value={message} onChange={(event) => setMessage(event.target.value)} className="mt-2 w-full resize-y rounded-xl border border-white/15 bg-black/50 px-4 py-3 text-base text-white outline-none transition focus:border-[#38bdf8]" placeholder="Tell me a little about your enquiry..." /></label>
              <button type="submit" className="inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-xl bg-[#38bdf8] px-5 py-3 text-sm font-extrabold text-white transition hover:bg-[#ff4058] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#38bdf8]">Prepare email <ArrowUpRight className="h-4 w-4" /></button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
