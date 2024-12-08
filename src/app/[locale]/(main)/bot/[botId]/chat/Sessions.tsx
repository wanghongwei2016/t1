"use client"

import useRecentSessions from "@/hooks/api/useRecentSessions"
import SessionItem from "./SessionItem"
// import { ScrollArea } from "@/components/ScrollArea"
import request from "@/request"
import useAppStore from "@/app/[locale]/useAppStore"
import { useLayoutEffect, useRef, useState, useEffect } from "react"
import Image, { StaticImageData } from "next/image"
// import up from "@/assets/up.png"
import left2 from "@/assets/left2.png"

let initialOpen = false

let loading = false

export default function Sessions({ mode }: { mode?: string }) {
  const [open, setOpen] = useState(mode == "h5" || initialOpen)
  const recentSessions = useRecentSessions()
  // const { sessions, fetchSessions, sm } = useAppStore((state) => state)
  const { sm } = useAppStore((state) => state)
  const [sessions, setSessions] = useState<any[]>([])
  const [nextUrl, setNextUrl] = useState<string | null>(null)
  useEffect(() => {
    loading = true
    request("/chat/session/list", { body: {} }).then((resp) => {
      setSessions(resp.data.session || [])
      setNextUrl(resp.meta.next_url || "")
      loading = false
    })
  }, [])
  function next() {
    if (loading || !nextUrl || !sessions || !sessions.length) return
    loading = true
    request(nextUrl, { body: {} }).then((resp) => {
      setSessions([...sessions, ...resp.data.session])
      setNextUrl(resp.meta.next_url || "")
      loading = false
    })
  }
  // useEffect(() => {
  //   fetchSessions()
  // }, [fetchSessions])
  useEffect(() => {
    initialOpen = open
  }, [open])

  return (
    <div
      className="f fy relative h-full"
      style={{
        width: sm ? "" : open ? "318px" : "60px",
        transform: "all 0.35s linear",
      }}
    >
      {/* <div
        className={
          open
            ? "absolute left-full top-1/2 hidden bg-[#5B5959]"
            : "f fx fcc fmc absolute left-0 top-1/2 bg-[#5B5959]"
        }
        style={{
          width: "20px",
          height: "80px",
          borderRadius: "0px 10px 10px 0px",
        }}
        onClick={() => {
          setOpen(!open)
        }}
      >
        <Image
          className={open ? "-rotate-90" : "rotate-90"}
          src={up}
          alt=""
          width={16}
          height={16}
        />
      </div> */}
      <div className="f fx fcc fme relative px-1 py-3 sm:hidden">
        <div
          className="f fx fcc fmc relative bg-[#3B3A3A]"
          style={{ width: "55px", height: "55px", borderRadius: "10px" }}
          onClick={() => {
            setOpen(!open)
          }}
        >
          <Image
            className={open ? "hm" : "hm rotate-180"}
            src={left2}
            alt=""
            width={28}
            height={28}
          ></Image>
        </div>
      </div>
      {open ? (
        <div
          className="oya scrollbar min-h-0 w-[318px] flex-1 sm:w-full"
          style={{ transform: "all 0.35s linear" }}
          onScroll={(event) => {
            const target = event.target as HTMLDivElement
            const scrollHeight = target.scrollHeight
            const scrollTop = target.scrollTop
            const clientHeight = target.clientHeight
            if (scrollHeight - scrollTop - clientHeight < 100) {
              // 距离底部小于100px时，加载下一页数据
              next()
            }
          }}
        >
          <div className="flex min-h-0 min-w-0 flex-col items-stretch">
            {sessions.map((session) => (
              <SessionItem
                key={session.id}
                mode={mode}
                session={session}
                unreadCount={
                  recentSessions.find(
                    (r) => Number(r.userProfile.userID) === session.to_user.id
                  )?.unreadCount ?? 0
                }
              />
            ))}
          </div>
        </div>
      ) : null}
    </div>
  )
}
