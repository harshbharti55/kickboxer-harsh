export const metadata = {
  title: "Terms & Conditions | Harsh Bharti",
  description:
    "Terms and Conditions for the official website of Harsh Bharti.",
};

export default function TermsPage() {
  return (
    <main className="bg-black text-white">

      <section className="container-page py-24">

        <div className="mx-auto max-w-4xl">

          <span className="rounded-full border border-gold/20 bg-gold/10 px-5 py-2 text-xs font-semibold uppercase tracking-[0.35em] text-gold">
            Legal
          </span>

          <h1 className="mt-8 font-display text-5xl sm:text-6xl">
            Terms & Conditions
          </h1>

          <p className="mt-6 text-white/60">
            Last Updated: July 2026
          </p>

          <div className="glass mt-12 space-y-10 rounded-[2rem] border border-white/10 p-10">

            <section>
              <h2 className="text-2xl font-semibold text-gold">
                Acceptance of Terms
              </h2>

              <p className="mt-4 leading-8 text-white/70">
                By using this website, you agree to comply with these Terms
                and Conditions. If you do not agree, please discontinue the
                use of this website.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gold">
                Intellectual Property
              </h2>

              <p className="mt-4 leading-8 text-white/70">
                All photographs, videos, logos, articles and other content
                published on this website are the property of Harsh Bharti
                unless otherwise stated. Unauthorized use or reproduction is
                prohibited.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gold">
                Website Use
              </h2>

              <p className="mt-4 leading-8 text-white/70">
                Visitors agree to use this website only for lawful purposes
                and not engage in activities that may damage, disrupt or
                misuse the website or its content.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gold">
                External Links
              </h2>

              <p className="mt-4 leading-8 text-white/70">
                This website may contain links to third-party websites. We
                are not responsible for the content, privacy policies or
                practices of external websites.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gold">
                Limitation of Liability
              </h2>

              <p className="mt-4 leading-8 text-white/70">
                Every effort is made to keep the information on this website
                accurate and up to date. However, no guarantees are made
                regarding completeness, reliability or availability.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gold">
                Changes to These Terms
              </h2>

              <p className="mt-4 leading-8 text-white/70">
                These Terms & Conditions may be updated from time to time.
                Continued use of the website after changes are published
                constitutes acceptance of the updated terms.
              </p>
            </section>

          </div>

        </div>

      </section>

    </main>
  );
}
