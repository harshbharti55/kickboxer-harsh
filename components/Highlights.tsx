import SectionHeading from './SectionHeading';
import MediaFrame from './MediaFrame';
import { highlights } from '@/data/site';

export default function Highlights() {
  return (
    <section id="media" className="container-page py-24">
      <SectionHeading
        eyebrow="Highlights"
        title="Video-ready sections for reels, clips, and embedded content."
        subtitle="Drop in your own highlight reels, knockout clips, or social embeds later without changing the layout."
      />

      <div className="grid gap-6 lg:grid-cols-3">
        {highlights.map((item) => (
          <MediaFrame key={item.title} title={item.title} description={item.description} kind="video" />
        ))}
      </div>
    </section>
  );
}
