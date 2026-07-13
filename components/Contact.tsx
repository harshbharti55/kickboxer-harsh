"use client";

import React, { useMemo, useState } from "react";
import { motion } from "framer-motion";
import {
  FaInstagram,
  FaFacebookF,
  FaLinkedinIn,
  FaWhatsapp,
  FaPhoneAlt,
  FaEnvelope,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import {
  ArrowRight,
  Download,
  Handshake,
  Trophy,
  Calendar,
} from "lucide-react";

const PHONE_NUMBER = "9816875780";
const EMAIL = "kickboxerharsh@gmail.com";

const SOCIALS = [
  {
    name: "Instagram",
    href: "https://www.instagram.com/harsh_bharti5",
    icon: FaInstagram,
    color: "from-pink-500 to-orange-400",
  },
  {
    name: "Facebook",
    href: "https://www.facebook.com/share/1Dw6ZKqKyE/",
    icon: FaFacebookF,
    color: "from-blue-500 to-cyan-400",
  },
  {
    name: "X",
    href: "https://x.com/Harsh_bharti5",
    icon: FaXTwitter,
    color: "from-white to-gray-300",
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/harsh-bharti-931b31251",
    icon: FaLinkedinIn,
    color: "from-sky-500 to-blue-700",
  },
];

const SERVICES = [
  {
    title: "Sponsorship",
    icon: Handshake,
    text: "Brand partnerships & athlete sponsorships",
  },
  {
    title: "Media",
    icon: Calendar,
    text: "Interviews, podcasts & press",
  },
  {
    title: "Events",
    icon: Trophy,
    text: "Seminars, competitions & appearances",
  },
];

function buildWhatsAppLink(message: string) {
  return `https://wa.me/91${PHONE_NUMBER}?text=${encodeURIComponent(message)}`;
}

export default function ContactSection() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  const whatsappUrl = useMemo(() => {
    return buildWhatsAppLink(
`Name: ${name}
Phone: ${phone}
Subject: ${subject}
Message: ${message}`
    );
  }, [name, phone, subject, message]);

  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-black py-28"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(212,175,55,0.08),transparent_60%)]" />
      <div className="absolute inset-0 grid-overlay opacity-20" />

      <div className="container-page relative z-10">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mx-auto mb-16 max-w-3xl text-center"
        >
          <div className="inline-flex rounded-full border border-gold/20 bg-gold/10 px-5 py-2 text-xs font-semibold uppercase tracking-[0.35em] text-gold">
            Contact & Sponsorship
          </div>

          <h2 className="mt-6 font-display text-5xl text-white sm:text-6xl">
            Let's Build Something
            <span className="block text-gradient">
              Extraordinary
            </span>
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-white/65">
            Whether you're a sponsor, journalist, event organizer or fan,
            I'd love to hear from you. Let's create opportunities together.
          </p>
        </motion.div>

        <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr]">

          {/* LEFT PANEL */}
<motion.div
  initial={{ opacity: 0, x: -40 }}
  whileInView={{ opacity: 1, x: 0 }}
  viewport={{ once: true }}
  transition={{ duration: 0.7 }}
  className="space-y-8"
