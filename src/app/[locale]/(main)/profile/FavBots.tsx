"use client"
import useLoadMore from "@/hooks/useLoadMore"
import useFavBots from "./useFavBots"
import FavBotCard from "@/components/FavBotCard"
import { LoaderCircle } from "lucide-react"
import { useTranslations } from "next-intl"
import { Bot, MoreData } from "@/lib/typing"
export default function FavBots({ moreData }: { moreData: MoreData<Bot> }) {
  const { bots, hasMore, loading, loadMore } = useFavBots(moreData)
  const loadMoreRef = useLoadMore(hasMore, loading, loadMore)

  const t = useTranslations("home")
  return (
    <div className="flex flex-col pb-16">
      <div className="grid grid-cols-2 gap-4">
        {(bots || []).map((bot) => (
          <FavBotCard key={bot.user_id} bot={bot} />
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
  )
}
