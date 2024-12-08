"use client"
import Image from "next/image"
import { MessageType, Session } from "@/lib/typing"
import { format, fromUnixTime } from "date-fns"
import { useParams } from "next/navigation"
import { cn } from "@/lib/utils"
import Badge from "@/components/Badge"
import { Link } from "@/navigation"

export default function SessionItem({
  mode,
  session,
  unreadCount,
}: {
  mode?: string
  session: Session
  unreadCount: number
}) {
  const { botId } = useParams()
  return (
    <Link
      href={
        mode == "h5"
          ? `/sessions/${session.to_user.id}`
          : `/bot/${session.to_user.id}/chat`
      }
    >
      <div
        key={session.id}
        className={cn(
          Number(botId) === session.to_user.id && "active-session",
          "flex h-[100px] space-x-4 overflow-hidden py-5 pl-6 sm:pr-6"
        )}
      >
        <Image
          src={session.to_user.avatar_url}
          alt={session.to_user.username}
          width={60}
          height={60}
          className="rounded-md"
          unoptimized
        />
        <div className="flex min-w-0 flex-1 flex-col justify-between">
          <div className="flex items-center justify-between leading-7">
            <span className="overflow-hidden text-ellipsis whitespace-nowrap text-xl font-medium">
              {session.to_user.username}
            </span>
            <span className="text-xs">
              {format(fromUnixTime(session.last_msg.updated_on), "HH:mm")}
            </span>
          </div>
          <div className="flex justify-between space-x-2">
            <span className="min-w-0 overflow-hidden text-ellipsis whitespace-nowrap leading-6">
              {session.last_msg.msg_type === MessageType.Text &&
                session.last_msg.content.Text}
              {session.last_msg.msg_type === MessageType.URL && "[image]"}
              {session.last_msg.msg_type === MessageType.AUDIO && "[audio]"}
            </span>
            <span>
              {unreadCount > 0 && (
                <Badge className="rounded">{unreadCount}</Badge>
              )}
            </span>
          </div>
        </div>
      </div>
    </Link>
  )
}
