export const metadata = {
  title: "Cookie Policy | Harsh Bharti",
  description:
    "Cookie Policy for the official website of Harsh Bharti.",
};

export default function CookiePolicyPage() {
  return (
    <main className="bg-black text-white">

      <section className="container-page py-24">

        <div className="mx-auto max-w-4xl">

          <span className="rounded-full border border-gold/20 bg-gold/10 px-5 py-2 text-xs font-semibold uppercase tracking-[0.35em] text-gold">
            Legal
          </span>

          <h1 className="mt-8 font-display text-5xl sm:text-6xl">
            Cookie Policy
          </h1>

          <p className="mt-6 text-white/60">
            Last Updated: July 2026
          </p>

          <div className="glass mt-12 space-y-10 rounded-[2rem] border border-white/10 p-10">

            <section>
              <h2 className="text-2xl font-semibold text-gold">
                What Are Cookies?
              </h2>

              <p className="mt-4 leading-8 text-white/70">
                Cookies are small text files stored on your device to improve
                your browsing experience, remember preferences and help us
                understand how visitors use this website.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gold">
                How We Use Cookies
              </h2>

              <p className="mt-4 leading-8 text-white/70">
                Cookies may be used to improve website performance, analyze
                visitor traffic, remember user preferences and enhance the
                overall browsing experience.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gold">
                Third-Party Cookies
              </h2>

              <p className="mt-4 leading-8 text-white/70">
                Trusted third-party services such as Google Analytics or
                Vercel Analytics may place cookies to measure website usage
                and performance.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gold">
                Managing Cookies
              </h2>

              <p className="mt-4 leading-8 text-white/70">
                You can control or delete cookies through your browser
                settings. Disabling cookies may affect certain website
                features and functionality.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gold">
                Contact
              </h2>

              <p className="mt-4 leading-8 text-white/70">
                If you have any questions about this Cookie Policy, please
                contact us through the Contact page.
              </p>
            </section>

          </div>

        </div>

      </section>

    </main>
  );
}
