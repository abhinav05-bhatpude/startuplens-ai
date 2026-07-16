export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-slate-100 py-32">

      {/* Background Blur */}
      <div className="absolute -left-32 top-10 h-[450px] w-[450px] rounded-full bg-rose-300/40 blur-[150px]" />

      <div className="absolute right-0 top-32 h-[450px] w-[450px] rounded-full bg-fuchsia-300/40 blur-[150px]" />

      {/* Grid */}
      <div
        className="absolute inset-0 opacity-[0.05]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(15,23,42,.08) 1px, transparent 1px), linear-gradient(90deg, rgba(15,23,42,.08) 1px, transparent 1px)",
          backgroundSize: "48px 48px",
        }}
      />

      <div className="relative mx-auto max-w-7xl px-6">

        {/* Badge */}

        <div className="mx-auto mb-10 flex w-fit items-center gap-3 rounded-full border border-rose-200 bg-white px-5 py-2 shadow-md">

          <span className="h-2 w-2 rounded-full bg-rose-500" />

          <span className="text-sm font-semibold text-slate-700">
            AI Powered Startup Validation Platform
          </span>

        </div>

        {/* Heading */}

        <h1 className="mx-auto max-w-5xl text-center text-6xl font-extrabold leading-tight text-slate-900 md:text-7xl">

          Turn Startup Ideas

          <span className="block bg-gradient-to-r from-rose-600 via-pink-600 to-fuchsia-600 bg-clip-text text-transparent">

            Into Successful Businesses

          </span>

        </h1>

        {/* Subtitle */}

        <p className="mx-auto mt-8 max-w-3xl text-center text-xl leading-9 text-slate-600">

          Validate startup ideas, analyze markets,
          generate investor-ready business plans,
          discover monetization strategies and
          launch your startup with confidence.

        </p>

        {/* Buttons */}

        <div className="mt-12 flex flex-col items-center justify-center gap-5 sm:flex-row">

          <button className="rounded-2xl bg-gradient-to-r from-rose-600 via-pink-600 to-fuchsia-600 px-8 py-4 text-lg font-bold text-white shadow-[0_20px_40px_rgba(244,63,94,.35)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_25px_60px_rgba(244,63,94,.45)]">

            🚀 Analyze Startup

          </button>

          <button className="rounded-2xl border border-slate-300 bg-white px-8 py-4 text-lg font-semibold text-slate-700 shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">

            ▶ Watch Demo

          </button>

        </div>

        {/* Stats */}

        <div className="mt-20 grid gap-6 md:grid-cols-3">

          <div className="rounded-[30px] border border-slate-200 bg-white p-8 shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl">

            <h2 className="text-5xl font-extrabold text-rose-600">
              500+
            </h2>

            <p className="mt-3 text-lg text-slate-600">
              Startup Ideas Validated
            </p>

          </div>

          <div className="rounded-[30px] border border-slate-200 bg-white p-8 shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl">

            <h2 className="text-5xl font-extrabold text-pink-600">
              AI
            </h2>

            <p className="mt-3 text-lg text-slate-600">
              Investor-Level Analysis
            </p>

          </div>

          <div className="rounded-[30px] border border-slate-200 bg-white p-8 shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl">

            <h2 className="text-5xl font-extrabold text-fuchsia-600">
              24/7
            </h2>

            <p className="mt-3 text-lg text-slate-600">
              Instant Business Reports
            </p>

          </div>

        </div>

      </div>

    </section>
  );
}