import SectionHeading from './SectionHeading';
import StatCard from './StatCard';
import { stats, boxer, achievements } from '@/data/site';

export default function Stats() {
  return (
    <section id="stats" className="container-page py-24">
      <SectionHeading
        eyebrow="Stats"
        title="Numbers that tell the story."
        subtitle={`A quick snapshot of ${boxer.name}'s career highlights, titles, and performance record.`}
      />

      <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
        {stats.map((item) => (
          <StatCard key={item.label} label={item.label} value={item.value} />
        ))}
      </div>

      <div className="mt-8 grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
        {achievements.map((item) => (
          <div key={item.title} className="glass rounded-3xl p-6">
            <p className="text-4xl font-display text-gold">{item.count}</p>
            <p className="mt-2 text-sm uppercase tracking-[0.25em] text-white/55">{item.title}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
