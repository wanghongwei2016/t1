"use client"
import Logo from "@/components/Logo"
import { Session, User } from "@/lib/typing"
import { cn } from "@/lib/utils"
import { Link, usePathname, useRouter } from "@/navigation"
import { useTranslations } from "next-intl"
import useAppStore from "../useAppStore"
import TotalUnread from "./TotalUnread"
import UserDetails from "./UserDetails"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { useParams } from "next/navigation"
import request from "@/request"
import SignDialog from "@/components/sign/SignDialog"
import { useCallback, useEffect, useRef, useState } from "react"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/DropdownMenu"

async function fetchUser() {
  const result: { data: { me: User } } = await request("/user/me")
  return result.data && result.data.me
}

export default function Header(
  {
    // user,
    // sessions,
  }: {
    // user: User | null
    // sessions: Session[]
  }
) {
  const [openSignDialog, setOpenSignDialog] = useState(false)
  const { user, setUser, fetchSessions } = useAppStore((state) => state)
  const router = useRouter()
  const locale: string = useParams().locale + ""
  const pathname = usePathname()
  const t = useTranslations("header")
  const tt = useTranslations("dailyCheckIn")
  const ttt = useTranslations("task")
  const locales: Record<string, string> = {
    en: "English",
    "ja-JP": "日本語",
    "ko-KR": "한국어",
    "ru-RU": "Русский",
    "fr-FR": "Français",
    "de-DE": "Deutsch",
    "es-ES": "Español",
    ar: "العربية",
    fil: "Filipino",
    "hi-IN": "हिन्दी",
    "id-ID": "Bahasa Indonesia",
    "it-IT": "Italiano",
    "pl-PL": "Polski",
    "pt-PT": "Português",
    "zh-TW": "繁體中文",
  }

  const [todayIsCheckedIn, setTodayIsCheckedIn] = useState(true)
  useEffect(() => {
    if (user) {
      const fetchData = async () => {
        const res = await request("/activity/signInDetail")
        setTodayIsCheckedIn(res.data.activity.today_is_checked_in)
      }
      fetchData()
    }
  }, [])

  return (
    <>
      <header className="flex w-10/12 items-center justify-between py-4 pl-2 text-white backdrop-blur-md sm:pl-1">
        <div className="flex items-center leading-6">
          <Logo />
          <div className="flex items-center space-x-12 sm:hidden">
            <Link href="/" className={cn(pathname === "/" && "active-link")}>
              <span>{t("home")}</span>
            </Link>
            {/* <Link
            href="/diary"
            className={cn(pathname === "/diary" && "active-link")}
          >
            <span>{t("diary")}</span>
          </Link> */}
            <ConversationLink />
            <Link
              href={user ? "/profile" : "/signin"}
              className={cn(pathname === "/profile" && "active-link")}
            >
              <span>{t("profile")}</span>
            </Link>
            <Link
              href=""
              onClick={(e) => {
                e.preventDefault()
                if (user) {
                  setOpenSignDialog(true)
                } else {
                  router.push("/signin")
                }
              }}
            >
              <span>
                {tt("header")}
                <span className="relative">
                  {user && !todayIsCheckedIn ? (
                    <div
                      className="absolute bg-red-500"
                      style={{
                        width: "10px",
                        height: "10px",
                        borderRadius: "100%",
                        top: "-10px",
                        right: "-10px",
                      }}
                    ></div>
                  ) : null}
                </span>
              </span>
            </Link>
            <Link
              href=""
              className={cn(pathname === "/award" && "active-link")}
              onClick={(e) => {
                e.preventDefault()
                if (user) {
                  router.push("/award")
                } else {
                  router.push("/signin")
                }
              }}
            >
              <span>{ttt("space_101")}</span>
            </Link>
          </div>
        </div>
        <div className="flex items-center space-x-10 sm:hidden">
          <DropdownMenu>
            <DropdownMenuTrigger>
              <span className="flex cursor-pointer rounded-full border border-white py-1 pl-5 pr-2">
                {locales[locale]} <ChevronRight />
              </span>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="bg-black text-white">
              {Object.keys(locales).map((key) => (
                <DropdownMenuItem
                  key={key}
                  className="cursor-pointer"
                  onClick={() => {
                    router.push(pathname, { locale: key })
                    // router.push('/' + key)
                    window.location.replace("/" + key)
                  }}
                >
                  {locales[key]}
                </DropdownMenuItem>
              ))}
              {/* <DropdownMenuItem
              className="cursor-pointer"
              onClick={() => {
                router.push(pathname, { locale: "en" })
              }}
            >
              English
            </DropdownMenuItem>
            <DropdownMenuItem
              className="cursor-pointer"
              onClick={() => {
                router.push(pathname, { locale: "zh-TW" })
              }}
            >
              繁体中文
            </DropdownMenuItem> */}
            </DropdownMenuContent>
          </DropdownMenu>
          <UserDetails />
        </div>
      </header>
      {openSignDialog ? (
        <SignDialog
          close={() => {
            setOpenSignDialog(false)
            if (user) {
              fetchUser().then((me) =>
                setUser({ me, session_key: user.session_key })
              )
              const fetchData = async () => {
                const res = await request("/activity/signInDetail")
                setTodayIsCheckedIn(res.data.activity.today_is_checked_in)
              }
              fetchData()
            }
          }}
        ></SignDialog>
      ) : null}
    </>
  )
}

function ConversationLink() {
  const t = useTranslations("header")
  const pathname = usePathname()
  const { user, sessions } = useAppStore((state) => ({
    user: state.user,
    sessions: state.sessions,
  }))
  return (
    <Link
      href={
        user
          ? sessions.length > 0
            ? `/bot/${sessions[0].to_user.id}/chat`
            : "/"
          : "/signin"
      }
    >
      <span className="relative">
        <span className={cn(pathname.startsWith("/bot") && "active-link")}>
          {t("conversation")}
        </span>
        {user && <TotalUnread />}
      </span>
    </Link>
  )
}
