"use client";

import Link from "next/link";
import { useSession } from "next-auth/react";

export default function CTA() {
  const { status } = useSession();

  const destination =
    status === "authenticated"
      ? "/dashboard"
      : "/login";

  return (
    <section className="relative overflow-hidden bg-slate-100 py-28">

      {/* Background Glow */}
      <div className="absolute -left-32 top-0 h-[450px] w-[450px] rounded-full bg-rose-300/30 blur-[150px]" />

      <div className="absolute -right-32 bottom-0 h-[450px] w-[450px] rounded-full bg-fuchsia-300/30 blur-[150px]" />

      <div className="relative mx-auto max-w-6xl rounded-[36px] border border-slate-200 bg-white p-16 shadow-[0_30px_80px_rgba(15,23,42,0.12)]">

        {/* Icon */}

        <div className="mx-auto mb-8 flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-br from-rose-600 via-pink-600 to-fuchsia-600 text-4xl shadow-[0_20px_50px_rgba(244,63,94,0.35)]">

          🚀

        </div>

        <div className="text-center">

          <h2 className="text-5xl font-extrabold tracking-tight text-slate-900">

            Build Smarter.

            <span className="mt-2 block bg-gradient-to-r from-rose-600 via-pink-600 to-fuchsia-600 bg-clip-text text-transparent">

              Validate Before You Build.

            </span>

          </h2>

          <p className="mx-auto mt-8 max-w-3xl text-lg leading-8 text-slate-600">

            StartupLens AI helps founders validate startup ideas,
            analyze market opportunities, generate investor-ready
            business plans and launch successful startups with AI.

          </p>

          <div className="mt-12 flex flex-col items-center justify-center gap-5 sm:flex-row">

            <Link
              href={destination}
              className="rounded-2xl bg-gradient-to-r from-rose-600 via-pink-600 to-fuchsia-600 px-8 py-4 text-lg font-bold text-white shadow-[0_20px_40px_rgba(244,63,94,.35)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_30px_60px_rgba(244,63,94,.45)]"
            >
              🚀 Start Building
            </Link>

            <a
              href="#features"
              className="rounded-2xl border border-slate-300 bg-white px-8 py-4 text-lg font-semibold text-slate-700 shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
            >
              ✨ Explore Features
            </a>

          </div>

          <div className="mt-12 flex flex-wrap items-center justify-center gap-8 text-sm font-medium text-slate-600">

            <span>✨ AI Validation</span>

            <span>💰 Business Plans</span>

            <span>📈 Market Research</span>

            <span>🚀 Launch Strategy</span>

          </div>

        </div>

      </div>

    </section>
  );
}