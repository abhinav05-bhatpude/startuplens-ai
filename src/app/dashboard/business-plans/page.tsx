"use client";

import { Suspense, useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";

import Sidebar from "@/components/dashboard/Sidebar";
import DashboardNavbar from "@/components/dashboard/DashboardNavbar";
import BusinessPlanPanel from "@/components/dashboard/BusinessPlanPanel";

import { getIdea } from "@/lib/api";

interface StartupIdea {
  id: string;
  title: string;
  problem: string;
  solution: string;
}

interface Analysis {
  id: string;
  report: string;
}

function BusinessPlansContent() {
  const searchParams = useSearchParams();

  const startupId = searchParams.get("id");

  const [idea, setIdea] = useState<StartupIdea | null>(null);
  const [analysis, setAnalysis] = useState<Analysis | null>(null);

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadBusinessPlan() {
      if (!startupId) {
        setLoading(false);
        return;
      }

      try {
        const ideaResponse = await getIdea(startupId);

        if (ideaResponse.success) {
          setIdea(ideaResponse.data);
        }

        const response = await fetch(
          `/api/analysis/${startupId}`
        );

        const analysisResponse = await response.json();

        if (analysisResponse.success) {
          setAnalysis(analysisResponse.data);
        }
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    }

    loadBusinessPlan();
  }, [startupId]);

  return (
    <div className="flex min-h-screen bg-slate-50">
      <Sidebar />

      <div className="flex-1">
        <DashboardNavbar />

        <main className="space-y-8 p-8">

          <section className="rounded-3xl bg-gradient-to-r from-indigo-600 via-violet-600 to-sky-500 p-10 text-white shadow-xl">

            <h1 className="text-4xl font-bold">
              📄 Business Plans
            </h1>

            <p className="mt-3 text-lg text-indigo-100">
              AI-generated startup execution plan.
            </p>

          </section>

          {loading ? (

            <div className="rounded-3xl bg-white p-10 shadow-sm">

              <h2 className="text-xl font-semibold">
                Loading Business Plan...
              </h2>

            </div>

          ) : !idea || !analysis ? (

            <div className="rounded-3xl bg-white p-10 shadow-sm">

              <h2 className="text-2xl font-bold">
                Business Plan Not Found
              </h2>

              <p className="mt-3 text-slate-500">
                Generate an AI Analysis first.
              </p>

            </div>

          ) : (

            <>
              <section className="rounded-3xl bg-white p-8 shadow-sm">

                <h2 className="mb-6 text-3xl font-bold">
                  💡 Startup
                </h2>

                <div className="space-y-5">

                  <div>

                    <p className="text-sm font-semibold uppercase text-slate-500">
                      Startup Name
                    </p>

                    <h3 className="mt-2 text-3xl font-bold">
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

                </div>

              </section>

              <BusinessPlanPanel
                startupId={idea.id}
                report={analysis.report}
              />

            </>

          )}

        </main>

      </div>
    </div>
  );
}

export default function BusinessPlansPage() {
  return (
    <Suspense
      fallback={
        <div className="flex min-h-screen items-center justify-center">
          Loading...
        </div>
      }
    >
      <BusinessPlansContent />
    </Suspense>
  );
}