"use client";

import { useRouter } from "next/navigation";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

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

      <div className="
group
rounded-3xl
border
border-slate-200
bg-white
p-8
shadow-sm
transition-all
duration-300
hover:-translate-y-1
hover:shadow-xl
">

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

            <h3 className="mb-5 flex items-center gap-3 text-2xl font-bold text-slate-900">

              {getEmoji(section.title)} {section.title}

            </h3>
            <div className="mb-6 h-px bg-gradient-to-r from-indigo-500 via-violet-500 to-transparent" />

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
  <ReactMarkdown remarkPlugins={[remarkGfm]}>
    {section.content}
  </ReactMarkdown>
</div>

          </div>

        ))}

        <button
          onClick={() =>
            router.push(
              `/dashboard/reports?id=${startupId}`
            )
          }
          className="
w-full
rounded-2xl
bg-gradient-to-r
from-indigo-600
via-violet-600
to-sky-500
py-5
text-lg
font-bold
text-white
shadow-lg
transition
hover:scale-[1.01]
"
        >
          📊 Continue to Reports
        </button>

      </div>

    </section>
  );
}