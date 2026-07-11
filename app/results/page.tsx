export default function ResultsPage() {
  return (
    <main className="container-page py-24">
      <h1 className="text-5xl font-bold text-white">
        Competition Results
      </h1>

      <p className="mt-3 text-white/70">
        National and International competition results.
      </p>

      <div className="mt-10 space-y-6">

        <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
          <h2 className="text-xl font-bold text-gold">
            2025
          </h2>
          <p className="text-white">
            🥈 Senior National Kickboxing Championship – Silver Medal
          </p>
        </div>

        <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
          <h2 className="text-xl font-bold text-gold">
            2024
          </h2>
          <p className="text-white">
            🥉 National Kickboxing Championship – Bronze Medal
          </p>
        </div>

        <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
          <h2 className="text-xl font-bold text-gold">
            2023
          </h2>
          <p className="text-white">
            🥈 National Kickboxing Championship – Silver Medal
          </p>
        </div>

        <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
          <h2 className="text-xl font-bold text-gold">
            2022
          </h2>
          <p className="text-white">
            🥇 National Kickboxing Championship – Gold Medal
          </p>
        </div>

      </div>
    </main>
  );
}
