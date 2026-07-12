"use client";

import Sidebar from "@/components/dashboard/Sidebar";
import DashboardNavbar from "@/components/dashboard/DashboardNavbar";

export default function BusinessPlansPage() {
  return (
    <div className="flex min-h-screen bg-slate-50">
      <Sidebar />

      <div className="flex-1">
        <DashboardNavbar />

        <main className="space-y-10 p-8">

          <section className="rounded-3xl bg-gradient-to-r from-indigo-600 via-violet-600 to-sky-500 p-10 text-white shadow-xl">

            <h1 className="text-4xl font-bold">
              📄 AI Business Plans
            </h1>

            <p className="mt-3 max-w-3xl text-lg text-indigo-100">
              Generate investor-ready business plans using Gemini AI.
            </p>

          </section>

          <section className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">

            <div className="rounded-3xl bg-white p-8 shadow-sm">

              <div className="mb-5 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-r from-indigo-600 to-violet-600 text-3xl text-white">
                🤖
              </div>

              <h2 className="text-2xl font-bold text-slate-800">
                AI Generated Plans
              </h2>

              <p className="mt-3 leading-7 text-slate-500">
                Generate detailed startup business plans powered by Gemini AI.
              </p>

            </div>

            <div className="rounded-3xl bg-white p-8 shadow-sm">

              <div className="mb-5 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-r from-violet-600 to-sky-500 text-3xl text-white">
                📊
              </div>

              <h2 className="text-2xl font-bold text-slate-800">
                Investor Reports
              </h2>

              <p className="mt-3 leading-7 text-slate-500">
                View startup validation, market analysis and funding readiness.
              </p>

            </div>

            <div className="rounded-3xl bg-white p-8 shadow-sm">

              <div className="mb-5 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-r from-sky-500 to-cyan-500 text-3xl text-white">
                🚀
              </div>

              <h2 className="text-2xl font-bold text-slate-800">
                Launch Strategy
              </h2>

              <p className="mt-3 leading-7 text-slate-500">
                Receive AI-generated launch plans and growth strategies.
              </p>

            </div>

          </section>

          <section className="rounded-3xl bg-white p-10 text-center shadow-sm">

            <h2 className="text-3xl font-bold text-slate-800">
              Coming Soon 🚀
            </h2>

            <p className="mt-4 text-lg text-slate-500">
              Saved business plans will appear here after generation.
            </p>

          </section>

        </main>
      </div>
    </div>
  );
}