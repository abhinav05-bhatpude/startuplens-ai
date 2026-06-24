const features = [
  {
    title: "AI Validation",
    description:
      "Analyze startup potential instantly.",
  },
  {
    title: "MVP Planning",
    description:
      "Generate MVP recommendations.",
  },
  {
    title: "Monetization",
    description:
      "Discover profitable business models.",
  },
];

export default function Features() {
  return (
    <section
      id="features"
      className="py-24"
    >
      <div className="mx-auto grid max-w-6xl gap-6 px-6 md:grid-cols-3">
        {features.map((feature) => (
          <div
            key={feature.title}
            className="rounded-xl border p-6"
          >
            <h3 className="mb-3 text-xl font-bold">
              {feature.title}
            </h3>

            <p className="text-gray-600">
              {feature.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}