export default function Sidebar() {
  return (
    <aside className="hidden w-64 border-r bg-white p-6 md:block">
      <h2 className="mb-8 text-2xl font-bold">
        StartupLens
      </h2>

      <nav className="flex flex-col gap-4">
        <button className="rounded-lg bg-black px-4 py-2 text-white">
          Dashboard
        </button>

        <button className="rounded-lg px-4 py-2 text-left hover:bg-gray-100">
          Ideas
        </button>

        <button className="rounded-lg px-4 py-2 text-left hover:bg-gray-100">
          Reports
        </button>
      </nav>
    </aside>
  );
}