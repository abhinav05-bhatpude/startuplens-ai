import Sidebar from "@/components/dashboard/Sidebar";
import DashboardNavbar from "@/components/dashboard/DashboardNavbar";
import IdeaCard from "@/components/dashboard/IdeaCard";
import CreateIdeaModal from "@/components/dashboard/CreateIdeaModal";

const ideas = [
  {
    title: "AI Fitness Coach",
    description:
      "Personalized workout plans powered by AI.",
  },
  {
    title: "Startup Hiring Platform",
    description:
      "Connect startups with talented developers.",
  },
];

export default function DashboardPage() {
  return (
    <div className="flex min-h-screen">
      <Sidebar />

      <div className="flex-1">
        <DashboardNavbar />

        <main className="space-y-8 p-6">
          <CreateIdeaModal />

          <div className="grid gap-4 md:grid-cols-2">
            {ideas.map((idea) => (
              <IdeaCard
                key={idea.title}
                title={idea.title}
                description={idea.description}
              />
            ))}
          </div>
        </main>
      </div>
    </div>
  );
}