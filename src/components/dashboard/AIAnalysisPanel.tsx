"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

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
        startupIdeaId:startupId,
        startupName,
        problem,
        solution,
        targetAudience: "General Users",
      });

      if (!response.success) {
        alert(response.message);
        return;
      }

      setAnalysis(response.data.report);
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

              <ReactMarkdown
  remarkPlugins={[remarkGfm]}
  class="
    prose
    prose-slate
    max-w-none

    prose-headings:font-bold
    prose-headings:text-slate-900

    prose-h1:text-4xl
    prose-h2:text-3xl
    prose-h3:text-2xl

    prose-p:text-slate-700
    prose-p:leading-8


    prose-li:text-slate-700
    prose-li:leading-8

    prose-strong:text-slate-900

    prose-table:w-full
    prose-table:border-collapse

    prose-th:border
    prose-th:bg-slate-100
    prose-th:p-3

    prose-td:border
    prose-td:p-3

    prose-blockquote:border-l-4
    prose-blockquote:border-indigo-500
    prose-blockquote:pl-4
  "
>
  {section.content}
</ReactMarkdown>

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