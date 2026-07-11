export default function CalendarPage() {
  const upcoming = [
    {
      event: "WAKO World Cup",
      date: "October 2026",
      location: "Tashkent, Uzbekistan",
      status: "Upcoming",
    },
    {
      event: "Senior National Kickboxing Championship",
      date: "2026",
      location: "India",
      status: "Planned",
    },
  ];

  const history = [
    {
      year: "2025",
      event: "Senior National Kickboxing Championship",
      result: "🥈 Silver Medal",
      location: "Raipur, India",
    },
    {
      year: "2024",
      event: "National Kickboxing Championship",
      result: "🥉 Bronze Medal",
      location: "Siliguri, India",
    },
    {
      year: "2023",
      event: "WAKO India National Championship",
      result: "🥈 Silver Medal",
      location: "Ranchi, India",
    },
    {
      year: "2022",
      event: "Junior National Kickboxing Championship",
      result: "🥇 Gold Medal",
      location: "Kolkata, India",
    },
  ];

  return (
    <main className="container-page py-24">

      <h1 className="text-5xl font-bold text-white">
        Competition Calendar & Results
      </h1>

      <p className="mt-4 text-white/70 max-w-3xl">
        Follow my upcoming competitions and explore my journey through national
        and international kickboxing events.
      </p>

      {/* Upcoming */}
      <section className="mt-16">
        <h2 className="text-3xl font-bold text-gold">
          📅 Upcoming Competitions
        </h2>

        <div className="mt-8 space-y-6">
          {upcoming.map((item, index) => (
            <div
              key={index}
              className="glass rounded-3xl border border-white/10 p-6"
            >
              <h3 className="text-2xl font-semibold text-white">
                {item.event}
              </h3>

              <p className="mt-2 text-white/70">
                📅 {item.date}
              </p>

              <p className="text-white/70">
                📍 {item.location}
              </p>

              <span className="mt-4 inline-block rounded-full bg-gold/20 px-4 py-2 text-gold">
                {item.status}
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* History */}
      <section className="mt-20">
        <h2 className="text-3xl font-bold text-gold">
          🏅 Competition History
        </h2>

        <div className="mt-8 space-y-6">
          {history.map((item, index) => (
            <div
              key={index}
              className="glass rounded-3xl border border-white/10 p-6"
            >
              <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                <div>
                  <h3 className="text-2xl font-semibold text-white">
                    {item.event}
                  </h3>

                  <p className="mt-2 text-white/70">
                    📍 {item.location}
                  </p>
                </div>

                <div className="mt-4 md:mt-0 text-right">
                  <p className="text-xl font-bold text-gold">
                    {item.result}
                  </p>

                  <p className="text-white/60">
                    {item.year}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

    </main>
  );
}