>

  {/* Contact Card */}
  <div className="glass rounded-[2.5rem] border border-white/10 p-8">

    <h3 className="text-3xl font-display text-white">
      Contact Information
    </h3>

    <p className="mt-4 leading-7 text-white/65">
      Available for sponsorships, media interviews, seminars,
      competitions and brand collaborations.
    </p>

    <div className="mt-8 space-y-5">

      <a
        href={`tel:${PHONE_NUMBER}`}
        className="group flex items-center gap-5 rounded-2xl border border-white/10 bg-white/5 p-5 transition-all duration-300 hover:border-gold/40 hover:bg-white/10"
      >
        <div className="rounded-2xl bg-gold/10 p-4">
          <FaPhoneAlt className="text-xl text-gold" />
        </div>

        <div>
          <p className="text-sm uppercase tracking-[0.2em] text-white/45">
            Phone
          </p>

          <p className="mt-1 text-lg font-semibold text-white">
            +91 {PHONE_NUMBER}
          </p>
        </div>
      </a>

      <a
        href={`mailto:${EMAIL}`}
        className="group flex items-center gap-5 rounded-2xl border border-white/10 bg-white/5 p-5 transition-all duration-300 hover:border-gold/40 hover:bg-white/10"
      >
        <div className="rounded-2xl bg-gold/10 p-4">
          <FaEnvelope className="text-xl text-gold" />
        </div>

        <div>
          <p className="text-sm uppercase tracking-[0.2em] text-white/45">
            Email
          </p>

          <p className="mt-1 text-lg text-white">
            {EMAIL}
          </p>
        </div>
      </a>

    </div>

  </div>

  {/* Services */}
  <div className="glass rounded-[2.5rem] border border-white/10 p-8">

    <p className="text-xs uppercase tracking-[0.35em] text-gold">
      Available For
    </p>

    <div className="mt-8 space-y-5">

      {SERVICES.map((service) => {
        const Icon = service.icon;

        return (
          <motion.div
            key={service.title}
            whileHover={{ x: 6 }}
            className="flex items-start gap-5 rounded-2xl border border-white/10 bg-white/5 p-5"
          >
            <div className="rounded-2xl bg-gold/10 p-4">
              <Icon className="h-6 w-6 text-gold" />
            </div>

            <div>

              <h4 className="text-lg font-semibold text-white">
                {service.title}
              </h4>

              <p className="mt-2 text-white/65">
                {service.text}
              </p>

            </div>

          </motion.div>
        );
      })}

    </div>

  </div>

  {/* Social Media */}
  <div className="glass rounded-[2.5rem] border border-white/10 p-8">

    <p className="text-xs uppercase tracking-[0.35em] text-gold">
      Follow My Journey
    </p>

    <div className="mt-8 grid grid-cols-2 gap-4">

      {SOCIALS.map((social) => {
        const Icon = social.icon;

        return (
          <motion.a
            key={social.name}
            href={social.href}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{
              y: -6,
            }}
            className="group rounded-2xl border border-white/10 bg-white/5 p-5 transition-all duration-300 hover:border-gold/40"
          >
            <div
              className={`inline-flex rounded-2xl bg-gradient-to-br ${social.color} p-4`}
            >
              <Icon className="text-xl text-white" />
            </div>

            <p className="mt-5 font-semibold text-white">
              {social.name}
            </p>

          </motion.a>
        );
      })}

    </div>

  </div>

  {/* Download Profile */}
  <motion.a
    whileHover={{
      scale: 1.02,
    }}
    href="/media/Harsh-Bharti-Athlete-Profile.pdf"
    className="flex items-center justify-between rounded-[2rem] border border-gold/30 bg-gradient-to-r from-gold/10 via-black to-black p-8 transition-all duration-300 hover:border-gold"
  >

    <div>

      <p className="text-xs uppercase tracking-[0.3em] text-gold">
        Athlete Portfolio
      </p>

      <h3 className="mt-2 text-2xl font-display text-white">
        Download Media Kit
      </h3>

      <p className="mt-3 text-white/65">
        Athlete profile, achievements, sponsorship opportunities and career highlights.
      </p>

    </div>

    <div className="rounded-full bg-gold p-4">
      <Download className="h-6 w-6 text-black" />
    </div>

  </motion.a>

</motion.div>
          {/* RIGHT PANEL */}
<motion.div
  initial={{ opacity: 0, x: 40 }}
  whileInView={{ opacity: 1, x: 0 }}
  viewport={{ once: true }}
  transition={{ duration: 0.7 }}
  className="glass rounded-[2.5rem] border border-white/10 p-8"
