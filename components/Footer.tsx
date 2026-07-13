"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  FaInstagram,
  FaFacebookF,
  FaLinkedinIn,
  FaWhatsapp,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

import { boxer } from "@/data/site";

const SOCIALS = [
  {
    name: "Instagram",
    href: "https://www.instagram.com/harsh_bharti5",
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
  {
    name: "WhatsApp",
    href: "https://wa.me/919816875780",
    icon: FaWhatsapp,
  },
];

const LINKS = [
  { title: "Home", href: "/" },
  { title: "About", href: "/about" },
  { title: "Gallery", href: "/gallery" },
  { title: "Articles", href: "/articles" },
  { title: "Media", href: "/media" },
  { title: "Sponsors", href: "/sponsors" },
  { title: "Contact", href: "/contact" },
];

export default function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-white/10 bg-black">

      {/* Background Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(212,175,55,0.08),transparent_60%)]" />

      <div className="container-page relative z-10 py-20">

        <div className="grid gap-12 lg:grid-cols-[1.2fr_0.8fr_0.8fr]">

          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <p className="text-sm uppercase tracking-[0.35em] text-gold">
              Athlete Portfolio
            </p>

            <h2 className="mt-4 font-display text-4xl text-white">
              {boxer.name}
            </h2>

            <p className="mt-5 max-w-md leading-8 text-white/65">
              National kickboxing athlete representing India with the goal of
              competing at the highest international level and inspiring the
              next generation through discipline, dedication and excellence.
            </p>

            <Link
              href="/contact"
              className="mt-8 inline-flex rounded-full bg-gold px-7 py-3 font-semibold text-black transition hover:scale-105"
            >
              Work With Me
            </Link>
          </motion.div>

          {/* Navigation */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <h3 className="text-xl font-semibold text-white">
              Quick Links
            </h3>

            <div className="mt-6 grid gap-4">
              {LINKS.map((link) => (
                <Link
                  key={link.title}
                  href={link.href}
                  className="text-white/60 transition hover:text-gold"
                >
                  {link.title}
                </Link>
              ))}
            </div>
          </motion.div>

          {/* Social */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <h3 className="text-xl font-semibold text-white">
              Connect
            </h3>

            <div className="mt-6 flex flex-wrap gap-4">
              {SOCIALS.map((social) => {
                const Icon = social.icon;

                return (
                  <a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-white/5 text-white transition hover:border-gold hover:bg-gold hover:text-black"
                  >
                    <Icon />
                  </a>
                );
              })}
            </div>

            <div className="mt-8 rounded-2xl border border-gold/20 bg-gold/5 p-5">

              <p className="text-xs uppercase tracking-[0.3em] text-gold">
                Available For
              </p>

              <p className="mt-3 text-white/70">
                Sponsorships • Media • Speaking • Events • Brand Partnerships
              </p>

            </div>

          </motion.div>

        </div>

        {/* Bottom */}
        <div className="mt-16 flex flex-col items-center justify-between gap-5 border-t border-white/10 pt-8 text-center lg:flex-row">

          <p className="text-sm text-white/50">
            © {new Date().getFullYear()} {boxer.name}. All Rights Reserved.
          </p>

          <p className="text-sm text-white/40">
            Designed & Developed with ❤️ for champions.
          </p>

          <a
            href="#home"
            className="rounded-full border border-white/10 px-5 py-2 text-sm font-medium text-white transition hover:border-gold hover:text-gold"
          >
            ↑ Back to Top
          </a>

        </div>

      </div>
    </footer>
  );
}
