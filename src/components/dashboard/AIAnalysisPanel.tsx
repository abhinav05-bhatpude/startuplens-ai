"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

import { analyzeStartup } from "@/lib/api";

interface AIAnalysisPanelProps {
  startupId: string;
  startupName: string;
  problem: string;
  solution: string;
}

export default function AIAnalysisPanel({
  startupId,
  startupName,
  problem,
  solution,
}: AIAnalysisPanelProps) {
  const router = useRouter();

  const [loading, setLoading] = useState(false);

  const [analysis, setAnalysis] = useState("");

  async function handleAnalyze() {
    try {
      setLoading(true);

      const response = await analyzeStartup({
        startupName,
        problem,
        solution,
        targetAudience: "General Users",
      });

      if (!response.success) {
        alert(response.message);
        return;
      }

      setAnalysis(response.data);
    } catch (error) {
      console.error(error);
      alert("Failed to generate AI analysis.");
    } finally {
      setLoading(false);
    }
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

      case "startup scorecard":
        return "⭐";

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

      default:
        return "📌";
    }
  }

  const sections = analysis
    ? parseSections(analysis)
    : [];

  return (
    <section className="rounded-3xl bg-white shadow-sm">

      <div className="border-b border-slate-200 p-8">

        <h2 className="text-3xl font-bold">
          🤖 AI Analysis
        </h2>

        <p className="mt-2 text-slate-500">
          Generate an investor-grade analysis for this startup.
        </p>

      </div>

      <div className="space-y-8 p-8">

        {!analysis && (

          <button
            onClick={handleAnalyze}
            disabled={loading}
            className="w-full rounded-2xl bg-gradient-to-r from-indigo-600 via-violet-600 to-sky-500 py-5 text-lg font-bold text-white transition hover:scale-[1.01]"
          >
            {loading
              ? "🤖 Generating AI Analysis..."
              : "🚀 Generate AI Analysis"}
          </button>

        )}

        {analysis && (

          <>

            <div className="flex items-center justify-between">

              <div>

                <h2 className="text-3xl font-bold">
                  📑 AI Report
                </h2>

                <p className="text-slate-500">
                  Generated successfully.
                </p>

              </div>

              <button
                onClick={() =>
                  navigator.clipboard.writeText(analysis)
                }
                className="rounded-xl bg-sky-500 px-5 py-3 font-semibold text-white"
              >
                📋 Copy
              </button>

            </div>

            {sections.map((section) => (

              <div
                key={section.title}
                className="rounded-3xl border border-slate-200 p-8"
              >

                <h3 className="mb-6 text-2xl font-bold">

                  {getEmoji(section.title)} {section.title}

                </h3>

                <div className="whitespace-pre-wrap leading-8 text-slate-700">

                  {section.content}

                </div>

              </div>

            ))}

            <button
              onClick={() =>
                router.push(
                  `/dashboard/business-plans?id=${startupId}`
                )
              }
              className="w-full rounded-2xl bg-emerald-600 py-5 text-lg font-bold text-white"
            >
              ➜ Continue to Business Plans
            </button>

          </>

        )}

      </div>

    </section>
  );
}