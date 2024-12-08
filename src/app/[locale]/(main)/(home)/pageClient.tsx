"use client"
import BotCard from "@/components/BotCard"
import useLoadMore from "@/hooks/useLoadMore"
import { LoaderCircle } from "lucide-react"
import { useTranslations } from "next-intl"
import useActiveTags from "./useActiveTags"
import useBots from "./useBots"
import { Metadata } from "next"

export const runtime = "edge"

export default function Page({
  searchParams,
}: {
  searchParams: { keyword: string; gender: string; is_nsfw: number }
}) {
  const keyword = searchParams.keyword || ""
  const gender = Number(searchParams.gender)
  // const is_nsfw = Number(searchParams.is_nsfw)
  const is_nsfw = localStorage.getItem("is_nsfw") == "1" ? 1 : 0
  const activeTags = useActiveTags()
  const { bots, loadMore, hasMore, loading } = useBots({
    keyword,
    gender,
    is_nsfw,
    activeTags,
  })
  const loadMoreRef = useLoadMore(hasMore, loading, loadMore)
  const t = useTranslations("home")
  return (
    <>
      <div className="flex flex-col pb-16">
        <div className="grid grid-cols-5 gap-3 sm:grid-cols-2">
          {bots.map((bot) => (
            <BotCard key={bot.user_id} bot={bot} />
          ))}
        </div>
        {hasMore && (
          <div className="mt-5 text-center">
            <button
              onClick={loadMore}
              className="load-more inline-flex h-11 w-[208px] items-center justify-center rounded-full bg-[#8E74BA] text-center text-white"
            >
              {loading ? (
                <LoaderCircle className="animate-spin" />
              ) : (
                t("see-more")
              )}
            </button>
          </div>
        )}
        <div ref={loadMoreRef} className="h-1"></div>
      </div>
    </>
  )
}
