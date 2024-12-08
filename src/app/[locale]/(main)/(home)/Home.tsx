"use client"
import Badge from "@/components/Badge"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/Carousel"
import SearchInput from "@/components/SearchInput"
import useRecentSessions from "@/hooks/api/useRecentSessions"
import { Tag } from "@/lib/typing"
import { Link } from "@/navigation"
import { useTranslations } from "next-intl"
import Image from "next/image"
import useAppStore from "../../useAppStore"
import useUpdateSearch from "../useUpdateSearch"
import TagFilters from "./TagFilters"
import recentChat from "./recent-chat.png"
import { useEffect, useState } from "react"
import tanhao from "@/assets/tanhao.png"
import { useSearchParams, useParams } from "next/navigation"

export default function Home({ tags }: { tags: Tag[] }) {
  const search = useSearchParams()
  // const isNsfw = search.get("is_nsfw") == "1" ? 1 : 0
  const isNsfw = localStorage.getItem("is_nsfw") == "1" ? 1 : 0
  const { sessions, sm } = useAppStore((state) => state)
  const recentSessions = useRecentSessions()
  const t = useTranslations("home")
  const tt = useTranslations("nsfw")
  // const [checked, setChecked] = useState(false)
  // const [isNsfw, setIsNsfw] = useState(0)
  const [showNsfwDialog, setShowNsfwDialog] = useState(false)
  const updateSearch = useUpdateSearch()
  return (
    <>
      {/* {sessions.length > 0 && (
        <Carousel opts={{ align: "start" }} className="mt-10">
          <div className="flex items-center justify-between">
            <span className="flex items-center text-xl">
              <Image
                src={recentChat}
                width={59}
                height={46}
                alt=""
                className="mr-1"
              />
              {t("continue-chatting")}
            </span>
            <div className="flex items-center space-x-5">
              <CarouselPrevious />
              <CarouselNext />
            </div>
          </div>
          <CarouselContent className="pt-6">
            {sessions.map((session) => {
              const recent = recentSessions.find(
                (r) => Number(r.userProfile.userID) === session.to_user.id
              )
              return (
                <CarouselItem
                  className="xl:basis-1/7 2xl:basis-1/8 basis-1/6"
                  key={session.id}
                >
                  <Link href={`/bot/${session.to_user.id}/chat`}>
                    <div className="group relative h-[130px] w-[130px] rounded-xl">
                      <Image
                        fill
                        style={{ objectFit: "cover" }}
                        src={session.to_user.avatar_url}
                        alt=""
                        className="rounded-xl"
                        unoptimized
                      />
                      {recent && recent.unreadCount > 0 && (
                        <span className="absolute -right-2 -top-2 z-10">
                          <Badge>{recent.unreadCount}</Badge>
                        </span>
                      )}
                      <div className="absolute bottom-3 left-0 right-0 flex flex-col px-3">
                        <span>{session.to_user.username}</span>
                      </div>
                    </div>
                  </Link>
                </CarouselItem>
              )
            })}
          </CarouselContent>
        </Carousel>
      )} */}
      <div className="my-[30px] px-[160px] sm:px-0">
        <SearchInput
          handleSearch={(value: string) => {
            updateSearch({ keyword: value })
          }}
        />
      </div>
      <TagFilters tags={tags} />
      <div className="my-5">
        {/* <label className="inline-flex cursor-pointer items-center space-x-3 text-white">
            <span>{t("not-suitable-for-work-hours")}</span>
            <Switch
              checked={checked}
              onCheckedChange={(checked) => {
                setChecked(checked)
              }}
            />
          </label> */}
        <div className="f fx fcc relative">
          <span>{tt("space_1")}</span>
          {isNsfw ? (
            <div
              className="hm f fx fcc fme relative ml-2 overflow-hidden bg-[#3288FF] px-1"
              style={{ width: "46px", height: "26px", borderRadius: "26px" }}
              onClick={() => {
                updateSearch({ t: (Date.now() % 1000) + "" })
                localStorage.setItem("is_nsfw", "0")
              }}
            >
              <span
                className="relative overflow-hidden bg-white"
                style={{ width: "20px", height: "20px", borderRadius: "20px" }}
              ></span>
            </div>
          ) : (
            <div
              className="hm f fx fcc relative ml-2 overflow-hidden bg-[#505055] px-1"
              style={{ width: "46px", height: "26px", borderRadius: "26px" }}
              onClick={() => {
                if (localStorage.getItem("nsfw") == "1") {
                  updateSearch({ t: (Date.now() % 1000) + "" })
                  localStorage.setItem("is_nsfw", "1")
                } else {
                  setShowNsfwDialog(true)
                }
              }}
            >
              <span
                className="relative overflow-hidden bg-[#D8D8D8]"
                style={{ width: "20px", height: "20px", borderRadius: "20px" }}
              ></span>
            </div>
          )}
        </div>
      </div>
      {showNsfwDialog ? (
        <NsfwDialog
          close={() => setShowNsfwDialog(false)}
          ok={() => {
            setShowNsfwDialog(false)
            updateSearch({ t: (Date.now() % 1000) + "" })
            localStorage.setItem("is_nsfw", "1")
          }}
        />
      ) : null}
    </>
  )
}

function NsfwDialog({ close, ok }: { close: Function; ok: Function }) {
  const tt = useTranslations("nsfw")
  const [inited, setInited] = useState(true)

  const [mode, setMode] = useState(1)

  return inited ? (
    <div>
      <div
        className="fixed bottom-0 left-0 right-0 top-0 z-40"
        style={{ backgroundColor: "rgba(0,0,0,.5)" }}
        onClick={() => {
          close()
        }}
      ></div>
      <div
        className="dialog f fy fma f18 fixed left-1/2 top-1/2 z-50 -translate-x-1/2 -translate-y-1/2 bg-[#333333] py-4 pl-12 pr-10"
        style={{ width: "789px" }}
      >
        <div className="f fx fcc relative">
          <Image
            className="absolute right-full top-1/2 mr-2 -translate-y-1/2"
            style={{ width: "24px", height: "24px" }}
            src={tanhao}
            width={24}
            height={24}
            alt=""
          />
          <div className="">{tt("space_2")}</div>
        </div>
        <div className="f fx fcc relative mt-3">
          <div className="relative">{tt("space_3")}</div>
        </div>
        <div className="f fx fcc fme relative mt-3">
          <span
            className="hm f fx fcc fmc relative overflow-hidden border bg-black px-2"
            style={{ borderRadius: "0.5em" }}
            onClick={() => {
              close()
            }}
          >
            {tt("space_4")}
          </span>
          <span
            className="hm f fx fcc fmc relative ml-3 overflow-hidden border bg-[#2B6FF9] px-2"
            style={{ borderRadius: "0.5em" }}
            onClick={() => {
              ok()
            }}
          >
            {tt("space_5")}
          </span>
        </div>
      </div>
    </div>
  ) : null
}
