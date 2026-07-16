import LogoutButton from "./LogoutButton";

export default function DashboardNavbar() {
  const today = new Date().toLocaleDateString("en-US", {
    weekday: "long",
    month: "long",
    day: "numeric",
  });

  return (
    <header className="sticky top-0 z-20 border-b border-slate-200 bg-white/90 backdrop-blur-xl">

      <div className="flex items-center justify-between px-8 py-6">

        {/* Left */}

        <div>

          <p className="text-sm font-semibold text-rose-600">
            {today}
          </p>

          <h1 className="mt-2 text-4xl font-bold text-slate-900">
            Welcome Back 👋
          </h1>

          <p className="mt-2 text-slate-500">
            Continue building your next AI startup.
          </p>

        </div>

        {/* Right */}

        <div className="flex items-center gap-5">

          {/* Goal Card */}

          <div className="rounded-2xl border border-slate-200 bg-white px-6 py-4 shadow-sm">

            <p className="text-xs font-semibold uppercase tracking-wider text-slate-500">
              Today's Goal
            </p>

            <p className="mt-2 font-bold text-slate-900">
              🚀 Build One Amazing Startup
            </p>

          </div>

          {/* User Card */}

          <div className="flex items-center gap-4 rounded-2xl border border-slate-200 bg-white px-5 py-3 shadow-sm">

            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-r from-rose-600 via-pink-600 to-fuchsia-600 font-bold text-white shadow-lg">

              A

            </div>

            <div>

              <p className="font-bold text-slate-900">
                Founder
              </p>

              <p className="text-sm text-slate-500">
                StartupLens AI
              </p>

            </div>

          </div>

          {/* Logout */}

          <LogoutButton />

        </div>

      </div>

    </header>
  );
}