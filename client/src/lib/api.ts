// lib/api.ts
export type HttpMethod = "GET" | "POST" | "PUT" | "DELETE" | "PATCH";

interface FetchOptions extends RequestInit {
  method?: HttpMethod;
  body?: any;
  isAuth?: boolean;
}

const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:8000";

export default async function api<T>(
  endpoint: string,
  { method = "GET", isAuth = false, headers, body, ...rest }: FetchOptions = {}
): Promise<T> {
  const url = `${API_BASE_URL}${endpoint}`;
  const authToken = isAuth ? localStorage.getItem("token") : null;

  const response = await fetch(url, {
    method,
    headers: {
      "Content-Type": "application/json",
      ...(isAuth ? { Authorization: `Bearer ${authToken}` } : {}),
      ...(headers || {}),
    },
    body: body ? JSON.stringify(body) : undefined,
    ...rest,
  });

  if (!response.ok) {
    const errorDetails = await response.text();
    throw new Error(
      `API error: ${response.status} ${response.statusText} → ${errorDetails}`
    );
  }

  return response.json();
}
