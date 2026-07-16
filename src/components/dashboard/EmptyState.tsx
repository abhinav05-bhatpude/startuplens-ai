export default function EmptyState() {
  return (
    <div className="rounded-[32px] border border-slate-200 bg-white p-14 text-center shadow-lg">

      <div className="mx-auto flex h-24 w-24 items-center justify-center rounded-full bg-gradient-to-br from-rose-600 via-pink-600 to-fuchsia-600 text-5xl shadow-xl">

        💡

      </div>

      <h2 className="mt-8 text-4xl font-bold text-slate-900">
        No Startup Ideas Yet
      </h2>

      <p className="mx-auto mt-4 max-w-xl text-lg leading-8 text-slate-600">
        You're one idea away from building something amazing.
        Create your first startup idea and let AI validate,
        analyze and transform it into a complete business plan.
      </p>

      <div className="mt-10 flex flex-wrap justify-center gap-4">

        <span className="rounded-full bg-rose-100 px-4 py-2 text-sm font-semibold text-rose-700">
          🤖 AI Validation
        </span>

        <span className="rounded-full bg-pink-100 px-4 py-2 text-sm font-semibold text-pink-700">
          📊 Market Research
        </span>

        <span className="rounded-full bg-fuchsia-100 px-4 py-2 text-sm font-semibold text-fuchsia-700">
          🚀 Business Planning
        </span>

      </div>

    </div>
  );
}