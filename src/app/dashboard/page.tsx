"use client";

import { useEffect, useState } from "react";

import Sidebar from "@/components/dashboard/Sidebar";
import DashboardNavbar from "@/components/dashboard/DashboardNavbar";
import IdeaCard from "@/components/dashboard/IdeaCard";
import CreateIdeaModal from "@/components/dashboard/CreateIdeaModal";

import { getIdeas, deleteIdea } from "@/lib/api";

interface StartupIdea {
  id: string;
  title: string;
  problem: string;
  solution: string;
}

export default function DashboardPage() {
  const [ideas, setIdeas] = useState<StartupIdea[]>([]);

  async function fetchIdeas() {
    try {
      const response = await getIdeas();
      setIdeas(response.data);
    } catch (error) {
      console.error(error);
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
          <CreateIdeaModal onIdeaCreated={fetchIdeas} />

          {ideas.length === 0 ? (
            <p className="text-gray-500">
              No startup ideas found.
            </p>
          ) : (
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
          )}
        </main>
      </div>
    </div>
  );
}