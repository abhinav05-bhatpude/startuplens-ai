import LogoutButton from "./LogoutButton";

export default function DashboardNavbar() {
  const today = new Date().toLocaleDateString("en-US", {
    weekday: "long",
    month: "long",
    day: "numeric",
  });

  return (
    <header className="sticky top-0 z-20 flex items-center justify-between border-b border-slate-200 bg-white/90 px-8 py-5 backdrop-blur">

      <div>

        <p className="text-sm font-medium text-indigo-600">
          {today}
        </p>

        <h1 className="mt-1 text-3xl font-bold text-slate-900">
          Welcome Back 👋
        </h1>

        <p className="mt-2 text-slate-500">
          Continue building your next AI startup.
        </p>

      </div>

      <div className="flex items-center gap-5">

        <div className="rounded-xl border border-slate-200 bg-white px-5 py-3 shadow-sm">

          <p className="text-xs uppercase tracking-wide text-slate-500">
            Today's Goal
          </p>

          <p className="mt-1 font-semibold text-slate-800">
            Build 1 Amazing Startup
          </p>

        </div>

        <div className="flex items-center gap-3 rounded-xl border border-slate-200 bg-white px-4 py-2 shadow-sm">

          <div className="flex h-11 w-11 items-center justify-center rounded-full bg-gradient-to-r from-indigo-600 via-violet-600 to-sky-500 font-bold text-white">
            A
          </div>

          <div>

            <p className="font-semibold text-slate-900">
              Founder
            </p>

            <p className="text-xs text-slate-500">
              StartupLens AI
            </p>

          </div>

        </div>

        <LogoutButton />

      </div>

    </header>
  );
}