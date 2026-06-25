import Sidebar from "@/components/dashboard/Sidebar";
import DashboardNavbar from "@/components/dashboard/DashboardNavbar";
import EmptyState from "@/components/dashboard/EmptyState";
import CreateIdeaModal from "@/components/dashboard/CreateIdeaModal";

export default function DashboardPage() {
  return (
    <div className="flex min-h-screen">
      <Sidebar />

      <div className="flex-1">
        <DashboardNavbar />

        <main className="space-y-8 p-6">
          <CreateIdeaModal />

          <EmptyState />
        </main>
      </div>
    </div>
  );
}