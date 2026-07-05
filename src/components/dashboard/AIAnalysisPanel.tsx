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
    try {
      await navigator.clipboard.writeText(
        analysis
      );
      alert("Analysis copied successfully!");
    } catch {
      alert("Failed to copy analysis.");
    }
  }

  function handleClear() {
    setAnalysis("");
  }

  return (
    <section className="rounded-3xl border border-slate-200 bg-white shadow-sm">
      {/* Header */}
      <div className="rounded-t-3xl bg-gradient-to-r from-indigo-600 via-violet-600 to-sky-500 p-8 text-white">
        <div className="flex items-center gap-4">
          <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-white/20 text-3xl backdrop-blur">
            🤖
          </div>

          <div>
            <h2 className="text-3xl font-bold">
              AI Business Planner
            </h2>

            <p className="mt-1 text-indigo-100">
              Validate your startup idea with
              Gemini AI.
            </p>
          </div>
        </div>
      </div>

      <div className="space-y-6 p-8">
        <div className="grid gap-6 md:grid-cols-2">
          <div>
            <label className="mb-2 block text-sm font-semibold text-slate-600">
              Startup Name
            </label>

            <input
              type="text"
              placeholder="Ex. MedScan AI"
              value={startupName}
              onChange={(e) =>
                setStartupName(e.target.value)
              }
              className="w-full rounded-2xl border border-slate-200 bg-slate-50 p-4 outline-none transition focus:border-indigo-500 focus:bg-white"
            />
          </div>

          <div>
            <label className="mb-2 block text-sm font-semibold text-slate-600">
              Target Audience
            </label>

            <input
              type="text"
              placeholder="Students, Doctors..."
              value={targetAudience}
              onChange={(e) =>
                setTargetAudience(e.target.value)
              }
              className="w-full rounded-2xl border border-slate-200 bg-slate-50 p-4 outline-none transition focus:border-indigo-500 focus:bg-white"
            />
          </div>
        </div>

        <div>
          <label className="mb-2 block text-sm font-semibold text-slate-600">
            Problem Statement
          </label>

          <textarea
            placeholder="Describe the problem..."
            value={problem}
            onChange={(e) =>
              setProblem(e.target.value)
            }
            className="min-h-36 w-full rounded-2xl border border-slate-200 bg-slate-50 p-4 outline-none transition focus:border-indigo-500 focus:bg-white"
          />
        </div>

        <div>
          <label className="mb-2 block text-sm font-semibold text-slate-600">
            Proposed Solution
          </label>

          <textarea
            placeholder="Describe your solution..."
            value={solution}
            onChange={(e) =>
              setSolution(e.target.value)
            }
            className="min-h-36 w-full rounded-2xl border border-slate-200 bg-slate-50 p-4 outline-none transition focus:border-indigo-500 focus:bg-white"
          />
        </div>

        <button
          onClick={handleAnalyze}
          disabled={loading}
          className="w-full rounded-2xl bg-gradient-to-r from-indigo-600 via-violet-600 to-sky-500 py-4 text-lg font-semibold text-white shadow-lg transition hover:scale-[1.01] disabled:cursor-not-allowed disabled:opacity-60"
        >
          {loading
            ? "🤖 Generating Business Analysis..."
            : "🚀 Analyze Startup"}
        </button>

        {analysis && (
          <div className="mt-8 rounded-3xl border border-slate-200 bg-slate-50">
            <div className="flex items-center justify-between border-b border-slate-200 p-6">
              <div>
                <h3 className="text-2xl font-bold text-slate-800">
                  📊 AI Report
                </h3>

                <p className="mt-1 text-sm text-slate-500">
                  Generated using Gemini AI
                </p>
              </div>

              <div className="flex gap-3">
                <button
                  onClick={handleCopy}
                  className="rounded-xl bg-sky-500 px-5 py-3 font-medium text-white transition hover:bg-sky-600"
                >
                  📋 Copy
                </button>

                <button
                  onClick={handleClear}
                  className="rounded-xl bg-red-500 px-5 py-3 font-medium text-white transition hover:bg-red-600"
                >
                  🗑 Clear
                </button>
              </div>
            </div>

            <div className="max-h-[650px] overflow-y-auto p-8">
              <pre className="whitespace-pre-wrap font-sans leading-8 text-slate-700">
                {analysis}
              </pre>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}