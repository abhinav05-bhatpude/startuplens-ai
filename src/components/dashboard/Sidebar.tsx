"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

interface SidebarProps {
  sidebarOpen: boolean;
  setSidebarOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const menuItems = [
  {
    title: "Dashboard",
    href: "/dashboard",
    icon: "🏠",
  },
  {
    title: "Startup Ideas",
    href: "/dashboard/startup-ideas",
    icon: "💡",
  },
  {
    title: "AI Analysis",
    href: "/dashboard/ai-analysis",
    icon: "🤖",
  },
  {
    title: "Business Plans",
    href: "/dashboard/business-plans",
    icon: "📄",
  },
  {
    title: "Reports",
    href: "/dashboard/reports",
    icon: "📊",
  },
  {
    title: "Settings",
    href: "/dashboard/settings",
    icon: "⚙️",
  },
];

export default function Sidebar({
  sidebarOpen,
  setSidebarOpen,
}: SidebarProps) {
  const pathname = usePathname();

  return (
    <>
      {/* Mobile Overlay */}

      {sidebarOpen && (
        <div
          onClick={() => setSidebarOpen(false)}
          className="fixed inset-0 z-40 bg-black/50 backdrop-blur-sm md:hidden"
        />
      )}

      {/* Sidebar */}

      <aside
        className={`
          fixed
          left-0
          top-0
          z-50
          flex
          h-screen
          w-72
          flex-col
          border-r
          border-slate-800
          bg-slate-950
          text-white
          transition-transform
          duration-300
          md:static
          md:translate-x-0
          ${
            sidebarOpen
              ? "translate-x-0"
              : "-translate-x-full"
          }
        `}
      >
        {/* Header */}

        <div className="flex items-center justify-between border-b border-slate-800 p-8">

          <div className="flex items-center gap-4">

            <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-rose-600 via-pink-600 to-fuchsia-600 text-2xl shadow-lg">
              🚀
            </div>

            <div>

              <h1 className="text-2xl font-bold">
                StartupLens AI
              </h1>

              <p className="mt-1 text-sm text-slate-400">
                AI Business Planner
              </p>

            </div>

          </div>

          <button
            onClick={() => setSidebarOpen(false)}
            className="rounded-xl p-2 text-2xl transition hover:bg-slate-800 md:hidden"
          >
            ✕
          </button>

        </div>

        {/* Navigation */}

        <nav className="flex flex-1 flex-col gap-3 p-6">

          {menuItems.map((item) => {

            const active = pathname === item.href;

            return (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setSidebarOpen(false)}
                className={`group flex items-center gap-4 rounded-2xl px-4 py-4 transition-all duration-300 ${
                  active
                    ? "bg-gradient-to-r from-rose-600 via-pink-600 to-fuchsia-600 text-white shadow-lg"
                    : "text-slate-300 hover:bg-slate-900 hover:text-white"
                }`}
              >
                <div
                  className={`flex h-11 w-11 items-center justify-center rounded-xl transition ${
                    active
                      ? "bg-white/20"
                      : "bg-slate-800 group-hover:bg-slate-700"
                  }`}
                >
                  {item.icon}
                </div>

                <span className="font-medium">
                  {item.title}
                </span>

              </Link>
            );

          })}

        </nav>

        {/* Footer */}

        <div className="p-6">

          <div className="rounded-3xl border border-slate-800 bg-slate-900 p-6">

            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-rose-600 via-pink-600 to-fuchsia-600">
              ✨
            </div>

            <h3 className="text-lg font-bold">
              AI Powered
            </h3>

            <p className="mt-3 text-sm leading-7 text-slate-400">
              Validate ideas, generate business plans and launch
              startups faster with Gemini AI.
            </p>

          </div>

        </div>

      </aside>
    </>
  );
}