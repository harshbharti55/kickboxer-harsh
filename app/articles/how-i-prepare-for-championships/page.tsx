export const metadata = {
  title: "How I Prepare for Championships | Harsh Bharti",
  description:
    "Discover how national kickboxing medalist Harsh Bharti prepares for championships through structured training, nutrition, recovery, and mental preparation.",
  keywords: [
    "Kickboxing",
    "Championship Preparation",
    "Harsh Bharti",
    "WAKO",
    "Athlete Training",
    "Sports Performance",
    "Kickboxing India"
  ],
};

export default function ChampionshipPreparationArticle() {
  return (
    <article className="mx-auto max-w-4xl px-6 py-12">

      {/* Category */}
      <div className="mb-4">
        <span className="rounded-full bg-red-100 px-4 py-1 text-sm font-semibold text-red-700">
          🏷️ TRAINING
        </span>
      </div>

      {/* Title */}
      <h1 className="text-5xl font-bold leading-tight">
        How I Prepare for Championships
      </h1>

      <div className="mt-4 text-gray-600">
        By <strong>Harsh Bharti</strong> • July 6, 2026 • 5 min read
      </div>

      {/* Hero Image */}
      <img
        src="/images/championship-training.jpg"
        alt="Harsh Bharti training for a kickboxing championship"
        className="mt-8 h-[450px] w-full rounded-2xl object-cover"
      />

      {/* Introduction */}
      <section className="mt-12">
        <h2 className="mb-4 text-3xl font-bold">Introduction</h2>

        <p className="text-lg leading-8 text-gray-700">
          Preparing for a kickboxing championship is much more than training
          hard. Every competition requires physical conditioning, technical
          improvement, mental preparation, proper nutrition, and recovery.
          As a national medalist and international kickboxer, I follow a
          structured routine that helps me perform at my best when stepping
          into the ring.
        </p>
      </section>

      {/* Training */}
      <section className="mt-12">
        <h2 className="mb-4 text-3xl font-bold">
          🥊 Training Routine
        </h2>

        <p className="text-lg leading-8 text-gray-700">
          My daily training focuses on improving every aspect of kickboxing.
          I begin with cardio and mobility exercises to build endurance.
          Technical sessions include shadow boxing, pad work, heavy bag
          drills, and sparring. Strength and conditioning workouts improve
          power, speed, balance, and explosiveness.
        </p>

        <p className="mt-5 text-lg leading-8 text-gray-700">
          As championships approach, I gradually increase the intensity while
          reducing unnecessary training volume. This helps me stay sharp,
          recover properly, and enter competition week feeling strong rather
          than exhausted.
        </p>
      </section>

      {/* Nutrition */}
      <section className="mt-12">
        <h2 className="mb-4 text-3xl font-bold">
          🥗 Nutrition
        </h2>

        <p className="text-lg leading-8 text-gray-700">
          Nutrition plays a major role in my preparation. I focus on balanced
          meals rich in lean protein, complex carbohydrates, healthy fats,
          fruits, and vegetables. Staying hydrated throughout the day is
          equally important. Proper nutrition supports muscle recovery,
          maintains energy levels, and keeps my body ready for demanding
          training sessions.
        </p>
      </section>

      {/* Recovery */}
      <section className="mt-12">
        <h2 className="mb-4 text-3xl font-bold">
          😴 Recovery
        </h2>

        <p className="text-lg leading-8 text-gray-700">
          Recovery is just as important as training. I prioritize quality
          sleep every night and include stretching, mobility exercises, and
          light recovery sessions in my weekly routine. Proper recovery helps
          reduce injury risk, improves performance, and allows consistent
          progress throughout my preparation.
        </p>
      </section>

      {/* Mental */}
      <section className="mt-12">
        <h2 className="mb-4 text-3xl font-bold">
          🧠 Mental Preparation
        </h2>

        <p className="text-lg leading-8 text-gray-700">
          Success in kickboxing depends on mental strength as much as physical
          ability. Before every championship, I visualize my performance,
          study my strategy, and remain focused on my goals. Confidence comes
          from disciplined preparation and trusting the work completed during
          training.
        </p>
      </section>

      {/* Competition Week */}
      <section className="mt-12">
        <h2 className="mb-4 text-3xl font-bold">
          🏆 Competition Week
        </h2>

        <p className="text-lg leading-8 text-gray-700">
          During the final week before competition, training becomes lighter.
          My priorities are maintaining weight, recovering fully, staying
          relaxed, and preparing mentally for the event. This approach allows
          me to enter the ring feeling fresh, confident, and ready to perform.
        </p>
      </section>

      {/* Final Thoughts */}
      <section className="mt-12">
        <h2 className="mb-4 text-3xl font-bold">
          💬 Final Thoughts
        </h2>

        <p className="text-lg leading-8 text-gray-700">
          Every championship teaches me something new. Preparation is not only
          about winning medals but also about becoming a better athlete each
          day. My goal is to proudly represent India while continuously
          improving through every competition and inspiring young athletes to
          pursue their dreams.
        </p>
      </section>

      {/* Takeaways */}
      <section className="mt-14 rounded-2xl bg-gray-100 p-8">
        <h2 className="mb-5 text-2xl font-bold">
          ⭐ Key Takeaways
        </h2>

        <ul className="space-y-3 text-lg">
          <li>✅ Train consistently</li>
          <li>✅ Eat for performance</li>
          <li>✅ Prioritize recovery</li>
          <li>✅ Stay mentally focused</li>
        </ul>
      </section>

      {/* Author */}
      <section className="mt-14 rounded-2xl border p-8">
        <h2 className="mb-5 text-2xl font-bold">
          About the Author
        </h2>

        <div className="flex items-center gap-5">
          <img
            src="/images/harsh-bharti.jpg"
            alt="Harsh Bharti"
            className="h-24 w-24 rounded-full object-cover"
          />

          <div>
            <h3 className="text-xl font-bold">
              Harsh Bharti
            </h3>

            <p className="text-gray-600">
              National Kickboxing Medalist
            </p>

            <p className="text-gray-600">
              International Competitor
            </p>

            <p className="text-gray-600">
              BPES Student
            </p>
          </div>
        </div>
      </section>

      {/* Related Articles */}
      <section className="mt-14">
        <h2 className="mb-6 text-2xl font-bold">
          Related Articles
        </h2>

        <ul className="space-y-4 text-lg text-red-600">
          <li>➡️ Nutrition for Kickboxers</li>
          <li>➡️ World Cup Preparation</li>
          <li>➡️ Life of a Student Athlete</li>
        </ul>
      </section>

    </article>
  );
}
