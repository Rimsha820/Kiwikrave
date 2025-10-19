import { useEffect, useState } from 'react'
import { fetchJson } from '../lib/cms'
import type { StrapiListResponse } from '../types/cms'

export function useCollection<T>(path: string, params?: Record<string, string>) {
  const [items, setItems] = useState<T[]>([])
  const [loading, setLoading] = useState<boolean>(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    let mounted = true
    setLoading(true)
    fetchJson<StrapiListResponse<T>>(path, { populate: '*', ...params })
      .then((res) => { if (mounted) setItems(res.data.map(d => (d as any).attributes as T)) })
      .catch((e) => mounted && setError(e?.message || 'Failed to load collection'))
      .finally(() => mounted && setLoading(false))
    return () => { mounted = false }
  }, [path])

  return { items, loading, error }
}


