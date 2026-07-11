export default function SponsorsPage() {
  return (
    <main className="container-page py-24">
      <h1 className="text-5xl font-bold text-white">Sponsors & Partners</h1>

      <p className="mt-6 max-w-3xl text-white/70">
        I am open to sponsorships and brand partnerships with organizations
        that support excellence in sport, athlete development, and inspiring
        the next generation.
      </p>

      <div className="mt-10 grid gap-6 md:grid-cols-3">
        <div className="glass rounded-3xl p-6">
          <h3 className="text-xl font-semibold text-gold">Title Sponsor</h3>
          <p className="mt-3 text-white/70">
            Logo on competition gear, website, social media, and interviews.
          </p>
        </div>

        <div className="glass rounded-3xl p-6">
          <h3 className="text-xl font-semibold text-gold">Official Partner</h3>
          <p className="mt-3 text-white/70">
            Digital campaigns, event appearances, and content collaborations.
          </p>
        </div>

        <div className="glass rounded-3xl p-6">
          <h3 className="text-xl font-semibold text-gold">Support Partner</h3>
          <p className="mt-3 text-white/70">
            Support my national and international kickboxing journey.
          </p>
        </div>
      </div>
    </main>
  );
}
