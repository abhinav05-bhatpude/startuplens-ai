"use client";

import { useRouter } from "next/navigation";

interface BusinessPlanPanelProps {
  startupId: string;
  report: string;
}

export default function BusinessPlanPanel({
  startupId,
  report,
}: BusinessPlanPanelProps) {
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

  function shouldShow(title: string) {
    const sections = [
      "Executive Summary",
      "MVP Blueprint",
      "Smart Monetization Strategy",
      "Go-To-Market Strategy",
      "Founder Action Plan",
    ];

    return sections.includes(title);
  }

  function getEmoji(title: string) {
    switch (title) {
      case "Executive Summary":
        return "📄";

      case "MVP Blueprint":
        return "🛠";

      case "Smart Monetization Strategy":
        return "💰";

      case "Go-To-Market Strategy":
        return "🚀";

      case "Founder Action Plan":
        return "⭐";

      default:
        return "📌";
    }
  }

  const sections = parseSections(report).filter((section) =>
    shouldShow(section.title)
  );

  return (
    <section className="rounded-3xl bg-white shadow-sm">

      <div className="border-b border-slate-200 p-8">

        <h2 className="text-3xl font-bold">
          📄 Business Plan
        </h2>

        <p className="mt-2 text-slate-500">
          AI-generated startup execution plan.
        </p>

      </div>

      <div className="space-y-8 p-8">

        {sections.map((section) => (

          <div
            key={section.title}
            className="rounded-3xl border border-slate-200 p-8"
          >

            <h3 className="mb-5 text-2xl font-bold">

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
              `/dashboard/reports?id=${startupId}`
            )
          }
          className="w-full rounded-2xl bg-indigo-600 py-5 text-lg font-bold text-white transition hover:bg-indigo-700"
        >
          📊 Continue to Reports
        </button>

      </div>

    </section>
  );
}