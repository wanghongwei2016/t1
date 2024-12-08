"use client"
import { Button } from "@/components/Button"
import Tag from "@/components/Tag"
import useLike from "@/hooks/useLike"
import { cn } from "@/lib/utils"
import { Link } from "@/navigation"
import { useTranslations } from "next-intl"
import Image from "next/image"
import { useParams } from "next/navigation"
import chatIcon from "./chat.png"
import useBotInfo from "../chat/useBotInfo"
import likedIcon from "./liked.png"
import unlikedIcon from "./unliked.png"

export function BotInfo() {
  const botInfo = useBotInfo()
  const { botId } = useParams()
  const { isLiked, likeNumber, like } = useLike(botInfo)
  const t = useTranslations("bot")
  return (
    <div className="my-4 flex flex-col space-y-8 px-12">
      <div className="flex items-center justify-between space-x-4">
        <div className="flex min-w-0 flex-1 items-center space-x-10 overflow-hidden">
          <Image
            className="rounded-full"
            src={botInfo.avatar_url}
            alt=""
            width={160}
            height={160}
            unoptimized
          />
          <div className="flex min-w-0 flex-col justify-around space-y-3 py-6">
            <div className="overflow-hidden text-ellipsis whitespace-nowrap text-3xl font-medium">
              {botInfo.username}
            </div>
            <div className="flex flex-wrap gap-2">
              {botInfo.tags.map((tag: string) => (
                <Tag key={tag}>{tag}</Tag>
              ))}
            </div>
          </div>
        </div>
        <div className="flex space-x-4">
          <span className="flex flex-col items-center">
            <Image
              className="cursor-pointer"
              onClick={() => {
                like(botInfo.user_id)
              }}
              src={isLiked ? likedIcon : unlikedIcon}
              alt=""
              width={66}
              height={66}
            />
            {likeNumber}
          </span>
          <span className="flex flex-col items-center">
            <Link href={`/bot/${botId}/chat`}>
              <Image src={chatIcon} alt="" width={66} height={66} />
            </Link>
            {botInfo.chat_number || 0}
          </span>
        </div>
      </div>
      <div className="flex space-x-7">
        <Button
          className={cn(
            "h-[60px] flex-1 rounded-full text-xl leading-[60px]",
            isLiked
              ? "bg-[#3E3F41]"
              : "bg-[linear-gradient(155deg,#9D4AE0_0%,#E151BE_100%)]"
          )}
          onClick={() => {
            like(botInfo.user_id)
          }}
        >
          {isLiked ? t("unfollow") : t("add-to-my-likes")}
        </Button>
        <Link
          href={`/bot/${botId}/chat`}
          className="inline-block flex-1 rounded-full bg-[linear-gradient(155deg,#9D4AE0_0%,#E151BE_100%)] text-center text-xl leading-[60px]"
        >
          {t("start-chatting")}
        </Link>
      </div>
      <div className="space-y-4">
        <span className="text-3xl">{t("description")}</span>
        <div className="rounded-3xl border border-white p-8 text-xl font-light">
          {botInfo.description}
        </div>
      </div>
    </div>
  )
}
