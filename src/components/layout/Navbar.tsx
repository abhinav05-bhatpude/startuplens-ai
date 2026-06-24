export default function Navbar() {
  return (
    <nav className="border-b bg-white">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <h1 className="text-2xl font-bold">
          StartupLens AI
        </h1>

        <div className="flex items-center gap-6">
          <a href="#features">Features</a>

          <button className="rounded-lg bg-black px-4 py-2 text-white">
            Get Started
          </button>
        </div>
      </div>
    </nav>
  );
}