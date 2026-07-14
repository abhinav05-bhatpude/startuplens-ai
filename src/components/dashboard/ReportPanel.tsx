"use client";

import { useRouter } from "next/navigation";

interface ReportPanelProps {
  startupId: string;
  report: string;
}

export default function ReportPanel({
  startupId,
  report,
}: ReportPanelProps) {
  const router = useRouter();

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

      case "mvp blueprint":
        return "🛠";

      case "smart monetization strategy":
        return "💰";

      case "go-to-market strategy":
        return "📢";

      case "founder action plan":
        return "👨‍💼";

      default:
        return "📌";
    }
  }

  const sections = parseSections(report);

  return (
    <section className="rounded-3xl bg-white shadow-sm">

      <div className="border-b border-slate-200 p-8">

        <h2 className="text-3xl font-bold">
          📊 Startup Report
        </h2>

        <p className="mt-2 text-slate-500">
          Complete AI generated startup report.
        </p>

      </div>

      <div className="space-y-8 p-8">

        <div className="flex gap-3">

          <button
            onClick={() =>
              navigator.clipboard.writeText(report)
            }
            className="rounded-xl bg-sky-500 px-5 py-3 font-semibold text-white"
          >
            📋 Copy Report
          </button>

          <button
            onClick={() =>
              router.push("/dashboard")
            }
            className="rounded-xl bg-slate-800 px-5 py-3 font-semibold text-white"
          >
            🏠 Dashboard
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

      </div>

    </section>
  );
}