"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

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

export default function Sidebar() {
  const pathname = usePathname();

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

        {menuItems.map((item) => {

          const active = pathname === item.href;

          return (
            <Link
              key={item.href}
              href={item.href}
              className={`rounded-xl px-5 py-3 transition ${
                active
                  ? "bg-white/20 font-semibold backdrop-blur"
                  : "text-indigo-100 hover:bg-white/10"
              }`}
            >
              <span className="mr-3">
                {item.icon}
              </span>

              {item.title}
            </Link>
          );
        })}

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