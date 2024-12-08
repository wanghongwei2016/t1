"use client"
import useLike from "@/hooks/useLike"
import { Bot } from "@/lib/typing"
import Image from "next/image"
import { ReactNode, useState } from "react"
import { Button } from "./Button"
import Tag from "./Tag"
import chatIcon from "./chat.png"
import likeIcon from "./like.png"
import share from "@/assets/share.png"
import info from "@/assets/info.png"
import unlikeIcon from "./unlike.png"
import { Link, useRouter } from "@/navigation"
import useAppStore from "@/app/[locale]/useAppStore"
import { InviteDialog } from "@/app/[locale]/(main)/award/Award"

export default function BotCard({ bot }: { bot: Bot }) {
  const { isLiked, likeNumber, like } = useLike(bot)
  const router = useRouter()
  const { user, sessions, sm } = useAppStore((state) => state)
  const [showInviteDialog, setShowInviteDialog] = useState(false)
  return (
    <>
      <Link
        key={bot.user_id}
        href={
          user
            ? sm
              ? `/sessions/${bot.user_id}`
              : `/bot/${bot.user_id}/chat`
            : `/signin`
        }
      >
        <div className="relative rounded-[21px] border border-white pb-[60px]">
          <div className="aspect-h-[331] aspect-w-[237] relative">
            <Image
              src={bot.avatar_url}
              className="rounded-[21px]"
              alt=""
              fill
              style={{
                objectFit: "cover",
              }}
              unoptimized
            />
          </div>
          <div className="absolute inset-0 rounded-b-[21px] bg-[linear-gradient(180deg,rgba(0,0,0,0)_0%,#000000_100%)]">
            <div className="absolute bottom-0 left-[1px] right-[1px] px-3 pb-3 text-white">
              <div
                className="f fx fcc fme relative -mr-3"
                onClick={(e) => {
                  e.preventDefault()
                }}
              >
                <Link href={`/bot/${bot.user_id}`}>
                  <div
                    className="f fx fcc f18 relative overflow-hidden px-2"
                    style={{
                      height: "34px",
                      borderTopLeftRadius: "100px",
                      borderBottomLeftRadius: "100px",
                      backgroundColor: "rgba(0,0,0,0.3)",
                    }}
                  >
                    <Image src={info} alt="" width={22} height={22} />
                    <span className="ml-2">Info</span>
                  </div>
                </Link>
              </div>
              <div className="text-2xl font-medium">{bot.username}</div>
              <div className="line-clamp-2 h-10 overflow-hidden text-sm font-medium">
                {bot.description}
              </div>
              <div className="flex flex-wrap gap-2 py-2 sm:hidden">
                {bot.tags.map((tag) => (
                  <Tag key={tag} className="h-[18px] font-medium">
                    {tag}
                  </Tag>
                ))}
              </div>
              <div className="flex justify-end space-x-4 text-sm">
                {/* 分享 */}
                <span className="flex items-center space-x-1">
                  <Button
                    className="px-0"
                    onClick={async (e) => {
                      e.preventDefault()
                      if (user) {
                        setShowInviteDialog(true)
                      } else {
                        router.push(`/signin`)
                      }
                    }}
                  >
                    <Image src={share} alt="" width={20} height={20} />
                  </Button>
                </span>
                {/* 点赞 */}
                <span className="flex items-center space-x-1">
                  <Button
                    className="px-0"
                    onClick={async (e) => {
                      e.preventDefault()
                      if (user) {
                        like(bot.user_id)
                      } else {
                        router.push(`/signin`)
                      }
                    }}
                  >
                    <Image
                      src={isLiked ? likeIcon : unlikeIcon}
                      alt=""
                      width={20}
                      height={20}
                    />
                  </Button>
                  <span>{likeNumber}</span>
                </span>
                {/* 消息数量 */}
                <span className="flex items-center space-x-1">
                  <Image
                    src={chatIcon}
                    alt=""
                    width={20}
                    height={20}
                    onClick={(e) => {
                      e.preventDefault()
                      router.push(
                        user
                          ? sm
                            ? `/sessions/${bot.user_id}`
                            : `/bot/${bot.user_id}/chat`
                          : `/signin`
                      )
                    }}
                  />
                  <span>{bot.chat_number}</span>
                </span>
              </div>
            </div>
          </div>
        </div>
      </Link>
      {showInviteDialog ? (
        <InviteDialog
          botId={bot.user_id}
          close={() => {
            setShowInviteDialog(false)
          }}
          invite_code={null}
        ></InviteDialog>
      ) : null}
    </>
  )
}

function BotAction({ children }: { children: ReactNode }) {
  return (
    <span className="flex h-8 min-w-[72px] items-center justify-between space-x-2 rounded-full border border-[#d7afff] px-2">
      {children}
    </span>
  )
}
