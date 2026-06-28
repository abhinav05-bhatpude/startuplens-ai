"use client";

import { useEffect, useState } from "react";

import Sidebar from "@/components/dashboard/Sidebar";
import DashboardNavbar from "@/components/dashboard/DashboardNavbar";
import IdeaCard from "@/components/dashboard/IdeaCard";
import CreateIdeaModal from "@/components/dashboard/CreateIdeaModal";

import { getIdeas } from "@/lib/api";

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

  return (
    <div className="flex min-h-screen">
      <Sidebar />

      <div className="flex-1">
        <DashboardNavbar />

        <main className="space-y-8 p-6">
          <CreateIdeaModal
            onIdeaCreated={fetchIdeas}
          />

          {ideas.length === 0 ? (
            <p className="text-gray-500">
              No startup ideas found.
            </p>
          ) : (
            <div className="grid gap-4 md:grid-cols-2">
              {ideas.map((idea) => (
                <IdeaCard
                  key={idea.id}
                  title={idea.title}
                  description={idea.problem}
                />
              ))}
            </div>
          )}
        </main>
      </div>
    </div>
  );
}