import { useCollection } from './useCollection'
import type { FeatureItem } from '../types/cms'

export function useFeatures() {
  const { items, loading, error } = useCollection<FeatureItem>('/api/feature-items', { sort: 'order:asc' })
  return { items, loading, error }
}


