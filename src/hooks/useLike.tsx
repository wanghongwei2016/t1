"use client"
import { useSigninConfirmStore } from "@/app/[locale]/(main)/useProudctStore"
import useAppStore from "@/app/[locale]/useAppStore"
import { Bot } from "@/lib/typing"
import { startTransition, useState } from "react"
import { likeBot } from "./actions"

export default function useLike(bot: Bot) {
  const user = useAppStore((state) => state.user)
  const [isLiked, setIsLiked] = useState(bot.is_favorite ? true : false)
  const [likeNumber, setLikeNumber] = useState(() =>
    Number(bot.like_number || bot.readable_received_like_number)
  )
  const toggle = useSigninConfirmStore((state) => state.toggle)
  const like = async (user_id: number) => {
    if (user) {
      startTransition(async () => {
        await likeBot(user_id)
        setIsLiked(!isLiked)
        setLikeNumber(likeNumber + (isLiked ? -1 : 1))
      })
    } else {
      toggle()
    }
  }
  return { isLiked, likeNumber, like }
}
