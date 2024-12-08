"use client"
import { ScrollArea } from "@/components/ScrollArea"
import useLoadMore from "@/hooks/useLoadMore"
import { Bot, ChatMessage, MessageType, MoreData, Session } from "@/lib/typing"
import Lottie from "lottie-react"
import { Loader, RotateCcw } from "lucide-react"
import { Link } from "@/navigation"
import { useTranslations } from "next-intl"
import Image from "next/image"
import { useRouter } from "@/navigation"
import { useParams } from "next/navigation"
import { useLayoutEffect, useEffect, useRef, useState } from "react"
import {
  useIdentityStore,
  IdentityButton2,
  IdentityPromptDialog,
  IdentityEditDialog,
  IdentityCenterDialog,
} from "@/components/Identity"
import useChat from "../useChat"
import BotMessage from "./BotMessage"
import autoPlayOff from "./autoPlayOff.png"
import autoPlayOn from "./autoPlayOn.png"
import sendIcon from "./send.png"
import animationData from "./waiting-message.json"
import useBotInfo from "../useBotInfo"
import { useChatSession } from "../../../fetchChatSession"
import continueIcon from "@/assets/continue.png"
import share from "@/assets/share.png"
import { InviteDialog } from "@/app/[locale]/(main)/award/Award"
import { send } from "@/lib/chat"
import request from "@/request"
import up from "@/assets/up.png"
import useAppStore from "@/app/[locale]/useAppStore"
import AlbumDialog from "@/app/[locale]/(main)/bot/[botId]/(botInfo)/@albums/AlbumDialog"
import { Album } from "@/app/[locale]/(main)/bot/[botId]/(botInfo)/@albums/useAlbums"
import { Dialog, DialogContent, DialogTrigger } from "@/components/Dialog"
import editIcon from "@/assets/edit.png"
import enter_white from "@/assets/enter_white.png"
import zuanshi from "@/assets/zuanshi.png"
import linggan from "@/assets/linggan.png"
import genText from "../genText.png"
import { globalData } from "@/lib/utils"
import {
  useDiamondProudctStore,
  useVipProudctStore,
} from "@/app/[locale]/(main)/useProudctStore"

import ddd from "@/assets/ddd.png"

// 控制横向滚动
class Roller {
  rollerRef: any
  isDragging: boolean = false
  startX: number = 0
  scrollLeft: number = 0
  mousedown(e: any) {
    e.preventDefault()
    this.isDragging = true
    if (this.rollerRef && this.rollerRef.current) {
      const container = this.rollerRef.current

      this.startX = e.pageX - container.offsetLeft
      this.scrollLeft = container.scrollLeft
    }
  }
  mousemove(e: any) {
    e.preventDefault()
    if (this.rollerRef && this.rollerRef.current) {
      const container = this.rollerRef.current
      if (!this.isDragging) return
      const x = e.pageX - container.offsetLeft
      const walk = (x - this.startX) * 2
      container.scrollLeft = this.scrollLeft - walk
    }
  }
  mouseup() {
    this.isDragging = false
  }
}

let albumLoading = false

