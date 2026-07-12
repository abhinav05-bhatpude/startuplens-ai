"use client";

import Sidebar from "@/components/dashboard/Sidebar";
import DashboardNavbar from "@/components/dashboard/DashboardNavbar";
import AIAnalysisPanel from "@/components/dashboard/AIAnalysisPanel";

export default function AIAnalysisPage() {
  return (
    <div className="flex min-h-screen bg-slate-50">
      <Sidebar />

      <div className="flex-1">
        <DashboardNavbar />

        <main className="space-y-10 p-8">

          <section className="rounded-3xl bg-gradient-to-r from-indigo-600 via-violet-600 to-sky-500 p-10 text-white shadow-xl">

            <h1 className="text-4xl font-bold">
              🤖 AI Business Analysis
            </h1>

            <p className="mt-3 max-w-3xl text-lg text-indigo-100">
              Generate investor-grade startup validation,
              market analysis, business plans and launch
              strategies powered by Gemini AI.
            </p>

          </section>

          <AIAnalysisPanel />

        </main>
      </div>
    </div>
  );
}