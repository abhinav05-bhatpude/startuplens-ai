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
    console.log("Edit:", id);
  }

  async function handleDelete(id: string) {
    const confirmed = window.confirm(
      "Are you sure you want to delete this startup idea?"
    );

    if (!confirmed) return;

    try {
      await deleteIdea(id);
      fetchIdeas();
    } catch (error) {
      console.error(error);
      alert("Failed to delete startup idea.");
    }
  }

  return (
    <div className="flex min-h-screen bg-slate-50">
      <Sidebar />

      <div className="flex-1">
        <DashboardNavbar />

        <main className="space-y-10 p-8">

          {/* Welcome Hero */}

          <section className="rounded-3xl bg-gradient-to-r from-indigo-600 via-violet-600 to-sky-500 p-10 text-white shadow-xl">
            <h1 className="text-4xl font-bold">
              Build Your Next Startup with AI 🚀
            </h1>

            <p className="mt-3 max-w-3xl text-lg text-indigo-100">
              Validate ideas, generate business plans,
              analyze competitors, and launch your startup
              faster using Gemini AI.
            </p>
          </section>

          {/* Statistics */}

          <section className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">

            <div className="rounded-3xl bg-white p-7 shadow-sm">
              <p className="text-sm font-semibold uppercase tracking-wide text-slate-500">
                Startup Ideas
              </p>

              <h2 className="mt-3 text-4xl font-bold text-indigo-600">
                {ideas.length}
              </h2>
            </div>

            <div className="rounded-3xl bg-white p-7 shadow-sm">
              <p className="text-sm font-semibold uppercase tracking-wide text-slate-500">
                AI Reports
              </p>

              <h2 className="mt-3 text-4xl font-bold text-violet-600">
                0
              </h2>
            </div>

            <div className="rounded-3xl bg-white p-7 shadow-sm">
              <p className="text-sm font-semibold uppercase tracking-wide text-slate-500">
                Business Plans
              </p>

              <h2 className="mt-3 text-4xl font-bold text-sky-600">
                0
              </h2>
            </div>

            <div className="rounded-3xl bg-white p-7 shadow-sm">
              <p className="text-sm font-semibold uppercase tracking-wide text-slate-500">
                Success Rate
              </p>

              <h2 className="mt-3 text-4xl font-bold text-emerald-600">
                100%
              </h2>
            </div>

          </section>

          {/* Create Startup */}

          <CreateIdeaModal onIdeaCreated={fetchIdeas} />

          {/* Startup Ideas */}

          <section>

            <div className="mb-6 flex items-center justify-between">

              <div>

                <h2 className="text-3xl font-bold text-slate-800">
                  💡 Startup Ideas
                </h2>

                <p className="mt-2 text-slate-500">
                  Manage and validate your startup ideas.
                </p>

              </div>

            </div>

            {loading ? (
              <div className="rounded-3xl bg-white p-10 text-center shadow-sm">
                <h2 className="text-xl font-semibold">
                  Loading Startup Ideas...
                </h2>
              </div>
            ) : ideas.length === 0 ? (
              <div className="rounded-3xl bg-white p-10 text-center shadow-sm">
                <h2 className="text-2xl font-bold">
                  No Startup Ideas Yet
                </h2>

                <p className="mt-3 text-slate-500">
                  Create your first startup idea and let
                  Gemini AI validate it.
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
                  />

                ))}

              </div>
            )}

          </section>

          {/* AI Business Planner */}

          <AIAnalysisPanel />

        </main>
      </div>
    </div>
  );
}