>
  <div className="flex items-center gap-4">

    <div className="rounded-2xl bg-gold/10 p-4">
      <FaWhatsapp className="text-2xl text-gold" />
    </div>

    <div>

      <p className="text-xs uppercase tracking-[0.35em] text-gold">
        Quick Inquiry
      </p>

      <h3 className="mt-1 text-3xl font-display text-white">
        Send a Message
      </h3>

    </div>

  </div>

  <p className="mt-5 leading-7 text-white/65">
    Fill in the details below and your message will open directly in
    WhatsApp. I usually respond within 24 hours.
  </p>

  <form
    onSubmit={(e) => {
      e.preventDefault();
      window.open(
        whatsappUrl,
        "_blank",
        "noopener,noreferrer"
      );
    }}
    className="mt-10 space-y-6"
  >

    {/* Name */}
    <div>

      <label className="mb-2 block text-sm font-medium text-white/70">
        Full Name
      </label>

      <input
        type="text"
        required
        placeholder="Your Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        className="w-full rounded-2xl border border-white/10 bg-white/5 px-5 py-4 text-white placeholder:text-white/30 outline-none transition-all duration-300 focus:border-gold"
      />

    </div>

    {/* Phone */}
    <div>

      <label className="mb-2 block text-sm font-medium text-white/70">
        Phone Number
      </label>

      <input
        type="tel"
        required
        placeholder="+91 XXXXX XXXXX"
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
        className="w-full rounded-2xl border border-white/10 bg-white/5 px-5 py-4 text-white placeholder:text-white/30 outline-none transition-all duration-300 focus:border-gold"
      />

    </div>

    {/* Subject */}
    <div>

      <label className="mb-2 block text-sm font-medium text-white/70">
        Subject
      </label>

      <input
        type="text"
        required
        placeholder="Sponsorship / Event / Media"
        value={subject}
        onChange={(e) => setSubject(e.target.value)}
        className="w-full rounded-2xl border border-white/10 bg-white/5 px-5 py-4 text-white placeholder:text-white/30 outline-none transition-all duration-300 focus:border-gold"
      />

    </div>

    {/* Message */}
    <div>

      <label className="mb-2 block text-sm font-medium text-white/70">
        Message
      </label>

      <textarea
        rows={6}
        required
        placeholder="Tell me about your sponsorship, event, collaboration or inquiry..."
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        className="w-full resize-none rounded-2xl border border-white/10 bg-white/5 px-5 py-4 text-white placeholder:text-white/30 outline-none transition-all duration-300 focus:border-gold"
      />

    </div>

    {/* Button */}
    <motion.button
      whileHover={{
        scale: 1.02,
      }}
      whileTap={{
        scale: 0.98,
      }}
      type="submit"
      className="inline-flex w-full items-center justify-center gap-3 rounded-full bg-gold px-8 py-5 font-semibold text-black transition-all duration-300 hover:shadow-[0_0_35px_rgba(212,175,55,0.35)]"
    >
      <FaWhatsapp className="text-xl" />

      Send on WhatsApp

      <ArrowRight className="h-5 w-5" />
    </motion.button>

  </form>

  {/* Small Note */}
  <div className="mt-8 rounded-2xl border border-gold/20 bg-gold/5 p-5">

    <p className="text-sm leading-7 text-white/60">
      <span className="font-semibold text-gold">
        Preferred inquiries:
      </span>{" "}
      Sponsorship proposals, media interviews, seminars, athlete
      collaborations, competitions and business opportunities.
    </p>

  </div>

</motion.div>
                  </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="mt-20 overflow-hidden rounded-[2.5rem] border border-gold/20 bg-gradient-to-r from-gold/10 via-black to-black p-10"
        >
          <div className="grid items-center gap-10 lg:grid-cols-[1.3fr_0.7fr]">

            {/* Left */}
            <div>

              <p className="text-sm uppercase tracking-[0.35em] text-gold">
                Partnership Opportunity
              </p>

              <h2 className="mt-5 text-4xl font-display text-white lg:text-5xl">
                Let's Build Something Great Together
              </h2>

              <p className="mt-6 max-w-3xl text-lg leading-8 text-white/70">
                I am actively seeking partnerships with brands, sponsors,
                sports organizations, media companies and event organizers
                who believe in dedication, performance and the future of
                Indian kickboxing.
              </p>

              <div className="mt-8 flex flex-wrap gap-4">

                <span className="rounded-full border border-gold/30 bg-gold/10 px-5 py-2 text-sm text-gold">
                  Sponsorship
                </span>

                <span className="rounded-full border border-white/10 bg-white/5 px-5 py-2 text-sm text-white">
                  Media
                </span>

                <span className="rounded-full border border-white/10 bg-white/5 px-5 py-2 text-sm text-white">
                  Speaking
                </span>

                <span className="rounded-full border border-white/10 bg-white/5 px-5 py-2 text-sm text-white">
                  Events
                </span>

              </div>

            </div>

            {/* Right */}
            <div className="flex flex-col gap-5">

              <a
                href={buildWhatsAppLink(
                  "Hello Harsh, I would like to discuss a sponsorship opportunity."
                )}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-3 rounded-full bg-gold px-8 py-4 font-semibold text-black transition-all duration-300 hover:scale-105"
              >
                <FaWhatsapp className="text-xl" />
                Sponsor Me
              </a>

              <a
                href={`mailto:${EMAIL}`}
                className="inline-flex items-center justify-center gap-3 rounded-full border border-white/15 bg-white/5 px-8 py-4 font-semibold text-white transition-all duration-300 hover:border-gold/40 hover:bg-white/10"
              >
                <FaEnvelope />
                Send Email
              </a>

            </div>

          </div>
        </motion.div>

      </div>
    </section>
  );
}
          
