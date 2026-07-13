export const metadata = {
  title: "Privacy Policy | Harsh Bharti",
  description: "Privacy Policy for the official website of Harsh Bharti.",
};

export default function PrivacyPage() {
  return (
    <main className="bg-black text-white">

      <section className="container-page py-24">

        <div className="mx-auto max-w-4xl">

          <span className="rounded-full border border-gold/20 bg-gold/10 px-5 py-2 text-xs font-semibold uppercase tracking-[0.35em] text-gold">
            Legal
          </span>

          <h1 className="mt-8 font-display text-5xl sm:text-6xl">
            Privacy Policy
          </h1>

          <p className="mt-6 text-white/60">
            Last Updated: July 2026
          </p>

          <div className="glass mt-12 rounded-[2rem] border border-white/10 p-10 space-y-10">

            <section>
              <h2 className="text-2xl font-semibold text-gold">
                Information We Collect
              </h2>

              <p className="mt-4 leading-8 text-white/70">
                We may collect information you voluntarily provide through
                contact forms, sponsorship inquiries, email communication,
                or downloads from this website.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gold">
                How We Use Information
              </h2>

              <p className="mt-4 leading-8 text-white/70">
                Your information is used only to respond to inquiries,
                sponsorship requests, media communication and improve this
                website.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gold">
                Third-Party Services
              </h2>

              <p className="mt-4 leading-8 text-white/70">
                This website may use trusted services such as Google
                Analytics and Vercel Analytics to understand website
                performance.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gold">
                Contact
              </h2>

              <p className="mt-4 leading-8 text-white/70">
                If you have any questions regarding this Privacy Policy,
                please visit the Contact page.
              </p>
            </section>

          </div>

        </div>

      </section>

    </main>
  );
}
