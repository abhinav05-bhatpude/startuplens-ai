const features = [
  {
    icon: "🤖",
    title: "AI Startup Validation",
    description:
      "Evaluate your startup idea with AI-powered market validation, feasibility analysis and investor-style feedback.",
  },
  {
    icon: "🛠",
    title: "MVP Roadmap",
    description:
      "Generate a practical MVP roadmap with essential features, milestones and development priorities.",
  },
  {
    icon: "💰",
    title: "Monetization Strategy",
    description:
      "Discover the best pricing models, revenue streams and business strategies tailored to your startup.",
  },
];

export default function Features() {
  return (
    <section
      id="features"
      className="relative overflow-hidden bg-slate-100 py-28"
    >
      {/* Background Glow */}
      <div className="absolute left-0 top-0 h-72 w-72 rounded-full bg-rose-300/20 blur-[120px]" />

      <div className="absolute right-0 bottom-0 h-72 w-72 rounded-full bg-fuchsia-300/20 blur-[120px]" />

      <div className="relative mx-auto max-w-7xl px-6">

        <div className="mx-auto mb-16 max-w-3xl text-center">

          <span className="rounded-full bg-rose-100 px-5 py-2 text-sm font-semibold text-rose-600">
            FEATURES
          </span>

          <h2 className="mt-6 text-5xl font-extrabold text-slate-900">
            Everything You Need To Build
            <span className="block bg-gradient-to-r from-rose-600 via-pink-600 to-fuchsia-600 bg-clip-text text-transparent">
              Successful Startups
            </span>
          </h2>

          <p className="mt-6 text-lg leading-8 text-slate-600">
            StartupLens AI combines market research, AI analysis,
            business planning and monetization strategies into one
            intelligent platform.
          </p>

        </div>

        <div className="grid gap-8 md:grid-cols-3">

          {features.map((feature) => (

            <div
              key={feature.title}
              className="group rounded-[30px] border border-slate-200 bg-white p-8 shadow-lg transition-all duration-300 hover:-translate-y-3 hover:shadow-2xl"
            >

              <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-rose-500 via-pink-500 to-fuchsia-600 text-3xl shadow-lg">

                {feature.icon}

              </div>

              <h3 className="text-2xl font-bold text-slate-900">

                {feature.title}

              </h3>

              <p className="mt-5 leading-8 text-slate-600">

                {feature.description}

              </p>

            </div>

          ))}

        </div>

      </div>
    </section>
  );
}