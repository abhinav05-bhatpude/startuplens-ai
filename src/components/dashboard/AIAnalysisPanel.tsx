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
        startupIdeaId: startupId,
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

  const sections = analysis ? parseSections(analysis) : [];

  return (
    <section className="overflow-hidden rounded-[32px] border border-slate-200 bg-white shadow-xl">

      {/* Header */}

      <div className="bg-gradient-to-r from-rose-600 via-pink-600 to-fuchsia-600 p-8 text-white">

        <h2 className="text-4xl font-bold">
          🤖 AI Analysis
        </h2>

        <p className="mt-3 text-rose-100">
          AI-powered investor analysis for your startup idea.
        </p>

      </div>

      <div className="space-y-8 p-8">

        {!analysis && (

          <button
            onClick={handleAnalyze}
            disabled={loading}
            className="w-full rounded-2xl bg-gradient-to-r from-rose-600 via-pink-600 to-fuchsia-600 py-5 text-lg font-bold text-white shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl disabled:opacity-60"
          >
            {loading
              ? "🤖 Generating AI Analysis..."
              : "🚀 Generate AI Analysis"}
          </button>

        )}

        {analysis && (

          <>

            {/* Summary */}

            <div className="rounded-3xl border border-rose-200 bg-rose-50 p-6">

              <h3 className="text-xl font-bold text-slate-900">
                🤖 Investor Analysis
              </h3>

              <p className="mt-3 leading-8 text-slate-600">
                This report evaluates your startup from an investor's
                perspective including validation, competition,
                strengths, weaknesses, opportunities and risks.
              </p>

            </div>

            {/* Top Actions */}

            <div className="flex flex-wrap gap-4">

              <button
                onClick={() =>
                  navigator.clipboard.writeText(analysis)
                }
                className="rounded-2xl bg-gradient-to-r from-rose-600 via-pink-600 to-fuchsia-600 px-6 py-3 font-semibold text-white shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
              >
                📋 Copy Report
              </button>

            </div>

            {sections.map((section) => (

              <div
                key={section.title}
                className="group rounded-[30px] border border-slate-200 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl"
              >

                <h3 className="mb-5 flex items-center gap-3 text-3xl font-bold text-slate-900">

                  {getEmoji(section.title)}

                  {section.title}

                </h3>

                <div className="mb-8 h-px bg-gradient-to-r from-rose-500 via-pink-500 to-transparent" />

                <div
                  className="
                    prose
                    prose-slate
                    max-w-none

                    prose-headings:font-bold
                    prose-headings:text-slate-900

                    prose-h1:text-4xl
                    prose-h2:text-3xl
                    prose-h3:text-2xl

                    prose-p:mb-5
                    prose-p:leading-9
                    prose-p:text-slate-700

                    prose-li:leading-9
                    prose-li:text-slate-700

                    prose-strong:text-slate-900

                    prose-table:w-full
                    prose-table:border-collapse

                    prose-th:border
                    prose-th:border-slate-300
                    prose-th:bg-slate-100
                    prose-th:p-3

                    prose-td:border
                    prose-td:border-slate-300
                    prose-td:p-3

                    prose-blockquote:border-l-4
                    prose-blockquote:border-rose-500
                    prose-blockquote:bg-rose-50
                    prose-blockquote:py-2
                    prose-blockquote:pl-5
                  "
                >
                  <ReactMarkdown remarkPlugins={[remarkGfm]}>
                    {section.content}
                  </ReactMarkdown>
                </div>

              </div>

            ))}

            <button
              onClick={() =>
                router.push(
                  `/dashboard/business-plans?id=${startupId}`
                )
              }
              className="w-full rounded-2xl bg-gradient-to-r from-rose-600 via-pink-600 to-fuchsia-600 py-5 text-lg font-bold text-white shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl"
            >
              📄 Continue to Business Plans
            </button>

          </>

        )}

      </div>

    </section>
  );
}