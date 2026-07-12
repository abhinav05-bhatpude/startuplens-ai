"use client";

import Link from "next/link";

import Sidebar from "@/components/dashboard/Sidebar";
import DashboardNavbar from "@/components/dashboard/DashboardNavbar";

const quickActions = [
  {
    title: "Startup Ideas",
    description: "Create, edit and organize your startup ideas.",
    href: "/dashboard/startup-ideas",
    icon: "💡",
    gradient: "from-indigo-600 to-violet-600",
  },
  {
    title: "AI Analysis",
    description: "Generate AI-powered startup validation reports.",
    href: "/dashboard/ai-analysis",
    icon: "🤖",
    gradient: "from-violet-600 to-sky-500",
  },
  {
    title: "Business Plans",
    description: "Create investor-ready business plans.",
    href: "/dashboard/business-plans",
    icon: "📄",
    gradient: "from-sky-500 to-cyan-500",
  },
  {
    title: "Reports",
    description: "View all saved AI reports.",
    href: "/dashboard/reports",
    icon: "📊",
    gradient: "from-emerald-500 to-green-500",
  },
];

export default function DashboardPage() {
  return (
    <div className="flex min-h-screen bg-slate-50">
      <Sidebar />

      <div className="flex-1">
        <DashboardNavbar />

        <main className="space-y-10 p-8">

          <section className="rounded-3xl bg-gradient-to-r from-indigo-600 via-violet-600 to-sky-500 p-10 text-white shadow-xl">

            <h1 className="text-5xl font-bold">
              🚀 StartupLens AI
            </h1>

            <p className="mt-4 max-w-3xl text-lg text-indigo-100">
              Validate startup ideas, generate business plans,
              discover opportunities and build your next
              successful company with AI.
            </p>

          </section>

          <section>

            <div className="mb-8">
              <h2 className="text-3xl font-bold text-slate-800">
                Quick Access
              </h2>

              <p className="mt-2 text-slate-500">
                Jump directly to any module.
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">

              {quickActions.map((item) => (

                <Link
                  key={item.href}
                  href={item.href}
                  className="group rounded-3xl bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
                >

                  <div
                    className={`mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-r ${item.gradient} text-3xl text-white`}
                  >
                    {item.icon}
                  </div>

                  <h3 className="text-2xl font-bold text-slate-800">
                    {item.title}
                  </h3>

                  <p className="mt-3 leading-7 text-slate-500">
                    {item.description}
                  </p>

                </Link>

              ))}

            </div>

          </section>

          <section className="grid gap-6 lg:grid-cols-2">

            <div className="rounded-3xl bg-white p-8 shadow-sm">

              <h2 className="text-3xl font-bold text-slate-800">
                🎯 What You Can Do
              </h2>

              <ul className="mt-6 space-y-4 text-slate-600">

                <li>✅ Create unlimited startup ideas</li>
                <li>✅ Validate ideas using Gemini AI</li>
                <li>✅ Generate complete business plans</li>
                <li>✅ Analyze competitors and markets</li>
                <li>✅ Save AI-generated reports</li>

              </ul>

            </div>

            <div className="rounded-3xl bg-white p-8 shadow-sm">

              <h2 className="text-3xl font-bold text-slate-800">
                📈 Platform Status
              </h2>

              <div className="mt-6 space-y-5">

                <div className="flex items-center justify-between rounded-xl bg-slate-50 p-4">
                  <span className="font-medium text-slate-600">
                    Startup Workspace
                  </span>

                  <span className="font-bold text-green-600">
                    Ready
                  </span>
                </div>

                <div className="flex items-center justify-between rounded-xl bg-slate-50 p-4">
                  <span className="font-medium text-slate-600">
                    AI Analysis
                  </span>

                  <span className="font-bold text-green-600">
                    Ready
                  </span>
                </div>

                <div className="flex items-center justify-between rounded-xl bg-slate-50 p-4">
                  <span className="font-medium text-slate-600">
                    Business Plans
                  </span>

                  <span className="font-bold text-yellow-600">
                    In Progress
                  </span>
                </div>

                <div className="flex items-center justify-between rounded-xl bg-slate-50 p-4">
                  <span className="font-medium text-slate-600">
                    Reports
                  </span>

                  <span className="font-bold text-yellow-600">
                    In Progress
                  </span>
                </div>

              </div>

            </div>

          </section>

        </main>
      </div>
    </div>
  );
}