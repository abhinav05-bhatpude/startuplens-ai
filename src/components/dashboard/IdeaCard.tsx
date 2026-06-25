interface IdeaCardProps {
  title: string;
  description: string;
}

export default function IdeaCard({
  title,
  description,
}: IdeaCardProps) {
  return (
    <div className="rounded-xl border bg-white p-6">
      <h3 className="mb-2 text-xl font-bold">
        {title}
      </h3>

      <p className="text-gray-600">
        {description}
      </p>
    </div>
  );
}