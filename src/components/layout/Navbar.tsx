export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 bg-slate-100/80 backdrop-blur-xl">

      <div className="mx-auto max-w-7xl px-6 pt-4">

        <nav className="flex items-center justify-between rounded-full border border-slate-200 border-b-2 border-b-rose-500 bg-white/90 px-8 py-4 shadow-xl backdrop-blur-xl">

          {/* Logo */}

          <div className="flex items-center gap-3">

            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-rose-600 via-pink-600 to-fuchsia-600 text-xl shadow-lg">

              🚀

            </div>

            <div>

              <h1 className="text-2xl font-extrabold text-slate-900">
                StartupLens AI
              </h1>

              <p className="text-xs font-medium text-slate-500">
                AI Startup Validation
              </p>

            </div>

          </div>

          {/* Navigation */}

          <div className="hidden items-center gap-10 md:flex">

            <a
              href="#features"
              className="font-semibold text-slate-600 transition hover:text-rose-600"
            >
              Features
            </a>

            <a
              href="#"
              className="font-semibold text-slate-600 transition hover:text-rose-600"
            >
              Pricing
            </a>

            <a
              href="#"
              className="font-semibold text-slate-600 transition hover:text-rose-600"
            >
              About
            </a>

            <a
              href="#"
              className="font-semibold text-slate-600 transition hover:text-rose-600"
            >
              Contact
            </a>

          </div>

          {/* CTA */}

          <button className="rounded-full bg-gradient-to-r from-rose-600 via-pink-600 to-fuchsia-600 px-7 py-3 font-semibold text-white shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl">

            Get Started

          </button>

        </nav>

      </div>

    </header>
  );
}