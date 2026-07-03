"use client";

import { useState } from "react";

export default function AIAnalysisPanel() {
  const [startupName, setStartupName] = useState("");
  const [problem, setProblem] = useState("");
  const [solution, setSolution] = useState("");
  const [targetAudience, setTargetAudience] =
    useState("");

  const [loading] = useState(false);

  return (
    <div className="rounded-xl border bg-white p-6 shadow-sm">
      <h2 className="mb-6 text-2xl font-bold">
        🤖 AI Startup Analyzer
      </h2>

      <form className="space-y-4">
        <input
          type="text"
          placeholder="Startup Name"
          value={startupName}
          onChange={(e) =>
            setStartupName(e.target.value)
          }
          className="w-full rounded-lg border p-3"
        />

        <textarea
          placeholder="Problem"
          value={problem}
          onChange={(e) =>
            setProblem(e.target.value)
          }
          className="min-h-28 w-full rounded-lg border p-3"
        />

        <textarea
          placeholder="Solution"
          value={solution}
          onChange={(e) =>
            setSolution(e.target.value)
          }
          className="min-h-28 w-full rounded-lg border p-3"
        />

        <input
          type="text"
          placeholder="Target Audience"
          value={targetAudience}
          onChange={(e) =>
            setTargetAudience(e.target.value)
          }
          className="w-full rounded-lg border p-3"
        />

        <button
          type="button"
          disabled={loading}
          className="w-full rounded-lg bg-black py-3 font-semibold text-white transition hover:bg-gray-800 disabled:opacity-50"
        >
          {loading
            ? "Analyzing..."
            : "Analyze with AI"}
        </button>
      </form>
    </div>
  );
}