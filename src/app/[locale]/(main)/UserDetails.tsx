"use client"
import { Link } from "@/navigation"
import { useTranslations } from "next-intl"
import Image from "next/image"
import { useEffect, useState } from "react"
import useAppStore from "../useAppStore"
import request from "@/request"
import count from "./count.png"
import discord from "./discord.png"
import { useDiamondProudctStore, useVipProudctStore } from "./useProudctStore"
import useVipTitle from "./profile/useVipTitle"
import dui from "./dui.png"
import { globalData } from "@/lib/utils"
import { format, fromUnixTime } from "date-fns"

export default function UserDetails() {
  const [showVipPopover, setShowVipPopover] = useState(false)

  const [mount, setMount] = useState(false)
  useEffect(() => {
    setMount(true)
    globalData.setShowVipPopover = setShowVipPopover
  }, [])
  const user = useAppStore((state) => state.user?.me)
  console.log("====user", user)
  const toggleDiamond = useDiamondProudctStore((state) => state.toggle)
  const toggleVip = useVipProudctStore((state) => state.toggle)
  const t = useTranslations("header")
  const titles = useVipTitle()
  if (!mount) return null
  return user ? (
    <>
      {/* discord */}
      <a href="https://discord.gg/xTWXmZj3" target="_blank">
        <Image src={discord} alt="" width={35} height={35} />
      </a>
      <div className="f-1"></div>
      {/* 钻石 */}
      <span
        className="flex cursor-pointer items-center space-x-2"
        onClick={() => toggleDiamond()}
      >
        <Image src={count} alt="" width={35} height={35} />{" "}
        <span>{user.diamond}</span>
      </span>
      <div className="f-1"></div>
      <div style={{ width: "45px" }}></div>
      {/* 头像 */}
      <Link href="/profile">
        <div className="hover-container f16 relative flex items-center rounded-r-full border border-l-0 border-white pl-4 pr-2 leading-9">
          <Image
            src={user!.avatar_url}
            alt=""
            width={45}
            height={45}
            className="absolute right-full translate-x-1/4 rounded-full bg-white/50"
            unoptimized
          />
          <span
            onClick={(e) => {
              e.preventDefault()
              toggleVip()
            }}
          >
            {titles[user.vip_level]}
          </span>
          {user && <VipPopover user={user} toggleVip={toggleVip} />}
        </div>
      </Link>
    </>
  ) : (
    <Link href="/signin">{t("signin")}</Link>
  )
}

function VipPopover({ user, toggleVip }: { user: any; toggleVip: Function }) {
  const t = useTranslations("vipPopover")

  const vip_level = user.vip_level
  // const vip_level = 2

  const [productMap, setProductMap] = useState<{
    [key: number]: { descList: any[] }
  }>({})

  useEffect(() => {
    request("/order/vipProducts").then((res) => {
      const productMap: { [key: string]: { descList: any[] } } = {}
      res.data.products.forEach((product: any) => {
        const description = product.description
        product.description = JSON.parse(description)
        productMap[product.vip_level] = {
          descList: product.description.descList,
        }
      })
      setProductMap(productMap)
    })
  }, [])

  return (
    <div
      className="hover-popover absolute"
      style={{
        zIndex: "51",
        top: `100%`,
        right: `-1px`,
        marginTop: `-1px`,
      }}
      onClick={(e) => {
        e.preventDefault()
      }}
    >
      <div
        className="f14 border-radius relative mt-5 border bg-black p-5"
        style={{ width: `416px` }}
      >
        <div
          className="border-top border-left absolute top-0 scale-110 bg-black"
          style={{
            width: `20px`,
            height: `20px`,
            right: `50px`,
            marginTop: `-3px`,
            transform: `rotate(45deg) translateY(-50%)`,
          }}
        ></div>
        {/* 有效期至 剩余消息数 */}
        <div className="f fx fcc relative">
          <div className="relative">{t("space_1")}</div>
          <div className="f-3 text-primary relative text-center">
            {user && user.vip_expire_time
              ? format(fromUnixTime(user.vip_expire_time), "yyyy-MM-dd")
              : "-"}
          </div>
          <div className="relative">{t("space_2")}</div>
          <div className="f-1 text-primary relative text-right">
            {user.text_number || "-"}
          </div>
        </div>
        {/* 会员特权 */}
        <div className="f fx fcc relative mt-3">
          <div className="relative">{t("space_3")}</div>
        </div>

        {/* level 0 */}
        {!vip_level ? (
          <>
            <div className="f fx fcc f12 relative mt-2">
              <DuiImg />
              <div className="relative ml-1 mr-3">{t("space_4")}</div>
            </div>
          </>
        ) : null}

        {/* level 1 2 3 */}
        {vip_level && productMap[vip_level] ? (
          <>
            <div className="f fx fcc f12 relative mt-2">
              <DuiImg />
              <div className="relative ml-1 mr-3">
                {productMap[vip_level].descList[2].desc}
              </div>
            </div>
            <div className="f fx fcc f12 relative mt-2">
              <DuiImg />
              <div className="relative ml-1 mr-3">
                {productMap[vip_level].descList[1].desc}
              </div>
            </div>
          </>
        ) : null}

        <div className="f12 f fx fcc fmc relative mt-2">
          <div className="f-1"></div>
          {vip_level ? (
            <div
              className="f-2 hm f fx fcc fmc border-radius relative overflow-hidden border"
              style={{ height: `36px`, borderColor: `#EA55F8` }}
              onClick={() => {
                toggleVip()
              }}
            >
              {t("space_9")}
            </div>
          ) : (
            <div
              className="f-2 hm f fx fcc fmc border-radius relative overflow-hidden"
              style={{
                height: `36px`,
                background: `linear-gradient(155deg, rgba(157, 74, 224, 1), rgba(225, 81, 190, 1))`,
              }}
              onClick={() => {
                toggleVip()
              }}
            >
              {t("space_8")}
            </div>
          )}
          <div className="f-1"></div>
        </div>
      </div>
    </div>
  )
}

function DuiImg() {
  return <Image src={dui} alt="" width={20} height={20} />
}
