import SectionHeading from './SectionHeading';
import { sponsors } from '@/data/site';

type Sponsor = { name: string; type: string };

export default function Sponsors() {
  // The current athlete profile has no confirmed sponsors yet. Keep the
  // collection explicitly typed so an empty array does not infer never[].
  const sponsorList: Sponsor[] = sponsors;

  return (
    <section className="container-page py-24">
      <SectionHeading
        eyebrow="Sponsors"
        title="Make the brand ready for collaborations."
        subtitle="This section is built for logos, sponsor names, and partnership cards."
      />

      {sponsorList.length > 0 ? (
        <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
          {sponsorList.map((item) => (
            <div key={item.name} className="glass rounded-[1.75rem] p-6">
              <div className="mb-5 flex h-16 items-center justify-center rounded-2xl border border-dashed border-white/15 bg-white/5 text-xs uppercase tracking-[0.3em] text-white/40">
                Logo
              </div>
              <h3 className="text-lg font-semibold text-white">{item.name}</h3>
              <p className="mt-2 text-sm text-white/60">{item.type}</p>
            </div>
          ))}
        </div>
      ) : (
        <div className="glass mt-6 rounded-[1.75rem] p-8 text-center">
          <p className="text-lg font-semibold text-white">Become an early partner</p>
          <p className="mx-auto mt-2 max-w-xl text-sm leading-6 text-white/60">
            Harsh is welcoming sponsorship enquiries for training, competition, and his 2027 international campaign target. Selection is not confirmed.
          </p>
          <a
            href="mailto:kickboxerharsh@gmail.com?subject=Sponsorship%20Enquiry%20for%20Harsh%20Bharti"
            className="mt-5 inline-flex rounded-xl bg-[#e8c56a] px-5 py-3 text-sm font-bold text-[#080c17] transition hover:bg-[#f5d98b]"
          >
            Contact by email
          </a>
        </div>
      )}
    </section>
  );
}
