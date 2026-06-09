"use client";

import SectionHeading from "./SectionHeading";
import MediaFrame from "./MediaFrame";
import { highlights } from "@/data/site";

export default function Highlights() {
  return (
    <section
      id="media"
      className="container-page py-16 md:py-24"
    >
      <SectionHeading
        eyebrow="Highlights"
        title="Fight Highlights"
        subtitle="Career-defining moments, training clips, and competition footage."
      />

      <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {highlights.map((item) => (
          <MediaFrame
            key={item.title}
            title={item.title}
            description={item.description}
            src={item.src}
            kind="video"
          />
        ))}
      </div>
    </section>
  );
}