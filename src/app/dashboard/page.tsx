"use client";

import Sidebar from "@/components/dashboard/Sidebar";
import DashboardNavbar from "@/components/dashboard/DashboardNavbar";
import Link from "next/link";

export default function DashboardPage() {
  const cards = [
    {
      title: "Startup Ideas",
      description: "Create and manage all your startup ideas.",
      href: "/dashboard/startup-ideas",
      icon: "💡",
      color: "from-indigo-500 to-violet-500",
    },
    {
      title: "AI Analysis",
      description: "Validate your ideas using Gemini AI.",
      href: "/dashboard/ai-analysis",
      icon: "🤖",
      color: "from-violet-500 to-sky-500",
    },
    {
      title: "Business Plans",
      description: "Generate investor-ready business plans.",
      href: "/dashboard/business-plans",
      icon: "📄",
      color: "from-sky-500 to-cyan-500",
    },
    {
      title: "Reports",
      description: "View all generated startup reports.",
      href: "/dashboard/reports",
      icon: "📊",
      color: "from-emerald-500 to-green-500",
    },
  ];

  return (
    <div className="flex min-h-screen bg-slate-50">
      <Sidebar />

      <div className="flex-1">
        <DashboardNavbar />

        <main className="space-y-10 p-8">

          <section className="rounded-3xl bg-gradient-to-r from-indigo-600 via-violet-600 to-sky-500 p-10 text-white shadow-xl">

            <h1 className="text-5xl font-bold">
              🚀 StartupLens AI
            </h1>

            <p className="mt-4 max-w-3xl text-lg text-indigo-100">
              Build, validate and launch startup ideas using
              AI-powered business intelligence.
            </p>

          </section>

          <section>

            <h2 className="mb-6 text-3xl font-bold text-slate-800">
              Quick Access
            </h2>

            <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">

              {cards.map((card) => (

                <Link
                  key={card.href}
                  href={card.href}
                  className="group rounded-3xl bg-white p-7 shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
                >

                  <div
                    className={`mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-r ${card.color} text-3xl text-white`}
                  >
                    {card.icon}
                  </div>

                  <h3 className="text-2xl font-bold text-slate-800">
                    {card.title}
                  </h3>

                  <p className="mt-3 leading-7 text-slate-500">
                    {card.description}
                  </p>

                </Link>

              ))}

            </div>

          </section>

          <section className="rounded-3xl bg-white p-8 shadow-sm">

            <h2 className="text-3xl font-bold text-slate-800">
              📈 Platform Overview
            </h2>

            <ul className="mt-6 space-y-4 text-lg text-slate-600">

              <li>✅ Organize startup ideas</li>

              <li>✅ AI-powered validation</li>

              <li>✅ Generate business plans</li>

              <li>✅ Save business reports</li>

              <li>✅ Modern SaaS experience</li>

            </ul>

          </section>

        </main>
      </div>
    </div>
  );
}