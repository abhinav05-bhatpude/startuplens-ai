export default function Sidebar() {
  return (
    <aside className="hidden min-h-screen w-72 border-r border-slate-200 bg-gradient-to-b from-indigo-700 via-violet-700 to-sky-600 text-white md:flex md:flex-col">
      <div className="border-b border-white/10 p-8">
        <h1 className="text-3xl font-bold">
          StartupLens AI
        </h1>

        <p className="mt-2 text-sm text-indigo-100">
          AI Business Planner
        </p>
      </div>

      <nav className="flex flex-1 flex-col gap-2 p-6">
        <button className="rounded-xl bg-white/20 px-5 py-3 text-left font-medium backdrop-blur transition hover:bg-white/30">
          🏠 Dashboard
        </button>

        <button className="rounded-xl px-5 py-3 text-left text-indigo-100 transition hover:bg-white/10">
          💡 Startup Ideas
        </button>

        <button className="rounded-xl px-5 py-3 text-left text-indigo-100 transition hover:bg-white/10">
          🤖 AI Analysis
        </button>

        <button className="rounded-xl px-5 py-3 text-left text-indigo-100 transition hover:bg-white/10">
          📈 Business Plans
        </button>

        <button className="rounded-xl px-5 py-3 text-left text-indigo-100 transition hover:bg-white/10">
          📄 Reports
        </button>

        <button className="rounded-xl px-5 py-3 text-left text-indigo-100 transition hover:bg-white/10">
          ⚙️ Settings
        </button>
      </nav>

      <div className="border-t border-white/10 p-6">
        <div className="rounded-2xl bg-white/10 p-5 backdrop-blur">
          <p className="text-sm font-semibold">
            🚀 AI Powered
          </p>

          <p className="mt-2 text-xs text-indigo-100">
            Build, validate and launch startup ideas faster with Gemini AI.
          </p>
        </div>
      </div>
    </aside>
  );
}