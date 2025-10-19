import { useEffect, useState } from 'react'
import { fetchJson } from '../lib/cms'
import type { HeroContent, StrapiResponse } from '../types/cms'

export function useHero() {
  const [data, setData] = useState<HeroContent | null>(null)
  const [loading, setLoading] = useState<boolean>(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    let mounted = true
    setLoading(true)
    fetchJson<StrapiResponse<HeroContent>>('/api/hero', { populate: '*' })
      .then((res) => {
        if (!mounted) return
        setData(res.data?.attributes ?? null)
      })
      .catch((e) => mounted && setError(e?.message || 'Failed to load hero'))
      .finally(() => mounted && setLoading(false))
    return () => { mounted = false }
  }, [])

  return { data, loading, error }
}