export default function Messages({ mode }: { mode?: string }) {
  const user = useAppStore((state) => state.user)?.me
  const { sm } = useAppStore((state) => state)
  const session = useChatSession()
  const botInfo = useBotInfo()
  const { botId }: { botId: string } = useParams()
  const {
    messages,
    hasMore,
    isLoading,
    loadMore,
    sendMessage,
    restart,
    genText,
    genTextNew,
    genLinggan,
    genImage,
    genVideo,
    genVoice,
    waiting,
  } = useChat(Number(botId), session)
  // const [albums, setAlbums] = useState<any[]>([])

  const [albums, setAlbums] = useState<any[]>([])
  const router = useRouter()

  const [albumNextUrl, setAlbumNextUrl] = useState("")
  function albumLoadMore() {
    if (albumLoading) return
    if (albumNextUrl && "none" != albumNextUrl) {
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
    const isSm = window.innerWidth <= 750
    if (isSm && location.pathname.startsWith("/bot")) {
      router.replace("/sessions/" + botId)
    }
    if (!isSm && location.pathname.startsWith("/sessions")) {
      router.replace(`/bot/${botId}/chat`)
    }
  }, [])

  useEffect(() => {
    initIdentityList()
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

  const [showAlbum, setShowAlbum] = useState(true)
  const [lastIndex, setLastIndex] = useState(0)
  const [lastUpdateNo, setLastUpdateNo] = useState<number | null>(null)
  const rollerRef = useRef<HTMLDivElement>(null)
  const roller = new Roller()
  roller.rollerRef = rollerRef
  const containerRef = useRef<HTMLDivElement>(null)
  useLayoutEffect(() => {
    console.log("messages", messages)
    setTimeout(() => {
      const elem = containerRef.current?.children[1] as HTMLElement
      elem?.scrollTo({
        top: elem.scrollHeight,
        behavior: "instant",
      })
    }, 300)
  }, [lastUpdateNo, waiting])
  useEffect(() => {
    for (let i = messages.length - 1; i >= 0; i--) {
      if (
        messages[i].user_id === Number(botId) &&
        messages[i].msg_type == MessageType.Text
      ) {
        setLastIndex(i)
        console.log("lastIndex", lastIndex, messages[i], messages.length)
        break
      }
    }
    setLastUpdateNo(
      messages.length > 0 ? messages[messages.length - 1].updated_on : null
    )
  }, [messages])
  useEffect(() => {
    request("/ai/view_album_list", { body: { user_id: Number(botId) } }).then(
      (res) => {
        setAlbums(res.data.albums || [])
      }
    )
  }, [])
  const loadMoreRef = useLoadMore(hasMore, isLoading, loadMore)
  const t = useTranslations("chat")
  const tt = useTranslations()
  const tReset = useTranslations()
  const tLinggan = useTranslations("linggan")
  const tSignin = useTranslations("signinConfirm")
  const [restartDialog, setRestartDialog] = useState(false)
  const [showLingGanPopover, setShowLingGanPopover] = useState(false)
  const toggleVip = useVipProudctStore((state) => state.toggle)
  const [autoPlay, setAutoPlay] = useState(() => {
    try {
      return JSON.parse(localStorage.getItem("autoPlay") ?? "true")
    } catch {
      return true
    }
  })
  // let lastIndex = null
  // for (let i = messages.length - 1; i >= 0; i--) {
  //   if (messages[i].user_id === Number(botId) && messages[i].msg_type == MessageType.Text) {
  //     lastIndex = i
  //     break
  //   }
  // }
  const inputRef = useRef<HTMLInputElement>(null)
  const {
    identityStep,
    identityList,
    currentIdentity,
    selectedIdentity,
    initIdentityList,
    setIdentityStep,
    setCurrentIdentity,
  } = useIdentityStore()

  useEffect(() => {
    setCurrentIdentity(session.identity)
    console.log("ttt session", session)
  }, [])

  const [showInviteDialog, setShowInviteDialog] = useState(false)
  return (
    <>
      <div className="flex min-h-0 min-w-0 flex-1 flex-col">
        <div
          className={
            sm
              ? "relative mx-auto flex min-h-0 min-w-0 flex-1 flex-col overflow-hidden rounded-2xl border border-[#635677] bg-[#ffffff1a] pb-3 text-white"
              : "relative mx-auto flex min-h-0 min-w-0 flex-1 flex-col overflow-hidden rounded-2xl border border-[#635677] bg-[#ffffff1a] pb-6 text-white"
          }
          style={{ maxWidth: "800px" }}
        >
          <div className="relative flex items-center justify-between border-black px-4 pt-3">
            <span className="flex items-center space-x-5">
              <Link href={`/bot/${botId}`}>
                <Image
                  src={botInfo.avatar_url}
                  alt=""
                  width={52}
                  height={52}
                  className="rounded-lg"
                  unoptimized
                />
              </Link>
              <span>{botInfo.username}</span>
            </span>
            <div className="flex items-center space-x-2">
              {/* 分享 */}
              <span className="hm flex items-center space-x-1 px-1">
                <Image
                  src={share}
                  alt=""
                  width={20}
                  height={20}
                  onClick={async (e) => {
                    e.preventDefault()
                    setShowInviteDialog(true)
                  }}
                />
              </span>
              <Dialog
                open={restartDialog}
                onOpenChange={(open) => setRestartDialog(open)}
              >
                <DialogTrigger>
                  <RotateCcw className="cursor-pointer" />
                </DialogTrigger>
                <DialogContent>
                  <div
                    className="f fy oh relative border bg-[#1a1a1a] p-5 text-white"
                    style={{ width: "300px", borderRadius: "10px" }}
                  >
                    <div className="f fx fcc relative">
                      {tReset("resetConfirm")}
                    </div>
                    <div className="f fx fcc fma relative mt-5" style={{}}>
                      <button onClick={() => setRestartDialog(false)}>
                        {tSignin("cancel")}
                      </button>
                      <button
                        onClick={() => {
                          restart()
                          setRestartDialog(false)
                        }}
                      >
                        {tSignin("confirm")}
                      </button>
                    </div>
                  </div>
                </DialogContent>
              </Dialog>
              <Image
                className="cursor-pointer"
                onClick={() => {
                  localStorage.setItem("autoPlay", JSON.stringify(!autoPlay))
                  setAutoPlay(!autoPlay)
                }}
                src={autoPlay ? autoPlayOn : autoPlayOff}
                alt=""
                width={28}
                height={28}
              />
              {mode == "h5" ? (
                <Image
                  className="cursor-pointer"
                  onClick={() => {
                    localStorage.setItem("autoPlay", JSON.stringify(!autoPlay))
                    setAutoPlay(!autoPlay)
                  }}
                  src={ddd}
                  alt=""
                  width={28}
                  height={28}
                />
              ) : null}
            </div>
            {albums && albums.length && (
              <div className="f fy fcc absolute left-0 right-0 top-full z-10">
                <div
                  ref={rollerRef}
                  className="hm roll relative w-full bg-[#1a1a1a] pt-3"
                  style={{
                    height: showAlbum ? "137px" : "0px",
                    transition: "all 0.35s linear",
                  }}
                  onMouseDown={(e) => {
                    roller?.mousedown(e)
                  }}
                  onMouseMove={(e) => {
                    roller?.mousemove(e)
                  }}
                  onMouseLeave={() => {
                    roller?.mouseup()
                  }}
                  onMouseUp={() => {
                    roller?.mouseup()
                  }}
                  onScroll={(event) => {
                    console.log("ttt", event)
                    const target = event.target as HTMLDivElement
                    const scrollWidth = target.scrollWidth
                    const scrollLeft = target.scrollLeft
                    const clientWidth = target.clientWidth
                    console.log("ttt", {
                      scrollWidth,
                      scrollLeft,
                      clientWidth,
                    })
                    if (scrollWidth - scrollLeft - clientWidth < 100) {
                      // 距离底部小于100px时，加载下一页数据
                      console.log("ttt", 1)
                      albumLoadMore()
                    }
                  }}
                >
                  {albums.map((album, i) => (
                    <AlbumDialog
                      key={i}
                      albums={albums}
                      start={i}
                      setAlbums={setAlbums}
                    >
                      <Image
                        key={album.id}
                        className="roll-item oh border-radius mr-2"
                        src={album.cover_img}
                        alt=""
                        width={117}
                        height={117}
                        unoptimized
                      />
                    </AlbumDialog>
                  ))}
                </div>
                <div
                  className="hm f fx fcc fmc relative mt-1 bg-[#5B5959]"
                  style={{
                    width: "91px",
                    height: "24px",
                    borderRadius: "0px 0px 10px 10px",
                    marginTop: showAlbum ? "0px" : "-25px",
                  }}
                  onClick={() => {
                    setShowAlbum(!showAlbum)
                  }}
                >
                  <Image
                    className={showAlbum ? "" : "rotate-180"}
                    src={up}
                    alt=""
                    width={18}
                    height={18}
                  />
                </div>
              </div>
            )}
          </div>
          <ScrollArea
            className="min-h-0 flex-1 space-y-4 px-6 pb-6"
            ref={containerRef}
          >
            <div className="flex flex-col space-y-6">
              <div ref={loadMoreRef} className="h-1"></div>
              {isLoading && (
                <Loader className="m-auto animate-spin" size={32} />
              )}
              {messages.map((message, i) => {
                const { user_id, content, msg_type } = message
                return user_id === Number(botId) ? (
                  <BotMessage
                    key={i}
                    waiting={waiting}
                    autoPlay={autoPlay && (message.received ?? false)}
                    genVoice={genVoice}
                    genImage={genImage}
                    genText={genText}
                    genVideo={genVideo}
                    action={i > 0 && i == lastIndex}
                    message={message}
                    isLast={i === lastIndex && !waiting}
                    continueFn={() => {
                      // send(Number(botId), {})
                      // sendMessage('')
                      genTextNew()
                    }}
                  />
                ) : msg_type === MessageType.Text && !content.Text ? null : (
                  <div className="flex">
                    <div className="flex-1" />
                    <div
                      className="user-message flex max-w-[66.67%] space-x-4 self-end rounded-l-2xl rounded-tr-3xl p-4"
                      key={i}
                    >
                      {msg_type === MessageType.Text && (
                        <div>
                          <span>{content.Text}</span>
                        </div>
                      )}
                    </div>
                  </div>
                )
              })}
              {waiting && (
                <div className="flex h-6 w-20 items-center rounded-2xl rounded-bl-none bg-[#333] p-4">
                  <Lottie
                    animationData={animationData}
                    loop
                    className="overflow-hidden [&_svg]:!scale-[2]"
                  />
                </div>
              )}
            </div>
          </ScrollArea>
          <div className="f fx fcc f12 relative px-6">
            {!waiting ? (
              <div
                className="f fx fcc f12 hm relative w-fit bg-[#333] px-3 py-2"
                style={{ borderRadius: "17px" }}
                onClick={() => {
                  if (waiting) return
                  genTextNew()
                }}
              >
                <Image
                  src={continueIcon}
                  alt="continue"
                  width={14}
                  height={14}
                />
                <span className="ml-2 text-white">{tt("continue")}</span>
              </div>
            ) : null}
            <IdentityButton2></IdentityButton2>
          </div>
          <form
            onSubmit={(e: React.FormEvent<HTMLFormElement>) => {
              e.preventDefault()
              if (!currentIdentity) {
                setIdentityStep(1)
                return
              }
              const messageValue = e.currentTarget.message.value.trim()
              if (messageValue) {
                sendMessage(messageValue)
              }
              e.currentTarget.message.value = ""
            }}
          >
            <div className="flex space-x-6 px-6 pt-2">
              <input
                ref={inputRef}
                disabled={messages.length === 0}
                name="message"
                className="h-14 flex-1 resize-none rounded-full bg-[#555] px-8 py-2 focus:outline-none"
                placeholder={t("message")}
                autoComplete="off"
              />
              <div className="hover-container relative">
                <div
                  className="f fy fcc fmc hm relative"
                  style={{ marginTop: "8px" }}
                  onClick={(e) => {
                    if (showLingGanPopover) {
                      setShowLingGanPopover(false)
                      return
                    }

                    // if (user?.vip_level) {
                    setShowLingGanPopover(true)

                    // } else {
                    // toggleVip()
                    // }
                  }}
                >
                  <Image src={linggan} alt="" height={30} />
                  <div className="f fx fcc fmc relative">
                    <Image src={zuanshi} alt="" width={13} height={9} />
                    <span className="f8 ml-1">15</span>
                  </div>
                </div>
                {!showLingGanPopover ? (
                  <div
                    className="hover-popover absolute bottom-full left-1/2 z-50 -translate-x-1/2"
                    style={{ width: "132px" }}
                  >
                    <div
                      className="f fx fcc fmc oh f12 relative mb-3 bg-black p-2 text-white"
                      style={{ borderRadius: "42px" }}
                    >
                      <Image src={linggan} alt="" height={22} />
                      <div className="f-1 relative ml-1">
                        {tLinggan("space_1")}
                      </div>
                    </div>
                  </div>
                ) : null}
                {showLingGanPopover && !sm ? (
                  <LingGanPopover
                    // show={showLingGanPopover}
                    genLinggan={() =>
                      genLinggan(messages[messages.length - 1].msg_seq)
                    }
                    close={() => setShowLingGanPopover(false)}
                    edit={(recommendReplie) => {
                      setShowLingGanPopover(false)
                      inputRef.current!.value = recommendReplie
                    }}
                    send={(recommendReplie) => {
                      setShowLingGanPopover(false)
                      sendMessage(recommendReplie)
                    }}
                  />
                ) : null}
              </div>
              <button>
                <Image src={sendIcon} alt="" width={36} height={36} />
              </button>
            </div>
          </form>
          {showLingGanPopover && sm ? (
            <LingGanPopover
              // show={showLingGanPopover}
              genLinggan={() =>
                genLinggan(messages[messages.length - 1].msg_seq)
              }
              close={() => setShowLingGanPopover(false)}
              edit={(recommendReplie) => {
                setShowLingGanPopover(false)
                inputRef.current!.value = recommendReplie
              }}
              send={(recommendReplie) => {
                setShowLingGanPopover(false)
                sendMessage(recommendReplie)
              }}
            />
          ) : null}
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
      {identityStep == 1 ? <IdentityPromptDialog /> : null}
      {identityStep == 2 ? <IdentityEditDialog botInfo={botInfo} /> : null}
      {identityStep == 3 ? (
        <IdentityCenterDialog
          botId={botId}
          restart={restart}
        ></IdentityCenterDialog>
      ) : null}
      {identityStep == 5 && selectedIdentity ? (
        <IdentityEditDialog botInfo={botInfo} />
      ) : null}
    </>
  )
}

let loadingTimeout: any

function LingGanPopover({
  // show,
  close,
  edit,
  send,
  genLinggan,
  mode,
}: {
  // show: boolean
  close: () => void
  edit: (recommendReplie: string) => void
  send: (recommendReplie: string) => void
  genLinggan: () => void
  mode?: string
}) {
  const { sm } = useAppStore((state) => state)
  const tLinggan = useTranslations("linggan")
  const [recommendReplies, setRecommendReplies] = useState<string[]>([])
  const [activeIndex, setActiveIndex] = useState(0)
  const [loading, setLoading] = useState(false)

  function updateLoading(value: boolean) {
    clearTimeout(loadingTimeout)
    setLoading(value)
    if (value) {
      loadingTimeout = setTimeout(() => {
        setLoading(false)
      }, 1000 * 15)
    }
  }

  useEffect(() => {
    globalData.setRecommendReplies = setRecommendReplies
    globalData.updateLoading = updateLoading
    genLinggan()
    updateLoading(true)
  }, [])

  useEffect(() => {
    const listener = (event: any) => {
      if (!event.target.closest(".LingGanPopover")) {
        close()
      }
    }
    document.addEventListener("click", listener)
    return () => {
      document.removeEventListener("click", listener)
    }
  }, [])

  return (
    <div
      className={
        sm
          ? "f12 LingGanPopover relative"
          : "f12 LingGanPopover absolute bottom-full z-50 pb-4"
      }
      style={{ right: sm ? "" : "-70px" }}
    >
      <div
        className="oh f fy relative bg-black p-3"
        style={{ width: sm ? "" : "282px", borderRadius: "17px" }}
      >
        {!loading ? (
          <div className="f fx fcc fme relative py-1">
            <Image
              className="hm LingGanPopover"
              src={genText}
              alt=""
              height={18}
              onClick={() => {
                if (!loading) {
                  setActiveIndex(0)
                  setRecommendReplies([])
                  genLinggan()
                  updateLoading(true)
                }
              }}
            ></Image>
            <div
              className="hm LingGanPopover relative ml-1"
              onClick={() => {
                if (!loading) {
                  setActiveIndex(0)
                  setRecommendReplies([])
                  genLinggan()
                  updateLoading(true)
                }
              }}
            >
              {tLinggan("space_2")}
            </div>
          </div>
        ) : null}
        {loading && (
          <div className="flex h-6 w-20 items-center rounded-2xl rounded-bl-none bg-[#333] p-4">
            <Lottie
              animationData={animationData}
              loop
              className="overflow-hidden [&_svg]:!scale-[2]"
            />
          </div>
        )}
        <div
          className="scrollbar relative"
          style={{ overflowY: "auto", maxHeight: "260px" }}
        >
          {(recommendReplies || []).map((recommendReplie, index) => (
            <div
              key={index}
              className="oh border-radius relative mt-2 border px-3 py-4"
              style={{ borderColor: activeIndex == index ? "#E151BE" : "" }}
              onClick={() => setActiveIndex(index)}
            >
              {recommendReplie}
            </div>
          ))}
        </div>
        {!loading ? (
          <div className="f fx fcc fmc relative mt-2">
            <div
              className="f-1 f fx fcc fmc hm relative bg-[#555555]"
              style={{ borderRadius: "14px", height: "28px" }}
              onClick={() => {
                edit(recommendReplies[activeIndex])
              }}
            >
              <Image
                className="mr-1"
                src={editIcon}
                alt=""
                width={18}
                height={18}
              ></Image>
              {tLinggan("space_3")}
            </div>
            <div
              className="f-1 f fx fcc fmc hm relative ml-3"
              style={{
                borderRadius: "14px",
                height: "28px",
                background:
                  "linear-gradient( 155deg, #9D4AE0 0%, #E151BE 100%)",
              }}
              onClick={() => {
                send(recommendReplies[activeIndex])
              }}
            >
              <Image
                className="mr-1"
                src={enter_white}
                alt=""
                width={18}
                height={18}
              ></Image>
              {tLinggan("space_4")}
            </div>
          </div>
        ) : null}
      </div>
    </div>
  )
}
