"use client"
import { useEffect, useRef } from "react"

export default function useLoadMore(
  hasMore: boolean,
  loading: boolean,
  loadMore: () => void
) {
  const loadMoreRef = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    if (!loadMoreRef.current) return

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && hasMore && !loading) {
          loadMore()
        }
      },
      { threshold: 1 }
    )
    const element = loadMoreRef.current

    observer.observe(element)

    return () => {
      if (element) {
        observer.unobserve(element)
      }
    }
  }, [hasMore, loading, loadMore])
  return loadMoreRef
}
