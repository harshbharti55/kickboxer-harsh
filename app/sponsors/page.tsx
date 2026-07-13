"use client";

import { motion } from "framer-motion";
import {
  Trophy,
  Handshake,
  Globe,
  ArrowRight,
} from "lucide-react";

export default function SponsorsPage() {
  return (
    <main className="bg-black text-white overflow-hidden">

      {/* Hero */}
      <section className="relative py-28">

        {/* Background */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(212,175,55,0.10),transparent_60%)]" />
        <div className="absolute inset-0 grid-overlay opacity-20" />

        <div className="container-page relative z-10">

          <motion.div
            initial={{ opacity: 0, y: 35 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mx-auto max-w-4xl text-center"
          >

            {/* Badge */}
            <div className="inline-flex items-center gap-2 rounded-full border border-gold/20 bg-gold/10 px-5 py-2 text-xs font-semibold uppercase tracking-[0.35em] text-gold">
              <Handshake className="h-4 w-4" />
              Sponsorship Opportunities
            </div>

            {/* Heading */}
            <h1 className="mt-8 font-display text-5xl sm:text-6xl lg:text-7xl">

              Let's Build

              <span className="block text-gradient">
                Success Together
              </span>

            </h1>

            {/* Description */}

            <p className="mx-auto mt-8 max-w-3xl text-lg leading-8 text-white/70">

              I'm looking for visionary brands, organizations and partners
              who believe in excellence, discipline and the future of Indian
              kickboxing.

            </p>

          </motion.div>

          {/* Stats */}

          <div className="mt-20 grid gap-6 md:grid-cols-3">

            <motion.div
              whileHover={{ y: -8 }}
              className="glass rounded-3xl border border-white/10 p-8 text-center"
            >

              <Trophy className="mx-auto h-10 w-10 text-gold" />

              <h3 className="mt-5 text-3xl font-bold">
                National
              </h3>

              <p className="mt-2 text-white/60">
                Medal Winning Athlete
              </p>

            </motion.div>

            <motion.div
              whileHover={{ y: -8 }}
              className="glass rounded-3xl border border-white/10 p-8 text-center"
            >

              <Globe className="mx-auto h-10 w-10 text-gold" />

              <h3 className="mt-5 text-3xl font-bold">
                India
              </h3>

              <p className="mt-2 text-white/60">
                Representing Internationally
              </p>

            </motion.div>

            <motion.div
              whileHover={{ y: -8 }}
              className="glass rounded-3xl border border-white/10 p-8 text-center"
            >

              <Handshake className="mx-auto h-10 w-10 text-gold" />

              <h3 className="mt-5 text-3xl font-bold">
                Open
              </h3>

              <p className="mt-2 text-white/60">
                Sponsorship Available
              </p>

            </motion.div>

          </div>

        </div>

      </section>
            {/* Sponsorship Packages */}

      <section className="container-page py-24">

        <div className="mx-auto max-w-3xl text-center">

          <p className="text-sm uppercase tracking-[0.35em] text-gold">
            Sponsorship Packages
          </p>

          <h2 className="mt-4 font-display text-5xl text-white">
            Partnership Opportunities
          </h2>

          <p className="mt-6 text-lg leading-8 text-white/70">
            Choose the partnership level that best fits your brand. Every
            sponsorship directly supports my journey toward national and
            international kickboxing success.
          </p>

        </div>

        <div className="mt-20 grid gap-8 lg:grid-cols-2 xl:grid-cols-4">

          {/* Bronze */}

          <motion.div
            whileHover={{
              y: -10,
            }}
            className="glass rounded-[2rem] border border-amber-700/30 p-8 transition-all duration-300"
          >

            <span className="rounded-full bg-amber-700/20 px-4 py-2 text-xs font-bold uppercase tracking-[0.3em] text-amber-400">
              Bronze
            </span>

            <h3 className="mt-6 text-3xl font-display text-white">
              Support Partner
            </h3>

            <ul className="mt-8 space-y-4 text-white/70">

              <li>✓ Website Logo</li>

              <li>✓ Social Media Mention</li>

              <li>✓ Appreciation Certificate</li>

              <li>✓ Event Recognition</li>

            </ul>

            <button className="mt-10 w-full rounded-full border border-amber-700/30 py-3 font-semibold text-amber-400 transition hover:bg-amber-700/20">
              Choose Bronze
            </button>

          </motion.div>

          {/* Silver */}

          <motion.div
            whileHover={{
              y: -10,
            }}
            className="glass rounded-[2rem] border border-gray-400/20 p-8 transition-all duration-300"
          >

            <span className="rounded-full bg-gray-500/20 px-4 py-2 text-xs font-bold uppercase tracking-[0.3em] text-gray-300">
              Silver
            </span>

            <h3 className="mt-6 text-3xl font-display text-white">
              Official Partner
            </h3>

            <ul className="mt-8 space-y-4 text-white/70">

              <li>✓ Everything in Bronze</li>

              <li>✓ Jersey Logo</li>

              <li>✓ Media Mentions</li>

              <li>✓ Event Photos</li>

              <li>✓ Brand Promotion</li>

            </ul>

            <button className="mt-10 w-full rounded-full border border-gray-400/20 py-3 font-semibold text-white transition hover:bg-white/10">
              Choose Silver
            </button>

          </motion.div>

          {/* Gold */}

          <motion.div
            whileHover={{
              y: -10,
            }}
            className="glass rounded-[2rem] border border-gold/30 p-8 transition-all duration-300 hover:border-gold"
          >

            <span className="rounded-full bg-gold/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.3em] text-gold">
              Gold
            </span>

            <h3 className="mt-6 text-3xl font-display text-white">
              Premium Partner
            </h3>

            <ul className="mt-8 space-y-4 text-white/70">

              <li>✓ Everything in Silver</li>

              <li>✓ Training Gear Branding</li>

              <li>✓ Promotional Videos</li>

              <li>✓ Campaign Collaboration</li>

              <li>✓ Social Campaigns</li>

              <li>✓ Priority Exposure</li>

            </ul>

            <button className="mt-10 w-full rounded-full bg-gold py-3 font-semibold text-black transition hover:scale-105">
              Choose Gold
            </button>

          </motion.div>

          {/* Title Sponsor */}

          <motion.div
            whileHover={{
              y: -10,
              scale: 1.02,
            }}
            className="relative overflow-hidden rounded-[2rem] border border-gold bg-gradient-to-b from-gold/20 to-black p-8"
          >

            <div className="absolute right-0 top-0 rounded-bl-3xl bg-gold px-5 py-2 text-xs font-bold uppercase tracking-[0.3em] text-black">
              BEST
            </div>

            <span className="rounded-full bg-gold px-4 py-2 text-xs font-bold uppercase tracking-[0.3em] text-black">
              Title Sponsor
            </span>

            <h3 className="mt-6 text-3xl font-display text-white">
              Exclusive Partner
            </h3>

            <ul className="mt-8 space-y-4 text-white/80">

              <li>✓ Everything Included</li>

              <li>✓ Front Jersey Branding</li>

              <li>✓ International Exposure</li>

              <li>✓ Press Conference Branding</li>

              <li>✓ Exclusive Campaigns</li>

              <li>✓ Long-Term Partnership</li>

              <li>✓ Highest Brand Visibility</li>

            </ul>

            <button className="mt-10 flex w-full items-center justify-center gap-2 rounded-full bg-gold py-4 font-bold text-black transition hover:scale-105">

              Become Title Sponsor

              <ArrowRight className="h-5 w-5" />

            </button>

          </motion.div>

        </div>

      </section>
            {/* Why Partner With Me */}

      <section className="container-page py-24">

        <div className="mx-auto max-w-3xl text-center">

          <p className="text-sm uppercase tracking-[0.35em] text-gold">
            Why Sponsor Me
          </p>

          <h2 className="mt-4 font-display text-5xl text-white">
            More Than A Partnership
          </h2>

          <p className="mt-6 text-lg leading-8 text-white/70">
            Partnering with me means supporting an ambitious Indian athlete
            committed to excellence while creating authentic brand exposure
            through competitions, media, and digital platforms.
          </p>

        </div>

        <div className="mt-20 grid gap-8 lg:grid-cols-2">

          {/* Left */}

          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="glass rounded-[2.5rem] border border-white/10 p-10"
          >

            <p className="text-sm uppercase tracking-[0.35em] text-gold">
              Partnership Benefits
            </p>

            <h3 className="mt-5 text-4xl font-display text-white">
              Why Brands Choose Athletes
            </h3>

            <p className="mt-6 leading-8 text-white/70">
              Athletes build trust, inspire audiences and create meaningful
              brand stories. Together we can deliver authentic campaigns,
              community engagement and long-term visibility.
            </p>

            <div className="mt-10 space-y-6">

              {[
                "National & International Brand Exposure",
                "Authentic Athlete Storytelling",
                "Social Media Campaigns",
                "Professional Brand Representation",
                "Media & Press Visibility",
                "Event Appearances",
              ].map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-4 rounded-2xl border border-white/10 bg-white/5 p-4"
                >
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gold text-black font-bold">
                    ✓
                  </div>

                  <span className="text-white/80">
                    {item}
                  </span>
                </div>
              ))}

            </div>

          </motion.div>

          {/* Right */}

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="glass rounded-[2.5rem] border border-white/10 p-10"
          >

            <p className="text-sm uppercase tracking-[0.35em] text-gold">
              Brand Benefits
            </p>

            <div className="mt-10 grid gap-6 sm:grid-cols-2">

              {[
                {
                  number: "01",
                  title: "Brand Visibility",
                  text: "Logo placement across website, competition apparel and promotional materials.",
                },
                {
                  number: "02",
                  title: "Digital Promotion",
                  text: "Exposure through Instagram, LinkedIn, X and future content campaigns.",
                },
                {
                  number: "03",
                  title: "Media Coverage",
                  text: "Brand recognition during interviews, news articles and competitions.",
                },
                {
                  number: "04",
                  title: "Professional Image",
                  text: "Associate your brand with discipline, dedication and sporting excellence.",
                },
              ].map((benefit) => (
                <motion.div
                  key={benefit.number}
                  whileHover={{ y: -6 }}
                  className="rounded-3xl border border-white/10 bg-white/5 p-6 transition-all duration-300 hover:border-gold/40"
                >

                  <span className="text-5xl font-display text-gold/25">
                    {benefit.number}
                  </span>

                  <h4 className="mt-4 text-xl font-semibold text-white">
                    {benefit.title}
                  </h4>

                  <p className="mt-3 leading-7 text-white/65">
                    {benefit.text}
                  </p>

                </motion.div>
              ))}

            </div>

          </motion.div>

        </div>

      </section>
            {/* FAQ */}

      <section className="container-page py-24">

        <div className="mx-auto max-w-3xl text-center">

          <p className="text-sm uppercase tracking-[0.35em] text-gold">
            Frequently Asked Questions
          </p>

          <h2 className="mt-4 font-display text-5xl text-white">
            Sponsorship FAQ
          </h2>

        </div>

        <div className="mt-16 grid gap-6 lg:grid-cols-2">

          {[
            {
              q: "How can my brand become a sponsor?",
              a: "Simply contact me through the Contact page or WhatsApp. I'll provide a sponsorship proposal tailored to your brand.",
            },
            {
              q: "Do you work with local and international brands?",
              a: "Yes. I welcome partnerships with local businesses as well as national and international companies.",
            },
            {
              q: "Can sponsorship be customized?",
              a: "Absolutely. Every partnership can be designed around your marketing goals and budget.",
            },
            {
              q: "What industries do you work with?",
              a: "Sports, fitness, health, education, nutrition, apparel, technology, travel and lifestyle brands are all welcome.",
            },
          ].map((item) => (
            <motion.div
              key={item.q}
              whileHover={{ y: -4 }}
              className="glass rounded-3xl border border-white/10 p-7"
            >
              <h3 className="text-xl font-semibold text-white">
                {item.q}
              </h3>

              <p className="mt-4 leading-7 text-white/65">
                {item.a}
              </p>
            </motion.div>
          ))}

        </div>

      </section>

      {/* Sponsor CTA */}

      <section className="container-page pb-28">

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="overflow-hidden rounded-[2.5rem] border border-gold/20 bg-gradient-to-r from-gold/10 via-black to-black p-12"
        >

          <div className="mx-auto max-w-4xl text-center">

            <p className="text-sm uppercase tracking-[0.35em] text-gold">
              Let's Work Together
            </p>

            <h2 className="mt-5 font-display text-5xl text-white">
              Ready To Become
              <span className="block text-gradient">
                A Partner?
              </span>
            </h2>

            <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-white/70">
              Every sponsorship helps me compete at the highest level while
              giving your brand authentic visibility through sport, media,
              competitions and digital storytelling.
            </p>

            <div className="mt-10 flex flex-wrap justify-center gap-5">

              <a
                href="/downloads/sponsorship-proposal.pdf"
                className="rounded-full bg-gold px-8 py-4 font-semibold text-black transition hover:scale-105"
              >
                Download Proposal
              </a>

              <a
                href="/contact"
                className="rounded-full border border-white/15 bg-white/5 px-8 py-4 font-semibold text-white transition hover:border-gold/40 hover:bg-white/10"
              >
                Contact Me
              </a>

              <a
                href="https://wa.me/919816875780"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full border border-gold/30 bg-gold/10 px-8 py-4 font-semibold text-gold transition hover:bg-gold hover:text-black"
              >
                WhatsApp
              </a>

            </div>

          </div>

        </motion.div>

      </section>

    </main>
  );
}
