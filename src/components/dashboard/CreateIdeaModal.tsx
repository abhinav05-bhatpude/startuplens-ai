"use client";

import { useState } from "react";
import { createIdea } from "@/lib/api";

export default function CreateIdeaModal() {
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
        // Temporary until Auth.js is added on Day 6
        userId: "REPLACE_WITH_USER_ID",
      });

      setTitle("");
      setProblem("");
      setSolution("");

      alert("Startup idea created successfully!");
    } catch (error) {
      console.error(error);
      alert("Failed to create startup idea.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="rounded-xl border bg-white p-6">
      <h2 className="mb-4 text-xl font-bold">
        Create Startup Idea
      </h2>

      <form
        onSubmit={handleSubmit}
        className="space-y-4"
      >
        <input
          type="text"
          placeholder="Startup Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="w-full rounded-lg border p-3"
        />

        <textarea
          placeholder="Problem"
          value={problem}
          onChange={(e) => setProblem(e.target.value)}
          className="w-full rounded-lg border p-3"
        />

        <textarea
          placeholder="Solution"
          value={solution}
          onChange={(e) => setSolution(e.target.value)}
          className="w-full rounded-lg border p-3"
        />

        <button
          type="submit"
          disabled={loading}
          className="rounded-lg bg-black px-4 py-2 text-white disabled:opacity-50"
        >
          {loading ? "Creating..." : "Create Idea"}
        </button>
      </form>
    </div>
  );
}