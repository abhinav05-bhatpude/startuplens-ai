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
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/60 backdrop-blur-sm p-6">

      <div className="w-full max-w-2xl overflow-hidden rounded-[32px] border border-slate-200 bg-white shadow-2xl">

        {/* Header */}

        <div className="bg-gradient-to-r from-rose-600 via-pink-600 to-fuchsia-600 p-8 text-white">

          <div className="flex items-center gap-4">

            <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-white/20 text-3xl">

              ✏️

            </div>

            <div>

              <h2 className="text-3xl font-bold">
                Edit Startup Idea
              </h2>

              <p className="mt-1 text-rose-100">
                Update your startup information.
              </p>

            </div>

          </div>

        </div>

        <form
          onSubmit={handleSubmit}
          className="space-y-6 p-8"
        >

          <div>

            <label className="mb-2 block font-semibold text-slate-700">
              Startup Name
            </label>

            <input
              type="text"
              value={title}
              onChange={(e) =>
                setTitle(e.target.value)
              }
              className="w-full rounded-2xl border border-slate-200 bg-slate-50 p-4 outline-none transition-all focus:border-rose-500 focus:bg-white"
            />

          </div>

          <div>

            <label className="mb-2 block font-semibold text-slate-700">
              Problem
            </label>

            <textarea
              value={problem}
              onChange={(e) =>
                setProblem(e.target.value)
              }
              className="min-h-36 w-full rounded-2xl border border-slate-200 bg-slate-50 p-4 leading-8 outline-none transition-all focus:border-rose-500 focus:bg-white"
            />

          </div>

          <div>

            <label className="mb-2 block font-semibold text-slate-700">
              Solution
            </label>

            <textarea
              value={solution}
              onChange={(e) =>
                setSolution(e.target.value)
              }
              className="min-h-36 w-full rounded-2xl border border-slate-200 bg-slate-50 p-4 leading-8 outline-none transition-all focus:border-rose-500 focus:bg-white"
            />

          </div>

          <div className="flex gap-4 pt-2">

            <button
              type="button"
              onClick={onClose}
              className="flex-1 rounded-2xl border border-slate-300 bg-white py-4 font-semibold text-slate-700 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
            >
              Cancel
            </button>

            <button
              type="submit"
              disabled={loading}
              className="flex-1 rounded-2xl bg-gradient-to-r from-rose-600 via-pink-600 to-fuchsia-600 py-4 font-semibold text-white shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-xl disabled:opacity-60 disabled:hover:translate-y-0"
            >
              {loading
                ? "Saving Changes..."
                : "💾 Save Changes"}
            </button>

          </div>

        </form>

      </div>

    </div>
  );
}