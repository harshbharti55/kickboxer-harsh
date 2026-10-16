import { competitionRecords } from "@/data/athlete";

export default function ResultsPage() {
  return (
    <main className="container-page min-h-screen py-24">
      <p className="text-sm font-semibold uppercase tracking-[0.35em] text-gold">Official record</p>
      <h1 className="mt-4 text-5xl font-bold text-white">Competition Results</h1>
      <p className="mt-3 max-w-2xl text-white/70">Competition history as supplied by Harsh Bharti. Placings and participation are labelled distinctly.</p>
      <ol className="mt-10 space-y-5">
        {competitionRecords.map((record) => (
          <li key={`${record.year}-${record.event}`} className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <div className="flex flex-wrap items-start justify-between gap-4">
              <div>
                <p className="text-sm font-bold uppercase tracking-[0.25em] text-gold">{record.year}</p>
                <h2 className="mt-2 text-xl font-bold text-white">{record.event}</h2>
                <p className="mt-2 text-white/75">{record.location}{record.category ? ` · ${record.category}` : ""}</p>
                {record.date ? <p className="mt-1 text-sm text-white/50">{record.date}</p> : null}
              </div>
              <span className="rounded-full border border-gold/50 px-4 py-2 text-sm font-semibold text-gold">{record.headline}</span>
            </div>
          </li>
        ))}
      </ol>
    </main>
  );
}
