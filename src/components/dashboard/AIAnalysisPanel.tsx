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
  const [analysis, setAnalysis] = useState("");

  async function handleAnalyze() {
    try {
      setLoading(true);

      const response = await analyzeStartup({
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

  async function handleCopy() {
    await navigator.clipboard.writeText(analysis);
    alert("Analysis copied to clipboard!");
  }

  function handleClear() {
    setAnalysis("");
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
          className="w-full rounded-lg bg-black py-3 font-semibold text-white transition hover:bg-gray-800 disabled:cursor-not-allowed disabled:opacity-50"
        >
          {loading
            ? "🤖 Gemini is analyzing..."
            : "🚀 Analyze with AI"}
        </button>

        {analysis && (
          <div className="mt-8 rounded-xl border bg-gray-50 p-6">
            <div className="mb-4 flex items-center justify-between">
              <h3 className="text-xl font-bold">
                📊 AI Startup Analysis
              </h3>

              <div className="flex gap-2">
                <button
                  onClick={handleCopy}
                  className="rounded-lg bg-blue-600 px-4 py-2 text-sm text-white hover:bg-blue-700"
                >
                  📋 Copy
                </button>

                <button
                  onClick={handleClear}
                  className="rounded-lg bg-red-600 px-4 py-2 text-sm text-white hover:bg-red-700"
                >
                  🗑️ Clear
                </button>
              </div>
            </div>

            <div className="max-h-[500px] overflow-y-auto rounded-lg border bg-white p-5">
              <pre className="whitespace-pre-wrap font-sans text-sm leading-7">
                {analysis}
              </pre>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}