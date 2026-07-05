import LogoutButton from "./LogoutButton";

export default function DashboardNavbar() {
  return (
    <header className="sticky top-0 z-20 flex items-center justify-between border-b border-slate-200 bg-white/90 px-8 py-5 backdrop-blur">
      <div>
        <h1 className="text-3xl font-bold text-slate-900">
          Dashboard
        </h1>

        <p className="mt-1 text-sm text-slate-500">
          Welcome back 👋 Build your next startup with AI.
        </p>
      </div>

      <div className="flex items-center gap-5">
        <button className="rounded-xl border border-slate-200 bg-white p-3 shadow-sm transition hover:bg-slate-100">
          🔔
        </button>

        <div className="flex items-center gap-3 rounded-xl border border-slate-200 bg-white px-4 py-2 shadow-sm">
          <div className="flex h-11 w-11 items-center justify-center rounded-full bg-gradient-to-r from-indigo-600 via-violet-600 to-sky-500 font-bold text-white">
            A
          </div>

          <div>
            <p className="font-semibold text-slate-900">
              Welcome
            </p>

            <p className="text-xs text-slate-500">
              AI Founder
            </p>
          </div>
        </div>

        <LogoutButton />
      </div>
    </header>
  );
}