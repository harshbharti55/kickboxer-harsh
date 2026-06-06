import SectionHeading from './SectionHeading';
import { sponsors } from '@/data/site';

export default function Sponsors() {
  return (
    <section className="container-page py-24">
      <SectionHeading
        eyebrow="Sponsors"
        title="Make the brand ready for collaborations."
        subtitle="This section is built for logos, sponsor names, and partnership cards."
      />

      <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
        {sponsors.map((item) => (
          <div key={item.name} className="glass rounded-[1.75rem] p-6">
            <div className="mb-5 flex h-16 items-center justify-center rounded-2xl border border-dashed border-white/15 bg-white/5 text-xs uppercase tracking-[0.3em] text-white/40">
              Logo
            </div>
            <h3 className="text-lg font-semibold text-white">{item.name}</h3>
            <p className="mt-2 text-sm text-white/60">{item.type}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
