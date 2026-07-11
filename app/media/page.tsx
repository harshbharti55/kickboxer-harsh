export default function MediaPage() {
  const media = [
    {
      title: "National Championship Highlights",
      type: "Competition",
      year: "2025",
      description: "Highlights from the WAKO India Senior National Kickboxing Championship.",
    },
    {
      title: "Training Session",
      type: "Training",
      year: "2026",
      description: "Strength, conditioning, and technical training footage.",
    },
    {
      title: "Media Interview",
      type: "Interview",
      year: "2026",
      description: "Interviews and athlete profile features.",
    },
  ];

  return (
    <main className="container-page py-24">
      <h1 className="text-5xl font-bold text-white">Media & Press</h1>

      <p className="mt-4 max-w-3xl text-white/70">
        Videos, interviews, news coverage, and official media resources.
      </p>

      <div className="mt-10 grid gap-6">
        {media.map((item, index) => (
          <div
            key={index}
            className="glass rounded-3xl border border-white/10 p-6"
          >
            <div className="flex items-center justify-between">
              <h2 className="text-2xl font-semibold text-white">
                {item.title}
              </h2>

              <span className="rounded-full bg-gold/20 px-4 py-2 text-gold">
                {item.year}
              </span>
            </div>

            <p className="mt-2 text-gold">{item.type}</p>

            <p className="mt-4 text-white/70">
              {item.description}
            </p>
          </div>
        ))}
      </div>
    </main>
  );
}
