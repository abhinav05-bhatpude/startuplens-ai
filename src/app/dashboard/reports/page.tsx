"use client";

import Sidebar from "@/components/dashboard/Sidebar";
import DashboardNavbar from "@/components/dashboard/DashboardNavbar";

const reports = [
  {
    title: "AI SaaS CRM",
    date: "2 Hours Ago",
    status: "Completed",
    score: "8.9/10",
  },
  {
    title: "HealthTech Platform",
    date: "Yesterday",
    status: "Completed",
    score: "8.2/10",
  },
  {
    title: "EdTech Marketplace",
    date: "3 Days Ago",
    status: "Completed",
    score: "9.1/10",
  },
];

export default function ReportsPage() {
  return (
    <div className="flex min-h-screen bg-slate-50">
      <Sidebar />

      <div className="flex-1">
        <DashboardNavbar />

        <main className="space-y-10 p-8">

          <section className="rounded-3xl bg-gradient-to-r from-indigo-600 via-violet-600 to-sky-500 p-10 text-white shadow-xl">

            <h1 className="text-4xl font-bold">
              📊 AI Reports
            </h1>

            <p className="mt-3 max-w-3xl text-lg text-indigo-100">
              Browse all your previously generated startup reports and business analyses.
            </p>

          </section>

          <section className="grid gap-6 md:grid-cols-3">

            <div className="rounded-3xl bg-white p-7 shadow-sm">
              <p className="text-sm font-semibold uppercase text-slate-500">
                Total Reports
              </p>

              <h2 className="mt-3 text-4xl font-bold text-indigo-600">
                {reports.length}
              </h2>
            </div>

            <div className="rounded-3xl bg-white p-7 shadow-sm">
              <p className="text-sm font-semibold uppercase text-slate-500">
                AI Generated
              </p>

              <h2 className="mt-3 text-4xl font-bold text-violet-600">
                100%
              </h2>
            </div>

            <div className="rounded-3xl bg-white p-7 shadow-sm">
              <p className="text-sm font-semibold uppercase text-slate-500">
                Average Score
              </p>

              <h2 className="mt-3 text-4xl font-bold text-emerald-600">
                8.7
              </h2>
            </div>

          </section>

          <section>

            <div className="mb-6">

              <h2 className="text-3xl font-bold text-slate-800">
                📁 Recent Reports
              </h2>

              <p className="mt-2 text-slate-500">
                Your latest startup analysis reports.
              </p>

            </div>

            <div className="space-y-5">

              {reports.map((report) => (

                <div
                  key={report.title}
                  className="rounded-3xl bg-white p-6 shadow-sm"
                >

                  <div className="flex items-center justify-between">

                    <div>

                      <h3 className="text-2xl font-bold text-slate-800">
                        {report.title}
                      </h3>

                      <p className="mt-2 text-slate-500">
                        {report.date}
                      </p>

                    </div>

                    <div className="text-right">

                      <span className="rounded-full bg-green-100 px-4 py-2 text-sm font-semibold text-green-700">
                        {report.status}
                      </span>

                      <p className="mt-3 text-lg font-bold text-indigo-600">
                        ⭐ {report.score}
                      </p>

                    </div>

                  </div>

                  <div className="mt-6 flex gap-3">

                    <button className="rounded-xl bg-gradient-to-r from-indigo-600 to-violet-600 px-6 py-3 font-semibold text-white hover:opacity-90">
                      👁 View
                    </button>

                    <button className="rounded-xl border border-slate-300 px-6 py-3 font-semibold hover:bg-slate-100">
                      📋 Copy
                    </button>

                    <button className="rounded-xl bg-red-500 px-6 py-3 font-semibold text-white hover:bg-red-600">
                      🗑 Delete
                    </button>

                  </div>

                </div>

              ))}

            </div>

          </section>

        </main>
      </div>
    </div>
  );
}