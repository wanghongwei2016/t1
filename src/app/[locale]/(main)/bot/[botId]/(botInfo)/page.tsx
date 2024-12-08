"use client"
import { Album } from "@/lib/typing"
import request from "@/request"
import { BotInfo } from "./BotInfo"
import { Metadata } from "next"
import Albums from "@/app/[locale]/(main)/bot/[botId]/(botInfo)/@albums/page"

import { getSeoData } from "@/lib/utilsForServer"
import useAppStore from "@/app/[locale]/useAppStore"
import PageH5 from "./page_h5"

export const runtime = "edge"

// export async function generateMetadata({
//   params: { locale, botId },
// }: {
//   params: { locale: string; botId: string }
// }): Promise<Metadata> {
//   return {
//     title: (await getSeoData(botId, locale)).seo_title,
//     description: (await getSeoData(botId, locale)).seo_description,
//   }
// }

// async function fetchAlbumList(user_id: string) {
//   const response: {
//     data: {
//       albums: Album[]
//     }
//   } = await request("/ai/view_album_list", { body: { user_id } })
//   return response.data.albums
// }

export default function Page({
  params: { botId },
}: {
  params: { botId: string }
}) {
  // const botInfo = await fetchBotInfo(botId)
  // const albums = await fetchAlbumList(botId)

  const { sessions, sm } = useAppStore((state) => state)
  return !sm ? (
    <>
      <div className="flex min-h-0 w-10/12 flex-1 space-x-4">
        <div className="f-1 f fx relative divide-x overflow-hidden rounded-[21px] border-[2px] border-white bg-[#5a3d5d]/[.49] py-4">
          <BotInfo />
          <Albums />
        </div>
      </div>
    </>
  ) : (
    <>
      <PageH5 params={{ botId }} />
    </>
  )
}
