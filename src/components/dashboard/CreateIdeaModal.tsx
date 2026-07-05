"use client";

import { useState } from "react";
import { createIdea } from "@/lib/api";

interface CreateIdeaModalProps {
  onIdeaCreated: () => void;
}

export default function CreateIdeaModal({
  onIdeaCreated,
}: CreateIdeaModalProps) {
  const [title, setTitle] = useState("");
  const [problem, setProblem] = useState("");
  const [solution, setSolution] = useState("");

  const [loading, setLoading] =
    useState(false);

  async function handleSubmit(
    e: React.FormEvent<HTMLFormElement>
  ) {
    e.preventDefault();

    try {
      setLoading(true);

      await createIdea({
        title,
        problem,
        solution,
      });

      setTitle("");
      setProblem("");
      setSolution("");

      onIdeaCreated();
    } catch (error) {
      console.error(error);
      alert("Failed to create startup idea.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
      <div className="mb-8 flex items-center gap-4">
        <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-r from-indigo-600 via-violet-600 to-sky-500 text-2xl text-white">
          🚀
        </div>

        <div>
          <h2 className="text-3xl font-bold text-slate-900">
            Create Startup Idea
          </h2>

          <p className="text-slate-500">
            Add your next billion-dollar idea.
          </p>
        </div>
      </div>

      <form
        onSubmit={handleSubmit}
        className="space-y-6"
      >
        <input
          type="text"
          placeholder="Startup Name"
          value={title}
          onChange={(e) =>
            setTitle(e.target.value)
          }
          className="w-full rounded-2xl border border-slate-200 bg-slate-50 p-4 outline-none transition focus:border-indigo-500 focus:bg-white"
        />

        <textarea
          placeholder="Describe the problem..."
          value={problem}
          onChange={(e) =>
            setProblem(e.target.value)
          }
          className="min-h-32 w-full rounded-2xl border border-slate-200 bg-slate-50 p-4 outline-none transition focus:border-indigo-500 focus:bg-white"
        />

        <textarea
          placeholder="Describe your solution..."
          value={solution}
          onChange={(e) =>
            setSolution(e.target.value)
          }
          className="min-h-32 w-full rounded-2xl border border-slate-200 bg-slate-50 p-4 outline-none transition focus:border-indigo-500 focus:bg-white"
        />

        <button
          type="submit"
          disabled={loading}
          className="w-full rounded-2xl bg-gradient-to-r from-indigo-600 via-violet-600 to-sky-500 py-4 text-lg font-semibold text-white shadow-lg transition hover:scale-[1.01] disabled:opacity-60"
        >
          {loading
            ? "Creating Startup..."
            : "Create Startup"}
        </button>
      </form>
    </div>
  );
}