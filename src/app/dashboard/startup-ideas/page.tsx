"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

import Sidebar from "@/components/dashboard/Sidebar";
import DashboardNavbar from "@/components/dashboard/DashboardNavbar";
import CreateIdeaModal from "@/components/dashboard/CreateIdeaModal";
import EditIdeaModal from "@/components/dashboard/EditIdeaModal";
import IdeaCard from "@/components/dashboard/IdeaCard";

import { deleteIdea, getIdeas } from "@/lib/api";

interface StartupIdea {
  id: string;
  title: string;
  problem: string;
  solution: string;
}

export default function StartupIdeasPage() {
  const router = useRouter();

  const [ideas, setIdeas] = useState<StartupIdea[]>([]);
  const [loading, setLoading] = useState(true);

  const [editingIdea, setEditingIdea] =
    useState<StartupIdea | null>(null);

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
    const selectedIdea = ideas.find(
      (idea) => idea.id === id
    );

    if (!selectedIdea) return;

    setEditingIdea(selectedIdea);
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

  function handleAnalyze(id: string) {
    router.push(`/dashboard/ai-analysis?id=${id}`);
  }

  return (
    <div className="flex min-h-screen bg-slate-50">
      <Sidebar />

      <div className="flex-1">
        <DashboardNavbar />

        <main className="space-y-10 p-8">

          <section className="rounded-3xl bg-gradient-to-r from-indigo-600 via-violet-600 to-sky-500 p-10 text-white shadow-xl">

            <h1 className="text-4xl font-bold">
              💡 Startup Ideas
            </h1>

            <p className="mt-3 max-w-3xl text-lg text-indigo-100">
              Create, organize and manage your startup ideas before validating
              them with AI.
            </p>

          </section>

          <CreateIdeaModal
            onIdeaCreated={fetchIdeas}
          />

          {editingIdea && (
            <EditIdeaModal
              id={editingIdea.id}
              initialTitle={editingIdea.title}
              initialProblem={editingIdea.problem}
              initialSolution={editingIdea.solution}
              onClose={() => setEditingIdea(null)}
              onIdeaUpdated={fetchIdeas}
            />
          )}

          <section>

            <div className="mb-6">

              <h2 className="text-3xl font-bold text-slate-800">
                🚀 Your Startup Ideas
              </h2>

              <p className="mt-2 text-slate-500">
                Edit, delete or analyze any startup idea.
              </p>

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
                  Create your first startup idea.
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
                    onAnalyze={handleAnalyze}
                  />

                ))}

              </div>

            )}

          </section>

        </main>
      </div>
    </div>
  );
}