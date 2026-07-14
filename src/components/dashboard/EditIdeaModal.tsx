"use client";

import { useEffect, useState } from "react";
import { updateIdea } from "@/lib/api";

interface EditIdeaModalProps {
  id: string;
  initialTitle: string;
  initialProblem: string;
  initialSolution: string;
  onClose: () => void;
  onIdeaUpdated: () => void;
}

export default function EditIdeaModal({
  id,
  initialTitle,
  initialProblem,
  initialSolution,
  onClose,
  onIdeaUpdated,
}: EditIdeaModalProps) {
  const [title, setTitle] = useState("");
  const [problem, setProblem] = useState("");
  const [solution, setSolution] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setTitle(initialTitle);
    setProblem(initialProblem);
    setSolution(initialSolution);
  }, [initialTitle, initialProblem, initialSolution]);

  async function handleSubmit(
    e: React.FormEvent<HTMLFormElement>
  ) {
    e.preventDefault();

    try {
      setLoading(true);

      await updateIdea(id, {
        title,
        problem,
        solution,
      });

      onIdeaUpdated();
      onClose();
    } catch (error) {
      console.error(error);
      alert("Failed to update startup idea.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-6">

      <div className="w-full max-w-2xl rounded-3xl bg-white p-8 shadow-2xl">

        <div className="mb-8 flex items-center gap-4">

          <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-r from-indigo-600 via-violet-600 to-sky-500 text-2xl text-white">
            ✏️
          </div>

          <div>

            <h2 className="text-3xl font-bold text-slate-900">
              Edit Startup Idea
            </h2>

            <p className="text-slate-500">
              Update your startup information.
            </p>

          </div>

        </div>

        <form
          onSubmit={handleSubmit}
          className="space-y-6"
        >

          <input
            type="text"
            value={title}
            onChange={(e) =>
              setTitle(e.target.value)
            }
            className="w-full rounded-2xl border border-slate-200 bg-slate-50 p-4 outline-none transition focus:border-indigo-500"
          />

          <textarea
            value={problem}
            onChange={(e) =>
              setProblem(e.target.value)
            }
            className="min-h-32 w-full rounded-2xl border border-slate-200 bg-slate-50 p-4 outline-none transition focus:border-indigo-500"
          />

          <textarea
            value={solution}
            onChange={(e) =>
              setSolution(e.target.value)
            }
            className="min-h-32 w-full rounded-2xl border border-slate-200 bg-slate-50 p-4 outline-none transition focus:border-indigo-500"
          />

          <div className="flex gap-4">

            <button
              type="button"
              onClick={onClose}
              className="flex-1 rounded-2xl border border-slate-300 py-4 font-semibold"
            >
              Cancel
            </button>

            <button
              type="submit"
              disabled={loading}
              className="flex-1 rounded-2xl bg-gradient-to-r from-indigo-600 via-violet-600 to-sky-500 py-4 font-semibold text-white"
            >
              {loading
                ? "Saving..."
                : "Save Changes"}
            </button>

          </div>

        </form>

      </div>

    </div>
  );
}