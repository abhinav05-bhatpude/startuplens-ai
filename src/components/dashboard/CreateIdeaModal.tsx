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
  const [loading, setLoading] = useState(false);

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
    <div className="overflow-hidden rounded-[32px] border border-slate-200 bg-white shadow-xl">

      {/* Header */}

      <div className="bg-gradient-to-r from-rose-600 via-pink-600 to-fuchsia-600 p-8 text-white">

        <div className="flex items-center gap-5">

          <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-white/20 text-3xl">

            🚀

          </div>

          <div>

            <h2 className="text-3xl font-bold">
              Create Startup Idea
            </h2>

            <p className="mt-1 text-rose-100">
              Add your next billion-dollar startup.
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
            placeholder="e.g. StartupLens AI"
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
            placeholder="What problem are you solving?"
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
            placeholder="Describe your solution..."
            value={solution}
            onChange={(e) =>
              setSolution(e.target.value)
            }
            className="min-h-36 w-full rounded-2xl border border-slate-200 bg-slate-50 p-4 leading-8 outline-none transition-all focus:border-rose-500 focus:bg-white"
          />

        </div>

        <button
          type="submit"
          disabled={loading}
          className="w-full rounded-2xl bg-gradient-to-r from-rose-600 via-pink-600 to-fuchsia-600 py-4 text-lg font-semibold text-white shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-xl disabled:opacity-60 disabled:hover:translate-y-0"
        >
          {loading
            ? "🚀 Creating Startup..."
            : "🚀 Create Startup"}
        </button>

      </form>

    </div>
  );
}