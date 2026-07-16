"use client";

interface IdeaCardProps {
  id: string;
  title: string;
  problem: string;
  solution: string;
  onEdit: (id: string) => void;
  onDelete: (id: string) => void;
  onAnalyze: (id: string) => void;
}

export default function IdeaCard({
  id,
  title,
  problem,
  solution,
  onEdit,
  onDelete,
  onAnalyze,
}: IdeaCardProps) {
  return (
    <div className="group overflow-hidden rounded-[30px] border border-slate-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl">

      {/* Top Gradient */}

      <div className="h-2 bg-gradient-to-r from-rose-600 via-pink-600 to-fuchsia-600" />

      <div className="p-8">

        {/* Header */}

        <div className="mb-6 flex items-start justify-between">

          <div>

            <h3 className="text-3xl font-bold text-slate-900">

              {title}

            </h3>

            <p className="mt-2 text-sm text-slate-500">
              AI Startup Idea
            </p>

          </div>

          <span className="rounded-full bg-rose-100 px-4 py-2 text-sm font-semibold text-rose-700">

            Startup

          </span>

        </div>

        {/* Problem */}

        <div className="mb-6 rounded-2xl bg-slate-50 p-5">

          <h4 className="mb-3 text-sm font-bold uppercase tracking-wide text-slate-500">

            🚨 Problem

          </h4>

          <p className="leading-8 text-slate-700">

            {problem}

          </p>

        </div>

        {/* Solution */}

        <div className="rounded-2xl bg-slate-50 p-5">

          <h4 className="mb-3 text-sm font-bold uppercase tracking-wide text-slate-500">

            💡 Solution

          </h4>

          <p className="leading-8 text-slate-700">

            {solution}

          </p>

        </div>

        {/* Buttons */}

        <div className="mt-8 grid grid-cols-3 gap-4">

          <button
            onClick={() => onAnalyze(id)}
            className="rounded-2xl bg-gradient-to-r from-rose-600 via-pink-600 to-fuchsia-600 py-3 font-semibold text-white shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
          >
            🤖 Analyze
          </button>

          <button
            onClick={() => onEdit(id)}
            className="rounded-2xl border border-slate-300 bg-white py-3 font-semibold text-slate-700 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
          >
            ✏️ Edit
          </button>

          <button
            onClick={() => onDelete(id)}
            className="rounded-2xl border border-red-200 bg-red-50 py-3 font-semibold text-red-600 transition-all duration-300 hover:-translate-y-1 hover:bg-red-600 hover:text-white"
          >
            🗑 Delete
          </button>

        </div>

      </div>

    </div>
  );
}