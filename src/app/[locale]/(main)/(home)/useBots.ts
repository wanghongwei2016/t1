"use client"
import Store from "@/hooks/Store"
import { useApi } from "@/hooks/useApi"
import { Bot } from "@/lib/typing"
import request from "@/request"
import { useCallback, useEffect, useRef, useState } from "react"
import { makeBody } from "./fetchBots"

type BotDataResponse = {
  data: {
    users: Bot[]
  }
  meta: {
    next_url: string | null
  }
}

const fetchBots = async (
  keyword: string,
  gender: number,
  is_nsfw: number,
  ...tags: number[]
) => {
  const body: Record<string, any> = makeBody(keyword, gender, is_nsfw, tags)
  return await request<BotDataResponse>("/ai/search", {
    body: body,
  })
}

const store = new Store(fetchBots)

export default function useBots({
  keyword,
  gender,
  is_nsfw,
  activeTags,
}: {
  keyword: string
  gender: number
  is_nsfw: number
  activeTags: number[]
}) {
  const {
    data: { users },
    meta: { next_url },
  } = useApi(store, keyword, gender, is_nsfw, ...activeTags)
  const nextUrlRef = useRef(next_url)
  const [bots, setBots] = useState<Bot[]>(users)
  useEffect(() => {
    setBots(users)
    nextUrlRef.current = next_url
  }, [users, next_url])
  const [loading, setLoading] = useState(false)
  const loadMore = useCallback(async () => {
    try {
      setLoading(true)
      const { data, meta } = await request(nextUrlRef.current, {
        body: makeBody(keyword, gender, is_nsfw, activeTags),
      })
      setBots((bots) => [...bots, ...data.users])
      nextUrlRef.current = meta.next_url
    } finally {
      setLoading(false)
    }
  }, [keyword, gender, is_nsfw, activeTags])
  return {
    bots,
    loadMore,
    hasMore: nextUrlRef.current ? true : false,
    loading,
  } as const
}
