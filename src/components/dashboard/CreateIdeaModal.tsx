import IdeaForm from "@/components/forms/IdeaForm";

export default function CreateIdeaModal() {
  return (
    <div className="rounded-xl border bg-white p-6 shadow-sm">
      <h2 className="mb-6 text-2xl font-bold">
        Create Startup Idea
      </h2>

      <IdeaForm />
    </div>
  );
}