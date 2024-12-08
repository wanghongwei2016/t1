"use server"
import { redirect } from "@/navigation"
import request from "@/server-request"
import { revalidatePath } from "next/cache"
import { cookies } from "next/headers"

export async function likeBot(botId: number) {
  await request("/ai/like", { body: { user_id: botId } })
  revalidatePath(`/bot/${botId}`)
}

export async function reloadSessions() {
  revalidatePath("/[locale]/(main)/profile", "page")
}

export async function likePhoto(botId: string, photoId: number) {
  await request("/ai/like_album", { body: { media_id: photoId } })
  revalidatePath(`/bot/${botId}`)
}

export async function orderResult(order_id: string, payer_id: string) {
  await request("/order/detail", { body: { order_id, payer_id } })
  await new Promise((resolve) => setTimeout(resolve, 1000))
  revalidatePath("/[locale]/(main)", "layout")
  revalidatePath("/[locale]/(main)/profile", "page")
}

export async function updateUser(body: Record<string, any>) {
  await request("/user/update", { body })
  revalidatePath("/[locale]/(main)", "layout")
  revalidatePath("/[locale]/(main)/profile", "page")
}

export async function logout() {
  await request("/auth/logout")
  cookies().delete("session_key")
  revalidatePath("/[locale]/(main)", "layout")
  revalidatePath("/[locale]/(main)/profile", "page")
  redirect("/signin")
}
