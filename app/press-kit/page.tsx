export default function PressKitPage() {
  return (
    <main className="container-page py-24">
      <h1 className="text-5xl font-bold text-white">
        Press Kit
      </h1>

      <p className="mt-4 max-w-3xl text-white/70">
        Official media resources for Harsh Bharti, including biography,
        achievements, competition highlights, media assets, and contact
        information.
      </p>

      {/* Biography */}
      <section className="mt-16">
        <h2 className="text-3xl font-bold text-gold">
          Athlete Biography
        </h2>

        <div className="glass mt-6 rounded-3xl border border-white/10 p-6">
          <p className="text-white/70 leading-8">
            Harsh Bharti is an Indian kickboxer from Himachal Pradesh competing
            in Full Contact Kickboxing. He has represented his state and won
            medals at national championships while pursuing excellence in
            international competition.
          </p>
        </div>
      </section>

      {/* Career Highlights */}
      <section className="mt-16">
        <h2 className="text-3xl font-bold text-gold">
          Career Highlights
        </h2>

        <div className="mt-6 grid gap-6 md:grid-cols-2">
          <div className="glass rounded-3xl border border-white/10 p-6">
            🥇 National Gold Medalist
          </div>

          <div className="glass rounded-3xl border border-white/10 p-6">
            🥈 National Silver Medalist
          </div>

          <div className="glass rounded-3xl border border-white/10 p-6">
            🥉 National Bronze Medalist
          </div>

          <div className="glass rounded-3xl border border-white/10 p-6">
            🇮🇳 Competitive Kickboxer
          </div>
        </div>
      </section>

      {/* Media Contact */}
      <section className="mt-16">
        <h2 className="text-3xl font-bold text-gold">
          Media Contact
        </h2>

        <div className="glass mt-6 rounded-3xl border border-white/10 p-6">
          <p className="text-white/70">
            📧 kickboxerharsh@gmail.com
          </p>

          <p className="mt-2 text-white/70">
            📱 +91 9816875780
          </p>

          <p className="mt-2 text-white/70">
            🌐 kickboxer-harsh.online
          </p>
        </div>
      </section>
    </main>
  );
}
