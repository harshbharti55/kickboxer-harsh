import SectionHeading from './SectionHeading';
import { fightRecords } from '@/data/site';

export default function Timeline() {
  return (
    <section id="record" className="container-page py-24">
      <SectionHeading
        eyebrow="Fight Record"
        title="A timeline of results, pressure, and progress."
        subtitle="Each fight card can be edited later from the data file. Add new bouts, update results, or attach event media."
      />

      <div className="grid gap-4">
        {fightRecords.map((fight, index) => (
          <div
            key={`${fight.opponent}-${fight.date}`}
            className="glass grid gap-4 rounded-[1.75rem] p-5 md:grid-cols-[120px_1fr_120px] md:items-center"
          >
            <div className="rounded-2xl bg-white/5 px-4 py-3 text-center">
              <p className="text-sm uppercase tracking-[0.25em] text-white/45">Date</p>
              <p className="mt-1 text-lg font-semibold text-white">{fight.date}</p>
            </div>

            <div>
              <div className="flex flex-wrap items-center gap-3">
                <h3 className="text-xl font-semibold text-white">{fight.opponent}</h3>
                <span className={`rounded-full px-3 py-1 text-xs font-bold uppercase tracking-[0.2em] ${fight.result === 'Win' ? 'bg-gold/15 text-gold' : 'bg-redbrand/15 text-redbrand'}`}>
                  {fight.result}
                </span>
              </div>
              <p className="mt-2 text-white/65">{fight.event}</p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-center">
              <p className="text-sm uppercase tracking-[0.25em] text-white/45">Method</p>
              <p className="mt-1 text-lg font-semibold text-white">{fight.method}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
