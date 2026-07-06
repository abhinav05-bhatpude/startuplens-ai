"use client";

import { useEffect, useState } from "react";

import Sidebar from "@/components/dashboard/Sidebar";
import DashboardNavbar from "@/components/dashboard/DashboardNavbar";
import IdeaCard from "@/components/dashboard/IdeaCard";
import CreateIdeaModal from "@/components/dashboard/CreateIdeaModal";
import AIAnalysisPanel from "@/components/dashboard/AIAnalysisPanel";

import { deleteIdea, getIdeas } from "@/lib/api";

interface StartupIdea {
  id: string;
  title: string;
  problem: string;
  solution: string;
}

export default function DashboardPage() {

  const [ideas, setIdeas] = useState<StartupIdea[]>([]);
  const [loading, setLoading] = useState(true);

  async function fetchIdeas() {

    try {

      setLoading(true);

      const response = await getIdeas();

      if (response.status === 401) {
        window.location.href = "/login";
        return;
      }

      if (!response.ok) {
        alert(response.data.message);
        return;
      }

      setIdeas(response.data.data);

    } catch (error) {

      console.error(error);

    } finally {

      setLoading(false);

    }

  }

  useEffect(() => {
    fetchIdeas();
  }, []);

  function handleEdit(id: string) {
    console.log(id);
  }

  async function handleDelete(id: string) {

    const confirmed = window.confirm(
      "Delete this startup idea?"
    );

    if (!confirmed) return;

    await deleteIdea(id);

    fetchIdeas();

  }

  return (

    <div className="flex min-h-screen bg-slate-50">

      <Sidebar />

      <div className="flex-1">

        <DashboardNavbar />

        <main className="space-y-10 p-8">

          <section className="overflow-hidden rounded-3xl bg-gradient-to-r from-indigo-600 via-violet-600 to-sky-500 p-10 text-white shadow-xl">

            <div className="max-w-3xl">

              <h1 className="text-5xl font-bold leading-tight">

                Build Smarter

                <br />

                Startups with AI 🚀

              </h1>

              <p className="mt-5 text-lg text-indigo-100 leading-8">

                Validate startup ideas, generate investor-ready
                business plans, discover competitors and
                launch your next product with AI.

              </p>

            </div>

          </section>

          <section className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">

            <div className="rounded-3xl bg-white p-7 shadow-sm">

              <p className="text-sm uppercase tracking-wide text-slate-500">
                Startup Ideas
              </p>

              <h2 className="mt-4 text-5xl font-bold text-indigo-600">
                {ideas.length}
              </h2>

              <p className="mt-3 text-sm text-slate-500">
                Ideas currently stored
              </p>

            </div>

            <div className="rounded-3xl bg-white p-7 shadow-sm">

              <p className="text-sm uppercase tracking-wide text-slate-500">
                AI Reports
              </p>

              <h2 className="mt-4 text-5xl font-bold text-violet-600">
                0
              </h2>

              <p className="mt-3 text-sm text-slate-500">
                Generated business plans
              </p>

            </div>

            <div className="rounded-3xl bg-white p-7 shadow-sm">

              <p className="text-sm uppercase tracking-wide text-slate-500">
                Business Plans
              </p>

              <h2 className="mt-4 text-5xl font-bold text-sky-600">
                0
              </h2>

              <p className="mt-3 text-sm text-slate-500">
                Ready for launch
              </p>

            </div>

            <div className="rounded-3xl bg-white p-7 shadow-sm">

              <p className="text-sm uppercase tracking-wide text-slate-500">
                Startup Health
              </p>

              <h2 className="mt-4 text-5xl font-bold text-emerald-600">
                A+
              </h2>

              <p className="mt-3 text-sm text-slate-500">
                Keep building 🚀
              </p>

            </div>

          </section>
                    {/* Startup Insights */}

          <section className="grid gap-6 xl:grid-cols-3">

            <div className="rounded-3xl bg-white p-7 shadow-sm xl:col-span-2">

              <div className="mb-6 flex items-center justify-between">

                <div>

                  <h2 className="text-2xl font-bold text-slate-800">
                    📈 Startup Insights
                  </h2>

                  <p className="mt-2 text-slate-500">
                    AI-powered recommendations for your startup journey.
                  </p>

                </div>

              </div>

              <div className="grid gap-5 md:grid-cols-2">

                <div className="rounded-2xl border border-indigo-100 bg-indigo-50 p-5">
                  <h3 className="font-semibold text-indigo-700">
                    🏆 Strongest Area
                  </h3>

                  <p className="mt-3 text-slate-700">
                    Keep validating startup ideas using AI before
                    building the product.
                  </p>
                </div>

                <div className="rounded-2xl border border-emerald-100 bg-emerald-50 p-5">
                  <h3 className="font-semibold text-emerald-700">
                    🚀 Next Step
                  </h3>

                  <p className="mt-3 text-slate-700">
                    Generate a complete business plan using Gemini AI.
                  </p>
                </div>

                <div className="rounded-2xl border border-amber-100 bg-amber-50 p-5">
                  <h3 className="font-semibold text-amber-700">
                    💰 Revenue Tip
                  </h3>

                  <p className="mt-3 text-slate-700">
                    Focus on solving one painful problem before
                    thinking about monetization.
                  </p>
                </div>

                <div className="rounded-2xl border border-sky-100 bg-sky-50 p-5">
                  <h3 className="font-semibold text-sky-700">
                    📊 AI Suggestion
                  </h3>

                  <p className="mt-3 text-slate-700">
                    Compare competitors before building Version 1.
                  </p>
                </div>

              </div>

            </div>

            <div className="rounded-3xl bg-white p-7 shadow-sm">

              <h2 className="text-2xl font-bold text-slate-800">
                🕒 Recent Activity
              </h2>

              <div className="mt-6 space-y-5">

                <div className="flex gap-3">
                  <span>🚀</span>
                  <p className="text-slate-600">
                    Created startup ideas
                  </p>
                </div>

                <div className="flex gap-3">
                  <span>🤖</span>
                  <p className="text-slate-600">
                    Generated AI business plans
                  </p>
                </div>

                <div className="flex gap-3">
                  <span>📈</span>
                  <p className="text-slate-600">
                    Validated market opportunities
                  </p>
                </div>

                <div className="flex gap-3">
                  <span>💰</span>
                  <p className="text-slate-600">
                    Built monetization strategy
                  </p>
                </div>

              </div>

            </div>

          </section>

          {/* Create Startup */}

          <CreateIdeaModal
            onIdeaCreated={fetchIdeas}
          />

          {/* Startup Ideas */}

          <section>

            <div className="mb-8">

              <h2 className="text-3xl font-bold text-slate-800">
                💡 Startup Ideas
              </h2>

              <p className="mt-2 text-slate-500">
                Manage every startup idea in one place.
              </p>

            </div>

            {loading ? (

              <div className="rounded-3xl bg-white p-10 text-center shadow-sm">

                <h2 className="text-xl font-semibold">
                  Loading startup ideas...
                </h2>

              </div>

            ) : ideas.length === 0 ? (

              <div className="rounded-3xl bg-white p-12 text-center shadow-sm">

                <h2 className="text-3xl font-bold">
                  🚀 Welcome to StartupLens AI
                </h2>

                <p className="mt-5 text-slate-500">
                  Create your first startup idea and generate an
                  AI-powered business plan.
                </p>

              </div>

            ) : (

              <div className="grid gap-6 lg:grid-cols-2">

                {ideas.map((idea) => (

                  <IdeaCard
  key={idea.id}
  id={idea.id}
  title={idea.title}
  problem={idea.problem}
  solution={idea.solution}
  onEdit={handleEdit}
  onDelete={handleDelete}
  onAnalyze={() => {
    document
      .getElementById("ai-analysis")
      ?.scrollIntoView({
        behavior: "smooth",
      });
  }}
/>

                ))}

              </div>

            )}

          </section>

          {/* AI Workspace */}

          <AIAnalysisPanel />

          <footer className="rounded-3xl bg-slate-900 p-8 text-center text-slate-300">

            <h2 className="text-2xl font-bold text-white">
              StartupLens AI
            </h2>

            <p className="mt-3">
              Built with Next.js • TypeScript • Prisma • PostgreSQL • Gemini AI
            </p>

          </footer>

        </main>

      </div>

    </div>

  );

}