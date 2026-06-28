export async function getIdeas() {
  const response = await fetch("/api/ideas");

  if (!response.ok) {
    throw new Error("Failed to fetch startup ideas");
  }

  return response.json();
}

export async function createIdea(data: {
  title: string;
  problem: string;
  solution: string;
  userId: string;
}) {
  const response = await fetch("/api/ideas", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });

  if (!response.ok) {
    throw new Error("Failed to create startup idea");
  }

  return response.json();
}

export async function getIdea(id: string) {
  const response = await fetch(`/api/ideas/${id}`);

  if (!response.ok) {
    throw new Error("Failed to fetch startup idea");
  }

  return response.json();
}

export async function updateIdea(
  id: string,
  data: {
    title: string;
    problem: string;
    solution: string;
  }
) {
  const response = await fetch(`/api/ideas/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });

  if (!response.ok) {
    throw new Error("Failed to update startup idea");
  }

  return response.json();
}

export async function deleteIdea(id: string) {
  const response = await fetch(`/api/ideas/${id}`, {
    method: "DELETE",
  });

  if (!response.ok) {
    throw new Error("Failed to delete startup idea");
  }

  return response.json();
}