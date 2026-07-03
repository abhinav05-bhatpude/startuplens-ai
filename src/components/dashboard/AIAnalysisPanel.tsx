"use client";

import { useState } from "react";
import { analyzeStartup } from "@/lib/api";

export default function AIAnalysisPanel() {
  const [startupName, setStartupName] = useState("");
  const [problem, setProblem] = useState("");
  const [solution, setSolution] = useState("");
  const [targetAudience, setTargetAudience] =
    useState("");

  const [loading, setLoading] = useState(false);

  const [analysis, setAnalysis] =
    useState("");

  async function handleAnalyze() {
    try {
      setLoading(true);

      const response =
        await analyzeStartup({
          startupName,
          problem,
          solution,
          targetAudience,
        });

      if (!response.success) {
        alert(response.message);
        return;
      }

      setAnalysis(response.data);
    } catch (error) {
      console.error(error);
      alert("Failed to analyze startup.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="rounded-xl border bg-white p-6 shadow-sm">
      <h2 className="mb-6 text-2xl font-bold">
        🤖 AI Startup Analyzer
      </h2>

      <div className="space-y-4">
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
          onClick={handleAnalyze}
          disabled={loading}
          className="w-full rounded-lg bg-black py-3 font-semibold text-white disabled:opacity-50"
        >
          {loading
            ? "Analyzing..."
            : "Analyze with AI"}
        </button>

        {analysis && (
          <div className="mt-6 rounded-lg border bg-gray-50 p-4">
            <h3 className="mb-2 font-semibold">
              AI Response Received ✅
            </h3>

            <p className="text-sm text-gray-600">
              Analysis generated successfully.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}