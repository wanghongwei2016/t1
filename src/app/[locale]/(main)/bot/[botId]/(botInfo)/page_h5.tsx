import up from "@/assets/up.png"
import share from "@/assets/share.png"

import chat from "@/app/[locale]/(main)/bot/[botId]/(botInfo)/chat.png"
import liked from "@/app/[locale]/(main)/bot/[botId]/(botInfo)/liked.png"

import { useEffect, useState } from "react"
import useLike from "@/hooks/useLike"
import AlbumDialog from "@/app/[locale]/(main)/bot/[botId]/(botInfo)/@albums/AlbumDialog"

import { InviteDialog } from "@/app/[locale]/(main)/award/Award"

import useAppStore from "@/app/[locale]/useAppStore"
import { globalData } from "@/lib/utils"
import { Album } from "@/lib/typing"
import request from "@/request"
import { Link, usePathname, useRouter } from "@/navigation"
import Image from "next/image"
import { BotInfo } from "./BotInfo"
import { Metadata } from "next"
import { Bot } from "@/lib/typing"
import useBotInfo from "../chat/useBotInfo"

import { getSeoData } from "@/lib/utilsForServer"
import { useTranslations } from "next-intl"

export const runtime = "edge"

let albumLoading = false

export default function PageH5({
  params: { botId },
}: {
  params: { botId: string }
}) {
  // const botInfo = await fetchBotInfo(botId)
  const { user, sessions, sm } = useAppStore((state) => state)
  const [showInviteDialog, setShowInviteDialog] = useState(false)

  const botInfo = useBotInfo()

  const t = useTranslations("bot")
  const router = useRouter()

  const { isLiked, likeNumber, like } = useLike(botInfo)

  // const [botInfo, setBotInfo] = useState<{[key:string]:any}>({})
  const [albums, setAlbums] = useState<Album[]>([])

  const [albumNextUrl, setAlbumNextUrl] = useState("")

  const [scrollTop, setScrollTop] = useState(0)

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
    // request("/ai/view", { body: { user_id: botId } }).then(res => {
    //   setBotInfo(res.data.user)
    // })
    albumLoading = true
    request("/ai/view_album_list", { body: { user_id: botId } })
      .then((resp) => {
        albumLoading = false
        setAlbums(resp.data.albums || [])
        setAlbumNextUrl(resp.meta.next_url || "none")
        setTimeout(() => {
          albumLoadMore()
        }, 1000)
      })
      .catch(() => {
        albumLoading = false
      })
  }, [])

  return (
    <>
      <img
        src={botInfo.avatar_url}
        alt=""
        className="fixed left-0 right-0 top-0"
        style={{ height: "100vw" }}
      />
      <div className="f fy fixed bottom-0 left-0 right-0 top-0">
        <div
          className="f fx fcc fmb absolute left-0 right-0 top-0 z-10 px-3"
          style={{
            height: Math.max(60, 155 - scrollTop) + "px",
            backgroundColor: scrollTop < 60 ? "" : "RGBA(19, 7, 24, 1)",
          }}
        >
          <Image
            src={up}
            alt=""
            height={30}
            className="-rotate-90"
            onClick={() => {
              history.back()
            }}
          />
          {scrollTop > 60 && <div className="relative">{botInfo.username}</div>}
          <Image
            src={share}
            alt=""
            height={30}
            onClick={(e) => {
              e.preventDefault()
              setShowInviteDialog(true)
            }}
          />
        </div>

        <div
          className="f-1 oya relative pb-10"
          style={{
            paddingTop: "95px",
            marginTop: "60px",
            background: `linear-gradient(to bottom, RGBA(19, 7, 24, ${scrollTop / 60}) 0%, RGBA(19, 7, 24, 1) 30%)`,
          }}
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
            setScrollTop(scrollTop)
            if (scrollHeight - scrollTop - clientHeight < 100) {
              // 距离底部小于100px时，加载下一页数据
              console.log("ttt", 1)
              albumLoadMore()
            }
          }}
        >
          <div className="f fx fcc f22 relative mx-3">
            <span>@</span>
            <span>{botInfo.username}</span>
            <Image
              src={liked}
              alt=""
              height={30}
              onClick={() => {
                like(botInfo.user_id)
              }}
            />
          </div>

          <div className="f fx fcc f12 relative mx-3">
            {(botInfo.tags || []).map((tag: string) => (
              <span
                key={tag}
                className="oh br f fx fcc fmc relative mr-3 mt-3 px-2"
                style={{ backgroundColor: "rgba(0,0,0,0.37)" }}
              >
                {tag}
              </span>
            ))}
          </div>

          <div className="f fx fcc f16 relative mx-3 mt-5">
            <span>{t("description")}</span>
          </div>

          <div className="f fx fcc f14 oh br relative mx-3 mt-3 bg-[#534659] p-3">
            <span>{botInfo.description}</span>
          </div>

          <div className="f fx fcc relative mx-3 mt-3">
            <span>{t("album")}</span>
          </div>
          <div
            className="relative mx-3 mt-3"
            style={{
              background:
                "linear-gradient( 180deg, rgba(0,0,0,0.53) 0%, rgba(0,0,0,0) 100%)",
            }}
          >
            {albums.map((item, i) => (
              <div
                key={item.id}
                className="f fx fcc fmc relative inline-block w-1/4"
                style={{ height: "85px" }}
              >
                <AlbumDialog albums={albums} start={i} setAlbums={setAlbums}>
                  <img
                    src={item.url}
                    className="cxy oh br-sm absolute"
                    style={{ width: "90%", height: "90%" }}
                  />
                </AlbumDialog>
              </div>
            ))}
          </div>
        </div>

        <div className="f fx fcc relative mx-3 py-3">
          <div
            className="f fy fcc fmc f12 relative"
            style={{ width: "45px", height: "45px" }}
            onClick={() => {
              like(botInfo.user_id)
            }}
          >
            <Image src={liked} alt="" height={26} />
            <span>{likeNumber}</span>
          </div>
          <div
            className="f fy fcc fmc f12 relative"
            style={{ width: "45px", height: "45px" }}
            onClick={() => {
              router.push(user ? `/sessions/${botId}` : `/signin`)
            }}
          >
            <Image src={chat} alt="" height={26} />
            <span>{botInfo.chat_number || 0}</span>
          </div>

          <div
            className="f-1 btn oh br f fx fcc fmc ml-2"
            style={{ height: "45px" }}
            onClick={() => {
              //`/bot/${botId}/chat`
              router.push(`/sessions/${botId}`)
            }}
          >
            {t("start-chatting")}
          </div>
        </div>
      </div>
      {showInviteDialog ? (
        <InviteDialog
          botId={parseInt(botId)}
          close={() => {
            setShowInviteDialog(false)
          }}
          invite_code={null}
        ></InviteDialog>
      ) : null}
    </>
  )
}
