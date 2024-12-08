import request from "@/request"
import { Bot } from "@/lib/typing"

export type BotDataResponse = {
  data: {
    users: Bot[]
  }
  meta: {
    next_url: string | null
  }
}

export function makeBody(
  keyword: any,
  gender: any,
  is_nsfw: number,
  tags: number[]
) {
  const body: Record<string, any> = { limit: 15 }
  if (keyword) {
    body.keyword = keyword
  }
  if (gender) {
    body.gender = gender
  }
  if (tags.length) {
    body.tags = tags
  }
  body.is_nsfw = is_nsfw ? 1 : 0
  return body
}
