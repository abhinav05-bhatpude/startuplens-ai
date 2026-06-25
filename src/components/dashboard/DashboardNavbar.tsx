export default function DashboardNavbar() {
  return (
    <header className="flex items-center justify-between border-b bg-white px-6 py-4">
      <h1 className="text-2xl font-bold">
        Dashboard
      </h1>

      <div className="flex items-center gap-4">
        <div className="h-10 w-10 rounded-full bg-gray-300" />
      </div>
    </header>
  );
}