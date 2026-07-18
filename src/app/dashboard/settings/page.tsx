"use client";

export default function SettingsPage() {
  return (
    <main className="space-y-10">

      <section className="rounded-3xl bg-gradient-to-r from-indigo-600 via-violet-600 to-sky-500 p-10 text-white shadow-xl">

        <h1 className="text-4xl font-bold">
          ⚙️ Settings
        </h1>

        <p className="mt-3 max-w-3xl text-lg text-indigo-100">
          Manage your StartupLens AI account and personalize your workspace.
        </p>

      </section>

      <section className="grid gap-6 lg:grid-cols-2">

        <div className="rounded-3xl bg-white p-8 shadow-sm">

          <h2 className="mb-6 text-2xl font-bold text-slate-800">
            👤 Profile
          </h2>

          <div className="space-y-5">

            <div>

              <label className="mb-2 block text-sm font-semibold text-slate-600">
                Full Name
              </label>

              <input
                type="text"
                value="Founder"
                readOnly
                className="w-full rounded-xl border border-slate-200 bg-slate-50 p-4"
              />

            </div>

            <div>

              <label className="mb-2 block text-sm font-semibold text-slate-600">
                Email
              </label>

              <input
                type="email"
                value="founder@startuplens.ai"
                readOnly
                className="w-full rounded-xl border border-slate-200 bg-slate-50 p-4"
              />

            </div>

          </div>

        </div>

        <div className="rounded-3xl bg-white p-8 shadow-sm">

          <h2 className="mb-6 text-2xl font-bold text-slate-800">
            🤖 AI Preferences
          </h2>

          <div className="space-y-5">

            <div className="rounded-xl bg-slate-50 p-5">

              <h3 className="font-semibold text-slate-800">
                AI Model
              </h3>

              <p className="mt-2 text-slate-500">
                Gemini 2.5 Flash
              </p>

            </div>

            <div className="rounded-xl bg-slate-50 p-5">

              <h3 className="font-semibold text-slate-800">
                Analysis Mode
              </h3>

              <p className="mt-2 text-slate-500">
                Professional Startup Consultant
              </p>

            </div>

          </div>

        </div>

      </section>

      <section className="grid gap-6 md:grid-cols-3">

        <div className="rounded-3xl bg-white p-8 text-center shadow-sm">

          <div className="mb-5 text-5xl">
            🔒
          </div>

          <h2 className="text-xl font-bold">
            Security
          </h2>

          <p className="mt-3 text-slate-500">
            Authentication powered by Auth.js
          </p>

        </div>

        <div className="rounded-3xl bg-white p-8 text-center shadow-sm">

          <div className="mb-5 text-5xl">
            🎨
          </div>

          <h2 className="text-xl font-bold">
            Appearance
          </h2>

          <p className="mt-3 text-slate-500">
            Light theme enabled
          </p>

        </div>

        <div className="rounded-3xl bg-white p-8 text-center shadow-sm">

          <div className="mb-5 text-5xl">
            🚀
          </div>

          <h2 className="text-xl font-bold">
            Version
          </h2>

          <p className="mt-3 text-slate-500">
            StartupLens AI v1.0
          </p>

        </div>

      </section>

    </main>
  );
}