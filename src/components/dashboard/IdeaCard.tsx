"use client";

interface IdeaCardProps {
  id: string;
  title: string;
  problem: string;
  solution: string;
  onEdit: (id: string) => void;
  onDelete: (id: string) => void;
  onAnalyze: () => void;
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
    <div className="group overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">

      <div className="h-2 bg-gradient-to-r from-indigo-600 via-violet-600 to-sky-500" />

      <div className="p-6">

        <div className="mb-6 flex items-center justify-between">

          <h3 className="text-2xl font-bold text-slate-800">
            {title}
          </h3>

          <span className="rounded-full bg-indigo-100 px-3 py-1 text-xs font-semibold text-indigo-700">
            Startup
          </span>

        </div>

        <div className="space-y-5">

          <div>

            <p className="mb-2 text-sm font-semibold uppercase tracking-wide text-slate-500">
              Problem
            </p>

            <p className="leading-7 text-slate-700">
              {problem}
            </p>

          </div>

          <div>

            <p className="mb-2 text-sm font-semibold uppercase tracking-wide text-slate-500">
              Solution
            </p>

            <p className="leading-7 text-slate-700">
              {solution}
            </p>

          </div>

        </div>

        <div className="mt-8 grid grid-cols-3 gap-3">

          <button
            onClick={onAnalyze}
            className="rounded-xl bg-gradient-to-r from-indigo-600 via-violet-600 to-sky-500 py-3 font-semibold text-white hover:opacity-90"
          >
            🤖 Analyze
          </button>

          <button
            onClick={() => onEdit(id)}
            className="rounded-xl bg-slate-100 py-3 font-semibold hover:bg-slate-200"
          >
            ✏️ Edit
          </button>

          <button
            onClick={() => onDelete(id)}
            className="rounded-xl bg-red-500 py-3 font-semibold text-white hover:bg-red-600"
          >
            🗑 Delete
          </button>

        </div>

      </div>

    </div>
  );
}