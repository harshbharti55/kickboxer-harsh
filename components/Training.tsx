import SectionHeading from './SectionHeading';
import { training } from '@/data/site';

export default function Training() {
  return (
    <section id="training" className="container-page py-24">
      <SectionHeading
        eyebrow="Training"
        title="Discipline, routine, and the grind behind the performance."
        subtitle="The training block is designed to be easy to edit when you add new coaches, camps, sessions, or schedule changes."
      />

      <div className="grid gap-6 lg:grid-cols-2">
        <div className="glass rounded-[2rem] p-8">
          <p className="text-sm uppercase tracking-[0.3em] text-gold/80">Gym Information</p>
          <h3 className="mt-4 text-2xl font-semibold text-white">{training.gym}</h3>

          <div className="mt-6">
            <p className="text-sm uppercase tracking-[0.3em] text-white/45">Coaches</p>
            <div className="mt-3 flex flex-wrap gap-3">
              {training.coaches.map((coach) => (
                <span key={coach} className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-white/75">
                  {coach}
                </span>
              ))}
            </div>
          </div>
        </div>

        <div className="glass rounded-[2rem] p-8">
          <p className="text-sm uppercase tracking-[0.3em] text-white/45">Daily Schedule</p>
          <div className="mt-5 space-y-3">
            {training.routine.map((item) => (
              <div key={item} className="flex items-center justify-between rounded-2xl border border-white/10 bg-white/5 px-4 py-3">
                <span className="text-white/80">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
