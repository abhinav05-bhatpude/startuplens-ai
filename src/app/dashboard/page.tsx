"use client";

import Sidebar from "@/components/dashboard/Sidebar";
import DashboardNavbar from "@/components/dashboard/DashboardNavbar";

export default function DashboardPage() {
  return (
    <div className="flex min-h-screen bg-slate-50">
      <Sidebar />

      <div className="flex-1">
        <DashboardNavbar />

        <main className="space-y-10 p-8">

          {/* Hero */}

          <section className="rounded-3xl bg-gradient-to-r from-indigo-600 via-violet-600 to-sky-500 p-10 text-white shadow-xl">

            <h1 className="text-4xl font-bold">
              🚀 Welcome to StartupLens AI
            </h1>

            <p className="mt-3 max-w-3xl text-lg text-indigo-100">
              Validate startup ideas, generate AI-powered business plans,
              analyze competitors, and launch your startup faster.
            </p>

          </section>

          {/* Statistics */}

          <section className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">

            <div className="rounded-3xl bg-white p-7 shadow-sm">
              <p className="text-sm font-semibold uppercase tracking-wide text-slate-500">
                Startup Ideas
              </p>

              <h2 className="mt-3 text-4xl font-bold text-indigo-600">
                💡
              </h2>
            </div>

            <div className="rounded-3xl bg-white p-7 shadow-sm">
              <p className="text-sm font-semibold uppercase tracking-wide text-slate-500">
                AI Analysis
              </p>

              <h2 className="mt-3 text-4xl font-bold text-violet-600">
                🤖
              </h2>
            </div>

            <div className="rounded-3xl bg-white p-7 shadow-sm">
              <p className="text-sm font-semibold uppercase tracking-wide text-slate-500">
                Business Plans
              </p>

              <h2 className="mt-3 text-4xl font-bold text-sky-600">
                📄
              </h2>
            </div>

            <div className="rounded-3xl bg-white p-7 shadow-sm">
              <p className="text-sm font-semibold uppercase tracking-wide text-slate-500">
                Reports
              </p>

              <h2 className="mt-3 text-4xl font-bold text-emerald-600">
                📊
              </h2>
            </div>

          </section>

          {/* Quick Actions */}

          <section className="grid gap-6 lg:grid-cols-2">

            <div className="rounded-3xl bg-white p-8 shadow-sm">

              <h2 className="text-2xl font-bold text-slate-800">
                🚀 Quick Start
              </h2>

              <p className="mt-3 leading-8 text-slate-600">
                Use the sidebar to create startup ideas, generate AI business
                plans, manage reports and customize your workspace.
              </p>

            </div>

            <div className="rounded-3xl bg-white p-8 shadow-sm">

              <h2 className="text-2xl font-bold text-slate-800">
                📈 Platform Overview
              </h2>

              <ul className="mt-5 space-y-4 text-slate-600">

                <li>✅ Create unlimited startup ideas</li>

                <li>✅ AI-powered business validation</li>

                <li>✅ Generate detailed business plans</li>

                <li>✅ Store reports securely</li>

                <li>✅ Modern SaaS dashboard</li>

              </ul>

            </div>

          </section>

        </main>
      </div>
    </div>
  );
}