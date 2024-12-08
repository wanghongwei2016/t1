import Store from "@/hooks/Store"
import { useApi } from "@/hooks/useApi"
import request from "@/request"
import { notFound, useParams } from "next/navigation"

enum Gender {
  male = 1,
  female = 2,
}

export interface BotInfo {
  avatar_url: string
  description: string
  gender: Gender
  username: string
}

const fetchBotInfo = async (user_id: number) => {
  const {
    data,
    meta: { success },
  }: {
    data: {
      user: BotInfo
    }
    meta: {
      success: boolean
      code: number
    }
  } = await request("/ai/view", { body: { user_id } })
  if (!success) {
    notFound()
  }
  return data.user
}

const store = new Store(fetchBotInfo)

export default function useBotInfo() {
  const { botId }: { botId: string } = useParams()
  const user = useApi(store, botId)
  return user
}
