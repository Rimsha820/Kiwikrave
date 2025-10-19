const API_URL = import.meta.env.VITE_API_URL || '';

function buildUrl(path: string, params?: Record<string, string>): string {
  const url = new URL(path.replace(/^\//, ''), API_URL.endsWith('/') ? API_URL : API_URL + '/');
  if (params) Object.entries(params).forEach(([k, v]) => url.searchParams.set(k, v));
  return url.toString();
}

export async function fetchJson<T>(path: string, params?: Record<string, string>): Promise<T> {
  const res = await fetch(buildUrl(path, params));
  if (!res.ok) throw new Error(`CMS request failed: ${res.status}`);
  return res.json() as Promise<T>;
}


