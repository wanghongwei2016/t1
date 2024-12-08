import { Bot } from "@/lib/typing"
import request from "@/server-request"
import { notFound } from "next/navigation"

export default async function fetchBotInfo(user_id: string) {
  const {
    data,
    meta: { success },
  }: {
    data: {
      user: Bot
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
