"use client"
import { ScrollArea } from "@/components/ScrollArea"
import { Info, MessagesSquare, ThumbsUp } from "lucide-react"
import Image from "next/image"
import { Bot } from "@/lib/typing"
import { ReactNode, useState } from "react"
import { useTranslations } from "next-intl"
import request from "@/request"
import likeIcon from "./like.png"
import unlikeIcon from "./unlike.png"
import { Link } from "@/navigation"

export default function FavBotCard({ bot }: { bot: Bot }) {
  const t = useTranslations("bot")
  const [isLiked, setIsLiked] = useState(bot.is_favorite ? true : false)
  const [likeNumber, setLikeNumber] = useState(() => Number(bot.like_number))
  return (
    <div className="flex h-[240px] cursor-pointer flex-col space-y-2 rounded-[21px] border-2 border-[#ed4bf7]/[.2] bg-[#d8d8d8]/[.2] pb-4 pl-5 pr-4 pt-5 text-white sm:p-2">
      <div className="flex min-h-0 flex-1 space-x-[10px] overflow-hidden">
        <Link href={`/bot/${bot.user_id}`}>
          <div className="min-h-[164px] min-w-[164px] overflow-hidden rounded-[20px]">
            <Image
              src={bot.avatar_url}
              alt=""
              width={164}
              height={164}
              unoptimized
            />
          </div>
        </Link>
        <div className="flex flex-col space-y-2">
          <span className="text-xl font-medium">{bot.username}</span>
          <ScrollArea>
            <div className="text-sm">{bot.description}</div>
          </ScrollArea>
        </div>
      </div>
      <div className="flex items-center justify-between">
        <span
          className="flex space-x-2"
          onClick={async (e) => {
            e.preventDefault()
            await request("/ai/like", { body: { user_id: bot.user_id } })
            setIsLiked(!isLiked)
            setLikeNumber(likeNumber + (isLiked ? -1 : 1))
          }}
        >
          <Image
            src={isLiked ? likeIcon : unlikeIcon}
            alt=""
            width={20}
            height={20}
          />
          <span>{likeNumber}</span>
        </span>
        <div className="flex space-x-1">
          <Link className="sm:hidden" href={`/bot/${bot.user_id}`}>
            <BotAction>
              <Info size={18} /> <span className="text-sm">{t("info")}</span>
            </BotAction>
          </Link>
          <Link href={`/bot/${bot.user_id}/chat`}>
            <BotAction>
              <MessagesSquare size={18} />
              <span className="text-sm">{bot.chat_number}</span>
            </BotAction>
          </Link>
        </div>
      </div>
    </div>
  )
}

function BotAction({ children }: { children: ReactNode }) {
  return (
    <span className="flex h-8 min-w-[72px] items-center justify-between space-x-2 rounded-full border border-[#d7afff] px-2">
      {children}
    </span>
  )
}
