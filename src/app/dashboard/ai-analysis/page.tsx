"use client";

import { Suspense, useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";

import Sidebar from "@/components/dashboard/Sidebar";
import DashboardNavbar from "@/components/dashboard/DashboardNavbar";
import AIAnalysisPanel from "@/components/dashboard/AIAnalysisPanel";

import { getIdea } from "@/lib/api";

interface StartupIdea {
  id: string;
  title: string;
  problem: string;
  solution: string;
}

function AIAnalysisContent() {
  const searchParams = useSearchParams();

  const ideaId = searchParams.get("id");

  const [idea, setIdea] =
    useState<StartupIdea | null>(null);

  const [loading, setLoading] =
    useState(true);

  useEffect(() => {
    async function loadIdea() {
      if (!ideaId) {
        setLoading(false);
        return;
      }

      try {
        const response = await getIdea(ideaId);

        if (response.success) {
          setIdea(response.data);
        }
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    }

    loadIdea();
  }, [ideaId]);

  return (
    <div className="flex min-h-screen bg-slate-50">

      <Sidebar />

      <div className="flex-1">

        <DashboardNavbar />

        <main className="space-y-8 p-8">

          <section className="rounded-3xl bg-gradient-to-r from-indigo-600 via-violet-600 to-sky-500 p-10 text-white shadow-xl">

            <h1 className="text-4xl font-bold">
              🤖 AI Startup Analysis
            </h1>

            <p className="mt-3 text-lg text-indigo-100">
              Analyze your startup idea using Gemini AI.
            </p>

          </section>

          {loading ? (

            <div className="rounded-3xl bg-white p-10 shadow-sm">

              <h2 className="text-xl font-semibold">
                Loading Startup...
              </h2>

            </div>

          ) : !idea ? (

            <div className="rounded-3xl bg-white p-10 shadow-sm">

              <h2 className="text-2xl font-bold">
                No Startup Selected
              </h2>

              <p className="mt-3 text-slate-500">
                Go back to Startup Ideas and click Analyze.
              </p>

            </div>

          ) : (

            <>

              <section className="rounded-3xl bg-white p-8 shadow-sm">

                <h2 className="mb-8 text-3xl font-bold">
                  💡 Selected Startup
                </h2>

                <div className="space-y-6">

                  <div>

                    <p className="text-sm font-semibold uppercase text-slate-500">
                      Startup Name
                    </p>

                    <h3 className="mt-2 text-3xl font-bold text-slate-800">
                      {idea.title}
                    </h3>

                  </div>

                  <div>

                    <p className="text-sm font-semibold uppercase text-slate-500">
                      Problem
                    </p>

                    <p className="mt-2 leading-8 text-slate-700">
                      {idea.problem}
                    </p>

                  </div>

                  <div>

                    <p className="text-sm font-semibold uppercase text-slate-500">
                      Solution
                    </p>

                    <p className="mt-2 leading-8 text-slate-700">
                      {idea.solution}
                    </p>

                  </div>

                </div>

              </section>

              <AIAnalysisPanel
                startupId={idea.id}
                startupName={idea.title}
                problem={idea.problem}
                solution={idea.solution}
              />

            </>

          )}

        </main>

      </div>

    </div>
  );
}

export default function AIAnalysisPage() {
  return (
    <Suspense
      fallback={
        <div className="flex min-h-screen items-center justify-center">
          Loading...
        </div>
      }
    >
      <AIAnalysisContent />
    </Suspense>
  );
}