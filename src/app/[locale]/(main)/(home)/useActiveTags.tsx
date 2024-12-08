"use client"
import { useSearchParams } from "next/navigation"

export default function useActiveTags() {
  const search = useSearchParams()
  return (
    search
      .get("tags")
      ?.split(",")
      .map((tag) => Number(tag)) ?? []
  )
}
