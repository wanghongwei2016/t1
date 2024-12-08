"use client"
import Logo from "@/components/Logo"
import { Session, User } from "@/lib/typing"
import { cn } from "@/lib/utils"
import { Link, usePathname, useRouter } from "@/navigation"
import { useTranslations } from "next-intl"
import useAppStore from "../useAppStore"
import TotalUnread from "./TotalUnread"
import UserDetails from "./UserDetails"
import Image from "next/image"
import home_1 from "@/assets/tabBar/home_1.png"
import home_2 from "@/assets/tabBar/home_2.png"
import jiahao_1 from "@/assets/tabBar/jiahao_1.png"
import jiahao_2 from "@/assets/tabBar/jiahao_2.png"
import im_1 from "@/assets/tabBar/im_1.png"
import im_2 from "@/assets/tabBar/im_2.png"
import me_1 from "@/assets/tabBar/me_1.png"
import me_2 from "@/assets/tabBar/me_2.png"
import { useCallback, useEffect, useRef, useState } from "react"
import SignDialog from "@/components/sign/SignDialog"
import lipin from "@/assets/lipin.png"

function showHeaderTop({ pathname }: { pathname: string }) {
  if (pathname == "/") return true
  if (pathname.includes("/blog/")) return true
  return false
}

export default function HeaderTop(
  {
    // user,
    // sessions,
  }: {
    // user: User | null
    // sessions: Session[]
  }
) {
  const router = useRouter()
  const [openSignDialog, setOpenSignDialog] = useState(false)
  const pathname = usePathname()
  const t = useTranslations("header")
  const { user, sessions, sm, signInDetail, fetchSignInDetail } = useAppStore(
    (state) => state
  )
  return sm && showHeaderTop({ pathname }) ? (
    <>
      <div className="f fx fcc relative mt-5 w-full px-3">
        <Logo />
        <div className="f-1"></div>
        <div className="relative">
          <Image
            src={lipin}
            alt=""
            width={40}
            height={40}
            onClick={(e) => {
              e.preventDefault()
              if (user) {
                setOpenSignDialog(true)
              } else {
                router.push("/signin")
              }
            }}
          />
          {user && !signInDetail?.activity.today_is_checked_in ? (
            <div
              className="absolute bg-red-500"
              style={{
                width: "10px",
                height: "10px",
                borderRadius: "100%",
                top: "-6px",
                right: "-6px",
              }}
            ></div>
          ) : null}
        </div>
      </div>
      {openSignDialog ? (
        <SignDialog
          close={() => {
            setOpenSignDialog(false)
            if (user) {
              fetchSignInDetail()
            }
          }}
        />
      ) : null}
    </>
  ) : null
}
