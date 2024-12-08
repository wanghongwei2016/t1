"use client"
import Image from "next/image"
import AlbumDialog from "./AlbumDialog"
import { useParams } from "next/navigation"
import useAlbums from "./useAlbums"
import expandIcon from "./expand.png"
import request from "@/request"
import { useTranslations } from "next-intl"
import { useEffect, useState } from "react"
import { Album } from "@/app/[locale]/(main)/bot/[botId]/(botInfo)/@albums/useAlbums"
import { globalData } from "@/lib/utils"

let albumLoading = false

export default function Page() {
  // const [albums, setAlbums] = useAlbums()

  const t = useTranslations("bot")

  const { botId }: { botId: string } = useParams()

  const [albums, setAlbums] = useState<Album[]>([])

  const [albumNextUrl, setAlbumNextUrl] = useState("")

  function albumLoadMore() {
    if (albumLoading) return
    if (albums.length && albumNextUrl && "none" != albumNextUrl) {
      albumLoading = true
      request(albumNextUrl, { body: { user_id: botId } })
        .then((resp) => {
          albumLoading = false
          setAlbums([...albums, ...(resp.data.albums || [])])
          setAlbumNextUrl(resp.meta.next_url || "none")
        })
        .catch(() => {
          albumLoading = false
        })
    }
  }

  globalData.albumLoadMore = () => {
    albumLoadMore()
  }

  useEffect(() => {
    albumLoading = true
    request("/ai/view_album_list", { body: { user_id: botId } })
      .then((resp) => {
        albumLoading = false
        setAlbums(resp.data.albums || [])
        setAlbumNextUrl(resp.meta.next_url || "none")
      })
      .catch(() => {
        albumLoading = false
      })
  }, [])

  return (
    <div className="2xl:min-w-[468px] f fy min-w-[390px] flex-1 space-y-5 px-11">
      <div className="flex items-center justify-between">
        <div className="text-3xl font-medium">{t("album")}</div>
        {albums.length > 0 && (
          <AlbumDialog albums={albums} setAlbums={setAlbums}>
            <div className="flex cursor-pointer items-center">
              <Image src={expandIcon} alt="" width={25} height={25} />
            </div>
          </AlbumDialog>
        )}
      </div>
      <div
        className="f-1 scrollbar relative grid grid-cols-2 gap-5 overflow-y-auto"
        onScroll={(event) => {
          // console.log('ttt', event)
          const target = event.target as HTMLDivElement
          const scrollHeight = target.scrollHeight
          const scrollTop = target.scrollTop
          const clientHeight = target.clientHeight
          console.log("ttt", {
            scrollHeight,
            scrollTop,
            clientHeight,
          })
          if (scrollHeight - scrollTop - clientHeight < 100) {
            // 距离底部小于100px时，加载下一页数据
            console.log("ttt", 1)
            albumLoadMore()
          }
        }}
      >
        {albums.map((album, i) => (
          <div key={album.id} className="relative rounded-xl">
            <AlbumDialog albums={albums} start={i} setAlbums={setAlbums}>
              <Image
                src={album.url}
                alt=""
                className="rounded-xl"
                style={{ width: "100%", height: "auto" }}
                width={500}
                height={300}
                unoptimized
              />
            </AlbumDialog>
          </div>
        ))}
      </div>
    </div>
  )
}
