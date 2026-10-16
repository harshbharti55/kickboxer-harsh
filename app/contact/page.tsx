import Link from "next/link";

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-black pt-28 pb-20">
      <div className="container-page max-w-4xl">

        <h1 className="text-5xl font-bold text-white">
          Contact Me
        </h1>

        <p className="mt-5 text-lg text-white/70">
          I'm available for sponsorships, media interviews, brand partnerships,
          speaking engagements and collaboration opportunities.
        </p>

        <div className="mt-10 rounded-3xl border border-white/10 bg-white/5 p-8">

          <h2 className="text-2xl font-semibold text-white">
            Contact Information
          </h2>

          <div className="mt-8 space-y-6">

            <div>
              <p className="text-sm text-gold">Email</p>
              <a
                href="mailto:kickboxerharsh@gmail.com"
                className="text-lg text-white hover:text-gold"
              >
                kickboxerharsh@gmail.com
              </a>
            </div>


          </div>

          <div className="mt-10 flex flex-wrap gap-4">

            <a
              href="mailto:kickboxerharsh@gmail.com"
              className="rounded-full bg-yellow-500 px-8 py-3 font-semibold text-black"
            >
              Email Me
            </a>


            <Link
              href="/"
              className="rounded-full border border-white/20 px-8 py-3 font-semibold text-white"
            >
              Back Home
            </Link>

          </div>

        </div>

      </div>
    </main>
  );
}
