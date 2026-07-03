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
    <div className="flex min-h-screen">
      <Sidebar />

      <div className="flex-1">
        <DashboardNavbar />

        <main className="space-y-8 p-6">
          <CreateIdeaModal
            onIdeaCreated={fetchIdeas}
          />

          {loading ? (
            <div className="rounded-lg border bg-white p-6 text-center">
              <p className="text-gray-500">
                Loading startup ideas...
              </p>
            </div>
          ) : ideas.length === 0 ? (
            <div className="rounded-lg border bg-white p-6 text-center">
              <h2 className="text-xl font-semibold">
                No Startup Ideas Yet
              </h2>

              <p className="mt-2 text-gray-500">
                Create your first startup idea to get
                started.
              </p>
            </div>
          ) : (
            <div>
              <h2 className="mb-4 text-2xl font-bold">
                Your Startup Ideas
              </h2>

              <div className="grid gap-4 md:grid-cols-2">
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
            </div>
          )}

          <AIAnalysisPanel />
        </main>
      </div>
    </div>
  );
}