
import DownloadHero from "@/components/DownloadHero";
import DownloadCard from "@/components/DownloadCard";
import DownloadCTA from "@/components/DownloadCTA";

const downloads = [
  {
    title: "Athlete Profile",
    description:
      "Complete athlete biography, achievements, competition history and career overview.",
    file: "/downloads/athlete-profile.pdf",
    type: "PDF" as const,
    size: "2.4 MB",
  },
  {
    title: "Sponsorship Proposal",
    description:
      "Partnership opportunities, sponsorship packages and brand benefits.",
    file: "/downloads/sponsorship-proposal.pdf",
    type: "PDF" as const,
    size: "3.1 MB",
  },
  {
    title: "Media Kit",
    description:
      "Official biography, media resources, logos and press information.",
    file: "/downloads/media-kit.pdf",
    type: "PDF" as const,
    size: "4.2 MB",
  },
  {
    title: "Competition Resume",
    description:
      "Fight record, medals, championships and athlete experience.",
    file: "/downloads/competition-resume.pdf",
    type: "PDF" as const,
    size: "1.8 MB",
  },
  {
    title: "Official Photos",
    description:
      "High-resolution images for sponsors, media and event organizers.",
    file: "/downloads/official-photos.zip",
    type: "ZIP" as const,
    size: "85 MB",
  },
  {
    title: "Brand Assets",
    description:
      "Official logo, branding assets and promotional graphics.",
    file: "/downloads/brand-assets.zip",
    type: "ZIP" as const,
    size: "15 MB",
  },
];

export default function DownloadsPage() {
  return (
    <main className="bg-black text-white">

      <DownloadHero />

      <section className="container-page py-24">

        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">

          {downloads.map((item) => (
            <DownloadCard
              key={item.title}
              title={item.title}
              description={item.description}
              file={item.file}
              type={item.type}
              size={item.size}
            />
          ))}

        </div>

        {/* FAQ */}

        <div className="mt-28">

          <div className="text-center">

            <p className="text-sm uppercase tracking-[0.35em] text-gold">
              FAQ
            </p>

            <h2 className="mt-4 font-display text-5xl">
              Frequently Asked Questions
            </h2>

          </div>

          <div className="mt-14 grid gap-6 lg:grid-cols-2">

            <div className="glass rounded-3xl border border-white/10 p-7">
              <h3 className="text-xl font-semibold">
                Are these resources free?
              </h3>

              <p className="mt-4 leading-7 text-white/65">
                Yes. All official documents on this page are available free
                for sponsors, media and event organizers.
              </p>
            </div>

            <div className="glass rounded-3xl border border-white/10 p-7">
              <h3 className="text-xl font-semibold">
                Can I use the photos?
              </h3>

              <p className="mt-4 leading-7 text-white/65">
                Official photos may be used for news coverage, sponsorship
                presentations and promotional purposes with proper credit.
              </p>
            </div>

            <div className="glass rounded-3xl border border-white/10 p-7">
              <h3 className="text-xl font-semibold">
                Need another document?
              </h3>

              <p className="mt-4 leading-7 text-white/65">
                Contact me directly if you require certificates,
                verification letters or additional athlete information.
              </p>
            </div>

            <div className="glass rounded-3xl border border-white/10 p-7">
              <h3 className="text-xl font-semibold">
                Are files updated?
              </h3>

              <p className="mt-4 leading-7 text-white/65">
                Yes. Every document is updated regularly with the latest
                achievements, rankings and competition information.
              </p>
            </div>

          </div>

        </div>

        <DownloadCTA />

      </section>

    </main>
  );
}
