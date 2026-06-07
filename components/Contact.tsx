"use client";

import React, { useMemo, useState } from "react";
import {
  FaInstagram,
  FaFacebookF,
  FaLinkedinIn,
  FaWhatsapp,
  FaPhoneAlt,
  FaEnvelope,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const PHONE_NUMBER = "9816875780";
const EMAIL = "Kickboxerharsh@gmail.com";

const SOCIALS = [
  {
    name: "Instagram",
    href: "https://www.instagram.com/harsh_bharti5?igsh=NmhnZ3M3MWdhbDMw",
    icon: FaInstagram,
  },
  {
    name: "Facebook",
    href: "https://www.facebook.com/share/1Dw6ZKqKyE/",
    icon: FaFacebookF,
  },
  {
    name: "X",
    href: "https://x.com/Harsh_bharti5",
    icon: FaXTwitter,
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/harsh-bharti-931b31251",
    icon: FaLinkedinIn,
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
      className="relative overflow-hidden py-24"
    >
      <div className="absolute inset-0 bg-hero-radial opacity-60" />
      <div className="absolute inset-0 grid-overlay opacity-20" />

      <div className="container-page relative">
        <div className="mb-14 text-center">
          <div className="inline-flex rounded-full border border-gold/20 bg-gold/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-gold">
            Contact & Booking
          </div>

          <h2 className="mt-6 font-display text-5xl text-white sm:text-6xl">
            Let’s <span className="text-gradient">Connect</span>
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-white/60">
            Reach out for collaborations, bookings, sponsorships or training inquiries.
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-[1fr_1fr]">

          {/* LEFT */}

          <div className="glass rounded-[2rem] p-8 shadow-glow">

            <div className="space-y-4">

              <div className="rounded-2xl border border-white/10 bg-black/30 p-5">
                <p className="flex items-center gap-2 text-gold">
                  <FaPhoneAlt />
                  Phone
                </p>

                <a
                  href={`tel:${PHONE_NUMBER}`}
                  className="mt-2 block text-xl font-semibold text-white"
                >
                  +91 {PHONE_NUMBER}
                </a>
              </div>

              <div className="rounded-2xl border border-white/10 bg-black/30 p-5">
                <p className="flex items-center gap-2 text-gold">
                  <FaEnvelope />
                  Email
                </p>

                <a
                  href={`mailto:${EMAIL}`}
                  className="mt-2 block text-lg text-white"
                >
                  {EMAIL}
                </a>
              </div>
            </div>

            <div className="mt-8 grid grid-cols-2 gap-4">

              {SOCIALS.map((social) => {
                const Icon = social.icon;

                return (
                  <a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noreferrer"
                    className="group rounded-2xl border border-white/10 bg-black/30 p-5 transition hover:border-gold/30"
                  >
                    <div className="flex items-center gap-4">
                      <div className="rounded-xl bg-gold/10 p-3 text-gold">
                        <Icon />
                      </div>

                      <span className="font-semibold text-white">
                        {social.name}
                      </span>
                    </div>
                  </a>
                );
              })}
            </div>
          </div>

          {/* RIGHT */}

          <div className="glass rounded-[2rem] p-8 shadow-glow">

            <h3 className="text-3xl font-semibold text-white">
              Send Inquiry
            </h3>

            <form
              onSubmit={(e) => {
                e.preventDefault();
                window.open(
                  whatsappUrl,
                  "_blank",
                  "noopener,noreferrer"
                );
              }}
              className="mt-8 space-y-5"
            >
              <input
                placeholder="Your Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full rounded-2xl border border-white/10 bg-black/30 px-5 py-4 text-white outline-none focus:border-gold/40"
              />

              <input
                placeholder="Phone Number"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className="w-full rounded-2xl border border-white/10 bg-black/30 px-5 py-4 text-white outline-none focus:border-gold/40"
              />

              <input
                placeholder="Subject"
                value={subject}
                onChange={(e) => setSubject(e.target.value)}
                className="w-full rounded-2xl border border-white/10 bg-black/30 px-5 py-4 text-white outline-none focus:border-gold/40"
              />

              <textarea
                rows={5}
                placeholder="Write your message..."
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="w-full rounded-2xl border border-white/10 bg-black/30 px-5 py-4 text-white outline-none focus:border-gold/40"
              />

              <button
                className="inline-flex w-full items-center justify-center gap-3 rounded-full bg-white px-6 py-4 font-semibold text-black transition hover:scale-[1.02]"
              >
                <FaWhatsapp />
                Send on WhatsApp
              </button>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
}