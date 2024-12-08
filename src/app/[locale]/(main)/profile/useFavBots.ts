import { Bot, MoreData } from "@/lib/typing"
import request from "@/request"
import { useCallback, useRef, useState } from "react"

export default function useFavBots(moreData: MoreData<Bot>) {
  const [bots, setBots] = useState<Bot[]>(moreData.data)
  const [loading, setLoading] = useState(false)
  const nextUrlRef = useRef(moreData.next_url)
  const loadMore = useCallback(async () => {
    try {
      setLoading(true)
      const { data, meta } = await request(nextUrlRef.current!)
      setBots((bots) => [...bots, ...data.users])
      nextUrlRef.current = meta.next_url
    } finally {
      setLoading(false)
    }
  }, [])
  return {
    bots,
    loadMore,
    hasMore: nextUrlRef.current ? true : false,
    loading,
  } as const
}
