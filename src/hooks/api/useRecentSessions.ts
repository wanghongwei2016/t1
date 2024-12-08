import { useEffect } from "react"
import useConversationListStore from "../useConversationListStore"
import useAppStore from "@/app/[locale]/useAppStore"

export default function useRecentSessions() {
  const sessions = useAppStore((state) => state.sessions)
  const { conversations, fetchConversations } = useConversationListStore()
  useEffect(() => {
    if (sessions) fetchConversations()
  }, [fetchConversations, sessions])
  return conversations
}
