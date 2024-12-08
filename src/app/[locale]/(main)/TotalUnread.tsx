"use client"
import Badge from "@/components/Badge"
import useRecentSessions from "@/hooks/api/useRecentSessions"

export default function TotalUnread() {
  const conversations = useRecentSessions()
  const totalUnread = conversations.reduce(
    (acc, session) => acc + session.unreadCount,
    0
  )
  return (
    totalUnread > 0 && (
      <Badge className="absolute -top-3 left-full z-10 rounded-full">
        {totalUnread}
      </Badge>
    )
  )
}
