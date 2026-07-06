export async function getIdeas() {
  const response = await fetch("/api/ideas");

  const data = await response.json();

  return {
    ok: response.ok,
    status: response.status,
    data,
  };
}

export async function createIdea(data: {
  title: string;
  problem: string;
  solution: string;
}) {
  const response = await fetch("/api/ideas", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });

  return response.json();
}

export async function analyzeStartup(data: {
  startupName: string;
  problem: string;
  solution: string;
  targetAudience: string;
}) {
  const response = await fetch("/api/analyze", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });

  return response.json();
}

export async function getIdea(id: string) {
  const response = await fetch(`/api/ideas/${id}`);

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

  return response.json();
}

export async function deleteIdea(id: string) {
  const response = await fetch(`/api/ideas/${id}`, {
    method: "DELETE",
  });

  if (response.status === 204) {
    return { success: true };
  }

  const text = await response.text();

  return text ? JSON.parse(text) : { success: response.ok };
}