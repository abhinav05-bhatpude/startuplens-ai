"use client";

interface IdeaCardProps {
  id: string;
  title: string;
  problem: string;
  solution: string;
  onEdit: (id: string) => void;
  onDelete: (id: string) => void;
}

export default function IdeaCard({
  id,
  title,
  problem,
  solution,
  onEdit,
  onDelete,
}: IdeaCardProps) {
  return (
    <div className="rounded-xl border bg-white p-6 shadow-sm">
      <h3 className="text-xl font-bold">
        {title}
      </h3>

      <p className="mt-3 text-gray-600">
        <span className="font-semibold">
          Problem:
        </span>{" "}
        {problem}
      </p>

      <p className="mt-2 text-gray-600">
        <span className="font-semibold">
          Solution:
        </span>{" "}
        {solution}
      </p>

      <div className="mt-6 flex gap-3">
        <button
          onClick={() => onEdit(id)}
          className="rounded-lg bg-blue-600 px-4 py-2 text-white transition hover:bg-blue-700"
        >
          Edit
        </button>

        <button
          onClick={() => onDelete(id)}
          className="rounded-lg bg-red-600 px-4 py-2 text-white transition hover:bg-red-700"
        >
          Delete
        </button>
      </div>
    </div>
  );
}