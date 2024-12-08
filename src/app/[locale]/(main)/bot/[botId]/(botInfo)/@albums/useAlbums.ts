import appStore from "@/app/[locale]/appStore"
import Store from "@/hooks/Store"
import { useApi } from "@/hooks/useApi"
import request from "@/request"
import { useParams } from "next/navigation"
import { useState } from "react"

const albumsStore = new Store(async (user_id: number) => {
  const user = appStore.getState().user?.me
  // if (!user?.vip_level) return []
  const resp = await request("/ai/view_album_list", { body: { user_id } })
  return resp.data.albums
})
export interface Album {
  url: string
  is_favorite: 0 | 1
  like_number: number
  id: number
}
export default function useAlbums() {
  const { botId }: { botId: string } = useParams()
  const albums: Album[] = useApi(albumsStore, Number(botId))
  return useState<Album[]>(albums)
}
