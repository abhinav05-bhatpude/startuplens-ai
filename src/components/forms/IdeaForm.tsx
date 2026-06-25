export default function IdeaForm() {
  return (
    <form className="space-y-4">
      <div>
        <label className="mb-2 block text-sm font-medium">
          Startup Name
        </label>

        <input
          type="text"
          placeholder="Enter startup name"
          className="w-full rounded-lg border p-3"
        />
      </div>

      <div>
        <label className="mb-2 block text-sm font-medium">
          Problem
        </label>

        <textarea
          rows={4}
          placeholder="What problem does this startup solve?"
          className="w-full rounded-lg border p-3"
        />
      </div>

      <div>
        <label className="mb-2 block text-sm font-medium">
          Solution
        </label>

        <textarea
          rows={4}
          placeholder="Describe your solution"
          className="w-full rounded-lg border p-3"
        />
      </div>

      <button
        type="submit"
        className="rounded-lg bg-black px-5 py-3 text-white"
      >
        Create Idea
      </button>
    </form>
  );
}