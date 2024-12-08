"use client"
import { usePathname, useRouter } from "@/navigation"
import { useSearchParams } from "next/navigation"
import { useCallback } from "react"

export default function useUpdateSearch() {
  const search = useSearchParams()
  const router = useRouter()
  const pathname = usePathname()
  const updateSearch = useCallback(
    (entries: Record<string, string> = {}) => {
      const nextSearch = new URLSearchParams(search)
      for (const [key, value] of Object.entries(entries)) {
        if (value === "") {
          nextSearch.delete(key)
        } else {
          nextSearch.set(key, value)
        }
      }
      router.push(`${pathname}?${nextSearch.toString()}`)
    },
    [search, router, pathname]
  )

  return updateSearch
}
