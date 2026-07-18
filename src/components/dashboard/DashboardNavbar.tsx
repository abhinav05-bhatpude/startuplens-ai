"use client";

import LogoutButton from "./LogoutButton";

interface DashboardNavbarProps {
  setSidebarOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function DashboardNavbar({
  setSidebarOpen,
}: DashboardNavbarProps) {
  const today = new Date().toLocaleDateString("en-US", {
    weekday: "long",
    month: "long",
    day: "numeric",
  });

  return (
    <header className="sticky top-0 z-20 border-b border-slate-200 bg-white/90 backdrop-blur-xl">

      <div className="flex items-center justify-between px-5 py-5 md:px-8 md:py-6">

        {/* Left */}

        <div className="flex items-center gap-4">

          {/* Mobile Menu */}

          <button
            onClick={() => setSidebarOpen(true)}
            className="rounded-xl border border-slate-200 bg-white p-3 shadow-sm transition hover:bg-slate-100 md:hidden"
          >
            ☰
          </button>

          <div>

            <p className="text-sm font-semibold text-rose-600">
              {today}
            </p>

            <h1 className="mt-1 text-2xl font-bold text-slate-900 md:mt-2 md:text-4xl">
              Welcome Back 👋
            </h1>

            <p className="mt-1 hidden text-slate-500 md:block">
              Continue building your next AI startup.
            </p>

          </div>

        </div>

        {/* Right */}

        <div className="flex items-center gap-4">

          {/* Goal Card */}

          <div className="hidden rounded-2xl border border-slate-200 bg-white px-6 py-4 shadow-sm lg:block">

            <p className="text-xs font-semibold uppercase tracking-wider text-slate-500">
              Today's Goal
            </p>

            <p className="mt-2 font-bold text-slate-900">
              🚀 Build One Amazing Startup
            </p>

          </div>

          {/* User */}

          <div className="hidden items-center gap-4 rounded-2xl border border-slate-200 bg-white px-5 py-3 shadow-sm sm:flex">

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

          <LogoutButton />

        </div>

      </div>

    </header>
  );
}