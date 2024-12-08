import Store from "@/hooks/Store"
import { useApi } from "@/hooks/useApi"
import request from "@/request"
import { useParams } from "next/navigation"

export default async function fetchChatSession(botId: string) {
  const result = await request("/chat/session/getOrCreate", {
    body: { user_id: botId },
  })
  return result.data.session
}

const store = new Store(fetchChatSession)

export function useChatSession() {
  const { botId }: { botId: string } = useParams()
  return useApi(store, botId)
}
