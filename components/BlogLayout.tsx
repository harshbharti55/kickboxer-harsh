import BlogLayout from "@/components/BlogLayout";

export default function Page() {
  return (
    <BlogLayout
      title="How I Prepare for Championships"
      date="July 6, 2026"
      category="Kickboxing Training"
    >
      <p className="text-xl text-gray-300 leading-8 mb-10">
        Preparing for a kickboxing championship is much more than training hard.
        Every competition requires physical conditioning, technical improvement,
        mental preparation, proper nutrition, and recovery. As a national
        medalist and international kickboxer, I follow a structured routine that
        helps me perform at my best when stepping into the ring.
      </p>

      <div className="bg-yellow-500/10 border-l-4 border-yellow-400 rounded-xl p-6 my-10">
        <h3 className="text-yellow-400 font-bold text-xl mb-3">
          Championship Preparation Checklist
        </h3>

        <ul className="space-y-2">
          <li>✅ Daily technical training</li>
          <li>✅ Strength & conditioning</li>
          <li>✅ Balanced nutrition</li>
          <li>✅ Recovery & quality sleep</li>
          <li>✅ Mental preparation</li>
        </ul>
      </div>

      <h2 className="text-3xl font-bold mt-12 mb-4">
        🥊 Training Routine
      </h2>

      <p className="leading-8 text-gray-300">
        My daily training focuses on improving every aspect of kickboxing.
        Sessions include cardio, mobility, shadow boxing, pad work, heavy bag
        drills, sparring, and strength training. As competition approaches,
        intensity increases while overall training volume is reduced to keep my
        body fresh.
      </p>

      <h2 className="text-3xl font-bold mt-12 mb-4">
        🥗 Nutrition
      </h2>

      <p className="leading-8 text-gray-300">
        Proper nutrition fuels my performance. I eat balanced meals rich in lean
        protein, complex carbohydrates, healthy fats, vegetables, and fruits.
        Hydration is equally important to maintain energy throughout demanding
        training sessions.
      </p>

      <h2 className="text-3xl font-bold mt-12 mb-4">
        😴 Recovery
      </h2>

      <p className="leading-8 text-gray-300">
        Recovery is a vital part of my preparation. Quality sleep, stretching,
        mobility work, and active recovery sessions reduce injuries and improve
        performance.
      </p>

      <blockquote className="border-l-4 border-yellow-400 pl-6 italic text-xl text-gray-200 my-12">
        "Champions are built long before they enter the ring. Every training
        session matters."
      </blockquote>

      <h2 className="text-3xl font-bold mt-12 mb-4">
        🧠 Mental Preparation
      </h2>

      <p className="leading-8 text-gray-300">
        Before every championship, I visualize success, review strategies, and
        stay focused on my goals. Confidence comes from disciplined preparation
        and consistent training.
      </p>

      <h2 className="text-3xl font-bold mt-12 mb-4">
        🏆 Competition Week
      </h2>

      <p className="leading-8 text-gray-300">
        During the final week, my focus shifts toward recovery, maintaining
        weight, and staying mentally relaxed. Entering the ring fresh is more
        important than overtraining.
      </p>

      <h2 className="text-3xl font-bold mt-12 mb-4">
        💬 Final Thoughts
      </h2>

      <p className="leading-8 text-gray-300">
        Every championship teaches me something new. My goal is not only to win
        medals but to become a better athlete every single day and proudly
        represent India on the international stage.
      </p>
    </BlogLayout>
  );
}
