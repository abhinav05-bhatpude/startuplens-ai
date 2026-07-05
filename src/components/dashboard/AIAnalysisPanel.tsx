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
    alert("Business plan copied!");
  }

  function handleClear() {
    setAnalysis("");
  }

  function parseSections(text: string) {
    const matches = text.matchAll(
      /^# (.+?)\n([\s\S]*?)(?=^# |\Z)/gm
    );

    return Array.from(matches).map((match) => ({
      title: match[1].trim(),
      content: match[2].trim(),
    }));
  }

  function getEmoji(title: string) {
    switch (title.toLowerCase()) {
      case "executive summary":
        return "📄";

      case "market validation":
        return "📊";

      case "competitor insights":
        return "🏆";

      case "strengths":
        return "💪";

      case "weaknesses":
        return "⚠️";

      case "opportunities":
        return "🚀";

      case "risks":
        return "🔥";

      case "mvp plan":
        return "🛠";

      case "monetization strategy":
        return "💰";

      case "90-day launch roadmap":
        return "🗓";

      default:
        return "📌";
    }
  }

  const sections = analysis
    ? parseSections(analysis)
    : [];

  return (
    <section className="rounded-3xl border border-slate-200 bg-white shadow-sm">
      <div className="rounded-t-3xl bg-gradient-to-r from-indigo-600 via-violet-600 to-sky-500 p-8 text-white">
        <h2 className="text-3xl font-bold">
          🤖 AI Business Planner
        </h2>

        <p className="mt-2 text-indigo-100">
          Generate a complete startup business
          plan powered by Gemini AI.
        </p>
      </div>

      <div className="space-y-6 p-8">
        <input
          type="text"
          placeholder="Startup Name"
          value={startupName}
          onChange={(e) =>
            setStartupName(e.target.value)
          }
          className="w-full rounded-2xl border border-slate-200 bg-slate-50 p-4 outline-none focus:border-indigo-500"
        />

        <textarea
          placeholder="Problem"
          value={problem}
          onChange={(e) =>
            setProblem(e.target.value)
          }
          className="min-h-32 w-full rounded-2xl border border-slate-200 bg-slate-50 p-4 outline-none focus:border-indigo-500"
        />

        <textarea
          placeholder="Solution"
          value={solution}
          onChange={(e) =>
            setSolution(e.target.value)
          }
          className="min-h-32 w-full rounded-2xl border border-slate-200 bg-slate-50 p-4 outline-none focus:border-indigo-500"
        />

        <input
          type="text"
          placeholder="Target Audience"
          value={targetAudience}
          onChange={(e) =>
            setTargetAudience(e.target.value)
          }
          className="w-full rounded-2xl border border-slate-200 bg-slate-50 p-4 outline-none focus:border-indigo-500"
        />

        <button
          onClick={handleAnalyze}
          disabled={loading}
          className="w-full rounded-2xl bg-gradient-to-r from-indigo-600 via-violet-600 to-sky-500 py-4 text-lg font-semibold text-white transition hover:scale-[1.01] disabled:opacity-60"
        >
          {loading
            ? "🤖 Generating Business Plan..."
            : "🚀 Generate Business Plan"}
        </button>

        {analysis && (
          <div className="mt-10 space-y-6">

            <div className="flex items-center justify-between">

              <div>
                <h2 className="text-3xl font-bold text-slate-800">
                  📑 AI Business Report
                </h2>

                <p className="mt-1 text-slate-500">
                  Complete business plan generated
                  using Gemini AI
                </p>
              </div>

              <div className="flex gap-3">
                <button
                  onClick={handleCopy}
                  className="rounded-xl bg-sky-500 px-5 py-3 font-medium text-white hover:bg-sky-600"
                >
                  📋 Copy
                </button>

                <button
                  onClick={handleClear}
                  className="rounded-xl bg-red-500 px-5 py-3 font-medium text-white hover:bg-red-600"
                >
                  🗑 Clear
                </button>
              </div>

            </div>

            {sections.map((section) => (
              <div
                key={section.title}
                className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm"
              >
                <h3 className="mb-6 text-2xl font-bold text-slate-800">
                  {getEmoji(section.title)}{" "}
                  {section.title}
                </h3>

                <div className="h-px bg-slate-200 mb-6" />

                <div className="whitespace-pre-wrap text-[17px] leading-9 text-slate-700">
                  {section.content}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}